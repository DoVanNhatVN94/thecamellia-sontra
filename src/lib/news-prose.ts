/**
 * Render-only shaping for news body copy.
 * The strings in `NEWS` stay unchanged; this module only decides where
 * paragraphs, lists, headings and source links break.
 */

export type RichInline =
  | { kind: "text"; text: string }
  | { kind: "link"; text: string; href: string };

export type RichText = RichInline[];

export type BodySegment =
  | { kind: "p"; content: RichText }
  | { kind: "ul"; items: RichText[] }
  | { kind: "sources"; kicker: string; sources: { label: string; href: string }[] }
  | { kind: "footnote"; text: string };

export type LinkHit = {
  href: string;
  urlStart: number;
  /** First index after the cleaned href. Trailing punctuation stays in the string. */
  urlEnd: number;
  /** Index of the em dash that introduces this URL, when there is one. */
  dashStart: number | null;
};

const ABBREV_BEFORE_PERIOD =
  /(?:^|[^A-Za-zÀ-ỹĐđ])(?:PGS|GS|TS|TP|ThS|Dr|Mr|P)$/;

const SENTENCE_START = /[\p{Lu}\d«"“(]/u;

const PARA_BREAK = /^(Thứ (nhất|hai|ba|tư|năm)|Một là|Hai là|Ba là)\b/u;

const LINK_RE = /https?:\/\/[^\s<>"']+|\/tin-tuc\/[^\s<>"']+/g;

const MEDIA_NOTE =
  /^(Ảnh|Hình ảnh|Đồ họa|Infographic)\b|ảnh minh họa|hình ảnh minh họa|tạo bằng AI|\bđồ họa\b|infographic/i;

const NOTE_HEADINGS = new Set([
  "Lưu ý",
  "Lưu ý / nguồn",
  "Lưu ý quan trọng",
  "Lưu ý pháp lý & minh họa",
  "Nguồn & lưu ý",
]);

export function isNoteHeading(heading: string | undefined): boolean {
  if (!heading) return false;
  return NOTE_HEADINGS.has(heading.trim());
}

/** H2 for sections, H3 for questions under «Câu hỏi thường gặp». */
export function headingRank(
  blocks: readonly { heading?: string }[],
  index: number,
): 2 | 3 {
  let inFaq = false;
  for (let i = 0; i <= index; i++) {
    const heading = blocks[i]?.heading?.trim();
    if (!heading) continue;
    if (heading === "Câu hỏi thường gặp") {
      if (i === index) return 2;
      inFaq = true;
      continue;
    }
    if (isNoteHeading(heading)) {
      if (i === index) return 2;
      inFaq = false;
      continue;
    }
    const child = inFaq && heading.endsWith("?");
    if (i === index) return child ? 3 : 2;
    if (!child) inFaq = false;
  }
  return 2;
}

export function findLinkHits(text: string): LinkHit[] {
  const hits: LinkHit[] = [];
  for (const match of text.matchAll(LINK_RE)) {
    const start = match.index ?? 0;
    let href = match[0];
    let end = start + href.length;
    while (href.length > 0 && /[.,;)\]]$/.test(href)) {
      href = href.slice(0, -1);
      end -= 1;
    }
    const before = text.slice(0, start);
    const dash = before.match(/—\s*$/);
    hits.push({
      href,
      urlStart: start,
      urlEnd: end,
      dashStart: dash ? start - dash[0].length : null,
    });
  }
  return hits;
}

export function splitSentences(text: string): string[] {
  const out: string[] = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch !== "." && ch !== "!" && ch !== "?" && ch !== "…") continue;
    if (ch === "." && (text[i + 1] === "." || text[i - 1] === ".")) continue;
    if (ch === "." && /^\d+$/.test(text.slice(start, i).trim())) continue;
    if (ch === "." && ABBREV_BEFORE_PERIOD.test(text.slice(start, i))) continue;

    let j = i + 1;
    if (text[j] !== " " && text[j] !== "\n" && text[j] !== "\t") continue;
    while (text[j] === " " || text[j] === "\n" || text[j] === "\t") j++;
    if (j >= text.length) {
      const last = text.slice(start).trim();
      if (last) out.push(last);
      return out;
    }
    if (SENTENCE_START.test(text[j] ?? "")) {
      const sentence = text.slice(start, i + 1).trim();
      if (sentence) out.push(sentence);
      start = j;
      i = j - 1;
    }
  }
  const rest = text.slice(start).trim();
  if (rest) out.push(rest);
  return out;
}

