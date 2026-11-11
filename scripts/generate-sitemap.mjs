#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml to match SITEMAP_PATHS in src/lib/sitemap-paths.ts
 * (re-exported from src/lib/seo.ts).
 *
 * Kept self-contained (no TS path aliases) so it runs with plain Node.
 * When adding a marketing route, update BOTH SITEMAP_PATHS and the STATIC
 * list below. News URLs come from src/data/news/articles (one file per slug).
 *
 * Usage: npm run sitemap
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadNewsArticles, sortNewsItems } from "./news-files.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://thecamellia-sontra.com";
const today = new Date().toISOString().slice(0, 10);

/** Mirror of the static entries in src/lib/sitemap-paths.ts */
const STATIC = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/can-ho", priority: "0.9", changefreq: "weekly" },
  { path: "/tien-ich", priority: "0.8", changefreq: "monthly" },
  { path: "/kham-pha", priority: "0.8", changefreq: "monthly" },
  { path: "/tin-tuc", priority: "0.8", changefreq: "weekly" },
  { path: "/gioi-thieu", priority: "0.85", changefreq: "monthly" },
  { path: "/lien-he", priority: "0.7", changefreq: "monthly" },
];

const newsSlugs = sortNewsItems(loadNewsArticles(join(root, "src/data/news/articles"))).map(
  (item) => item.slug,
);
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
