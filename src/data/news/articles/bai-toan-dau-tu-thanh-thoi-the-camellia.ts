import type { NewsArticle } from "../types";

export const listRank = 69;

export const article = {
  slug: "bai-toan-dau-tu-thanh-thoi-the-camellia",
  date: "28.09.2026",
  title: "Bài toán đầu tư “Thảnh Thơi” tại The Camellia Sơn Trà",
  excerpt:
    "Phương án Thảnh thơi: thanh toán 50% nhận nhà, giãn dòng tiền tới 38 tháng; 45% còn lại chia 4 đợt trong ~20 tháng sau nhận nhà. Minh họa lợi nhuận và thuê tham khảo — không phải cam kết. Liên hệ / Zalo 0934 885 108.",
  image: "/images/news-thanh-thoi-og.jpg",
  poster: "/images/news-thanh-thoi-hero.webp",
  imageObjectClass: "object-center",
  gallery: [
    "/images/news-thanh-thoi-hero.webp",
    "/images/exterior-1.webp",
    "/images/news-gio-hang.webp",
  ],
  body: [
    {
      text: "The Camellia Sơn Trà công bố giá từ 1,98 tỷ/căn cùng nhiều phương án thanh toán. Phương án Thảnh thơi hướng tới người mua muốn nhận nhà với vốn một phần đầu kỳ: thanh toán 50% nhận nhà, chiết khấu 2%, giãn ~45% sau bàn giao trong khoảng 20 tháng (thường 4 đợt), cộng 5% sổ. Tổng nhịp thường tới khoảng 38 tháng. Các số trên thẻ / bảng là minh họa — giá sàn site vẫn từ 1,98 tỷ.",
    },
    {
      heading: "Nhịp dòng tiền (minh họa)",
      text: "T9/2026 ký HĐMB → ~18 tháng thanh toán tới 50% đến nhận nhà (dự kiến Q1/2028) → ~20 tháng sau nhận nhà thanh toán tiếp ~45% chia 4 đợt → 5% khi nhận sổ / GCN. Tiến độ thực tế theo thông báo bàn giao và phụ lục — không phải cam kết cứng theo lịch minh họa.",
    },
    {
      heading: "Lưu ý quan trọng",
      text: "Mọi thông tin, giá minh họa, lợi nhuận ước tính và mức thuê mang tính minh họa, tham khảo, không phải cam kết của chủ đầu tư hay đơn vị phân phối. Giá bán minh họa trong bảng đã gồm VAT + KPBT và đã trừ CK 2% của phương án Thảnh thơi — không phải giá sàn công bố. Giá sàn trên website: từ 1,98 tỷ. Ưu đãi, chiết khấu, tiến độ thanh toán và điều kiện nhận nhà / sổ theo phụ lục và chính sách đợt tại thời điểm ký. Bài này không thay bảng giá chính thức.",
    },
    {
      heading: "So với các phương án khác trên site",
      text: "Site đang có bốn PA chính: HTLS (vay ngân hàng, hỗ trợ lãi theo đợt/ngân hàng); Chuẩn (chiết khấu 4%); TTS 95% (chiết khấu đến 13%); Thảnh thơi (50% nhận nhà, chiết khấu 2%). Muốn nhận nhà với vốn một phần và giãn phần còn lại sau bàn giao: hỏi Thảnh thơi. Ưu tiên vốn vay đầu kỳ: hỏi HTLS. Có vốn và muốn tối ưu giá: TTS hoặc Chuẩn. Chi tiết khung PA xem bài chính sách bán hàng; lãi suất và điều kiện vay chỉ theo chương trình ngân hàng / đợt đã công bố — không suy diễn thêm.",
      links: [
        {
          to: "/tin-tuc/chinh-sach-ban-hang-htls-early-bird-chiet-khau",
          label: "Chính sách bán hàng: HTLS · Early Bird · CK",
        },
        {
          to: "/can-ho",
          label: "Xem mặt bằng & loại căn",
        },
      ],
    },
    {
      heading: "Nhận tư vấn phương án Thảnh thơi",
      text: "Để đối chiếu quỹ căn, tầng/view và phụ lục thanh toán đúng đợt, anh chị để lại nhu cầu tại trang Liên hệ hoặc nhắn Zalo / gọi Hotline 0934 885 108. Tư vấn sẽ gửi bảng giá cập nhật (giá công bố từ 1,98 tỷ) và giải thích nhịp 50% nhận nhà — giãn ~45% sau bàn giao — 5% sổ theo chính sách hiện hành.",
      links: [
        {
          to: "/lien-he",
          label: "Liên hệ — nhận bảng giá & tư vấn Thảnh thơi",
        },
        {
          to: "/",
          label: "Trang chủ — xem các phương án thanh toán",
        },
      ],
    },
  ],
} satisfies NewsArticle;
