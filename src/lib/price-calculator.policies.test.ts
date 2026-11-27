import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PAYMENT_POLICIES, PRICE_SHEET, type PaymentPolicy } from "../data/price-sheet.ts";
import { findPriceSheetUnit } from "../data/price-sheet-units.ts";
import {
  addDays,
  addMonths,
  calculatePrice,
  deriveListPreVat,
  excelRound,
  parseAreaInput,
  parsePercentInput,
  parseVndInput,
} from "./price-calculator.ts";

const CH0301_GROSS = 3_843_462_803;
const CH0301_AREA = 68.3;

function specBreakdown(listGross: number, netArea: number, paymentDiscount: number) {
  const listPreVat = deriveListPreVat(listGross, netArea);
  const preVat = excelRound(listPreVat * (1 - paymentDiscount));
  const land = PRICE_SHEET.landDeductionPerM2 * netArea;
  const vat = excelRound((preVat - land) * PRICE_SHEET.vatRate);
  const maintenance =
    paymentDiscount === 0
      ? listGross - preVat - vat
      : excelRound(preVat * PRICE_SHEET.maintenanceRate);
  return { preVat, vat, maintenance, total: preVat + vat + maintenance, land };
}

function expectedDates(policy: PaymentPolicy, anchor: string, handover?: string) {
  const dates: (string | null)[] = [];
  policy.steps.forEach((step, index) => {
    const rule = step.date;
    if (rule.kind === "anchor") dates.push(anchor);
    else if (rule.kind === "daysAfterAnchor") dates.push(addDays(anchor, rule.days));
    else if (rule.kind === "monthsAfterPrevious") {
      const previous = dates[index - 1];
      dates.push(previous ? addMonths(previous, rule.months) : null);
    } else if (rule.kind === "sameAsPrevious") dates.push(dates[index - 1] ?? null);
    else if (rule.kind === "handover") dates.push(handover || null);
    else dates.push(null);
  });
  return dates;
}

describe("calendar edges used by every schedule", () => {
  it("adds days across month and year boundaries", () => {
    assert.equal(addDays("2024-01-31", 10), "2024-02-10");
    assert.equal(addDays("2024-01-21", 10), "2024-01-31");
    assert.equal(addDays("2024-02-29", 10), "2024-03-10");
    assert.equal(addDays("2024-12-31", 10), "2025-01-10");
  });

  it("clamps EDATE to the end of the month, including leap day and year rollover", () => {
    assert.equal(addMonths("2024-01-31", 1), "2024-02-29");
    assert.equal(addMonths("2023-01-31", 1), "2023-02-28");
    assert.equal(addMonths("2024-02-29", 12), "2025-02-28");
    assert.equal(addMonths("2024-12-31", 1), "2025-01-31");
    assert.equal(addMonths("2024-12-31", 2), "2025-02-28");
    assert.equal(addMonths("2024-12-29", 2), "2025-02-28");
  });
});