export function groupSentences(sentences: readonly string[]): string[] {
  const paras: string[] = [];
  let buf: string[] = [];
  const flush = () => {
    if (buf.length) paras.push(buf.join(" "));
    buf = [];
  };
  for (const sentence of sentences) {
    const bufLen = buf.join(" ").length;
    const startNew =
      buf.length > 0 &&
      (PARA_BREAK.test(sentence) ||
        sentence.length >= 220 ||
        bufLen >= 260 ||
        buf.length >= 3 ||
        (buf.length >= 2 && bufLen >= 180));
    if (startNew) flush();
    buf.push(sentence);
    const nextLen = buf.join(" ").length;
    if (
      sentence.length >= 220 ||
      buf.length >= 3 ||
      nextLen >= 340 ||
      (buf.length >= 2 && nextLen >= 240)
    ) {
      flush();
    }
  }
  flush();
  return paras;
}

function paragraphsFromProse(text: string): BodySegment[] {
  return groupSentences(splitSentences(text)).map((paragraph) => ({
    kind: "p" as const,
    content: [{ kind: "text" as const, text: paragraph }],
  }));
}

/** Plain article copy: paragraphs of 2–3 sentences, or a bullet list. */
export function formatProse(text: string): BodySegment[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (!trimmed.includes("•")) return paragraphsFromProse(trimmed);

  const parts = trimmed.split("•").map((part) => part.trim());
  const segments: BodySegment[] = [];
  const intro = parts[0] ?? "";
  const items = parts.slice(1).filter(Boolean);
  if (intro) segments.push(...paragraphsFromProse(intro));
  if (items.length) {
    segments.push({
      kind: "ul",
      items: items.map((item) => [{ kind: "text", text: item }]),
    });
  }
  return segments;
}

function isMediaNote(sentence: string): boolean {
  return MEDIA_NOTE.test(sentence);
}

function mergeText(inlines: RichText): RichText {
  const out: RichText = [];
  for (const inline of inlines) {
    if (!inline.text) continue;
    const prev = out[out.length - 1];
    if (prev && prev.kind === "text" && inline.kind === "text") {
      prev.text += inline.text;
    } else {
      out.push({ ...inline });
    }
  }
  return out;
}

function lastSentenceSpan(before: string): { head: string; last: string } {
  const sentences = splitSentences(before.trimEnd());
  if (sentences.length <= 1) return { head: "", last: before };
  const last = sentences[sentences.length - 1] ?? "";
  const at = before.lastIndexOf(last);
  if (at < 0) return { head: "", last: before };
  return { head: before.slice(0, at), last: before.slice(at) };
}

/**
 * Hide a raw URL. The words in front of it stay visible and become the link.
 * Parenthetical URLs keep the «title» (or the clause before the parenthesis) as the label.
 */
