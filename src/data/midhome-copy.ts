/**
 * Mid-homepage copy — Luna-owned strings.
 * Swap values here when Luna revises; layout components import this object only.
 */
export const MIDHOME_COPY = {
  statement: {
    kicker: "Life WITHIN · Sơn Trà",
    headline: "Biển kề rừng. Nhà thuộc về bạn.",
    sub: "The Camellia Sơn Trà — 469 căn, sổ hồng sở hữu lâu dài, giá từ 1,98 tỷ.",
    cta: "Đăng ký xem nhà mẫu",
  },
  understand: {
    kicker: "Tinh thần dự án",
    headline: "Ngôi nhà hiểu bạn muốn chậm lại",
    body: "Life WITHIN là chỗ thuộc về sau một ngày dài — không ồn ào, không phô trương. Không gian đủ để thở, đủ để về. The Camellia dành cho người chọn Sơn Trà vì muốn ở thật, không chỉ “có chỗ”.",
  },
  facts: {
    kicker: "Thông tin dự án",
    headline: "Một tòa tháp, một biểu tượng",
  },
  /** Short teaser — SalesPlans (#chinh-sach-ban-hang) is the source of truth for offers. */
  policy: {
    kicker: "Chính sách",
    headline: "Linh hoạt dòng tiền",
    sub: "Nhiều phương án HTLS và chiết khấu — xem chi tiết bên dưới.",
    cta: "Xem chính sách bán hàng",
    ctaHref: "#chinh-sach-ban-hang",
  },
  legal: {
    kicker: "Giá trị tạo niềm tin",
    headline: "Pháp lý rõ — sở hữu lâu dài",
    sub: "Hồ sơ công bố theo lộ trình; căn hộ hình thành trong tương lai đủ điều kiện kinh doanh.",
    cta: "Nhận quỹ căn phù hợp",
    partners: "Archivina · Delta · MBLAND · WELAND · DKRA Virgo.",
    items: [
      {
        title: "Chủ trương đầu tư",
        date: "31.01.2024",
        body: "UBND TP Đà Nẵng chấp thuận chủ trương đầu tư và nhà đầu tư (CĐT Thành Lâm).",
      },
      {
        title: "Quy hoạch 1/500",
        date: "22.01.2025",
        body: "Phê duyệt quy hoạch chi tiết tỷ lệ 1/500.",
      },
      {
        title: "Miễn GPXD",
        date: "",
        body: "Theo công văn Sở Xây dựng Đà Nẵng (công bố công khai), dự án thuộc trường hợp miễn giấy phép xây dựng theo quy định.",
      },
      {
        title: "Đủ điều kiện bán",
        date: "13.07.2026",
        body: "Sở Xây dựng xác nhận 469 căn đủ điều kiện bán nhà ở hình thành trong tương lai.",
      },
      {
        title: "Sổ hồng lâu dài",
        date: "",
        body: "Hình thức sở hữu: sổ hồng sở hữu lâu dài sau bàn giao và hoàn tất thủ tục.",
      },
    ],
  },
} as const;

export const MIDHOME_IMAGES = {
  statement: "/images/midhome-statement.webp",
  building: "/images/midhome-building.webp",
  factsBg: "/images/midhome-facts-bg.webp",
} as const;
