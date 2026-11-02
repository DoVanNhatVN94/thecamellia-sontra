import type { BodySegment, RichText } from "@/lib/news-prose";
import { formatNote, formatProse } from "@/lib/news-prose";

function Rich({ content }: { content: RichText }) {
  return content.map((part, index) =>
    part.kind === "link" ? (
      <a
        key={index}
        href={part.href}
        target="_blank"
        rel="noopener"
        className="font-medium text-terracotta underline decoration-terracotta/35 underline-offset-4 hover:decoration-terracotta"
      >
        {part.text}
      </a>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}

function Segments({ segments }: { segments: BodySegment[] }) {
  return (
    <div className="space-y-4">
      {segments.map((segment, index) => {
        if (segment.kind === "p") {
          return (
            <p key={index}>
              <Rich content={segment.content} />
            </p>
          );
        }
        if (segment.kind === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2.5 pl-5 marker:text-terracotta">
              {segment.items.map((item, itemIndex) => (
                <li key={itemIndex} className="pl-1">
                  <Rich content={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (segment.kind === "sources") {
          return (
            <div key={index} className="mt-2">
              <p className="kicker">{segment.kicker}</p>
              <ul className="mt-3 space-y-2.5">
                {segment.sources.map((source, sourceIndex) => (
                  <li key={sourceIndex} className="border-l-2 border-terracotta/40 pl-3 leading-6">
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener"
                      className="font-medium text-ink underline decoration-terracotta/40 underline-offset-4 hover:text-terracotta hover:decoration-terracotta"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return (
          <p key={index} className="text-xs leading-relaxed text-muted">
            {segment.text}
          </p>
        );
      })}
    </div>
  );
}

export function NewsProse({ text }: { text: string }) {
  return <Segments segments={formatProse(text)} />;
}

export function NewsNote({ text }: { text: string }) {
  return <Segments segments={formatNote(text, true)} />;
}