export function linkifyString(text: string): RichText {
  const hits = findLinkHits(text);
  if (!hits.length) return [{ kind: "text", text }];

  const out: RichText = [];
  let cursor = 0;
  for (const hit of hits) {
    const openParen = text.lastIndexOf("(", hit.urlStart);
    const parenWrapped =
      hit.dashStart === null &&
      openParen >= cursor &&
      /^\s*$/.test(text.slice(openParen + 1, hit.urlStart)) &&
      text[hit.urlEnd] === ")";

    if (parenWrapped) {
      let prose = text.slice(cursor, openParen);
      const leadPunct = prose.match(/^\s*,\s*/);
      if (leadPunct) {
        out.push({ kind: "text", text: leadPunct[0] });
        prose = prose.slice(leadPunct[0].length);
      }
      const quoted = prose.match(/«[^»]+»/);
      if (quoted && quoted.index !== undefined) {
        const title = quoted[0];
        const titleAt = quoted.index;
        if (titleAt > 0) out.push({ kind: "text", text: prose.slice(0, titleAt) });
        out.push({ kind: "link", text: title, href: hit.href });
        let afterTitle = prose.slice(titleAt + title.length);
        const afterParen = text[hit.urlEnd + 1];
        if (afterParen === "," || afterParen === "." || afterParen === ";") {
          afterTitle = afterTitle.replace(/\s+$/u, "");
        }
        if (afterTitle) out.push({ kind: "text", text: afterTitle });
      } else if (prose.trim()) {
        const trimmed = prose.trim();
        const leadSpace = prose.slice(0, prose.indexOf(trimmed));
        const trailSpace = prose.slice(leadSpace.length + trimmed.length);
        const afterParen = text[hit.urlEnd + 1];
        const gluePunct = afterParen === "." || afterParen === "," || afterParen === ";";
        if (leadSpace) out.push({ kind: "text", text: leadSpace });
        out.push({ kind: "link", text: trimmed, href: hit.href });
        if (trailSpace && !gluePunct) out.push({ kind: "text", text: trailSpace });
      }
      cursor = hit.urlEnd + 1;
      continue;
    }

    const labelEnd = hit.dashStart ?? hit.urlStart;
    const before = text.slice(cursor, labelEnd);
    const { head, last } = hit.dashStart !== null ? lastSentenceSpan(before) : { head: "", last: "" };
    if (hit.dashStart !== null) {
      if (head) out.push({ kind: "text", text: head });
      let label = last.trim();
      let end = hit.urlEnd;
      if (text[end] === ".") {
        label += ".";
        end += 1;
      }
      if (label) out.push({ kind: "link", text: label, href: hit.href });
      cursor = end;
      continue;
    }

    if (before) out.push({ kind: "text", text: before });
    let end = hit.urlEnd;
    let label = hit.href.replace(/^https?:\/\//, "").replace(/^www\./, "");
    const slash = label.indexOf("/");
    if (slash > 0) label = label.slice(0, slash);
    if (text[end] === ".") end += 1;
    out.push({ kind: "link", text: label, href: hit.href });
    cursor = end;
  }
  if (cursor < text.length) out.push({ kind: "text", text: text.slice(cursor) });
  return mergeText(out);
}

function linkifySegments(segments: BodySegment[]): BodySegment[] {
  return segments.map((segment) => {
    if (segment.kind === "p") {
      const text = segment.content.map((inline) => inline.text).join("");
      return { kind: "p", content: linkifyString(text) };
    }
    if (segment.kind === "ul") {
      return {
        kind: "ul",
        items: segment.items.map((item) => linkifyString(item.map((inline) => inline.text).join(""))),
      };
    }
    return segment;
  });
}

function proseWithFootnotes(text: string): BodySegment[] {
  const sentences = splitSentences(text);
  const segments: BodySegment[] = [];
  let buffer: string[] = [];
  const flush = () => {
    if (!buffer.length) return;
    segments.push(...linkifySegments(paragraphsFromProse(buffer.join(" "))));
    buffer = [];
  };
  for (const sentence of sentences) {
    if (isMediaNote(sentence)) {
      flush();
      segments.push({ kind: "footnote", text: sentence });
    } else {
      buffer.push(sentence);
    }
  }
  flush();
  return segments;
}

function cleanSourceLabel(label: string): string {
  return label
    .trim()
    .replace(/^[;\s.]+/u, "")
    .replace(/[\s,;]+$/u, "")
    .replace(/\s+—\s*$/u, "")
    .trim();
}

function parseSourceBlob(blob: string): {
  sources: { label: string; href: string }[];
  tail: string;
} | null {
  const hits = findLinkHits(blob);
  if (!hits.length) return null;

  const sources: { label: string; href: string }[] = [];
  let cursor = 0;
  for (const hit of hits) {
    let label = cleanSourceLabel(blob.slice(cursor, hit.urlStart));
    let end = hit.urlEnd;
    if (blob[end] === ".") {
      label = `${label}.`;
      end += 1;
    }
    if (label) sources.push({ label, href: hit.href });
    cursor = end;
  }
  const tail = blob.slice(cursor).trim().replace(/^[;\s.]+/u, "");
  return { sources, tail };
}

/**
 * The «Lưu ý» block. `stripPrefix` drops a duplicated leading «Lưu ý:»
 * because the heading already says it.
 */
export function formatNote(text: string, stripPrefix: boolean): BodySegment[] {
  let raw = text.trim();
  if (!raw) return [];
  if (stripPrefix) raw = raw.replace(/^Lưu ý:\s*/u, "");
  if (!raw) return [];

  const mark = /Nguồn(?:\s+chính)?:/u.exec(raw);
  if (mark && mark.index !== undefined) {
    const parsed = parseSourceBlob(raw.slice(mark.index + mark[0].length));
    if (parsed && parsed.sources.length) {
      const kicker = mark[0].replace(/:\s*$/u, "");
      const lead = raw.slice(0, mark.index).trim();
      const segments: BodySegment[] = [];
      if (lead) segments.push(...proseWithFootnotes(lead));
      segments.push({ kind: "sources", kicker, sources: parsed.sources });
      if (parsed.tail) segments.push(...proseWithFootnotes(parsed.tail));
      return segments;
    }
  }
  return proseWithFootnotes(raw);
}

export function segmentPlainText(segments: readonly BodySegment[]): string {
  const parts: string[] = [];
  for (const segment of segments) {
    if (segment.kind === "p") {
      parts.push(segment.content.map((inline) => inline.text).join(""));
    } else if (segment.kind === "ul") {
      for (const item of segment.items) parts.push(item.map((inline) => inline.text).join(""));
    } else if (segment.kind === "sources") {
      parts.push(segment.kicker);
      for (const source of segment.sources) parts.push(source.label);
    } else {
      parts.push(segment.text);
    }
  }
  return parts.join(" ");
}
