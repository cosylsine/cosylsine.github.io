import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const baseURL = process.env.QA_URL || 'http://127.0.0.1:4321';
const executablePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true });
const captures = [];
async function checkLanguage(page, language) {
  const chinese = language === 'zh-CN';
  assert.equal(await page.locator('html').getAttribute('lang'), language);
  assert.deepEqual(await page.locator('h2').allInnerTexts(), chinese
    ? ['论文发表', '教育经历', '荣誉奖励']
    : ['Publications', 'Education', 'Honors']);
  assert.equal(await page.locator('.bio a').innerText(), chinese ? '张梅山教授' : 'Prof. Meishan Zhang');
  assert.ok((await page.locator('.education').innerText()).includes(chinese ? '计算机科学与技术' : 'Computer Science and Technology'));
  assert.ok((await page.locator('.honors').innerText()).includes(chinese ? '国家奖学金' : 'National Scholarship'));
  assert.equal(await page.getByRole('button', { name: chinese ? '中文' : 'English', exact: true }).getAttribute('aria-pressed'), 'true');
  assert.equal(await page.getByRole('button', { name: chinese ? 'English' : '中文', exact: true }).getAttribute('aria-pressed'), 'false');
}
try {
  for (const [name, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(baseURL, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('.publication').count(), 3);
    assert.equal(await page.locator('a[href="#"], a[href=""]').count(), 0);
    assert.equal(await page.locator('.bio a[href="https://zhangmeishan.github.io/"]').innerText(), 'Prof. Meishan Zhang');
    assert.ok((await page.locator('.education').textContent()).includes('Computer Science and Technology'));
    assert.ok((await page.locator('.education').textContent()).includes('Harbin Institute of Technology, Shenzhen'));
    assert.equal(await page.locator('a[href^="mailto:"]').count(), 2);
    await page.locator('.profile-image').evaluate(async image => {
      await image.decode();
      if (!image.naturalWidth) throw new Error('Profile image did not load');
    });

    assert.equal(await page.locator('.publication img').count(), 0);
    assert.equal(await page.locator('.publication .resource-links a:visible').count(), 9);
    const originalPapers = await page.locator('.publication-list').innerHTML();
    const originalLinks = await page.locator('a').evaluateAll(links => links.map(link => link.href));
    for (const language of ['en', 'zh-CN']) {
      if (language === 'zh-CN') await page.getByRole('button', { name: '中文', exact: true }).click();
      await checkLanguage(page, language);
      assert.equal(await page.locator('.publication-list').getAttribute('lang'), 'en');
      assert.equal(await page.locator('.publication-list').innerHTML(), originalPapers, 'Paper content must stay English and unchanged');
      assert.deepEqual(await page.locator('a').evaluateAll(links => links.map(link => link.href)), originalLinks);
      const captureName = language === 'en' ? name : `${name}-zh`;
      await page.evaluate(() => window.scrollTo(0, 0));
      const metrics = await page.evaluate(() => ({
        viewport: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        contentHeight: document.documentElement.scrollHeight,
        wordCount: document.body.innerText.trim().split(/\s+/).length,
        fontLoaded: document.fonts.check('17px "Source Sans 3 Variable"'),
        firstPaperTop: Math.round(document.querySelector('.publication h3').getBoundingClientRect().top),
        linkTargets: [...document.querySelectorAll('.resource-links a, .contact-links a, .language-switch button')].filter(el => el.getClientRects().length).map(el => Math.round(el.getBoundingClientRect().height)),
      }));
      assert.ok(metrics.documentWidth <= width, `${captureName}: horizontal overflow`);
      assert.ok(metrics.fontLoaded);
      assert.ok(metrics.firstPaperTop < height, `${captureName}: first paper should be visible in the first viewport`);
      assert.ok(metrics.linkTargets.every(height => height >= 44));
      const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      await page.screenshot({ path: `artifacts/${captureName}-hero.png` });
      await page.screenshot({ path: `artifacts/${captureName}-full.png`, fullPage: true });
      await page.locator('#publications').screenshot({ path: `artifacts/${captureName}-publications.png` });
      assert.deepEqual(accessibility.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), []);
      captures.push({ name: captureName, language, ...metrics, axeViolations: accessibility.violations.length });
    }
    await page.reload({ waitUntil: 'networkidle' });
    await checkLanguage(page, 'zh-CN');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.innerText), '跳转到正文');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'English');
    await page.keyboard.press('Enter');
    await checkLanguage(page, 'en');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.innerText), '中文');
    await page.keyboard.press('Space');
    await checkLanguage(page, 'zh-CN');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('href')), 'https://zhangmeishan.github.io/');
    await page.getByRole('button', { name: 'English', exact: true }).click();
    await page.reload({ waitUntil: 'networkidle' });
    await checkLanguage(page, 'en');
    assert.deepEqual(errors, []);
    await context.close();
  }
  const context = await browser.newContext();
  const page = await context.newPage();
  const reflow = [];
  for (const language of ['en', 'zh-CN']) {
    for (const width of [320, 480, 600, 768, 1024]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(baseURL, { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: language === 'en' ? 'English' : '中文', exact: true }).click();
      const actual = await page.evaluate(() => document.documentElement.scrollWidth);
      assert.ok(actual <= width, `${language}: overflow at ${width}: ${actual}`);
      reflow.push({ language, width, documentWidth: actual });
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= 390), `${language}: overflow with enlarged root text`);
  }
  await context.close();
  const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noScript.newPage();
  await staticPage.goto(baseURL);
  assert.equal(await staticPage.locator('.publication').count(), 3);
  assert.equal(await staticPage.locator('a[href^="mailto:"]').count(), 2);
  assert.equal(await staticPage.locator('.publication .resource-links a:visible').count(), 9);
  assert.equal(await staticPage.locator('html').getAttribute('lang'), 'en');
  assert.equal(await staticPage.locator('#publications-heading').innerText(), 'Publications');
  assert.equal(await staticPage.locator('.language-switch').isVisible(), false, 'Hide the switch when JavaScript is disabled');
  await noScript.close();
  const blockedStorage = await browser.newContext();
  await blockedStorage.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Storage blocked', 'SecurityError'); } });
  });
  const blockedPage = await blockedStorage.newPage();
  const storageErrors = [];
  blockedPage.on('pageerror', error => storageErrors.push(error.message));
  await blockedPage.goto(baseURL, { waitUntil: 'networkidle' });
  await checkLanguage(blockedPage, 'en');
  await blockedPage.getByRole('button', { name: '中文', exact: true }).click();
  await checkLanguage(blockedPage, 'zh-CN');
  await blockedPage.getByRole('button', { name: 'English', exact: true }).click();
  await checkLanguage(blockedPage, 'en');
  assert.deepEqual(storageErrors, []);
  await blockedStorage.close();
  const invalidPreference = await browser.newContext();
  await invalidPreference.addInitScript(() => localStorage.setItem('homepage-language', 'invalid'));
  const invalidPage = await invalidPreference.newPage();
  await invalidPage.goto(baseURL, { waitUntil: 'networkidle' });
  await checkLanguage(invalidPage, 'en');
  await invalidPreference.close();
  const result = { captures, reflow, languagePersistenceAndKeyboard: 'passed', blockedStorage: 'passed', invalidPreference: 'passed', noJavaScript: 'passed' };
  await writeFile('artifacts/qa-report.json', JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
