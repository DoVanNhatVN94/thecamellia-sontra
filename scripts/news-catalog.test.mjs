import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import { compareNews, loadNewsArticles, sortNewsItems } from "./news-files.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "src/data/news/articles");

describe("news catalog", () => {
  const items = loadNewsArticles(dir);
  const sorted = sortNewsItems(items);

  it("loads one module per slug, with unique list ranks", () => {
    assert.equal(items.length >= 89, true);
    const ranks = items.map((item) => item.listRank).filter((rank) => rank !== undefined);
    assert.equal(new Set(ranks).size, ranks.length);
    for (const item of items) {
      assert.equal(typeof item.article.title, "string");
      assert.equal(Array.isArray(item.article.body), true);
      assert.equal(Array.isArray(item.article.gallery), true);
    }
  });

  it("sorts ranked articles by listRank and pins an unranked file first", () => {
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const next = sorted[i];
      assert.equal(
        compareNews(
          { listRank: prev.listRank, date: prev.article.date, slug: prev.slug },
          { listRank: next.listRank, date: next.article.date, slug: next.slug },
        ) <= 0,
        true,
      );
    }
    assert.equal(
      compareNews(
        { date: "01.01.2020", slug: "new-article" },
        { listRank: 0, date: "11.11.2026", slug: "existing" },
      ) < 0,
      true,
    );
  });

  it("matches news URLs already published in public/sitemap.xml", () => {
    const xml = readFileSync(join(root, "public/sitemap.xml"), "utf8");
    const locs = [...xml.matchAll(/<loc>https:\/\/thecamellia-sontra\.com([^<]*)<\/loc>/g)].map(
      (match) => match[1],
    );
    assert.deepEqual(
      locs.filter((path) => path.startsWith("/tin-tuc/")),
      sorted.map((item) => `/tin-tuc/${item.slug}`),
    );
  });
});
