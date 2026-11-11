import type { NewsArticle } from "./types";

/**
 * One async chunk per article. Keys come from the bundler; only the requested
 * slug is imported. Listing data lives in `virtual:news-cards`, not here.
 */
const modules = import.meta.glob("./articles/*.ts") as Record<
  string,
  () => Promise<{ article: NewsArticle }>
>;

const bySlug = new Map<string, () => Promise<{ article: NewsArticle }>>();
for (const [path, load] of Object.entries(modules)) {
  const file = path.split("/").pop() ?? "";
  if (!file.endsWith(".ts")) continue;
  bySlug.set(file.slice(0, -".ts".length), load);
}

export async function loadArticle(slug: string): Promise<NewsArticle | undefined> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return undefined;
  const load = bySlug.get(slug);
  if (!load) return undefined;
  const mod = await load();
  if (mod.article?.slug !== slug) return undefined;
  return mod.article;
}
