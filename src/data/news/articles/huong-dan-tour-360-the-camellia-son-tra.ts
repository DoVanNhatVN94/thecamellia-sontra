import type { NewsArticle } from "../types";

export const listRank = 77;

export const article = {
  slug: "huong-dan-tour-360-the-camellia-son-tra",
  date: "23.09.2026",
  title: "Hướng dẫn Tour 360 The Camellia Sơn Trà",
  excerpt:
    "Tour 360 The Camellia Sơn Trà nằm tại trang Khám phá / Tour 360 (PanaMotion). Mở link trên máy tính hoặc điện thoại, xoay góc nhìn để xem không gian dự án trước khi đặt lịch xem thực tế tại Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng.",
  image: "/images/hero-aerial.webp",
  poster: "/images/exterior-1.webp",
  gallery: [
    "/images/exterior-1.webp",
    "/images/hero-aerial.webp",
    "/images/exterior-2.webp",
    "/images/facade.webp",
  ],
  body: [
    {
      text: "Tour 360 The Camellia Sơn Trà nằm tại trang Khám phá / Tour 360 (PanaMotion). Anh mở link trên máy tính hoặc điện thoại, xoay góc nhìn để xem không gian dự án trước khi đặt lịch xem thực tế tại Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng.",
    },
    {
      heading: "Tour 360 khác gì “Tìm hiểu dự án”?",
      text: "Tour 360 / Khám phá 360 (/kham-pha): trải nghiệm xoay nhìn không gian (PanaMotion). Tìm hiểu dự án (ví dụ #du-an / giới thiệu): đọc quy mô, giá từ 1,98 tỷ, 469 căn, pháp lý, tiện ích bằng chữ và ảnh tĩnh. Hai lối vào khác nhau — tránh nhầm “Khám phá” với toàn bộ thông tin dự án.",
      links: [
        {
          to: "/kham-pha",
          label: "Mở Tour 360",
        },
        {
          to: "/gioi-thieu",
          label: "Tìm hiểu dự án / Fact sheet",
        },
      ],
    },
    {
      heading: "Cách xem Tour 360 trên điện thoại và máy tính",
      text: "Một, vào thecamellia-sontra.com/kham-pha. Hai, đợi tour tải (có thể cần mạng ổn định). Ba, kéo / vuốt hoặc dùng chuột để xoay góc nhìn; pinch để phóng nếu trình duyệt hỗ trợ. Bốn, nếu tour chưa hiện: thử trình duyệt khác hoặc Wi‑Fi mạnh hơn, rồi tải lại trang.",
      links: [
        {
          to: "/kham-pha",
          label: "Trải nghiệm Tour 360",
        },
      ],
    },
    {
      heading: "Nên chú ý gì khi “đi tour” ảo?",
      text: "Đối chiếu với fact đã công bố: 469 căn, 25 tầng & 2 hầm, tầng điển hình 22 căn, tiện ích xếp lớp Wellness · Nature · Community, vị trí gần biển Mân Thái khoảng 200 m (theo số công bố trên site). Tour giúp cảm nhận không gian; bảng giá và quỹ căn vẫn cần tư vấn viên xác nhận.",
    },
    {
      heading: "Sau Tour 360 — bước tiếp theo",
      text: "Khi đã xem xong, anh có thể đọc Giới thiệu, Tiện ích hoặc gửi nhu cầu loại căn qua Liên hệ. Hotline / Zalo 0934 885 108.",
      links: [
        {
          to: "/gioi-thieu",
          label: "Giới thiệu dự án",
        },
        {
          to: "/tien-ich",
          label: "Tiện ích",
        },
        {
          to: "/lien-he",
          label: "Liên hệ — nhận bảng giá",
        },
      ],
    },
    {
      heading: "Tour 360 có thay nhà mẫu không?",
      text: "Không — đây là công cụ xem trước; lịch nhà mẫu / tư vấn vẫn qua liên hệ.",
      links: [
        {
          to: "/lien-he",
          label: "Đặt lịch / nhận tư vấn",
        },
      ],
    },
    {
      heading: "Có cần tải app không?",
      text: "Không — mở bằng trình duyệt tại /kham-pha.",
      links: [
        {
          to: "/kham-pha",
          label: "Mở Tour 360 trên trình duyệt",
        },
      ],
    },
  ],
} satisfies NewsArticle;
