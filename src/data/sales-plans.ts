/**
 * Chính sách bán hàng — 4 phương án thanh toán.
 * Encoded from sales posters; do not commit poster JPGs.
 */
export const SALES_PLANS = [
  {
    id: "htls",
    short: "HTLS",
    title: "Phương án thanh toán HTLS",
    tagline: "Vay ngân hàng · hỗ trợ lãi suất",
    highlight: "Lên tới 70% trong 18 tháng",
    badge: "Ân hạn nợ gốc 05 năm (theo NH)",
    funding: "Vay ngân hàng",
    discount: null as string | null,
    banks: ["VietinBank", "MB", "SHB"] as string[],
    timeline: [
      { label: "Ký TTĐC", detail: "100 triệu" },
      { label: "Sau 10 ngày", detail: "Ký HĐMB · 15%" },
      {
        label: "NH giải ngân",
        detail: "70% / đợt 10% · HTLS 0%, miễn phí trả nợ trước hạn",
      },
      { label: "Bàn giao KPBT", detail: "Dự kiến Q1/2028" },
      { label: "GCN", detail: "5% khi CĐT thông báo" },
    ],
    notes: [
      "(*) Tiến độ giải ngân / thanh toán không muộn hơn thông báo bàn giao.",
    ],
  },
  {
    id: "chuan",
    short: "Chuẩn",
    title: "Phương án thanh toán chuẩn",
    tagline: "Vốn tự có · nhịp đều",
    highlight: "Chiết khấu 4%",
    badge: "Vốn tự có",
    funding: "Vốn tự có",
    discount: "4%",
    banks: [] as string[],
    timeline: [
      { label: "Ký TTĐC", detail: "100 triệu" },
      { label: "Sau 10 ngày", detail: "Ký HĐMB · 15%" },
      { label: "Sau 1 tháng", detail: "15%" },
      { label: "Theo tiến độ", detail: "40% · 5%/đợt mỗi 2 tháng" },
      { label: "Bàn giao KPBT", detail: "25% + KPBT · dự kiến Q1/2028" },
      { label: "GCN", detail: "5%" },
    ],
    notes: [] as string[],
  },
  {
    id: "tts95",
    short: "TTS 95%",
    title: "Thanh toán sớm 95%",
    tagline: "Vốn tự có · ưu đãi lớn",
    highlight: "Chiết khấu 13%",
    badge: "Vốn tự có",
    funding: "Vốn tự có",
    discount: "13%",
    banks: [] as string[],
    timeline: [
      { label: "Ký TTĐC", detail: "100 triệu" },
      { label: "Ký HĐMB", detail: "15%" },
      { label: "Sau 1 tháng", detail: "80%" },
      { label: "Bàn giao KPBT", detail: "Dự kiến Q1/2028" },
      { label: "GCN", detail: "5%" },
    ],
    notes: [] as string[],
  },
  {
    id: "thanh-thoi",
    short: "Thảnh thơi",
    title: "Phương án thảnh thơi",
    tagline: "Thanh toán 50% nhận nhà",
    highlight: "Chiết khấu 2%",
    badge: "50% nhận nhà sử dụng",
    funding: "Vốn tự có · giãn sau bàn giao",
    discount: "2%",
    banks: [] as string[],
    timeline: [
      { label: "Ký TTĐC", detail: "100 triệu" },
      { label: "Ký HĐMB", detail: "15%" },
      { label: "Sau 1 tháng", detail: "15%" },
      { label: "3 đợt × 5%", detail: "Mỗi 3 tháng" },
      {
        label: "Bàn giao sử dụng",
        detail: "5% + KPBT · Q1/2028 (= 50%)",
      },
      {
        label: "Sau bàn giao",
        detail: "3×10% + 15% nhận bàn giao chính thức (~45% trong ~20 tháng)",
      },
      { label: "GCN", detail: "5%" },
    ],
    notes: [] as string[],
  },
] as const;

export type SalesPlanId = (typeof SALES_PLANS)[number]["id"];
export type SalesPlan = (typeof SALES_PLANS)[number];

export const SALES_PLANS_META = {
  kicker: "Chính sách bán hàng",
  headline: "Chọn nhịp thanh toán phù hợp bạn",
  sub: "Giá từ 1,98 tỷ · 469 căn · sổ hồng lâu dài. Bốn PA: HTLS 70%/18th · Chuẩn 4% · TTS 95%→13% · Thảnh thơi 50%+CK 2%. Early Bird & ưu đãi khác theo đợt.",
  cta: "Nhận bảng giá",
  disclaimer:
    "Ưu đãi, lãi suất và điều kiện vay theo đợt mở bán và chương trình ngân hàng tại thời điểm ký. Hotline 0934 885 108.",
} as const;
