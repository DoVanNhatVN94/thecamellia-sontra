/**
 * Load news article modules from disk (build, sitemap, tests).
 * Article files are plain data: type-only imports, `listRank`, and `article`.
 * They must not import runtime values — the loader evaluates them in a sandbox.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";
import vm from "node:vm";

/** @param {string | undefined} date `dd.mm.yyyy` */
export function parseNewsDate(date) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(date ?? "");
  if (!match) return 0;
  return Number(match[3]) * 10000 + Number(match[2]) * 100 + Number(match[1]);
}

/**
 * Display order for /tin-tuc.
 * Numbered `listRank` wins (ascending). An article with no `listRank` is pinned
 * ahead of ranked ones so a new file can land first without editing the others.
 * Equal ranks (or two unranked files) use date descending, then slug.
 * @param {{ listRank?: number, date?: string, slug?: string }} a
 * @param {{ listRank?: number, date?: string, slug?: string }} b
 */
export function compareNews(a, b) {
  const aRank = a.listRank;
  const bRank = b.listRank;
  const aHas = typeof aRank === "number" && Number.isFinite(aRank);
  const bHas = typeof bRank === "number" && Number.isFinite(bRank);
  if (aHas && bHas && aRank !== bRank) return aRank - bRank;
  if (aHas !== bHas) return aHas ? 1 : -1;
  const byDate = parseNewsDate(b.date) - parseNewsDate(a.date);
  if (byDate !== 0) return byDate;
  const aSlug = a.slug ?? "";
  const bSlug = b.slug ?? "";
  if (aSlug < bSlug) return -1;
  if (aSlug > bSlug) return 1;
  return 0;
}

/**
 * @param {string} source
 * @param {string} filename
 * @returns {{
 *   article?: {
 *     slug?: string,
 *     date?: string,
 *     title?: string,
 *     excerpt?: string,
 *     image?: string,
 *     imageObjectClass?: string,
 *     poster?: string,
 *     gallery?: readonly string[],
 *     body?: unknown,
 *   },
 *   listRank?: number,
 * }}
 */
export function evaluateNewsModule(source, filename) {
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: filename,
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(
    js,
    {
      module,
      exports: module.exports,
      require() {
        throw new Error(`${filename} imported a runtime value; news articles must be plain data`);
      },
    },
    { filename },
  );
  return /** @type {ReturnType<typeof evaluateNewsModule>} */ (module.exports);
}

/** @param {string} dir absolute path to src/data/news/articles */
export function loadNewsArticles(dir) {
  const files = readdirSync(dir)
    .filter((name) => name.endsWith(".ts") && !name.endsWith(".d.ts"))
    .sort();
  return files.map((file) => {
    const slug = file.slice(0, -".ts".length);
    const source = readFileSync(join(dir, file), "utf8");
    const mod = evaluateNewsModule(source, file);
    const article = mod.article;
    if (!article || typeof article !== "object") {
      throw new Error(`${file} must export \`article\``);
    }
    if (article.slug !== slug) {
      throw new Error(`${file} exports slug ${JSON.stringify(article.slug)}; filename must match`);
    }
    const listRank = mod.listRank;
    if (listRank !== undefined && !Number.isFinite(listRank)) {
      throw new Error(`${file} listRank must be a finite number`);
    }
    return { file, slug, article, listRank };
  });
}

/**
 * Listing fields only. `listRank` is ordering metadata, not rendered.
 * @param {{ slug?: string, date?: string, title?: string, excerpt?: string, image?: string, imageObjectClass?: string }} article
 */
export function toNewsCard(article) {
  return {
    slug: article.slug,
    date: article.date,
    title: article.title,
    excerpt: article.excerpt,
    image: article.image,
    ...(article.imageObjectClass ? { imageObjectClass: article.imageObjectClass } : {}),
  };
}

/**
 * Image-studio fields only.
 * @param {{ slug?: string, title?: string, image?: string, poster?: string, gallery?: readonly string[] }} article
 */
export function toNewsMedia(article) {
  return {
    slug: article.slug,
    title: article.title,
    image: article.image,
    gallery: article.gallery ?? [],
    ...(article.poster ? { poster: article.poster } : {}),
  };
}

/** @param {ReturnType<typeof loadNewsArticles>} items */
export function sortNewsItems(items) {
  return [...items].sort((a, b) =>
    compareNews(
      { listRank: a.listRank, date: a.article.date, slug: a.article.slug },
      { listRank: b.listRank, date: b.article.date, slug: b.article.slug },
    ),
  );
}
