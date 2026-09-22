import { useEffect, useRef, useState, type RefObject } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  SALES_PLANS,
  SALES_PLANS_META,
  type SalesPlan,
  type SalesPlanId,
} from "@/data/sales-plans";
import { useRegister } from "@/lib/register-store";
import { cn } from "@/lib/utils";

function scrollRailTo(el: HTMLElement | null) {
  const rail = el?.parentElement;
  if (!el || !rail) return;
  const left = el.offsetLeft - (rail.clientWidth - el.offsetWidth) / 2;
  rail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
}

function PlanChips({
  active,
  onSelect,
}: {
  active: SalesPlanId;
  onSelect: (id: SalesPlanId) => void;
}) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    scrollRailTo(activeRef.current);
  }, [active]);

  return (
    <div
      className="filter-rail min-w-0"
      role="tablist"
      aria-label="Phương án thanh toán"
    >
      {SALES_PLANS.map((p) => {
        const on = p.id === active;
        return (
          <button
            key={p.id}
            id={`sales-plan-tab-${p.id}`}
            type="button"
            role="tab"
            aria-controls={`sales-plan-${p.id}`}
            aria-selected={on}
            ref={on ? (activeRef as RefObject<HTMLButtonElement>) : undefined}
            onClick={() => onSelect(p.id)}
            className={cn(
              "filter-chip border",
              on ? "border-ink bg-ink text-paper" : "border-stone bg-paper text-ink",
            )}
          >
            {p.short}
          </button>
        );
      })}
    </div>
  );
}

function PlanCards({
  active,
  onSelect,
}: {
  active: SalesPlanId;
  onSelect: (id: SalesPlanId) => void;
}) {
  return (
    <div
      className="hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-4"
      role="tablist"
      aria-label="Phương án thanh toán"
    >
      {SALES_PLANS.map((p) => {
        const on = p.id === active;
        return (
          <button
            key={p.id}
            id={`sales-plan-tab-md-${p.id}`}
            type="button"
            role="tab"
            aria-controls={`sales-plan-${p.id}`}
            aria-selected={on}
            onClick={() => onSelect(p.id)}
            className={cn(
              "flex flex-col rounded-xl border p-4 text-left transition-colors duration-150",
              on
                ? "border-ink bg-ink text-paper shadow-border"
                : "border-stone bg-paper text-ink hover:border-ink/30",
            )}
          >
            <span className="text-xs tracking-[0.16em] uppercase opacity-70">
              {p.tagline}
            </span>
            <span className="mt-2 font-display text-xl leading-snug">{p.short}</span>
            <span
              className={cn(
                "mt-3 font-num text-sm",
                on ? "text-paper/90" : "text-terracotta",
              )}
            >
              {p.highlight}
            </span>
            {p.discount ? (
              <span
                className={cn(
                  "mt-1 text-xs",
                  on ? "text-paper/70" : "text-muted",
                )}
              >
                Chiết khấu {p.discount}
              </span>
            ) : (
              <span
                className={cn(
                  "mt-1 text-xs",
                  on ? "text-paper/70" : "text-muted",
                )}
              >
                {p.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function Timeline({ plan }: { plan: SalesPlan }) {
  return (
    <ol className="relative mt-6 space-y-0 md:mt-8">
      {plan.timeline.map((step, i) => {
        const last = i === plan.timeline.length - 1;
        return (
          <li key={`${plan.id}-${i}`} className="relative flex gap-4 pb-6 md:gap-5 md:pb-7">
            {!last ? (
              <span
                className="absolute top-3 left-[0.6875rem] h-[calc(100%-0.75rem)] w-px bg-stone md:left-[0.9375rem]"
                aria-hidden
              />
            ) : null}
            <span
              className="relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-terracotta bg-cream font-num text-[0.65rem] text-terracotta md:size-8 md:text-xs"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="font-medium leading-snug">{step.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function PlanDetail({ plan }: { plan: SalesPlan }) {
  const openWith = useRegister((s) => s.openWith);

  return (
    <article
      role="tabpanel"
      id={`sales-plan-${plan.id}`}
      aria-label={plan.title}
      className="mt-6 overflow-hidden rounded-xl border border-stone bg-cream shadow-border md:mt-8"
    >
      <div className="border-b border-stone bg-paper px-4 py-5 sm:px-6 sm:py-6 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs tracking-[0.16em] uppercase text-muted">
              {plan.funding}
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">
              {plan.title}
            </h3>
            <p className="mt-3 font-num text-lg text-terracotta sm:text-xl">
              {plan.highlight}
            </p>
            {plan.badge ? (
              <p className="mt-2 inline-flex rounded-full border border-stone bg-cream px-3 py-1 text-xs tracking-wide text-muted">
                {plan.badge}
              </p>
            ) : null}
          </div>
          {plan.discount ? (
            <div className="rounded-xl border border-terracotta/30 bg-cream px-4 py-3 text-center">
              <p className="text-[0.65rem] tracking-[0.16em] uppercase text-muted">
                Chiết khấu
              </p>
              <p className="mt-1 font-num text-2xl text-terracotta">{plan.discount}</p>
            </div>
          ) : null}
        </div>

        {plan.banks.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {plan.banks.map((b) => (
              <li
                key={b}
                className="rounded-full border border-stone px-3 py-1 text-xs tracking-wide"
              >
                {b}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="px-4 py-5 sm:px-6 sm:py-6 md:grid md:grid-cols-[1fr_auto] md:gap-10 md:px-8 md:py-8">
        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-muted">
            Lộ trình thanh toán
          </p>
          <Timeline plan={plan} />
          {plan.notes.length > 0 ? (
            <ul className="mt-2 space-y-1 border-t border-stone pt-4">
              {plan.notes.map((n) => (
                <li key={n} className="text-xs leading-relaxed text-muted">
                  {n}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mt-6 flex flex-col justify-end gap-3 md:mt-0 md:w-56">
          <Button size="lg" className="w-full" onClick={() => openWith(plan.short)}>
            {SALES_PLANS_META.cta}
          </Button>
          <p className="text-center text-xs leading-relaxed text-muted md:text-left">
            Hotline 0934 885 108
          </p>
        </div>
      </div>
    </article>
  );
}

export function SalesPlansSection() {
  const openWith = useRegister((s) => s.openWith);
  const [active, setActive] = useState<SalesPlanId>("htls");
  const plan = SALES_PLANS.find((p) => p.id === active) ?? SALES_PLANS[0];
  const meta = SALES_PLANS_META;

  return (
    <section id="chinh-sach-ban-hang" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="kicker">{meta.kicker}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
            {meta.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {meta.sub}
          </p>
          <div className="mt-6">
            <Button size="lg" onClick={() => openWith()}>
              {meta.cta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={60} className="mt-8 md:mt-10">
          {/* Mobile: horizontal chips · md+: selectable cards */}
          <div className="md:hidden">
            <PlanChips active={active} onSelect={setActive} />
          </div>
          <PlanCards active={active} onSelect={setActive} />
          <PlanDetail plan={plan} />
        </Reveal>

        <p className="mt-6 text-sm leading-relaxed text-muted">{meta.disclaimer}</p>
      </div>
    </section>
  );
}
