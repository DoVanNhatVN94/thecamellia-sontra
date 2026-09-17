import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { UNIT_TYPES } from "@/data/project";
import { cn } from "@/lib/utils";

export type UnitId = (typeof UNIT_TYPES)[number]["id"];
export type UnitType = (typeof UNIT_TYPES)[number];

function areaShort(area: string) {
  return area.replace(" thông thủy", "");
}

function priceFrom(unit: UnitType): number | null {
  if (unit.comingSoon) return null;
  const match = unit.price.match(/[\d,]+/);
  if (!match) return null;
  return Number.parseFloat(match[0].replace(",", "."));
}

const AUDIENCES = [
  { id: "all", label: "Mọi nhu cầu", short: "Tất cả" },
  { id: "solo", label: "Ở một mình / đầu tư", short: "Độc thân" },
  { id: "family", label: "Gia đình", short: "Gia đình" },
  { id: "large", label: "Đại gia đình", short: "Đại gia đình" },
] as const;

const BUDGETS = [
  { id: "all", label: "Mọi mức giá", short: "Tất cả", min: undefined, max: undefined },
  { id: "u3", label: "Dưới 3 tỷ", short: "< 3 tỷ", min: 0, max: 3 },
  { id: "b35", label: "3 – 5 tỷ", short: "3–5 tỷ", min: 3, max: 5 },
  { id: "b58", label: "5 – 8 tỷ", short: "5–8 tỷ", min: 5, max: 8 },
  { id: "soon", label: "Sắp công bố", short: "Sắp CB", min: undefined, max: undefined },
] as const;

type AudienceId = (typeof AUDIENCES)[number]["id"];
type BudgetId = (typeof BUDGETS)[number]["id"];

function audienceOf(unit: UnitType): AudienceId[] {
  switch (unit.id) {
    case "studio":
    case "1pn":
      return ["solo"];
    case "2pn":
      return ["family"];
    case "3pn":
    case "duplex":
      return ["large"];
    default:
      return [];
  }
}

function matchesBudget(unit: UnitType, budget: BudgetId) {
  if (budget === "all") return true;
  if (budget === "soon") return unit.comingSoon;
  const band = BUDGETS.find((b) => b.id === budget);
  if (!band || band.min == null || band.max == null) return true;
  const price = priceFrom(unit);
  if (price == null) return false;
  return price >= band.min && price < band.max;
}

function matchesAudience(unit: UnitType, audience: AudienceId) {
  if (audience === "all") return true;
  return audienceOf(unit).includes(audience);
}

function isMobile() {
  return window.matchMedia("(max-width: 1023px)").matches;
}

function scrollRailTo(el: HTMLElement | null) {
  const rail = el?.parentElement;
  if (!el || !rail) return;
  const left = el.offsetLeft - (rail.clientWidth - el.offsetWidth) / 2;
  rail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
}

