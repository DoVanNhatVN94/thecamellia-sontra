import {
  PRICE_SHEET,
  findPaymentPolicy,
  type AmountRule,
  type PaymentPolicy,
  type PaymentPolicyId,
  type ScheduleStep,
} from "../data/price-sheet.ts";

/**
 * Excel ROUND, half away from zero. Installment amounts on the phiếu are
 * integers; inputs stay inside the safe integer range after this round.
 */
export function excelRound(value: number): number {
  if (!Number.isFinite(value)) return Number.NaN;
  const sign = value < 0 ? -1 : 1;
  return sign * Math.floor(Math.abs(value) + 0.5);
}

/** Bảng giá column N: (tổng gồm VAT & KPBT + 10% × đất × diện tích) / 1.12. */
export function deriveListPreVat(listGross: number, netArea: number): number {
  const land = PRICE_SHEET.landDeductionPerM2;
  return (
    (listGross + PRICE_SHEET.vatRate * land * netArea) /
    (1 + PRICE_SHEET.vatRate + PRICE_SHEET.maintenanceRate)
  );
}

/**
 * Per-unit agency discount, applied to the all-in list price before any
 * developer policy. Poster C-06-12 (full 3,365 tỷ, extra 3%) matches
 * list / (1 + rate), not list × (1 − rate): 3.365 / 1.03 ≈ 3.267 tỷ,
 * then the 4% and 13% policies land on ~3.136 and ~2.842 tỷ.
 */
export function listGrossAfterAgency(listGross: number, agencyDiscount: number): number {
  if (!agencyDiscount) return listGross;
  return excelRound(listGross / (1 + agencyDiscount));
}

export type PriceBreakdown = {
  listPreVat: number;
  listPreVatRounded: number;
  unitPrice: number;
  unitPriceAfter: number;
  earlyDiscount: number;
  paymentDiscount: number;
  specialDiscount: number;
  /** F30 — chưa VAT, sau mọi mức chiết khấu, đã ROUND. */
  preVat: number;
  /** F31. */
  vat: number;
  /** F32. */
  maintenance: number;
  /**
   * True when KPBT is the plug so that preVat + VAT + KPBT equals the typed
   * list gross (SUM of Early and payment discount is 0). Special discount alone
   * does not turn this off — same as SUM(F23:F24).
   */
  maintenanceFromGross: boolean;
  /** F29 = F30 + F31. Percents apply to this, not to KPBT. */
  contract: number;
  /** F28. */
  total: number;
  /** Integer chiết khấu so với giá niêm yết chưa VAT đã làm tròn. */
  discountAmount: number;
  landValue: number;
};

export function priceBreakdown(input: {
  listGross: number;
  netArea: number;
  listPreVat?: number;
  earlyDiscount?: number;
  paymentDiscount?: number;
  specialDiscount?: number;
}): PriceBreakdown {
  const earlyDiscount = input.earlyDiscount ?? 0;
  const paymentDiscount = input.paymentDiscount ?? 0;
  const specialDiscount = input.specialDiscount ?? 0;
  const listPreVat = input.listPreVat ?? deriveListPreVat(input.listGross, input.netArea);
  const factor = (1 - earlyDiscount) * (1 - paymentDiscount) * (1 - specialDiscount);
  const preVat = excelRound(listPreVat * factor);
  const landValue = PRICE_SHEET.landDeductionPerM2 * input.netArea;
  const vat = excelRound((preVat - landValue) * PRICE_SHEET.vatRate);
  const maintenanceFromGross = earlyDiscount + paymentDiscount === 0;
  const maintenance = maintenanceFromGross
    ? input.listGross - preVat - vat
    : excelRound(preVat * PRICE_SHEET.maintenanceRate);
  const listPreVatRounded = excelRound(listPreVat);
  return {
    listPreVat,
    listPreVatRounded,
    unitPrice: input.netArea === 0 ? 0 : listPreVat / input.netArea,
    unitPriceAfter: input.netArea === 0 ? 0 : excelRound(preVat / input.netArea),
    earlyDiscount,
    paymentDiscount,
    specialDiscount,
    preVat,
    vat,
    maintenance,
    maintenanceFromGross,
    contract: preVat + vat,
    total: preVat + vat + maintenance,
    discountAmount: listPreVatRounded - preVat,
    landValue,
  };
}

