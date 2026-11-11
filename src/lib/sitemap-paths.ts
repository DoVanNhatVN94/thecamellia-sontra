import { NEWS_CARDS } from "@/data/news/cards";

/**
 * Canonical public URL list — keep `public/sitemap.xml` in sync via `npm run sitemap`.
 * News paths follow the same order as `/tin-tuc` (listRank, then date).
 */
export const SITEMAP_PATHS = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/can-ho", priority: "0.9", changefreq: "weekly" },
  { path: "/tien-ich", priority: "0.8", changefreq: "monthly" },
  { path: "/kham-pha", priority: "0.8", changefreq: "monthly" },
  { path: "/tin-tuc", priority: "0.8", changefreq: "weekly" },
  { path: "/gioi-thieu", priority: "0.85", changefreq: "monthly" },
  { path: "/lien-he", priority: "0.7", changefreq: "monthly" },
  ...NEWS_CARDS.map((n) => ({
    path: `/tin-tuc/${n.slug}`,
    priority: "0.6",
    changefreq: "monthly",
  })),
] as const;
