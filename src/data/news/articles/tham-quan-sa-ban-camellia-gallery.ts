import type { NewsArticle } from "../types";

export const listRank = 70;

export const article = {
  slug: "tham-quan-sa-ban-camellia-gallery",
  date: "28.09.2026",
  title: "Tham quan sa bàn The Camellia Sơn Trà tại Camellia Gallery",
  excerpt:
    "Chủ đầu tư đã cho phép khách tham quan sa bàn dự án tại Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng. Đặt lịch qua Zalo 0934 885 108.",
  image: "/images/news-sa-ban-og.jpg",
  poster: "/images/news-sa-ban-hero.webp",
  imageObjectClass: "object-center",
  gallery: [
    "/images/news-sa-ban-hero.webp",
    "/images/news-sales-gallery.webp",
    "/images/exterior-1.webp",
  ],
  body: [
    {
      text: "Chủ đầu tư đã cho phép khách tham quan sa bàn dự án The Camellia Sơn Trà – Đà Nẵng tại Camellia Gallery. Anh chị quan tâm an cư hoặc tích sản có thể đến xem mô hình tổng thể, cảm nhận không gian gallery và nhận tư vấn trực tiếp trước khi chọn căn.",
    },
    {
      heading: "Sa bàn tổng thể 2 tòa tại Camellia Gallery",
      text: "Tại Camellia Gallery, sa bàn trực quan giúp hình dung quy hoạch và kiến trúc hai tòa tháp của The Camellia Sơn Trà — khu đất khoảng 4.299,9 m², 469 căn hộ, 25 tầng nổi & 2 hầm. Không gian gallery mở tầm nhìn panorama sông Hàn và biển Đà Nẵng; đội ngũ tư vấn đồng hành để anh chị chọn loại căn, tầng và hướng view phù hợp.",
    },
    {
      heading: "Địa chỉ Camellia Gallery",
      text: "Camellia Gallery nằm tại Tầng 9, Bạch Đằng Complex, Đà Nẵng. Dự án The Camellia Sơn Trà do Công ty TNHH Địa ốc Thành Lâm làm chủ đầu tư; MBLAND phát triển dự án; WELAND phát triển kinh doanh; phân phối DKRA Virgo. Giá công bố từ 1,98 tỷ; bàn giao dự kiến 2028.",
    },
    {
      heading: "Đặt lịch tham quan sa bàn",
      text: "Anh chị có thể nhắn Zalo / gọi Hotline 0934 885 108 hoặc để lại nhu cầu tại trang Liên hệ để đặt lịch tham quan sa bàn và nhận bảng giá cập nhật. Ghé thêm bài ra mắt văn phòng bán hàng để xem Soft Opening / Grand Opening, hoặc xem mặt bằng các loại căn trên trang Căn hộ.",
      links: [
        {
          to: "/tin-tuc/ra-mat-van-phong-ban-hang",
          label: "Ra mắt văn phòng bán hàng / Sales Gallery",
        },
        {
          to: "/can-ho",
          label: "Xem mặt bằng & loại căn",
        },
        {
          to: "/lien-he",
          label: "Đặt lịch tham quan — Liên hệ",
        },
      ],
    },
  ],
} satisfies NewsArticle;
