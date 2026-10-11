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
    * { box-sizing: border-box; } body { margin: 0; background: #fafaf7; color: #24394b; padding: 64px 80px; font-family: Sans; }
    header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #d9dfe0; padding-bottom: 30px; font-size: 27px; }
    header span { font-size: 21px; color: #526371; }
    h1 { font-family: Serif; font-weight: 400; font-size: 74px; letter-spacing: -.025em; line-height: 1.15; margin: 62px 0 34px; }
    p { font-size: 25px; color: #526371; margin: 0; } footer { margin-top: 52px; font-size: 21px; color: #275e7c; }
    </style><header>Jiaxin Xu<span>Master’s student · HIT Shenzhen</span></header><h1>Information retrieval<br>for LLM agents.</h1><p>Efficient reranking. Agent-oriented evaluation. Long-horizon memory.</p><footer>cosylsine.github.io</footer>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/social-preview.png' });
  console.log('Created public/social-preview.png (1200 × 630).');
} finally {
  await browser.close();
}
