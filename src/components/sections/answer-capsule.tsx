import type { ReactNode } from "react";

/**
 * GEO answer-first block — short visible Vietnamese summary near page top.
 * Keep copy fact-accurate (PROJECT / UNIT_TYPES only); no invented prices.
 */
export function AnswerCapsule({
  label = "Tóm tắt nhanh",
  children,
  actions,
}: {
  label?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <aside
      className="rounded-xl border border-stone bg-paper px-5 py-5 shadow-border sm:px-6"
      aria-label={label}
    >
      <p className="kicker">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">{children}</p>
      {actions ? <div className="mt-4 flex flex-wrap gap-3">{actions}</div> : null}
    </aside>
  );
}