describe("six developer policies on CH-0301", () => {
  const unit = findPriceSheetUnit("CH-0301");

  it("uses the sample row from the price sheet", () => {
    assert.ok(unit);
    assert.equal(unit?.listGross, CH0301_GROSS);
    assert.equal(unit?.netArea, CH0301_AREA);
    assert.equal(PRICE_SHEET.deposit, 100_000_000);
    assert.equal(PRICE_SHEET.maintenanceRate, 0.02);
    assert.equal(PRICE_SHEET.vatRate, 0.1);
    assert.equal(PAYMENT_POLICIES.length, 6);
  });

  for (const policy of PAYMENT_POLICIES) {
    it(`${policy.sheetName} splits price, VAT and KPBT, and the deposit comes off lần 1`, () => {
      const quote = calculatePrice({
        policyId: policy.id,
        listGross: CH0301_GROSS,
        netArea: CH0301_AREA,
        anchorDate: "2026-09-09",
      });
      const expected = specBreakdown(CH0301_GROSS, CH0301_AREA, policy.discount);
      assert.equal(quote.breakdown.paymentDiscount, policy.discount);
      assert.equal(quote.breakdown.preVat, expected.preVat);
      assert.equal(quote.breakdown.vat, expected.vat);
      assert.equal(quote.breakdown.maintenance, expected.maintenance);
      assert.equal(quote.breakdown.total, expected.total);
      assert.equal(quote.paid, quote.breakdown.total);
      assert.equal(quote.rows[0]?.amount, PRICE_SHEET.deposit);
      const first = quote.rows.find((row) => row.batch === "Lần 1");
      assert.ok(first);
      assert.equal(
        first?.amount,
        excelRound(quote.breakdown.contract * 0.15 - PRICE_SHEET.deposit),
      );
      assert.ok(quote.rows.every((row) => Number.isInteger(row.amount)));
      if (policy.discount > 0) {
        assert.equal(quote.breakdown.maintenance, excelRound(quote.breakdown.preVat * 0.02));
      }
    });

    it(`${policy.sheetName} dates follow the deposit, including 31/01, 29/02 and 31/12`, () => {
      for (const anchor of ["2024-01-31", "2024-02-29", "2024-12-31", "2024-01-21"]) {
        const quote = calculatePrice({
          policyId: policy.id,
          listGross: CH0301_GROSS,
          netArea: CH0301_AREA,
          anchorDate: anchor,
          handoverDate: anchor,
        });
        assert.deepEqual(
          quote.rows.map((row) => row.isoDate),
          expectedDates(policy, anchor, anchor),
        );
      }
      const leapClamp = calculatePrice({
        policyId: policy.id,
        listGross: CH0301_GROSS,
        netArea: CH0301_AREA,
        anchorDate: "2024-01-21",
      });
      const dated = leapClamp.rows.filter((row) => row.isoDate).map((row) => row.isoDate);
      assert.equal(dated[0], "2024-01-21");
      assert.equal(dated[1], "2024-01-31");
      assert.equal(dated[2], "2024-02-29");
    });
  }
});

describe("C-06-12 with 3% agency discount", () => {
  const base = {
    listGross: 3_365_000_000,
    netArea: 47.2,
    agencyDiscount: 0.03,
    anchorDate: "2026-11-27",
  };
  const totals = {
    "htls-70": 3_266_990_291,
    "htls-45": 3_266_990_291,
    "thong-thuong": 3_136_133_109,
    gian: 3_201_561_700,
    "tts-95": 2_841_704_448,
    "tts-70": 2_939_847_335,
  } as const;

  for (const [policyId, total] of Object.entries(totals)) {
    it(`${policyId} total is ${total}`, () => {
      const quote = calculatePrice({ ...base, policyId });
      assert.equal(quote.breakdown.total, total);
      assert.equal(quote.paid, total);
      assert.equal(quote.rows[0]?.amount, 100_000_000);
    });
  }
});

describe("rejected inputs stay finite", () => {
  it("rejects empty, zero, negative and non-numeric fields", () => {
    assert.equal(parseVndInput(""), null);
    assert.equal(parseVndInput("0"), null);
    assert.equal(parseVndInput("abc"), null);
    assert.equal(parseVndInput("12a3"), 123);
    assert.equal(parsePercentInput("-1"), null);
    assert.equal(parsePercentInput("101"), null);
    assert.equal(parsePercentInput("3%"), null);
    assert.equal(parsePercentInput("100"), 1);
    assert.equal(parseAreaInput("0"), null);
    assert.equal(parseAreaInput("-5"), null);
    assert.equal(parseAreaInput("m2"), null);
  });

  it("a price below the 100 million deposit makes lần 1 negative without NaN", () => {
    const quote = calculatePrice({
      policyId: "thong-thuong",
      listGross: 50_000_000,
      netArea: 47.2,
      anchorDate: "2026-11-27",
    });
    assert.equal(quote.hasNegative, true);
    assert.ok(quote.rows[1] && quote.rows[1].amount < 0);
    assert.ok(quote.rows.every((row) => Number.isFinite(row.amount)));
    assert.equal(quote.paid, quote.breakdown.total);
  });

  it("a very large list price still sums to a finite total", () => {
    const quote = calculatePrice({
      policyId: "tts-95",
      listGross: 50_000_000_000,
      netArea: 47.2,
      anchorDate: "2026-11-27",
    });
    assert.equal(Number.isFinite(quote.breakdown.total), true);
    assert.equal(quote.paid, quote.breakdown.total);
    assert.ok(quote.rows.every((row) => Number.isSafeInteger(row.amount)));
  });
});
