import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const baseURL = process.env.QA_URL || 'http://127.0.0.1:4321';
const executablePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true });
const captures = [];
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
    assert.equal(await page.locator('.bio a[href="https://zhangmeishan.github.io/"]').textContent(), 'Prof. Meishan Zhang');
    assert.ok((await page.locator('.education').textContent()).includes('Computer Science and Technology'));
    assert.ok((await page.locator('.education').textContent()).includes('Harbin Institute of Technology, Shenzhen'));
    assert.equal(await page.locator('a[href^="mailto:"]').count(), 2);
    assert.equal(await page.locator('script:not([type="application/ld+json"])').count(), 0, 'Homepage should not need client JavaScript');
    await page.locator('.profile-image').evaluate(async image => {
      await image.decode();
      if (!image.naturalWidth) throw new Error('Profile image did not load');
    });

    assert.equal(await page.locator('.publication img').count(), 0);
    assert.equal(await page.locator('.publication .resource-links a:visible').count(), 9);
    await page.evaluate(() => window.scrollTo(0, 0));
    const metrics = await page.evaluate(() => ({
      viewport: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      contentHeight: document.documentElement.scrollHeight,
      wordCount: document.body.innerText.trim().split(/\s+/).length,
      fontLoaded: document.fonts.check('17px "Source Sans 3 Variable"'),
      firstPaperTop: Math.round(document.querySelector('.publication h3').getBoundingClientRect().top),
      linkTargets: [...document.querySelectorAll('.resource-links a, .contact-links a')].filter(el => el.getClientRects().length).map(el => Math.round(el.getBoundingClientRect().height)),
    }));
    assert.ok(metrics.documentWidth <= width, `${name}: horizontal overflow`);
    assert.ok(metrics.fontLoaded);
    assert.ok(metrics.firstPaperTop < height, `${name}: first paper should be visible in the first viewport`);
    assert.ok(metrics.linkTargets.every(height => height >= 44));
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    await page.screenshot({ path: `artifacts/${name}-hero.png` });
    await page.screenshot({ path: `artifacts/${name}-full.png`, fullPage: true });
    await page.locator('#publications').screenshot({ path: `artifacts/${name}-publications.png` });
    assert.deepEqual(accessibility.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), []);
    await page.goto(baseURL);
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to content');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('href')), 'https://zhangmeishan.github.io/');
    assert.deepEqual(errors, []);
    captures.push({ name, ...metrics, axeViolations: accessibility.violations.length, consoleErrors: errors });
    await context.close();
  }
  const context = await browser.newContext();
  const page = await context.newPage();
  const reflow = [];
  for (const width of [320, 480, 600, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    const actual = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.ok(actual <= width, `Overflow at ${width}: ${actual}`);
    reflow.push({ width, documentWidth: actual });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= 390), 'Overflow with enlarged root text');
  await context.close();
  const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noScript.newPage();
  await staticPage.goto(baseURL);
  assert.equal(await staticPage.locator('.publication').count(), 3);
  assert.equal(await staticPage.locator('a[href^="mailto:"]').count(), 2);
  assert.equal(await staticPage.locator('.publication .resource-links a:visible').count(), 9);
  await noScript.close();
  const result = { captures, reflow, noJavaScript: 'passed' };
  await writeFile('artifacts/qa-report.json', JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
