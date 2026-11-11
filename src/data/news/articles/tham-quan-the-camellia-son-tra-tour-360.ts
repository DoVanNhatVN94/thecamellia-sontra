import type { NewsArticle } from "../types";

export const listRank = 22;

export const article = {
  slug: "tham-quan-the-camellia-son-tra-tour-360",
  date: "30.10.2026",
  title: "Tham quan The Camellia Sơn Trà qua tour 360 trực tuyến",
  excerpt:
    "Tour 360 trên website cho phép xoay tòa nhà, xem vị trí căn trên mặt bằng và tầm nhìn ra biển, rừng, thành phố của The Camellia Sơn Trà trước khi đến tận nơi.",
  image: "/images/news-tour360-3010-og.jpg",
  imageAlt:
    "Toàn cảnh tòa nhà trong tour 360 The Camellia Sơn Trà, góc Tổng thể, hình ảnh mô phỏng",
  poster: "/images/news-tour360-3010-hero.webp",
  imageObjectClass: "object-center",
  gallery: [
    "/images/news-tour360-3010-hero.webp",
    "/images/news-tour360-3010-body-01.webp",
    "/images/views/floor-5.webp",
  ],
  body: [
    {
      text: "Trước khi đi xem một dự án, đa số người mua muốn biết vài điều cơ bản: tòa nhà trông ra sao, căn nằm ở vị trí nào, đứng từ đó nhìn ra sẽ thấy gì. Với The Camellia Sơn Trà, anh chị có thể xem trước những điều đó qua mục Tour 360 ngay trên website, không cần hẹn lịch hay di chuyển.",
    },
    {
      heading: "1. Tour 360 trên website có gì",
      text: "Tour được dựng bằng công nghệ PanaMotion, gồm ba phần chính:",
    },
    {
      text: "• Xoay tòa nhà: xem khối công trình từ nhiều phía để hình dung kiến trúc và vị trí tòa nhà trong khu vực.",
    },
    {
      text: "• Mặt bằng: xem vị trí từng căn trên mặt bằng tầng. Phần căn hộ mẫu đang được cập nhật.",
    },
    {
      text: "• Xem tầm view: nhìn ra hướng biển, rừng Sơn Trà và thành phố Đà Nẵng.",
      image: "/images/news-tour360-3010-body-01.webp",
      imageAlt: "Góc xoay tòa nhà trong tour 360 The Camellia Sơn Trà, hình ảnh mô phỏng",
    },
    {
      heading: "2. Cách dùng tour",
      text: "1. Mở thecamellia-sontra.com/kham-pha hoặc chọn Tour 360 trên menu.",
      links: [
        {
          to: "/kham-pha",
          label: "thecamellia-sontra.com/kham-pha",
        },
      ],
    },
    {
      text: "2. Xoay tòa nhà để xem tổng thể dự án.",
    },
    {
      text: "3. Chọn Mặt bằng để xem vị trí căn trên mặt bằng.",
    },
    {
      text: "4. Chuyển góc nhìn để xem view biển, rừng và thành phố.",
    },
    {
      heading: "3. Xem tour để làm gì",
      text: "Tour không thay được một buổi xem thực tế, nhưng giúp anh chị lọc trước: loại căn nào hợp, hướng view nào mình thích, có câu hỏi gì cần hỏi. Khi đến Camellia Gallery hay gọi tư vấn, buổi trao đổi sẽ đi thẳng vào điều anh chị quan tâm. Với người ở xa Đà Nẵng, đây cũng là cách nhanh nhất để có hình dung ban đầu về dự án.",
      image: "/images/views/floor-5.webp",
      imageAlt: "Tầm nhìn ra biển từ căn hộ The Camellia Sơn Trà, hình ảnh mô phỏng",
      imageCaption: "Ảnh mô phỏng, mang tính minh họa",
    },
    {
      heading: "4. Lưu ý về hình ảnh trong tour",
      text: "Dự án đang trong giai đoạn triển khai, bàn giao dự kiến năm 2028. Hình ảnh trong tour là mô phỏng và phối cảnh, mang tính minh họa. Thiết kế, vật liệu và hiện trạng thực tế theo hồ sơ dự án và hợp đồng mua bán.",
    },
    {
      heading: "5. Xem tour và đặt lịch tư vấn",
      text: "Anh chị có thể bắt đầu ngay tại Tour 360 The Camellia Sơn Trà. Sau khi xem, nếu cần thông tin về loại căn, giá hay tiến độ thanh toán, liên hệ:",
      links: [
        {
          to: "/kham-pha",
          label: "Tour 360 The Camellia Sơn Trà",
        },
      ],
    },
    {
      text: "📞 Nhật – 0934 885 108",
    },
    {
      text: "📍 Camellia Gallery – Tầng 9, Bạch Đằng Complex",
    },
  ],
} satisfies NewsArticle;
