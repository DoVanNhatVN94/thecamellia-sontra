import type { NewsArticle } from "../types";

export const listRank = 74;

export const article = {
  slug: "ra-mat-van-phong-ban-hang",
  date: "24.09.2026",
  title: "Ra mắt văn phòng bán hàng The Camellia Sơn Trà",
  excerpt:
    "The Camellia Sơn Trà chính thức ra mắt Sales Gallery — không gian trải nghiệm mới tại Camellia Gallery, Tầng 9, Bạch Đằng Complex (50 Bạch Đằng), Đà Nẵng. Soft Opening 25/09; Grand Opening 10/10.",
  image: "/images/featured-sales-gallery-16x9.jpg",
  poster: "/images/news-sales-gallery.webp",
  imageObjectClass: "object-top",
  gallery: [
    "/images/news-sales-gallery.webp",
    "/images/exterior-1.webp",
    "/images/hero-aerial.webp",
  ],
  body: [
    {
      text: "The Camellia Sơn Trà chính thức ra mắt Sales Gallery / văn phòng bán hàng — không gian chào đón chủ nhân tương lai tại Camellia Gallery, Tầng 9, Bạch Đằng Complex (50 Bạch Đằng), Đà Nẵng. Đây là nơi anh chị trải nghiệm dự án SON TRA – DA NANG trước khi quyết định an cư hay tích sản.",
    },
    {
      heading: "Không gian thưởng lãm",
      text: "Sales Gallery mở tầm nhìn panorama khoảng 270° sông Hàn và biển Đà Nẵng. Sa bàn trực quan giúp hình dung quy hoạch và kiến trúc tòa nhà; đội ngũ tư vấn chuyên nghiệp đồng hành để anh chị chọn căn, tầng và hướng view phù hợp.",
    },
    {
      heading: "Cột mốc ra mắt Sales Gallery",
      text: "Soft Opening 25/09: mở cửa đón khách và đào tạo tại sa bàn. Grand Opening 10/10: lễ khai trương chính thức. The Camellia Sơn Trà kính mời anh chị ghé thăm Sales Gallery để cảm nhận không gian và nhận tư vấn quỹ căn.",
    },
    {
      heading: "Địa chỉ",
      text: "Camellia Gallery, Tầng 9, Bạch Đằng Complex (50 Bạch Đằng), Đà Nẵng. Liên hệ Hotline / Zalo 0934 885 108 hoặc để lại nhu cầu tại trang Liên hệ để đặt lịch tham quan và nhận bảng giá cập nhật (giá công bố từ 1,98 tỷ).",
      links: [
        {
          to: "/lien-he",
          label: "Đến trang liên hệ — đặt lịch tham quan",
        },
      ],
    },
  ],
} satisfies NewsArticle;
