/**
 * Phiếu tính giá tạm tính — CSBH 09/09/2026.
 * Rates, percents, and milestones are copied from the sample workbook
 * (sheets «Ẩn», «Bảng giá », «PTG »). Do not add a rate that is not on that sheet.
 *
 * Sheet quirks kept on purpose (see the PR):
 * - VAT excludes land at Bảng giá!R1 = 940.524 đ/m² thông thủy.
 *   Ẩn!B7 = 780.000 («Đơn giá QSD đất không chịu VAT») is not used by any PTG formula.
 * - KPBT is 2% of the discounted pre-VAT price, except when Early (F23) and the
 *   payment discount (F24) are both 0: then KPBT = list gross − pre-VAT − VAT
 *   so the total matches the typed list price. Special discount (F25) is not
 *   part of that check.
 * - «Vay HTLS 45%» disburses 50% from the bank (E100), not 45%.
 * - The sheet does not compute an interest-support amount. HTLS rows only split
 *   equity vs «Ngân hàng giải ngân».
 * - TT Giãn lần 6 has no date formula; later dates are blank until that day is typed.
 * - PTG!F19 is hardcoded to Bảng giá!N10. This calculator derives pre-VAT with the
 *   same column-N formula for the selected unit: (gross + 10% × land × area) / 1.12.
 */
export const PRICE_SHEET = {
  title: "Phiếu tính giá tạm tính",
  project: "Dự án The Camellia Sơn Trà Đà Nẵng",
  policyLabel: "Áp dụng cho CSBH 09/09/2026",
  policyNote:
    "Căn cứ theo ngày khách hàng vào đủ cọc 100 triệu và ký thỏa thuận đặt cọc / hợp đồng mua bán đúng thời gian quy định.",
  /** Cached PTG!F2 when the sample file was calculated. The cell formula is TODAY(). */
  sampleAnchorDate: "2026-09-09",
  deposit: 100_000_000,
  vatRate: 0.1,
  maintenanceRate: 0.02,
  landDeductionPerM2: 940_524,
  gift: "Miễn phí dịch vụ quản lý 1 năm",
  /** Only row on «Bảng giá» with a typed total (O10). */
  sampleUnitCode: "CH-0301",
  sampleListGross: 3_843_462_803,
} as const;

export type DateRule =
  | { kind: "anchor" }
  | { kind: "daysAfterAnchor"; days: number }
  | { kind: "monthsAfterPrevious"; months: number }
  | { kind: "sameAsPrevious" }
  | { kind: "handover" }
  | { kind: "label"; text: string };

export type AmountRule =
  | { kind: "fixed"; amount: number }
  | {
      kind: "percent";
      percent: number;
      minusDeposit?: boolean;
      plusMaintenance?: boolean;
    }
  | { kind: "maintenance" }
  | { kind: "residual"; nominalPercent: number };

export type ScheduleStep = {
  id: string;
  /** Empty when this row shares the previous đợt (merged cells on the sheet). */
  batch: string;
  title: string;
  date: DateRule;
  amount: AmountRule;
  payer?: string;
};

export type PaymentPolicyId = "thong-thuong" | "gian" | "htls-70" | "htls-45" | "tts-95" | "tts-70";

export type PaymentPolicy = {
  id: PaymentPolicyId;
  /** Value in PTG!F7 / sheet Ẩn column C. */
  sheetName: string;
  short: string;
  title: string;
  /** Ẩn column D. Applied at ký HĐMB, on the pre-VAT price. */
  discount: number;
  highlight: string;
  steps: readonly ScheduleStep[];
};

const depositStep = (id: string): ScheduleStep => ({
  id,
  batch: "Đặt cọc",
  title: "Đặt cọc",
  date: { kind: "anchor" },
  amount: { kind: "fixed", amount: PRICE_SHEET.deposit },
});

const signContract = (id: string): ScheduleStep => ({
  id,
  batch: "Lần 1",
  title: "Ngay khi ký HĐMB – Trong vòng 10 ngày kể từ ngày ký TTĐC",
  date: { kind: "daysAfterAnchor", days: 10 },
  amount: { kind: "percent", percent: 0.15, minusDeposit: true },
});

const monthAfterSign = (id: string, percent: number, payer?: string): ScheduleStep => ({
  id,
  batch: "Lần 2",
  title: "Trong vòng 1 tháng kể từ ngày ký HĐMB",
  date: { kind: "monthsAfterPrevious", months: 1 },
  amount: { kind: "percent", percent },
  payer,
});

const bankSlice = (id: string, percent: number): ScheduleStep => ({
  id,
  batch: "",
  title: "Ngân hàng giải ngân",
  date: { kind: "sameAsPrevious" },
  amount: { kind: "percent", percent },
  payer: "Ngân hàng giải ngân",
});

const certificate = (id: string, batch: string): ScheduleStep => ({
  id,
  batch,
  title: "Khi CĐT gửi thông báo làm thủ tục nhận GCN",
  date: { kind: "label", text: "TB GCN" },
  amount: { kind: "residual", nominalPercent: 0.05 },
});

function everyMonths(
  startLan: number,
  count: number,
  months: number,
  percent: number,
  title: string,
  idPrefix: string,
): ScheduleStep[] {
  return Array.from({ length: count }, (_, index) => {
    const lan = startLan + index;
    return {
      id: `${idPrefix}-lan-${lan}`,
      batch: `Lần ${lan}`,
      title,
      date: { kind: "monthsAfterPrevious", months },
      amount: { kind: "percent", percent },
    };
  });
}

