import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const baseURL = process.env.QA_URL || 'http://127.0.0.1:4321';
const executablePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true });
const report = [];
try {
  for (const [name, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(baseURL, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('.publication').count(), 3);
    assert.equal(await page.locator('.project').count(), 3);
    assert.equal(await page.locator('a[href="#"], a[href=""]').count(), 0);
    const metrics = await page.evaluate(() => ({
      viewport: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      contentHeight: document.documentElement.scrollHeight,
      fontLoaded: document.fonts.check('18px "Source Sans 3 Variable"') && document.fonts.check('24px "Source Serif 4 Variable"'),
      bodyFontSize: getComputedStyle(document.body).fontSize,
      heroFontSize: getComputedStyle(document.querySelector('h1')).fontSize,
      resourceTargets: [...document.querySelectorAll('.resource-links a')].map(el => Math.round(el.getBoundingClientRect().height)),
    }));
    assert.ok(metrics.documentWidth <= width, `${name}: horizontal overflow`);
    assert.ok(metrics.fontLoaded, `${name}: local fonts failed`);
    assert.ok(metrics.resourceTargets.every(height => height >= 44));
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    assert.deepEqual(accessibility.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), []);
    await page.screenshot({ path: `artifacts/${name}-hero.png` });
    await page.screenshot({ path: `artifacts/${name}-full.png`, fullPage: true });
    const captureStyle = '.site-header, .skip-link { visibility: hidden !important; }';
    await page.locator('#publications').screenshot({ path: `artifacts/${name}-publications.png`, style: captureStyle });
    await page.locator('#projects').screenshot({ path: `artifacts/${name}-projects.png`, style: captureStyle });
    await page.locator('.all-authors summary').first().click();
    assert.ok(await page.locator('.all-authors').first().evaluate(el => el.open));
    assert.ok(await page.locator('.all-authors p').first().isVisible());
    await page.locator('.all-authors summary').first().click();
    await page.locator('.copy-email').first().click();
    await page.waitForFunction(() => document.querySelector('.copy-status').textContent.startsWith('Copied'));
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'jiaxinxu1357@gmail.com');
    await page.evaluate(() => { Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => { throw new Error('Denied'); } }, configurable: true }); });
    await page.locator('.copy-email').last().click();
    await page.waitForFunction(() => document.querySelector('.copy-status').textContent.includes('Select the email'));
    if (name === 'mobile') {
      await page.locator('.mobile-nav summary').click();
      assert.ok(await page.locator('.mobile-nav nav').isVisible());
      const menuAxe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      assert.equal(menuAxe.violations.length, 0);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.mobile-nav').evaluate(el => el.open), false);
      await page.locator('.mobile-nav summary').click();
      await page.locator('.mobile-nav a[href="#publications"]').click();
      assert.equal(await page.locator('.mobile-nav').evaluate(el => el.open), false);
      const top = await page.locator('#publications').evaluate(el => el.getBoundingClientRect().top);
      assert.ok(top >= 68, `Anchor hidden under header: ${top}`);
    }
    await page.goto(baseURL);
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to content');
    assert.deepEqual(errors, []);
    report.push({ name, ...metrics, axeViolations: accessibility.violations.length, interactions: 'passed', consoleErrors: errors });
    await context.close();
  }
  // Widths between the requested captures and at enlarged-text reflow sizes.
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  const reflow = [];
  for (const width of [320, 480, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    const actual = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.ok(actual <= width, `Overflow at ${width}: ${actual}`);
    reflow.push({ width, documentWidth: actual });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  const scaledWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  assert.ok(scaledWidth <= 390, `Overflow with enlarged root text: ${scaledWidth}`);
  await context.close();
  const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noScript.newPage();
  await staticPage.goto(baseURL);
  assert.equal(await staticPage.locator('.publication').count(), 3);
  assert.equal(await staticPage.locator('a[href^="mailto:"]').count(), 2);
  await staticPage.locator('.mobile-nav summary').click();
  assert.ok(await staticPage.locator('.mobile-nav nav').isVisible());
  await noScript.close();
  const result = { captures: report, reflow, noJavaScript: 'passed' };
  await writeFile('artifacts/qa-report.json', JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
