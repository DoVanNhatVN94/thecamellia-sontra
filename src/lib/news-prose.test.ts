import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import type { NewsArticle } from "../data/news/types";
import { loadNewsArticles, sortNewsItems } from "../../scripts/news-files.mjs";
import {
  findLinkHits,
  formatNote,
  formatProse,
  headingRank,
  isNoteHeading,
  segmentPlainText,
  splitSentences,
} from "./news-prose.ts";

const NEWS = sortNewsItems(
  loadNewsArticles(fileURLToPath(new URL("../data/news/articles/", import.meta.url))),
).map((item) => item.article) as NewsArticle[];

function normWords(value: string): string[] {
  return value
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/(^|\s)\/tin-tuc\/\S+/g, " ")
    .replace(/[—–]/g, " ")
    .replace(/[()[\]{}«»“”";:,.!?…•]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function visibleHref(segments: ReturnType<typeof formatNote>): string[] {
  const hrefs: string[] = [];
  for (const segment of segments) {
    if (segment.kind === "sources") hrefs.push(...segment.sources.map((source) => source.href));
    if (segment.kind === "p") {
      for (const inline of segment.content) if (inline.kind === "link") hrefs.push(inline.href);
    }
    if (segment.kind === "ul") {
      for (const item of segment.items) {
        for (const inline of item) if (inline.kind === "link") hrefs.push(inline.href);
      }
    }
  }
  return hrefs;
}

describe("news prose", () => {
  it("does not split abbreviations that look like sentence ends", () => {
    const sentence =
      "Chiều 23/10/2026, tại TP. Hồ Chí Minh, Thống đốc Ngân hàng Nhà nước phối hợp UBND TP. Hồ Chí Minh tổ chức.";
    const parts = splitSentences(sentence);
    assert.equal(parts.length, 1);
    assert.match(parts[0] ?? "", /TP\. Hồ Chí Minh/);

    const decree =
      "Theo Nghị định số 357/2025/NĐ-CP. Cùng bài, Nghị định số 339/2026/NĐ-CP ngày 26/8/2026.";
    assert.equal(splitSentences(decree).length, 2);
  });

  it("turns bullet separators into list items and keeps the words", () => {
    const text =
      "Các chính sách đang áp dụng gồm: • Hỗ trợ lãi suất 70% tối đa 18 tháng. • Chiết khấu tới 13% khi chọn phương án thanh toán sớm.";
    const segments = formatProse(text);
    const list = segments.find((segment) => segment.kind === "ul");
    assert.ok(list && list.kind === "ul");
    assert.equal(list.items.length, 2);
    assert.match(list.items[0]?.map((inline) => inline.text).join("") ?? "", /Hỗ trợ lãi suất 70%/);
    assert.deepEqual(normWords(segmentPlainText(segments)), normWords(text));
  });

  it("keeps every article's words, and hides raw URLs inside Lưu ý", () => {
    for (const article of NEWS) {
      let inFaq = false;
      article.body.forEach((block, index) => {
        if (block.heading === "Câu hỏi thường gặp") inFaq = true;
        else if (block.heading && !block.heading.endsWith("?")) inFaq = false;
        if (block.heading) {
          const rank = headingRank(article.body, index);
          if (block.heading === "Câu hỏi thường gặp" || isNoteHeading(block.heading)) {
            assert.equal(rank, 2, article.slug);
          } else if (inFaq && block.heading.endsWith("?")) {
            assert.equal(rank, 3, `${article.slug} ${block.heading}`);
          } else {
            assert.equal(rank, 2, `${article.slug} ${block.heading}`);
          }
        }
        if (!block.text) return;

        const note = isNoteHeading(block.heading);
        const segments = note ? formatNote(block.text, true) : formatProse(block.text);
        const visible = segmentPlainText(segments);
        assert.equal(
          visible.includes("http://") || visible.includes("https://"),
          false,
          article.slug,
        );

        const expectedSource = note ? block.text.replace(/^Lưu ý:\s*/u, "") : block.text;
        assert.deepEqual(
          normWords(visible),
          normWords(expectedSource),
          `${article.slug} / ${block.heading ?? "(no heading)"}`,
        );

        if (note) {
          const hrefs = visibleHref(segments);
          for (const href of hrefs) {
            assert.equal(block.text.includes(href), true, href);
            assert.equal(/\s/.test(href), false, href);
          }
          for (const hit of findLinkHits(block.text)) {
            assert.equal(hrefs.includes(hit.href), true, `${article.slug} missing ${hit.href}`);
          }
        }

        if (!note) {
          for (const sentence of splitSentences(block.text)) {
            assert.equal(/^\d+\.$/u.test(sentence), false, `${article.slug}: ${sentence}`);
            assert.notEqual(sentence, "Tại P.");
          }
        }
      });
    }
  });

  it("formats the hạ tầng note as a source list plus a small credit", () => {
    const article = NEWS.find((item) => item.slug.startsWith("ha-tang-da-nang-dau-thang-11"));
    assert.ok(article);
    const block = article.body.find((item) => item.heading === "Lưu ý");
    assert.ok(block);
    const segments = formatNote(block.text, true);
    const sources = segments.find((segment) => segment.kind === "sources");
    assert.ok(sources && sources.kind === "sources");
    assert.equal(sources.sources.length, 7);
    assert.equal(sources.kicker, "Nguồn");
    assert.match(sources.sources[0]?.label ?? "", /VietnamPlus/);
    assert.match(sources.sources[0]?.label ?? "", /28\/10\/2026/);
    assert.equal(sources.sources[0]?.label.includes("http"), false);
    assert.equal(segmentPlainText(segments).startsWith("Lưu ý:"), false);
    const notes = segments.filter((segment) => segment.kind === "footnote");
    assert.equal(notes.length >= 2, true);
    assert.match(notes[0] && notes[0].kind === "footnote" ? notes[0].text : "", /tạo bằng AI/);
    assert.match(
      notes.map((segment) => (segment.kind === "footnote" ? segment.text : "")).join(" "),
      /Đồ họa/,
    );
  });

  it("formats the tổ công tác lấn biển note", () => {
    const article = NEWS.find(
      (item) => item.slug === "da-nang-lap-to-cong-tac-do-thi-lan-bien-02-11-2026",
    );
    assert.ok(article);
    const block = article.body.find((item) => item.heading === "Lưu ý");
    assert.ok(block);
    const segments = formatNote(block.text, true);
    const sources = segments.find((segment) => segment.kind === "sources");
    assert.ok(sources && sources.kind === "sources");
    assert.equal(sources.sources.length, 2);
    assert.match(sources.sources[0]?.label ?? "", /Báo Đầu tư/);
    assert.match(sources.sources[0]?.label ?? "", /02\/11\/2026/);
    assert.match(sources.sources[1]?.href ?? "", /vietnam\.vn/);
  });
});
