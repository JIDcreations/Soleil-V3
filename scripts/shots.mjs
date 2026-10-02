// Captures review screenshots: node scripts/shots.mjs <outdir> <path> [path...]
import { chromium } from 'playwright-core';
import os from 'node:os';
const [out, ...paths] = process.argv.slice(2);
const exe = `${os.homedir()}/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const browser = await chromium.launch({ executablePath: exe });
const sizes = [['desktop', 1440, 900], ['mobile', 390, 844]];
for (const p of paths) {
  for (const [name, w, h] of sizes) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    await page.goto(`http://localhost:4321${p}`, { waitUntil: 'networkidle' });
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(400);
    const slug = p.replace(/\//g, '_').replace(/^_|_$/g, '') || 'home';
    await page.screenshot({ path: `${out}/${slug}-${name}.png`, fullPage: true });
    if (errors.length) console.log(p, name, 'ERRORS', errors);
    await ctx.close();
  }
}
// first viewport with motion, after the entrance settles
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(`http://localhost:4321${paths[0]}`, { waitUntil: 'networkidle' });
await page.waitForTimeout(3200);
await page.screenshot({ path: `${out}/motion-hero.png` });
await browser.close();
console.log('done');
