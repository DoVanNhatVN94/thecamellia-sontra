import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PRICE_SHEET } from "../data/price-sheet.ts";
import {
  addMonths,
  calculatePrice,
  deriveListPreVat,
  excelRound,
  parsePercentInput,
  parseVndInput,
  type ScheduleRow,
} from "./price-calculator.ts";

/** PTG!F19 cached value: Bảng giá!N10 for CH-0301, not the area of the selected code. */
const CACHED_LIST_PRE_VAT = 3_437_398_733.8571424;
const CACHED_GROSS = PRICE_SHEET.sampleListGross;
/** PTG!F10 is CH-0815; F14 (named DT) is that unit's net area. */
const CACHED_AREA = 57.4;
const ANCHOR = PRICE_SHEET.sampleAnchorDate;

function expectMoney(rows: ScheduleRow[], amounts: number[], dates: string[]) {
  assert.equal(rows.length, amounts.length);
  assert.deepEqual(
    rows.map((row) => row.amount),
    amounts,
  );
  assert.deepEqual(
    rows.map((row) => row.dateLabel),
    dates,
  );
  assert.equal(
    rows.reduce((sum, row) => sum + row.amount, 0),
    amounts.reduce((sum, amount) => sum + amount, 0),
  );
}

describe("phiếu tính giá — cached workbook (CH-0815 area, CH-0301 price, discount 0)", () => {
  it("derives N10 the way cột N does for CH-0301", () => {
    assert.equal(deriveListPreVat(CACHED_GROSS, 68.3), CACHED_LIST_PRE_VAT);
    assert.equal(excelRound(CACHED_LIST_PRE_VAT), 3_437_398_734);
  });

  const shared = {
    listGross: CACHED_GROSS,
    netArea: CACHED_AREA,
    listPreVat: CACHED_LIST_PRE_VAT,
    paymentDiscount: 0,
    anchorDate: ANCHOR,
  };

  it("matches every cached HTLS 45% installment", () => {
    const quote = calculatePrice({ ...shared, policyId: "htls-45" });
    assert.equal(quote.breakdown.preVat, 3_437_398_734);
    assert.equal(quote.breakdown.vat, 338_341_266);
    assert.equal(quote.breakdown.maintenance, 67_722_803);
    assert.equal(quote.breakdown.contract, 3_775_740_000);
    assert.equal(quote.breakdown.total, 3_843_462_803);
    assert.equal(quote.breakdown.unitPriceAfter, 59_884_995);
    assert.equal(quote.paid, quote.breakdown.total);
    expectMoney(
      quote.rows,
      [100_000_000, 466_361_000, 377_574_000, 1_887_870_000, 822_870_803, 188_787_000],
      [
        "09/09/2026",
        "19/09/2026",
        "19/10/2026",
        "19/10/2026",
        "Thông báo bàn giao",
        "Thông báo nhận sổ",
      ],
    );
    assert.deepEqual(
      quote.rows.map((row) => row.rateLabel),
      ["—", "15%", "10%", "50%", "20% + KPBT", "5%"],
    );
    assert.equal(quote.rows[2].payer, "Vốn tự có");
    assert.equal(quote.rows[3].payer, "Ngân hàng giải ngân");
    assert.equal(quote.rows[3].marker, "");
  });

  it("matches the other five cached schedule blocks at the same F30", () => {
    const ordinary = calculatePrice({ ...shared, policyId: "thong-thuong" });
    expectMoney(
      ordinary.rows,
      [
        100_000_000, 466_361_000, 566_361_000, 188_787_000, 188_787_000, 188_787_000, 188_787_000,
        188_787_000, 188_787_000, 188_787_000, 188_787_000, 1_011_657_803, 188_787_000,
      ],
      [
        "09/09/2026",
        "19/09/2026",
        "19/10/2026",
        "19/12/2026",
        "19/02/2027",
        "19/04/2027",
        "19/06/2027",
        "19/08/2027",
        "19/10/2027",
        "19/12/2027",
        "19/02/2028",
        "Thông báo bàn giao",
        "Thông báo nhận sổ",
      ],
    );

    const spread = calculatePrice({ ...shared, policyId: "gian" });
    expectMoney(
      spread.rows,
      [
        100_000_000, 466_361_000, 566_361_000, 188_787_000, 188_787_000, 188_787_000, 256_509_803,
        377_574_000, 377_574_000, 377_574_000, 566_361_000, 188_787_000,
      ],
      [
        "09/09/2026",
        "19/09/2026",
        "19/10/2026",
        "19/03/2027",
        "19/08/2027",
        "19/01/2028",
        "Theo thông báo của CĐT",
        "Sau ngày nhận bàn giao",
        "Sau ngày nhận bàn giao",
        "Sau ngày nhận bàn giao",
        "Sau ngày nhận bàn giao",
        "Thông báo nhận sổ",
      ],
    );

    const htls70 = calculatePrice({ ...shared, policyId: "htls-70" });
    expectMoney(
      htls70.rows,
      [100_000_000, 466_361_000, 377_574_000, 2_643_018_000, 67_722_803, 188_787_000],
      [
        "09/09/2026",
        "19/09/2026",
        "19/10/2026",
        "19/10/2026",
        "Thông báo bàn giao",
        "Thông báo nhận sổ",
      ],
    );
    assert.equal(htls70.rows[4].rateLabel, "KPBT");

    const early95 = calculatePrice({ ...shared, policyId: "tts-95" });
    expectMoney(
      early95.rows,
      [100_000_000, 466_361_000, 3_020_592_000, 67_722_803, 188_787_000],
      ["09/09/2026", "19/09/2026", "19/10/2026", "Thông báo bàn giao", "Thông báo nhận sổ"],
    );

    const early70 = calculatePrice({ ...shared, policyId: "tts-70" });
    expectMoney(
      early70.rows,
      [100_000_000, 466_361_000, 2_076_657_000, 1_011_657_803, 188_787_000],
      ["09/09/2026", "19/09/2026", "19/10/2026", "Thông báo bàn giao", "Thông báo nhận sổ"],
    );

    for (const quote of [ordinary, spread, htls70, early95, early70]) {
      assert.equal(quote.paid, CACHED_GROSS);
      assert.equal(quote.breakdown.total, CACHED_GROSS);
    }
  });
});

