// Redraws the Soleil mark as clean tapered brush strokes, measured from the traced screenshot.
// Output: src/assets/logo-mark.svg (fill) + centrelines for the draw-on mask.
import fs from 'node:fs';
import sharp from 'sharp';
const f = n => Math.round(n * 10) / 10;

// A stroke = centreline function c(t) -> [x,y], width w(t)
function stroke(c, w, steps = 120) {
  const L = [], R = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, [x, y] = c(t);
    const [x2, y2] = c(Math.min(1, t + 0.001)), [x1, y1] = c(Math.max(0, t - 0.001));
    let nx = -(y2 - y1), ny = x2 - x1; const len = Math.hypot(nx, ny); nx /= len; ny /= len;
    const h = w(t) / 2;
    L.push([x + nx * h, y + ny * h]); R.push([x - nx * h, y - ny * h]);
  }
  const pts = [...L, ...R.reverse()];
  return 'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join('L') + 'Z';
}
const centre = (c, steps = 60) => 'M' + Array.from({ length: steps + 1 }, (_, i) => c(i / steps)).map(([x, y]) => `${f(x)} ${f(y)}`).join('L');

// Arc: centre (636,343), r 325, from ~188deg (left, slightly raised) to ~358deg
const a0 = Math.PI * (188 / 180), a1 = Math.PI * (358 / 180);
const arcC = t => { const a = a0 + (a1 - a0) * t; return [636 + 325 * Math.cos(a), 343 + 325 * Math.sin(a) * -1 * -1]; };
// sin is negative above centre in screen coords when angle in (180,360): y = 343 + r*sin(a) → above centre. Good.
const arcW = t => 3 + 25 * Math.pow(Math.sin(Math.PI * t), 0.7) * (0.9 + 0.12 * t);

// Horizon 1: short line left, gentle lift in the middle
const h1C = t => [6 + 418 * t, 372 - 5 * Math.sin(Math.PI * t)];
const h1W = t => 2 + 16 * Math.pow(Math.sin(Math.PI * t), 0.4);
// Horizon 2: long line, low swell peaking left of centre, trailing thin to the right
const h2C = t => [356 + 840 * t, 421 - 26 * Math.sin(Math.PI * Math.pow(t, 0.8)) + 10 * t];
const h2W = t => 2 + 15 * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.75)), 0.6);

const paths = [stroke(arcC, arcW), stroke(h1C, h1W), stroke(h2C, h2W)];
const lines = [centre(arcC), centre(h1C), centre(h2C)];
const vb = '0 0 1202 440';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" fill="currentColor">${paths.map(d => `<path d="${d}"/>`).join('')}</svg>`;
fs.writeFileSync('src/assets/logo-mark.svg', svg);
fs.writeFileSync('src/assets/logo-data.json', JSON.stringify({ viewBox: vb, paths, lines }));
await sharp(Buffer.from(svg.replace('currentColor', '#bf8e63'))).resize(1200).flatten({ background: '#17302a' }).png().toFile(process.argv[2]);
console.log('ok', svg.length);
