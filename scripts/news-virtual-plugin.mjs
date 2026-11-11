/**
 * Summaries for list/home/related and image-studio slots.
 * The emitted modules inline card/media JSON. They do not import article
 * files, so article bodies stay in the per-slug dynamic chunks.
 */
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadNewsArticles, sortNewsItems, toNewsCard, toNewsMedia } from "./news-files.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const CARDS_ID = "\0virtual:news-cards";
const MEDIA_ID = "\0virtual:news-media";

function jsString(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function newsVirtualPlugin(root = repoRoot) {
  const dir = join(root, "src/data/news/articles");
  const read = () => sortNewsItems(loadNewsArticles(dir));

  return {
    name: "news-virtual",
    enforce: "pre",
    resolveId(id) {
      if (id === "virtual:news-cards") return CARDS_ID;
      if (id === "virtual:news-media") return MEDIA_ID;
      return null;
    },
    load(id) {
      if (id !== CARDS_ID && id !== MEDIA_ID) return null;
      const items = read();
      for (const item of items) this.addWatchFile(join(dir, item.file));
      if (id === CARDS_ID) {
        const cards = items.map((item) => toNewsCard(item.article));
        return `export const NEWS_CARDS = ${jsString(cards)};`;
      }
      const media = items.map((item) => toNewsMedia(item.article));
      return `export const NEWS_MEDIA = ${jsString(media)};`;
    },
  };
}