export const PAYMENT_POLICIES: readonly PaymentPolicy[] = [
  {
    id: "thong-thuong",
    sheetName: "TT thông thường",
    short: "Thông thường",
    title: "Tiến độ thanh toán thông thường",
    discount: 0.04,
    highlight: "Chiết khấu 4%",
    steps: [
      depositStep("tt-coc"),
      signContract("tt-lan-1"),
      monthAfterSign("tt-lan-2", 0.15),
      ...everyMonths(3, 8, 2, 0.05, "Trong vòng 2 tháng kể từ hạn thanh toán kề trước", "tt"),
      {
        id: "tt-lan-11",
        batch: "Lần 11",
        title: "Theo thông báo nhận bàn giao nhà (Dự kiến Quý I/2028) (+KPBT)",
        date: { kind: "label", text: "TB BGN" },
        amount: { kind: "percent", percent: 0.25, plusMaintenance: true },
      },
      certificate("tt-lan-12", "Lần 12"),
    ],
  },
  {
    id: "gian",
    sheetName: "TT Giãn",
    short: "Giãn",
    title: "Tiến độ thanh toán giãn",
    discount: 0.02,
    highlight: "Chiết khấu 2%",
    steps: [
      depositStep("gian-coc"),
      signContract("gian-lan-1"),
      monthAfterSign("gian-lan-2", 0.15),
      ...everyMonths(3, 3, 5, 0.05, "Trong vòng 5 tháng kể từ hạn thanh toán kề trước", "gian"),
      {
        id: "gian-lan-6",
        batch: "Lần 6",
        title: "Nhận bàn giao CH để sử dụng theo thông báo của CĐT – Dự kiến Quý I/2028 (+KPBT)",
        date: { kind: "handover" },
        amount: { kind: "percent", percent: 0.05, plusMaintenance: true },
      },
      ...everyMonths(7, 3, 5, 0.1, "Trong vòng 5 tháng kể từ hạn thanh toán kề trước", "gian"),
      {
        id: "gian-lan-10",
        batch: "Lần 10",
        title:
          "Trong vòng 5 tháng kể từ hạn thanh toán kề trước (CĐT sẽ ký xác nhận biên bản bàn giao nhà sau khi KH TT đủ 95%+KPBT)",
        date: { kind: "monthsAfterPrevious", months: 5 },
        amount: { kind: "percent", percent: 0.15 },
      },
      certificate("gian-lan-11", "Lần 11"),
    ],
  },
  {
    id: "htls-70",
    sheetName: "Vay HTLS 70%",
    short: "HTLS 70%",
    title: "Vay vốn ngân hàng nhận HTLS 70%",
    discount: 0,
    highlight: "Giải ngân 70%",
    steps: [
      depositStep("h70-coc"),
      {
        ...signContract("h70-lan-1"),
        payer: "Vốn tự có",
      },
      monthAfterSign("h70-lan-2", 0.1, "Vốn tự có"),
      bankSlice("h70-lan-2-nh", 0.7),
      {
        id: "h70-lan-3",
        batch: "Lần 3",
        title: "Theo thông báo nhận bàn giao nhà - Dự kiến Quý I/2028 (+KPBT)",
        date: { kind: "label", text: "TB BGN" },
        amount: { kind: "maintenance" },
      },
      certificate("h70-lan-4", "Lần 4"),
    ],
  },
  {
    id: "htls-45",
    sheetName: "Vay HTLS 45%",
    short: "HTLS 45%",
    title: "Vay vốn ngân hàng nhận HTLS 45%",
    discount: 0,
    highlight: "Giải ngân 50%",
    steps: [
      depositStep("h45-coc"),
      {
        ...signContract("h45-lan-1"),
        payer: "Vốn tự có",
      },
      monthAfterSign("h45-lan-2", 0.1, "Vốn tự có"),
      bankSlice("h45-lan-2-nh", 0.5),
      {
        id: "h45-lan-3",
        batch: "Lần 3",
        title: "Theo thông báo nhận bàn giao nhà - Dự kiến Quý I/2028 (+KPBT)",
        date: { kind: "label", text: "TB BGN" },
        amount: { kind: "percent", percent: 0.2, plusMaintenance: true },
      },
      certificate("h45-lan-4", "Lần 4"),
    ],
  },
  {
    id: "tts-95",
    sheetName: "TTS 95%",
    short: "TTS 95%",
    title: "Thanh toán sớm 95%",
    discount: 0.13,
    highlight: "Chiết khấu 13%",
    steps: [
      depositStep("t95-coc"),
      signContract("t95-lan-1"),
      monthAfterSign("t95-lan-2", 0.8),
      {
        id: "t95-lan-3",
        batch: "Lần 3",
        title: "Theo thông báo nhận bàn giao nhà - Dự kiến Quý I/2028 (+KPBT)",
        date: { kind: "label", text: "TB BGN" },
        amount: { kind: "maintenance" },
      },
      certificate("t95-lan-4", "Lần 4"),
    ],
  },
  {
    id: "tts-70",
    sheetName: "TTS 70%",
    short: "TTS 70%",
    title: "Thanh toán sớm 70%",
    discount: 0.1,
    highlight: "Chiết khấu 10%",
    steps: [
      depositStep("t70-coc"),
      signContract("t70-lan-1"),
      monthAfterSign("t70-lan-2", 0.55),
      {
        id: "t70-lan-3",
        batch: "Lần 3",
        title: "Theo thông báo nhận bàn giao nhà - Dự kiến Quý I/2028 (+KPBT)",
        date: { kind: "label", text: "TB BGN" },
        amount: { kind: "percent", percent: 0.25, plusMaintenance: true },
      },
      certificate("t70-lan-4", "Lần 4"),
    ],
  },
];

export function findPaymentPolicy(id: string): PaymentPolicy | undefined {
  return PAYMENT_POLICIES.find((policy) => policy.id === id);
}