function Facet({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { id: string; label: string; short: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <p className="text-[0.65rem] tracking-[0.16em] text-muted uppercase">{label}</p>
      <div className="filter-facet" role="listbox" aria-label={label}>
        {options.map((opt) => {
          const on = opt.id === value;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={cn(
                "filter-chip border",
                on ? "border-ink bg-ink text-paper" : "border-stone bg-paper text-ink",
              )}
              aria-pressed={on}
              aria-label={opt.label}
            >
              <span className="sm:hidden">{opt.short}</span>
              <span className="hidden sm:inline">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function UnitSmartFilter({
  active,
  onSelect,
}: {
  active: UnitId;
  onSelect: (id: UnitId, scroll?: boolean) => void;
}) {
  const [audience, setAudience] = useState<AudienceId>("all");
  const [budget, setBudget] = useState<BudgetId>("all");
  const cardRefs = useRef<Partial<Record<UnitId, HTMLButtonElement | null>>>({});

  const matched = useMemo(
    () => UNIT_TYPES.filter((u) => matchesAudience(u, audience) && matchesBudget(u, budget)),
    [audience, budget],
  );
  const matchedIds = useMemo(() => new Set(matched.map((u) => u.id)), [matched]);

  useEffect(() => {
    if (isMobile()) scrollRailTo(cardRefs.current[active] ?? null);
  }, [active]);

  function applyAudience(id: string) {
    const next = id as AudienceId;
    setAudience(next);
    const nextMatch = UNIT_TYPES.filter(
      (u) => matchesAudience(u, next) && matchesBudget(u, budget),
    );
    if (nextMatch.length && !nextMatch.some((u) => u.id === active)) {
      onSelect(nextMatch[0].id, false);
    }
  }

  function applyBudget(id: string) {
    const next = id as BudgetId;
    setBudget(next);
    const nextMatch = UNIT_TYPES.filter(
      (u) => matchesAudience(u, audience) && matchesBudget(u, next),
    );
    if (nextMatch.length && !nextMatch.some((u) => u.id === active)) {
      onSelect(nextMatch[0].id, false);
    }
  }

  function pick(unit: UnitType) {
    if (!matchedIds.has(unit.id)) {
      setAudience("all");
      setBudget("all");
    }
    onSelect(unit.id, !isMobile());
  }

  return (
    <article>
      <p className="kicker">Bộ lọc thông minh</p>
      <h2 className="mt-2 font-display text-3xl sm:text-5xl">So sánh và chọn loại căn</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:mt-4">
        <span className="lg:hidden">Vuốt ngang để so sánh loại căn. </span>
        Chọn nhu cầu hoặc ngân sách — loại căn phù hợp sẽ nổi lên.
      </p>

      <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5">
        <Facet label="Nhu cầu" options={AUDIENCES} value={audience} onChange={applyAudience} />
        <Facet label="Ngân sách" options={BUDGETS} value={budget} onChange={applyBudget} />
      </div>

      <p className="mt-4 text-sm text-muted sm:mt-5">
        {matched.length === UNIT_TYPES.length
          ? "5 loại hình · bấm thẻ để xem mặt bằng"
          : `${matched.length} loại căn khớp bộ lọc`}
      </p>

      <div className="filter-unit-rail mt-3 sm:mt-4">
        {UNIT_TYPES.map((u) => {
          const on = u.id === active;
          const fit = matchedIds.has(u.id);
          return (
            <button
              key={u.id}
              type="button"
              ref={(el) => {
                cardRefs.current[u.id] = el;
              }}
              onClick={() => pick(u)}
              aria-pressed={on}
              className={cn(
                "filter-unit-card border",
                on ? "border-ink bg-ink text-paper" : "border-stone bg-paper text-ink",
                !fit && !on && "opacity-40",
              )}
            >
              <span className="font-display text-lg leading-tight sm:text-xl">
                <span className="lg:hidden">{u.beds}</span>
                <span className="hidden lg:inline">{u.name}</span>
              </span>
              <span className={cn("mt-1 text-xs tracking-wide", on ? "text-paper/70" : "text-muted")}>
                {u.comingSoon ? "Sắp công bố mặt bằng" : `${u.layouts.length} mã căn`}
              </span>
              <span className={cn("font-num mt-3 text-sm sm:mt-4", on ? "text-paper/85" : "text-muted")}>
                {areaShort(u.area)}
              </span>
              <span className={cn("font-num mt-0.5 text-base", on ? "text-paper" : "text-terracotta")}>
                {u.price}
              </span>
              <span className={cn("mt-3 text-xs tracking-wide", on ? "text-paper/80" : "text-muted")}>
                {on ? "Đang xem mặt bằng" : "Xem mặt bằng"}
              </span>
            </button>
          );
        })}
      </div>
      <div className="filter-dots" aria-hidden="true">
        {UNIT_TYPES.map((u) => (
          <span
            key={u.id}
            className={cn("filter-dot", u.id === active && "is-on")}
          />
        ))}
      </div>
    </article>
  );
}

export function UnitFilterChips({
  active,
  onSelect,
  ids,
}: {
  active: UnitId;
  onSelect: (id: UnitId) => void;
  ids?: UnitId[];
}) {
  const activeRef = useRef<HTMLButtonElement>(null);
  const list = ids?.length ? UNIT_TYPES.filter((u) => ids.includes(u.id)) : [...UNIT_TYPES];

  useEffect(() => {
    scrollRailTo(activeRef.current);
  }, [active]);

  return (
    <div className="filter-rail min-w-0 flex-1" role="tablist" aria-label="Loại căn hộ">
      {list.map((u) => {
        const on = u.id === active;
        return (
          <button
            key={u.id}
            type="button"
            role="tab"
            aria-selected={on}
            ref={on ? (activeRef as RefObject<HTMLButtonElement>) : undefined}
            onClick={() => onSelect(u.id)}
            className={cn(
              "filter-chip border",
              on ? "border-ink bg-ink text-paper" : "border-stone bg-paper text-ink",
            )}
          >
            {u.beds}
          </button>
        );
      })}
    </div>
  );
}
