#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml to match SITEMAP_PATHS in src/lib/seo.ts.
 *
 * Kept self-contained (no TS path aliases) so it runs with plain Node.
 * When adding a marketing route, update BOTH SITEMAP_PATHS and the STATIC
 * list below (or extend NEWS via slug: in src/data/project.ts).
 *
 * Usage: npm run sitemap
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://thecamellia-sontra.com";
const today = new Date().toISOString().slice(0, 10);

/** Mirror of SITEMAP_PATHS static entries in src/lib/seo.ts */
const STATIC = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/can-ho", priority: "0.9", changefreq: "weekly" },
  { path: "/tien-ich", priority: "0.8", changefreq: "monthly" },
  { path: "/kham-pha", priority: "0.8", changefreq: "monthly" },
  { path: "/tin-tuc", priority: "0.8", changefreq: "weekly" },
  { path: "/lien-he", priority: "0.7", changefreq: "monthly" },
];

const projectSrc = readFileSync(join(root, "src/data/project.ts"), "utf8");
const newsSlugs = [...projectSrc.matchAll(/\bslug:\s*"([^"]+)"/g)].map((m) => m[1]);
const newsEntries = newsSlugs.map((slug) => ({
  path: `/tin-tuc/${slug}`,
  priority: "0.6",
  changefreq: "monthly",
}));

const entries = [...STATIC, ...newsEntries];
const urls = entries
  .map(
    (e) =>
      `  <url><loc>${origin}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority><lastmod>${today}</lastmod></url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`[sitemap] wrote ${entries.length} URLs → public/sitemap.xml`);