describe("phiếu tính giá — CH-0301 with the policy discount applied", () => {
  const unit = { listGross: CACHED_GROSS, netArea: 68.3, anchorDate: ANCHOR };

  it("TTS 95% takes 13% and every installment sums to the discounted total", () => {
    const quote = calculatePrice({ ...unit, policyId: "tts-95" });
    assert.equal(quote.breakdown.paymentDiscount, 0.13);
    assert.equal(quote.breakdown.preVat, 2_990_536_898);
    assert.equal(quote.breakdown.vat, 292_629_911);
    assert.equal(quote.breakdown.maintenance, 59_810_738);
    assert.equal(quote.breakdown.maintenanceFromGross, false);
    assert.equal(quote.breakdown.total, 3_342_977_547);
    assert.equal(quote.breakdown.discountAmount, 446_861_836);
    expectMoney(
      quote.rows,
      [100_000_000, 392_475_021, 2_626_533_447, 59_810_738, 164_158_341],
      ["09/09/2026", "19/09/2026", "19/10/2026", "Thông báo bàn giao", "Thông báo nhận sổ"],
    );
    assert.equal(quote.paid, quote.breakdown.total);
  });

  it("TT thông thường takes 4% and the last đợt absorbs the rounding residual", () => {
    const quote = calculatePrice({ ...unit, policyId: "thong-thuong" });
    assert.equal(quote.breakdown.preVat, 3_299_902_785);
    assert.equal(quote.breakdown.vat, 323_566_500);
    assert.equal(quote.breakdown.maintenance, 65_998_056);
    assert.equal(quote.breakdown.total, 3_689_467_341);
    expectMoney(
      quote.rows,
      [
        100_000_000, 443_520_393, 543_520_393, 181_173_464, 181_173_464, 181_173_464, 181_173_464,
        181_173_464, 181_173_464, 181_173_464, 181_173_464, 971_865_377, 181_173_466,
      ],
      [
        "09/09/2026",
        "19/09/2026",
        "19/10/2026",
        "19/12/2026",
        "19/02/2027",
        "19/04/2027",
        "19/06/2027",
        "19/08/2027",
        "19/10/2027",
        "19/12/2027",
        "19/02/2028",
        "Thông báo bàn giao",
        "Thông báo nhận sổ",
      ],
    );
    const nominalFivePercent = excelRound(quote.breakdown.contract * 0.05);
    assert.equal(nominalFivePercent, 181_173_464);
    assert.notEqual(quote.rows.at(-1)?.amount, nominalFivePercent);
    assert.equal(quote.paid, quote.breakdown.total);
  });
});

describe("phiếu tính giá — dates and the KPBT branch", () => {
  it("EDATE clamps to the end of the month and chains TT Giãn from the handover day", () => {
    assert.equal(addMonths("2028-03-31", 5), "2028-08-31");
    assert.equal(addMonths("2028-08-31", 5), "2029-01-31");
    assert.equal(addMonths("2029-01-31", 5), "2029-06-30");
    const quote = calculatePrice({
      policyId: "gian",
      listGross: CACHED_GROSS,
      netArea: 68.3,
      anchorDate: ANCHOR,
      handoverDate: "2028-03-31",
    });
    assert.deepEqual(
      quote.rows.slice(6, 11).map((row) => row.isoDate),
      ["2028-03-31", "2028-08-31", "2029-01-31", "2029-06-30", "2029-11-30"],
    );
  });

  it("a special discount alone does not change the gross total, matching SUM(F23:F24)", () => {
    const quote = calculatePrice({
      policyId: "htls-70",
      listGross: CACHED_GROSS,
      netArea: 68.3,
      anchorDate: ANCHOR,
      specialDiscount: 0.05,
    });
    assert.equal(quote.breakdown.maintenanceFromGross, true);
    assert.equal(quote.breakdown.total, CACHED_GROSS);
    assert.ok(quote.breakdown.preVat < excelRound(deriveListPreVat(CACHED_GROSS, 68.3)));
  });

  it("parses Vietnamese money and percent fields", () => {
    assert.equal(parseVndInput("3.843.462.803"), CACHED_GROSS);
    assert.equal(parseVndInput(""), null);
    assert.equal(parsePercentInput("13"), 0.13);
    assert.equal(parsePercentInput("2,5"), 0.025);
    assert.equal(parsePercentInput(""), 0);
    assert.equal(parsePercentInput("101"), null);
  });
});
