import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';

const sans = await readFile('node_modules/@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2');
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<style>
    @font-face { font-family: Sans; src: url(data:font/woff2;base64,${sans.toString('base64')}); font-weight: 200 900; }
    * { box-sizing: border-box; } body { margin: 0; padding: 125px 110px; font-family: Sans, sans-serif; background: #fff; color: #292929; }
    h1 { margin: 0 0 24px; font-size: 66px; font-weight: 600; letter-spacing: -.025em; }
    p { margin: 0 0 14px; font-size: 29px; line-height: 1.5; }
    footer { margin-top: 40px; color: #185d9c; font-size: 25px; }
  </style><h1>Jiaxin Xu</h1><p>Master’s student at HIT Shenzhen</p><p>Information retrieval for LLM agents</p><footer>cosylsine.github.io</footer>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/social-preview.png' });
  console.log('Created public/social-preview.png (1200 × 630).');
} finally {
  await browser.close();
}