export type ScheduleRow = {
  id: string;
  marker: string;
  batch: string;
  title: string;
  rateLabel: string;
  amount: number;
  dateLabel: string;
  isoDate: string | null;
  payer?: string;
};

const MILESTONE_LABEL: Record<string, string> = {
  "TB BGN": "Thông báo bàn giao",
  "TB GCN": "Thông báo nhận sổ",
};

export function formatPercent(rate: number): string {
  const pct = rate * 100;
  const text = Number.isInteger(pct) ? String(pct) : pct.toFixed(1).replace(".", ",");
  return `${text}%`;
}

export function formatVnd(value: number): string {
  const rounded = excelRound(value);
  const sign = rounded < 0 ? "-" : "";
  const body = Math.abs(rounded)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${body} VNĐ`;
}

export function formatViDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

/** IANA link for Asia/Ho_Chi_Minh. Deposit dates follow the Vietnam calendar. */
export const SAIGON_TIME_ZONE = "Asia/Saigon";

/** YYYY-MM-DD for `now` in Vietnam. Tests pass `now`; the page calls it with no arguments. */
export function todayIso(now: Date = new Date(), timeZone = SAIGON_TIME_ZONE): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function addDays(iso: string, days: number): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

/** Excel EDATE. Day clamps to the last day of the target month. */
export function addMonths(iso: string, months: number): string {
  const [year, month, day] = iso.split("-").map(Number);
  const monthIndex = month - 1 + months;
  const targetYear = year + Math.floor(monthIndex / 12);
  const targetMonth = ((monthIndex % 12) + 12) % 12;
  const lastDay = new Date(Date.UTC(targetYear, targetMonth + 1, 0)).getUTCDate();
  const date = new Date(Date.UTC(targetYear, targetMonth, Math.min(day, lastDay)));
  return date.toISOString().slice(0, 10);
}

function rateLabel(rule: AmountRule): string {
  switch (rule.kind) {
    case "fixed":
      return "—";
    case "maintenance":
      return "KPBT";
    case "percent":
      return rule.plusMaintenance
        ? `${formatPercent(rule.percent)} + KPBT`
        : formatPercent(rule.percent);
    case "residual":
      return formatPercent(rule.nominalPercent);
    default: {
      const unreachable: never = rule;
      return unreachable;
    }
  }
}

function amountBeforeResidual(rule: AmountRule, breakdown: PriceBreakdown): number {
  switch (rule.kind) {
    case "fixed":
      return rule.amount;
    case "maintenance":
      return breakdown.maintenance;
    case "percent": {
      let raw = breakdown.contract * rule.percent;
      if (rule.minusDeposit) raw -= PRICE_SHEET.deposit;
      if (rule.plusMaintenance) raw += breakdown.maintenance;
      return excelRound(raw);
    }
    case "residual":
      return 0;
    default: {
      const unreachable: never = rule;
      return unreachable;
    }
  }
}

function resolveIsoDates(
  steps: readonly ScheduleStep[],
  anchorDate: string,
  handoverDate: string | undefined,
): (string | null)[] {
  const dates: (string | null)[] = [];
  for (let index = 0; index < steps.length; index += 1) {
    const rule = steps[index].date;
    switch (rule.kind) {
      case "anchor":
        dates.push(anchorDate);
        break;
      case "daysAfterAnchor":
        dates.push(addDays(anchorDate, rule.days));
        break;
      case "monthsAfterPrevious": {
        const previous = dates[index - 1];
        dates.push(previous ? addMonths(previous, rule.months) : null);
        break;
      }
      case "sameAsPrevious":
        dates.push(dates[index - 1] ?? null);
        break;
      case "handover":
        dates.push(handoverDate || null);
        break;
      case "label":
        dates.push(null);
        break;
      default: {
        const unreachable: never = rule;
        dates.push(unreachable);
      }
    }
  }
  return dates;
}

function dateLabel(step: ScheduleStep, iso: string | null): string {
  if (iso) return formatViDate(iso);
  if (step.date.kind === "label") return MILESTONE_LABEL[step.date.text] ?? step.date.text;
  if (step.date.kind === "handover") return "Theo thông báo của CĐT";
  return "Sau ngày nhận bàn giao";
}

export function buildSchedule(
  policy: PaymentPolicy,
  breakdown: PriceBreakdown,
  options: { anchorDate: string; handoverDate?: string },
): ScheduleRow[] {
  const isos = resolveIsoDates(policy.steps, options.anchorDate, options.handoverDate);
  let marker = 0;
  const rows: ScheduleRow[] = policy.steps.map((step, index) => {
    if (step.batch) marker += 1;
    return {
      id: step.id,
      marker: step.batch ? String(marker).padStart(2, "0") : "",
      batch: step.batch,
      title: step.title,
      rateLabel: rateLabel(step.amount),
      amount: amountBeforeResidual(step.amount, breakdown),
      dateLabel: dateLabel(step, isos[index]),
      isoDate: isos[index],
      payer: step.payer,
    };
  });

  const residualIndex = policy.steps.findIndex((step) => step.amount.kind === "residual");
  if (residualIndex >= 0) {
    const paidBefore = rows.reduce(
      (sum, row, index) => (index === residualIndex ? sum : sum + row.amount),
      0,
    );
    rows[residualIndex] = {
      ...rows[residualIndex],
      amount: excelRound(breakdown.total - paidBefore),
    };
  }
  return rows;
}

export type PriceQuote = {
  policy: PaymentPolicy;
  breakdown: PriceBreakdown;
  rows: ScheduleRow[];
  paid: number;
  hasNegative: boolean;
  /** All-in list price the user typed, before the agency discount. */
  enteredListGross: number;
  agencyDiscount: number;
  /** F20 after the agency discount. Developer policies run on this price. */
  listGrossAfterAgency: number;
  agencyAmount: number;
};

export function calculatePrice(input: {
  policyId: PaymentPolicyId | string;
  listGross: number;
  netArea: number;
  /** PTG!F19. Omit to derive it from the list gross and this unit's net area. */
  listPreVat?: number;
  earlyDiscount?: number;
  /** Defaults to the policy rate on sheet Ẩn. Pass 0 to replay a block at the saved discount. */
  paymentDiscount?: number;
  specialDiscount?: number;
  /** Optional per-unit agency discount. 0.03 means list / 1.03, before the policy. */
  agencyDiscount?: number;
  anchorDate: string;
  handoverDate?: string;
}): PriceQuote {
  const policy = findPaymentPolicy(input.policyId);
  if (!policy) throw new Error(`Không có phương án ${input.policyId}`);
  const agencyDiscount = input.agencyDiscount ?? 0;
  const pricedListGross = listGrossAfterAgency(input.listGross, agencyDiscount);
  const breakdown = priceBreakdown({
    listGross: pricedListGross,
    netArea: input.netArea,
    listPreVat: agencyDiscount ? undefined : input.listPreVat,
    earlyDiscount: input.earlyDiscount,
    paymentDiscount: input.paymentDiscount ?? policy.discount,
    specialDiscount: input.specialDiscount,
  });
  const rows = buildSchedule(policy, breakdown, {
    anchorDate: input.anchorDate,
    handoverDate: input.handoverDate,
  });
  const paid = rows.reduce((sum, row) => sum + row.amount, 0);
  return {
    policy,
    breakdown,
    rows,
    paid,
    hasNegative: rows.some((row) => row.amount < 0),
    enteredListGross: input.listGross,
    agencyDiscount,
    listGrossAfterAgency: pricedListGross,
    agencyAmount: input.listGross - pricedListGross,
  };
}

export function parseVndInput(raw: string): number | null {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  const value = Number(digits);
  if (!Number.isSafeInteger(value) || value <= 0) return null;
  return value;
}

export function parseAreaInput(raw: string): number | null {
  const text = raw.trim().replace(",", ".");
  if (text === "") return null;
  if (!/^\d+(\.\d+)?$/.test(text)) return null;
  const value = Number(text);
  if (!Number.isFinite(value) || value <= 0 || value > 1000) return null;
  return value;
}

export function parsePercentInput(raw: string): number | null {
  const text = raw.trim().replace(",", ".");
  if (text === "") return 0;
  if (!/^\d+(\.\d+)?$/.test(text)) return null;
  const value = Number(text);
  if (!Number.isFinite(value) || value < 0 || value > 100) return null;
  return value / 100;
}
