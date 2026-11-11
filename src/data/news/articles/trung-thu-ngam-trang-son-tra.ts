import type { NewsArticle } from "../types";

export const listRank = 72;

export const article = {
  slug: "trung-thu-ngam-trang-son-tra",
  date: "25.09.2026",
  title: "Ngắm trăng tròn vui sum vầy — Trung thu tại The Camellia Sơn Trà",
  excerpt:
    "Ngắm trăng tròn trên biển sóng vỗ, cùng người thân phá cỗ đêm rằm. The Camellia Sơn Trà thương chúc Quý khách hàng, Quý đại lý, Quý đối tác và gia đình một mùa Trung thu an yên, ấm áp và trọn vẹn niềm vui.",
  image: "/images/featured-trung-thu-16x9.jpg",
  poster: "/images/news-trung-thu.webp",
  imageObjectClass: "object-top",
  gallery: [
    "/images/news-trung-thu.webp",
    "/images/featured-trung-thu-16x9.jpg",
    "/images/exterior-1.webp",
  ],
  body: [
    {
      text: "Ngắm trăng tròn trên biển sóng vỗ — cùng người thân phá cỗ đêm rằm. Trung thu là lúc chậm lại bên gia đình, nhìn ánh trăng soi mặt biển và cảm nhận nhịp sống giữa rừng và biển Sơn Trà. The Camellia Sơn Trà hướng tới một nơi để trở về: thiên nhiên gần gũi, không gian ấm áp và những khoảnh khắc sum vầy đáng nhớ.",
    },
    {
      heading: "Lời chúc Trung thu",
      text: "Thương chúc Quý khách hàng, Quý đại lý, Quý đối tác và gia đình một mùa trung thu an yên, ấm áp và trọn vẹn niềm vui!",
    },
    {
      heading: "Ghé thăm Sales Gallery",
      text: "The Camellia Son Tra - Da Nang kính mời anh chị ghé Camellia Gallery, Tầng 9, Bạch Đằng Complex (50 Bạch Đằng), Đà Nẵng — hoặc liên hệ Hotline / Zalo 0934 885 108 để được tư vấn và đặt lịch tham quan.",
      links: [
        {
          to: "/lien-he",
          label: "Đến trang liên hệ — đặt lịch tham quan",
        },
      ],
    },
  ],
} satisfies NewsArticle;
