import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, normalize, resolve } from 'node:path';

const root = process.cwd();
const pages = [
  'index.html', 'film-stretch/index.html', 'cintas-adhesivas/index.html',
  'papeleria-comercial/index.html', 'impresoras-toners/index.html',
  'kits-revendedores/index.html', 'combos-empresas/index.html',
  'contadoras-billetes/index.html', 'sillas-gamer/index.html', 'sucursales/index.html'
];
const errors = [];
const idsByPage = new Map();

for (const file of pages) {
  const html = readFileSync(join(root, file), 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  idsByPage.set(file, ids);
  const count = (pattern) => [...html.matchAll(pattern)].length;
  if (count(/<h1(?:\s|>)/g) !== 1) errors.push(`${file}: debe tener exactamente un h1`);
  if (count(/<title>/g) !== 1) errors.push(`${file}: falta o se repite title`);
  if (count(/<meta name="description"/g) !== 1) errors.push(`${file}: falta o se repite meta description`);
  if (count(/<link rel="canonical"/g) !== 1) errors.push(`${file}: falta o se repite canonical`);
  if (!html.includes('application/ld+json')) errors.push(`${file}: falta JSON-LD`);

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|#)/.test(value)) continue;
    const clean = value.split('#')[0].split('?')[0];
    let target = normalize(join(dirname(file), clean));
    if (clean.endsWith('/')) target = join(target, 'index.html');
    if (!existsSync(resolve(root, target))) errors.push(`${file}: no existe ${value}`);
  }

  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.has(match[1])) errors.push(`${file}: no existe el destino #${match[1]}`);
  }
}

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
for (const file of pages) {
  const path = file === 'index.html' ? '/' : `/${dirname(file)}/`;
  if (!sitemap.includes(`https://www.filmstretchlider.com.ar${path}`)) errors.push(`sitemap.xml: falta ${path}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Validación completa: ${pages.length} páginas, enlaces locales, anclas, SEO básico y sitemap correctos.`);
