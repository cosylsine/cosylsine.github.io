import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';

const sans = await readFile('node_modules/@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2');
const serif = await readFile('node_modules/@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-normal.woff2');
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<style>
    @font-face { font-family: Sans; src: url(data:font/woff2;base64,${sans.toString('base64')}); font-weight: 200 900; }
    @font-face { font-family: Serif; src: url(data:font/woff2;base64,${serif.toString('base64')}); font-weight: 200 900; }
    * { box-sizing: border-box; } body { margin: 0; background: #f8f9f5; color: #233b32; padding: 64px 80px; font-family: Sans; }
    header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; font-size: 27px; }
    header span { font-size: 21px; color: #59675e; }
    h1 { font-family: Serif; font-weight: 400; font-size: 90px; letter-spacing: -.025em; line-height: 1.15; margin: 44px 0 26px; }
    p { font-family: Serif; font-size: 44px; line-height: 1.25; color: #59675e; margin: 0; } footer { margin-top: 38px; font-size: 21px; color: #35624c; }
    </style><header>Master’s student · HIT Shenzhen<span>Research & open source</span></header><h1>Jiaxin Xu</h1><p>Information retrieval<br>for LLM agents.</p><footer>cosylsine.github.io</footer>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/social-preview.png' });
  console.log('Created public/social-preview.png (1200 × 630).');
} finally {
  await browser.close();
}
