#!/usr/bin/env node
/**
 * Single source of truth: regenerates public/sitemap.xml from SITEMAP_PATHS in
 * src/lib/seo.ts (plus NEWS paths already included there).
 *
 * Usage: node --experimental-strip-types scripts/generate-sitemap.mjs
 * Also wired as `npm run sitemap`.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const seoUrl = pathToFileURL(join(root, "src/lib/seo.ts")).href;
const { SITEMAP_PATHS, SITE_ORIGIN } = await import(seoUrl);

const today = new Date().toISOString().slice(0, 10);
const origin = String(SITE_ORIGIN).replace(/\/$/, "");

const urls = SITEMAP_PATHS.map(
  (entry) =>
    `  <url><loc>${origin}${entry.path}</loc><changefreq>${entry.changefreq}</changefreq><priority>${entry.priority}</priority><lastmod>${today}</lastmod></url>`,
).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const out = join(root, "public/sitemap.xml");
writeFileSync(out, xml);
console.log(`[sitemap] wrote ${SITEMAP_PATHS.length} URLs → public/sitemap.xml`);
