export const PROJECT = {
  name: "The Camellia Sơn Trà",
  nameEn: "The Camellia Son Tra – Da Nang",
  tagline: "Biểu tượng sống mới bên Bán đảo Sơn Trà",
  slogan: "Phượng quy ngư hội, sơn hải giao hòa",
  hotlineDisplay: "0934 885 108",
  hotlineTel: "0934885108",
  zalo: "https://zalo.me/0934885108",
  email: "dovannhatdn94@gmail.com",
  address: "Giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng",
  developer: "Công ty TNHH Địa ốc Thành Lâm",
  operator: "MBLAND",
  sales: "WELAND",
  designer: "Archivina",
  contractor: "Tập đoàn Xây dựng Delta",
  legal: "Sổ hồng sở hữu lâu dài",
  land: "4.299,9 m²",
  floorArea: "2.074 m²",
  floors: "25 tầng nổi & 2 hầm",
  units: "469 căn hộ",
  shops: "09–10 căn thương mại khối đế",
  handover: "Dự kiến 2028",
  fromPrice: "1,98 tỷ",
} as const;

export const FACTS = [
  { label: "Quy mô khu đất", value: "4.299,9 m²" },
  { label: "DT sàn xây dựng", value: "2.074 m²" },
  { label: "Quy mô công trình", value: "25 tầng & 2 hầm" },
  { label: "Tổng số căn hộ", value: "469 căn" },
  { label: "Pháp lý", value: "Sở hữu lâu dài" },
  { label: "Vị trí", value: "Lê Văn Lương – Lê Đức Thọ" },
] as const;

export const DISTANCES = [
  { place: "Biển Mân Thái", time: "2 phút", note: "Khoảng 200 m" },
  { place: "Bán đảo Sơn Trà", time: "5 phút", note: "400 ha rừng nguyên sinh" },
  { place: "Biển Mỹ Khê", time: "5 phút", note: "Bãi biển trung tâm" },
  { place: "Chùa Linh Ứng", time: "5 phút", note: "Biểu tượng Sơn Trà" },
  { place: "Cầu Rồng", time: "12 phút", note: "Trung tâm Đà Nẵng" },
  { place: "Sân bay Đà Nẵng", time: "20 phút", note: "Kết nối quốc tế" },
] as const;

export const UNIT_TYPES = [
  {
    id: "studio",
    name: "Studio",
    area: "27,8 – 28,4 m² thông thủy",
    beds: "Studio",
    price: "Từ 1,98 tỷ",
    floors: "Tầng 3A đến 23",
    desc: "Sản phẩm cho chuyên gia, người độc thân và khách đầu tư. Bếp mở, loggia, nội thất hoàn thiện.",
    highlights: ["CH-09 · CH-12A", "Bếp mở", "Loggia"],
    comingSoon: false,
    image: "/images/layouts/ch09.webp",
    layouts: [
      { src: "/images/layouts/ch09.webp", code: "CH-09", nta: "28,4 m²", gfa: "32,0 m²" },
      { src: "/images/layouts/ch12a.webp", code: "CH-12A", nta: "27,8 m²", gfa: "30,9 m²" },
    ],
  },
  {
    id: "1pn",
    name: "1 phòng ngủ + 1",
    area: "47,0 m² thông thủy",
    beds: "1PN + 1",
    price: "Từ 3,28 tỷ",
    floors: "Tầng 3A đến 23",
    desc: "Căn một phòng ngủ có khu đa năng, phù hợp người độc thân, chuyên gia và khách đầu tư.",
    highlights: ["CH-06", "Khu đa năng", "Bếp mở"],
    comingSoon: false,
    image: "/images/layouts/ch06.webp",
    layouts: [
      { src: "/images/layouts/ch06.webp", code: "CH-06", nta: "47,0 m²", gfa: "51,5 m²" },
    ],
  },
  {
    id: "2pn",
    name: "2 phòng ngủ",
    area: "57,4 – 72,1 m² thông thủy",
    beds: "2PN",
    price: "Từ 3,90 tỷ",
    floors: "Tầng 3A đến 23",
    desc: "Căn hộ cho gia đình — nhiều mã căn, hướng view nội khu, phố hoặc góc núi biển.",
    highlights: ["7 mã căn", "2 phòng ngủ", "Căn góc chọn lọc"],
    comingSoon: false,
    image: "/images/layouts/ch01.webp",
    layouts: [
      { src: "/images/layouts/ch01.webp", code: "CH-01", nta: "68,3 m²", gfa: "73,8 m²" },
      { src: "/images/layouts/ch3a.webp", code: "CH-3A", nta: "65,1 m²", gfa: "71,1 m²" },
      { src: "/images/layouts/ch07.webp", code: "CH-07", nta: "70,1 m²", gfa: "77,3 m²" },
      { src: "/images/layouts/ch08.webp", code: "CH-08", nta: "70,1 m²", gfa: "76,5 m²" },
      { src: "/images/layouts/ch10.webp", code: "CH-10", nta: "61,7 m²", gfa: "66,9 m²" },
      { src: "/images/layouts/ch15.webp", code: "CH-15", nta: "57,4 m²", gfa: "63,8 m²" },
      { src: "/images/layouts/ch18.webp", code: "CH-18", nta: "72,1 m²", gfa: "81,0 m²" },
    ],
  },
  {
    id: "3pn",
    name: "3 phòng ngủ",
    area: "84,2 – 103,6 m² thông thủy",
    beds: "3PN",
    price: "Từ 7,50 tỷ",
    floors: "Tầng 3A đến 23",
    desc: "Căn hộ lớn cho đại gia đình, không gian sống đa thế hệ, chốn an cư trọn vẹn.",
    highlights: ["CH-03 · CH-11 · CH-19 · CH-20", "Căn góc", "View biển / núi"],
    comingSoon: false,
    image: "/images/layouts/ch03.webp",
    layouts: [
      { src: "/images/layouts/ch03.webp", code: "CH-03", nta: "89,3 m²", gfa: "100,0 m²" },
      { src: "/images/layouts/ch11.webp", code: "CH-11", nta: "88,7 m²", gfa: "97,9 m²" },
      { src: "/images/layouts/ch19.webp", code: "CH-19", nta: "103,6 m²", gfa: "114,8 m²" },
      { src: "/images/layouts/ch20.webp", code: "CH-20", nta: "84,2 m²", gfa: "93,7 m²" },
    ],
  },
  {
    id: "duplex",
    name: "Duplex",
    area: "103,6 – 226,7 m²",
    beds: "Duplex",
    price: "Sắp công bố",
    floors: "Sắp công bố",
    desc: "Dòng căn giới hạn, trần cao. Mặt bằng đang được chủ đầu tư hoàn thiện — đăng ký để nhận khi cập nhật.",
    highlights: ["Sắp công bố", "Số lượng giới hạn"],
    comingSoon: true,
    image: "",
    layouts: [] as { src: string; code: string; nta: string; gfa: string }[],
  },
] as const;

export const VIEW_FLOORS = [
  {
    id: "5",
    label: "Tầng 5",
    src: "/images/views/floor-5.webp",
    kuula: "7TV5B",
    alt: "Tầm view tầng 5 — hoàng hôn biển Đà Nẵng",
  },
  {
    id: "10",
    label: "Tầng 10",
    src: "/images/views/floor-10.webp",
    kuula: "7TVLC",
    alt: "Tầm view tầng 10 — đô thị và biển",
  },
  {
    id: "15",
    label: "Tầng 15",
    src: "/images/views/floor-15.webp",
    kuula: "7TVLV",
    alt: "Tầm view tầng 15 — panorama Sơn Trà",
  },
  {
    id: "25",
    label: "Tầng 25",
    src: "/images/views/floor-25.webp",
    kuula: "7TVLQ",
    alt: "Tầm view tầng 25 — tầm nhìn toàn cảnh",
  },
] as const;

export const AMENITY_LAYERS = [
  {
    id: "wellness",
    title: "Wellness",
    kicker: "Chăm sóc sức khỏe",
    image: "/images/yoga-op1.webp",
    alt: "Yoga studio view Sơn Trà — tiện ích Wellness",
    items: ["Phòng gym", "Phòng yoga", "Spa", "Hồ bơi", "Jacuzzi", "Phòng xông hơi", "Đường chạy bộ", "Sân tập ngoài trời", "Sàn thiền", "Phòng thay đồ"],
  },
  {
    id: "nature",
    title: "Nature",
    kicker: "Kết nối thiên nhiên",
    image: "/images/pool-1.webp",
    alt: "Hồ bơi The Camellia — tiện ích Nature",
    items: ["Vườn trên cao", "Vườn cảnh quan", "Khu BBQ", "Sân trong nhiệt đới", "Chòi đọc sách", "Đài ngắm hoàng hôn", "Vườn hoa trà", "Mặt nước cảnh quan", "Sân trời", "Mảng xanh đứng"],
  },
  {
    id: "community",
    title: "Community",
    kicker: "Cộng đồng",
    image: "/images/kids.webp",
    alt: "Khu vui chơi trẻ em — tiện ích Community",
    items: ["Khu vui chơi trẻ em", "Sảnh tiệc", "Không gian làm việc", "Lounge doanh nhân", "Thư viện", "Hội trường đa năng", "Phòng chiếu phim", "Sky bar", "Phòng họp", "Lounge cư dân"],
  },
  {
    id: "everyday",
    title: "Everyday Living",
    kicker: "Sống mỗi ngày",
    image: "/images/amenity-2.webp",
    alt: "Không gian tiện ích Everyday Living The Camellia",
    items: ["Sảnh đón hình chữ V", "Lễ tân 24/7", "An ninh 24/7", "Hầm để xe", "Shophouse khối đế", "Concierge", "Sạc xe điện", "Hệ thống locker", "Dịch vụ hành chính", "Khu thương mại"],
  },
] as const;

export const POLICIES = [
  {
    title: "Early Bird",
    value: "Chiết khấu 3%",
    note: "Dành cho 100 căn đủ điều kiện đăng ký sớm",
  },
  {
    title: "Thanh toán nhanh",
    value: "Ưu đãi đến 16%",
    note: "Chiết khấu theo tiến độ thanh toán, tối đa khi đóng sớm",
  },
  {
    title: "Vay ngân hàng",
    value: "Hỗ trợ đến 70%",
    note: "Ân hạn gốc tối đa 3 năm (theo ngân hàng) · hỗ trợ lãi theo chương trình ngân hàng",
  },
  {
    title: "Nhận nhà",
    value: "Thanh toán 50%",
    note: "Nhận nhà để ở hoặc khai thác cho thuê theo phương án vốn tự có",
  },
  {
    title: "Phí quản lý",
    value: "Miễn 12 tháng",
    note: "Áp dụng theo chính sách bán hàng tại thời điểm ký",
  },
  {
    title: "Bàn giao",
    value: "Hoàn thiện",
    note: "Xingfa · Kaadas/Samsung · Daikin · An Cường · Hafele · Grohe/Kohler",
  },
] as const;

export const LEGAL_MILESTONES = [
  { date: "31.01.2024", title: "Chấp thuận chủ trương đầu tư và nhà đầu tư" },
  { date: "22.01.2025", title: "Phê duyệt quy hoạch chi tiết 1/500" },
  { date: "13.07.2026", title: "Đủ điều kiện bán nhà ở hình thành trong tương lai" },
  { date: "26.07.2026", title: "MBLAND ra mắt dự án đầu tiên tại Đà Nẵng" },
  { date: "09.09.2026", title: "Chính thức ra hàng The Camellia Sơn Trà" },
  { date: "12.09.2026", title: "Premier Launch — 159 giao dịch thành công" },
  { date: "25.09.2026", title: "Soft Opening Sales Gallery — Da Nang Complex" },
] as const;

export type NewsBlock = {
  heading?: string;
  text: string;
  /** Optional mid-body image (absolute /images/... path). Click opens lightbox when rendered. */
  image?: string;
  /** Alt for body image; falls back to heading or article title. */
  imageAlt?: string;
  /** Optional internal paths rendered under the block (SEO FAQ articles). */
  links?: readonly {
    to:
      | "/"
      | "/gioi-thieu"
      | "/can-ho"
      | "/tien-ich"
      | "/lien-he"
      | "/kham-pha"
      | "/tin-tuc"
      | `/tin-tuc/${string}`;
    label: string;
  }[];
};
export type NewsArticle = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  /** SEO meta description. Falls back to excerpt when omitted. */
  description?: string;
  image: string;
  /** Alt for the cover / OG image. Falls back to the article title. */
  imageAlt?: string;
  /** Optional caption under the article hero. Other articles omit it. */
  imageCaption?: string;
  poster?: string;
  /**
   * Optional Tailwind object-position for card/cover crops (e.g. "object-top").
   * Use for hero-biased assets so object-cover keeps faces/crowns, not sand.
   */
  imageObjectClass?: string;
  gallery: readonly string[];
  /** Gallery card fit. Use "contain" when a poster or plan must not be cropped. */
  galleryFit?: "cover" | "contain";
  body: NewsBlock[];
  /** Privacy-enhanced YouTube id. The article page embeds it only when set. */
  youtubeId?: string;
  /** Vietnamese iframe title. Used only with youtubeId. */
  youtubeTitle?: string;
  /** One line above the player. Used only with youtubeId. */
  youtubeCaption?: string;
  /**
   * "short" renders a lazy 9:16 youtube-nocookie iframe.
   * Omit for the existing 16:9 player.
   */
  youtubeAspect?: "short";
};

export const NEWS: NewsArticle[] = [

  {
    slug: "chuyen-camellia-01-qua-3-chi-vang-24-26-10-2026",
    date: "22.10.2026",
    title: "Chuyện Camellia #01: tặng 3 chỉ vàng/giao dịch, 24–26/10",
    excerpt:
      "Sự kiện «Chuyện Camellia #01 – Phong vị sống giữa thiên nhiên» diễn ra lúc 9:00 thứ Bảy 24/10/2026 tại Camellia Gallery. Giao dịch hoàn tất trong các ngày 24–26/10/2026 được tặng 3 chỉ vàng mỗi giao dịch, giới hạn 10 suất.",
    description:
      "Chuyện Camellia #01 lúc 9:00 ngày 24/10/2026 tại Camellia Gallery, Đà Nẵng. Quà 3 chỉ vàng mỗi giao dịch hoàn tất trong 24–26/10/2026, giới hạn 10 suất.",
    image: "/images/news-chuyen-camellia-01-og.jpg",
    imageAlt:
      "Poster dọc nền cam sự kiện Chuyện Camellia #01 – Phong vị sống giữa thiên nhiên, hoa trà trắng, 9:00 thứ Bảy 24.10.2026 tại Camellia Gallery và ô quà tặng 3 chỉ vàng mỗi giao dịch, 10 suất",
    imageCaption:
      "Poster sự kiện «Chuyện Camellia #01 – Phong vị sống giữa thiên nhiên». Ảnh: The Camellia Sơn Trà",
    poster: "/images/news-chuyen-camellia-01-hero.webp",
    gallery: ["/images/news-chuyen-camellia-01-hero.webp"],
    galleryFit: "contain",
    body: [
      {
        text: "The Camellia Sơn Trà tổ chức sự kiện «Chuyện Camellia #01 – Phong vị sống giữa thiên nhiên» lúc 9:00, thứ Bảy 24/10/2026, tại Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. Nhân sự kiện, dự án dành quà tặng cho khách hàng hoàn tất giao dịch trong thời gian ưu đãi.",
      },
      {
        heading: "Thời gian và địa điểm",
        text: "Sự kiện bắt đầu lúc 9:00 ngày 24/10/2026 (thứ Bảy). Địa điểm là Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng.",
      },
      {
        heading: "Quà tặng 3 chỉ vàng mỗi giao dịch",
        text: "Khách hàng hoàn tất giao dịch trong các ngày 24–26/10/2026 (thứ Bảy đến thứ Hai) được tặng 3 chỉ vàng cho mỗi giao dịch. Chương trình giới hạn 10 suất. Số lượng có hạn, áp dụng theo quy định của chương trình.",
      },
      {
        text: "Lưu ý: chi tiết điều kiện theo chính sách bán hàng chính thức tại thời điểm giao dịch.",
      },
      {
        heading: "Liên hệ",
        text: "Anh chị muốn hỏi điều kiện quà tặng hoặc để lại nhu cầu, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc gửi form đăng ký trên trang Liên hệ của website. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh.",
        links: [{ to: "/lien-he", label: "Gửi form đăng ký tư vấn" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Quà 3 chỉ vàng áp dụng trong thời gian nào?",
        text: "Quà tặng 3 chỉ vàng áp dụng cho giao dịch hoàn tất trong các ngày 24–26/10/2026 (thứ Bảy đến thứ Hai). Mỗi giao dịch được tặng 3 chỉ vàng. Chương trình giới hạn 10 suất. Số lượng có hạn, áp dụng theo quy định của chương trình. Chi tiết điều kiện theo chính sách bán hàng chính thức tại thời điểm giao dịch.",
      },
      {
        heading: "Sự kiện Chuyện Camellia #01 diễn ra khi nào và ở đâu?",
        text: "Sự kiện «Chuyện Camellia #01 – Phong vị sống giữa thiên nhiên» diễn ra lúc 9:00, thứ Bảy 24/10/2026, tại Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng.",
      },
      {
        heading: "Muốn hỏi suất quà hoặc để lại nhu cầu thì liên hệ thế nào?",
        text: "Liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc gửi form đăng ký trên trang Liên hệ của website.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: chi tiết điều kiện theo chính sách bán hàng chính thức tại thời điểm giao dịch. Bài viết dựa trên thông tin sự kiện và poster chính thức của dự án. Ảnh: The Camellia Sơn Trà.",
      },
    ],
  },

  {
    slug: "nhnn-yeu-cau-giam-lai-suat-nguoi-vay-mua-nha-luu-y",
    date: "22.10.2026",
    title: "NHNN yêu cầu giảm lãi suất: người vay mua nhà nên đọc thế nào?",
    excerpt:
      "Theo Cổng Chính phủ (22.10.2026), công văn 9736 ngày 21/10 giảm lãi tiền gửi mới tối thiểu 0,5%/năm từ kỳ hạn 6 tháng. Lãi vay chỉ nêu giảm thực chất.",
    description:
      "Công văn 9736/NHNN-CSTT (21/10/2026): giảm lãi tiền gửi mới tối thiểu 0,5%/năm từ kỳ hạn 6 tháng. Lãi vay chỉ nêu giảm thực chất, chưa có số cắt.",
    image: "/images/news-nhnn-9736-2210-og.jpg",
    imageAlt:
      "Quầy giao dịch ngân hàng, biển lãi suất phần trăm màu đỏ ở phía trước, nhân viên và khách phía sau bị làm mờ",
    imageCaption:
      "Quầy giao dịch ngân hàng, phía trước là biển lãi suất phần trăm. Ảnh: VietNamNet",
    poster: "/images/news-nhnn-9736-2210-hero.webp",
    gallery: ["/images/news-nhnn-9736-2210-hero.webp"],
    body: [
      {
        text: "Ngày 21/10/2026, Ngân hàng Nhà nước ban hành Công văn 9736/NHNN-CSTT về giảm mặt bằng lãi suất. Theo Cổng Chính phủ (xaydungchinhsach.chinhphu.vn, 22.10.2026), văn bản yêu cầu ngân hàng thương mại triển khai trên tất cả kênh bán hàng việc giảm thực chất lãi suất huy động và cho vay, đồng thời giảm tối thiểu 0,5%/năm lãi suất tiền gửi bình quân của giao dịch phát sinh mới, kỳ hạn từ 6 tháng trở lên, trong các tháng cuối năm 2026 so với mức của chính ngân hàng đó tại kỳ báo cáo 11/10–20/10/2026. Con số 0,5%/năm chỉ đặt cho lãi tiền gửi. Với lãi cho vay, công văn nói giảm thực chất và không nêu một mức, nên người vay mua nhà chưa có căn cứ để coi đây là mức cắt lãi suất khoản vay nhà ở.",
      },
      {
        text: "Bài ngày 18/10 trên website đã tóm tắt công văn 9608/NHNN-CSTT. Bài ngày 21/10 ghi, theo CafeF (20.10.2026), 15 trên 46 ngân hàng giảm lãi vay bình quân 1,5–2%/năm, và bài cùng ngày nói cách đọc lãi thả nổi sau ưu đãi. Bài này chỉ cập nhật công văn 9736 ngày 21/10/2026 và danh sách ngân hàng đã giảm lãi huy động mà VietNamNet ghi lúc 09:38 ngày 22.10.2026. Đây là bài tổng hợp từ báo chí, không phải thông báo của Ngân hàng Nhà nước và không phải thông cáo của The Camellia Sơn Trà.",
        links: [
          {
            to: "/tin-tuc/15-ngan-hang-giam-lai-vay-vay-mua-nha-co-duoc-giam",
            label: "15 ngân hàng giảm lãi vay 1,5–2%: vay mua nhà có được giảm?",
          },
          {
            to: "/tin-tuc/lai-vay-mua-nha-tha-noi-13-16-sau-uu-dai",
            label: "Lãi vay mua nhà thả nổi 13–16% sau ưu đãi: người mua tính gì?",
          },
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-mua-nha-luu-y",
            label: "NHNN yêu cầu giảm lãi suất ngày 18/10: người mua nhà lưu ý gì?",
          },
        ],
      },
      {
        heading: "Công văn 9736 yêu cầu giảm những gì",
        text: "Theo Cổng Chính phủ (22.10.2026), Công văn 9736/NHNN-CSTT được ban hành ngày 21/10/2026 trên cơ sở kết luận của Thống đốc tại cuộc họp ngày 19/10/2026 và công văn 9608/NHNN-CSTT ngày 18/10/2026. Yêu cầu với ngân hàng thương mại là triển khai trên tất cả kênh bán hàng việc giảm thực chất cả lãi suất huy động và lãi suất cho vay.",
      },
      {
        text: "Theo Cổng Chính phủ (22.10.2026), mức giảm ghi bằng số chỉ thuộc về tiền gửi: tối thiểu 0,5%/năm đối với lãi suất tiền gửi bình quân của các giao dịch phát sinh mới, kỳ hạn từ 6 tháng trở lên, trong các tháng cuối năm 2026. Mốc so sánh là mức của chính ngân hàng đó tại kỳ báo cáo 11/10–20/10/2026, không phải một lãi suất niêm yết chung cho mọi ngân hàng.",
      },
      {
        text: "Theo Cổng Chính phủ (22.10.2026), phần cho vay trong công văn dừng ở yêu cầu giảm thực chất, không kèm phần trăm. Người đang tính vay mua nhà không nên lấy 0,5%/năm của lãi tiền gửi để suy ra khoản vay nhà ở sẽ giảm 0,5%/năm, cũng không nên hiểu công văn đã công bố biểu lãi vay mới.",
      },
      {
        text: "Theo Cổng Chính phủ (22.10.2026), Ngân hàng Nhà nước theo dõi lãi suất bình quân của giao dịch mới qua hệ thống báo cáo thống kê. Ngân hàng không thực hiện chỉ đạo có thể bị xử lý, kể cả việc xem xét giảm hoặc giao thấp chỉ tiêu tăng trưởng tín dụng. Đó là cách giám sát tổ chức tín dụng, không phải cam kết một mức lãi cho hồ sơ vay mua nhà.",
      },
      {
        heading: "Vì sao lãi huy động gắn với lãi vay thả nổi",
        text: "Lãi suất huy động là phần ngân hàng trả cho người gửi tiền, tức một phần chi phí vốn. Khi lãi tiền gửi của giao dịch mới giảm, chi phí vốn mới có thể hạ và ngân hàng có thêm dư địa để xem xét lãi cho vay. Dư địa không có nghĩa khoản vay mua nhà đã được giảm. Theo Cổng Chính phủ (22.10.2026), công văn 9736 chỉ chốt mức tối thiểu 0,5%/năm cho lãi tiền gửi bình quân của giao dịch mới kỳ hạn từ 6 tháng trở lên; với cho vay thì không có con số.",
      },
      {
        text: "Với khoản vay lãi thả nổi, cách tính thường gặp là lãi tham chiếu, hoặc lãi cơ sở, cộng biên độ đã ghi trong hợp đồng. Theo VietnamFinance (Minh Dũng, 21.10.2026), hết thời gian ưu đãi, lãi vay chuyển sang thả nổi và thường được tính bằng lãi suất cơ sở hoặc lãi suất tham chiếu cộng biên độ đã thỏa thuận trong hợp đồng. Nếu lãi tham chiếu của ngân hàng gắn với mặt bằng huy động, kỳ điều chỉnh sau mới cho biết lãi vay có đổi hay không. Công văn 9736 không kết luận lãi vay mua nhà sẽ giảm.",
      },
      {
        heading: "Đến sáng 22/10, ngân hàng nào đã giảm lãi huy động",
        text: "Theo VietNamNet (22.10.2026, 09:38), Techcombank giảm lãi suất huy động từ ngày 22/10: 0,1 điểm phần trăm với kỳ hạn 1–12 tháng và 0,5 điểm phần trăm với kỳ hạn 13–36 tháng. Cùng bài, sản phẩm Phát Lộc Online niêm yết kỳ hạn 12 tháng ở 6,65%/năm và kỳ hạn 13–36 tháng ở 5,35%/năm. Đây là lãi suất huy động, không phải lãi suất vay mua nhà.",
      },
      {
        text: "Theo VietNamNet (22.10.2026, 09:38), tính đến 22/10 các ngân hàng đã giảm lãi suất huy động gồm LPBank, VietBank, BVBank, Bac A Bank, BaoViet Bank, OCB, HDBank, KienlongBank, Nam A Bank, NCB, Sacombank, TPBank, VPBank, ABBank, MBV, PVcomBank, SHB, MB, SeABank, Techcombank, cùng 4 ngân hàng thương mại quốc doanh. Nhóm quốc doanh mới giảm tại quầy; kênh trực tuyến vẫn niêm yết 6,6%/năm cho kỳ hạn 6–11 tháng và 6,8%/năm từ kỳ hạn 12 tháng. Danh sách này là lãi huy động, không phải danh sách ngân hàng đã giảm lãi vay mua nhà.",
      },
      {
        text: "Theo VietNamNet (22.10.2026, 09:38), đến thời điểm bài đăng, các ngân hàng chưa giảm lãi suất huy động gồm ACB, Eximbank, GPBank, MSB, PGBank, Saigonbank, VIB, Viet A Bank và Vikki Bank. Một ngân hàng còn trong nhóm chưa giảm lãi huy động vẫn có thể có chương trình lãi vay riêng; người vay phải hỏi đúng sản phẩm, không suy từ danh sách này.",
      },
      {
        heading: "Người vay mua nhà nên hỏi ngân hàng những gì",
        text: "Trước khi ký, người vay mua nhà nên hỏi ngân hàng bốn điểm trên đúng sản phẩm dự định vay: cách ngân hàng tính lãi tham chiếu, biên độ cộng thêm là bao nhiêu, kỳ điều chỉnh lãi diễn ra khi nào, và phí trả nợ trước hạn. Theo Cổng Chính phủ (22.10.2026), công văn 9736 không thay cho bảng lãi của từng ngân hàng.",
      },
      {
        text: "Dòng tiền nên tính với một kịch bản lãi thả nổi ở vùng cao, không chỉ với lãi những tháng đầu. Bài ngày 21/10 trên website, dẫn VietnamFinance (Minh Dũng, 21.10.2026) và khảo sát DXS-FERI, ghi đến tháng 9/2026 lãi vay mua nhà sau ưu đãi phổ biến thả nổi 13–16%/năm. Mức đó là mặt bằng khảo sát trước công văn 9736, dùng để thử sức trả nợ, không phải lãi suất mới sau ngày 21/10/2026 và không phải kết quả của việc giảm lãi huy động.",
      },
      {
        text: "Nên chờ biểu lãi vay mà ngân hàng công bố sau khi triển khai công văn, rồi đối chiếu với hợp đồng, thay vì giả định khoản vay mua nhà đã giảm vì lãi tiền gửi giảm. Theo Cổng Chính phủ (22.10.2026), mức tối thiểu 0,5%/năm trong công văn 9736 là mức sàn cho lãi tiền gửi bình quân của giao dịch mới kỳ hạn từ 6 tháng trở lên. Ảnh trong bài là ảnh quầy giao dịch ngân hàng với biển lãi suất phần trăm, nguồn VietNamNet; biển trong ảnh không phải mức lãi vay mua nhà do công văn ấn định.",
      },
      {
        heading: "Tư vấn dòng tiền với Nhật",
        text: "Anh chị muốn được tư vấn dòng tiền — hỏi cách tính lãi tham chiếu, biên độ, kỳ điều chỉnh và phí trả trước theo ngân hàng đang làm việc với người mua The Camellia Sơn Trà — liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery, Tầng 9, Bạch Đằng Complex, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Buổi tư vấn đối chiếu theo chương trình tại thời điểm hỏi, không phải cam kết lãi suất.",
        links: [{ to: "/lien-he", label: "Liên hệ Nhật – Nhat Elite Realty" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Công văn 9736 yêu cầu giảm lãi tiền gửi bao nhiêu?",
        text: "Theo Cổng Chính phủ (xaydungchinhsach.chinhphu.vn, 22.10.2026), Công văn 9736/NHNN-CSTT ngày 21/10/2026 yêu cầu giảm tối thiểu 0,5%/năm lãi suất tiền gửi bình quân của giao dịch phát sinh mới, kỳ hạn từ 6 tháng trở lên, trong các tháng cuối năm 2026, so với mức của chính ngân hàng đó tại kỳ báo cáo 11/10–20/10/2026. Mức này là sàn cho lãi tiền gửi, không phải mức giảm lãi vay mua nhà.",
      },
      {
        heading: "Công văn có ấn định mức cắt lãi vay mua nhà không?",
        text: "Không. Theo Cổng Chính phủ (22.10.2026), với cho vay, công văn yêu cầu ngân hàng thương mại giảm thực chất lãi suất trên tất cả kênh bán hàng và không nêu con số. Người vay cần chờ biểu lãi của đúng ngân hàng và đúng sản phẩm, không suy ra từ mức 0,5%/năm của lãi tiền gửi.",
      },
      {
        heading: "Người vay nên làm gì khi lãi huy động giảm?",
        text: "Hỏi ngân hàng cách tính lãi tham chiếu, biên độ, kỳ điều chỉnh và phí trả nợ trước hạn; tự tính dòng tiền với kịch bản lãi thả nổi ở vùng cao; và chờ biểu lãi vay mới thay vì giả định khoản vay đã được giảm. Theo VietnamFinance (Minh Dũng, 21.10.2026), lãi thả nổi thường bằng lãi suất cơ sở hoặc lãi suất tham chiếu cộng biên độ trong hợp đồng. Theo VietNamNet (22.10.2026, 09:38), một số ngân hàng đã giảm lãi huy động, trong đó Techcombank giảm từ 22/10, nhưng danh sách đó là lãi huy động, không phải xác nhận lãi vay mua nhà đã giảm.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí, không phải thông báo chính thức của Ngân hàng Nhà nước, không phải thông báo của bất kỳ ngân hàng nào và không phải thông báo của The Camellia Sơn Trà. Công văn không ấn định một mức cắt lãi vay mua nhà. Lãi suất áp dụng theo chính sách từng ngân hàng tại thời điểm vay. Nguồn: Cổng Chính phủ (xaydungchinhsach.chinhphu.vn), 22.10.2026 — https://xaydungchinhsach.chinhphu.vn/cong-van-9736-nhnn-cstt-ve-giam-mat-bang-lai-suat-119261022085552481.htm ; VietNamNet, 22.10.2026, 09:38 — https://vietnamnet.vn/lai-suat-ngan-hang-hom-nay-22-10-2026-ong-lon-nhap-cuoc-giam-lai-suat-2567223.html ; VietnamFinance, Minh Dũng, 21.10.2026 — https://vietnamfinance.vn/vay-uu-dai-7-dot-ngot-len-gan-20-ac-mong-lai-suat-tha-noi-cua-nguoi-mua-nha-d152290.html ; CafeF, Ngọc Mai, 20.10.2026 — https://cafef.vn/lai-suat-cho-vay-moi-nhat-cua-cac-ngan-hang-188261020211837231.chn. Ảnh: VietNamNet.",
      },
    ],
  },

  {
    slug: "da-nang-phe-duyet-quy-hoach-chung-den-2050",
    date: "22.10.2026",
    title: "Đà Nẵng phê duyệt quy hoạch chung đến năm 2050",
    excerpt:
      "Theo VnExpress (21.10.2026), Phó thủ tướng Phạm Gia Túc ký phê duyệt Quy hoạch chung Đà Nẵng đến 2050. Hơn 2.000 ha lấn biển vẫn đang ở bước nghiên cứu.",
    description:
      "Theo VnExpress (21.10.2026), quy hoạch Đà Nẵng đến 2050 đã được phê duyệt. 100 ha phía Nam bán đảo Sơn Trà vẫn là nghiên cứu, chưa phải ranh dự án.",
    image: "/images/news-qh-2050-phe-duyet-og.jpg",
    imageAlt:
      "Ảnh năm 2024 nhìn ra vịnh Đà Nẵng: bãi cát cong, mặt nước và dãy nhà cao tầng ven bờ, phía xa là dải núi",
    imageCaption:
      "Khu vực vịnh Đà Nẵng được định hướng lấn biển khoảng 1.500 ha, ảnh chụp năm 2024. Ảnh: Nguyễn Đông/VnExpress",
    poster: "/images/news-qh-2050-phe-duyet-hero.webp",
    gallery: ["/images/news-qh-2050-phe-duyet-hero.webp"],
    body: [
      {
        text: "Ngày 21/10/2026, Phó thủ tướng Thường trực Phạm Gia Túc ký quyết định phê duyệt Quy hoạch chung thành phố Đà Nẵng đến năm 2050. Theo VnExpress (21.10.2026), đồ án xác định phát triển các khu đô thị lấn biển đa chức năng, kết hợp nhà ở, du lịch, thương mại và dịch vụ chất lượng cao, đồng thời định hướng nghiên cứu hơn 2.000 ha đô thị lấn biển. Ranh giới, diện tích, chỉ tiêu sử dụng đất và phương án xây dựng sẽ được xác định ở các bước quy hoạch tiếp theo. Với người đang tìm nơi ở hoặc đang xem nhà tại Đà Nẵng, đây là khung định hướng của cả thành phố, không phải thông báo giá và không phải pháp lý của một căn hộ.",
      },
      {
        text: "Bài ngày 20/10 trên website ghi cuộc họp chiều 19/10/2026 để chuẩn bị hội nghị công bố quy hoạch, và bài đó nói rõ lúc ấy chưa phải quyết định phê duyệt. Bài này chỉ cập nhật việc phê duyệt ngày 21/10/2026 theo VnExpress (Nguyễn Đông), không lặp lịch hội nghị và không thay văn bản của cơ quan có thẩm quyền.",
        links: [
          {
            to: "/tin-tuc/da-nang-chuan-bi-cong-bo-quy-hoach-chung-2050",
            label: "Đà Nẵng chuẩn bị công bố quy hoạch chung đến 2050",
          },
        ],
      },
      {
        heading: "Hơn 2.000 ha lấn biển vẫn là định hướng nghiên cứu",
        text: "Theo VnExpress (21.10.2026), khu vực nghiên cứu lấn biển tập trung tại vịnh Đà Nẵng khoảng 1.500 ha, khu vực cảng Liên Chiểu 450 ha, phía Nam bán đảo Sơn Trà 100 ha và một số vị trí tiềm năng khác ở phía Nam thành phố. Các khu đô thị này dự kiến phục vụ khoảng 400.000 cư dân vào năm 2050, đồng thời bố trí công trình công cộng, công viên, không gian mở và tiện ích phục vụ cộng đồng.",
      },
      {
        text: "Theo VnExpress (21.10.2026), việc phát triển các khu đô thị lấn biển phải bảo đảm người dân được tiếp cận biển liên tục, không gian kiến trúc hài hòa với cảnh quan tự nhiên và hệ sinh thái biển. Cùng bài, ranh giới, diện tích, chỉ tiêu sử dụng đất và phương án xây dựng sẽ được xác định ở các bước quy hoạch tiếp theo, trên cơ sở đánh giá yêu cầu về hạ tầng, môi trường, quốc phòng, an ninh và thích ứng với biến đổi khí hậu. Các mức hecta trong tin vì vậy là định hướng nghiên cứu, chưa phải ranh một dự án đã được duyệt để xây.",
      },
      {
        text: "Ảnh trong bài là ảnh chụp năm 2024 khu vực vịnh Đà Nẵng, nơi quy hoạch định hướng lấn biển khoảng 1.500 ha, theo chú thích VnExpress (Nguyễn Đông, 21.10.2026). Ảnh ghi hiện trạng vịnh năm 2024, không phải phối cảnh công trình sẽ xây và không phải bản đồ ranh giới.",
      },
      {
        heading: "Đô thị trung tâm khoảng 2,26 triệu người vào 2050",
        text: "Theo VnExpress (21.10.2026), các khu vực lấn biển cùng với lõi đô thị hiện hữu phía Bắc được định hướng hình thành đô thị trung tâm Đà Nẵng, dự kiến khoảng 2,26 triệu người vào năm 2050, và giữ vai trò hạt nhân phát triển của toàn thành phố. Phạm vi quy hoạch là toàn bộ địa giới hành chính thành phố Đà Nẵng, gồm đặc khu Hoàng Sa và vùng biển trực thuộc, với tổng diện tích tự nhiên khoảng 11.870 km².",
      },
      {
        text: "Theo VnExpress (21.10.2026), thành phố hướng tới mô hình đô thị biển sinh thái, hiện đại vào năm 2050 và phấn đấu đạt các tiêu chí đô thị đặc biệt vào năm 2075. Không gian phát triển được tổ chức theo cấu trúc 3 vùng, 3 cực, 2 trục và 4 hành lang. Đến năm 2050, quy hoạch hình thành chuỗi khoảng 30 đô thị, gồm 23 đô thị hiện hữu và 7 đô thị mới.",
      },
      {
        text: "Theo VnExpress (21.10.2026), bên cạnh đô thị trung tâm Đà Nẵng, quy hoạch xác định đô thị Tam Kỳ khoảng 275.000 người, Điện Bàn 605.000 người và Hội An 230.000 người. Các đô thị còn lại đóng vai trò kết nối các trung tâm công nghiệp, logistics phía Đông với khu vực phát triển kinh tế cửa khẩu và bảo vệ hệ sinh thái phía Tây. Đặc khu Hoàng Sa được xác định là đơn vị hành chính đặc thù, gắn nhiệm vụ bảo vệ chủ quyền biển đảo với nghiên cứu khoa học biển, hậu cần nghề cá và phát triển kinh tế biển bền vững. Các mức dân số này là định hướng của đồ án đến 2050, không phải số cư dân đã có tại một phường.",
      },
      {
        heading: "Dân số, đường sắt và ưu tiên giai đoạn 2026–2030",
        text: "Theo VnExpress (21.10.2026), dân số thường trú Đà Nẵng dự kiến khoảng 4,7 triệu người năm 2040 và 5,4 triệu người năm 2050. Để đáp ứng nhu cầu phát triển, thành phố định hướng đầu tư giao thông công cộng khối lượng lớn, gồm đường sắt đô thị, đường sắt nhẹ, và phát triển đô thị gắn với các đầu mối giao thông công cộng (TOD). Đây là định hướng đầu tư trong đồ án, chưa phải lịch khai trương một tuyến tàu tại một phường.",
      },
      {
        text: "Theo VnExpress (21.10.2026), giai đoạn 2026–2030 thành phố ưu tiên cảng Liên Chiểu và hệ thống logistics hậu cần cảng, mở rộng Cảng hàng không quốc tế Chu Lai, phát triển Trung tâm Tài chính quốc tế và hoàn thiện hạ tầng Khu thương mại tự do Đà Nẵng. Các tuyến quốc lộ 14B, 14D và 14E được định hướng nâng cấp để tăng kết nối giữa khu vực ven biển, vùng phía Tây thành phố và hành lang kinh tế Đông – Tây. Một hạng mục nằm trong danh mục ưu tiên của giai đoạn kế hoạch khác với việc hạng mục đó đã thi công xong trước một dự án nhà ở.",
      },
      {
        heading: "100 ha phía Nam bán đảo Sơn Trà, người đang xem nhà đọc thế nào",
        text: "Theo VnExpress (21.10.2026), phía Nam bán đảo Sơn Trà nằm trong nhóm khu vực nghiên cứu lấn biển, với quy mô được nêu khoảng 100 ha, cạnh vịnh Đà Nẵng khoảng 1.500 ha, cảng Liên Chiểu 450 ha và một số vị trí tiềm năng khác ở phía Nam thành phố. Cùng bài, ranh giới, diện tích, chỉ tiêu sử dụng đất và phương án xây dựng của các khu lấn biển sẽ được xác định ở các bước quy hoạch tiếp theo. Mức 100 ha vì vậy chưa phải ranh một ô đất, chưa phải giấy phép xây một chung cư, và chưa cho biết một căn hộ đang bán nằm trong hay ngoài phần diện tích đó.",
      },
      {
        text: "Người muốn ở hoặc mua nhà tại Đà Nẵng, kể cả tại phường Sơn Trà, nên đọc quy hoạch chung như khung của cả thành phố, rồi đối chiếu riêng quy hoạch phân khu, quy hoạch chi tiết và pháp lý của đúng căn đang xem. Theo VnExpress (21.10.2026), yêu cầu người dân được tiếp cận biển liên tục là nguyên tắc đặt ra cho phần đô thị lấn biển đang được nghiên cứu, không phải mô tả vị trí của một căn hộ đã có. Quyết định phê duyệt ngày 21/10/2026, theo nội dung bài VnExpress, không công bố bảng giá nhà và không điều chỉnh giá một căn hộ.",
      },
      {
        heading: "Muốn xem một dự án tại phường Sơn Trà",
        text: "Anh chị muốn tìm hiểu một căn hộ tại phường Sơn Trà có thể xem The Camellia Sơn Trà: dự án tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng, tựa lưng vào bán đảo Sơn Trà, quy mô 469 căn, 25 tầng nổi và 2 hầm. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng. Thông tin quy hoạch thành phố trong bài này không thay bảng giá hay điều kiện mua của từng căn.",
        links: [
          { to: "/gioi-thieu", label: "Fact sheet The Camellia Sơn Trà" },
          { to: "/lien-he", label: "Liên hệ — hẹn xem tại gallery" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Quyết định phê duyệt quy hoạch chung Đà Nẵng đến 2050 được ký khi nào?",
        text: "Ngày 21/10/2026, Phó thủ tướng Thường trực Phạm Gia Túc ký quyết định phê duyệt Quy hoạch chung thành phố Đà Nẵng đến năm 2050, theo VnExpress (21.10.2026). Bài báo không nêu số hiệu quyết định. Người đọc nên đối chiếu văn bản khi cơ quan có thẩm quyền công bố đầy đủ.",
      },
      {
        heading: "100 ha phía Nam bán đảo Sơn Trà đã là ranh giới để xây nhà chưa?",
        text: "Chưa. Theo VnExpress (21.10.2026), phía Nam bán đảo Sơn Trà được nêu khoảng 100 ha trong nhóm khu vực nghiên cứu lấn biển, cùng vịnh Đà Nẵng khoảng 1.500 ha, khu vực cảng Liên Chiểu 450 ha và một số vị trí tiềm năng khác ở phía Nam thành phố. Ranh giới, diện tích, chỉ tiêu sử dụng đất và phương án xây dựng sẽ được xác định ở các bước quy hoạch tiếp theo.",
      },
      {
        heading: "Quy hoạch vừa phê duyệt có quyết định giá một căn hộ tại Đà Nẵng không?",
        text: "Không. Theo VnExpress (21.10.2026), quyết định ngày 21/10/2026 phê duyệt khung định hướng đến năm 2050, gồm nghiên cứu đô thị lấn biển và các ưu tiên hạ tầng. Bài không công bố bảng giá nhà đất và không điều chỉnh giá một căn hộ. Giá và điều kiện giao dịch của một căn phụ thuộc hồ sơ của đúng dự án tại thời điểm ký.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Thông tin quy hoạch trong bài mang tính định hướng; chi tiết theo các bước quy hoạch tiếp theo và văn bản chính thức của cơ quan có thẩm quyền. Bài tổng hợp từ báo chí, không phải thông báo của cơ quan nhà nước, không thay tư vấn pháp lý và không cam kết lợi nhuận hay giá. Nguồn: VnExpress, Nguyễn Đông, 21.10.2026 — https://vnexpress.net/da-nang-nghien-cuu-phat-trien-hon-2-000-ha-do-thi-lan-bien-5135282.html. Ảnh: Nguyễn Đông/VnExpress (vịnh Đà Nẵng, ảnh chụp năm 2024).",
      },
    ],
  },

  {
    slug: "lai-vay-mua-nha-tha-noi-13-16-sau-uu-dai",
    date: "21.10.2026",
    title: "Lãi vay mua nhà thả nổi 13–16% sau ưu đãi: người mua tính gì?",
    excerpt:
      "Theo VietnamFinance (21.10.2026), dẫn DXS-FERI, đến tháng 9/2026 lãi vay mua nhà ưu đãi phổ biến 9,8–11,5%/năm trong 12 tháng đầu, rồi thả nổi 13–16%/năm.",
    description:
      "Hết ưu đãi, lãi vay mua nhà chuyển sang thả nổi. Theo VietnamFinance (21.10.2026), dẫn DXS-FERI, tháng 9/2026 mức thả nổi phổ biến 13–16%/năm.",
    image: "/images/news-lai-tha-noi-2110-og.jpg",
    imageAlt:
      "Hai bàn tay đang đếm tờ tiền Việt Nam trước một tòa chung cư cao tầng, bên cạnh là các cọc tiền được bó",
    imageCaption:
      "Hai bàn tay đếm tờ tiền Việt Nam trước tòa chung cư cao tầng, cạnh các cọc tiền. Ảnh: VietnamFinance",
    poster: "/images/news-lai-tha-noi-2110-hero.webp",
    gallery: ["/images/news-lai-tha-noi-2110-hero.webp"],
    body: [
      {
        text: "Lãi suất ưu đãi vay mua nhà thường chỉ áp dụng trong giai đoạn đầu; hết giai đoạn đó, khoản vay chuyển sang lãi thả nổi, bằng lãi suất cơ sở hoặc lãi suất tham chiếu cộng biên độ ghi trong hợp đồng, thường 3–5%/năm. Theo VietnamFinance (Minh Dũng, 21.10.2026), khảo sát của Viện Nghiên cứu bất động sản Đất Xanh Services (DXS-FERI) đến tháng 9/2026 ghi lãi ưu đãi phổ biến 9,8–11,5%/năm trong 12 tháng đầu, sau đó thả nổi 13–16%/năm, cao hơn khoảng 3 điểm phần trăm so với năm 2025. Người đang tính vay nên xét khả năng trả nợ theo mức sau ưu đãi, không chỉ theo mức của những tháng đầu.",
      },
      {
        text: "Bài ngày 21/10 trên website đã ghi 15 ngân hàng công bố giảm lãi vay bình quân 1,5–2%/năm, và bài ngày 18/10 đã tóm tắt văn bản Ngân hàng Nhà nước yêu cầu giảm lãi suất; bài này không lặp các mức giảm đó, mà chỉ nói lãi suất sau khi hết thời gian ưu đãi.",
        links: [
          {
            to: "/tin-tuc/15-ngan-hang-giam-lai-vay-vay-mua-nha-co-duoc-giam",
            label: "15 ngân hàng giảm lãi vay 1,5–2%: vay mua nhà có được giảm?",
          },
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-mua-nha-luu-y",
            label: "NHNN yêu cầu giảm lãi suất: người mua nhà vay vốn cần lưu ý gì?",
          },
        ],
      },
      {
        heading: "Lãi thả nổi được tính thế nào",
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), lãi suất ưu đãi thường chỉ áp dụng trong thời gian đầu của khoản vay. Khi hết ưu đãi, lãi chuyển sang thả nổi và thường được tính bằng lãi suất cơ sở hoặc lãi suất tham chiếu cộng biên độ đã thỏa thuận trong hợp đồng tín dụng; biên độ thường dao động 3–5%/năm. Biên độ 3–5%/năm là phần cộng thêm trong hợp đồng, không phải toàn bộ lãi suất người vay phải trả.",
      },
      {
        heading: "Tháng 9/2026: ưu đãi 9,8–11,5%, rồi thả nổi 13–16%",
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), dẫn khảo sát DXS-FERI, đến tháng 9/2026 lãi suất vay mua nhà ưu đãi phổ biến 9,8–11,5%/năm trong 12 tháng đầu, sau đó thả nổi lên 13–16%/năm. Cùng bài ghi mức này cao hơn khoảng 3 điểm phần trăm so với năm 2025. Đây là mặt bằng khảo sát được báo dẫn, không phải lãi suất một hồ sơ đã được ngân hàng duyệt.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), các chuyên gia được bài dẫn nhận định mặt bằng lãi suất có khả năng duy trì ở vùng cao đến hết năm 2026, trước khi có thêm dư địa hạ nhiệt trong quý II–III/2027. Đó là dự báo của chuyên gia được báo dẫn, không phải lịch giảm lãi đã được công bố và không phải điều chắc chắn.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), bài kể một trường hợp tại Hà Nội: vợ chồng anh Bắc ở phường Hà Đông vay mua căn hộ năm 2024 với lãi suất ưu đãi 5%/năm trong hai năm đầu, hết thời gian hỗ trợ thì lãi suất tăng lên 15%/năm. Đây là ví dụ một hồ sơ được bài báo kể lại, không phải mức lãi chung của mọi khoản vay mua nhà.",
      },
      {
        heading: "Ví dụ minh họa trên 1 tỷ đồng dư nợ",
        text: "Ví dụ minh họa, với giả định được nêu rõ, không phải báo giá của ngân hàng và không phải số tiền The Camellia Sơn Trà: lấy dư nợ còn 1 tỷ đồng và chỉ tính phần lãi, chưa gồm tiền gốc trả dần, phí bảo hiểm hay phí trả nợ trước hạn. Ở 9,8%/năm, phần lãi là 98 triệu đồng/năm, khoảng 8,17 triệu đồng/tháng. Ở 11,5%/năm là 115 triệu đồng/năm, khoảng 9,58 triệu đồng/tháng. Ở 13%/năm là 130 triệu đồng/năm, khoảng 10,83 triệu đồng/tháng. Ở 16%/năm là 160 triệu đồng/năm, khoảng 13,33 triệu đồng/tháng. Các mức tháng là phép chia cho 12, làm tròn.",
      },
      {
        text: "Cùng giả định dư nợ 1 tỷ đồng ở ví dụ trên, nếu mức 11,5%/năm chuyển sang thả nổi 16%/năm thì phần lãi tăng 45 triệu đồng/năm, tức 3,75 triệu đồng/tháng, trước khi tính gốc. Khoản vay thật còn phụ thuộc số tiền vay, thời hạn, cách trả gốc và các khoản phí trong hợp đồng. Người vay nên lấy công thức trong hợp đồng của mình để tính lại; ví dụ này không phải số tiền phải trả hằng tháng.",
      },
      {
        heading: "Trước khi ký, người mua nên kiểm gì",
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), các chuyên gia cho rằng người vay cần đánh giá khả năng tài chính theo mức lãi có thể áp dụng sau ưu đãi, thay vì chỉ căn cứ mức lãi ban đầu. Cùng bài, người vay cần rà soát trong hợp đồng biên độ cộng thêm, chu kỳ điều chỉnh lãi suất, phí bảo hiểm và phí trả nợ trước hạn.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), giới chuyên gia khuyến nghị tổng tiền gốc và lãi phải trả mỗi tháng không vượt khoảng 30–40% thu nhập thực tế, đồng thời giữ một quỹ dự phòng cho biến động ngoài dự kiến. TS. Nguyễn Trí Hiếu, được bài dẫn, lưu ý khoản trả nợ hằng tháng nên ở khoảng 35–40% thu nhập ổn định. TS. Châu Đình Linh (Trường ĐH Ngân hàng TP.HCM), được bài dẫn, khuyến nghị vốn tự có khoảng 40–50% giá trị căn nhà để giảm áp lực nợ khi lãi suất biến động.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), ông Nguyễn Quang Huy (Trường ĐH Nguyễn Trãi) kiến nghị các ngân hàng thiết kế gói vay cố định lãi suất trong 2 năm, 3 năm, 5 năm, thậm chí 10 năm trước khi chuyển sang thả nổi. Đó là đề xuất của chuyên gia được báo dẫn, không phải xác nhận mọi ngân hàng đang có các kỳ hạn này.",
      },
      {
        text: "Một ví dụ về kỳ cố định dài hơn, theo thông tin của VIB được Thanh Niên đăng lúc 13:30 ngày 21.10.2026 và bài ghi «Nguồn: VIB»: VIB giảm thêm 1%/năm đối với khoản vay mua nhà có lãi suất cố định 12 tháng và 24 tháng tại một số khu vực — bài không nêu tên khu vực — và duy trì chương trình cố định lãi suất vay mua nhà tới 5 năm, áp dụng từ tháng 8/2026. Đây là thông tin do VIB cung cấp, đăng trên Thanh Niên, không phải lời khuyên chọn ngân hàng; mức áp dụng theo điều kiện từng chương trình tại thời điểm vay.",
      },
      {
        heading: "Hỏi thông tin hỗ trợ ngân hàng cho The Camellia",
        text: "Anh chị muốn biết ngân hàng đang hỗ trợ người mua The Camellia Sơn Trà theo chính sách tại thời điểm này, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Thông tin ngân hàng được đối chiếu theo từng chương trình tại thời điểm hỏi, không phải cam kết lãi suất.",
        links: [{ to: "/lien-he", label: "Liên hệ Nhật – Nhat Elite Realty" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Lãi vay mua nhà sau ưu đãi được tính theo công thức nào?",
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), hết thời gian ưu đãi, lãi chuyển sang thả nổi, bằng lãi suất cơ sở hoặc lãi suất tham chiếu cộng biên độ trong hợp đồng tín dụng; biên độ thường 3–5%/năm. Biên độ là phần cộng thêm, không phải toàn bộ lãi suất phải trả.",
      },
      {
        heading: "Đến tháng 9/2026, khảo sát DXS-FERI ghi lãi vay mua nhà ở mức nào?",
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), dẫn khảo sát DXS-FERI, đến tháng 9/2026 lãi vay mua nhà ưu đãi phổ biến 9,8–11,5%/năm trong 12 tháng đầu, sau đó thả nổi 13–16%/năm, cao hơn khoảng 3 điểm phần trăm so với năm 2025. Đó là mặt bằng khảo sát được báo dẫn, không phải lãi suất đã duyệt của một hồ sơ.",
      },
      {
        heading: "Người mua nên kiểm tra gì trước khi ký hợp đồng vay?",
        text: "Theo VietnamFinance (Minh Dũng, 21.10.2026), nên tính khả năng trả theo lãi sau ưu đãi, không chỉ lãi ban đầu; rà soát biên độ, chu kỳ điều chỉnh, phí bảo hiểm và phí trả nợ trước hạn. Cùng bài, giới chuyên gia khuyên gốc và lãi mỗi tháng không vượt khoảng 30–40% thu nhập thực tế và nên có quỹ dự phòng; TS. Nguyễn Trí Hiếu nêu khoảng 35–40% thu nhập ổn định; TS. Châu Đình Linh (Trường ĐH Ngân hàng TP.HCM) nêu vốn tự có khoảng 40–50% giá trị căn nhà.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí, không phải thông báo chính thức của bất kỳ ngân hàng nào và không phải thông báo của The Camellia Sơn Trà. Lãi suất áp dụng theo chính sách từng ngân hàng tại thời điểm vay. Nguồn: VietnamFinance, Minh Dũng, 21.10.2026, 09:30 — https://vietnamfinance.vn/vay-uu-dai-7-dot-ngot-len-gan-20-ac-mong-lai-suat-tha-noi-cua-nguoi-mua-nha-d152290.html ; Thanh Niên, 21.10.2026, 13:30, nội dung ghi «Nguồn: VIB» — https://thanhnien.vn/vib-giam-lai-suat-cho-vay-dong-hanh-cung-doanh-nghiep-va-khach-hang-ca-nhan-185261021124738827.htm. Ảnh: VietnamFinance.",
      },
    ],
  },

  {
    slug: "15-ngan-hang-giam-lai-vay-vay-mua-nha-co-duoc-giam",
    date: "21.10.2026",
    title: "15 ngân hàng giảm lãi vay 1,5–2%: vay mua nhà có được giảm?",
    excerpt:
      "Theo CafeF (20.10.2026), 15/46 ngân hàng giảm lãi vay bình quân 1,5–2%/năm. Vay mua nhà có được hưởng hay không tùy sản phẩm và hồ sơ từng ngân hàng.",
    description:
      "Theo CafeF đến 20/10/2026, 15/46 ngân hàng giảm lãi cho vay bình quân 1,5–2%. Mức này không có nghĩa vay mua nhà đã giảm 1,5–2%/năm.",
    image: "/images/news-giam-lai-vay-2110-og.jpg",
    imageAlt:
      "Khách hàng đứng trước mặt tiền chi nhánh Vietcombank, logo chữ V màu xanh gắn trên cửa kính",
    imageCaption: "Khách hàng trước mặt tiền một chi nhánh Vietcombank. Ảnh: CafeF",
    poster: "/images/news-giam-lai-vay-2110-hero.webp",
    gallery: ["/images/news-giam-lai-vay-2110-hero.webp"],
    body: [
      {
        text: "Theo CafeF (Ngọc Mai, 20.10.2026), Việt Nam có 46 ngân hàng thương mại và tính đến ngày 20/10 mới có 15 ngân hàng giảm lãi suất cho vay bình quân từ 1,5–2% theo chỉ đạo của Ngân hàng Nhà nước; có ngân hàng đưa lãi suất cho vay bình quân xuống thấp nhất 4,1%/năm. Mức này là lãi cho vay bình quân của nhóm ngân hàng đã công bố, không phải xác nhận mọi khoản vay mua nhà đã giảm 1,5–2%/năm. Người đang tính vay mua căn hộ cần hỏi đúng ngân hàng xem sản phẩm và hồ sơ của mình có nằm trong chương trình giảm hay không.",
      },
      {
        heading: "Đến 20/10, 15 trên 46 ngân hàng giảm lãi vay bình quân",
        text: "Theo CafeF (Ngọc Mai, 20.10.2026), Việt Nam có 46 ngân hàng thương mại. Tính đến ngày 20/10, mới có 15 ngân hàng giảm lãi suất cho vay bình quân từ 1,5–2% theo chỉ đạo của Ngân hàng Nhà nước. Cùng bài ghi có ngân hàng đưa mức lãi suất cho vay bình quân xuống thấp nhất 4,1%/năm. Con số 4,1%/năm trong bài là lãi suất cho vay bình quân, không phải lãi suất một khoản vay mua nhà.",
      },
      {
        text: "Bài ngày 18/10 trên website đã tóm tắt văn bản 9608/NHNN-CSTT: mức giảm 1,5–2%/năm được văn bản nêu cho lĩnh vực sản xuất, kinh doanh và ưu tiên, còn lãi vay mua nhà tùy từng ngân hàng. Bài này chỉ ghi các chương trình ngân hàng đã công bố trong ngày 19–20/10/2026, không thay bài đó và không phải thông báo của Ngân hàng Nhà nước.",
        links: [
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-mua-nha-luu-y",
            label: "NHNN yêu cầu giảm lãi suất ngày 18/10: người mua nhà lưu ý gì?",
          },
        ],
      },
      {
        heading: "Chiều tối 19/10, các ngân hàng công bố chương trình giảm lãi vay",
        text: "Theo CafeF (Quang Hưng, 19.10.2026, 21:52), chiều tối 19/10 có thêm SHB, MB, VietinBank, TPBank và OCB công bố giảm lãi suất cho vay, nối tiếp Agribank, Vietcombank, BIDV, ACB, LPBank và VietBank. Mức giảm phổ biến từ 1,5–2%/năm. Riêng OCB giảm 2,25%/năm với một số khoản vay trung, dài hạn của hội viên OCB Priority Banking khi kỳ cố định lãi suất là 3 tháng đầu. Bài nêu động thái này diễn ra sau chỉ đạo của Chính phủ và Ngân hàng Nhà nước, và mức ưu đãi cụ thể phụ thuộc đối tượng khách hàng, mục đích vay, kỳ hạn cùng điều kiện từng chương trình.",
      },
      {
        text: "Theo CafeF (Quang Hưng, 19.10.2026), MB giảm 1,5%/năm lãi suất cho vay với 5 lĩnh vực ưu tiên — nông nghiệp, nông thôn; sản xuất, kinh doanh hàng xuất khẩu; doanh nghiệp nhỏ và vừa; công nghiệp hỗ trợ; doanh nghiệp ứng dụng công nghệ cao — lãi suất từ 7,9%/năm, và một số trường hợp được ưu tiên hỗ trợ có thể giảm tới 2%/năm. SHB công bố gói cho khách hàng sản xuất kinh doanh, gồm hộ kinh doanh và doanh nghiệp, giảm 1,5–2%/năm. VietinBank công bố giải pháp giảm tới 2%/năm, tập trung sản xuất, kinh doanh và lĩnh vực ưu tiên, trong đó bài nêu nông nghiệp, lâm nghiệp, thủy sản, phát triển nhà ở xã hội, đầu tư hạ tầng, năng lượng, giao thông và công nghệ chiến lược. Agribank triển khai từ 19/10 chương trình giảm tới 2%/năm cho lĩnh vực ưu tiên và khách hàng cần vốn sản xuất, kinh doanh.",
      },
      {
        text: "Theo CafeF (Quang Hưng, 19.10.2026), ACB thông báo giảm 1,5–2%/năm đối với doanh nghiệp. LPBank áp dụng mức giảm 1,6–2%/năm cho khoản giải ngân mới phục vụ sản xuất, kinh doanh ngắn hạn, từ 19/10 đến hết 31/12/2026. VietBank triển khai gói tín dụng 3.000 tỷ đồng từ 19/10, lãi suất thấp hơn tối thiểu 1,5%/năm so với mức thông thường, đến hết 30/6/2027 hoặc khi hết hạn mức. BIDV triển khai từ 15/10/2026 chương trình cho khoản vay ngắn hạn bằng đồng Việt Nam, lãi suất từ 6%/năm, thấp hơn tối đa 2%/năm so với mức thông thường. TPBank cho biết đã giảm ngay 0,5% lãi suất huy động và cam kết trong tháng 10 giảm lãi suất cho vay từ 1,5–2%/năm, đặc biệt với lĩnh vực ưu tiên. Cùng bài, TPBank nêu chuỗi tín dụng 8.000 tỷ đồng cho doanh nghiệp SME, trong đó có gói vay sản xuất kinh doanh, mua ô tô và mua nhà cho khách hàng cá nhân. Việc một gói được nhắc tới mục đích mua nhà không có nghĩa mức giảm 1,5–2%/năm đã áp cho mọi khoản vay mua nhà tại TPBank.",
      },
      {
        heading: "Vietcombank từ 20/10: giảm lãi huy động và lãi vay theo chương trình",
        text: "Theo CafeF (H. Kim, 20.10.2026), từ ngày 20/10/2026 Vietcombank điều chỉnh giảm 0,5%/năm lãi suất huy động niêm yết với các kỳ hạn từ 6 tháng trở lên, theo định hướng của Ngân hàng Nhà nước, để tạo thêm dư địa giảm lãi suất cho vay. Đây là điều chỉnh lãi suất huy động niêm yết, không phải bảng lãi suất vay mua nhà.",
      },
      {
        text: "Theo CafeF (H. Kim, 20.10.2026), từ ngày 19/10/2026 đến hết ngày 31/12/2026 Vietcombank triển khai Chương trình tín dụng thúc đẩy sản xuất kinh doanh và phát triển các lĩnh vực ưu tiên. Khách hàng tham gia chương trình được giảm lãi suất cho vay từ 1,5% đến 2%/năm; riêng một số lĩnh vực, lãi suất cho vay ngắn hạn được giảm tới 3%/năm so với mức hiện hành của Vietcombank. Chương trình gắn với sản xuất kinh doanh và lĩnh vực ưu tiên. Bài báo không nói mọi khoản vay mua nhà tại Vietcombank được giảm 1,5–2%/năm hay 3%/năm.",
      },
      {
        heading: "Vay mua nhà không tự động được giảm 1,5–2%/năm",
        text: "Các mức giảm mà CafeF ghi trong ngày 19–20/10/2026 gắn với chương trình và nhóm khách hàng từng ngân hàng công bố: sản xuất kinh doanh, lĩnh vực ưu tiên, doanh nghiệp, hoặc kỳ hạn và nhóm hội viên cụ thể. Một khoản vay mua nhà chỉ được hưởng khi ngân hàng xác nhận đúng sản phẩm đó và hồ sơ người vay nằm trong chương trình. Bài này không kết luận lãi vay mua nhà đã giảm 1,5–2%/năm.",
      },
      {
        text: "Trước khi ký, người vay nên hỏi ngân hàng bốn việc: lãi suất áp trong thời gian cố định; biên độ sau thời gian đó, vì lãi thả nổi thường bằng lãi suất cơ sở hoặc lãi suất tham chiếu cộng biên độ; phí trả nợ trước hạn; và số tiền phải trả khi hết ưu đãi. Theo Thương Gia (Thúy Vy, 02.10.2026), dữ liệu bài báo dẫn cho thấy lãi suất thực tế sau thời gian ưu đãi phổ biến quanh 16–17%/năm, và biên độ được bài nêu khoảng 3,3–3,5%. Đó là mặt bằng bài báo ghi ngày 02/10, trước đợt công bố 19–20/10, không phải mức mới sau khi lãi cho vay bình quân được một số ngân hàng điều chỉnh. Dòng tiền nên tính theo kịch bản thận trọng, không chỉ theo lãi suất của những tháng đầu.",
        links: [
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà vượt 10%: tính dòng tiền thế nào?",
          },
        ],
      },
      {
        heading: "Hỏi thông tin hỗ trợ ngân hàng cho The Camellia",
        text: "Anh chị muốn biết ngân hàng đang hỗ trợ người mua The Camellia Sơn Trà theo chính sách tại thời điểm này, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Thông tin ngân hàng được đối chiếu theo từng chương trình tại thời điểm hỏi, không phải cam kết lãi suất.",
        links: [{ to: "/lien-he", label: "Liên hệ Nhật – Nhat Elite Realty" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Đến ngày 20/10/2026 đã có bao nhiêu ngân hàng giảm lãi suất cho vay bình quân?",
        text: "Theo CafeF (Ngọc Mai, 20.10.2026), Việt Nam có 46 ngân hàng thương mại và tính đến ngày 20/10 mới có 15 ngân hàng giảm lãi suất cho vay bình quân từ 1,5–2% theo chỉ đạo của Ngân hàng Nhà nước. Cùng bài nêu có ngân hàng đưa lãi suất cho vay bình quân xuống thấp nhất 4,1%/năm. Đó là lãi cho vay bình quân, không phải lãi suất một khoản vay mua nhà.",
      },
      {
        heading: "Khoản vay mua nhà có được giảm 1,5–2%/năm trong đợt công bố 19–20/10 không?",
        text: "Không thể kết luận như vậy từ các bài báo đã dẫn. Theo CafeF (Quang Hưng, 19.10.2026 và H. Kim, 20.10.2026), mức giảm 1,5–2%/năm, và một số lĩnh vực được Vietcombank giảm tới 3%/năm ở lãi vay ngắn hạn, gắn với chương trình sản xuất kinh doanh, lĩnh vực ưu tiên hoặc nhóm khách hàng cụ thể. Khoản vay mua nhà chỉ được giảm khi đúng sản phẩm và hồ sơ mà ngân hàng xác nhận.",
      },
      {
        heading: "Người vay mua nhà nên hỏi ngân hàng những gì trước khi ký?",
        text: "Nên hỏi lãi suất trong thời gian cố định, biên độ cộng thêm sau đó vì lãi thả nổi thường bằng lãi suất cơ sở hoặc lãi suất tham chiếu cộng biên độ, phí trả nợ trước hạn, và tự lập dòng tiền cho giai đoạn sau ưu đãi. Theo Thương Gia (Thúy Vy, 02.10.2026), lãi sau ưu đãi mà bài dẫn phổ biến quanh 16–17%/năm tại thời điểm bài viết. Mức của một hồ sơ là mức ngân hàng báo khi vay.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí, không phải thông báo chính thức của bất kỳ ngân hàng nào và không phải thông báo của The Camellia Sơn Trà. Lãi suất áp dụng theo chính sách từng ngân hàng tại thời điểm vay. Nguồn: CafeF, Quang Hưng, 19.10.2026, 21:52 — https://cafef.vn/cap-nhat-tinh-hinh-giam-lai-suat-cho-vay-den-toi-19-10-them-mb-vietinbank-shb-ocb-tham-gia-188261019215501635.chn ; CafeF, Ngọc Mai, 20.10.2026, 22:17 — https://cafef.vn/lai-suat-cho-vay-moi-nhat-cua-cac-ngan-hang-188261020211837231.chn ; CafeF, H. Kim, 20.10.2026, 10:58 — https://cafef.vn/tu-hom-nay-20-10-vietcombank-giam-manh-lai-suat-cho-vay-mot-so-nhom-khach-hang-duoc-giam-toi-3-18826102010580376.chn ; Thương Gia, Thúy Vy, 02.10.2026 — https://thuonggiaonline.vn/lai-suat-cho-vay-mua-nha-ngan-hang-nao-thap-nhat-thang-102026-post573281.html. Ảnh: CafeF.",
      },
    ],
  },

  {
    slug: "thi-truong-bds-da-nang-q3-2026-dat-nen-ha-nhiet-nha-pho",
    date: "20.10.2026",
    title: "Đà Nẵng quý III/2026: đất nền hạ nhiệt, nhà mặt phố neo giá cao",
    excerpt:
      "Theo Thời báo Ngân hàng (20.10.2026), giá rao bán đất nền Đà Nẵng cũ quý III/2026 còn 78 triệu đồng/m², giảm 7%; nhà mặt phố xuống 137 triệu đồng/m².",
    description:
      "Theo Thời báo Ngân hàng (20.10.2026), số liệu đất nền và nhà mặt phố Đà Nẵng quý III/2026 là giá rao bán, không phải giá giao dịch hay giá căn hộ.",
    image: "/images/news-bds-dn-q3-2026-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): phố thương mại Đà Nẵng với dãy nhà phố có quán cà phê và xe máy, các lô đất đã phân lô còn trống cùng vài công trình đang xây, phía sau là núi xanh và biển",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-bds-dn-q3-2026-hero.webp",
    gallery: ["/images/news-bds-dn-q3-2026-hero.webp"],
    body: [
      {
        text: "Theo Thời báo Ngân hàng (Hà Sơn, 20.10.2026), dẫn Batdongsan.com.vn, đất nền Đà Nẵng giảm giá sau giai đoạn tăng nóng, trong khi nhà mặt phố vẫn neo ở mặt bằng cao. Tại Đà Nẵng cũ, giá rao bán đất nền quý III/2026 còn 78 triệu đồng/m², giảm 7%; giá rao bán nhà mặt phố cũng giảm 7%, xuống 137 triệu đồng/m². Thanh khoản trầm lắng đặt người đang giữ tài sản trước bài toán dòng tiền. Các mức này là giá rao bán trên tin đăng, không phải giá giao dịch đã chốt, và bài nguồn không nói về căn hộ chung cư.",
      },
      {
        heading: "Đất nền điều chỉnh sau giai đoạn tăng nóng",
        text: "Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, đất nền vẫn chiếm tỷ trọng lớn nhất trong mức độ quan tâm tại Đà Nẵng, với 45%, nhưng đã giảm so với 56% vào quý III/2025. Cùng nguồn, giá rao bán đất nền giảm 7%, còn 78 triệu đồng/m² tại Đà Nẵng cũ. Mức 78 triệu đồng/m² là giá người bán đăng tin, không phải giá một giao dịch đã thành công.",
      },
      {
        text: "Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, tại Đà Nẵng cũ giá rao bán đất nền tăng từ 43 triệu đồng/m² trong quý I/2023 lên 84 triệu đồng/m² vào quý II/2026, trước khi giảm còn 78 triệu đồng/m² trong quý III/2026. Tại Quảng Nam cũ, giá rao bán tăng từ 10 triệu đồng/m² lên 22 triệu đồng/m² trong cùng khoảng thời gian. Mức độ quan tâm tại cả hai khu vực đều giảm sau khi đạt đỉnh vào quý III/2025.",
      },
      {
        heading: "Khu vực nào giảm, khu vực nào tăng",
        text: "Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, Ngũ Hành Sơn dẫn đầu mức độ quan tâm đất nền với 26%, tiếp đến Liên Chiểu và Cẩm Lệ cùng chiếm 13%. Trong quý III/2026, giá rao bán đất nền giảm tại hầu hết địa bàn. Liên Chiểu giảm mạnh nhất 8%, còn 44 triệu đồng/m². Hội An đi ngược chiều: giá rao bán tăng 5%, lên 39 triệu đồng/m². Đây vẫn là giá rao bán, không phải giá giao dịch.",
      },
      {
        text: "Theo Thời báo Ngân hàng (20.10.2026), diễn biến trên cho thấy đất nền không còn tăng đồng đều. Khi mức độ quan tâm suy yếu và giá rao bán bắt đầu điều chỉnh, người quan tâm cần chú trọng pháp lý, quy hoạch, kết nối hạ tầng và khả năng khai thác thực tế, thay vì chỉ dựa vào kỳ vọng tăng giá.",
      },
      {
        heading: "Nhà mặt phố Sơn Trà, Ngũ Hành Sơn và Hải Châu",
        text: "Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, từ quý I/2025 đến quý III/2026 giá rao bán nhà mặt phố tại Đà Nẵng cũ tăng 29%, từ 106 triệu đồng/m² lên 137 triệu đồng/m². Mức tăng này cao hơn Hà Nội trong cùng giai đoạn, trong khi TP.HCM cũ giảm 6%. Cùng bài ghi nhận nhà mặt phố giảm 7%, xuống 137 triệu đồng/m². Con số 137 triệu đồng/m² là giá rao bán, không phải giá đã bán được.",
      },
      {
        text: "Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, mức độ quan tâm nhà mặt phố cao nhất ở Hải Châu với 31%, tiếp theo Sơn Trà 21% và Ngũ Hành Sơn 16%. Quý III/2026, giá rao bán nhà mặt phố tại Ngũ Hành Sơn là 188 triệu đồng/m², tăng 45% so với quý I/2025; Sơn Trà 181 triệu đồng/m², tăng 43%; Hải Châu 157 triệu đồng/m², tăng 23%. Các mức này là diễn biến giá rao bán đã ghi nhận đến quý III/2026, không phải giá căn hộ chung cư.",
      },
      {
        text: "Theo Thời báo Ngân hàng (20.10.2026), Sơn Trà và Ngũ Hành Sơn ghi nhận mức tăng giá rao bán nhà mặt phố mạnh nhất trong các khu vực bài báo nêu, gắn với lợi thế ven biển và du lịch của nhà mặt phố. Phần tăng đó thuộc về giá rao bán nhà mặt phố, không dùng để nói về căn hộ chung cư.",
      },
      {
        heading: "Chuyên gia nói gì về thanh khoản và dòng tiền",
        text: "Theo Thời báo Ngân hàng (20.10.2026), TS. Nguyễn Văn Đính, Phó Chủ tịch Hội Môi giới Bất động sản Việt Nam, cho rằng đà điều chỉnh của đất nền có thể giúp thị trường sàng lọc yếu tố đầu cơ và thổi giá. Mức độ quan tâm suy giảm cho thấy nhà đầu tư cá nhân thận trọng hơn, ưu tiên bảo toàn vốn thay vì chạy theo kỳ vọng tăng giá ngắn hạn.",
      },
      {
        text: "Theo Thời báo Ngân hàng (20.10.2026), ông Matthew Powell, Giám đốc Savills Hà Nội, nhận định mặt bằng giá đất nền Đà Nẵng vẫn được hỗ trợ bởi kỳ vọng du lịch quốc tế phục hồi và các dự án hạ tầng trọng điểm. Ông nói rõ giá rao bán cao không đồng nghĩa thanh khoản tốt. Trong bối cảnh giao dịch còn trầm lắng, chủ sở hữu cần linh hoạt về tài chính và sẵn sàng điều chỉnh kỳ vọng lợi nhuận để tăng khả năng chuyển nhượng. Đây là nhận định được báo dẫn, không phải lời khuyên mua của website.",
      },
      {
        text: "Theo Thời báo Ngân hàng (20.10.2026), ông Nguyễn Văn Đính cho rằng nhà mặt phố trên trục chính Hải Châu và khu du lịch Sơn Trà, Ngũ Hành Sơn có lợi thế khai thác dịch vụ, lưu trú. Giá trị tài sản chỉ thành hiệu quả khi kinh doanh tạo được dòng tiền phù hợp. Lượng khách, công suất khai thác và chi phí vận hành cần được cân nhắc bên cạnh vị trí và giá mua.",
      },
      {
        text: "Theo Thời báo Ngân hàng (20.10.2026), ông Đính cho rằng thị trường bất động sản Đà Nẵng vẫn trong quá trình tạo đáy và phục hồi chậm. Vướng mắc thủ tục pháp lý, áp lực trả nợ vay và tâm lý thận trọng của dòng tiền khiến giao dịch chưa đạt kỳ vọng. Giá rao bán tăng tại một số khu vực chưa đủ để khẳng định thị trường đã vào chu kỳ tăng trưởng mới.",
      },
      {
        heading: "Người mua ở thật nên đọc số liệu này thế nào",
        text: "Người mua để ở nên đọc 78 triệu đồng/m² và 137 triệu đồng/m² như giá rao bán, không như giá đã chốt. Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, đó là mức đất nền và nhà mặt phố tại Đà Nẵng cũ trong quý III/2026. Một tin đăng ở mức đó không chứng minh tài sản đã có người mua đúng mức đó.",
      },
      {
        text: "Bài nguồn không có số liệu căn hộ chung cư. Theo Thời báo Ngân hàng (20.10.2026), 181 triệu đồng/m² tại Sơn Trà, 188 triệu đồng/m² tại Ngũ Hành Sơn và 157 triệu đồng/m² tại Hải Châu là giá rao bán nhà mặt phố quý III/2026, không phải giá căn hộ. Không dùng các mức này để suy giá chung cư.",
      },
      {
        text: "Người đang xem một tài sản cụ thể nên hỏi pháp lý, quy hoạch, hạ tầng đã có và khả năng sử dụng thật của đúng tài sản đó. Theo Thời báo Ngân hàng (20.10.2026), giai đoạn này đòi hỏi chuyển từ tư duy chờ tăng giá sang đánh giá giá trị sử dụng và khả năng khai thác; thanh khoản còn hạn chế, thị trường cần thêm thời gian phục hồi. Bài không đưa ra dự báo giá cho các quý sau.",
      },
      {
        text: "Các con số đất nền và nhà mặt phố ở trên không phải giá The Camellia Sơn Trà và không dùng để nói giá căn hộ tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Bài này là tin thị trường tổng hợp, không phải thông báo hay thông cáo của dự án.",
        links: [
          {
            to: "/tin-tuc/lien-tho-da-nang-giam-gia-thu-cap-q3-2026",
            label: "Liền thổ Đà Nẵng quý III/2026: giá sơ cấp neo cao, thứ cấp có nơi giảm",
          },
          {
            to: "/tin-tuc/thanh-khoan-phan-hoa-can-ho-dat-nen-da-nang-2026",
            label: "Thanh khoản BĐS Đà Nẵng 2026 phân hóa theo loại hình",
          },
          {
            to: "/tin-tuc/ton-kho-bat-dong-san-quy-iii-2026-nguoi-mua-luu-y",
            label: "Tồn kho bất động sản quý III/2026: người mua lưu ý gì",
          },
        ],
      },
      {
        heading: "Muốn tách giá rao bán khỏi hồ sơ một căn đang xem",
        text: "Anh chị muốn đọc các mức giá rao bán đất nền và nhà mặt phố riêng với hồ sơ một căn đang xem, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
        links: [
          { to: "/lien-he", label: "Liên hệ Nhật – Nhat Elite Realty" },
          { to: "/gioi-thieu", label: "Xem fact sheet The Camellia Sơn Trà" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Giá đất nền và nhà mặt phố Đà Nẵng quý III/2026 trong bài là giá giao dịch hay giá rao bán?",
        text: "Là giá rao bán, tức giá đăng trên tin rao, không phải giá giao dịch thành công. Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, đất nền Đà Nẵng cũ quý III/2026 rao 78 triệu đồng/m² và nhà mặt phố rao 137 triệu đồng/m².",
      },
      {
        heading: "Quý III/2026, giá rao bán đất nền và nhà mặt phố Đà Nẵng cũ ở mức nào?",
        text: "Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, giá rao bán đất nền tại Đà Nẵng cũ quý III/2026 còn 78 triệu đồng/m², giảm 7%. Cùng nguồn ghi quý II/2026 là 84 triệu đồng/m² và quý I/2023 là 43 triệu đồng/m². Giá rao bán nhà mặt phố giảm 7%, xuống 137 triệu đồng/m²; từ quý I/2025 đến quý III/2026 mức này tăng 29% so với 106 triệu đồng/m².",
      },
      {
        heading:
          "Số liệu nhà mặt phố Sơn Trà, Ngũ Hành Sơn và Hải Châu có phải giá căn hộ chung cư không?",
        text: "Không. Theo Thời báo Ngân hàng (20.10.2026), dẫn Batdongsan.com.vn, quý III/2026 nhà mặt phố rao 181 triệu đồng/m² tại Sơn Trà (tăng 43% so với quý I/2025), 188 triệu đồng/m² tại Ngũ Hành Sơn (tăng 45%) và 157 triệu đồng/m² tại Hải Châu (tăng 23%). Đó là giá rao bán nhà mặt phố, không phải giá căn hộ chung cư và không phải giá The Camellia Sơn Trà.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ Thời báo Ngân hàng, tác giả Hà Sơn, 20.10.2026 — https://thoibaonganhang.vn/thi-truong-bat-dong-san-da-nang-dat-nen-ha-nhiet-nha-mat-pho-van-neo-gia-cao-189301.html. Số liệu dẫn Batdongsan.com.vn qua bài báo đó và là giá rao bán, không phải giá giao dịch. Bài không phải thông báo hay thông cáo của The Camellia Sơn Trà, không thay tư vấn pháp lý, không cam kết lợi nhuận hay diễn biến giá. Ảnh minh họa tạo bằng AI.",
      },
    ],
  },

  {
    slug: "chuc-mung-20-10-gui-nhung-nguoi-phu-nu-giu-lua-to-am",
    date: "20.10.2026",
    title: "20/10: gửi những người phụ nữ giữ lửa tổ ấm",
    excerpt:
      "Nhân ngày Phụ nữ Việt Nam 20/10, Nhat Elite Realty gửi lời tri ân đến những người mẹ, người vợ, người con gái đã vun vén cho mỗi tổ ấm bình yên.",
    image: "/images/chuc-mung-20-10-gui-nhung-nguoi-phu-nu-giu-lua-to-am-og.jpg",
    imageAlt:
      "Người phụ nữ mặc áo dài hồng cắm hoa bên cửa kính nhìn ra núi Sơn Trà, ảnh minh họa tạo bằng AI",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/chuc-mung-20-10-gui-nhung-nguoi-phu-nu-giu-lua-to-am.webp",
    gallery: ["/images/chuc-mung-20-10-gui-nhung-nguoi-phu-nu-giu-lua-to-am.webp"],
    body: [
      {
        text: "Nhân ngày Phụ nữ Việt Nam 20/10/2026, Nhật – Nhat Elite Realty xin gửi lời tri ân và chúc mừng đến tất cả những người phụ nữ: người mẹ, người vợ, người chị, người con gái và những đồng nghiệp đã góp phần giữ lửa cho mỗi gia đình.",
      },
      {
        heading: "Những điều lặng lẽ làm nên một tổ ấm",
        text: "Có một người luôn dậy sớm nhất nhà, để bữa sáng kịp ấm trước giờ đi học, đi làm. Có một người nhớ từng món con thích, từng ngày giỗ của ông bà, từng khoản chi tiêu nhỏ trong nhà. Có một người lặng lẽ vun vén, để mỗi khi cả nhà trở về đều thấy bình yên.",
      },
      {
        heading: "Lời chúc ngày 20/10",
        text: "Nhat Elite Realty chúc chị em luôn khỏe mạnh, rạng rỡ và được yêu thương, không chỉ trong ngày 20/10 mà mỗi ngày trong năm. Mong mỗi người phụ nữ đều có thời gian chăm sóc bản thân, bên cạnh những lo toan cho gia đình.",
      },
      {
        heading: "Tổ ấm bắt đầu từ người phụ nữ",
        text: "Với nhiều gia đình, một tổ ấm trọn vẹn bắt đầu từ chính người phụ nữ: người chọn từng góc bếp, từng ô cửa đón nắng, từng khoảng xanh cho con chơi. Đó cũng là điều The Camellia Sơn Trà mong gửi trao: một nơi để người phụ nữ được nghỉ ngơi giữa thiên nhiên Sơn Trà, nơi rừng kề bên biển.",
      },
      {
        heading: "Ghé thăm Camellia Gallery cùng Nhật – Nhat Elite Realty",
        text: "Anh chị muốn tìm hiểu thêm về The Camellia Sơn Trà, liên hệ Nhật – Nhat Elite Realty, hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
        links: [
          { to: "/lien-he", label: "Liên hệ Nhật – Nhat Elite Realty" },
          { to: "/gioi-thieu", label: "Giới thiệu The Camellia Sơn Trà" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Ngày Phụ nữ Việt Nam là ngày nào?",
        text: "Ngày Phụ nữ Việt Nam là ngày 20/10 hằng năm, kỷ niệm ngày thành lập Hội Liên hiệp Phụ nữ Việt Nam (20/10/1930).",
      },
      {
        heading: "The Camellia Sơn Trà nằm ở đâu?",
        text: "The Camellia Sơn Trà nằm tại phường Sơn Trà, Đà Nẵng, tựa lưng vào bán đảo Sơn Trà.",
      },
      {
        heading: "Muốn tham quan dự án thì liên hệ thế nào?",
        text: "Anh chị gọi hotline 0934 885 108 (Nhật – Nhat Elite Realty) hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài viết mang tính chúc mừng và giới thiệu, không phải thông tin chào bán hay cam kết. Hình ảnh là ảnh minh họa tạo bằng AI.",
      },
    ],
  },

  {
    slug: "da-nang-chuan-bi-cong-bo-quy-hoach-chung-2050",
    date: "20.10.2026",
    title: "Đà Nẵng chuẩn bị công bố quy hoạch chung đến 2050",
    excerpt:
      "Theo Báo Đà Nẵng (19.10.2026), Đà Nẵng họp chuẩn bị công bố quy hoạch chung đến 2050, tầm nhìn 2075, dự kiến sau 20/11. Người mua nên chờ văn bản.",
    description:
      "Theo Báo Đà Nẵng (19.10.2026), hội nghị công bố quy hoạch chung Đà Nẵng đến 2050 dự kiến sau 20/11. Quy hoạch chung là định hướng, không phải giá căn hộ.",
    image: "/images/news-qh-chung-2050-og.jpg",
    imageAlt:
      "Quang cảnh cuộc họp: một người đứng phát biểu ở đầu bàn, các cán bộ ngồi hai bên, cờ Tổ quốc và màn hình xanh phía sau",
    imageCaption:
      "Quang cảnh cuộc họp chuẩn bị hội nghị công bố quy hoạch chung, chiều 19/10/2026. Ảnh: Ngọc Phú/Báo Đà Nẵng",
    poster: "/images/news-qh-chung-2050.webp",
    gallery: ["/images/news-qh-chung-2050.webp"],
    body: [
      {
        text: "Chiều 19/10/2026, Phó Chủ tịch Thường trực UBND thành phố Đà Nẵng Hồ Kỳ Minh chủ trì họp với các sở, ngành để chuẩn bị hội nghị công bố Quy hoạch chung thành phố đến năm 2050, tầm nhìn đến năm 2075, cùng xúc tiến đầu tư. Theo Báo Đà Nẵng (19.10.2026), hội nghị dự kiến diễn ra sau ngày 20/11/2026, với khoảng 500 đại biểu. Với người đang xem nhà, đây là tin về lịch chuẩn bị một sự kiện công bố định hướng của thành phố, không phải quyết định phê duyệt quy hoạch và không phải thông báo giá của một căn hộ.",
      },
      {
        heading: "Hội nghị dự kiến sau 20/11, khoảng 500 đại biểu",
        text: "Theo Báo Đà Nẵng (19.10.2026), Văn phòng UBND thành phố báo cáo tại cuộc họp chiều 19/10 rằng hội nghị công bố Quy hoạch chung thành phố Đà Nẵng đến năm 2050, tầm nhìn đến năm 2075 dự kiến diễn ra sau ngày 20/11/2026. Quy mô được nêu là khoảng 500 đại biểu. Mốc này là dự kiến trong cuộc họp chuẩn bị, chưa phải giấy mời chính thức.",
      },
      {
        text: "Cổng thông tin điện tử thành phố Đà Nẵng, trong lịch công tác tuần 43 năm 2026 đăng ngày 19.10.2026, ghi 08:00 ngày 21/10 Phó Chủ tịch Thường trực Hồ Kỳ Minh và Phó Chủ tịch Lê Quang Nam dự họp với Thường trực Thành ủy về công bố quy hoạch chung và Hội nghị xúc tiến đầu tư, tại 72 Bạch Đằng. Cùng lịch, 14:45 ngày 19/10 Phó Chủ tịch Thường trực Hồ Kỳ Minh họp chuẩn bị Lễ công bố quy hoạch chung và Hội nghị xúc tiến đầu tư năm 2026. Đây là lịch làm việc của lãnh đạo UBND thành phố, không phải nội dung quy hoạch đã ban hành.",
      },
      {
        heading: "Khởi công trước hội nghị; giấy chứng nhận và biên bản tại hội nghị",
        text: "Theo Báo Đà Nẵng (19.10.2026), trước hội nghị, thành phố dự kiến tổ chức lễ khởi công một số dự án lớn. Tại hội nghị, thành phố dự kiến trao giấy chứng nhận đầu tư, quyết định chấp thuận chủ trương đầu tư và ký các biên bản ghi nhớ hợp tác. Các việc này gắn với sự kiện xúc tiến đầu tư. Bài báo không công bố danh sách dự án sẽ khởi công, cũng không nói đó là căn hộ đang mở bán.",
      },
      {
        text: "Cùng bài Báo Đà Nẵng (19.10.2026), Phó Chủ tịch Thường trực Hồ Kỳ Minh đề nghị các đơn vị chuẩn bị nội dung thiết thực, có trọng tâm, ưu tiên dự án quan trọng và hoạt động phục vụ trực tiếp sự kiện, bảo đảm cân đối giữa các địa bàn và thuận lợi cho nhà đầu tư. Bài còn nêu yêu cầu rà soát dự án còn vướng mắc để tháo gỡ theo từng vấn đề, đúng thẩm quyền; phần thuộc bộ, ngành Trung ương thì chủ động làm việc và báo cáo. Một dự án được nhắc trong tin chuẩn bị hội nghị chưa đủ để kết luận dự án đó đã đủ điều kiện bán.",
      },
      {
        heading: "Sa bàn quy hoạch và kế hoạch truyền thông",
        text: "Theo Báo Đà Nẵng (19.10.2026), sa bàn quy hoạch chung thành phố là nội dung ưu tiên hàng đầu. Phó Chủ tịch Thường trực Hồ Kỳ Minh yêu cầu khẩn trương hoàn thiện phương án thiết kế, vị trí trưng bày và mô phỏng để báo cáo lãnh đạo thành phố xem xét. Sa bàn được nêu là cơ sở để bố trí không gian giới thiệu, công bố quy hoạch và thành tựu phát triển của thành phố. Sa bàn trưng bày tại một hội nghị là công cụ giới thiệu, không thay hồ sơ quy hoạch do cơ quan có thẩm quyền ban hành.",
      },
      {
        text: "Về truyền thông, theo Báo Đà Nẵng (19.10.2026), các sở, ngành đề nghị xây dựng kế hoạch thông tin tổng thể, chuẩn bị phim tư liệu và nội dung giới thiệu quy hoạch, tiềm năng, lợi thế cùng định hướng phát triển của thành phố. Phim và bài giới thiệu phục vụ sự kiện là tài liệu truyền thông. Người mua nên đối chiếu với văn bản quy hoạch khi văn bản đó được công bố, thay vì chỉ dựa vào phim hoặc phần thuyết minh tại hội nghị.",
      },
      {
        heading: "Người mua nhà nên đọc quy hoạch chung theo nghĩa nào",
        text: "Quy hoạch chung là khung định hướng không gian, hạ tầng và sử dụng đất của cả thành phố trong một giai đoạn dài. Theo Báo Đà Nẵng (19.10.2026), cuộc họp 19/10 là bước chuẩn bị hội nghị công bố, và bài báo không nêu việc Thủ tướng Chính phủ đã phê duyệt đồ án này. Lịch một hội nghị vì vậy chưa phải căn cứ để kết luận đồ án đã có hiệu lực.",
      },
      {
        text: "Khả năng sử dụng và giao dịch một căn nhà phụ thuộc quy hoạch phân khu, quy hoạch chi tiết, hạ tầng đã được triển khai và pháp lý của đúng dự án: chủ trương đầu tư, điều kiện được bán, tiến độ và hồ sơ từng căn. Người mua nên chờ tài liệu cơ quan nhà nước công bố, rồi đối chiếu vị trí mình đang xem với đúng đồ án, thay vì áp một câu trong tin tức cho mọi khu đất.",
      },
      {
        text: "Tin đồn «sốt đất» thường xuất hiện quanh các sự kiện quy hoạch. Cuộc họp chuẩn bị hội nghị, theo nội dung Báo Đà Nẵng (19.10.2026), không công bố bảng giá nhà đất mới và không điều chỉnh giá một dự án căn hộ. Người mua nên tách tin sự kiện khỏi quyết định xuống tiền: hỏi văn bản nào đã ban hành, hạ tầng nào đã thi công, và pháp lý của đúng căn.",
      },
      {
        text: "The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Việc thành phố chuẩn bị công bố quy hoạch chung là việc của cả địa bàn, không phải căn cứ để nói giá căn hộ tại đây tăng hay giảm. Ai đang xem một căn tại dự án này nên đối chiếu pháp lý và bảng giá của đúng đợt tại thời điểm ký.",
      },
      {
        heading: "Muốn tách tin quy hoạch khỏi hồ sơ một căn hộ",
        text: "Anh chị muốn tách tin quy hoạch của thành phố khỏi hồ sơ một căn hộ tại phường Sơn Trà, có thể liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
        links: [
          { to: "/lien-he", label: "Liên hệ — đối chiếu hồ sơ căn hộ" },
          { to: "/gioi-thieu", label: "Xem fact sheet The Camellia Sơn Trà" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Hội nghị công bố quy hoạch chung Đà Nẵng đến 2050 dự kiến khi nào?",
        text: "Theo Báo Đà Nẵng (19.10.2026), Văn phòng UBND thành phố báo cáo hội nghị dự kiến diễn ra sau ngày 20/11/2026, với khoảng 500 đại biểu. Đó là mốc dự kiến trong cuộc họp chuẩn bị chiều 19/10, chưa phải giấy mời. Lịch công tác tuần 43 trên Cổng thông tin điện tử thành phố Đà Nẵng (đăng 19.10.2026) còn ghi cuộc họp với Thường trực Thành ủy về nội dung này lúc 08:00 ngày 21/10/2026, tại 72 Bạch Đằng.",
      },
      {
        heading: "Quy hoạch chung có phải giá bán hoặc pháp lý của một căn hộ?",
        text: "Không. Quy hoạch chung là khung định hướng của cả thành phố. Giá và điều kiện giao dịch của một căn phụ thuộc quy hoạch phân khu, quy hoạch chi tiết, hạ tầng đã triển khai và pháp lý của đúng dự án. Theo Báo Đà Nẵng (19.10.2026), tin ngày 19/10 nói về chuẩn bị hội nghị công bố, không công bố bảng giá nhà đất.",
      },
      {
        heading: "Bài báo ngày 19/10 có nói Thủ tướng đã phê duyệt quy hoạch này không?",
        text: "Không. Báo Đà Nẵng (19.10.2026) tường thuật cuộc họp chuẩn bị hội nghị công bố Quy hoạch chung thành phố Đà Nẵng đến năm 2050, tầm nhìn đến năm 2075. Bài không nêu việc Thủ tướng Chính phủ đã phê duyệt đồ án. Người mua nên chờ văn bản được cơ quan có thẩm quyền công bố.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí, không phải thông báo hay văn bản quy hoạch của cơ quan nhà nước, không thay tư vấn pháp lý và không cam kết lợi nhuận hay giá. Nguồn chính: Báo Đà Nẵng, tác giả Ngọc Phú, 19.10.2026 — https://baodanang.vn/chuan-bi-cong-bo-quy-hoach-chung-thanh-pho-da-nang-den-nam-2050-tam-nhin-nam-2075-3355754.html. Lịch họp ngày 21/10/2026 dẫn Cổng thông tin điện tử thành phố Đà Nẵng, lịch công tác tuần 43 năm 2026, đăng 19.10.2026 — https://danang.gov.vn/vi/w/lich-cong-tac-tuan-43-nam-2026-cua-lanh-dao-ubnd-thanh-pho. Ảnh: Ngọc Phú/Báo Đà Nẵng. Hãy đối chiếu văn bản chính thức khi được công bố.",
      },
    ],
  },

  {
    slug: "bst-can-ho-tang-3-the-camellia-3-diem-khac-biet",
    date: "19.10.2026",
    title: "BST căn hộ tầng 3 The Camellia: 3 điểm khác biệt, từ 1,82 tỷ",
    excerpt:
      "BST tầng 3 The Camellia Sơn Trà có 11 căn, gần chuỗi tiện ích, chiều cao phần thô dự kiến 5,4m (*), giá từ 1,82 tỷ/căn (*) kèm loạt chính sách tài chính.",
    image: "/images/news-bst-tang-3-3-diem-og.jpg",
    imageAlt:
      "Phối cảnh minh họa BST căn hộ tầng 3 The Camellia Sơn Trà: gần tiện ích, chiều cao phần thô dự kiến 5,4m và chỉ 11 căn",
    imageCaption: "Ảnh: phối cảnh minh họa The Camellia Sơn Trà – MBLAND, WELAND",
    poster: "/images/news-bst-tang-3-3-diem-hero.webp",
    gallery: ["/images/news-bst-tang-3-3-diem-hero.webp"],
    body: [
      {
        text: "Bộ sưu tập (BST) căn hộ tầng 3 của The Camellia Sơn Trà – Đà Nẵng gồm 11 căn, có ba điểm khác biệt so với các tầng còn lại: gần chuỗi tiện ích nhất, chiều cao phần thô dự kiến 5,4m (*) và số lượng giới hạn. Giá bán từ 1,82 tỷ/căn (*), áp dụng kèm các chính sách tài chính hiện hành.",
      },
      {
        heading: "Gần chuỗi tiện ích nội khu nhất",
        text: "Căn hộ BST tầng 3 nằm cùng khu vực với chuỗi tiện ích nội khu như phòng gym, phòng yoga, Kid Club và vườn cảnh quan. Cư dân tầng 3 đi bộ vài bước là tới tiện ích, gần như không phụ thuộc thang máy, phù hợp gia đình có trẻ nhỏ hoặc người lớn tuổi muốn sinh hoạt, tập luyện hằng ngày.",
        image: "/images/news-bst-tang-3-3-diem-tien-ich.webp",
        imageAlt:
          "Phối cảnh minh họa tiện ích nội khu The Camellia Sơn Trà cạnh BST căn hộ tầng 3: phòng gym, yoga, Kid Club và vườn cảnh quan",
      },
      {
        heading: "Chiều cao phần thô dự kiến 5,4m (*), linh hoạt bố trí không gian",
        text: "Căn hộ BST tầng 3 có chiều cao phần thô dự kiến 5,4m (*), cao hơn căn hộ thông thường. Khoảng không này cho phép gia chủ cân nhắc bố trí thêm tầng lửng, góc làm việc, khu vui chơi cho trẻ hoặc góc thư giãn, đồng thời giúp không gian thoáng và nhận nhiều ánh sáng tự nhiên hơn. Việc cải tạo, bố trí tầng lửng cần tuân thủ thiết kế và quy định của dự án.",
        image: "/images/news-bst-tang-3-3-diem-54m.webp",
        imageAlt:
          "Phối cảnh minh họa căn hộ tầng 3 The Camellia Sơn Trà với chiều cao phần thô dự kiến 5,4m và tầng lửng",
      },
      {
        heading: "Chỉ 11 căn ở tầng 3, riêng tư và yên tĩnh",
        text: "BST tầng 3 chỉ có 11 căn hộ. Số căn ít trên một tầng giúp hành lang và khu vực chung yên tĩnh, ít người qua lại, phù hợp gia đình đề cao sự riêng tư. Lưu ý: con số 11 căn chỉ áp dụng cho BST tầng 3, không phải toàn dự án.",
        image: "/images/news-bst-tang-3-3-diem-11-can.webp",
        imageAlt:
          "Phối cảnh minh họa BST 11 căn hộ tầng 3 The Camellia Sơn Trà, hành lang và khu vực chung yên tĩnh",
      },
      {
        heading: "Giá và chính sách tài chính đang áp dụng",
        text: "Căn hộ The Camellia Sơn Trà có giá từ 1,82 tỷ/căn (*). Các chính sách tài chính đang áp dụng gồm: • Hỗ trợ lãi suất 70% tối đa 18 tháng (*). • Chiết khấu tới 13% khi chọn phương án thanh toán sớm (*). • Thanh toán «Thảnh thơi»: thanh toán 50% đến khi nhận nhà (*). • Chiết khấu mua chung tới 3% (*). • Member Get Member (*): khách đã mua giới thiệu khách mới được tặng 1 chỉ vàng; khách mua mới hoặc mua thêm được tặng 1 chỉ vàng và chiết khấu 1%. • Miễn phí phí quản lý 12 tháng (*).",
      },
      {
        heading: "Xem căn BST tầng 3 cùng Nhật – Nhat Elite Realty",
        text: "Anh chị muốn xem mặt bằng, căn còn trống và bảng tính dòng tiền BST tầng 3, liên hệ Nhật – Nhat Elite Realty, hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "BST căn hộ tầng 3 The Camellia có bao nhiêu căn?",
        text: "BST tầng 3 có 11 căn hộ. Con số này chỉ áp dụng cho tầng 3.",
      },
      {
        heading: "Chiều cao 5,4m của căn tầng 3 là chiều cao gì?",
        text: "Đó là chiều cao phần thô dự kiến 5,4m (*), có thể thay đổi theo hồ sơ thiết kế và bàn giao thực tế.",
      },
      {
        heading: "Giá căn hộ BST tầng 3 từ bao nhiêu?",
        text: "Giá từ 1,82 tỷ/căn (*), giá cụ thể tùy căn, diện tích và phương án thanh toán tại thời điểm giao dịch.",
      },
      {
        heading: "Lưu ý",
        text: "(*) Giá, chiều cao phần thô và các ưu đãi là thông tin dự kiến, áp dụng theo điều kiện, thời hạn của chủ đầu tư và ngân hàng tại thời điểm giao dịch; hỗ trợ lãi suất, chiết khấu và quà tặng không cộng dồn nếu chính sách không cho phép.",
      },
      {
        text: "Lưu ý: Bài viết mang tính giới thiệu, không phải cam kết về lợi nhuận hay giá trị tăng thêm. Hình ảnh là phối cảnh minh họa.",
      },
    ],
  },

  {
    slug: "da-nang-lay-y-kien-sua-he-so-k-gia-dat-2026",
    date: "19.10.2026",
    title: "Đà Nẵng lấy ý kiến sửa hệ số K giá đất 2026: người mua lưu ý gì?",
    excerpt:
      "Theo Tuổi Trẻ (19.10.2026), Đà Nẵng lấy ý kiến dự thảo sửa hệ số K giá đất 2026: tăng gần chung cư, TTTM; giảm gần đền, chùa. Chưa ban hành.",
    description:
      "Theo Tuổi Trẻ (19.10.2026), Đà Nẵng lấy ý kiến sửa hệ số K giá đất 2026. Dự thảo chưa ban hành; hệ số K không phải giá niêm yết căn hộ.",
    image: "/images/news-he-so-k-du-thao-10-2026-og.jpg",
    imageAlt:
      "Công trình tâm linh mái ngói ven mặt nước tại Đà Nẵng, nhìn từ trên cao, với cây xanh và mặt nước phía trước",
    imageCaption:
      "Công trình tâm linh tại Đà Nẵng – dự thảo đề xuất hệ số K 0,9 với thửa đất gần đền, chùa. Ảnh: Trường Trung/Tuổi Trẻ",
    poster: "/images/news-he-so-k-du-thao-10-2026.webp",
    gallery: ["/images/news-he-so-k-du-thao-10-2026.webp"],
    body: [
      {
        text: "Ngày 19/10/2026, Sở Nông nghiệp và Môi trường TP Đà Nẵng đang lấy ý kiến dự thảo sửa đổi, bổ sung Quyết định số 101 của UBND thành phố về hệ số điều chỉnh giá đất (hệ số K) năm 2026. Theo Tuổi Trẻ (19.10.2026), đây là dự thảo đang lấy ý kiến, chưa được ban hành. Hệ số K dùng để tính nghĩa vụ tài chính về đất đai, không phải giá chào bán một căn hộ.",
      },
      {
        heading: "Dự thảo sửa Quyết định 101 đang ở bước lấy ý kiến",
        text: "Theo Tuổi Trẻ (19.10.2026), Sở Nông nghiệp và Môi trường TP Đà Nẵng cho biết ngày 19/10/2026 đang xin ý kiến về dự thảo sửa đổi, bổ sung Quyết định số 101 của UBND TP về hệ số K năm 2026. Quyết định 101/2026/QĐ-UBND ngày 30/6/2026 là văn bản đã ban hành; bản đang lấy ý kiến là phương án sửa, chưa thay văn bản đó.",
        links: [
          {
            to: "/tin-tuc/he-so-k-gia-dat-da-nang-2026-dat-nen",
            label: "Hệ số K giá đất Đà Nẵng 2026 theo Quyết định 101",
          },
        ],
      },
      {
        text: "Các con số hệ số và phần bảng giá đất trong bài là nội dung dự thảo do Tuổi Trẻ (19.10.2026) thuật lại. Mức áp cho một thửa chỉ xác định được khi văn bản được ban hành và cơ quan chuyên môn đối chiếu vị trí thửa với phụ lục.",
      },
      {
        heading: "Vị trí dự thảo đề xuất hệ số tăng K3.1",
        text: "Theo Tuổi Trẻ (19.10.2026), dự thảo đề xuất hệ số tăng K3.1 bằng 1,1 cho thửa đất đối diện mặt tiền chính, hoặc nằm trong 200m theo đường giao thông mà xe máy đi được, tính từ một nhóm công trình. Nhóm này gồm trường đại học và cao đẳng; chợ, trừ chợ tự phát; trung tâm hành chính gồm trụ sở UBND thành phố, UBND xã hoặc phường, trung tâm phục vụ hành chính công hoặc bộ phận một cửa; chung cư; trung tâm thương mại; điểm du lịch cộng đồng đã được công nhận; và công viên công cộng cấp đô thị.",
      },
      {
        text: "Cùng dự thảo, theo Tuổi Trẻ (19.10.2026), công viên công cộng nằm trong đơn vị ở được đề xuất K3.1 bằng 1,05. Hệ số này điều chỉnh giá đất khi tính nghĩa vụ tài chính, không phải giá niêm yết của chung cư, trung tâm thương mại hay công viên.",
      },
      {
        heading: "Vị trí dự thảo đề xuất hệ số giảm K3.2 và K3.3",
        text: "Theo Tuổi Trẻ (19.10.2026), dự thảo đề xuất hệ số giảm K3.2 bằng 0,9 với thửa đất tiếp giáp, đối diện, hoặc nằm trong 100m theo đường giao thông tính từ miếu, đền, chùa, đình, nhà thờ và công trình có yếu tố tâm linh. Cùng mức 0,9 được đề xuất cho thửa đất nằm trong 200m theo đường chim bay tính từ nghĩa trang hoặc nghĩa địa.",
      },
      {
        text: "Theo Tuổi Trẻ (19.10.2026), dự thảo còn đề xuất K3.3 bằng 0,9 cho đất ở vị trí 1, gồm đất liền kề và biệt thự, khi mặt đường hoặc vỉa hè đâm thẳng vào mặt tiền thửa. Hệ số giảm trong dự thảo là căn cứ tính nghĩa vụ tài chính, không phải giá giao dịch của thửa đất trên thị trường.",
      },
      {
        heading: "Bổ sung và sửa bảng giá đất trên hai địa bàn cũ",
        text: "Theo Tuổi Trẻ (19.10.2026), dự thảo bổ sung bảng giá đất để làm cơ sở xác định nghĩa vụ tài chính về đất đai. Trên địa bàn Đà Nẵng cũ, dự thảo bổ sung 31 tuyến hoặc đoạn đường và 21 vị trí chưa có trong bảng giá, sửa 34 tuyến và bãi bỏ 1 tuyến.",
      },
      {
        text: "Trên địa bàn Quảng Nam cũ, theo Tuổi Trẻ (19.10.2026), dự thảo bổ sung 112 tuyến hoặc đoạn đường và 474 vị trí, sửa giá của 17 tuyến và sửa tên của 53 tuyến. Phần này cập nhật bảng giá dùng cho nghĩa vụ tài chính, không phải bảng giá chào bán nhà ở.",
      },
      {
        heading: "Người mua căn hộ nên đọc hệ số K theo nghĩa nào",
        text: "Hệ số K trong dự thảo Đà Nẵng, theo Tuổi Trẻ (19.10.2026), là hệ số điều chỉnh giá đất năm 2026. Khi tính tiền sử dụng đất, tiền thuê đất và các khoản nghĩa vụ tài chính về đất đai khác, cơ quan chuyên môn dùng hệ số này cùng bảng giá đất theo quy định. Người đang xem một căn hộ không nên coi hệ số K là giá bán của căn đó.",
      },
      {
        text: "Dự thảo gắn hệ số cao hơn với thửa gần trường, chợ, trụ sở hành chính, chung cư, trung tâm thương mại, điểm du lịch cộng đồng hoặc công viên, và gắn hệ số thấp hơn với thửa gần công trình tâm linh hoặc nghĩa trang. Theo Tuổi Trẻ (19.10.2026), đó là cách phân loại vị trí trong bước tính nghĩa vụ tài chính về đất. Người mua căn hộ trong một dự án thường không nộp trực tiếp các khoản này; chi phí đất đầu vào vẫn có thể nằm trong giá thành của nguồn cung mới. Số tiền cụ thể chỉ đối chiếu được trên văn bản đã ban hành và hồ sơ của đúng thửa.",
      },
      {
        text: "Bài không áp hệ số của dự thảo cho bất kỳ lô đất hay dự án căn hộ nào tại Đà Nẵng. Quyết định 101/2026/QĐ-UBND ngày 30/6/2026 vẫn là văn bản đã ban hành về hệ số K năm 2026 cho đến khi có quyết định sửa được công bố.",
      },
      {
        heading: "Muốn đối chiếu văn bản, có thể hỏi thêm",
        text: "Anh chị muốn đọc khung hệ số K đã ban hành ngày 30/6/2026, hoặc muốn tách nghĩa vụ tài chính về đất khỏi giá một căn hộ đang xem, có thể xem bài nền rồi để lại lời nhắn. Hotline và Zalo: 0934 885 108. Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
        links: [
          {
            to: "/tin-tuc/he-so-k-gia-dat-da-nang-2026-dat-nen",
            label: "Đọc lại hệ số K theo Quyết định 101",
          },
          { to: "/lien-he", label: "Liên hệ — đối chiếu hồ sơ căn hộ" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Dự thảo sửa hệ số K giá đất Đà Nẵng năm 2026 đã ban hành chưa?",
        text: "Chưa. Theo Tuổi Trẻ (19.10.2026), ngày 19/10/2026 Sở Nông nghiệp và Môi trường TP Đà Nẵng đang lấy ý kiến dự thảo sửa đổi, bổ sung Quyết định số 101 của UBND TP về hệ số điều chỉnh giá đất năm 2026. Các mức K trong bài là đề xuất của dự thảo, chưa phải mức đang áp dụng.",
      },
      {
        heading: "Hệ số K có phải giá bán đất hoặc giá căn hộ trên thị trường?",
        text: "Không. Hệ số K là hệ số điều chỉnh giá đất, dùng cùng bảng giá đất để tính nghĩa vụ tài chính về đất đai, ví dụ tiền sử dụng đất và tiền thuê đất. Theo Tuổi Trẻ (19.10.2026), dự thảo Đà Nẵng đang lấy ý kiến về hệ số này cho năm 2026. Người mua căn hộ trong một dự án thường không nộp trực tiếp các khoản đó; chi phí đất đầu vào vẫn có thể ảnh hưởng nguồn cung mới. Mức cụ thể chỉ đúng khi đối chiếu văn bản đã ban hành.",
      },
      {
        heading: "Dự thảo đề xuất tăng và giảm hệ số K ở những vị trí nào?",
        text: "Theo Tuổi Trẻ (19.10.2026), dự thảo đề xuất K3.1 bằng 1,1 với thửa đối diện mặt tiền chính hoặc trong 200m theo đường giao thông mà xe máy đi được, tính từ trường đại học, cao đẳng, chợ (trừ chợ tự phát), trung tâm hành chính, chung cư, trung tâm thương mại, điểm du lịch cộng đồng được công nhận và công viên công cộng cấp đô thị. Công viên công cộng trong đơn vị ở được đề xuất K3.1 bằng 1,05. K3.2 bằng 0,9 với thửa tiếp giáp, đối diện hoặc trong 100m theo đường giao thông từ miếu, đền, chùa, đình, nhà thờ, công trình có yếu tố tâm linh, và với thửa trong 200m đường chim bay từ nghĩa trang, nghĩa địa. K3.3 bằng 0,9 với đất ở vị trí 1, gồm liền kề và biệt thự, khi mặt đường hoặc vỉa hè đâm thẳng vào mặt tiền.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ Tuổi Trẻ ngày 19.10.2026, tác giả Trường Trung. Đây là dự thảo đang lấy ý kiến, không phải văn bản hay thông báo chính thức, không thay tư vấn pháp lý, và không cam kết lợi nhuận hay giá. Nguồn: Tuổi Trẻ Online, 19/10/2026 — https://tuoitre.vn/da-nang-lay-y-kien-dieu-chinh-he-so-k-de-xuat-giam-gia-dat-gan-den-mieu-chua-100261019121401068.htm. Ảnh: Trường Trung/Tuổi Trẻ.",
      },
    ],
  },

  {
    slug: "nhip-song-thu-thai-the-camellia-son-tra",
    date: "19.10.2026",
    title: "The Camellia Sơn Trà: nhịp sống thư thái từ 1,82 tỷ/căn",
    excerpt:
      "The Camellia Sơn Trà tại phường Sơn Trà: tổ ấm rừng kề biển, giá từ 1,82 tỷ/căn (*), hỗ trợ lãi suất, chiết khấu thanh toán sớm và thanh toán Thảnh thơi.",
    description:
      "The Camellia Sơn Trà: dịu mát ban mai, tổ ấm truyền thừa, giá từ 1,82 tỷ/căn (*). Ưu đãi theo điều kiện của chủ đầu tư và ngân hàng khi giao dịch.",
    image: "/images/news-nhip-song-thu-thai-og.jpg",
    imageAlt:
      "Khung hình video The Camellia Sơn Trà: phòng khách nhìn ra ban công, mặt nước và rừng Sơn Trà, dòng giá từ 1,82 tỷ/căn",
    imageCaption: "Ảnh: trích từ video The Camellia Sơn Trà của Nhat Elite Realty",
    poster: "/images/news-nhip-song-thu-thai-hero.webp",
    gallery: ["/images/news-nhip-song-thu-thai-hero.webp"],
    galleryFit: "contain",
    youtubeId: "4f6ssT0oz0A",
    youtubeTitle: "Video nhịp sống thư thái tại The Camellia Sơn Trà",
    youtubeCaption:
      "Video ngắn của Nhật (Nhat Elite Realty) về nhịp sống The Camellia Sơn Trà.",
    youtubeAspect: "short",
    body: [
      {
        text: "The Camellia Sơn Trà gửi một nhịp sống thư thái giữa thiên nhiên phường Sơn Trà: sự dịu mát của rừng kề biển khi mở cửa ban mai, nhịp sống thong thả ngoài hiên nhà, và cảm giác an tâm khi chạm một góc nhỏ bình yên. The Camellia Sơn Trà là nơi gia đình gầy dựng tổ ấm hôm nay, để dành làm quà truyền thừa trọn vẹn cho con cháu mai sau. Tổng giá từ 1,82 tỷ/căn (*). MBLAND phát triển dự án, WELAND phát triển kinh doanh. Video ngắn của Nhật (Nhat Elite Realty) ở đầu bài khắc họa những giá trị sống này.",
      },
      {
        heading: "Dịu mát ban mai và hiên nhà thong thả",
        text: "The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng, tựa lưng bán đảo Sơn Trà, khoảng 200m tới biển Mân Thái. Buổi sớm ở đây mang sự dịu mát của rừng kề biển khi mở cửa. Ngoài hiên nhà, nhịp sống thong thả. Cảm giác an tâm đến từ một góc nhỏ bình yên, nơi thiên nhiên Sơn Trà ở cạnh cuộc sống hằng ngày của gia đình.",
      },
      {
        heading: "Tổ ấm hôm nay, quà truyền thừa cho con cháu",
        text: "Căn hộ The Camellia Sơn Trà là chỗ gia đình gầy dựng tổ ấm hôm nay và giữ lại trọn vẹn cho con cháu mai sau. Pháp lý công bố là sổ hồng sở hữu lâu dài. Dự án gồm 469 căn, 25 tầng nổi và 2 hầm, bàn giao dự kiến khoảng 2028. Giá trị được kể trong bài là nhịp sống và quyền sở hữu lâu dài, đối chiếu hồ sơ tại thời điểm ký.",
      },
      {
        heading: "Giá từ 1,82 tỷ/căn và các ưu đãi tài chính",
        text: "Tổng giá The Camellia Sơn Trà từ 1,82 tỷ/căn (*). Các ưu đãi đi cùng gồm: hỗ trợ lãi suất cho khoản vay đến 70%, thời gian hỗ trợ lên đến 18 tháng (*); chiết khấu tới 13% khi chọn phương án thanh toán sớm 95% (*); thanh toán «Thảnh thơi» — thanh toán 50% đến khi nhận nhà (*); miễn phí quản lý 12 tháng (*). Dấu (*) có nghĩa: ưu đãi áp dụng theo điều kiện, thời hạn của chủ đầu tư/ngân hàng tại thời điểm giao dịch.",
        links: [
          {
            to: "/tin-tuc/chinh-sach-ban-hang-the-camellia-tu-07-10-2026",
            label: "Chính sách bán hàng The Camellia từ 07/10/2026",
          },
          { to: "/can-ho", label: "Xem loại căn" },
        ],
      },
      {
        heading: "Member Get Member hoặc mua chung: chọn một",
        text: "Từ ngày 07/10/2026, The Camellia Sơn Trà cho khách chọn một trong hai đặc quyền, không áp dụng cả hai cùng lúc. Member Get Member (*) áp dụng cho khách hiện hữu đã hoặc đang sở hữu sản phẩm và cho khách mới phát sinh giao dịch: người giới thiệu được tặng 1 chỉ vàng cho mỗi căn giao dịch thành công khi giới thiệu khách mới hoặc khi trực tiếp mua thêm căn hộ; người được giới thiệu, hoặc khách hiện hữu mua thêm, được tặng 1 chỉ vàng mỗi căn và chiết khấu thêm 1% trên tổng giá bán chưa VAT và kinh phí bảo trì. Chiết khấu mua chung (*) áp dụng khi khách và/hoặc người thân đã từng mua hoặc đang sở hữu sản phẩm tại dự án rồi mua mới; không áp dụng cho căn Studio; mua mới 2 sản phẩm được chiết khấu 2% mỗi căn; mua mới từ 3 sản phẩm được chiết khấu lên tới 3% mỗi căn, tính trên giá chưa VAT và kinh phí bảo trì. Người thân gồm vợ/chồng, cha/mẹ, con cái, ông/bà, anh/chị/em ruột, cô/dì/chú/bác.",
      },
      {
        heading: "Hẹn Nhật tại Camellia Gallery",
        text: "Anh chị muốn xem nhịp sống The Camellia Sơn Trà ngoài video, xem sa bàn và nhận bảng giá từng căn, hãy liên hệ Nhật – Nhat Elite Realty qua hotline/Zalo 0934 885 108. Camellia Gallery ở Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng.",
        links: [
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá" },
          { to: "/gioi-thieu", label: "Xem fact sheet dự án" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Giá The Camellia Sơn Trà đang giới thiệu từ mức nào?",
        text: "Tổng giá The Camellia Sơn Trà từ 1,82 tỷ/căn (*). Ưu đãi áp dụng theo điều kiện, thời hạn của chủ đầu tư/ngân hàng tại thời điểm giao dịch. Bảng giá từng căn được đối chiếu khi ký.",
      },
      {
        heading: "Hỗ trợ lãi suất và thanh toán Thảnh thơi gồm những gì?",
        text: "Hỗ trợ lãi suất The Camellia Sơn Trà áp dụng cho khoản vay đến 70%, thời gian hỗ trợ lên đến 18 tháng (*). Phương án «Thảnh thơi» là thanh toán 50% đến khi nhận nhà (*). Chiết khấu tới 13% khi chọn phương án thanh toán sớm 95% (*). Phí quản lý được miễn 12 tháng (*). Ưu đãi áp dụng theo điều kiện, thời hạn của chủ đầu tư/ngân hàng tại thời điểm giao dịch.",
      },
      {
        heading: "Member Get Member và mua chung chọn thế nào?",
        text: "Từ ngày 07/10/2026, khách của The Camellia Sơn Trà chọn một trong hai đặc quyền. Member Get Member (*): người giới thiệu được tặng 1 chỉ vàng mỗi căn khi giới thiệu khách mới và giao dịch thành công, hoặc khi trực tiếp mua thêm căn hộ; khách mua mới hoặc khách hiện hữu mua thêm được tặng 1 chỉ vàng mỗi căn và chiết khấu thêm 1% trên tổng giá bán chưa VAT và kinh phí bảo trì. Mua chung (*): không áp dụng cho căn Studio; mua mới 2 sản phẩm chiết khấu 2% mỗi căn; mua mới từ 3 sản phẩm chiết khấu lên tới 3% mỗi căn. Ưu đãi áp dụng theo điều kiện, thời hạn của chủ đầu tư/ngân hàng tại thời điểm giao dịch.",
      },
      {
        heading: "Lưu ý",
        text: "(*) Ưu đãi áp dụng theo điều kiện, thời hạn của chủ đầu tư/ngân hàng tại thời điểm giao dịch. Giá từ 1,82 tỷ/căn, hỗ trợ lãi suất, chiết khấu, quà tặng bằng chỉ vàng và miễn phí quản lý 12 tháng đúng theo bảng giá cùng phụ lục khi ký. Ảnh đầu bài trích từ video The Camellia Sơn Trà của Nhat Elite Realty. Bài viết không cam kết lợi nhuận.",
      },
    ],
  },

  {
    slug: "ton-kho-bat-dong-san-quy-iii-2026-nguoi-mua-luu-y",
    date: "19.10.2026",
    title: "Gần 53.000 bất động sản tồn kho quý III/2026: người mua lưu ý gì?",
    excerpt:
      "Theo VnExpress (18.10.2026), tồn kho chủ đầu tư quý III khoảng 51.950 căn/nền, tăng hơn 94% cùng kỳ; giao dịch thành công giảm 8% so với quý II.",
    description:
      "Theo VnExpress (18.10.2026), dẫn Bộ Xây dựng: tồn kho quý III khoảng 51.950 căn/nền tại 27/34 địa phương. Người mua căn hộ nên tính khả năng trả nợ.",
    image: "/images/news-ton-kho-q3-2026-og.jpg",
    imageAlt:
      "Dự án nhà ở cao cấp dừng thi công dở dang từ năm 2021, chụp từ trên cao",
    imageCaption:
      "Dự án nhà ở cao cấp dừng thi công dở dang từ năm 2021. Ảnh: VnExpress",
    poster: "/images/news-ton-kho-q3-2026.webp",
    gallery: ["/images/news-ton-kho-q3-2026.webp"],
    body: [
      {
        text: "Theo VnExpress (18.10.2026), dẫn báo cáo thị trường bất động sản quý III/2026 của Bộ Xây dựng, tồn kho của chủ đầu tư tại các dự án tăng ở 27/34 địa phương. Mức được nêu là khoảng 51.950 căn và nền, cao hơn 94% so với 26.717 sản phẩm cùng kỳ năm trước, cộng thêm khoảng 1.046 căn tại dự án du lịch nghỉ dưỡng và văn phòng kết hợp lưu trú. Bài báo tóm tắt tổng này ở mức gần 53.000 sản phẩm. Cùng quý, giao dịch thành công vẫn hơn 92.000 nhưng chỉ bằng 92% quý II, tức giảm 8%. Phần dưới ghi lại số liệu theo từng nguồn và vài việc người mua căn hộ nên tự kiểm tra. Bài mang tính tham khảo, không phải thông báo của cơ quan nhà nước hay của chủ đầu tư.",
      },
      {
        heading: "Tồn kho quý III/2026 theo báo cáo Bộ Xây dựng",
        text: "Theo VnExpress (18.10.2026), dẫn báo cáo quý III của Bộ Xây dựng, khoảng 51.950 căn và nền tồn kho của chủ đầu tư gồm 15.319 căn hộ chung cư (tăng 19,5% so với quý II/2026), 17.089 nhà ở riêng lẻ (tăng 11,6%) và 19.542 nền đất (tăng 75%). Đất nền là nhóm tăng nhanh nhất trong ba nhóm này. Ngoài ra, tồn kho tại dự án du lịch nghỉ dưỡng và văn phòng kết hợp lưu trú khoảng 1.046 căn. Hai nhóm được bài báo gói lại thành mức gần 53.000 sản phẩm, và tồn kho tăng ở 27 trên 34 địa phương.",
      },
      {
        heading: "Giao dịch thành công quý III giảm so với quý II",
        text: "Theo VnExpress (18.10.2026), dẫn Bộ Xây dựng, quý III/2026 cả nước có hơn 92.000 giao dịch thành công, bằng 92% quý II, tức giảm 8%. Trong số đó, căn hộ chung cư và nhà ở riêng lẻ đạt 22.847 căn (giảm 14%), đất nền đạt 69.157 nền (giảm 6%). Báo xem sức mua giảm là lý do trực tiếp khiến hàng tồn của chủ đầu tư đi lên trong quý.",
      },
      {
        heading: "Sức cầu tại TP HCM, vùng phụ cận và nghỉ dưỡng",
        text: "VnExpress (18.10.2026) dẫn báo cáo quý III/2026 của DKRA Consulting cho TP HCM và vùng phụ cận (Đồng Nai, Tây Ninh): sức cầu giảm ở hầu hết phân khúc, nguồn cung sơ cấp chủ yếu là hàng của các dự án đã mở bán trước đó. Căn hộ có nguồn cung sơ cấp 13.215 căn, tiêu thụ 3.471 căn (giảm 66%), tỷ lệ tiêu thụ 26%. Đất nền có nguồn cung sơ cấp 8.324 nền (95% từ dự án đã mở bán trước), tiêu thụ 119 nền (giảm 66% so với quý trước), tỷ lệ tiêu thụ 1%. Nhà phố và biệt thự có nguồn cung sơ cấp 11.439 căn (92% từ dự án cũ), tiêu thụ 746 căn (giảm 27%), tỷ lệ tiêu thụ 7%.",
      },
      {
        text: "Với bất động sản nghỉ dưỡng trên cả nước, cùng báo cáo DKRA do VnExpress dẫn ngày 18.10.2026 thống kê 6.300 căn condotel, trong đó 79% là tồn kho. Báo cáo còn ghi 2.428 căn biệt thự nghỉ dưỡng (tiêu thụ 38 căn, giảm 86%) và 3.604 căn nhà phố, shophouse nghỉ dưỡng (không ghi nhận giao dịch trong quý).",
      },
      {
        text: "Savills TP HCM, cũng được VnExpress dẫn ngày 18.10.2026, ghi tỷ lệ hấp thụ 25%, tương đương khoảng 1.400 giao dịch. Ở biệt thự và nhà phố tại TP HCM, cùng báo cáo ghi tỷ lệ hấp thụ 14% trên 3.600 căn mở bán mới. Bà Cao Thị Thanh Hương (Savills) cho rằng lãi suất vay mua nhà ở mức cao tiếp tục tạo áp lực lên dòng tiền của chủ đầu tư và khả năng chi trả của người mua; nguồn cung vẫn được duy trì nhưng nhu cầu đang yếu.",
      },
      {
        heading: "Nhận định của chuyên gia và khuyến nghị của HoREA",
        text: "Theo VnExpress (18.10.2026), TS Huỳnh Phước Nghĩa (Đại học Kinh tế TP HCM) cho rằng tồn kho hiện chủ yếu mang tính đầu tư và tập trung ở phân khúc cao cấp. Một phần mức tăng trên sổ sách đến từ các dự án ách tắc nhiều năm vừa được tháo gỡ pháp lý, nên đủ điều kiện ghi nhận thành sản phẩm. Ông cũng nêu tình trạng khách trả hợp đồng vì không được hỗ trợ tín dụng, khiến hàng quay về phía chủ đầu tư. Ở hướng xử lý, ông cho rằng cả chủ đầu tư và người mua đi bán lại cần bỏ tư duy đầu cơ ngắn hạn, chuyển sang khai thác và cho thuê để tạo dòng tiền. Đó là nhận định được báo dẫn, không phải lời khuyên đầu tư của website.",
      },
      {
        text: "HoREA, theo VnExpress (18.10.2026), khuyến nghị doanh nghiệp chủ động giảm lợi nhuận, giảm giá bán và đưa chính sách thanh toán linh hoạt để kích cầu. Tính đến ngày 27.09.2026, HoREA cho biết cả nước đã xử lý 4.372 trên 4.846 dự án tồn đọng (90,2%); trong đó 842 dự án đã đưa vào hoạt động và 1.835 dự án hoàn thành thủ tục pháp lý.",
      },
      {
        heading: "Ý nghĩa với người mua căn hộ ở Sơn Trà và Đà Nẵng",
        text: "Số liệu cả nước không thay cho hồ sơ của một dự án cụ thể. Theo VnExpress (17.10.2026), dẫn Avison Young, thị trường căn hộ Đà Nẵng quý III/2026 tăng trưởng tích cực và tập trung ở phân khúc cao cấp, hạng sang; giá bán sơ cấp trung bình 3.650 USD/m², gần như không đổi so với quý trước. Người mua căn hộ tại Sơn Trà có thể đọc hai lớp cùng lúc: tồn kho toàn quốc đang cao, trong khi mặt bằng giá sơ cấp căn hộ Đà Nẵng quý này gần như đi ngang.",
      },
      {
        text: "Việc đáng làm là ưu tiên dự án có pháp lý rõ — chủ trương đầu tư, điều kiện được bán và tiến độ đối chiếu được trên văn bản — rồi tự tính khả năng trả nợ khi lãi suất vay mua nhà còn cao. Một lịch thanh toán chỉ khớp khi phần gốc và lãi sau thời gian ưu đãi vẫn nằm trong thu nhập của hộ, theo mức ngân hàng xác nhận tại thời điểm vay.",
        links: [
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà trên 10%: tính dòng tiền thế nào?",
          },
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-mua-nha-luu-y",
            label: "NHNN yêu cầu giảm lãi suất: người mua nhà lưu ý gì?",
          },
        ],
      },
      {
        text: "The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Ai đang xem một căn tại đây nên đối chiếu pháp lý và bảng giá của đúng đợt tại thời điểm ký.",
      },
      {
        heading: "Trao đổi pháp lý và khả năng trả nợ",
        text: "Nếu anh chị muốn rà một căn hộ tại Sơn Trà theo pháp lý, tiến độ và khả năng trả nợ, có thể liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
        links: [{ to: "/lien-he", label: "Liên hệ — trao đổi pháp lý và dòng tiền vay" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Quý III/2026 cả nước tồn kho khoảng bao nhiêu bất động sản?",
        text: "Theo VnExpress (18.10.2026), dẫn báo cáo quý III của Bộ Xây dựng, tồn kho của chủ đầu tư khoảng 51.950 căn và nền, tăng ở 27/34 địa phương, cao hơn 94% so với 26.717 sản phẩm cùng kỳ năm trước. Ngoài ra còn khoảng 1.046 căn tại dự án nghỉ dưỡng và văn phòng kết hợp lưu trú. Bài báo tóm tắt mức gần 53.000 sản phẩm.",
      },
      {
        heading: "Giao dịch thành công quý III/2026 giảm bao nhiêu so với quý II?",
        text: "Theo VnExpress (18.10.2026), dẫn Bộ Xây dựng, quý III có hơn 92.000 giao dịch thành công, bằng 92% quý II, tức giảm 8%. Căn hộ chung cư và nhà ở riêng lẻ đạt 22.847 căn (giảm 14%); đất nền đạt 69.157 nền (giảm 6%).",
      },
      {
        heading: "Người mua căn hộ tại Đà Nẵng nên lưu ý gì khi tồn kho cả nước tăng?",
        text: "Nên kiểm tra pháp lý của đúng dự án đang xem và tự tính khả năng trả nợ với lãi vay tại thời điểm vay. Theo VnExpress (17.10.2026), dẫn Avison Young, giá sơ cấp căn hộ Đà Nẵng quý III/2026 trung bình 3.650 USD/m², gần như không đổi so với quý trước.",
      },
      {
        heading: "Lưu ý",
        text: "Thông tin trong bài mang tính tham khảo, không phải khuyến nghị đầu tư, không phải văn bản của Bộ Xây dựng và không phải thông cáo của chủ đầu tư. Số liệu gắn với thời điểm báo chí dẫn: VnExpress ngày 18.10.2026, bài «Cả nước có gần 53.000 bất động sản tồn kho» của Quang Huy (https://vnexpress.net/ca-nuoc-co-gan-53-000-bat-dong-san-ton-kho-5133875.html), và VnExpress ngày 17.10.2026 về thị trường căn hộ Đà Nẵng (https://vnexpress.net/da-nang-co-them-du-an-can-ho-khach-san-nghin-ty-ven-song-han-5133518.html). Chính sách vay, giá bán và điều kiện pháp lý của từng dự án chỉ đúng theo văn bản tại thời điểm giao dịch. Ảnh đầu bài: VnExpress.",
      },
    ],
  },

  {
    slug: "da-nang-chap-thuan-du-an-the-han-1200-ty",
    date: "18.10.2026",
    title: "Đà Nẵng chấp thuận dự án The Han gần 1.200 tỷ đồng ven sông Hàn",
    excerpt:
      "UBND TP Đà Nẵng chấp thuận chủ trương đầu tư The Han Hotel & Residences 33 tầng tại phường Hòa Cường, vốn gần 1.200 tỷ đồng, triển khai 2027–2029.",
    description:
      "UBND TP Đà Nẵng chấp thuận chủ trương đầu tư The Han Hotel & Residences 33 tầng tại phường Hòa Cường, vốn gần 1.200 tỷ đồng, triển khai 2027–2029.",
    image: "/images/news-the-han-og.jpg",
    imageAlt:
      "Phối cảnh dự án The Han Hotel & Residences tại phường Hòa Cường, Đà Nẵng",
    imageCaption:
      "Phối cảnh dự án The Han Hotel & Residences tại phường Hòa Cường, Đà Nẵng. Ảnh: Kinh tế Xây dựng (Petrotimes)",
    poster: "/images/news-the-han-hero.webp",
    gallery: ["/images/news-the-han-hero.webp"],
    body: [
      {
        text: "Theo Kinh tế Xây dựng (Petrotimes) ngày 18/10/2026, UBND TP Đà Nẵng đã chấp thuận chủ trương đầu tư Tổ hợp căn hộ và khách sạn Sông Hàn (The Han Hotel & Residences) tại phường Hòa Cường, tổng vốn gần 1.200 tỷ đồng, dự kiến triển khai từ quý I/2027 đến quý IV/2029. Đây là thêm một dự án căn hộ – khách sạn cao tầng được bổ sung vào nguồn cung trung hạn của Đà Nẵng.",
      },
      {
        heading: "Dự án The Han Hotel & Residences có quy mô ra sao?",
        text: "Theo Petrotimes (18/10/2026), dự án The Han Hotel & Residences nằm trên hai lô đất thuộc khu dân cư, khách sạn, căn hộ và thương mại dịch vụ 2/9, phường Hòa Cường, gần sông Hàn. Khu đất rộng hơn 2.800 m², mật độ xây dựng 45%, cao 33 tầng, tổng diện tích sàn phần nổi hơn 33.700 m².",
      },
      {
        text: "Cũng theo nguồn tin này, sản phẩm của The Han Hotel & Residences gồm căn hộ chung cư, căn hộ dịch vụ và diện tích thương mại để mua bán, cho thuê, thuê mua. Quy mô dân số thường trú dự kiến của dự án hơn 450 người.",
      },
      {
        heading: "Ai là nhà đầu tư và tiến độ thế nào?",
        text: "Theo Petrotimes (18/10/2026), nhà đầu tư dự án The Han Hotel & Residences là Công ty TNHH Quản lý và Đầu tư Khách sạn Quốc tế, thành lập năm 2017 tại Đà Nẵng, hoạt động trong lĩnh vực lưu trú ngắn ngày, đại lý du lịch và hoàn thiện công trình xây dựng.",
      },
      {
        text: "Tiến độ được công bố cho The Han Hotel & Residences là từ quý I/2027 đến quý IV/2029. Chấp thuận chủ trương đầu tư mới là bước pháp lý ban đầu; dự án còn phải hoàn tất các thủ tục tiếp theo trước khi đủ điều kiện kinh doanh theo quy định.",
      },
      {
        heading: "Tin này có ý nghĩa gì với người mua nhà ở Đà Nẵng?",
        text: "Việc Đà Nẵng chấp thuận chủ trương đầu tư The Han Hotel & Residences cho thấy nguồn cung căn hộ cao tầng tại khu trung tâm tiếp tục được bổ sung, dù sản phẩm thực tế chỉ có thể xuất hiện sau năm 2027. Người mua có thêm dữ liệu để so sánh vị trí, tiến độ và pháp lý giữa các khu vực trong thành phố.",
      },
      {
        text: "Cùng ngày, theo CafeF (18/10/2026), Đà Nẵng tiếp tục đưa khu đất sân vận động Chi Lăng ra đấu giá lần thứ 7 với giá khởi điểm 8.550 tỷ đồng, dự kiến ngày 29/10/2026. Hai thông tin này đều liên quan đến kế hoạch phát triển khu trung tâm, nhưng mỗi dự án có tiến độ và điều kiện riêng.",
      },
      {
        heading: "Người mua nên kiểm tra gì trước khi xuống tiền?",
        text: "Với bất kỳ dự án căn hộ nào tại Đà Nẵng, người mua nên kiểm tra quyết định chủ trương đầu tư, giấy phép xây dựng, văn bản đủ điều kiện bán nhà ở hình thành trong tương lai và bảo lãnh ngân hàng. Bài học từ việc Quảng Trị phạt một doanh nghiệp 950 triệu đồng vì chuyển nhượng đất chưa đủ điều kiện (Petrotimes, 18/10/2026) cho thấy khâu kiểm tra pháp lý rất cần thiết.",
      },
      {
        text: "Người mua dùng vốn vay cũng nên đối chiếu lịch thanh toán với chính sách ngân hàng cụ thể. Ví dụ, tại dự án ở phường Sơn Trà, cách bãi biển Mân Thái khoảng 200m do MBLAND phát triển dự án, khách hàng có thể tham khảo gói hỗ trợ lãi suất 70% tối đa 18 tháng (VietinBank, MB, SHB) và ân hạn nợ gốc tối đa 3 năm (theo chính sách từng ngân hàng).",
      },
      {
        heading: "Liên hệ Nhật – Nhat Elite Realty để được tư vấn",
        text: "Nếu bạn muốn tìm hiểu pháp lý, tiến độ hoặc phương án tài chính khi mua căn hộ tại Đà Nẵng, hãy liên hệ Nhật – Nhat Elite Realty qua hotline 0934 885 108. Bạn cũng có thể đến gallery tại Tầng 9 Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng để được trao đổi trực tiếp.",
        links: [{ to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "The Han Hotel & Residences nằm ở đâu?",
        text: "Theo Petrotimes (18/10/2026), dự án The Han Hotel & Residences nằm tại khu dân cư, khách sạn, căn hộ và thương mại dịch vụ 2/9, phường Hòa Cường, TP Đà Nẵng, gần sông Hàn.",
      },
      {
        heading: "Dự án The Han Hotel & Residences có vốn đầu tư và quy mô bao nhiêu?",
        text: "Theo Petrotimes (18/10/2026), dự án có tổng vốn gần 1.200 tỷ đồng, cao 33 tầng trên khu đất hơn 2.800 m², tổng diện tích sàn phần nổi hơn 33.700 m².",
      },
      {
        heading: "Khi nào dự án The Han Hotel & Residences được triển khai?",
        text: "Theo kế hoạch được Petrotimes nêu ngày 18/10/2026, dự án The Han Hotel & Residences triển khai từ quý I/2027 đến quý IV/2029, sau khi hoàn tất các thủ tục pháp lý theo quy định.",
      },
      {
        heading: "Lưu ý",
        text: "Bài viết tổng hợp thông tin từ Kinh tế Xây dựng – Petrotimes và CafeF ngày 18/10/2026, không phải văn bản chính thức của cơ quan nhà nước và không phải cam kết về giá, tiến độ hay lợi nhuận. Nguồn: Kinh tế Xây dựng – Petrotimes, 18/10/2026 — https://kinhtexaydung.petrotimes.vn/diem-tin-xay-dung-bat-dong-san-ngay-18-10-da-nang-chap-thuan-du-an-the-han-hotel-residences-gan-1-200-ty-dong-746821.html",
      },
    ],
  },

  {
    slug: "nhnn-yeu-cau-giam-lai-suat-nguoi-mua-nha-luu-y",
    date: "18.10.2026",
    title: "NHNN yêu cầu giảm lãi suất: người mua nhà vay vốn cần lưu ý gì?",
    excerpt:
      "NHNN yêu cầu ngân hàng giảm lãi huy động tối thiểu 0,5%/năm từ kỳ hạn 6 tháng và giảm lãi vay. Người mua nhà cần lưu ý gì khi vay vốn?",
    description:
      "Văn bản 9608/NHNN-CSTT ngày 18/10/2026 yêu cầu giảm lãi suất huy động và cho vay, siết định giá tài sản bảo đảm. Lưu ý cho người mua căn hộ.",
    image: "/images/news-nhnn-1810-og.jpg",
    imageAlt:
      "Đồ họa chữ The Camellia Sơn Trà, nền nâu đậm và dải kem, chữ terracotta: NHNN yêu cầu giảm lãi suất; -0,5%/năm lãi huy động kỳ hạn từ 6 tháng; nguồn CafeF 18/10/2026",
    poster: "/images/news-nhnn-1810-hero.webp",
    gallery: ["/images/news-nhnn-1810-hero.webp"],
    galleryFit: "contain",
    body: [
      {
        text: "Theo CafeF đưa tin ngày 18/10/2026, Ngân hàng Nhà nước (NHNN) vừa ban hành văn bản số 9608/NHNN-CSTT, yêu cầu các tổ chức tín dụng giảm lãi suất tiền gửi niêm yết tối thiểu 0,5%/năm với các kỳ hạn từ 6 tháng trở lên, không đua tăng lãi suất huy động, đồng thời giảm lãi suất cho vay. Bài này tóm tắt các điểm chính và điều người đang tính mua căn hộ bằng vốn vay nên lưu ý.",
      },
      {
        heading: "Nội dung chính của văn bản 9608/NHNN-CSTT",
        text: "Giảm lãi suất tiền gửi niêm yết tối thiểu 0,5%/năm với kỳ hạn từ 6 tháng trở lên; tuyệt đối không đua tăng lãi suất huy động.",
      },
      {
        text: "Giảm lãi suất cho vay, tập trung giảm 1,5–2%/năm cho lĩnh vực sản xuất, kinh doanh và lĩnh vực ưu tiên.",
      },
      {
        text: "Không hạ chuẩn điều kiện cấp tín dụng để tăng quy mô cho vay.",
      },
      {
        text: "Kiểm soát chặt việc định giá lại làm tăng giá trị tài sản bảo đảm; định giá sát giá thị trường.",
      },
      {
        text: "Ngân hàng không tuân thủ có thể bị xem xét lại chỉ tiêu tín dụng còn lại của năm 2026 và bị giao chỉ tiêu thấp cho năm 2027.",
      },
      {
        text: "(Nguồn: CafeF, 18/10/2026.)",
      },
      {
        heading: "Ý nghĩa với người mua nhà",
        text: "Mức giảm 1,5–2%/năm mà văn bản nêu rõ là cho lĩnh vực sản xuất, kinh doanh và ưu tiên. Lãi vay mua nhà có giảm hay không, giảm bao nhiêu, phụ thuộc chính sách của từng ngân hàng trong thời gian tới. Mặt khác, việc ngân hàng siết thẩm định và định giá tài sản bảo đảm có thể khiến hồ sơ vay được xem xét kỹ hơn. Người mua nên chuẩn bị hồ sơ thu nhập rõ ràng và so sánh lãi suất sau thời gian ưu đãi giữa các ngân hàng.",
        links: [
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà vượt 10%: tính dòng tiền thế nào?",
          },
        ],
      },
      {
        heading: "Lựa chọn tại The Camellia Sơn Trà",
        text: "The Camellia Sơn Trà (giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng, cách biển Mân Thái khoảng 200m) đang có phương án hỗ trợ lãi suất 70% đến 18 tháng, liên kết với VietinBank, MB và SHB, ân hạn nợ gốc tối đa 3 năm theo ngân hàng. Người không muốn vay có thể chọn phương án thanh toán 50% đến khi nhận nhà. Chính sách áp dụng có điều kiện, theo bảng giá và chính sách đợt tại thời điểm ký.",
        links: [
          {
            to: "/tin-tuc/chinh-sach-ban-hang-the-camellia-tu-07-10-2026",
            label: "Chính sách bán hàng The Camellia từ 07/10/2026",
          },
        ],
      },
      {
        heading: "Nhận bảng tính khoản vay",
        text: "Nếu anh chị muốn có bảng dòng tiền vay cho một căn cụ thể, hãy liên hệ Nhật (Nhat Elite Realty) qua hotline/Zalo 0934 885 108, hoặc hẹn xem sa bàn tại Camellia Gallery, Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng.",
        links: [{ to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Văn bản yêu cầu giảm lãi suất tiền gửi bao nhiêu?",
        text: "Tối thiểu 0,5%/năm với các kỳ hạn từ 6 tháng trở lên, theo CafeF ngày 18/10/2026.",
      },
      {
        heading: "Lãi vay mua nhà có chắc chắn giảm 1,5–2%/năm không?",
        text: "Không. Mức 1,5–2%/năm văn bản nêu cho sản xuất, kinh doanh và lĩnh vực ưu tiên; lãi vay mua nhà tùy từng ngân hàng.",
      },
      {
        heading: "The Camellia đang hỗ trợ vay thế nào?",
        text: "Hỗ trợ lãi suất 70% đến 18 tháng, ân hạn nợ gốc tối đa 3 năm theo ngân hàng, áp dụng có điều kiện.",
      },
      {
        heading: "Lưu ý",
        text: "Bài viết tóm tắt theo tin CafeF ngày 18/10/2026 về văn bản 9608/NHNN-CSTT, không phải văn bản chính thức của cơ quan nhà nước. Bài không dự báo hay cam kết lãi suất, giá bán hoặc lợi nhuận. Chính sách bán hàng The Camellia áp dụng có điều kiện.",
      },
    ],
  },

  {
    slug: "ban-dao-son-tra-mo-lai-tham-quan-14-10-2026",
    date: "15.10.2026",
    title:
      "Bán đảo Sơn Trà mở lại tham quan từ 14/10/2026: quy định, giờ 7h30–17h30 và lưu ý mùa mưa",
    excerpt:
      "Từ 14/10/2026, Ban Quản lý bán đảo Sơn Trà đón du khách trở lại sau đợt tạm dừng từ 08/10 vì mưa lớn và nguy cơ sạt lở. Tóm tắt ngày mở lại, quy định tuyến, khuyến cáo bảo vệ hệ sinh thái và giờ 7h30–17h30 — tin địa phương, không phải thông cáo The Camellia.",
    description:
      "Bán đảo Sơn Trà mở lại tham quan từ 14/10/2026 sau tạm dừng mưa lớn. Quy định tuyến, không cho khỉ ăn, giờ 7h30–17h30 mùa thấp điểm.",
    image: "/images/news-molai-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): đường ven núi bán đảo Sơn Trà nắng đẹp sau mưa, nhìn ra vịnh Đà Nẵng, watermark 「Hình ảnh minh họa」",
    imageCaption: "Ảnh minh họa tạo bằng AI – không phải ảnh hiện trường",
    poster: "/images/news-molai-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-molai-hero.webp",
      "/images/news-molai-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Từ ngày 14/10/2026, Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng đón du khách trở lại tham quan sau đợt tạm dừng từ 08/10 do mưa lớn và nguy cơ sạt lở, lũ quét, cây đổ. Báo Đà Nẵng (đăng lại trên vietnam.vn), Đại Đoàn Kết và Báo Văn Hóa ngày 14/10 đều ghi nhận thời tiết ổn định hơn nên các tuyến tham quan được phép hoạt động trở lại. Bài này nối tiếp tin tạm dừng đăng ngày 10/10 trên website — mang tính tin địa phương tổng hợp, không phải thông báo chính thức của BQL và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Từ 14/10/2026: bán đảo Sơn Trà mở lại hoạt động tham quan sau đợt tạm dừng từ 08/10. • Lý do trước đó: mưa to đến rất to; nguy cơ sạt lở taluy, lũ quét, đá rơi, cây đổ. • Khi lên bán đảo: chỉ đi tuyến được phép; không vào khu vực hạn chế; không xả rác; không cho động vật hoang dã (khỉ) ăn; bảo vệ hệ sinh thái. • Báo Văn Hóa nhắc thêm: không tham gia tour trekking / sinh thái tự phát chưa được cấp phép vào rừng đặc dụng; đề án du lịch sinh thái Khu bảo tồn thiên nhiên Sơn Trà chưa được phê duyệt; không xem động vật đêm khi chưa có phép; báo cáo tour trái phép. • Giờ mùa thấp điểm (tháng 10 đến hết tháng 2): 7h30–17h30.",
      },
      {
        heading: "Đã mở lại từ khi nào?",
        text: "Theo Báo Đà Nẵng (vietnam.vn, 14/10/2026) và Đại Đoàn Kết (14/10/2026), từ ngày 14/10 Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng tổ chức đón du khách trở lại khi điều kiện thời tiết ổn định. Trước đó, từ 08/10, hoạt động tham quan bị tạm dừng vì mưa lớn và nguy cơ sạt lở — đã được tổng hợp trong bài tạm dừng trên website ngày 10/10. Anh chị nên tiếp tục theo dõi thông báo của BQL và biển báo tại chỗ trước mỗi chuyến đi, vì tình hình mùa mưa có thể thay đổi nhanh.",
        image: "/images/news-molai-body.webp",
        imageAlt:
          "Infographic minh họa: bán đảo Sơn Trà mở lại từ 14/10/2026, tạm dừng từ 08/10, quy định tuyến / không cho khỉ ăn / không trekking tự phát, giờ 7h30–17h30",
        links: [
          {
            to: "/tin-tuc/tam-dung-tham-quan-ban-dao-son-tra-mua-lon-10-2026",
            label: "Bán đảo Sơn Trà tạm dừng tham quan từ 08/10/2026",
          },
        ],
      },
      {
        heading: "Quy định & khuyến cáo khi lên bán đảo",
        text: "Các bản tin ngày 14/10 nhấn mạnh du khách chỉ di chuyển trên các tuyến được phép; không vào khu vực hạn chế; không xả rác; không cho động vật hoang dã ăn; chủ động bảo vệ hệ sinh thái. Báo Văn Hóa bổ sung: không tham gia tour trekking hay du lịch sinh thái tự phát chưa được cấp phép vào rừng đặc dụng; đề án du lịch sinh thái tại Khu bảo tồn thiên nhiên Sơn Trà chưa được phê duyệt; không tổ chức / tham gia xem động vật hoang dã ban đêm khi chưa có phép; phát hiện tour trái phép thì báo cơ quan chức năng. Những lưu ý này gắn với bài tổng hợp giờ – tuyến – mùa mưa tháng 10 đã đăng trước đó.",
        links: [
          {
            to: "/tin-tuc/luu-y-len-ban-dao-son-tra-thang-10-2026",
            label: "Lên bán đảo Sơn Trà tháng 10/2026: giờ, tuyến và lưu ý",
          },
        ],
      },
      {
        heading: "Giờ tham quan & liên kết hữu ích",
        text: "Khung giờ mùa thấp điểm (tháng 10 đến hết tháng 2) vẫn là 7h30–17h30 — đã nêu trong các bài trước trên website. Ngoài bán đảo, anh chị có thể đọc thêm định hướng đô thị số của phường Sơn Trà và tin đường ven biển Sơn Trà – Hội An để nắm nhịp hạ tầng quanh khu vực sống.",
        links: [
          {
            to: "/tin-tuc/tam-dung-tham-quan-ban-dao-son-tra-mua-lon-10-2026",
            label: "Tin tạm dừng tham quan 08–14/10/2026",
          },
          {
            to: "/tin-tuc/luu-y-len-ban-dao-son-tra-thang-10-2026",
            label: "Giờ tham quan & lưu ý tháng 10/2026",
          },
          {
            to: "/tin-tuc/son-tra-phuong-do-thi-so-2030-doi-moi-sang-tao",
            label: "Sơn Trà hướng tới phường đô thị số năm 2030",
          },
          {
            to: "/tin-tuc/mo-rong-duong-ven-bien-son-tra-hoi-an-2026",
            label: "Đà Nẵng mở rộng đường ven biển Sơn Trà – Hội An",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Việc mở lại tham quan sau đợt mưa lớn là tín hiệu thời tiết ổn định hơn cho cư dân và du khách sắp lịch lên bán đảo; bài viết không suy diễn tác động lên giá bất động sản. Nếu anh chị đang tìm căn hộ sở hữu lâu dài gần khu vực, The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; theo thông tin dự án, khoảng 200 m tới biển Mân Thái. Dự án 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài",
          },
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao The Camellia gần biển Mân Thái?",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: Báo Đà Nẵng qua vietnam.vn — «Bán đảo Sơn Trà đón du khách trở lại tham quan» (14/10/2026), https://www.vietnam.vn/ban-dao-son-tra-don-du-khach-tro-lai-tham-quan ; Đại Đoàn Kết — «Đà Nẵng: Bán đảo Sơn Trà đón du khách trở lại tham quan» (14/10/2026), https://daidoanket.vn/da-nang-ban-dao-son-tra-don-du-khach-tro-lai-tham-quan.html ; Báo Văn Hóa — «Bán đảo Sơn Trà đón khách trở lại từ ngày 14/10» (14/10/2026), https://baovanhoa.vn/du-lich/ban-dao-son-tra-don-khach-tro-lai-tu-ngay-1410-274397.html . Bối cảnh tạm dừng: các bài trước trên website (tạm dừng từ 08/10; lưu ý lên bán đảo tháng 10). Tình hình có thể thay đổi — luôn ưu tiên thông báo chính thức của BQL và biển báo tại chỗ. Ảnh đầu bài và infographic là hình ảnh minh họa (tạo bằng AI), không phải ảnh hiện trường. Bài là tin địa phương tổng hợp, không phải thông báo của BQL / UBND phường Sơn Trà, không phải thông cáo dự án và không cam kết tăng giá BĐS. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },


  {
    slug: "chinh-sach-ban-hang-the-camellia-tu-07-10-2026",
    date: "14.10.2026",
    title: "Chính sách bán hàng The Camellia từ 07/10/2026: từ 1,82 tỷ/căn",
    excerpt:
      "The Camellia Sơn Trà từ 1,82 tỷ/căn: tặng 3 chỉ vàng đến 17/10/2026, hỗ trợ lãi suất 70% đến 18 tháng, CK tới 13%, thanh toán 50% đến khi nhận nhà.",
    description:
      "Chính sách bán hàng The Camellia Sơn Trà từ 07/10/2026: giá từ 1,82 tỷ/căn, quà 3 chỉ vàng đến 17/10, chọn Member Get Member hoặc ưu đãi mua chung.",
    image: "/images/news-csbh-1410-og.jpg",
    imageAlt:
      "Poster chính sách bán hàng The Camellia Sơn Trà áp dụng từ 07/10/2026: tổng giá từ 1,82 tỷ/căn, quà 3 chỉ vàng đến 17/10, HTLS 70% đến 18 tháng, chiết khấu tới 13%, thanh toán 50% đến khi nhận nhà",
    poster: "/images/news-csbh-1410-poster.webp",
    gallery: ["/images/news-csbh-1410-poster.webp"],
    galleryFit: "contain",
    body: [
      {
        text: "Từ ngày 07/10/2026, The Camellia Sơn Trà áp dụng chính sách bán hàng cập nhật, với tổng giá từ 1,82 tỷ/căn. Dự án nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng, cách biển Mân Thái khoảng 200m. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Bài này tóm tắt các ưu đãi đang áp dụng theo poster chính thức của dự án, để anh chị dễ so sánh và chọn phương án phù hợp.",
      },
      {
        heading: "Quà tặng khai trương Camellia Gallery: 3 chỉ vàng, đến 17/10/2026",
        text: "Mỗi giao dịch thành công được tặng 3 chỉ vàng. Quà này mừng Camellia Gallery khai trương và chỉ áp dụng đến hết ngày 17/10/2026.",
        image: "/images/news-csbh-1410-poster.webp",
        imageAlt:
          "Poster chính sách bán hàng The Camellia Sơn Trà áp dụng từ 07/10/2026: tổng giá từ 1,82 tỷ/căn, quà 3 chỉ vàng đến 17/10, HTLS 70% đến 18 tháng, chiết khấu tới 13%, thanh toán 50% đến khi nhận nhà",
      },
      {
        heading: "Bốn phương án tài chính",
        text: "Hỗ trợ lãi suất (HTLS): hỗ trợ lãi suất cho khoản vay đến 70%, thời gian hỗ trợ đến 18 tháng. Thanh toán sớm: chiết khấu tới 13%. Thanh toán «Thảnh thơi»: chỉ cần thanh toán 50% đến khi nhận bàn giao nhà. Mua chung: chiết khấu lên tới 3%. Điều kiện chi tiết nằm ở Lựa chọn 2 bên dưới. Mỗi phương án có dòng tiền khác nhau. Anh chị có thể nhờ Nhật lập bảng thanh toán cho căn cụ thể để so sánh.",
      },
      {
        heading: "Đặc quyền tùy chọn từ 07/10/2026: chọn 1 trong 2",
        text: "Lựa chọn 1: Member Get Member. Áp dụng cho khách hàng hiện hữu đã hoặc đang sở hữu sản phẩm, và khách hàng mới phát sinh giao dịch. Người giới thiệu (khách hàng hiện hữu): tặng 01 chỉ vàng cho mỗi căn giao dịch thành công khi giới thiệu khách hàng mới hoặc trực tiếp mua thêm căn hộ. Người được giới thiệu (khách hàng mới), hoặc khách hàng hiện hữu mua thêm: tặng 01 chỉ vàng mỗi căn và chiết khấu thêm 1% trên tổng giá bán (chưa VAT và KPBT). Lựa chọn 2: Nhóm người thân mua chung. Áp dụng khi khách hàng và/hoặc người thân của khách hàng đã từng mua hoặc đang sở hữu sản phẩm tại dự án mua mới. Không áp dụng cho căn Studio. Mua mới 02 sản phẩm: chiết khấu 2% mỗi căn. Mua mới từ 03 sản phẩm: chiết khấu lên tới 3% mỗi căn (giá chưa VAT và KPBT). Người thân gồm: vợ/chồng, cha/mẹ, con cái, ông/bà, anh/chị/em ruột, cô/dì/chú/bác. Bài này là chính sách cập nhật từ 07/10/2026. Điều kiện áp dụng cụ thể theo bảng giá và chính sách đợt tại thời điểm ký.",
      },
      {
        heading: "Hẹn xem sa bàn và nhận bảng giá",
        text: "Nếu anh chị muốn xem sa bàn, mặt bằng và nhận bảng giá từng căn, hãy hẹn Nhật (Nhat Elite Realty) qua hotline/Zalo 0934 885 108. Nhật sẽ đón anh chị tại Camellia Gallery, Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng.",
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Quà 3 chỉ vàng áp dụng đến khi nào?",
        text: "Đến hết ngày 17/10/2026. Mỗi giao dịch thành công được tặng 3 chỉ vàng.",
      },
      {
        heading: "Có được hưởng cả Member Get Member và ưu đãi mua chung không?",
        text: "Không. Từ 07/10/2026, khách hàng chọn 1 trong 2 lựa chọn này.",
      },
      {
        heading: "Ưu đãi mua chung có áp dụng cho căn Studio không?",
        text: "Không. Lựa chọn nhóm người thân mua chung không áp dụng cho căn Studio.",
      },
      {
        heading: "Lưu ý",
        text: "Chính sách bán hàng áp dụng có điều kiện. Đặc quyền tùy chọn áp dụng từ 07/10/2026. Giá và chiết khấu theo bảng giá đợt tại thời điểm ký; các mức có ghi chú được tính trên giá chưa VAT và KPBT. Thông tin lấy từ poster chính sách của dự án. Bài viết không cam kết lợi nhuận.",
      },
    ],
  },

  {
    slug: "lien-tho-da-nang-giam-gia-thu-cap-q3-2026",
    date: "14.10.2026",
    title:
      "Liền thổ Đà Nẵng quý III/2026: giá sơ cấp neo cao, thứ cấp có nơi giảm 10–15%",
    description:
      "Avison Young Q3/2026: giá sơ cấp biệt thự, nhà liền kề Đà Nẵng bình quân ~4.950 USD/m² (~129 triệu/m²), hấp thụ ~25%; một bộ phận đất nền xa trung tâm, thiếu tiện ích giảm 10–15% trên thứ cấp.",
    excerpt:
      "Theo báo cáo quý III/2026 của Avison Young Việt Nam (VietnamBiz 13/10/2026), nhà liền thổ Đà Nẵng vẫn khan hàng mới nhưng sức cầu phân hóa: giá sơ cấp neo khoảng 4.950 USD/m², tỷ lệ hấp thụ chỉ khoảng 25%, còn một bộ phận sản phẩm thứ cấp ở khu xa trung tâm hoặc đất nền thiếu tiện ích phải giảm 10–15% để thoát hàng. Tin thị trường tổng hợp — không phải thông cáo The Camellia.",
    image: "/images/news-lien-tho-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): khu biệt thự, nhà liền kề ven sông nhìn về bán đảo Sơn Trà, watermark 「Hình ảnh minh họa」",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-lien-tho-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-lien-tho-hero.webp",
      "/images/news-lien-tho-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Ngày 13/10/2026, VietnamBiz đăng bài tổng hợp báo cáo thị trường quý III/2026 của Avison Young Việt Nam về phân khúc biệt thự, nhà liền kề và đất nền tại Đà Nẵng. Điểm đáng chú ý là sự lệch pha giữa hai thị trường: giá chào bán ở dự án mới vẫn neo cao vì chi phí phát triển lớn, trong khi trên thị trường thứ cấp, một bộ phận người đang nắm giữ phải giảm giá để thoát hàng. Bài dưới đây tóm tắt các con số chính — mang tính tin thị trường tổng hợp, không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Nguồn cung liền thổ mới vẫn khan hiếm; sức cầu phân hóa rõ giữa các dự án. • Giá sơ cấp bình quân biệt thự, nhà liền kề: khoảng 4.950 USD/m² (~129 triệu đồng/m²). • Mặt tiền sông Hàn hoặc ven biển Mỹ Khê – Sơn Trà: khoảng 7.000–8.500 USD/m² (~182–221 triệu đồng/m²). • Tỷ lệ hấp thụ bình quân quý III: khoảng 25%, giảm so với quý trước. • Thứ cấp ở khu xa trung tâm, đất nền phân lô thiếu tiện ích: một số nhà đầu tư giảm 10–15% để cắt lỗ — không phải mức giảm bình quân toàn thị trường. • Lãi suất cho vay thả nổi khoảng 12–15%/năm gây áp lực cho người dùng đòn bẩy.",
        image: "/images/news-lien-tho-body.webp",
        imageAlt:
          "Infographic minh họa: liền thổ Đà Nẵng quý III/2026 theo Avison Young — sơ cấp ~4.950 USD/m², đắc địa 7.000–8.500 USD/m², hấp thụ ~25%, thứ cấp một bộ phận giảm 10–15%, nguồn cung hơn 1.500 căn, lãi thả nổi ~12–15%/năm",
      },
      {
        heading: "Nguồn cung: hơn 1.500 căn, phần lớn là hàng tồn",
        text: "Theo Avison Young, nguồn cung nhà ở liền thổ tại Đà Nẵng trong quý III/2026 có hơn 1.500 căn; phần lớn đến từ hàng tồn kho và các đợt mở bán bổ sung tại phường Hải Vân. Thị trường cũng ghi nhận dự án Golden Hills tại Liên Chiểu tái khởi động một phân khu mới. Không gian phát triển nhà liền thổ đang dịch chuyển về hai cực Tây Bắc và phía Nam thành phố, nhưng nguồn cung chưa mở rộng đáng kể vì dự án mới còn ít và một số dự án tiếp tục vướng pháp lý. Khi hàng mới khan hiếm, nguồn thứ cấp chiếm tỷ trọng lớn hơn — nghĩa là giá giao dịch phụ thuộc nhiều vào quyết định bán của chính những người đang nắm giữ tài sản.",
      },
      {
        heading: "Giá sơ cấp neo cao, nhưng hấp thụ chỉ khoảng 25%",
        text: "Báo cáo ghi nhận giá sơ cấp bình quân biệt thự, nhà liền kề tại Đà Nẵng quý III/2026 khoảng 4.950 USD/m² (~129 triệu đồng/m²). Ở các dự án mặt tiền sông Hàn hoặc ven biển Mỹ Khê – Sơn Trà, mức giá khoảng 7.000–8.500 USD/m² (~182–221 triệu đồng/m²). Theo đơn vị nghiên cứu, giá sơ cấp neo cao một phần do chi phí đầu vào tăng: tiền sử dụng đất theo bảng giá mới, chi phí xây dựng và hạ tầng. Tuy vậy, giá chào bán không đồng nghĩa với giá giao dịch thành công — tỷ lệ hấp thụ bình quân quý III chỉ khoảng 25%, giảm so với quý trước, dù một số dự án hạ tầng tốt, vị trí thuận lợi vẫn giao dịch tương đối tốt.",
        links: [
          {
            to: "/tin-tuc/he-so-k-gia-dat-da-nang-2026-dat-nen",
            label: "Hệ số K giá đất Đà Nẵng 2026 và đất nền",
          },
        ],
      },
      {
        heading: "Thứ cấp: nơi giảm 10–15%, nơi vẫn giữ giá",
        text: "Avison Young cho biết thanh khoản thứ cấp gần như chững lại, nhất là ở khu vực xa trung tâm hoặc dự án đất nền phân lô thiếu tiện ích; tại đây một số nhà đầu tư chấp nhận giảm 10–15% để cắt lỗ. Đây là mức điều chỉnh ở một bộ phận sản phẩm, không phải mức giảm bình quân của toàn thị trường liền thổ Đà Nẵng. Ngược lại, các khu ven biển như Sơn Thủy, An Thượng giao dịch chậm hơn nhưng mặt bằng giá vẫn được duy trì nhờ khả năng khai thác lưu trú. Với vùng Đà Nẵng mở rộng, thanh khoản tập trung quanh Ngũ Hành Sơn, Liên Chiểu, Điện Bàn Đông và Hội An; các khu đô thị vệ tinh ngoài trung tâm chịu áp lực điều chỉnh trên thứ cấp.",
        links: [
          {
            to: "/tin-tuc/thanh-khoan-phan-hoa-can-ho-dat-nen-da-nang-2026",
            label: "Thanh khoản BĐS Đà Nẵng phân hóa 2026",
          },
        ],
      },
      {
        heading: "Lãi suất 12–15%/năm và ai vẫn đang xuống tiền",
        text: "Theo nhóm phân tích, lãi suất cho vay thả nổi tăng lên khoảng 12–15%/năm khiến một phần dòng tiền chuyển sang tiết kiệm để ưu tiên an toàn; với người dùng đòn bẩy, chi phí vốn cao làm giảm khả năng nắm giữ lâu khi thanh khoản không như kỳ vọng. Riêng nhóm khách có tiền mặt từ Hà Nội và TP HCM vẫn tìm cơ hội tích lũy tại Đà Nẵng, nhưng chọn lọc: ưu tiên pháp lý minh bạch, quy hoạch tốt, hạ tầng đồng bộ và vị trí thuận lợi để khai thác kinh doanh, cho thuê. Sức cầu vì vậy dồn về sản phẩm của chủ đầu tư uy tín. Giai đoạn 2026–2030, Avison Young đánh giá hạ tầng và quy hoạch các vùng kinh tế trọng điểm (logistics, công nghệ, thương mại tự do, du lịch) tiếp tục là yếu tố then chốt. Bối cảnh vĩ mô 9 tháng (du lịch, FDI) đã được tổng hợp ở bài riêng.",
        links: [
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà trên 10%: tính dòng tiền thế nào?",
          },
          {
            to: "/tin-tuc/da-nang-9-thang-2026-du-lich-fdi-thi-truong-can-ho",
            label: "Đà Nẵng 9 tháng 2026: du lịch, FDI và thị trường căn hộ",
          },
          {
            to: "/tin-tuc/chon-khu-o-da-nang-son-tra-hai-chau-ngu-hanh-son",
            label: "Chọn khu ở Đà Nẵng: Sơn Trà, Hải Châu hay Ngũ Hành Sơn?",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Bài viết không suy diễn giá The Camellia từ số liệu liền thổ — đây là hai phân khúc khác nhau. Nếu anh chị ưu tiên pháp lý rõ ràng và mua để ở lâu dài thay vì đất nền, The Camellia Sơn Trà là căn hộ thương mại sở hữu lâu dài tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài",
          },
          {
            to: "/tin-tuc/gia-the-camellia-son-tra-tu-1-98-ty",
            label: "Giá The Camellia Sơn Trà từ 1,98 tỷ",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: VietnamBiz, «Bất động sản liền thổ Đà Nẵng giảm giá thứ cấp 10 - 15%» (13/10/2026), tổng hợp báo cáo thị trường quý III/2026 của Avison Young Việt Nam. Số liệu giá là mức chào bán sơ cấp bình quân theo báo cáo, làm tròn; quy đổi VNĐ theo nguồn; không phải giá giao dịch thành công. Mức giảm 10–15% chỉ ghi nhận ở một bộ phận sản phẩm thứ cấp, không phải bình quân toàn thị trường. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI); infographic minh họa tổng hợp từ số liệu báo cáo — không phải ảnh hiện trường. Bài là tin thị trường tổng hợp, không phải thông cáo The Camellia, không phải khuyến nghị đầu tư và không cam kết tăng giá hay lợi nhuận. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },


  {
    slug: "van-tai-duong-thuy-ban-dao-son-tra-2030",
    date: "13.10.2026",
    title:
      "Đường thủy bán đảo Sơn Trà đến 2030: giờ 7h30–17h30, ~40 phương tiện — kế hoạch vận tải nội địa Đà Nẵng",
    description:
      "Đà Nẵng ban hành kế hoạch vận tải đường thủy nội địa đến 2030 (QĐ 4435/QĐ-UBND 29/9/2026). Tuyến bán đảo Sơn Trà: 7h30–17h30, dự kiến ~40 phương tiện đến 2030; giai đoạn I 2026–2028.",
    excerpt:
      "Cuối tháng 9/2026, UBND TP Đà Nẵng ban hành Kế hoạch phát triển vận tải đường thủy nội địa đến năm 2030 (Quyết định 4435/QĐ-UBND ngày 29/9/2026). Giai đoạn I (2026–2028) gồm khu vực bán đảo Sơn Trà: hoạt động 7h30–17h30, dự kiến khoảng 40 phương tiện đến 2030. Tin địa phương tổng hợp — không phải thông cáo The Camellia.",
    image: "/images/news-duongthuy-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): vịnh Đà Nẵng nhìn về bán đảo Sơn Trà, tàu du lịch trên mặt nước, watermark 「Hình ảnh minh họa」",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-duongthuy-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-duongthuy-hero.webp",
      "/images/news-duongthuy-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Ngày 29/9/2026, UBND thành phố Đà Nẵng ban hành Quyết định 4435/QĐ-UBND về Kế hoạch phát triển vận tải đường thủy nội địa đến năm 2030, thay thế Quyết định 3273/QĐ-UBND ngày 19/12/2022. Báo Văn Hóa (baovanhoa.vn, khoảng 02/10/2026) và các bản tin tổng hợp trên vietnam.vn / doanhnghiepvn, cùng thông tin Sở Xây dựng Đà Nẵng nêu ngày 2/10, đã tóm tắt các tuyến ưu tiên và định hướng quy mô phương tiện. Bài dưới đây tập trung tuyến khu vực bán đảo Sơn Trà và các tuyến liên quan trong giai đoạn I — mang tính tin địa phương tổng hợp, không phải thông báo chính thức của UBND / Sở Xây dựng và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Văn bản: QĐ 4435/QĐ-UBND ngày 29/9/2026 — Kế hoạch phát triển vận tải đường thủy nội địa đến 2030; thay QĐ 3273/QĐ-UBND (19/12/2022). • Giai đoạn I (2026–2028): sông Hàn, khu vực bán đảo Sơn Trà, Cửa Đại–Cù Lao Chàm, tuyến bờ→đảo, vịnh Đà Nẵng, sông Hội An–Thu Bồn, sông Đầm. • Tuyến bán đảo Sơn Trà: hoạt động 7h30–17h30; tàu nhà hàng nổi kết thúc trước 23h; dự kiến đến 2030 khoảng 40 phương tiện. • Sông Hàn: 7h30–23h (lễ/Tết có thể kéo dài); dự kiến 65 phương tiện (50 ≤100 khách, 15 >100). • Cửa Đại–Cù Lao Chàm: 7h30–16h30; khoảng 138 phương tiện. • Số liệu phụ lục là định hướng, không phải hạn ngạch cứng.",
        image: "/images/news-duongthuy-body.webp",
        imageAlt:
          "Infographic minh họa (tạo bằng AI): tuyến đường thủy bán đảo Sơn Trà — giờ 7h30–17h30, ~40 phương tiện đến 2030, giai đoạn I 2026–2028",
      },
      {
        heading: "Tuyến bán đảo Sơn Trà trong giai đoạn I",
        text: "Theo các bản tin tổng hợp kế hoạch, giai đoạn I (2026–2028) ưu tiên tổ chức vận tải trên một số tuyến đã có nhu cầu du lịch và đi lại, trong đó có khu vực bán đảo Sơn Trà cùng sông Hàn, Cửa Đại–Cù Lao Chàm, tuyến từ bờ ra đảo, vịnh Đà Nẵng, sông Hội An–Thu Bồn và sông Đầm. Với tuyến khu vực bán đảo Sơn Trà, khung giờ hoạt động được nêu là 7h30–17h30; riêng tàu nhà hàng nổi kết thúc trước 23h. Đến năm 2030, phụ lục định hướng khoảng 40 phương tiện trên tuyến này. Anh chị lưu ý: đây là định hướng quy mô theo kế hoạch thành phố, không phải hạn ngạch cấp phép cố định cho từng doanh nghiệp.",
      },
      {
        heading: "Các tuyến liên quan và giai đoạn II",
        text: "Cùng giai đoạn I, sông Hàn được nêu khung giờ 7h30–23h (ngày lễ, Tết có thể kéo dài) với định hướng khoảng 65 phương tiện (khoảng 50 tàu ≤100 khách và 15 tàu >100 khách). Tuyến Cửa Đại–Cù Lao Chàm: 7h30–16h30; định hướng khoảng 138 phương tiện. Giai đoạn II (2028–2030) hướng tới mở thêm các tuyến như Cổ Cò–Cửa Đại, một số tuyến sông khác và khu vực Tam Hải… Định hướng chung của kế hoạch: đội tàu hiện đại, an toàn, thân thiện môi trường; đồng bộ cảng–bến–neo đậu; khuyến khích chuyển dần nhiên liệu hóa thạch sang điện / năng lượng xanh. Kế hoạch cũng đề cập định hướng lưu trú ngủ đêm, khách sạn nổi / du thuyền và yêu cầu neo đậu đúng chỗ — chi tiết cụ thể sẽ theo hướng dẫn của cơ quan chuyên môn khi triển khai.",
        links: [
          {
            to: "/tin-tuc/mo-rong-duong-ven-bien-son-tra-hoi-an-2026",
            label: "Đà Nẵng mở rộng đường ven biển Sơn Trà – Hội An",
          },
          {
            to: "/tin-tuc/son-tra-phuong-do-thi-so-2030-doi-moi-sang-tao",
            label: "Sơn Trà hướng tới phường đô thị số năm 2030",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Kế hoạch đường thủy nội địa là tín hiệu dài hạn về hạ tầng kết nối sông–biển quanh Sơn Trà và vịnh Đà Nẵng; bài viết không suy diễn tác động lên giá bất động sản. Nếu anh chị đang tìm căn hộ sở hữu lâu dài gần khu vực, The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; theo thông tin dự án, khoảng 200 m tới biển Mân Thái. Dự án 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài",
          },
          {
            to: "/tin-tuc/gia-the-camellia-son-tra-tu-1-98-ty",
            label: "Giá The Camellia Sơn Trà từ 1,98 tỷ",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: Quyết định 4435/QĐ-UBND ngày 29/9/2026 (UBND TP Đà Nẵng) — Kế hoạch phát triển vận tải đường thủy nội địa đến năm 2030, thay thế QĐ 3273/QĐ-UBND ngày 19/12/2022; Báo Văn Hóa (baovanhoa.vn, khoảng 02/10/2026); bản tin tổng hợp vietnam.vn / doanhnghiepvn; thông tin Sở Xây dựng Đà Nẵng nêu ngày 2/10/2026. Số liệu phương tiện và khung giờ theo phụ lục / tóm tắt báo chí là định hướng, không phải hạn ngạch cứng. Ảnh đầu bài và infographic là hình ảnh minh họa (tạo bằng AI), không phải ảnh hiện trường hay ảnh chính thức của UBND. Bài là tin địa phương tổng hợp, không phải thông báo của UBND / Sở Xây dựng / BQL bán đảo Sơn Trà, không phải thông cáo The Camellia và không cam kết tăng giá BĐS hay lợi nhuận. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },


  {
    slug: "nha-o-xa-hoi-da-nang-q4-2026-hoa-hiep-277-can",
    date: "12.10.2026",
    title:
      "Nhà ở xã hội Đà Nẵng quý IV/2026: 277 căn Hòa Hiệp nhận hồ sơ từ 25/10 — người mua ở thực cần biết gì?",
    description:
      "Đà Nẵng nhận hồ sơ mua 277 căn nhà ở xã hội tại Hòa Hiệp 4 từ 25/10 đến 30/11/2026, giá khoảng 19,44 triệu/m². Điều kiện thu nhập, nhà ở và cách đọc tác động lên thị trường căn hộ.",
    excerpt:
      "Sở Xây dựng Đà Nẵng công khai đợt nhận hồ sơ 277 căn nhà ở xã hội tại Khu tái định cư Hòa Hiệp 4 (25/10–30/11/2026, khoảng 19,44 triệu/m²). Bài tóm tắt điều kiện, mục tiêu nhà ở xã hội của thành phố và gợi ý cách cân nhắc giữa nhà ở xã hội và căn hộ thương mại — tin thị trường, không phải thông cáo The Camellia.",
    image: "/images/news-noxh-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): gia đình trẻ đứng trên phố nhìn dãy chung cư thấp tầng có ban công và cây xanh tại Đà Nẵng",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-noxh-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-noxh-hero.webp",
      "/images/news-noxh-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Cuối tháng 9/2026, Sở Xây dựng TP Đà Nẵng công khai thông tin tiếp nhận hồ sơ đăng ký mua nhà ở xã hội tại khu đất B4-1, B4-2 thuộc Khu tái định cư Hòa Hiệp 4. Đây là một trong những đợt nhận hồ sơ nhà ở xã hội đáng chú ý của quý IV/2026, đúng lúc nhiều gia đình trẻ đang cân nhắc mua nhà trong bối cảnh lãi vay còn cao. Bài dưới đây tổng hợp thông tin đã công bố và gợi ý cách đọc tác động của nhà ở xã hội lên lựa chọn nhà ở của người mua ở thực — mang tính tin thị trường, không phải tư vấn pháp lý hay đầu tư.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Dự án: Nhà ở xã hội tại khu đất B4-1, B4-2, Khu tái định cư Hòa Hiệp 4 (phường Hải Vân và phường Liên Chiểu); chủ đầu tư Công ty Cổ phần Đầu tư và Thương mại Thủ Đô. • Đợt này: 277 căn; nhận hồ sơ từ 25/10/2026 đến hết 30/11/2026. • Giá bán công bố: 19.442.039 đồng/m², đã gồm VAT, chưa gồm kinh phí bảo trì và hệ số điều chỉnh theo tầng. • Mục tiêu thành phố: hoàn thành 4.979 căn nhà ở xã hội trong năm 2026 và 28.955 căn giai đoạn 2025–2030. • Nhà ở xã hội chỉ dành cho người đủ điều kiện về đối tượng, nhà ở và thu nhập — không phải ai cũng mua được.",
        image: "/images/news-noxh-body.webp",
        imageAlt:
          "Infographic nhà ở xã hội Hòa Hiệp 4, Đà Nẵng: 277 căn, nhận hồ sơ 25/10–30/11/2026, giá 19.442.039 đồng/m² (gồm VAT), mục tiêu 4.979 căn năm 2026 và 28.955 căn giai đoạn 2025–2030",
      },
      {
        heading: "Ai được đăng ký mua?",
        text: "Theo Luật Nhà ở 2023 và các nghị định hướng dẫn (Nghị định 100/2024/NĐ-CP, được sửa đổi bởi Nghị định 261/2025/NĐ-CP), người mua nhà ở xã hội phải đồng thời đáp ứng ba nhóm điều kiện: 1) Thuộc đối tượng được hưởng chính sách (ví dụ người thu nhập thấp tại đô thị, công nhân, người lao động, cán bộ công chức viên chức, lực lượng vũ trang…). 2) Về nhà ở: chưa có nhà thuộc sở hữu tại thành phố, hoặc có nhưng diện tích bình quân dưới 15 m²/người; chưa được mua, thuê mua nhà ở xã hội hay hưởng chính sách hỗ trợ nhà ở, đất ở. 3) Về thu nhập (bình quân 12 tháng, theo mức được báo chí tổng hợp từ Nghị định 261/2025): người độc thân không quá 20 triệu đồng/tháng, độc thân nuôi con chưa thành niên không quá 30 triệu, vợ chồng tổng thu nhập không quá 40 triệu đồng/tháng. Người quan tâm nên đối chiếu biểu mẫu và hướng dẫn chính thức của chủ đầu tư và Sở Xây dựng trước khi nộp.",
      },
      {
        heading: "Nộp hồ sơ ở đâu, khi nào?",
        text: "Theo thông báo được công khai, hồ sơ được hướng dẫn từ ngày ban hành thông báo và tiếp nhận chính thức từ 25/10 đến 30/11/2026 tại số 115 đường Trung Lập 17, Khu đô thị xanh Bàu Tràm, phường Hải Vân (thứ Hai – sáng thứ Bảy, 8h30–11h30 và 13h30–16h30, trừ ngày lễ). Người đăng ký cũng có thể nộp trực tuyến qua website của chủ đầu tư, qua bưu chính hoặc thông qua cơ quan nơi làm việc. Một lưu ý thực tế: chuẩn bị sớm các xác nhận về đối tượng, thực trạng nhà ở và thu nhập; chỉ làm việc với kênh chính thức của chủ đầu tư, không tin lời hứa «chắc suất».",
      },
      {
        heading: "Nhà ở xã hội tác động gì đến thị trường căn hộ Đà Nẵng?",
        text: "1) Nguồn cung giá mềm tăng dần: mục tiêu 4.979 căn hoàn thành trong năm 2026 — gấp khoảng hai lần chỉ tiêu năm 2025 — cho thấy thành phố ưu tiên nhà ở vừa túi tiền cho người thu nhập thấp và công nhân, nhất là khu vực Tây Bắc gần các khu công nghiệp. 2) Hai thị trường khác nhau: nhà ở xã hội có điều kiện đối tượng, giới hạn thu nhập và hạn chế chuyển nhượng trong thời gian nhất định theo luật; căn hộ thương mại phục vụ nhóm không đủ điều kiện, cần chọn vị trí tự do hơn hoặc muốn linh hoạt khi bán lại. Vì vậy, nhà ở xã hội không «kéo giá» toàn thị trường xuống, nhưng tạo thêm lựa chọn cho đúng nhóm khách hàng mục tiêu. 3) Mục tiêu khác với bàn giao: số căn mục tiêu là kế hoạch, tiến độ thực tế phụ thuộc từng dự án — người mua nên theo dõi thông báo chính thức thay vì tin đồn.",
        links: [
          {
            to: "/tin-tuc/thanh-khoan-phan-hoa-can-ho-dat-nen-da-nang-2026",
            label: "Thanh khoản BĐS Đà Nẵng phân hóa 2026",
          },
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà vượt 10%: tính dòng tiền thế nào?",
          },
        ],
      },
      {
        heading: "Checklist cho người mua ở thực",
        text: "• Tự kiểm tra điều kiện trước: nếu đủ chuẩn nhà ở xã hội, hãy chuẩn bị hồ sơ sớm và cân nhắc vị trí so với nơi làm việc, trường học của gia đình. • Nếu không đủ điều kiện (vượt trần thu nhập, đã có nhà, hoặc không trúng suất), căn hộ thương mại là phương án thay thế — khi đó so sánh pháp lý, thời hạn sở hữu, vị trí và tổng chi phí (giá, phí bảo trì, lãi vay). • Tính khoản trả nợ ở kịch bản lãi thả nổi và giữ quỹ dự phòng. • Đừng mua chỉ vì sợ lỡ: đọc kỹ hợp đồng, tiến độ thanh toán và điều kiện bàn giao.",
        links: [
          {
            to: "/tin-tuc/chon-khu-o-da-nang-son-tra-hai-chau-ngu-hanh-son",
            label: "Chọn khu ở Đà Nẵng: Sơn Trà, Hải Châu hay Ngũ Hành Sơn?",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Với gia đình không thuộc diện nhà ở xã hội nhưng vẫn ưu tiên mua để ở lâu dài, điều đáng cân nhắc là pháp lý, vị trí và khả năng thanh toán. The Camellia Sơn Trà là căn hộ thương mại sở hữu lâu dài: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; bàn giao dự kiến khoảng 2028. Để nhận bảng giá và phương án thanh toán đúng đợt, anh chị để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài",
          },
          {
            to: "/tin-tuc/gia-the-camellia-son-tra-tu-1-98-ty",
            label: "Giá The Camellia Sơn Trà từ 1,98 tỷ",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: Cổng thông tin điện tử TP Đà Nẵng (danang.gov.vn) — «Công bố công khai thông tin tiếp nhận hồ sơ đăng ký mua nhà ở xã hội tại Khu đất B4-1, B4-2 thuộc khu tái định cư Hòa Hiệp 4» và «Đà Nẵng đặt mục tiêu hoàn thành 28.955 căn nhà ở xã hội đến năm 2030»; Tạp chí Xây dựng — «Đà Nẵng đặt mục tiêu hoàn thành gần 5.000 căn NƠXH trong năm 2026»; thông báo của chủ đầu tư trên chgroup.vn (28/09/2026); VietnamPlus/vietnam.vn — «Đà Nẵng mở bán 277 căn nhà ở xã hội tại Khu tái định cư Hòa Hiệp 4». Mức trần thu nhập theo Nghị định 261/2025/NĐ-CP như báo chí tổng hợp; người đăng ký cần đối chiếu văn bản gốc. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI), không phải ảnh dự án nhà ở xã hội hay ảnh thực tế The Camellia; infographic do website tổng hợp từ các nguồn trên. Bài là tin thị trường tổng hợp, không phải thông báo của Sở Xây dựng hay chủ đầu tư dự án nhà ở xã hội, không phải thông cáo The Camellia và không cam kết giá hay lợi nhuận. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "khai-truong-camellia-gallery-cham-noi-dang-song",
    date: "10.10.2026",
    title: "Khai trương Camellia Gallery: chạm nơi đáng sống tại Đà Nẵng",
    excerpt:
      "Camellia Gallery của The Camellia Sơn Trà khai trương ngày 10/10/2026 tại Tầng 9 Bạch Đằng Complex, 50 Bạch Đằng: Panorama 270°, sa bàn tương tác.",
    description:
      "Camellia Gallery của The Camellia Sơn Trà khai trương ngày 10/10/2026 tại Tầng 9 Bạch Đằng Complex, 50 Bạch Đằng: Panorama 270°, sa bàn tương tác.",
    image: "/images/news-gallery-og.jpg",
    imageAlt: "Lễ khai trương Camellia Gallery ngày 10/10/2026",
    imageCaption: "Lễ khai trương Camellia Gallery ngày 10/10/2026",
    poster: "/images/news-gallery-hero.webp",
    gallery: [
      "/images/news-gallery-hero.webp",
      "/images/news-gallery-sa-ban.webp",
      "/images/news-gallery-tham-quan.webp",
      "/images/news-gallery-trong-hoi.webp",
      "/images/news-gallery-cat-bang.webp",
      "/images/news-gallery-khach-moi.webp",
      "/images/news-gallery-ky-niem.webp",
    ],
    galleryFit: "contain",
    body: [
      {
        text: "Ngày 10/10/2026, Camellia Gallery, không gian thưởng lãm dành riêng cho dự án The Camellia Sơn Trà Đà Nẵng, chính thức khai trương tại Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. Sự kiện mang tên «Camellia Gallery: Chạm nơi đáng sống» diễn ra trong không khí trang trọng, có sự hiện diện của khách hàng, đối tác và đại lý phân phối. Từ nay, anh chị quan tâm dự án đã có một địa điểm cố định ngay trung tâm thành phố để xem sa bàn, hỏi kỹ về căn hộ và hình dung cuộc sống tương lai trước khi quyết định.",
      },
      {
        heading: "Camellia Gallery ở đâu, có gì đặc biệt?",
        text: "Gallery nằm trên tầng 9 của Bạch Đằng Complex, ngay trên trục đường Bạch Đằng ven sông Hàn. Điểm nhấn đầu tiên là tầm nhìn Panorama 270°, ôm trọn sông Hàn, biển trời và núi rừng Sơn Trà. Đứng tại đây, anh chị có thể nhìn về phía Sơn Trà, nơi dự án tọa lạc, để hình dung rõ hơn vị trí The Camellia giữa sông, biển và bán đảo.",
        image: "/images/news-gallery-sa-ban.webp",
        imageAlt: "Sa bàn tương tác của The Camellia Sơn Trà tại Camellia Gallery",
      },
      {
        text: "Điểm nhấn thứ hai là hệ thống sa bàn thông minh có tương tác. Thay vì chỉ xem bản vẽ hay tờ rơi, anh chị có thể quan sát mô hình tòa tháp, vị trí dự án trong khu vực và các kết nối xung quanh một cách trực quan. Theo ban tổ chức, Camellia Gallery không chỉ là nơi giới thiệu dự án mà còn là nơi câu chuyện «Nhà Đà Nẵng của bạn» được kể bằng ngôn ngữ không gian.",
        image: "/images/news-gallery-tham-quan.webp",
        imageAlt: "Khách mời tham quan sa bàn và mô hình tòa tháp The Camellia",
      },
      {
        heading: "Những khoảnh khắc tại lễ khai trương",
        text: "Lễ khai trương có màn trống hội và nghi thức cắt băng. MBLAND, đơn vị phát triển dự án, chia sẻ khát vọng kiến tạo một chốn sống đáng tự hào tại Đà Nẵng. Khách mời tham quan sa bàn, xem mô hình tòa tháp và để lại chữ ký trên bảng kỷ niệm ngày khai trương.",
        image: "/images/news-gallery-trong-hoi.webp",
        imageAlt: "Màn trống hội tại lễ khai trương",
      },
      {
        text: "",
        image: "/images/news-gallery-cat-bang.webp",
        imageAlt: "Khách mời và ban tổ chức tại khu vực cắt băng khai trương",
      },
      {
        text: "",
        image: "/images/news-gallery-khach-moi.webp",
        imageAlt: "Khách mời dự lễ khai trương tại Tầng 9 Bạch Đằng Complex",
      },
      {
        text: "",
        image: "/images/news-gallery-ky-niem.webp",
        imageAlt: "Khách mời ký tên lên bảng kỷ niệm ngày khai trương",
      },
      {
        text: "Ban tổ chức gửi lời cảm ơn đến khách hàng, đối tác và đại lý đã đến chung vui. Camellia Gallery từ nay là điểm hẹn để khám phá, kết nối và cảm nhận nơi mình muốn gọi là nhà.",
      },
      {
        heading: "Vài nét về The Camellia Sơn Trà",
        text: "The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng, cách biển Mân Thái khoảng 200m và tựa bán đảo Sơn Trà. Dự án do MBLAND phát triển, WELAND phát triển kinh doanh, gồm 469 căn hộ sở hữu lâu dài, giá từ 1,72 tỷ.",
      },
      {
        text: "Để buổi xem gallery được trọn vẹn, anh chị có thể hẹn Nhật trước qua hotline/Zalo 0934 885 108. Nhật sẽ đón anh chị tại Tầng 9 Bạch Đằng Complex, cùng xem sa bàn, mặt bằng căn hộ và gửi bảng giá, chính sách đang áp dụng.",
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Camellia Gallery ở đâu?",
        text: "Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. Gallery chính thức mở cửa từ ngày 10/10/2026.",
      },
      {
        heading: "Đến Camellia Gallery xem được gì?",
        text: "Tầm nhìn Panorama 270° hướng sông Hàn, biển và Sơn Trà, cùng sa bàn tương tác và mô hình tòa tháp The Camellia. Anh chị nên hẹn trước qua số 0934 885 108 để được Nhật hướng dẫn.",
      },
      {
        heading: "Lưu ý",
        text: "Bài viết dựa trên thông tin sự kiện do ban tổ chức công bố. Ảnh sự kiện do ban tổ chức cung cấp. Phát triển dự án MBLAND · phát triển kinh doanh WELAND · phân phối DKRA Virgo. Giá và chính sách theo bảng giá tại thời điểm ký. Không cam kết lợi nhuận. Giá từ 1,72 tỷ đã áp dụng chiết khấu theo phương thức thanh toán.",
      },
    ],
  },

  {
    slug: "tam-dung-tham-quan-ban-dao-son-tra-mua-lon-10-2026",
    date: "10.10.2026",
    title:
      "Bán đảo Sơn Trà tạm dừng tham quan từ 08/10/2026 vì mưa lớn: vì sao, nên làm gì và khi nào mở lại?",
    excerpt:
      "Cập nhật 14/10/2026: bán đảo đã mở cửa tham quan trở lại. Ban Quản lý bán đảo Sơn Trà đã tạm dừng hoạt động tham quan từ 08/10/2026 do mưa to đến rất to và nguy cơ sạt lở taluy, đá rơi, cây đổ. Tóm tắt lý do, khuyến cáo an toàn và dự báo thời tiết những ngày tới — tin địa phương, không phải thông cáo The Camellia.",
    description:
      "Bán đảo Sơn Trà tạm dừng tham quan 08/10/2026 vì mưa lớn và đã mở cửa trở lại từ 14/10/2026. Lý do tạm dừng và khuyến cáo an toàn.",
    image: "/images/news-tamdung-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): đường đèo ven núi Sơn Trà ướt mưa, sương mù phủ đồi, thanh chắn đỏ trắng tạm đóng đường, biển động phía xa",
    imageCaption: "Ảnh minh họa tạo bằng AI – không phải ảnh hiện trường",
    poster: "/images/news-tamdung-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-tamdung-hero.webp",
      "/images/news-tamdung-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        heading: "Cập nhật 14/10/2026: bán đảo đã mở cửa tham quan trở lại",
        text: "Từ ngày 14/10/2026, Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng đã đón du khách trở lại sau đợt tạm dừng từ 08/10 (theo Báo Đà Nẵng, Đại Đoàn Kết, Báo Văn Hóa ngày 14/10). Nội dung bên dưới là tình hình tại thời điểm đăng bài 10/10/2026, giữ lại để tham khảo. Xem quy định tuyến và lưu ý khi lên bán đảo trong bài cập nhật mới.",
        links: [
          {
            to: "/tin-tuc/ban-dao-son-tra-mo-lai-tham-quan-14-10-2026",
            label: "Bán đảo Sơn Trà mở lại tham quan từ 14/10/2026",
          },
        ],
      },
      {
        text: "Ngày 08/10/2026, Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng (BQL) thông báo tạm dừng hoạt động tham quan tại bán đảo Sơn Trà từ ngày 08/10 cho đến khi có thông báo mới, do dự báo mưa to đến rất to, tiềm ẩn nguy cơ sạt lở đất và lũ quét. Đến tối 09/10, theo VTV, thành phố tiếp tục tạm dừng tham quan và chỉ mở lại khi điều kiện an toàn được bảo đảm. Bài viết cập nhật tình hình đến 17h30 ngày 10/10/2026, nối tiếp bài lưu ý lên bán đảo tháng 10 đăng ngày 06/10. Đây là tin địa phương tổng hợp, không phải thông báo của BQL và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Từ 08/10/2026: tạm dừng hoạt động tham quan bán đảo Sơn Trà đến khi có thông báo mới; thời điểm mở lại chưa được xác định. • Lý do: mưa to đến rất to từ chiều tối 07/10; đất gần bão hòa; nguy cơ sạt lở taluy, đá rơi, cây gãy đổ, nước chảy xiết trên đường đèo. • Khuyến cáo: không tự ý lên bán đảo, kể cả khi trời tạnh; không dừng xe gần vách núi, taluy, dưới cây lớn; gặp đoạn ngập hoặc đất đá chắn lối thì quay lại. • Dự báo (Đài KTTV Trung Bộ, bản tin ngày 09/10): 10–11/10 còn có nơi mưa vừa đến mưa to và dông; từ 14/10 mưa có xu hướng giảm. • Khi mở lại, giờ tham quan tháng 10 đến hết tháng 2 là 7h30–17h30.",
      },
      {
        heading: "Vì sao phải tạm dừng?",
        text: "Theo VnExpress (08/10/2026), Trung tâm Dự báo Khí tượng Thủy văn quốc gia cho biết mưa to đến rất to tại Đà Nẵng kéo dài từ chiều tối 07/10 đến đêm 08/10, sau đó giảm dần từ 09/10; nhiều tuyến đường phía nam thành phố ngập sâu gần nửa mét. BQL cho biết khu vực bán đảo thường có dông lốc và gió mạnh; các tuyến đường nhiều đoạn đèo dốc, khúc cua gấp, dễ trơn trượt khi mưa, sương mù làm hạn chế tầm nhìn, cùng nguy cơ cây gãy đổ, đá rơi từ vách núi và nước chảy xiết trên mặt đường. Tin cảnh báo lũ quét, sạt lở đất lúc 15h30 ngày 08/10 của Đài Khí tượng Thủy văn Trung Bộ (đăng trên cổng pctt.danang.gov.vn) ghi nhận độ ẩm đất trên địa bàn đã gần bão hòa (80–90%) và liệt kê phường Sơn Trà trong danh sách cần lưu ý, đặc biệt các taluy dọc đường bê tông, đường nhựa gần Nhà Vọng Cảnh và taluy đường Hoàng Sa.",
        image: "/images/news-tamdung-body.webp",
        imageAlt:
          "Infographic tổng hợp: bán đảo Sơn Trà tạm dừng tham quan từ 08/10/2026, lý do mưa lớn và nguy cơ sạt lở, những điều không nên làm và thông tin mở lại — theo BQL bán đảo Sơn Trà và báo chí",
      },
      {
        heading: "Người dân, du khách nên làm gì?",
        text: "BQL khuyến cáo người dân, du khách không lên bán đảo trong thời gian tạm dừng và chủ động đổi lịch trình. Ai đang ở trên bán đảo khi có mưa lớn, sấm sét hoặc gió mạnh nên tìm nơi trú tránh an toàn, rời khỏi khu vực khi điều kiện cho phép, không đi tiếp đến các điểm xa hơn. Khi gặp đường ngập, nước chảy xiết hoặc cây, đất đá chắn lối, cần quay lại vị trí an toàn và làm theo hướng dẫn của lực lượng chức năng; không dừng, đỗ xe hoặc tập trung chụp ảnh gần vách núi, taluy, dưới cây lớn hay nơi có dấu hiệu sạt lở (VnExpress, VTV). Báo chí ngày 09–10/10 (CafeF, Pháp luật & Công dân) cũng nhắc du khách không nên tự ý lên bán đảo kể cả khi trời đã tạnh, vì thông báo mở lại chưa được phát đi. Ở cấp thành phố, theo Tiền Phong, UBND TP Đà Nẵng yêu cầu các địa phương rà soát, sơ tán người dân ở khu vực thấp trũng, ven sông suối, có nguy cơ sạt lở; Bộ CHQS thành phố thành lập 3 đội cứu hộ, cứu nạn sẵn sàng ứng phó.",
      },
      {
        heading: "Khi nào mở lại? Theo dõi ở đâu?",
        text: "Đến chiều 10/10/2026 chưa có thông báo chính thức về thời điểm mở lại. Tin dự báo lúc 15h30 ngày 10/10 của Đài KTTV Trung Bộ cho biết từ chiều tối 10/10 đến sáng 11/10 Đà Nẵng còn mưa, có nơi mưa to và dông. Bản tin dự báo thời tiết 10 ngày của Đài KTTV Trung Bộ phát lúc 15h30 ngày 09/10 (đăng trên cổng pctt.danang.gov.vn) cho biết các ngày 10–13/10 có mưa rào rải rác, riêng 10–11/10 có nơi mưa vừa đến mưa to và dông; từ 14–19/10 mưa có xu hướng giảm, có ngày nắng. Đây là dự báo, không phải lịch mở cửa — anh chị nên theo dõi thông báo của BQL bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng, cổng thông tin TP Đà Nẵng hoặc báo chí chính thống trước khi lên kế hoạch. Khi tham quan được mở lại, khung giờ mùa thấp điểm (tháng 10 đến hết tháng 2) là 7h30–17h30 và các quy định về tuyến, phương tiện vẫn áp dụng như bài tổng hợp ngày 06/10.",
        links: [
          {
            to: "/tin-tuc/luu-y-len-ban-dao-son-tra-thang-10-2026",
            label: "Lên bán đảo Sơn Trà tháng 10/2026: giờ, tuyến và lưu ý",
          },
          {
            to: "/tin-tuc/son-tra-phuong-do-thi-so-2030-doi-moi-sang-tao",
            label: "Sơn Trà hướng tới phường đô thị số năm 2030",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Mùa mưa từ tháng 10 đến tháng 2 là một phần nhịp sống của Sơn Trà; việc cơ quan quản lý chủ động tạm dừng tham quan thay vì chờ sự cố là thông tin hữu ích cho cư dân khi sắp xếp lịch đi dạo, đưa gia đình lên bán đảo. Bài viết không suy diễn tác động lên giá bất động sản. Nếu anh chị đang tìm căn hộ sở hữu lâu dài gần khu vực, The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; theo thông tin dự án, khoảng 200 m tới biển Mân Thái. Dự án 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài",
          },
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao The Camellia gần biển Mân Thái?",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: VnExpress — «Đà Nẵng tạm dừng tham quan bán đảo Sơn Trà» (08/10/2026); VTV — «Đà Nẵng tạm dừng tham quan bán đảo Sơn Trà do nguy cơ sạt lở» (09/10/2026); Tiền Phong — «Mưa không ngớt, Đà Nẵng ngừng tham quan bán đảo Sơn Trà, sẵn sàng xe thiết giáp lội nước» (08/10/2026); CAND (08/10/2026); CafeF (09/10/2026); Pháp luật & Công dân (10/10/2026); cổng phòng chống thiên tai TP Đà Nẵng (pctt.danang.gov.vn) — tin cảnh báo lũ quét, sạt lở đất (08/10/2026) và bản tin dự báo thời tiết 10 ngày (09/10/2026). Tình hình có thể thay đổi nhanh — luôn ưu tiên thông báo chính thức và biển báo tại chỗ. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI), không phải ảnh thực tế; infographic do website tổng hợp từ các nguồn trên. Bài là tin địa phương tổng hợp, không phải thông báo của BQL / UBND phường Sơn Trà, không phải thông cáo dự án và không cam kết tăng giá BĐS. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "thanh-khoan-phan-hoa-can-ho-dat-nen-da-nang-2026",
    date: "09.10.2026",
    title:
      "Thanh khoản BĐS Đà Nẵng phân hóa 2026: căn hộ cải thiện chọn lọc, đất nền và nghỉ dưỡng vẫn trầm lắng",
    description:
      "DKRA: căn hộ Đà Nẵng quý II/2026 giao dịch tăng 54% nhưng cục bộ; đất nền hấp thụ khoảng 4%; biệt thự nghỉ dưỡng ~5%, condotel gần như đứng. Tin thị trường tổng hợp — không phải thông cáo The Camellia.",
    excerpt:
      "Thị trường nhà ở Đà Nẵng 2026 phân hóa rõ: căn hộ từng cải thiện chọn lọc ở quý II, đất nền hấp thụ rất thấp (~4%), nghỉ dưỡng / condotel gần như ngủ đông. Bài tổng hợp số liệu DKRA và báo chí — tin thị trường, không cam kết lợi nhuận.",
    image: "/images/news-thanh-khoan-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): toàn cảnh Đà Nẵng lúc hoàng hôn — sông Hàn, cầu Rồng, dãy cao ốc và đường ven biển",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-thanh-khoan-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-thanh-khoan-hero.webp",
      "/images/news-thanh-khoan-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Giữa năm 2026, nhiều bản tin nói «căn hộ Đà Nẵng tăng giao dịch», trong khi đất nền và nghỉ dưỡng vẫn ì ạch. Hai hình ảnh đó không mâu thuẫn: theo các báo cáo của DKRA Consulting được báo chí dẫn lại, thanh khoản đang phân hóa mạnh — dòng tiền tập trung vào một số dự án căn hộ có pháp lý rõ, tiến độ tốt, còn đất nền và nhóm nghỉ dưỡng / condotel tiếp tục hấp thụ rất thấp. Bài dưới đây tổng hợp số liệu công bố (quý II và tháng 7–8/2026), gợi ý cách đọc cho người mua ở thật — mang tính tin thị trường tổng hợp, không phải tư vấn đầu tư và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Quý II/2026, căn hộ sơ cấp Đà Nẵng ghi nhận khoảng 5.090 căn đang mở bán (+47% so với quý trước); giao dịch khoảng 2.793 căn (+54%), tỷ lệ hấp thụ khoảng 55% — nhưng phần lớn từ dự án mới và chủ đầu tư lớn. • Căn hộ hạng A–B chiếm khoảng 88% nguồn cung và 93% lượng tiêu thụ; Ngũ Hành Sơn khoảng 45–46% nguồn cung / tiêu thụ. • Đất nền: khoảng 1.470 sản phẩm sơ cấp (−13%), chỉ khoảng 62 nền giao dịch (−71%), tỷ lệ hấp thụ khoảng 4%. • Biệt thự nghỉ dưỡng: khoảng 9/167 căn (~5%); nhà phố / shophouse nghỉ dưỡng gần như không phát sinh giao dịch; condotel chỉ ghi nhận 1 giao dịch cả quý dù nguồn cung còn khoảng 1.234 căn. • Sang tháng 8/2026, sức cầu căn hộ và đất nền đều giảm so với tháng trước khi lãi suất vay mua nhà vẫn neo cao (tháng 7 đất nền có nhích lên nhưng hấp thụ chỉ khoảng 3%).",
      },
      {
        heading: "Căn hộ: cải thiện chọn lọc, chưa phải phục hồi đồng đều",
        text: "Theo báo cáo quý II/2026 của DKRA Consulting (được Người Quan Sát / CafeF dẫn lại), nguồn cung sơ cấp căn hộ tăng khoảng 47%; nguồn cung mới tăng gấp khoảng 2,2 lần so với quý trước, phần lớn tập trung ở tháng 4. Lượng tiêu thụ tăng 54%, nhưng DKRA nhấn mạnh dòng tiền chủ yếu đổ vào dự án pháp lý hoàn chỉnh, tiến độ tốt và chủ đầu tư có năng lực — tức thanh khoản cục bộ, chưa lan tỏa toàn thị trường. Giá sơ cấp tăng nhẹ khoảng 2% theo quý; giá thứ cấp giảm khoảng 6% khi một bộ phận nhà đầu tư điều chỉnh kỳ vọng để thu hồi vốn. Hai tháng cuối quý, sức cầu bắt đầu chững lại khi mặt bằng lãi suất vẫn cao.",
        links: [
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà vượt 10%: tính dòng tiền thế nào?",
          },
          {
            to: "/tin-tuc/da-nang-9-thang-2026-du-lich-fdi-thi-truong-can-ho",
            label: "Đà Nẵng 9 tháng 2026: du lịch, FDI và thị trường căn hộ",
          },
        ],
      },
      {
        heading: "Đất nền: hấp thụ rất thấp — khoảng 4% nguồn cung sơ cấp",
        text: "Trái ngược căn hộ, đất nền tiếp tục là phân khúc kém sôi động. DKRA ghi nhận toàn thị trường còn khoảng 1.470 nền sơ cấp (giảm 13% so với quý trước), toàn bộ từ hàng đã mở bán trước đó; lượng giao dịch chỉ khoảng 62 nền (giảm 71%), tương đương tỷ lệ hấp thụ khoảng 4%. Giá sơ cấp gần như đi ngang nhưng vẫn neo cao do chi phí đầu vào; giá thứ cấp ít biến động. Riêng tháng 7/2026, theo bản tin tháng của DKRA (VietnamFinance đăng ngày 25/08/2026), lượng tiêu thụ đất nền chỉ khoảng 3% nguồn cung sơ cấp. Sang tháng 8/2026, báo chí dẫn DKRA cho biết cả tháng chỉ tiêu thụ khoảng 11 nền, lượng tiêu thụ giảm khoảng 74% so với tháng trước. Với người đang cân nhắc đất nền, con số hấp thụ thấp là lời nhắc: niêm yết cao không đồng nghĩa giao dịch được — cần kiểm tra pháp lý, hạ tầng thực tế và khả năng giữ vốn dài hạn.",
        image: "/images/news-thanh-khoan-body.webp",
        imageAlt:
          "Infographic minh họa phân hóa thanh khoản BĐS Đà Nẵng 2026: căn hộ — thanh khoản chọn lọc; đất nền — hấp thụ thấp; nghỉ dưỡng — trầm lắng",
        links: [
          {
            to: "/tin-tuc/he-so-k-gia-dat-da-nang-2026-dat-nen",
            label: "Hệ số K giá đất Đà Nẵng 2026: đất nền giảm giá",
          },
        ],
      },
      {
        heading: "Nghỉ dưỡng / condotel: gần như «ngủ đông»",
        text: "Nhóm bất động sản nghỉ dưỡng vẫn trầm lắng dù du lịch Đà Nẵng phục hồi. Quý II/2026, biệt thự nghỉ dưỡng tiêu thụ khoảng 9 căn trên 167 căn nguồn cung (~5% hấp thụ); nhà phố / shophouse nghỉ dưỡng hầu như không phát sinh giao dịch mới; condotel chỉ ghi nhận 1 giao dịch cả quý dù nguồn cung còn khoảng 1.234 căn. VietnamFinance (tháng 7) và các bài đăng lại DKRA tháng 7–8 mô tả nhà phố / shophouse nghỉ dưỡng gần như không giao dịch, condotel chủ yếu là hàng tồn kho (>99% ở một số kỳ báo cáo), vướng pháp lý và tiến độ kéo dài khiến nhà đầu tư thận trọng. Du lịch tăng là nền tảng tích cực cho dịch vụ và việc làm, nhưng chưa đủ để «đánh thức» thanh khoản nghỉ dưỡng trong ngắn hạn.",
      },
      {
        heading: "Tháng 7–8/2026: thanh khoản vẫn thấp, tháng 8 giảm trên diện rộng",
        text: "Sau nhịp Q2, các báo cáo tháng của DKRA cho thấy cả căn hộ và đất nền đều chịu áp lực: tháng 7 đất nền tăng giao dịch nhưng hấp thụ chỉ khoảng 3%, sang tháng 8 lượng tiêu thụ giảm mạnh. Tháng 8/2026: nguồn cung sơ cấp căn hộ giảm khoảng 23% so với tháng trước, hơn 94% đến từ tồn kho; lượng tiêu thụ căn hộ giảm khoảng 39% MoM và khoảng 26% so với cùng kỳ; Ngũ Hành Sơn vẫn dẫn đầu khoảng 39% nguồn cung và 63% tiêu thụ sơ cấp. Giá sơ cấp căn hộ đi ngang; giá thứ cấp giảm khoảng 1%. Bối cảnh chung: lãi suất vay mua nhà vẫn neo cao, tín dụng được kiểm soát thận trọng (theo DKRA). DKRA dự báo Q3/2026 nguồn cung căn hộ mới có thể chỉ khoảng 1.500–2.000 căn; đất nền nguồn cung mới khoảng 100–200 sản phẩm; thanh khoản tiếp tục chọn lọc theo pháp lý và uy tín chủ đầu tư.",
      },
      {
        heading: "Người mua ở thật nên đọc phân hóa thế nào?",
        text: "• Đừng lấy «căn hộ tăng 54%» làm bằng chứng toàn thị trường đã nóng trở lại — phần lớn giao dịch tập trung ở dự án mới / chủ lớn. • Đất nền hấp thụ ~4% là tín hiệu thận trọng: ưu tiên nhu cầu sử dụng thật và khả năng giữ vốn, không kỳ vọng thanh khoản nhanh. • Nghỉ dưỡng / condotel khác căn hộ nhà ở về pháp lý và dòng tiền vận hành — cần đọc kỹ loại hình sở hữu và điều kiện khai thác. • Tính khoản trả nợ ở kịch bản lãi thả nổi; giữ quỹ dự phòng. • Đối chiếu vị trí sống hằng ngày (việc làm, trường, biển, giao thông) trước khi nhìn tin vĩ mô hay giao dịch sơ cấp.",
        links: [
          {
            to: "/tin-tuc/chon-khu-o-da-nang-son-tra-hai-chau-ngu-hanh-son",
            label: "Chọn khu ở Đà Nẵng: Sơn Trà, Hải Châu hay Ngũ Hành Sơn?",
          },
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài: khác gì có thời hạn?",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Trong bối cảnh thanh khoản phân hóa, người mua để ở thường ưu tiên pháp lý rõ, loại hình nhà ở (không phải condotel), vị trí gần nhu cầu sống và khả năng thanh toán. The Camellia Sơn Trà là căn hộ sở hữu lâu dài: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; bàn giao dự kiến khoảng 2028. Để nhận bảng giá và phương án thanh toán đúng đợt, anh chị để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
        links: [
          {
            to: "/tin-tuc/gia-the-camellia-son-tra-tu-1-98-ty",
            label: "Giá The Camellia Sơn Trà từ 1,98 tỷ",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: DKRA Consulting — Báo cáo thị trường BĐS nhà ở TP. Đà Nẵng quý II/2026 (pdf dkra.vn) và các bài đăng lại / diễn đạt lại số liệu: Người Quan Sát (02/08/2026, theo Kiến thức Đầu tư), CafeF (16/07/2026); VietnamFinance về nhà phố / shophouse nghỉ dưỡng tháng 7/2026 (25/08/2026); báo chí dẫn DKRA tháng 8/2026 về đất nền (khoảng 11 nền) và căn hộ (tiêu thụ −39% MoM) — nhịp sống kinh doanh / thương trường. Infographic do website tổng hợp ý chính về sự phân hóa, không thêm tỷ lệ nào ngoài các nguồn đã nêu. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI), không phải ảnh thực tế dự án. Bài là tin thị trường tổng hợp trên website dự án; không phải thông cáo The Camellia / DKRA, không phải tư vấn đầu tư, không cam kết giá, lợi nhuận cho thuê hay thanh khoản. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "khong-gian-5-4m-can-ho-tang-3-the-camellia",
    date: "08.10.2026",
    title: "Tầng 3 The Camellia – chiều cao phần thô dự kiến 5,4m (*): nhiều lớp sống",
    description:
      "Căn hộ tầng 3 The Camellia Sơn Trà: chiều cao phần thô dự kiến 5,4m (*), thêm tầng lửng, góc làm việc, góc nghỉ. Giá từ 1,82 tỷ/căn; trong tuần lễ khai trương tặng 3 chỉ vàng đến 17/10/2026.",
    excerpt:
      "Chỉ 11 căn tầng 3 có chiều cao phần thô dự kiến 5,4m (*): thêm tầng lửng, góc làm việc, khu chơi trẻ. Tuần lễ khai trương tặng 3 chỉ vàng/giao dịch đến 17/10/2026, giá chỉ từ 1,82 tỷ/căn.",
    image: "/images/news-5-4m-og.jpg",
    imageAlt:
      "Poster căn hộ tầng 3 The Camellia Sơn Trà chiều cao phần thô dự kiến 5,4m: phòng khách trần cao với đèn chùm và ban công nhìn ra biển, tổng giá chỉ từ 1,82 tỷ",
    poster: "/images/news-5-4m-poster.webp",
    gallery: ["/images/news-5-4m-poster.webp"],
    galleryFit: "contain",
    body: [
      {
        text: "Một khoảng không cao, mở ra một cách sống riêng. Bộ sưu tập căn hộ tầng 3 tại The Camellia Sơn Trà có chiều cao phần thô dự kiến 5,4m (*) — một khoảng không đặc biệt để gia chủ tự định hình không gian sống theo cách của mình. Bộ sưu tập tầng 3 chỉ có 11 căn. Giá chỉ từ 1,82 tỷ/căn; trong tuần lễ khai trương tặng 3 chỉ vàng mỗi giao dịch, duy nhất đến 17/10/2026.",
      },
      {
        heading: "Một căn, nhiều lớp không gian",
        text: "Với chiều cao phần thô dự kiến 5,4m (*), một căn hộ có thể mở thành nhiều lớp sống. Thêm tầng lửng để tách khu ngủ riêng tư phía trên, giữ phòng khách thông tầng bên dưới. Bố trí góc làm việc yên tĩnh cho người làm từ xa. Dành một khu vui chơi cho trẻ mà không chiếm chỗ sinh hoạt chung. Và giữ lại một góc nghỉ đón gió, tùy hướng căn có thể nhìn về biển, để đọc sách, uống cà phê mỗi sáng. Mọi phương án cải tạo theo hồ sơ thiết kế và quy định của tòa nhà.",
        image: "/images/news-5-4m-poster.webp",
        imageAlt:
          "Poster căn hộ tầng 3 The Camellia Sơn Trà chiều cao phần thô dự kiến 5,4m: phòng khách trần cao với đèn chùm và ban công nhìn ra biển, tổng giá chỉ từ 1,82 tỷ",
      },
      {
        heading: "Không gian cao — rộng thoáng, đón nắng và gió biển",
        text: "Không gian cao cho cảm giác rộng thoáng ngay từ cửa vào, đón ánh sáng tự nhiên và gió biển Mân Thái. The Camellia Sơn Trà tọa lạc giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng, khoảng 200m tới biển Mân Thái, tựa bán đảo Sơn Trà. Dự án 469 căn, 25 tầng, sổ hồng sở hữu lâu dài; bàn giao dự kiến khoảng 2028. Xem thêm ba đặc quyền của BST tầng 3 và mặt bằng tiện ích trong bài giới thiệu bộ sưu tập.",
        links: [
          {
            to: "/tin-tuc/bst-can-ho-tang-3-the-camellia-11-can",
            label: "BST căn hộ tầng 3 The Camellia: chỉ 11 căn, phần thô cao dự kiến 5,4m",
          },
        ],
      },
      {
        heading: "Đặc quyền tuần lễ khai trương — đến 17/10/2026",
        text: "Tặng 3 chỉ vàng mỗi giao dịch, duy nhất đến hết ngày 17/10/2026. Giá chỉ từ 1,82 tỷ/căn, kèm: hỗ trợ lãi suất vay 70%, lên đến 18 tháng; chiết khấu tới 13% khi chọn phương án thanh toán sớm; phương án “Thảnh thơi” chỉ thanh toán 50% đến khi nhận nhà; chiết khấu mua chung lên tới 3%; Member Get Member — khách đã mua giới thiệu khách mới được tặng 1 chỉ vàng, khách mua mới hoặc mua thêm được tặng 1 chỉ vàng + chiết khấu 1%; miễn phí quản lý 12 tháng. Ưu đãi và điều kiện theo chính sách đợt tại thời điểm ký.",
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "Căn hộ tầng 3 The Camellia cao bao nhiêu? Chiều cao phần thô dự kiến 5,4m (*). Có bao nhiêu căn như vậy? Chỉ 11 căn. Có làm được tầng lửng không? Khoảng không cho phép bố trí thêm tầng lửng, góc làm việc hay khu chơi trẻ — phương án cụ thể theo hồ sơ thiết kế từng căn. Ưu đãi khai trương kéo dài đến khi nào? Quà tặng 3 chỉ vàng/giao dịch áp dụng đến hết 17/10/2026; giá từ 1,82 tỷ/căn và các chính sách khác theo bảng giá đợt tại thời điểm ký.",
      },
      {
        heading: "Gặp Nhật — nhận bảng giá tuần lễ khai trương",
        text: "Anh chị muốn xem mặt bằng 11 căn tầng 3 và ý tưởng bố trí theo chiều cao phần thô dự kiến 5,4m (*), hãy gọi 0934 885 108 gặp Nhật tư vấn trực tiếp và nhận bảng giá chi tiết; Zalo cùng số; hoặc để lại nhu cầu tại trang Liên hệ. Đặt lịch xem sa bàn tại Camellia Gallery — Tầng 9 Bạch Đằng Complex, để không lỡ ưu đãi trước 17/10/2026.",
        links: [
          { to: "/lien-he", label: "Liên hệ — gặp Nhật nhận bảng giá" },
          { to: "/can-ho", label: "Xem mặt bằng & loại căn" },
        ],
      },
      {
        heading: "Lưu ý",
        text: "(*) Chiều cao phần thô dự kiến; chiều cao thông thủy thực tế theo hồ sơ thiết kế và bàn giao. Giá đã áp dụng chiết khấu theo phương thức thanh toán; giá, quà tặng và chính sách theo bảng giá đợt tại thời điểm ký. Ảnh trong bài là hình ảnh minh họa. CĐT Công ty TNHH Địa ốc Thành Lâm · phát triển MBLAND · kinh doanh WELAND · phân phối DKRA Virgo. Không cam kết lợi nhuận.",
      },
    ],
  },

  {
    slug: "son-tra-phuong-do-thi-so-2030-doi-moi-sang-tao",
    date: "08.10.2026",
    title:
      "Sơn Trà hướng tới phường đô thị số năm 2030: mã QR đa ngôn ngữ, 85% hồ sơ trực tuyến và khu vực đổi mới sáng tạo ven biển",
    excerpt:
      "Ngày 03–04/10/2026, phường Sơn Trà công bố dự thảo Đề án chuyển đổi số 2026–2030 và định hướng Khu vực đổi mới sáng tạo ven biển. Tóm tắt các mục tiêu chính và những gì cư dân, du khách có thể thấy trong vài năm tới — tin địa phương, không phải thông cáo The Camellia.",
    image: "/images/news-dothiso-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): người dân và du khách quét mã QR thanh toán tại quầy ăn ven biển Sơn Trà, phía sau là núi Sơn Trà",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-dothiso-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-dothiso-hero.webp",
      "/images/news-dothiso-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Trong khuôn khổ Lễ hội Đổi mới sáng tạo Sơn Trà 2026 (SIF 2026, 03–04/10 tại Wyndham Danang Golden Bay, số 01 Lê Văn Duyệt), UBND phường Sơn Trà đã đưa ra lấy ý kiến hai đề án dài hạn: Đề án «Chuyển đổi số góp phần thúc đẩy, tạo động lực phát triển kinh tế – xã hội phường Sơn Trà giai đoạn 2026–2030, định hướng đến năm 2035» và Đề án thành lập Khu vực đổi mới sáng tạo phường Sơn Trà. Bài dưới đây tóm tắt các mục tiêu đã được Cổng thông tin điện tử TP Đà Nẵng và VTV8 đăng tải, kèm gợi ý cư dân, du khách có thể thấy gì trong thực tế. Lưu ý: đây là dự thảo đang lấy ý kiến, chưa phải kết quả đã đạt; bài là tin địa phương tổng hợp, không phải thông báo của UBND phường và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Đến 2030, phường Sơn Trà hướng tới trở thành «phường đô thị số tiêu biểu» của Đà Nẵng, quản trị dựa trên dữ liệu và kết nối Trung tâm Giám sát, điều hành thông minh của thành phố. • Dịch vụ công: 100% hồ sơ thủ tục hành chính được số hóa; 85% hồ sơ phát sinh được xử lý trực tuyến toàn trình. • Kinh tế số: 95% hộ kinh doanh, cơ sở dịch vụ nhận thanh toán không dùng tiền mặt; 75% hộ kinh doanh, doanh nghiệp nhỏ và vừa có hiện diện số cơ bản. • Du lịch: 100% điểm du lịch, di tích, điểm công cộng có mã QR thông tin đa ngôn ngữ; xây dựng Bản đồ số tiện ích – du lịch Sơn Trà. • Đổi mới sáng tạo: đến 2030 thu hút tối thiểu 50 doanh nghiệp, dự án khởi nghiệp sáng tạo; từ 2027 mỗi năm tối thiểu 10 sự kiện kết nối.",
      },
      {
        heading: "Chính quyền số: thủ tục hành chính trên môi trường mạng",
        text: "Theo dự thảo được giới thiệu tại hội thảo sáng 04/10 do UBND phường Sơn Trà phối hợp Trường Đại học Duy Tân tổ chức, đến năm 2030 phường đặt mục tiêu 100% văn bản, hồ sơ công việc đủ điều kiện được xử lý trên môi trường số; 100% hồ sơ thủ tục hành chính được số hóa đầu vào và kết quả; tỷ lệ hồ sơ trực tuyến toàn trình phát sinh đạt 85%; 100% bộ phận chuyên môn sử dụng ít nhất một công cụ trí tuệ nhân tạo hỗ trợ công vụ. Lãnh đạo phường nhấn mạnh chuyển đổi số không chỉ là đưa công nghệ vào cơ quan nhà nước, mà là đổi mới cách quản trị và cách chính quyền tương tác với người dân, doanh nghiệp. Với cư dân, kết quả dễ thấy nhất nếu đề án được triển khai là nhiều thủ tục có thể nộp và nhận kết quả trực tuyến, giảm số lần phải đến trụ sở.",
      },
      {
        heading: "Kinh tế số và du lịch: QR đa ngôn ngữ, bản đồ số, camera AI",
        text: "Ở mảng kinh tế số, dự thảo đặt mục tiêu 95% hộ kinh doanh, cơ sở dịch vụ chấp nhận thanh toán không dùng tiền mặt và 75% hộ kinh doanh, doanh nghiệp nhỏ và vừa có hiện diện số cơ bản; đồng thời hỗ trợ số hóa, truy xuất nguồn gốc và quảng bá trực tuyến sản phẩm đặc trưng địa phương. Với đặc thù đô thị du lịch biển, phường đề xuất 100% điểm du lịch, di tích, điểm công cộng có mã QR thông tin số đa ngôn ngữ, xây dựng Bản đồ số tiện ích – du lịch Sơn Trà, và ứng dụng AI, công nghệ mới như trợ lý ảo, phân tích – dự báo xu hướng khách du lịch, camera AI phục vụ giám sát an ninh trật tự, trật tự đô thị, môi trường, cùng cảm biến IoT quan trắc chất lượng nước, môi trường biển. Đây là các đề xuất trong dự thảo — lộ trình, kinh phí và đơn vị triển khai cụ thể sẽ theo quyết định chính thức sau này.",
        image: "/images/news-dothiso-body.webp",
        imageAlt:
          "Infographic tổng hợp mục tiêu dự thảo đề án chuyển đổi số phường Sơn Trà đến 2030: 85% hồ sơ trực tuyến toàn trình, 95% hộ kinh doanh nhận thanh toán không tiền mặt, 100% điểm du lịch có mã QR đa ngôn ngữ, tối thiểu 50 doanh nghiệp khởi nghiệp sáng tạo",
      },
      {
        heading: "Khu vực đổi mới sáng tạo «cửa ngõ ven biển»",
        text: "Theo VTV8 (03/10/2026), Đề án khu vực Đổi mới sáng tạo Sơn Trà giai đoạn 2026–2030, tầm nhìn 2035 hướng tới hình thành khu vực đổi mới sáng tạo cửa ngõ ven biển có thương hiệu trong khu vực ASEAN. Khu vực lõi dự kiến được xác định trên các tuyến Lê Văn Duyệt, Trần Hưng Đạo, Trần Sâm, Nguyễn Hữu An, Lê Đức Thọ, Nguyễn Đình Hoàn, Khúc Thừa Dụ và vùng phụ cận đầu cầu Thuận Phước phía bờ Đông. Mục tiêu đến 2030: tối thiểu 50 doanh nghiệp, dự án khởi nghiệp sáng tạo hoạt động tại khu vực, trong đó tối thiểu 20% do người nước ngoài sáng lập hoặc đầu tư; mỗi năm ít nhất một «đề bài đặt hàng» và tối thiểu ba giải pháp được thử nghiệm, ứng dụng tại địa phương. Từ 2027, dự kiến mỗi năm có tối thiểu 10 sự kiện kết nối (ít nhất hai sự kiện quốc tế) và đào tạo tối thiểu 2.000 lượt người dân, hộ kinh doanh, ngư dân về công nghệ, chuyển đổi số. SIF 2026 có hơn 20 gian hàng AI, robot, chuyển đổi số; Phó Chủ tịch UBND TP Hồ Quang Bửu dự khai mạc.",
        links: [
          {
            to: "/tin-tuc/le-hoi-doi-moi-sang-tao-son-tra-sif-2026",
            label: "Tin trước sự kiện: Lễ hội Đổi mới sáng tạo Sơn Trà SIF 2026",
          },
          {
            to: "/tin-tuc/luu-y-len-ban-dao-son-tra-thang-10-2026",
            label: "Lên bán đảo Sơn Trà tháng 10/2026: giờ tham quan và lưu ý",
          },
        ],
      },
      {
        heading: "Đọc tin này thế nào cho tỉnh táo?",
        text: "1) Đây là dự thảo đề án cấp phường đang lấy ý kiến chuyên gia, doanh nghiệp, cộng đồng — các con số là mục tiêu đến 2030, không phải hiện trạng. 2) Danh sách tuyến đường của khu vực lõi là «dự kiến»; ranh giới chính thức chưa được công bố chi tiết. 3) Chuyển đổi số chủ yếu tác động đến chất lượng dịch vụ công, trải nghiệm du lịch và môi trường kinh doanh — bài không suy diễn tác động lên giá bất động sản. Người quan tâm nên theo dõi văn bản chính thức của UBND phường Sơn Trà và TP Đà Nẵng.",
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Với người đang sống hoặc tìm chỗ ở lâu dài tại Sơn Trà, một phường đặt mục tiêu dịch vụ công trực tuyến, thanh toán số và điểm đến du lịch được quản lý bằng dữ liệu là thông tin hữu ích để hình dung nhịp sống hằng ngày. Trong danh sách tuyến dự kiến của khu vực đổi mới sáng tạo có đường Lê Đức Thọ — cũng là trục giao lộ nơi The Camellia Sơn Trà nằm (Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà); tuy vậy ranh giới cụ thể chưa được công bố và bài không xem đây là cam kết về hạ tầng hay giá trị. Theo thông tin dự án, The Camellia cách biển Mân Thái khoảng 200 m và Bán đảo Sơn Trà khoảng 5 phút; 469 căn hộ sở hữu lâu dài, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex (Đà Nẵng) để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài",
          },
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao The Camellia gần biển Mân Thái?",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: Cổng thông tin điện tử TP Đà Nẵng (danang.gov.vn) — «Sơn Trà mở không gian kết nối, đưa đổi mới sáng tạo vào thực tiễn» (03/10/2026) và «Sơn Trà định hình mô hình phường đô thị số đến năm 2030» (04/10/2026); VTV8 — «Khởi động không gian đổi mới sáng tạo Sơn Trà» (03/10/2026). Các mục tiêu thuộc dự thảo đề án, có thể được điều chỉnh khi ban hành chính thức. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI), không phải ảnh thực tế; infographic do website tổng hợp từ các nguồn trên. Bài là tin địa phương tổng hợp, không phải thông báo của UBND phường Sơn Trà, không phải thông cáo dự án và không cam kết tăng giá BĐS. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "da-nang-9-thang-2026-du-lich-fdi-thi-truong-can-ho",
    date: "07.10.2026",
    title:
      "Đà Nẵng 9 tháng 2026: khách lưu trú tăng 26%, vốn FDI tăng mạnh — người mua căn hộ nên đọc số liệu thế nào?",
    excerpt:
      "Đà Nẵng đón khoảng 15,86 triệu lượt khách lưu trú (+26,4%) và thu hút khoảng 681,55 triệu USD vốn FDI trong 9 tháng 2026. Bài tổng hợp số liệu công bố, phân tích con số nào thực sự liên quan đến nhu cầu nhà ở và những điểm cần thận trọng — tin thị trường, không phải thông cáo The Camellia.",
    image: "/images/news-dulich-fdi-og.jpg",
    imageAlt:
      "Hình ảnh minh họa (tạo bằng AI): bờ sông Hàn Đà Nẵng lúc hoàng hôn, cầu Rồng và các tòa nhà ven sông, du khách đi dạo",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-dulich-fdi-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-dulich-fdi-hero.webp",
      "/images/news-dulich-fdi-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Đầu tháng 10/2026, UBND TP Đà Nẵng công bố tình hình kinh tế – xã hội 9 tháng: du lịch tiếp tục tăng mạnh, vốn đầu tư trong nước và nước ngoài đều tăng cao so với cùng kỳ. Với người đang tìm hiểu căn hộ ở Đà Nẵng, những con số này nghe rất tích cực — nhưng không phải con số nào cũng chuyển ngay thành nhu cầu ở thật hay thanh khoản. Bài dưới đây tổng hợp số liệu từ các nguồn công bố và gợi ý cách đọc chúng một cách tỉnh táo — mang tính tin thị trường, không phải tư vấn đầu tư và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• 9 tháng 2026, cơ sở lưu trú tại Đà Nẵng phục vụ khoảng 15,86 triệu lượt khách (+26,4%), trong đó khách quốc tế khoảng 7,73 triệu lượt (+28,7%). • Doanh thu lưu trú, ăn uống và lữ hành 9 tháng khoảng 56.973 tỷ đồng (+25,42%). • Lũy kế 9 tháng vốn FDI thu hút khoảng 681,55 triệu USD, tăng khoảng 186,6%; vốn đầu tư trong nước khoảng 185.760 tỷ đồng. • GRDP 9 tháng tăng 10,31%, vẫn thấp hơn kịch bản (mục tiêu cả năm 11,22%). • Trong khi đó, thanh khoản căn hộ tháng 8/2026 còn chậm: tỷ lệ hấp thụ sơ cấp khoảng 21% (DKRA). Tín hiệu vĩ mô tốt là nền, nhưng quyết định mua vẫn nên dựa trên nhu cầu ở và dòng tiền của chính mình.",
      },
      {
        heading: "Du lịch: khách đông hơn, ở lâu hơn một chút",
        text: "Theo số liệu thống kê được Báo Văn hóa và VietnamPlus dẫn lại, trong 9 tháng 2026 lượng khách ngủ qua đêm tại Đà Nẵng đạt khoảng 14,43 triệu lượt (+29,6%). Thời gian lưu trú bình quân khoảng 1,84 ngày/lượt; khách quốc tế ở bình quân khoảng 2 ngày/lượt, nhỉnh hơn cùng kỳ khoảng 0,1 ngày. Doanh thu lưu trú, ăn uống ước khoảng 52.945 tỷ đồng (+26,2%), trong đó lưu trú khoảng 16.939 tỷ đồng. Thành phố cũng đẩy các phân khúc giá trị cao như du lịch cưới quốc tế (40 sự kiện trong 8 tháng) và MICE — riêng tháng 8/2026 đón 29 đoàn với khoảng 7.574 lượt khách. Với thị trường nhà ở, khách du lịch chủ yếu tạo nhu cầu lưu trú ngắn ngày (khách sạn, căn hộ dịch vụ); nhu cầu này có ích cho dịch vụ và việc làm của thành phố, nhưng không đồng nghĩa mọi căn hộ đều cho thuê được giá tốt.",
      },
      {
        heading: "Vốn FDI và Khu thương mại tự do: động lực trung – dài hạn",
        text: "Báo cáo tại phiên họp UBND thành phố ngày 05/10/2026 nêu lũy kế 9 tháng vốn FDI thu hút khoảng 681,55 triệu USD, tăng khoảng 186,6% so với cùng kỳ; tổng vốn đầu tư thực hiện toàn xã hội hơn 88 nghìn tỷ đồng (+42,25%). Số liệu chi tiết của Thống kê thành phố đến ngày 20/8 cho thấy 100 dự án FDI cấp mới với khoảng 522 triệu USD và 38 dự án điều chỉnh tăng khoảng 142 triệu USD. Song song, Khu thương mại tự do Đà Nẵng — mô hình đầu tiên được thí điểm theo Quyết định 1142 của Thủ tướng, quy mô khoảng 1.831 ha gồm 7 khu chức năng — được định hướng gắn với cảng Liên Chiểu, Khu công nghệ cao và Trung tâm Tài chính Quốc tế tại Đà Nẵng; tháng 8/2026 thành phố đã khởi động dự án hơn 1.568 tỷ đồng tại vị trí số 02 của khu này. Dòng vốn sản xuất, công nghệ, logistics, tài chính nếu đi vào vận hành sẽ kéo theo chuyên gia, kỹ sư và người lao động cần chỗ ở dài hạn — nhưng đó là quá trình tính bằng năm, không phải vài tháng.",
        image: "/images/news-dulich-fdi-body.webp",
        imageAlt:
          "Infographic số liệu Đà Nẵng 9 tháng 2026: 15,86 triệu lượt khách lưu trú (+26,4%), 7,73 triệu khách quốc tế (+28,7%), FDI khoảng 681,55 triệu USD, GRDP tăng 10,31% — kèm lưu ý đọc số liệu trước khi mua nhà",
      },
      {
        heading: "Ba điểm cần thận trọng khi đọc số liệu",
        text: "1) Tăng trưởng chưa đạt kịch bản: GRDP 9 tháng tăng 10,31% so với mục tiêu cả năm 11,22%, thành phố phải đặt mục tiêu quý IV tăng khoảng 13,61%. 2) Thu ngân sách tăng mạnh nhờ nhà, đất là khoản có tính thời điểm: tính đến ngày 25/8, các khoản thu liên quan đến nhà, đất chiếm gần 39,7% tổng thu và bằng khoảng 5,2 lần cùng kỳ; chính Thống kê thành phố lưu ý khoản này phụ thuộc tiến độ giao đất, triển khai dự án và diễn biến thị trường nên có thể biến động. 3) Thanh khoản căn hộ chưa theo kịp tin vĩ mô: báo cáo DKRA tháng 8/2026 ghi nhận khoảng 570 căn được tiêu thụ, giảm 39% so với tháng trước, tỷ lệ hấp thụ sơ cấp khoảng 21%, trong bối cảnh lãi vay mua nhà phổ biến trên 10%/năm. Vì vậy, đừng coi «du lịch tăng, FDI tăng» là bảo đảm giá nhà sẽ tăng hay căn hộ sẽ cho thuê kín.",
        links: [
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà vượt 10%: tính dòng tiền thế nào?",
          },
          {
            to: "/tin-tuc/he-so-k-gia-dat-da-nang-2026-dat-nen",
            label: "Hệ số K giá đất Đà Nẵng 2026: đất nền giảm giá",
          },
        ],
      },
      {
        heading: "Người mua ở thật nên làm gì với những con số này?",
        text: "• Xem nhu cầu ở của gia đình trước, tín hiệu vĩ mô sau: khoảng cách đến nơi làm việc, trường học, bệnh viện, biển và hạ tầng giao thông hằng ngày. • Nếu tính thêm phương án cho thuê, hãy giả định thận trọng (có tháng trống, phí quản lý, chi phí nội thất) thay vì lấy lượng khách du lịch làm căn cứ. • Kiểm tra pháp lý dự án (chủ trương đầu tư, quy hoạch 1/500, điều kiện bán nhà hình thành trong tương lai) và thời hạn sở hữu. • Tính khoản trả nợ ở kịch bản lãi thả nổi, giữ quỹ dự phòng. • Theo dõi tiến độ thực tế của các dự án hạ tầng, Khu thương mại tự do — tin khởi công khác với ngày vận hành.",
        links: [
          {
            to: "/tin-tuc/chon-khu-o-da-nang-son-tra-hai-chau-ngu-hanh-son",
            label: "Chọn khu ở Đà Nẵng: Sơn Trà, Hải Châu hay Ngũ Hành Sơn?",
          },
          {
            to: "/tin-tuc/mo-rong-duong-ven-bien-son-tra-hoi-an-2026",
            label: "Mở rộng đường ven biển Sơn Trà – Hội An",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Sơn Trà là khu vực gần biển và bán đảo — nơi du khách quốc tế thường lui tới — nhưng với người mua để ở, điều đáng cân nhắc vẫn là pháp lý, vị trí và khả năng thanh toán. The Camellia Sơn Trà là căn hộ sở hữu lâu dài: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; bàn giao dự kiến khoảng 2028. Chính sách bán hàng trên website gồm các phương án HTLS, Chuẩn, TTS và Thảnh thơi — điều kiện áp dụng theo chính sách đợt tại thời điểm ký. Để nhận bảng giá và phương án thanh toán đúng đợt, anh chị để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex (Da Nang Complex), Đà Nẵng.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài",
          },
          {
            to: "/tin-tuc/gia-the-camellia-son-tra-tu-1-98-ty",
            label: "Giá The Camellia Sơn Trà từ 1,98 tỷ",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: Cổng thông tin TP Đà Nẵng (danang.gov.vn) — «GRDP 9 tháng tăng 10,31%, tập trung tăng tốc trong quý IV» (phiên họp UBND TP ngày 05/10/2026) và «Thu hút đầu tư khởi sắc, thu ngân sách tăng cao» (số liệu Thống kê thành phố đến 20–25/8/2026); Báo Văn hóa và VietnamPlus về du lịch Đà Nẵng 9 tháng 2026; VietnamPlus về Khu thương mại tự do Đà Nẵng gắn Trung tâm Tài chính Quốc tế; báo cáo thị trường nhà ở Đà Nẵng tháng 8/2026 của DKRA theo Tạp chí Doanh nghiệp và Thương mại. Infographic do website tổng hợp từ số liệu trên, làm tròn. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI), không phải ảnh thực tế dự án. Bài không phải tư vấn đầu tư, không cam kết giá, lợi nhuận cho thuê hay thanh khoản. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "bst-can-ho-tang-3-the-camellia-11-can",
    date: "06.10.2026",
    title: "BST căn hộ tầng 3 The Camellia: chỉ 11 căn, phần thô cao dự kiến 5,4m",
    excerpt:
      "Bộ sưu tập căn hộ tầng 3 The Camellia: chỉ 11 căn, chiều cao phần thô dự kiến 5,4m (*), ngoài cửa là bể bơi–gym–kid club. Tổng giá chỉ từ 1,72 tỷ. Gặp Nhật 0934 885 108.",
    image: "/images/news-tang-3-og.jpg",
    imageAlt:
      "Poster Bộ sưu tập căn hộ tầng 3 The Camellia Sơn Trà — giới hạn 11 căn, chiều cao phần thô dự kiến 5,4m (*)",
    poster: "/images/news-tang-3-hero.webp",
    gallery: [
      "/images/news-tang-3-hero.webp",
      "/images/news-tang-3-mat-bang.webp",
      "/images/news-tang-3-can-1pn.webp",
    ],
    galleryFit: "contain",
    body: [
      {
        text: "Dành riêng cho những tâm hồn thích sự tự do và trải nghiệm, Bộ sưu tập căn hộ tầng 3 tại The Camellia Sơn Trà mang đến một không gian sống hội tụ ba đặc quyền khác biệt — quỹ giới hạn chỉ 11 căn. Với chiều cao phần thô dự kiến 5,4m (*), không gian sát tiện ích nội khu ngay ngoài cửa, tổng giá chỉ từ 1,72 tỷ. Dự án 469 căn, 25 tầng nổi & 2 hầm, sổ hồng sở hữu lâu dài, giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng; khoảng 200m tới biển Mân Thái. CĐT Công ty TNHH Địa ốc Thành Lâm · phát triển MBLAND · kinh doanh WELAND · phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028.",
      },
      {
        heading: "Ba đặc quyền trải nghiệm không giới hạn",
        text: "Một khoảng sống riêng: số lượng giới hạn chỉ 11 căn, mật độ cư dân thấp, riêng tư, hành lang và không gian chung tĩnh lặng. Một khoảng cao rộng mở: chiều cao phần thô dự kiến 5,4m (*), thoáng đón nắng gió biển, có thể thiết kế thêm tầng lửng tăng diện tích sử dụng. Một nhịp sống tiện nghi: không chờ thang máy — ngay ngoài cửa là bể bơi, vườn cảnh quan, Kid Club, Gym & Yoga.",
      },
      {
        heading: "Mặt bằng tầng 3 — căn ở xen tiện ích",
        text: "Tầng 3 bố trí Studio, 1PN+1, 2PN 2VS và 3PN xen các tiện ích: vườn cảnh quan, gym, yoga/dancing studio, event/party ballroom, gaming room, kid club, bể bơi, sảnh lễ tân bể bơi, bể vầy trẻ em, WC–locker nam/nữ và khu ghế thư giãn. Hướng view theo mặt bằng: Núi Sơn Trà, Chùa Linh Ứng, Biển Sơn Trà, Biển Mân Thái; tiếp cận Lê Văn Lương và Lê Đức Thọ.",
        image: "/images/news-tang-3-mat-bang.webp",
        imageAlt:
          "Mặt bằng tầng 3 The Camellia Sơn Trà: căn hộ xen tiện ích bể bơi, gym, kid club, hướng Núi Sơn Trà và biển Mân Thái",
      },
      {
        heading: "Chiều cao phần thô dự kiến 5,4m (*) — không gian linh hoạt, đầy cảm hứng",
        text: "Chiều cao phần thô dự kiến 5,4m (*) giúp căn hộ cảm giác rộng thoáng và mở ra khả năng thiết kế tầng lửng tăng diện tích sử dụng. Ảnh căn 1PN+ trong gallery là hình ảnh minh họa phong cách không gian cao có tầng lửng — anh chị đối chiếu mặt bằng và hồ sơ kỹ thuật theo từng mã căn khi tư vấn.",
        image: "/images/news-tang-3-can-1pn.webp",
        imageAlt:
          "Minh họa không gian căn trần cao có tầng lửng tại The Camellia Sơn Trà — hình ảnh minh họa, không phải mặt bằng mã căn cụ thể",
      },
      {
        heading: "Sở hữu ngay — ưu đãi theo đợt",
        text: "Tổng giá chỉ từ 1,72 tỷ, kèm ưu đãi: hỗ trợ lãi suất vay đến 70% lên đến 18 tháng; chiết khấu 4% phương án thanh toán chuẩn; chiết khấu 13% thanh toán sớm; chiết khấu 2% phương án Thảnh thơi 50% nhận bàn giao; miễn phí quản lý 12 tháng. Ưu đãi và điều kiện theo chính sách đợt tại thời điểm ký.",
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "BST căn hộ tầng 3 có bao nhiêu căn? Chỉ 11 căn. Chiều cao phần thô dự kiến bao nhiêu? Chiều cao phần thô dự kiến 5,4m (*). Tiện ích có ngay tầng không? Có — bể bơi, vườn cảnh quan, Kid Club, Gym & Yoga ngay ngoài cửa. Tổng giá thế nào? Tổng giá chỉ từ 1,72 tỷ. Tư vấn ở đâu? 0934 885 108 gặp Nhật · Zalo cùng số · trang Liên hệ · Camellia Gallery Tầng 9 Bạch Đằng Complex.",
      },
      {
        heading: "Gặp Nhật — nhận bảng giá chi tiết",
        text: "Anh chị quan tâm Bộ sưu tập căn hộ tầng 3 hãy gọi hoặc nhắn 0934 885 108 gặp Nhật tư vấn trực tiếp và nhận bảng giá chi tiết; Zalo cùng số; hoặc để lại nhu cầu tại trang Liên hệ. Có thể đặt lịch xem sa bàn tại Camellia Gallery — Tầng 9 Bạch Đằng Complex.",
        links: [
          { to: "/lien-he", label: "Liên hệ — gặp Nhật nhận bảng giá" },
          { to: "/can-ho", label: "Xem mặt bằng & loại căn" },
          {
            to: "/tin-tuc/chinh-sach-ban-hang-htls-early-bird-chiet-khau",
            label: "Chính sách bán hàng",
          },
        ],
      },
      {
        heading: "Lưu ý / nguồn",
        text: "Nguồn: thông tin Bộ sưu tập căn hộ tầng 3 và mặt bằng tầng 3 do đơn vị phát triển kinh doanh / phân phối cung cấp; số liệu dự án (469 căn, 25 tầng, sổ hồng lâu dài, vị trí, CĐT · MBLAND · WELAND · DKRA Virgo, bàn giao khoảng 2028) bám thecamellia-sontra.com. Giá đã áp dụng chiết khấu theo phương thức thanh toán; giá và chính sách theo bảng giá đợt tại thời điểm ký. Không cam kết lợi nhuận. Bài không thay thế hồ sơ pháp lý hay HĐMB chính thức. (*) Chiều cao phần thô dự kiến.",
      },
    ],
  },

  {
    slug: "luu-y-len-ban-dao-son-tra-thang-10-2026",
    date: "06.10.2026",
    title:
      "Lên bán đảo Sơn Trà tháng 10/2026: giờ tham quan đến 17h30, cấm cho khỉ ăn và lưu ý mùa mưa",
    excerpt:
      "Từ tháng 10, giờ tham quan bán đảo Sơn Trà là 7h30–17h30; Ban Quản lý vừa đặt 12 biển cảnh báo không cho khỉ ăn, phường Sơn Trà tăng tuần tra đỗ xe ở Miếu Đôi, Lê Văn Lương, Hoàng Sa. Tóm tắt tuyến, phương tiện được phép và lưu ý mưa lớn — tin địa phương, không phải thông cáo The Camellia.",
    image: "/images/news-bandao-og.jpg",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-bandao-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-bandao-hero.webp",
      "/images/news-bandao-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Đầu tháng 10/2026, bán đảo Sơn Trà — «lá phổi xanh» của Đà Nẵng — có thêm loạt nhắc nhở mới từ cơ quan quản lý: biển cảnh báo không cho khỉ ăn, tăng tuần tra dừng đỗ xe, cùng khung giờ tham quan mùa thấp điểm bắt đầu từ tháng 10. Bài dưới đây tổng hợp thông tin Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng (BQL) và UBND phường Sơn Trà được báo chí đăng tải, để cư dân và du khách tiện tra cứu trước khi lên bán đảo. Đây là tin địa phương tổng hợp, không phải thông báo của cơ quan quản lý và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Giờ tham quan từ tháng 10 đến hết tháng 2: 7h30–17h30 (tháng 3–9: 7h30–18h30); có thể tạm dừng khi có cảnh báo thời tiết nguy hiểm. • Tuyến được phép: Yết Kiêu – đỉnh Bàn Cờ – bãi Bắc và ngã ba bãi Bắc – Cây đa Di sản (chỉ đi bộ); tuyến Tiên Sa – suối Ôm – đỉnh Bàn Cờ tạm dừng để khắc phục hậu quả mưa bão (theo BQL, tháng 8/2026). • Ngày 04/10, BQL cho biết đã đặt 12 biển cảnh báo quanh bán đảo, đề nghị không cho khỉ ăn, không tiếp xúc gần động vật hoang dã. • Phường Sơn Trà tăng tuần tra, xử lý dừng đỗ xe trái quy định ở Miếu Đôi, đường Lê Văn Lương và đường Hoàng Sa. • Không tham gia tour trekking, quan sát động vật hoang dã tự phát vào rừng đặc dụng. • Dự báo mưa lớn ở Đà Nẵng từ 06/10, có thể kéo dài đến khoảng 10–11/10 — nên theo dõi thông báo trước khi đi.",
      },
      {
        heading: "12 biển cảnh báo: «Hãy dừng ngay hành động cho khỉ ăn»",
        text: "Theo Thanh Niên và Báo Văn Hóa (04/10/2026), BQL đã đặt 12 biển cảnh báo khổ lớn quanh bán đảo với nội dung «Hãy dừng ngay hành động cho khỉ ăn. Hãy tôn trọng đời sống hoang dã của loài khỉ». BQL giải thích việc cho khỉ ăn làm thay đổi tập tính kiếm ăn tự nhiên, dễ gây bệnh cho động vật, khiến khỉ tiếp cận gần đường giao thông, khu dân cư và tăng nguy cơ tấn công người. Trước đó, chiều 02/10, mạng xã hội lan truyền clip một người đàn ông đổ trái cây, bánh cho bầy khỉ tại khu vực ngã ba Lê Văn Lương – Hoàng Sa rồi bỏ lại túi ni lông trên bãi cỏ. Chiều 03/10, lực lượng chức năng phường Sơn Trà đã nhắc nhở, xử phạt nhiều phương tiện dừng đỗ lấn chiếm lòng đường trên bán đảo, trong đó có trường hợp để xe dưới lòng đường để chụp ảnh, tiếp xúc gần bầy khỉ. Thông điệp BQL gửi cộng đồng: «Yêu Sơn Trà không phải là cho khỉ ăn, mà là để chúng được sống đúng với tự nhiên».",
      },
      {
        heading: "Giờ, tuyến và phương tiện được phép",
        text: "Theo phương án quản lý do UBND TP Đà Nẵng ban hành (VietnamPlus 17/08/2026, Báo Công an Đà Nẵng 18/08/2026): từ tháng 10 đến hết tháng 2 năm sau, giờ tham quan là 7h30–17h30; từ tháng 3 đến hết tháng 9 là 7h30–18h30. Tuyến Yết Kiêu – đỉnh Bàn Cờ cho phép phương tiện lưu thông, trừ xe tay ga và ô tô trên 24 chỗ; đoạn đỉnh Bàn Cờ – ngã ba bãi Bắc (trước cổng InterContinental) lưu thông một chiều theo hướng Bàn Cờ đi bãi Bắc, trừ xe đạp, xe tay ga và ô tô trên 24 chỗ. Tuyến ngã ba bãi Bắc – Cây đa Di sản chỉ dành cho người đi bộ. Tuyến Tiên Sa – suối Ôm – đỉnh Bàn Cờ (dành cho xe đạp, xe máy — trừ xe tay ga — và người đi bộ) đang tạm dừng để khắc phục hậu quả sau mùa mưa bão theo thông tin BQL tháng 8/2026 — nên kiểm tra lại trạng thái trước khi đi.",
        image: "/images/news-bandao-body.webp",
        imageAlt:
          "Infographic tổng hợp: giờ tham quan bán đảo Sơn Trà tháng 10 (7:30–17:30), tuyến được phép, phương tiện hạn chế và khuyến cáo không cho khỉ ăn — theo thông tin BQL bán đảo Sơn Trà và UBND phường Sơn Trà trên báo chí",
      },
      {
        heading: "Không đi trekking tự phát vào rừng đặc dụng",
        text: "Ngày 10/09/2026, BQL khuyến cáo người dân, du khách không đăng ký, mua hoặc tham gia tour trekking, du lịch sinh thái, quan sát động vật hoang dã tự phát vào rừng đặc dụng Sơn Trà, đặc biệt là vào ban đêm (Dân Việt, Công Luận). Lý do: Khu bảo tồn thiên nhiên Sơn Trà hiện chưa được phê duyệt Đề án du lịch sinh thái, nghỉ dưỡng, giải trí, nên việc tự ý đưa khách vào lâm phận rừng đặc dụng khi chưa được cho phép là trái quy định. BQL cũng nhắc đã có các vụ lạc đường, tai nạn, đuối nước khi người dân, du khách tự đi theo đường mòn, lối mở tại Hục Lỡ, bãi Đá Đen, Mũi Nghê — địa hình nhiều vách đá, dốc và chịu tác động trực tiếp của sóng gió.",
      },
      {
        heading: "Mùa mưa: theo dõi thời tiết trước khi lên bán đảo",
        text: "Theo Trung tâm Dự báo khí tượng thủy văn quốc gia (BNEWS dẫn ngày 06/10/2026), do ảnh hưởng của không khí lạnh, khu vực từ phía Nam Hà Tĩnh đến Đà Nẵng có mưa to và dông, cục bộ mưa rất to; tổng lượng mưa từ 06/10 đến hết đêm 08/10 phổ biến 100–250 mm, có nơi trên 400 mm, và đợt mưa lớn có khả năng kéo dài đến khoảng 10–11/10. Phương án quản lý nêu rõ hoạt động tham quan có thể tạm dừng khi có cảnh báo thời tiết nguy hiểm. Lời khuyên thực tế: theo dõi thông báo chính thức của BQL và chính quyền địa phương, tránh lên đèo khi mưa lớn, gió mạnh hoặc sương mù, và chọn phương tiện phù hợp với quy định từng tuyến.",
      },
      {
        heading: "Bối cảnh: thành phố siết quản lý điểm đến Sơn Trà",
        text: "Các động thái đầu tháng 10 nối tiếp Công văn ngày 28/07/2026 của Chủ tịch UBND TP Đà Nẵng về tăng cường quản lý, bảo vệ môi trường, bảo đảm an ninh trật tự và văn minh du lịch tại bán đảo Sơn Trà (Dân Việt). Công văn giao UBND phường Sơn Trà chủ trì xử lý dứt điểm rác thải, kinh doanh tự phát, chèo kéo du khách; bổ sung thùng rác công cộng, biển cảnh báo nguy hiểm và biển khuyến cáo không cho khỉ ăn; yêu cầu hộ kinh doanh ký cam kết không xả rác, không chèo kéo khách; thiết lập kênh tiếp nhận phản ánh và công khai đường dây nóng. Chủ tịch UBND phường Sơn Trà chịu trách nhiệm trước Chủ tịch UBND thành phố nếu để vi phạm tiếp diễn hoặc tái diễn.",
        links: [
          {
            to: "/tin-tuc/le-hoi-doi-moi-sang-tao-son-tra-sif-2026",
            label: "Tin phường Sơn Trà: Lễ hội Đổi mới sáng tạo SIF 2026",
          },
          {
            to: "/tin-tuc/mo-rong-duong-ven-bien-son-tra-hoi-an-2026",
            label: "Đà Nẵng mở rộng đường ven biển Sơn Trà – Hội An",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Với cư dân sống quanh phường Sơn Trà, bán đảo là nơi đi bộ, ngắm cảnh, đưa gia đình dạo cuối tuần — nên một điểm đến được quản lý chặt hơn về môi trường, an toàn và văn minh du lịch là tin tốt cho chất lượng sống hằng ngày; bài viết không suy diễn tác động lên giá bất động sản. Nếu anh chị đang tìm căn hộ sở hữu lâu dài gần khu vực này, The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; theo thông tin dự án, khoảng 200 m (2 phút) tới biển Mân Thái và khoảng 5 phút tới Bán đảo Sơn Trà, chùa Linh Ứng. Dự án 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex (Đà Nẵng) để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao The Camellia gần biển Mân Thái?",
          },
          {
            to: "/tin-tuc/tham-quan-sa-ban-camellia-gallery",
            label: "Tham quan sa bàn tại Camellia Gallery",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: Thanh Niên (04/10/2026) và Báo Văn Hóa (04/10/2026) về 12 biển cảnh báo, tuần tra dừng đỗ xe và vụ cho khỉ ăn ngày 02/10; VietnamPlus (17/08/2026) và Báo Công an Đà Nẵng (18/08/2026) về tuyến, giờ, phương tiện tham quan; Dân Việt và Công Luận (10/09/2026) về khuyến cáo trekking trái phép; Dân Việt (28/07/2026) về Công văn của Chủ tịch UBND TP Đà Nẵng; BNEWS/TTXVN (06/10/2026) dẫn Trung tâm Dự báo KTTV quốc gia về đợt mưa lớn. Quy định có thể được cơ quan quản lý điều chỉnh — luôn ưu tiên biển báo tại chỗ và thông báo chính thức. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI), không phải ảnh thực tế; infographic do website tổng hợp từ báo chí. Bài là tin địa phương tổng hợp, không phải thông báo của BQL / UBND phường Sơn Trà, không phải thông cáo dự án và không cam kết tăng giá BĐS. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
    date: "05.10.2026",
    title:
      "Lãi suất vay mua nhà vượt 10%: người mua căn hộ Đà Nẵng nên tính dòng tiền thế nào?",
    excerpt:
      "Lãi vay mua nhà cố định 12–24 tháng bình quân khoảng 10,9%/năm (DKRA, tháng 8/2026), thả nổi sau ưu đãi có thể 12–17%/năm. Ví dụ tính khoản vay 1,4 tỷ ở mức 9% – 11% – 14% và checklist 5 câu trước khi vay — tin thị trường, không phải thông cáo The Camellia.",
    image: "/images/news-lai-suat-og.jpg",
    imageCaption: "Ảnh minh họa tạo bằng AI",
    poster: "/images/news-lai-suat-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-lai-suat-hero.webp",
      "/images/news-lai-suat-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Sau nhiều tháng người mua chờ lãi suất hạ nhiệt, mặt bằng lãi vay mua nhà đầu tháng 10/2026 vẫn neo cao và được dự báo khó giảm nhanh. Với người đang cân nhắc mua căn hộ ở Đà Nẵng, câu hỏi thực tế không phải «có nên chờ không» mà là «khoản vay của mình chịu được kịch bản nào». Bài dưới đây tổng hợp số liệu báo chí và ngân hàng công bố, kèm một ví dụ tính toán đơn giản — mang tính tin thị trường, không phải tư vấn tài chính và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Lãi vay mua nhà cố định 12–24 tháng tại 11 ngân hàng thương mại phổ biến bình quân khoảng 10,9%/năm (DKRA Consulting, tháng 8/2026); chỉ còn số ít ngân hàng giữ mức cố định 12 tháng dưới 10%/năm. • Hết ưu đãi, lãi thả nổi có thể lên khoảng 12–17%/năm tùy ngân hàng và cách tính. • Chuyên gia dự báo phải đến khoảng cuối quý III/2027 lãi cho vay mới có cơ sở giảm rõ; lãi huy động được dự báo chủ yếu đi ngang đến cuối năm. • Đà Nẵng tháng 8/2026: tiêu thụ căn hộ khoảng 570 căn, giảm 39% so với tháng 7, tỷ lệ hấp thụ sơ cấp khoảng 21% — lãi suất cao là một lực cản chính. • Việc nên làm: tính thử khoản trả ở mức lãi thả nổi, không chỉ nhìn lãi ưu đãi năm đầu.",
      },
      {
        heading: "Lãi suất đang ở đâu? (số liệu đầu tháng 10/2026)",
        text: "Theo thống kê của DKRA Consulting được Dân trí dẫn lại (04/10/2026), trong tháng 8/2026 lãi vay mua nhà cố định 12–24 tháng tại 11 ngân hàng thương mại phổ biến ở mức khoảng 10,9%/năm; một số ít ngân hàng còn giữ mức cố định 12 tháng dưới 10%/năm như HDBank (9,8%), VietBank (9,5%), Woori Bank (9,3%). Trước đó, khảo sát của VARS IRE trong quý II cho thấy người mua vẫn tiếp cận được gói ưu đãi 12 tháng khoảng 8,5–9,2%/năm — tức mặt bằng đã nhích lên đáng kể chỉ sau vài tháng. Ở góc độ ngân hàng công bố trực tiếp, ví dụ KBank Việt Nam niêm yết ngày 01/10/2026 mức cố định 8,5% (1 năm), 8,9% (2 năm), 8,99% (3 năm), sau đó thả nổi theo bình quân lãi tiết kiệm 12 tháng của 4 ngân hàng quốc doanh cộng biên độ 6%/năm. Các mức trên chỉ để tham khảo; lãi duyệt thực tế phụ thuộc hồ sơ, tài sản bảo đảm và chính sách từng thời điểm.",
      },
      {
        heading: "Vì sao kỳ thả nổi mới là con số cần nhìn",
        text: "Lấy một ví dụ giả định: khoản vay 1,4 tỷ đồng trong 25 năm, trả gốc đều và lãi tính trên dư nợ giảm dần (cách nhiều ngân hàng đang áp dụng). Số tiền phải trả ở tháng đầu tiên vào khoảng 15,2 triệu nếu lãi 9%/năm, khoảng 17,5 triệu ở mức 11%/năm và khoảng 21,0 triệu nếu thả nổi lên 14%/năm — chênh gần 5,8 triệu mỗi tháng cho cùng một khoản vay. Nếu đặt nguyên tắc thận trọng là khoản trả nợ không vượt khoảng 40% thu nhập hộ gia đình, thu nhập cần có tương ứng vào khoảng 38, 44 và 53 triệu/tháng. Đây là phép tính minh họa, làm tròn, không phải báo giá của ngân hàng hay chính sách của bất kỳ dự án nào.",
        image: "/images/news-lai-suat-body.webp",
        imageAlt:
          "Infographic ví dụ minh họa: khoản vay 1,4 tỷ trong 25 năm ở mức lãi 9%, 11% và 14%/năm — số tiền trả tháng đầu và checklist trước khi vay (phép tính làm tròn, không phải báo giá ngân hàng)",
      },
      {
        heading: "Thanh khoản Đà Nẵng: lãi cao đang ghìm sức mua",
        text: "Báo cáo thị trường nhà ở Đà Nẵng tháng 8/2026 của DKRA (theo Tạp chí Doanh nghiệp và Thương mại, Thương Trường) ghi nhận 19 dự án căn hộ đang mở bán với khoảng 2.676 căn, giảm 23% so với tháng trước, trong đó khoảng 94% là hàng tồn từ các đợt trước. Lượng tiêu thụ chỉ khoảng 570 căn, giảm 39% so với tháng 7 và giảm khoảng 26% so với cùng kỳ; tỷ lệ hấp thụ sơ cấp khoảng 21%. Giá sơ cấp nhìn chung đi ngang, một phần thị trường thứ cấp điều chỉnh nhẹ do nhà đầu tư cần thu hồi vốn. Các chủ đầu tư tiếp tục dùng chiết khấu, ưu đãi lãi suất, hỗ trợ thanh toán và giãn trả gốc để kích cầu, nhưng báo cáo nhận định hiệu quả chưa chuyển biến rõ. Phân khúc đất nền cũng trầm lắng — xem thêm bài về hệ số giá đất bên dưới.",
        links: [
          {
            to: "/tin-tuc/he-so-k-gia-dat-da-nang-2026-dat-nen",
            label: "Hệ số K giá đất Đà Nẵng 2026: đất nền giảm giá",
          },
          {
            to: "/tin-tuc/chon-khu-o-da-nang-son-tra-hai-chau-ngu-hanh-son",
            label: "Chọn khu ở Đà Nẵng: Sơn Trà, Hải Châu hay Ngũ Hành Sơn?",
          },
        ],
      },
      {
        heading: "Checklist 5 câu trước khi ký hợp đồng vay",
        text: "1) Lãi ưu đãi cố định bao lâu, hết ưu đãi thả nổi theo công thức nào (lãi tham chiếu nào, cộng biên độ bao nhiêu)? 2) Nếu lãi lên khoảng 14%/năm, khoản trả hằng tháng có vượt khoảng 40% thu nhập hộ không? 3) Phí trả nợ trước hạn từng năm là bao nhiêu? 4) Đã có quỹ dự phòng tối thiểu khoảng 6 tháng tiền trả nợ và sinh hoạt chưa? 5) Với căn hộ hình thành trong tương lai: hỗ trợ lãi suất hay ân hạn gốc (nếu có) kéo dài đến mốc nào, sau mốc đó ai trả và trả mức nào — đọc kỹ cả phụ lục hợp đồng mua bán lẫn hợp đồng tín dụng. Theo ông Nguyễn Anh Quê (Ủy viên BCH Hội Môi giới BĐS Việt Nam) trên Dân trí, người mua ở thực có nhu cầu cấp thiết và thu nhập đủ trả nợ vẫn có thể cân nhắc xuống tiền thay vì chỉ chờ; còn dùng đòn bẩy để đầu cơ trong giai đoạn này tiềm ẩn nhiều rủi ro.",
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Khi lãi suất neo cao, nhiều người mua ưu tiên phương án thanh toán giãn theo tiến độ và chọn căn hộ có pháp lý sở hữu lâu dài để ở thật. Trên website, chính sách bán hàng The Camellia Sơn Trà nêu phương án HTLS (hỗ trợ vay đến 70%, hỗ trợ lãi 0% trong 18 tháng theo chương trình ngân hàng / đợt) cùng các phương án Chuẩn, TTS và Thảnh thơi — điều kiện áp dụng theo chính sách đợt tại thời điểm ký. Dù chọn phương án nào, anh chị vẫn nên tính trước phần lãi sau giai đoạn hỗ trợ như checklist ở trên. The Camellia Sơn Trà: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; bàn giao dự kiến khoảng 2028. Để nhận bảng giá và phương án thanh toán đúng đợt, anh chị để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex (Da Nang Complex), Đà Nẵng.",
        links: [
          {
            to: "/tin-tuc/chinh-sach-ban-hang-htls-early-bird-chiet-khau",
            label: "Chính sách bán hàng: HTLS · Early Bird · CK",
          },
          {
            to: "/tin-tuc/bai-toan-dau-tu-thanh-thoi-the-camellia",
            label: "Bài toán dòng tiền phương án Thảnh thơi",
          },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn: Dân trí (04/10/2026, đăng lại trên vietnam.vn) dẫn số liệu DKRA Consulting tháng 8/2026, khảo sát VARS IRE quý II, nhận định của ông Nguyễn Anh Quê, báo cáo tháng 9 của Techcombank và KBSV; nhadautu.vn về lãi vay bình quân vượt 10%/năm; biểu lãi suất vay mua nhà KBank Việt Nam công bố 01/10/2026; báo cáo thị trường nhà ở Đà Nẵng tháng 8/2026 của DKRA theo Tạp chí Doanh nghiệp và Thương mại và Thương Trường. Ví dụ khoản vay 1,4 tỷ là phép tính minh họa do website thực hiện, làm tròn. Ảnh đầu bài là hình ảnh minh họa (tạo bằng AI), không phải ảnh thực tế dự án. Bài không phải tư vấn tài chính, không cam kết lãi suất, thanh khoản hay mức tăng giá; lãi suất thực tế theo ngân hàng và hồ sơ vay. Giá / chính sách The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "mo-rong-duong-ven-bien-son-tra-hoi-an-2026",
    date: "03.10.2026",
    title:
      "Đà Nẵng mở rộng đường ven biển Sơn Trà – Hội An: ý nghĩa với người mua căn hộ",
    excerpt:
      "Theo Thông báo 157/TB-VP của Văn phòng UBND TP Đà Nẵng (doanhnghiepvn.vn, Tuổi Trẻ đưa tin ngày 13/3/2026), thành phố cơ bản thống nhất phương án hướng tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa – Hội An. Tin hạ tầng địa phương — không phải thông cáo The Camellia; gợi ý mềm cho người quan tâm sống dài hạn gần biển Sơn Trà.",
    image: "/images/news-venbien-og.jpg",
    poster: "/images/news-venbien-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-venbien-hero.webp",
      "/images/news-venbien-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Đà Nẵng đang đẩy mạnh nghiên cứu mở rộng các tuyến đường du lịch ven biển, trong đó nổi bật là hành lang Hoàng Sa – Võ Nguyên Giáp – Trường Sa nối bán đảo Sơn Trà hướng Hội An. Nội dung dưới đây tổng hợp từ Thông báo 157/TB-VP của Văn phòng UBND TP Đà Nẵng (doanhnghiepvn.vn, Tuổi Trẻ đưa tin ngày 13/3/2026) — mang tính tin hạ tầng địa phương, không phải thông cáo của The Camellia Sơn Trà và không cam kết tăng giá bất động sản.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa – Hội An: cơ bản thống nhất phương án hướng tuyến theo Sở Xây dựng. • Chức năng: phục vụ phát triển du lịch, dịch vụ dọc biển; nghiên cứu phân luồng sang tuyến lân cận. • Chủ đầu tư dự án mở rộng: Ban QLDA ĐTXD công trình dân dụng, công nghiệp và hạ tầng kỹ thuật Đà Nẵng (CIC&TII PMU). • CIC&TII PMU lập thiết kế / cảnh quan tuyến; đề xuất hầm chui / cầu vượt cho người đi bộ xuống biển. Theo thông báo, đơn vị được giao báo cáo UBND trong tháng 5/2026; kết quả chưa được công bố trong nguồn bài dẫn. • Cải tạo cảnh quan vỉa hè / bãi cát: tổng mức đầu tư dự kiến hơn 620 tỷ đồng — giai đoạn 1 (2026–2027) khu vực trọng điểm; giai đoạn 2 (2028–2029) hạng mục còn lại. • Tiến độ thực tế theo quyết định / thông báo UBND; bài này không suy diễn thời điểm hoàn thành hay mức tăng giá BĐS.",
      },
      {
        heading: "Hành lang Sơn Trà → Hội An: thống nhất hướng tuyến",
        text: "Theo Thông báo 157/TB-VP của Văn phòng UBND TP Đà Nẵng (doanhnghiepvn.vn, Tuổi Trẻ đưa tin ngày 13/3/2026), Chủ tịch UBND TP Đà Nẵng cơ bản thống nhất phương án hướng tuyến theo đề xuất của Sở Xây dựng đối với tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa – Hội An. Đây là trục ven biển nối bán đảo Sơn Trà hướng Hội An, được định hướng phục vụ phát triển du lịch và dịch vụ dọc biển, đồng thời nghiên cứu phân luồng giao thông sang các tuyến lân cận để giảm áp lực cho hành lang chính.",
        links: [
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao vị trí gần biển Mân Thái / Sơn Trà được quan tâm?",
          },
        ],
      },
      {
        heading: "Ai làm chủ đầu tư? Thiết kế & tiếp cận biển",
        text: "Chủ đầu tư dự án mở rộng được nêu là Ban Quản lý dự án đầu tư xây dựng công trình dân dụng, công nghiệp và hạ tầng kỹ thuật thành phố Đà Nẵng (CIC&TII PMU). Đơn vị này được giao lập thiết kế, cảnh quan cho tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa; nghiên cứu đề xuất hầm chui hoặc cầu vượt phục vụ người đi bộ xuống biển. Theo thông báo, đơn vị được giao báo cáo UBND trong tháng 5/2026; kết quả chưa được công bố trong nguồn bài dẫn.",
        image: "/images/news-venbien-body.webp",
        imageAlt:
          "Hình ảnh minh họa — đường ven biển / vỉa hè cảnh quan Đà Nẵng (không phải hiện trạng thi công chính thức của dự án mở rộng)",
      },
      {
        heading: "Cảnh quan vỉa hè & bãi cát: hơn 620 tỷ, chia 2 giai đoạn",
        text: "Song song hướng tuyến, báo chí (doanhnghiepvn) nêu dự án cải tạo cảnh quan vỉa hè / bãi cát với tổng mức đầu tư dự kiến hơn 620 tỷ đồng: giai đoạn 1 (2026–2027) tập trung khu vực trọng điểm; giai đoạn 2 (2028–2029) hoàn thiện các hạng mục còn lại. Con số và phân kỳ mang tính dự kiến theo nguồn báo chí — không thay thế quyết toán / quyết định đầu tư chính thức khi được công bố đầy đủ.",
      },
      {
        heading: "Ngữ cảnh thêm (ngắn): Nguyễn Tất Thành & kiên cố hóa Hoàng Sa",
        text: "Thông báo cũng đề cập nghiên cứu riêng tuyến Nguyễn Tất Thành gắn với định hướng đô thị lấn biển — bài này chỉ nêu ngắn để đủ ngữ cảnh, trọng tâm vẫn là hành lang Sơn Trà – Hội An. Ngoài ra, trên báo Đà Nẵng / vietnam.vn (khoảng tháng 8/2026) có thông tin gói thầu kiên cố hóa đường Hoàng Sa khoảng 66,6 tỷ đồng (Liên danh Đức Nhì - GTC) — đây là hạng mục phụ trợ / song song, không thay thế câu chuyện mở rộng hành lang chính ở trên.",
      },
      {
        heading: "Ý nghĩa gì với người mua / ở dài hạn gần Sơn Trà?",
        text: "Với người đang cân nhắc an cư hoặc tích sản dài hạn gần biển Mân Thái / bán đảo Sơn Trà, tin hạ tầng kiểu này giúp hình dung hướng đầu tư công vào kết nối du lịch – dịch vụ ven biển và trải nghiệm đi bộ xuống biển. Điểm cần giữ kỷ luật: (1) đây là định hướng / nghiên cứu – thiết kế theo UBND, chưa phải cam kết ngày bàn giao từng đoạn; (2) không suy ra mức tăng giá căn hộ hay đất nền; (3) quyết định mua vẫn nên dựa pháp lý dự án, tiến độ thi công, dòng tiền và nhu cầu ở thật. Đọc thêm góc nhìn chọn khu và sở hữu lâu dài bên dưới.",
        links: [
          {
            to: "/tin-tuc/chon-khu-o-da-nang-son-tra-hai-chau-ngu-hanh-son",
            label: "Chọn khu ở Đà Nẵng: Sơn Trà, Hải Châu hay Ngũ Hành Sơn?",
          },
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài khác gì có thời hạn?",
          },
        ],
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Trong bối cảnh thành phố nghiên cứu nâng cấp hành lang ven biển Sơn Trà – Hội An, một hướng nhiều anh chị cân nhắc là căn hộ biển sở hữu lâu dài, pháp lý dự án rõ ràng. The Camellia Sơn Trà: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; vị trí giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex (Đà Nẵng) để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
          {
            to: "/tin-tuc/tham-quan-sa-ban-camellia-gallery",
            label: "Tham quan sa bàn tại Camellia Gallery",
          },
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao The Camellia gần biển Mân Thái?",
          },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nguồn chính: Thông báo 157/TB-VP của Văn phòng UBND TP Đà Nẵng (ý kiến Chủ tịch UBND TP Đà Nẵng Phạm Đức Ấn; doanhnghiepvn.vn, Tuổi Trẻ đưa tin ngày 13/3/2026; cadn.com.vn). Hạng mục phụ: gói thầu kiên cố hóa đường Hoàng Sa ~66,6 tỷ (Liên danh Đức Nhì - GTC) theo vietnam.vn / Báo Đà Nẵng (khoảng 8/2026). Bài mang tính tin hạ tầng địa phương trên website dự án; không phải thông cáo The Camellia / CIC&TII PMU / UBND; không cam kết tăng giá BĐS, thanh khoản hay tiến độ hoàn thành từng đoạn đường. Tiến độ mở rộng theo quyết định UBND. Giá / quỹ hàng The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },

  {
    slug: "he-so-k-gia-dat-da-nang-2026-dat-nen",
    date: "02.10.2026",
    title:
      "Hệ số K giá đất Đà Nẵng 2026: đất nền giảm giá — người mua căn hộ nên đọc gì?",
    excerpt:
      "UBND Đà Nẵng ban hành QĐ 101/2026/QĐ-UBND (30/6/2026) quy định hệ số điều chỉnh giá đất năm 2026. Song song, đất nền Đà Nẵng được báo chí thị trường ghi nhận giảm giá và thanh khoản yếu — gợi ý ngắn cho người đang cân nhắc căn hộ sở hữu lâu dài.",
    image: "/images/news-heso-k-og.jpg",
    poster: "/images/news-heso-k-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-heso-k-hero.webp",
      "/images/news-heso-k-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Cuối tháng 6/2026, UBND thành phố Đà Nẵng ban hành Quyết định số 101/2026/QĐ-UBND ngày 30/6/2026 quy định hệ số điều chỉnh giá đất (thường gọi là hệ số K) năm 2026 trên địa bàn thành phố. Cùng lúc, phân khúc đất nền được nhiều đơn vị nghiên cứu và báo chí thị trường mô tả là đang điều chỉnh giá, thanh khoản yếu. Bài viết tổng hợp khung chính sách và bối cảnh thị trường — mang tính tham khảo, không thay thế tư vấn pháp lý hay định giá từng thửa/dự án.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Hệ số K 2026: căn cứ tính một số nghĩa vụ tài chính về đất (tiền sử dụng đất, tiền thuê đất…), theo QĐ 101/2026/QĐ-UBND (30/6/2026) — nguồn cổng TTĐT Đà Nẵng. • Đất nền: mặt bằng giá thứ cấp được ghi nhận giảm khoảng 15% so với đầu năm; giao dịch sơ cấp rất thấp theo dữ liệu công bố của đơn vị nghiên cứu. • Hệ số K tăng / bảng giá đất tiệm cận thị trường → nghĩa vụ tài chính đất có thể cao hơn → chi phí đầu vào dự án mới khó giảm. • Với người mua ở / tích sản dài hạn: cân nhắc sản phẩm pháp lý rõ, sở hữu lâu dài thay vì chỉ nhìn mức “giảm giá” đất nền ngắn hạn.",
      },
      {
        heading: "QĐ 101/2026: hệ số điều chỉnh giá đất năm 2026",
        text: "Theo cổng Thông tin điện tử thành phố Đà Nẵng, UBND thành phố ban hành Quyết định số 101/2026/QĐ-UBND ngày 30/6/2026 quy định hệ số điều chỉnh giá đất năm 2026. Hệ số này dùng khi xác định nghĩa vụ tài chính liên quan đất đai theo quy định pháp luật (ví dụ tiền sử dụng đất, tiền thuê đất) trên cơ sở bảng giá đất và các hệ số điều chỉnh áp dụng cho từng trường hợp / vị trí. Đà Nẵng không áp một con số K duy nhất cho mọi thửa: thực tế áp dụng chi tiết theo nhiều yếu tố (vị trí, đặc điểm thửa, hạ tầng…), nên mức nghĩa vụ cụ thể cần đối chiếu phụ lục quyết định và hướng dẫn của cơ quan chuyên môn — không suy diễn một mức K chung cho cả thành phố.",
        links: [
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài khác gì có thời hạn?",
          },
        ],
      },
      {
        heading: "Đất nền Đà Nẵng: giảm giá, thanh khoản yếu",
        text: "Trên thị trường thứ cấp, đơn vị nghiên cứu SPE.R (trích theo Vietnamfinance) cho biết mặt bằng giá đất nền Đà Nẵng bình quân đã giảm khoảng 15% so với đầu năm, trong khi giao dịch nhìn chung trầm lắng. Dữ liệu DKRA Consulting (trích theo báo chí tháng 9/2026) phản ánh sức cầu sơ cấp rất thấp trong tháng 8/2026 — nguồn cung chủ yếu từ hàng tồn, tỷ lệ hấp thụ quanh mức rất thấp. Nguyên nhân thường được nhắc: chi phí vốn / lãi suất còn cao, tâm lý thận trọng, áp lực đòn bẩy tài chính ở một bộ phận nhà đầu tư. Con số cụ thể thay đổi theo khu vực và từng lô; bài này không xác nhận mức giảm của bất kỳ thửa nào.",
        image: "/images/news-heso-k-body.webp",
        imageAlt:
          "Hình ảnh minh họa — bàn làm việc với bản đồ phân lô và biểu đồ tài chính (không phải hồ sơ dự án The Camellia)",
      },
      {
        heading: "Hệ số K và chi phí đầu vào dự án",
        text: "Khi bảng giá đất và hệ số điều chỉnh tăng hoặc tiệm cận giá thị trường, nghĩa vụ tài chính về đất của người sử dụng đất / chủ đầu tư có thể tăng theo. Theo góc nhìn chuyên gia được báo chí thị trường dẫn lại, điều này tác động tâm lý và khiến chi phí đầu vào của dự án mới khó giảm — dù phân khúc đất nền thứ cấp đang điều chỉnh giá. Người mua căn hộ nên tách hai câu chuyện: (1) giá chào bán đất nền thứ cấp đang mềm hơn ở một số khu; (2) chi phí pháp lý / nghĩa vụ đất và giá sản phẩm sơ cấp mới không nhất thiết đi xuống cùng nhịp.",
      },
      {
        heading: "Bảng đối chiếu nhanh: đất nền vs căn hộ sở hữu lâu dài",
        text: "Đất nền thứ cấp: giá có thể linh hoạt theo người bán; thanh khoản hiện yếu; cần tự kiểm tra quy hoạch, hạ tầng, nghĩa vụ tài chính còn lại và khả năng chuyển nhượng. Căn hộ dự án (ví dụ sở hữu lâu dài): giá / tiến độ / pháp lý theo chủ đầu tư và phụ lục HĐMB; dòng tiền thanh toán có lịch rõ; phù hợp hơn nếu mục tiêu là ở thật hoặc tích sản dài hạn thay vì lướt sóng nền. Không có lựa chọn “đúng tuyệt đối” — phụ thuộc mục tiêu, vốn và khẩu vị rủi ro của anh chị.",
      },
      {
        heading: "Người mua căn hộ nên đọc gì trước khi quyết định?",
        text: "1) Xác định mục tiêu: ở thật, tích sản dài hạn, hay đầu tư ngắn hạn. 2) Với đất nền: hỏi rõ nghĩa vụ tài chính, hệ số / bảng giá áp dụng nếu còn thủ tục, quy hoạch và khả năng thanh khoản. 3) Với căn hộ: đọc loại hình sở hữu (lâu dài vs có thời hạn), tiến độ xây dựng, chính sách thanh toán và phụ lục giá tại thời điểm ký. 4) Hạn chế đòn bẩy quá lớn khi thanh khoản thị trường còn thận trọng. 5) Đối chiếu nguồn chính thức (cổng TTĐT / quyết định UBND) thay vì chỉ tin mức “cắt lỗ” trên tin rao.",
      },
      {
        heading: "Góc nhìn mềm từ The Camellia Sơn Trà",
        text: "Trong bối cảnh đất nền biến động giá và thanh khoản, một hướng nhiều anh chị cân nhắc là căn hộ biển sở hữu lâu dài, pháp lý dự án rõ ràng hơn so với tự xử lý từng thửa đất. The Camellia Sơn Trà: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; vị trí giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà; bàn giao dự kiến khoảng 2028. Anh chị có thể để lại nhu cầu tại trang Liên hệ, nhắn Zalo / gọi Hotline 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex (Đà Nẵng) để xem sa bàn và nhận bảng giá cập nhật.",
        links: [
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài khác gì có thời hạn?",
          },
          {
            to: "/tin-tuc/gia-the-camellia-son-tra-tu-1-98-ty",
            label: "The Camellia giá từ 1,98 tỷ: Studio đến 3PN",
          },
          {
            to: "/tin-tuc/tham-quan-sa-ban-camellia-gallery",
            label: "Tham quan sa bàn tại Camellia Gallery",
          },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Chính sách: UBND Đà Nẵng — Quyết định 101/2026/QĐ-UBND ngày 30/6/2026 quy định hệ số điều chỉnh giá đất năm 2026 (cổng TTĐT danang.gov.vn). Thị trường: tổng hợp / diễn đạt lại từ báo chí và đơn vị nghiên cứu (Vietnamfinance dẫn SPE.R về mức giảm khoảng 15%; DKRA Consulting về thanh khoản sơ cấp tháng 8/2026 — theo nhadautu.vn / báo chí đăng lại). Bài mang tính giáo dục thị trường trên website dự án; không phải văn bản pháp lý, không cam kết lợi nhuận / thanh khoản / giá đất cụ thể. Giá và quỹ hàng The Camellia chỉ đúng theo bảng giá / phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
      },
    ],
  },


  {
    slug: "le-hoi-doi-moi-sang-tao-son-tra-sif-2026",
    date: "01.10.2026",
    title: "Lễ hội Đổi mới sáng tạo Sơn Trà — SIF 2026 (3–4/10)",
    excerpt:
      "SIF 2026 (Son Tra Innovation Fest) diễn ra 3–4/10 tại Đà Nẵng với chủ đề “Công nghệ toàn cầu hội ngộ phong cách sống địa phương”. Tin địa phương từ họp báo 25/09 — không phải sự kiện The Camellia; gợi ý mềm cho người quan tâm sống dài hạn tại Sơn Trà.",
    image: "/images/news-sif-og.jpg",
    poster: "/images/news-sif-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-sif-hero.webp",
      "/images/news-sif-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Chiều 25/09/2026, UBND phường Sơn Trà phối hợp Trung tâm Hỗ trợ khởi nghiệp đổi mới sáng tạo Đà Nẵng (DISSC) và Công ty TNHH Thương mại & Du lịch Go Vietnam 365 tổ chức họp báo công bố Lễ hội Đổi mới sáng tạo Sơn Trà 2026 (Son Tra Innovation Fest 2026, SIF 2026). Chương trình dự kiến diễn ra hai ngày 3–4/10 tại Đà Nẵng, theo thông tin họp báo / đơn vị tổ chức. Đây là tin địa phương — không phải sự kiện của The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh SIF 2026",
        text: "Thời gian: 3–4/10/2026 tại Đà Nẵng (địa điểm cụ thể theo thông báo của Ban Tổ chức). Chủ đề: “Công nghệ toàn cầu hội ngộ phong cách sống địa phương”. Đơn vị tổ chức: UBND phường Sơn Trà · DISSC · Go Vietnam 365. Quy mô dự kiến: khoảng 2.000 lượt khách tham quan, trải nghiệm. Điểm nhấn: triển lãm AI / robot / công nghệ tương lai do hơn 20 doanh nghiệp công nghệ và 6 trường đại học, cao đẳng thực hiện, kết hợp văn hóa – ẩm thực – âm nhạc địa phương.",
      },
      {
        heading: "Chuỗi hoạt động: hội thảo, cuộc thi, hỗ trợ số",
        text: "Theo họp báo, lễ hội tạo nền tảng kết nối công nghệ, giáo dục, doanh nghiệp và văn hóa địa phương qua triển lãm, hội thảo, cuộc thi sáng tạo và giao lưu nghệ thuật. Chuỗi hội thảo chuyên đề gồm: Đề án thành lập Khu vực Đổi mới Sáng tạo phường Sơn Trà; Chuyển đổi số giai đoạn 2026–2030; chủ đề “AI và giáo dục”. Các cuộc thi nổi bật: “Ý tưởng Công viên đổi mới sáng tạo Sơn Trà” và “Làm phim hoạt hình bằng AI”. Song song là hoạt động hỗ trợ người dân thực hành định danh điện tử VNeID, dịch vụ công trực tuyến và chữ ký số.",
        image: "/images/news-sif-body.webp",
        imageAlt:
          "Không gian trưng bày đổi mới sáng tạo — minh họa vibe triển lãm AI / robot / tương tác cộng đồng (ảnh minh họa, không phải địa điểm tổ chức chính thức)",
      },
      {
        heading: "Thông điệp từ Ban Tổ chức",
        text: "Ông Nguyễn Huy Bình, Phó Chủ tịch UBND phường Sơn Trà, Trưởng Ban Tổ chức SIF 2026, nhấn mạnh bối cảnh phường vận hành theo mô hình chính quyền đô thị 2 cấp từ 01/07/2025 đòi hỏi tư duy phát triển đột phá và chủ động kiến tạo không gian kết nối công nghệ với đời sống. Theo ông Bình, chủ đề lễ hội muốn gửi thông điệp: Sơn Trà không chỉ tiếp nhận công nghệ mà muốn biến công nghệ thành một phần của đời sống; đồng thời đưa giá trị văn hóa, con người địa phương vào hệ sinh thái đổi mới sáng tạo. Ông cũng mong muốn khơi dậy tinh thần sáng tạo trong cộng đồng — nhất là thế hệ trẻ — và giữ thiên nhiên, văn hóa, phong cách sống riêng của Sơn Trà khi công nghệ giúp các giá trị ấy được kết nối và lan tỏa theo cách mới. (Diễn đạt lại theo nội dung họp báo; không phải trích dẫn nguyên văn từng câu.)",
      },
      {
        heading: "Góc nhìn cho người quan tâm sống tại Sơn Trà",
        text: "SIF 2026 phản ánh hướng định vị phường Sơn Trà như không gian đáng sống, gắn đổi mới sáng tạo với đời sống địa phương — không chỉ là điểm đến du lịch ngắn ngày. Với người đang cân nhắc an cư hoặc tích sản dài hạn gần biển Mân Thái / bán đảo Sơn Trà, tin địa phương kiểu này giúp hình dung hệ sinh thái xung quanh: giáo dục, số hóa dịch vụ công, cộng đồng sáng tạo. Bài viết không suy diễn tiến độ dự án bất động sản hay cam kết tiện ích ngoài sự kiện; chỉ nêu bối cảnh địa phương từ nguồn họp báo.",
      },
      {
        heading: "Nếu anh chị đang tìm căn hộ sở hữu lâu dài tại Sơn Trà",
        text: "The Camellia Sơn Trà là một lựa chọn căn hộ biển sở hữu lâu dài trong khu vực: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo; vị trí giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà. Anh chị có thể để lại nhu cầu tại trang Liên hệ hoặc nhắn Zalo / gọi Hotline 0934 885 108 để nhận bảng giá cập nhật và tư vấn — độc lập với lịch SIF 2026.",
        links: [
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài khác gì có thời hạn?",
          },
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao vị trí gần biển Mân Thái được quan tâm?",
          },
        ],
      },
      {
        heading: "Nguồn & lưu ý",
        text: "Nội dung tổng hợp từ họp báo công bố SIF 2026 ngày 25/09/2026 (Báo Công Thương / congthuong.vn). Lịch trình, địa điểm chi tiết và điều kiện tham dự theo thông báo chính thức của Ban Tổ chức. Bài mang tính tin địa phương trên website dự án; không phải thông cáo của The Camellia, DISSC hay UBND phường. Giá / quỹ hàng The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn công bố trên website từ 1,98 tỷ.",
      },
    ],
  },




  {
    slug: "chon-khu-o-da-nang-son-tra-hai-chau-ngu-hanh-son",
    date: "29.09.2026",
    title: "Chọn khu ở Đà Nẵng: Sơn Trà, Hải Châu hay Ngũ Hành Sơn?",
    excerpt:
      "Gợi ý trung lập cho người mua căn hộ Đà Nẵng: so sánh Sơn Trà (biển + bán đảo), Hải Châu (trung tâm đô thị) và Ngũ Hành Sơn / trục biển phía nam theo khoảng cách biển, nhịp sống, pháp lý sở hữu và kết nối — không thay thế tư vấn pháp lý.",
    image: "/images/news-chon-khu-og.jpg",
    poster: "/images/news-chon-khu-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-chon-khu-hero.webp",
      "/images/news-chon-khu-body.webp",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "Khi chọn căn hộ ở Đà Nẵng, nhiều anh chị bắt đầu từ câu hỏi khu nào phù hợp hơn: Sơn Trà gần biển và bán đảo, Hải Châu trung tâm hành chính – đô thị, hay Ngũ Hành Sơn / trục biển phía nam với nhịp du lịch – nghỉ dưỡng. Bài viết này là gợi ý trung lập theo tiêu chí sống và đầu tư dài hạn — không xếp hạng “khu tốt nhất”, không thay thế khảo sát thực địa và kiểm tra pháp lý từng sản phẩm.",
      },
      {
        heading: "Ba tiêu chí nên đặt trước khi chọn khu",
        text: "Thứ nhất: mục tiêu sử dụng — ở thật, tích sản dài hạn, hay kết hợp nghỉ dưỡng / cho thuê ngắn hạn. Thứ hai: khoảng cách tới biển, nơi làm việc, trường học và sân bay. Thứ ba: loại hình pháp lý — căn hộ gắn đất ở / sở hữu lâu dài khác với sản phẩm nghỉ dưỡng có thời hạn hoặc mô hình vận hành khách sạn. Người mua cần tự kiểm tra loại đất, hình thức sở hữu và hồ sơ pháp lý trên hợp đồng / chủ đầu tư — bài này chỉ nêu khung tham khảo chung.",
      },
      {
        heading: "Sơn Trà: biển gần, bán đảo, nhịp sống ven biển",
        text: "Sơn Trà gắn với bán đảo, biển (trong đó có khu vực Mân Thái và các bãi gần trung tâm phía đông) và quỹ căn hộ ven biển còn đang mở. Ưu điểm thường được nhắc: khoảng cách biển ngắn, không khí gần thiên nhiên, phù hợp người muốn ở gần biển nhưng vẫn kết nối trung tâm trong khoảng vài đến mười lăm phút tùy điểm. Cần cân nhắc: một số tuyến có thể đông vào cuối tuần / mùa cao điểm du lịch; tiện ích phố phường “đô thị dày” có thể thưa hơn Hải Châu tùy vị trí cụ thể. Với người tìm căn hộ biển sở hữu lâu dài, Sơn Trà là khu vực đang có quỹ hàng mới — ví dụ The Camellia Sơn Trà (469 căn, giá từ 1,98 tỷ; CĐT Thành Lâm · MBLAND · WELAND · DKRA Virgo) tại giao lộ Lê Văn Lương – Lê Đức Thọ, gần biển Mân Thái.",
        image: "/images/news-chon-khu-body.webp",
        imageAlt: "Bãi biển và dãy nhà ven biển Đà Nẵng — minh họa nhịp sống ven biển Sơn Trà / trục biển",
        links: [
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao vị trí gần biển Mân Thái được quan tâm?",
          },
          {
            to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai",
            label: "Căn hộ Sơn Trà sở hữu lâu dài khác gì có thời hạn?",
          },
        ],
      },
      {
        heading: "Hải Châu: trung tâm hành chính, nhịp đô thị dày",
        text: "Hải Châu là lõi hành chính – thương mại quen thuộc: cầu sông Hàn, khu trung tâm, mật độ dịch vụ, ngân hàng, văn phòng và tiện ích phố cao. Ưu điểm: đi lại nội đô thuận, phù hợp người làm việc / học tập quanh trung tâm, thích nhịp sống đô thị. Khoảng cách biển thường xa hơn Sơn Trà hoặc các trục biển phía đông–nam — tùy điểm xuất phát. Quỹ căn hộ mới gắn “view biển” trực tiếp thường hạn chế hơn các khu ven biển; giá và loại sản phẩm phụ thuộc từng dự án. Người mua nên so sánh thời gian di chuyển thực tế (giờ cao điểm) thay vì chỉ nhìn bản đồ.",
      },
      {
        heading: "Ngũ Hành Sơn / trục biển phía nam: du lịch – nghỉ dưỡng",
        text: "Khu vực Ngũ Hành Sơn và trục biển Non Nước – phía nam thường mang vibe nghỉ dưỡng, gần danh thắng, khách sạn và bất động sản du lịch. Phù hợp người thích không khí nghỉ dưỡng, đầu tư định hướng cho thuê ngắn hạn / second home — nhưng phải tách rõ sản phẩm căn hộ ở gắn đất ở với sản phẩm nghỉ dưỡng có thời hạn hoặc vận hành theo mô hình khách sạn. Khoảng cách tới trung tâm Hải Châu và một số tiện ích nội đô thường xa hơn so với sống trong lõi thành phố; kết nối sân bay có thể thuận tùy tuyến. Không nên suy diễn mọi dự án ven biển phía nam đều cùng một loại pháp lý.",
      },
      {
        heading: "Bảng so sánh nhanh (tham khảo)",
        text: "Khoảng cách biển: Sơn Trà và trục biển phía nam thường gần hơn Hải Châu trung tâm. Nhịp sống: Hải Châu đô thị dày; Sơn Trà ven biển / bán đảo; Ngũ Hành Sơn nghỉ dưỡng – du lịch. Kết nối sân bay / trung tâm: Hải Châu gần lõi đô thị; Sơn Trà thường trung bình–thuận tùy điểm; phía nam tùy tuyến và giờ. Pháp lý: mọi khu đều có cả sản phẩm ở lâu dài và sản phẩm nghỉ dưỡng — bắt buộc đọc hồ sơ từng dự án. Quỹ căn mới gắn biển: tập trung hơn ở các trục ven biển (Sơn Trà, phía nam) hơn là lõi Hải Châu. Bảng mang tính định tính; không phải xếp hạng đầu tư.",
      },
      {
        heading: "Lưu ý pháp lý & minh họa",
        text: "Bài viết mang tính giáo dục thị trường, không phải tư vấn pháp lý hay cam kết lợi nhuận / cho thuê. Giá, tiến độ, ưu đãi và loại hình sở hữu chỉ đúng theo phụ lục / bảng giá / hồ sơ tại thời điểm ký. Với The Camellia Sơn Trà, giá sàn công bố trên website là từ 1,98 tỷ. Một số ưu đãi, như BST căn hộ tầng 3, có thể chào tổng giá từ 1,72 tỷ sau chiết khấu theo phương thức thanh toán; luôn đối chiếu bảng giá lúc ký. Anh chị nên đối chiếu sổ / GCN dự kiến, loại đất và điều kiện bàn giao với chủ đầu tư hoặc đơn vị phân phối trước khi quyết định.",
        links: [
          {
            to: "/tin-tuc/gia-the-camellia-son-tra-tu-1-98-ty",
            label: "The Camellia giá từ 1,98 tỷ: Studio đến 3PN",
          },
          { to: "/can-ho", label: "Xem loại căn The Camellia Sơn Trà" },
        ],
      },
      {
        heading: "Nếu anh chị đang cân nhắc Sơn Trà",
        text: "Có thể xem The Camellia Sơn Trà như một lựa chọn căn hộ biển sở hữu lâu dài trong khu vực: 469 căn, giá từ 1,98 tỷ; CĐT Công ty TNHH Địa ốc Thành Lâm · Phát triển MBLAND · Kinh doanh WELAND · Phân phối DKRA Virgo. Tham quan sa bàn / nhận tư vấn tại Camellia Gallery — Tầng 9, Bạch Đằng Complex (Da Nang Complex), Đà Nẵng; hoặc để lại nhu cầu tại trang Liên hệ / Zalo – Hotline 0934 885 108.",
        links: [
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn" },
          {
            to: "/tin-tuc/tham-quan-sa-ban-camellia-gallery",
            label: "Tham quan sa bàn tại Camellia Gallery",
          },
        ],
      },
    ],
  },


  {
    slug: "bai-toan-dau-tu-thanh-thoi-the-camellia",
    date: "28.09.2026",
    title: "Bài toán đầu tư “Thảnh Thơi” tại The Camellia Sơn Trà",
    excerpt:
      "Phương án Thảnh thơi: thanh toán 50% nhận nhà, giãn dòng tiền tới 38 tháng; 45% còn lại chia 4 đợt trong ~20 tháng sau nhận nhà. Minh họa lợi nhuận và thuê tham khảo — không phải cam kết. Liên hệ / Zalo 0934 885 108.",
    image: "/images/news-thanh-thoi-og.jpg",
    poster: "/images/news-thanh-thoi-hero.webp",
    // Designed infographic — keep logo, timeline, table and profit cards full frame
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
          { to: "/can-ho", label: "Xem mặt bằng & loại căn" },
        ],
      },
      {
        heading: "Nhận tư vấn phương án Thảnh thơi",
        text: "Để đối chiếu quỹ căn, tầng/view và phụ lục thanh toán đúng đợt, anh chị để lại nhu cầu tại trang Liên hệ hoặc nhắn Zalo / gọi Hotline 0934 885 108. Tư vấn sẽ gửi bảng giá cập nhật (giá công bố từ 1,98 tỷ) và giải thích nhịp 50% nhận nhà — giãn ~45% sau bàn giao — 5% sổ theo chính sách hiện hành.",
        links: [
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá & tư vấn Thảnh thơi" },
          { to: "/", label: "Trang chủ — xem các phương án thanh toán" },
        ],
      },
    ],
  },


  {
    slug: "tham-quan-sa-ban-camellia-gallery",
    date: "28.09.2026",
    title: "Tham quan sa bàn The Camellia Sơn Trà tại Camellia Gallery",
    excerpt:
      "Chủ đầu tư đã cho phép khách tham quan sa bàn dự án tại Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng. Đặt lịch qua Zalo 0934 885 108.",
    image: "/images/news-sa-ban-og.jpg",
    poster: "/images/news-sa-ban-hero.webp",
    // Designed banner — keep logos MBLAND / THE CAMELLIA / WELAND and full frame
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
          { to: "/tin-tuc/ra-mat-van-phong-ban-hang", label: "Ra mắt văn phòng bán hàng / Sales Gallery" },
          { to: "/can-ho", label: "Xem mặt bằng & loại căn" },
          { to: "/lien-he", label: "Đặt lịch tham quan — Liên hệ" },
        ],
      },
    ],
  },


  {
    slug: "chung-cu-het-nien-han-khong-mac-nhien-pha-do",
    date: "26.09.2026",
    title: "Chung cư hết niên hạn không mặc nhiên bị phá dỡ",
    excerpt:
      "Chung cư hết niên hạn theo hồ sơ thiết kế không đồng nghĩa với việc mặc nhiên bị phá dỡ. Việc kiểm định an toàn, phương án cải tạo và quyền tài sản của chủ sở hữu cần được xem xét theo quy định.",
    image: "/images/news-nien-han-og.jpg",
    poster: "/images/news-nien-han-hero.webp",
    imageObjectClass: "object-center",
    gallery: [
      "/images/news-nien-han-hero.webp",
      "/images/exterior-1.webp",
      "/images/hero-aerial.webp",
    ],
    body: [
      {
        text: "Thông tin về thời hạn sử dụng nhà chung cư theo niên hạn công trình đang được nhiều người quan tâm, nhất là những người đã mua hoặc đang cân nhắc sở hữu căn hộ. Lo ngại thường gặp là khi thời hạn ghi trong hồ sơ thiết kế kết thúc, tòa nhà sẽ bị phá dỡ và chủ sở hữu mất căn hộ. Tuy nhiên, niên hạn sử dụng của công trình và quyền tài sản của người sở hữu là hai vấn đề cần được xem xét riêng.",
      },
      {
        heading: "Hết niên hạn chưa đồng nghĩa với hết quyền sở hữu",
        text: "Thời hạn sử dụng nhà chung cư được xác định từ hồ sơ thiết kế và cấp công trình; tùy kết cấu, chất lượng xây dựng, con số có thể là 50 năm, 100 năm hoặc dài hơn. Khi hết thời hạn theo thiết kế, tòa nhà không mặc nhiên phải phá dỡ. Cơ quan có thẩm quyền sẽ kiểm định và đánh giá mức độ an toàn, chất lượng thực tế của công trình.",
      },
      {
        heading: "Kiểm định an toàn là căn cứ quan trọng",
        text: "Nếu kết quả kiểm định cho thấy công trình vẫn đáp ứng yêu cầu an toàn, chung cư có thể tiếp tục được sử dụng. Việc phá dỡ chỉ được đặt ra khi tòa nhà xuống cấp nghiêm trọng, không còn bảo đảm an toàn hoặc thuộc trường hợp phải cải tạo, xây dựng lại theo quy định pháp luật. Đây là nội dung được VTV thông tin trong bối cảnh quy định về thời hạn sử dụng nhà chung cư đang được quan tâm. (Nguồn: VTV.)",
      },
      {
        heading: "Quyền và lợi ích của chủ sở hữu vẫn được ghi nhận",
        text: "Trong trường hợp chung cư phải phá dỡ để xây dựng lại, quyền và lợi ích hợp pháp của các chủ sở hữu căn hộ vẫn phải được xem xét, ghi nhận và bảo vệ trong quá trình cải tạo, chỉnh trang hoặc tái thiết công trình. Việc một tòa nhà cũ bị phá dỡ không đồng nghĩa toàn bộ quyền tài sản của người sở hữu cũng chấm dứt.",
      },
      {
        text: "Quyền của cư dân không chỉ gắn với phần diện tích căn hộ thuộc sở hữu riêng, mà còn liên quan đến phần sở hữu chung và quyền sử dụng đất chung của dự án. Vì vậy, phương án xử lý cần làm rõ quyền, nghĩa vụ và lợi ích của các chủ sở hữu trong từng trường hợp cụ thể.",
      },
      {
        heading: "Cần làm rõ cơ chế cải tạo, xây dựng lại",
        text: "Tại Nghị quyết số 278/NQ-CP, Chính phủ yêu cầu Bộ Xây dựng tiếp tục hoàn thiện quy định về thời hạn sử dụng nhà chung cư và làm rõ phương án xử lý khi công trình hết niên hạn. Các nội dung cần được quy định cụ thể gồm quyền tiếp tục sử dụng đất để xây dựng lại, quyền và nghĩa vụ của chủ sở hữu, phương án cải tạo hoặc tái thiết và phần nghĩa vụ tài chính mà cư dân có thể phải đóng góp.",
      },
      {
        heading: "Người mua căn hộ nên hiểu đúng điều gì?",
        text: "Người mua cần phân biệt niên hạn sử dụng của công trình với quyền tài sản của chủ sở hữu. Một tòa nhà có thể kết thúc vòng đời sử dụng vì không còn an toàn, nhưng quyền và lợi ích hợp pháp của người sở hữu vẫn phải được giải quyết theo quy định pháp luật và phương án được cơ quan có thẩm quyền phê duyệt.",
      },
      {
        text: "Trước khi đặt cọc hoặc ký hợp đồng, nên yêu cầu được cung cấp và giải thích hồ sơ pháp lý dự án, thông tin về loại hình nhà ở, quyền sở hữu, tiến độ, quy chế quản lý vận hành và các điều kiện liên quan. Không nên chỉ dựa vào cách diễn giải ngắn gọn như “hết niên hạn là mất nhà” để đánh giá giá trị một căn hộ.",
      },
      {
        heading: "Với người đang tìm căn hộ Sơn Trà sở hữu lâu dài",
        text: "Với người đang tìm căn hộ Sơn Trà theo hướng sở hữu lâu dài, cần tách rõ niên hạn công trình và quyền tài sản. The Camellia Sơn Trà định vị pháp lý / sổ theo hướng sở hữu lâu dài; anh chị có thể đọc thêm bài giải thích về căn hộ Sơn Trà sở hữu lâu dài hoặc liên hệ tư vấn qua Zalo 0934 885 108.",
        links: [
          { to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai", label: "Đọc bài: Căn hộ Sơn Trà sở hữu lâu dài" },
          { to: "/lien-he", label: "Liên hệ tư vấn / nhận thông tin" },
        ],
      },
    ],
  },

  {
    slug: "trung-thu-ngam-trang-son-tra",
    date: "25.09.2026",
    title: "Ngắm trăng tròn vui sum vầy — Trung thu tại The Camellia Sơn Trà",
    excerpt:
      "Ngắm trăng tròn trên biển sóng vỗ, cùng người thân phá cỗ đêm rằm. The Camellia Sơn Trà thương chúc Quý khách hàng, Quý đại lý, Quý đối tác và gia đình một mùa Trung thu an yên, ấm áp và trọn vẹn niềm vui.",
    image: "/images/featured-trung-thu-16x9.jpg",
    poster: "/images/news-trung-thu.webp",
    // Upper-biased landscape — keep logos MBLAND / THE CAMELLIA / WELAND, moon and faces
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
        links: [{ to: "/lien-he", label: "Đến trang liên hệ — đặt lịch tham quan" }],
      },
    ],
  },

  {
    slug: "gia-the-camellia-son-tra-tu-1-98-ty",
    date: "25.09.2026",
    title: "The Camellia giá từ 1,98 tỷ: Studio đến 3PN",
    excerpt:
      "The Camellia Sơn Trà công bố giá từ 1,98 tỷ (Studio). 1PN+1 từ 3,28 tỷ · 2PN từ 3,90 tỷ · 3PN từ 7,50 tỷ. Sổ hồng lâu dài; nhận bảng giá qua Zalo 0934 885 108.",
    image: "/images/featured-gio-hang-16x9.jpg",
    poster: "/images/news-gio-hang.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-gio-hang.webp",
      "/images/featured-gio-hang-16x9.jpg",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "The Camellia Sơn Trà công bố giá từ 1,98 tỷ/căn cho loại Studio. Các loại 1PN+1, 2PN và 3PN có mức từ riêng theo diện tích và mã căn. Dự án 469 căn, sổ hồng sở hữu lâu dài, bàn giao dự kiến 2028 tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà. Nhận bảng giá và tư vấn căn phù hợp qua Zalo 0934 885 108 hoặc trang liên hệ.",
        links: [
          { to: "/can-ho", label: "Xem mặt bằng & loại căn" },
          { to: "/lien-he", label: "Đến trang liên hệ" },
        ],
      },
      {
        heading: "Giá từ 1,98 tỷ nghĩa là gì?",
        text: "«Giá từ 1,98 tỷ» trên site là giá sàn công bố thấp nhất của giỏ hàng — gắn với Studio (khoảng 27,8–28,4 m² thông thủy), không phải mức sàn cho mọi loại căn. Một số ưu đãi, như Bộ sưu tập căn hộ tầng 3, có thể được chào «từ 1,72 tỷ» với nghĩa tổng giá sau chiết khấu theo phương thức thanh toán; mức đó không thay giá sàn công bố. Khi xem bảng giá đợt mở bán, anh chị luôn đối chiếu đúng mã căn, tầng, hướng view và chính sách thanh toán tại thời điểm ký. Số liệu giá sàn trong bài lấy từ trang Căn hộ.",
      },
      {
        heading: "The Camellia Đà Nẵng giá có phải 1,72 tỷ không?",
        text: "Giá sàn công bố trên thecamellia-sontra.com là từ 1,98 tỷ. «Từ 1,72 tỷ» không phải giá sàn thay thế: đó là tổng giá sau chiết khấu theo phương thức thanh toán ở một số ưu đãi do chủ dự án công bố, ví dụ Bộ sưu tập căn hộ tầng 3. Luôn đối chiếu bảng giá tại thời điểm ký trên trang Căn hộ / Fact sheet, hoặc gọi 0934 885 108 trước khi đặt chỗ.",
        links: [
          {
            to: "/tin-tuc/bst-can-ho-tang-3-the-camellia-11-can",
            label: "BST căn hộ tầng 3 — tổng giá từ 1,72 tỷ sau chiết khấu",
          },
        ],
      },
      {
        heading: "Bảng giá theo loại căn (theo công bố trên site)",
        text: "Studio 27,8–28,4 m² từ 1,98 tỷ. 1PN+1 47,0 m² từ 3,28 tỷ. 2PN 57,4–72,1 m² từ 3,90 tỷ. 3PN 84,2–103,6 m² từ 7,50 tỷ. Duplex 103,6–226,7 m²: sắp công bố. Tầng điển hình khoảng 22 căn/tầng. Chi tiết mặt bằng và viewer 360 xem tại trang Căn hộ và Tour 360.",
        links: [
          { to: "/can-ho", label: "Trang căn hộ" },
          { to: "/kham-pha", label: "Tour 360" },
        ],
      },
      {
        heading: "Giá và chính sách thanh toán",
        text: "Giá công bố đi kèm các phương án thanh toán theo đợt mở bán (HTLS, Early Bird, chiết khấu chuẩn / TTS / Thảnh thơi…). Tỷ lệ vay, lãi suất hỗ trợ và % chiết khấu có thể đổi theo ngân hàng và chính sách tại thời điểm ký. Trước khi đặt cọc, hãy yêu cầu bảng giá và phương án áp dụng đúng đợt từ DKRA Virgo / đại diện chủ đầu tư.",
        links: [
          {
            to: "/tin-tuc/chinh-sach-ban-hang-htls-early-bird-chiet-khau",
            label: "Chính sách HTLS · Early Bird · CK",
          },
        ],
      },
      {
        heading: "Vì sao mức giá gắn vị trí và pháp lý?",
        text: "The Camellia định vị căn hộ nhà ở tại P. Sơn Trà — gần biển Mân Thái, gần Bán đảo Sơn Trà — với pháp lý sổ hồng sở hữu lâu dài theo thông tin dự án (khác nhiều sản phẩm nghỉ dưỡng / condotel có thời hạn). Chủ đầu tư Công ty TNHH Địa ốc Thành Lâm; phát triển MBLAND; kinh doanh WELAND; phân phối DKRA Virgo. Quy mô 469 căn, 25 tầng nổi & 2 hầm; bàn giao dự kiến 2028. Đây là khung để hiểu «giá từ» trong ngữ cảnh an cư / giữ tài sản dài hạn.",
        links: [
          { to: "/tin-tuc/can-ho-son-tra-so-huu-lau-dai", label: "Căn hộ Sơn Trà sở hữu lâu dài" },
        ],
      },
      {
        heading: "FAQ giá The Camellia",
        text: "The Camellia giá bao nhiêu? Theo công bố trên site: từ 1,98 tỷ (Studio); các loại lớn hơn có mức từ riêng như bảng trên. 1,98 tỷ đã gồm gì? Bài viết nêu mức giá từ công bố theo loại căn — phí, nội thất bàn giao và điều kiện HĐMB cần đối chiếu hồ sơ / bảng giá đợt với đơn vị phân phối. Giá có thay đổi theo đợt không? Có thể — luôn lấy bảng giá và chính sách tại thời điểm tư vấn / ký. Xem mặt bằng và nhận bảng giá ở đâu? Trang Căn hộ, form Liên hệ, hoặc Zalo / Hotline 0934 885 108.",
      },
      {
        heading: "Nhận bảng giá & tư vấn căn",
        text: "Gọi hoặc nhắn Zalo 0934 885 108, hoặc gửi form tại trang liên hệ để nhận bảng giá đợt hiện tại và tư vấn Studio / 1PN+1 / 2PN / 3PN phù hợp ngân sách. Camellia Gallery, Tầng 9, Bạch Đằng Complex (50 Bạch Đằng), Đà Nẵng. Giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng.",
        links: [
          { to: "/lien-he", label: "Đến trang liên hệ" },
          { to: "/gioi-thieu", label: "Xem fact sheet" },
        ],
      },
    ],
  },

  {
    slug: "ra-mat-van-phong-ban-hang",
    date: "24.09.2026",
    title: "Ra mắt văn phòng bán hàng The Camellia Sơn Trà",
    excerpt:
      "The Camellia Sơn Trà chính thức ra mắt Sales Gallery — không gian trải nghiệm mới tại Camellia Gallery, Tầng 9, Bạch Đằng Complex (50 Bạch Đằng), Đà Nẵng. Soft Opening 25/09; Grand Opening 10/10.",
    image: "/images/featured-sales-gallery-16x9.jpg",
    poster: "/images/news-sales-gallery.webp",
    // Upper-biased landscape — keep logos MBLAND / THE CAMELLIA / WELAND and faces
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
        links: [{ to: "/lien-he", label: "Đến trang liên hệ — đặt lịch tham quan" }],
      },
    ],
  },

  {
    slug: "chinh-sach-ban-hang-htls-early-bird-chiet-khau",
    date: "23.09.2026",
    title: "Chính sách bán hàng The Camellia: HTLS, Early Bird, CK",
    excerpt:
      "The Camellia Sơn Trà công bố giá từ 1,98 tỷ/căn. Các phương án thường gặp: HTLS vay đến 70% và lãi 0% trong 18 tháng (theo đợt/ngân hàng), Early Bird 3%, CK chuẩn 4%, TTS 95% đến 13%, Thảnh thơi 50% nhận nhà CK 2%. Số liệu áp dụng theo chính sách đợt khi ký.",
    image: "/images/featured-gio-hang-16x9.jpg",
    poster: "/images/news-gio-hang.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-gio-hang.webp",
      "/images/featured-gio-hang-16x9.jpg",
      "/images/exterior-1.webp",
    ],
    body: [
      {
        text: "The Camellia Sơn Trà công bố giá từ 1,98 tỷ/căn. Các phương án thường gặp: HTLS vay đến 70% và lãi 0% trong 18 tháng (theo đợt/ngân hàng), Early Bird 3%, CK chuẩn 4%, TTS 95% đến 13%, Thảnh thơi 50% nhận nhà CK 2%. Số liệu áp dụng theo chính sách đợt khi ký.",
      },
      {
        heading: "Giá và khung pháp lý",
        text: "Giá tham chiếu từ 1,98 tỷ, quy mô 469 căn, sổ hồng sở hữu lâu dài. CĐT Thành Lâm · MBLAND · WELAND · DKRA Virgo. Vị trí giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng. Chính sách tài chính gắn với căn đủ điều kiện bán nhà ở hình thành trong tương lai theo văn bản đã công bố.",
      },
      {
        heading: "Phương án HTLS, CK và Early Bird",
        text: "HTLS: hỗ trợ vay đến 70%; hỗ trợ lãi 0% trong 18 tháng theo chương trình ngân hàng / đợt. Chuẩn (theo tiến độ): chiết khấu 4%. Thanh toán sớm 95%: chiết khấu đến 13%. Thảnh thơi: thanh toán 50% nhận nhà, chiết khấu 2%. Early Bird: chiết khấu 3% cho tối đa 100 căn đăng ký sớm (khi còn suất).",
      },
      {
        heading: "Nên chọn phương án nào?",
        text: "Ưu tiên dòng tiền nhẹ đầu kỳ: hỏi HTLS. Có vốn và muốn tối ưu giá: TTS 95% hoặc Chuẩn. Muốn nhận nhà với vốn một phần: Thảnh thơi. Đặt chỗ giai đoạn đầu: hỏi suất Early Bird. Tư vấn đối chiếu quỹ căn, tầng/view và phụ lục trước khi ký.",
      },
      {
        heading: "Disclaimer theo đợt",
        text: "Ưu đãi, lãi suất và điều kiện vay theo đợt mở bán và chương trình ngân hàng tại thời điểm ký. Bài này không thay bảng giá / phụ lục chính thức.",
      },
      {
        heading: "Nhận bảng giá",
        text: "Vào trang Liên hệ hoặc gọi / Zalo 0934 885 108 để nhận bảng giá, quỹ căn và lịch xem nhà mẫu.",
        links: [{ to: "/lien-he", label: "Đến trang liên hệ — nhận bảng giá" }],
      },
    ],
  },
  {
    slug: "tien-ich-the-camellia-wellness-nature-community",
    date: "23.09.2026",
    title: "42 tiện ích The Camellia: Wellness, Nature, Community",
    excerpt:
      "The Camellia Sơn Trà công bố 42 tiện ích theo bốn nhóm: Wellness, Nature, Community và Everyday Living. Tiện ích xếp lớp theo nhịp sống cư dân, không dồn hết ở khối đế — kèm tầng điển hình 22 căn/tầng tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà.",
    image: "/images/amenity-collage.webp",
    poster: "/images/pool-1.webp",
    gallery: [
      "/images/pool-1.webp",
      "/images/yoga-op1.webp",
      "/images/amenity-2.webp",
      "/images/amenity-collage.webp",
      "/images/lobby.webp",
    ],
    body: [
      {
        text: "The Camellia Sơn Trà công bố 42 tiện ích theo bốn nhóm: Wellness, Nature, Community và Everyday Living. Tiện ích xếp lớp theo nhịp sống cư dân, không dồn hết ở khối đế — kèm tầng điển hình 22 căn/tầng tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà.",
      },
      {
        heading: "Wellness — chăm sóc thân và nhịp sống",
        text: "Nhóm Wellness gồm phòng gym, yoga, spa, hồ bơi, jacuzzi, phòng xông hơi, đường chạy bộ, sân tập ngoài trời, sàn thiền và phòng thay đồ. Đây là lớp tiện ích dùng hàng ngày trong tòa, không phụ thuộc “đi ra ngoài mới tập”.",
      },
      {
        heading: "Nature — khoảng xanh trong và trên cao",
        text: "Nhóm Nature gồm vườn trên cao, vườn cảnh quan, khu BBQ, sân trong nhiệt đới, chòi đọc sách, đài ngắm hoàng hôn, vườn hoa trà, mặt nước cảnh quan, sân trời và mảng xanh đứng. Kết hợp vị trí gần biển Mân Thái / bán đảo Sơn Trà đã công bố trên site, đây là lớp “ở trong nhà vẫn gần thiên nhiên”.",
      },
      {
        heading: "Community — gặp gỡ và làm việc",
        text: "Nhóm Community gồm khu vui chơi trẻ em, sảnh tiệc, không gian làm việc, lounge doanh nhân, thư viện, hội trường đa năng, phòng chiếu phim, sky bar, phòng họp và lounge cư dân. Phù hợp gia đình đa thế hệ và cư dân vừa ở vừa làm việc linh hoạt.",
      },
      {
        heading: "Everyday Living — vận hành hàng ngày",
        text: "Nhóm Everyday Living gồm sảnh đón hình chữ V, lễ tân 24/7, an ninh 24/7, hầm để xe, shophouse khối đế, concierge, sạc xe điện, hệ thống locker, dịch vụ hành chính và khu thương mại. Đây là lớp hạ tầng khiến 42 tiện ích “dùng được” chứ không chỉ liệt kê brochure.",
      },
      {
        heading: "Vì sao gọi là “đáng tiền”?",
        text: "Giá căn từ 1,98 tỷ, 469 căn, sổ hồng lâu dài. Giá trị tiện ích nằm ở việc xếp lớp Wellness–Nature–Community–Everyday trong cùng tòa (không dồn khối đế) và mật độ tầng điển hình 22 căn. Chi tiết danh mục xem trang Tiện ích.",
        links: [{ to: "/tien-ich", label: "Xem trang tiện ích" }],
      },
      {
        heading: "Đặt lịch xem thực tế",
        text: "Muốn đối chiếu mặt bằng tiện ích với loại căn phù hợp, vào trang Liên hệ hoặc gọi / Zalo 0934 885 108.",
        links: [{ to: "/lien-he", label: "Đến trang liên hệ" }],
      },
    ],
  },
  {
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
          { to: "/kham-pha", label: "Mở Tour 360" },
          { to: "/gioi-thieu", label: "Tìm hiểu dự án / Fact sheet" },
        ],
      },
      {
        heading: "Cách xem Tour 360 trên điện thoại và máy tính",
        text: "Một, vào thecamellia-sontra.com/kham-pha. Hai, đợi tour tải (có thể cần mạng ổn định). Ba, kéo / vuốt hoặc dùng chuột để xoay góc nhìn; pinch để phóng nếu trình duyệt hỗ trợ. Bốn, nếu tour chưa hiện: thử trình duyệt khác hoặc Wi‑Fi mạnh hơn, rồi tải lại trang.",
        links: [{ to: "/kham-pha", label: "Trải nghiệm Tour 360" }],
      },
      {
        heading: "Nên chú ý gì khi “đi tour” ảo?",
        text: "Đối chiếu với fact đã công bố: 469 căn, 25 tầng & 2 hầm, tầng điển hình 22 căn, tiện ích xếp lớp Wellness · Nature · Community, vị trí gần biển Mân Thái khoảng 200 m (theo số công bố trên site). Tour giúp cảm nhận không gian; bảng giá và quỹ căn vẫn cần tư vấn viên xác nhận.",
      },
      {
        heading: "Sau Tour 360 — bước tiếp theo",
        text: "Khi đã xem xong, anh có thể đọc Giới thiệu, Tiện ích hoặc gửi nhu cầu loại căn qua Liên hệ. Hotline / Zalo 0934 885 108.",
        links: [
          { to: "/gioi-thieu", label: "Giới thiệu dự án" },
          { to: "/tien-ich", label: "Tiện ích" },
          { to: "/lien-he", label: "Liên hệ — nhận bảng giá" },
        ],
      },
      {
        heading: "Tour 360 có thay nhà mẫu không?",
        text: "Không — đây là công cụ xem trước; lịch nhà mẫu / tư vấn vẫn qua liên hệ.",
        links: [{ to: "/lien-he", label: "Đặt lịch / nhận tư vấn" }],
      },
      {
        heading: "Có cần tải app không?",
        text: "Không — mở bằng trình duyệt tại /kham-pha.",
        links: [{ to: "/kham-pha", label: "Mở Tour 360 trên trình duyệt" }],
      },
    ],
  },
  {
    slug: "tich-san-vinh-cuu-di-san",
    date: "22.09.2026",
    title: "Tích sản vĩnh cửu — di sản cho thế hệ mai sau",
    excerpt:
      "Sở hữu căn hộ The Camellia Sơn Trà không chỉ là an cư — mà là nắm giữ tài sản pháp lý lâu dài, bàn giao hoàn thiện, giá từ 1,98 tỷ.",
    image: "/images/featured-tich-san-16x9.jpg",
    poster: "/images/news-tich-san.webp",
    // Upper-biased landscape crop — bias cover toward logos/crowns/faces
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-tich-san.webp",
      "/images/exterior-1.webp",
      "/images/sontra-beach.webp",
    ],
    body: [
      {
        text: "Tại P. Sơn Trà — nơi rừng nguyên sinh, biển Mân Thái và nhịp phố giao nhau — The Camellia Sơn Trà được định vị không chỉ là nơi an cư, mà là tài sản pháp lý lâu dài để truyền lại cho thế hệ sau. Giá công bố từ 1,98 tỷ; bàn giao hoàn thiện; sổ hồng sở hữu lâu dài theo thông tin dự án trên site.",
      },
      {
        heading: "Pháp lý sở hữu lâu dài — nền tảng của tích sản",
        text: "Khác nhiều sản phẩm căn hộ du lịch / condotel có thời hạn, The Camellia Sơn Trà công bố pháp lý sổ hồng sở hữu lâu dài. Hồ sơ đã công bố gồm chấp thuận chủ trương (31.01.2024), quy hoạch 1/500 (22.01.2025) và xác nhận đủ điều kiện bán nhà ở hình thành trong tương lai (13.07.2026, Sở Xây dựng). Hình thức sở hữu lâu dài là điểm then chốt khi chọn tích sản thay vì sản phẩm nghỉ dưỡng có khung thời hạn.",
        links: [
          { to: "/gioi-thieu", label: "Fact sheet & pháp lý dự án" },
          { to: "/tin-tuc", label: "FAQ sở hữu lâu dài" },
        ],
      },
      {
        heading: "Bảo chứng chất lượng — đối tác đứng sau công trình",
        text: "Chất lượng tích sản gắn với đội ngũ triển khai. Chủ đầu tư Công ty TNHH Địa ốc Thành Lâm; phát triển MBLAND; kinh doanh WELAND; phân phối DKRA Virgo. Thiết kế Archivina. Nhà thầu Tập đoàn Xây dựng Delta. Quy mô 469 căn, 25 tầng nổi & 2 hầm, khu đất 4.299,9 m² tại giao lộ Lê Văn Lương – Lê Đức Thọ — địa chỉ đã công bố trên site, không suy diễn thêm.",
      },
      {
        heading: "Bàn giao hoàn thiện — nhận nhà để ở thật",
        text: "Căn hộ The Camellia Sơn Trà bàn giao hoàn thiện theo tiêu chuẩn đã công bố trên site (Xingfa, Daikin, Hafele, Grohe/Kohler). Studio đến 3 phòng ngủ — bếp mở, loggia, nội thất sẵn sàng — phù hợp an cư hoặc giữ tài sản dài hạn mà không phải tự hoàn thiện từ thô. Duplex theo lộ trình công bố mặt bằng. Bàn giao dự kiến Quý I/2028.",
        links: [
          { to: "/can-ho", label: "Xem loại căn & mặt bằng" },
          { to: "/kham-pha", label: "Tour 360 PanaMotion" },
        ],
      },
      {
        heading: "Sở hữu nhẹ nhàng — chọn nhịp thanh toán phù hợp",
        text: "Chính sách bán hàng công bố nhiều phương án để giảm áp lực dòng tiền khi tích sản. Phương án HTLS: hỗ trợ vay lên tới 70% trong 18 tháng (ân hạn nợ gốc tối đa 3 năm theo ngân hàng liên kết). Phương án chuẩn: chiết khấu 4%. Thanh toán sớm 95%: chiết khấu 13%. Ngoài ra miễn phí quản lý 12 tháng theo chính sách khi ký. Giá công bố trên site từ 1,98 tỷ. Ưu đãi và điều kiện có thể đổi theo đợt — tư vấn đối chiếu bảng giá tại thời điểm ký.",
      },
      {
        heading: "Nhận tư vấn The Camellia Sơn Trà",
        text: "Hotline / Zalo 0934 885 108. Để lại nhu cầu (ở hoặc tích sản, loại căn, ngân sách, tầng / hướng view) để được rà giỏ hàng và nhận bảng giá cập nhật. Đăng ký tại trang liên hệ hoặc nút nhận bảng giá bên dưới.",
        links: [{ to: "/lien-he", label: "Đến trang liên hệ — nhận bảng giá" }],
      },
    ],
  },
  {
    slug: "vi-sao-son-tra-man-thai",
    date: "18.09.2026",
    title: "Vì sao The Camellia Sơn Trà nằm gần biển Mân Thái?",
    excerpt:
      "The Camellia Sơn Trà tại giao lộ Lê Văn Lương – Lê Đức Thọ: gần biển Mân Thái khoảng 200 m, khoảng 5 phút tới Bán đảo Sơn Trà. Căn hộ Mân Thái và căn hộ Sơn Trà đọc vị trí theo số đã công bố.",
    image: "/images/featured-vi-tri-man-thai-16x9.jpg",
    poster: "/images/hero-aerial.webp",
    gallery: [
      "/images/hero-aerial.webp",
      "/images/sontra-beach.webp",
      "/images/linh-ung.webp",
      "/images/location-map.webp",
      "/images/exterior-1.webp",
      "/images/views/floor-15.webp",
    ],
    body: [
      {
        text: "The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng. Theo số đã công bố, dự án gần biển Mân Thái khoảng 200 m, khoảng 2 phút, và khoảng 5 phút tới Bán đảo Sơn Trà. Trang chủ gọi đây là nơi rừng, phố và biển gặp nhau: căn hộ biển kề rừng, nhà ở sổ hồng sở hữu lâu dài. Bài không so sánh với dự án khác.",
      },
      {
        text: "Chỉ dùng câu chữ và mốc đã có trên website — không thêm tên trường, bệnh viện hay trung tâm thương mại, cũng không tự đo thêm thời gian di chuyển. Đối chiếu số cố định ở fact sheet; xem bản đồ vị trí trên trang tổng quan.",
        links: [
          { to: "/", label: "Trang chủ — mục vị trí" },
          { to: "/gioi-thieu", label: "Fact sheet dự án" },
        ],
      },
      {
        heading: "Địa chỉ đã công bố: giao lộ Lê Văn Lương – Lê Đức Thọ",
        text: "Địa chỉ đầy đủ: giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng. Mục vị trí viết tọa lạc tại giao lộ này, một bước tới biển, một bước tới núi Sơn Trà. Phía sau là tầng xanh nguyên bản của núi rừng, phía trước là biển lớn rộng mở, bên cạnh là nhịp sống năng động của Đà Nẵng. Cụm “một bước” là cách nói về thế đất giao thoa, không phải mét đo từng bước — mét và phút nằm ở bảng khoảng cách.",
      },
      {
        text: "The Camellia Sơn Trà được giới thiệu là biểu tượng sống mới bên Bán đảo Sơn Trà, slogan “Phượng quy ngư hội, sơn hải giao hòa”. Câu chuyện vùng đất gọi Sơn Trà là nơi rừng gặp biển. Tên gọi lấy cảm hứng từ hoa trà — thanh nhã, bền bỉ, kín đáo — đặt trên đúng thế đất đó. Đây là phần vì sao Sơn Trà mà site đã viết, trước khi nói tới giá hay loại căn.",
      },
      {
        heading: "Căn hộ Mân Thái trên bảng khoảng cách",
        text: "Khi tìm căn hộ Mân Thái, mốc đầu tiên trên bảng khoảng cách là biển Mân Thái: khoảng 2 phút, ghi chú khoảng 200 m. Câu hỏi thường gặp lặp lại: dự án gần biển Mân Thái khoảng 200 m. Biển Mân Thái là điểm gần nhất trong danh sách đã công bố; site không đổi địa chỉ sang một bãi biển khác.",
      },
      {
        text: "Trang căn hộ ghi tầng điển hình hướng núi Sơn Trà, chùa Linh Ứng, biển Sơn Trà và biển Mân Thái. Tầm view cho xoay từ loggia tầng 5, 10, 15 và 25 — biển Mân Thái, Bán đảo Sơn Trà và đô thị Đà Nẵng. Gần biển vừa là khoảng cách tới bãi, vừa là một hướng nhìn trong tour. Không phải mọi mã căn mở thẳng ra biển: mô tả căn 2 phòng ngủ nêu view nội khu, phố hoặc góc núi biển tùy mã. Hướng cụ thể đối chiếu giỏ hàng, tầng và bảng giá lúc tư vấn.",
        links: [
          { to: "/can-ho", label: "Căn hộ và tầm view" },
          { to: "/kham-pha", label: "Tour 360 PanaMotion" },
        ],
      },
      {
        heading: "Căn hộ Sơn Trà và Bán đảo Sơn Trà",
        text: "Căn hộ Sơn Trà tại The Camellia gắn với bán đảo, không chỉ với tên phường. Bán đảo Sơn Trà khoảng 5 phút, ghi chú 400 ha rừng nguyên sinh. Chùa Linh Ứng — biểu tượng Sơn Trà — khoảng 5 phút. Biển Mỹ Khê, bãi biển trung tâm, cũng khoảng 5 phút. FAQ gom 5 phút tới chùa Linh Ứng và bán đảo Sơn Trà. Cụm kề rừng gần biển trên site nghĩa là rừng nguyên sinh ở một phía và biển Mân Thái ở mốc gần hơn khoảng 200 m. Bài không xếp hạng bãi nào hơn bãi nào.",
      },
      {
        heading: "Vẫn trong nhịp phố Đà Nẵng",
        text: "Gần biển không có nghĩa site định vị The Camellia Sơn Trà tách khỏi thành phố. Cầu Rồng khoảng 12 phút, ghi chú trung tâm Đà Nẵng. Sân bay Đà Nẵng khoảng 20 phút, ghi chú kết nối quốc tế. Ngoài các mốc này, site không công bố thêm điểm đến — nên bài không nêu thời gian tới trường, bệnh viện hay siêu thị.",
      },
      {
        text: "Bài ra mắt 26.07.2026 tóm tắt vì sao MBLAND chọn Sơn Trà: khu vực hội tụ lợi thế đô thị và giá trị thiên nhiên, kết nối trung tâm, tiếp giáp núi rừng và biển. Giao lộ Lê Văn Lương – Lê Đức Thọ được mô tả là điểm chuyển tiếp giữa không gian bán đảo và khu đô thị hiện hữu.",
      },
      {
        heading: "Nhà ở tại đúng địa chỉ này",
        text: "The Camellia Sơn Trà có 469 căn, 25 tầng nổi và 2 hầm, khu đất 4.299,9 m², sàn xây dựng 2.074 m², 09–10 căn thương mại khối đế. Giá từ 1,98 tỷ. Sổ hồng sở hữu lâu dài. Bàn giao dự kiến 2028. Chủ đầu tư Công ty TNHH Địa ốc Thành Lâm. Phát triển MBLAND — dự án đầu tiên của MBLAND tại Đà Nẵng theo bài ra mắt. Kinh doanh WELAND. Phân phối DKRA Virgo. Thiết kế Archivina. Nhà thầu Tập đoàn Xây dựng Delta. Hotline / Zalo 0934 885 108.",
      },
      {
        text: "Mặt bằng đã công bố: Studio khoảng 27,8–28,4 m² thông thủy từ 1,98 tỷ; 1 phòng ngủ + 1 khoảng 47,0 m² từ 3,28 tỷ; 2 phòng ngủ khoảng 57,4–72,1 m² từ 3,90 tỷ; 3 phòng ngủ khoảng 84,2–103,6 m² từ 7,50 tỷ. Duplex sắp công bố mặt bằng. Giá theo đợt, tầng và hướng view. Người hỏi căn hộ Sơn Trà hay căn hộ Mân Thái đang hỏi cùng một địa chỉ nhà ở. Khác biệt với sản phẩm có thời hạn nằm ở bài FAQ sở hữu lâu dài, không suy diễn thêm ở đây.",
        links: [
          { to: "/can-ho", label: "Xem loại căn và mặt bằng" },
          { to: "/gioi-thieu", label: "Bảng sự thật cố định" },
        ],
      },
      {
        heading: "Tiện ích và tầm nhìn đi cùng vị trí",
        text: "Site công bố 42 tiện ích, xếp lớp Wellness, Nature, Community và Everyday — hồ bơi, gym, yoga, vườn trên cao, sảnh chữ V — không dồn hết ở khối đế. Lớp Nature bổ sung cây xanh trong khu, không thay khoảng cách ra biển Mân Thái hay Bán đảo Sơn Trà. Tầm view được mô tả biển – rừng – thành phố – nội khu, với ảnh tầng 5, 10, 15 và 25. Tour 360 PanaMotion để xoay tòa nhà, vào căn và xem tầm view; mã căn vẫn đối chiếu trên bảng giá.",
        links: [{ to: "/kham-pha", label: "Khám phá tour 360" }],
      },
      {
        heading: "Cách đọc vị trí trước khi nhận bảng giá",
        text: "Nếu đang tìm căn hộ Mân Thái ở Sơn Trà, đọc lần lượt địa chỉ giao lộ, mốc khoảng 200 m / khoảng 2 phút tới biển Mân Thái, các mốc khoảng 5 phút tới bán đảo, chùa Linh Ứng và biển Mỹ Khê, rồi Cầu Rồng khoảng 12 phút và sân bay khoảng 20 phút. Sau đó mới chọn loại căn và gửi nhu cầu ở hoặc đầu tư, ngân sách, tầng, hướng view. Đừng suy ra mọi căn view biển chỉ vì dự án gần biển.",
      },
      {
        heading: "Nhận bảng giá The Camellia Sơn Trà",
        text: "Hotline / Zalo 0934 885 108. Để lại thông tin để nhận bảng giá và được rà giỏ theo vị trí căn, không chỉ theo địa chỉ dự án. Đăng ký tại trang liên hệ hoặc nút nhận bảng giá bên dưới.",
        links: [{ to: "/lien-he", label: "Đến trang liên hệ — nhận bảng giá" }],
      },
    ],
  },
  {
    slug: "tien-do-thi-cong-minh-chung-cam-ket",
    date: "17.09.2026",
    title: "Tiến độ thi công — minh chứng cho cam kết bàn giao",
    excerpt:
      "Cập nhật 17.09.2026: The Camellia Sơn Trà đã hoàn thiện phần móng - hầm và đang thi công phần thân theo thông tin đã công bố. Ảnh công trường sẽ được làm mới khi có bộ chụp mới.",
    image: "/images/featured-tien-do-16x9.jpg",
    imageObjectClass: "object-top",
    poster: "/images/news-tien-do-01b.webp",
    gallery: [
      "/images/news-tien-do-01b.webp",
      "/images/news-tien-do-02b.webp",
      "/images/news-tien-do-03b.webp",
    ],
    body: [
      {
        text: "Giữa hàng loạt lời hứa hẹn trên thị trường bất động sản, có một loại bằng chứng không thể làm giả: hình ảnh công trường thực tế. Không phối cảnh, không dựng 3D — chỉ là những gì đang thực sự diễn ra mỗi ngày tại công trường.",
      },
      {
        text: "Tính đến thời điểm hiện tại, The Camellia Sơn Trà đã hoàn thiện phần móng - hầm và đang triển khai thi công phần thân — đúng theo tiến độ đã cam kết với khách hàng ngay từ những ngày đầu công bố dự án.",
      },
      {
        heading: "Cập nhật 17.09.2026 — chờ bộ ảnh mới",
        text: "Ngày 17.09.2026: site chưa nhận thêm ảnh công trường mới so với bộ ảnh đã đăng (không phối cảnh). Trạng thái công bố vẫn giữ nguyên theo thông tin dự án — móng - hầm đã hoàn thiện, phần thân đang thi công; bàn giao dự kiến 2028. Khi có bộ chụp mới được xác nhận, gallery và ghi chú tiến độ trên bài này sẽ được làm mới.",
      },
      {
        heading: "Checklist đợt ảnh tiếp theo",
        text: "Khi nhận ảnh mới từ công trường, ưu tiên cập nhật: (1) toàn cảnh phần thân / số tầng đã dựng; (2) chi tiết móng - hầm hoặc kết cấu đang thi công; (3) biển báo / góc nhìn xác định vị trí Lê Văn Lương – Lê Đức Thọ nếu có; (4) ngày chụp kèm ghi chú ngắn trên site. Chỉ đăng ảnh thực tế đã xác nhận — không dùng phối cảnh thay thế tiến độ.",
      },
      {
        heading: "Mỗi tầng là một bước tới bàn giao",
        text: "Mỗi tầng được hoàn thiện không chỉ là một cột mốc kỹ thuật, mà còn là một bước tiến gần hơn đến ngày bàn giao — dự kiến Quý I/2028.",
      },
      {
        heading: "Móng - hầm: nền tảng của 25 tầng",
        text: "Với một dự án cao 25 tầng, việc hoàn thiện chắc chắn phần móng - hầm ngay từ giai đoạn đầu là nền tảng quan trọng nhất, quyết định sự vững chắc và an toàn của toàn bộ công trình về sau.",
      },
      {
        text: "Với những khách hàng đang trong giai đoạn tìm hiểu và cân nhắc, tiến độ thi công thực tế luôn là một trong những yếu tố đáng tin cậy nhất để đánh giá năng lực triển khai của chủ đầu tư — quan trọng không kém gì vị trí hay chính sách bán hàng.",
      },
      {
        heading: "Theo dõi & nhận tư vấn",
        text: "Hotline / Zalo 0934 885 108. Inbox để được cập nhật tiến độ và rà soát giỏ hàng theo nhu cầu.",
      },
    ],
  },
  {
    slug: "gio-hang-studio-1pn-2pn-phu-hop-ai",
    date: "17.09.2026",
    title: "Giỏ hàng Studio / 1PN / 2PN: loại căn nào phù hợp với bạn?",
    excerpt:
      "So sánh nhanh Studio, 1PN+1 và 2PN tại The Camellia Sơn Trà (469 căn, giá từ 1,98 tỷ). Ai nên chọn loại nào — rồi nhận bảng giá qua Zalo 0934 885 108.",
    image: "/images/featured-gio-hang-16x9.jpg",
    poster: "/images/news-gio-hang.webp",
    gallery: [
      "/images/news-gio-hang.webp",
      "/images/layouts/ch09.webp",
      "/images/layouts/ch06.webp",
      "/images/layouts/ch01.webp",
      "/images/bedroom.webp",
      "/images/kitchen.webp",
    ],
    body: [
      {
        text: "Câu trả lời ngắn: sau khi The Camellia Sơn Trà mở bán, câu hỏi phổ biến không còn là “dự án đã ra hàng chưa?”, mà là trong quỹ 469 căn — Studio, 1 phòng ngủ + 1 (1PN+1) hay 2 phòng ngủ (2PN) khớp nhu cầu của bạn. Ba nhóm này được hỏi nhiều nhất vì đã công bố mặt bằng và mức giá từ trên trang căn hộ.",
      },
      {
        text: "Bài viết chỉ dùng số liệu đã có trên site: 469 căn hộ, 25 tầng nổi & 2 hầm, pháp lý sổ hồng sở hữu lâu dài, vị trí giao lộ Lê Văn Lương – Lê Đức Thọ (P. Sơn Trà), giá Studio từ 1,98 tỷ, 1PN+1 từ 3,28 tỷ, 2PN từ 3,90 tỷ. Không suy diễn chính sách từng đợt hay tồn kho cụ thể — khi chọn căn, anh chị nên đối chiếu bảng giá và giỏ hàng tại thời điểm tư vấn.",
        links: [
          { to: "/can-ho", label: "Xem mặt bằng & loại căn" },
          { to: "/gioi-thieu", label: "Fact sheet dự án" },
        ],
      },
      {
        heading: "Studio (từ 1,98 tỷ): độc thân, chuyên gia, nhà đầu tư gọn vốn",
        text: "Studio tại The Camellia có diện tích thông thủy khoảng 27,8 – 28,4 m², mã căn tham chiếu CH-09 và CH-12A, tầng 3A đến 23. Mô tả trên site nhấn mạnh bếp mở, loggia và nội thất hoàn thiện — phù hợp chuyên gia, người độc thân và khách đầu tư muốn giữ quy mô vốn ở mức khởi điểm công bố (từ 1,98 tỷ).",
      },
      {
        text: "Studio thường hợp khi anh chị ưu tiên vị trí Sơn Trà kề biển Mân Thái hơn là số phòng ngủ; hoặc cần căn “đủ ở một mình / hai người tối giản” và vẫn muốn pháp lý nhà ở sở hữu lâu dài thay vì sản phẩm nghỉ dưỡng có thời hạn. Nếu hay đi công tác hoặc xem căn như điểm neo dài hạn gần sân bay (khoảng 20 phút theo thông tin dự án), Studio là lựa chọn gọn để bắt đầu.",
      },
      {
        text: "Ngược lại, nếu đã có kế hoạch gia đình nhỏ cần phòng ngủ tách biệt hoặc khu đa năng làm việc cố định, nên xem tiếp 1PN+1 hoặc 2PN thay vì ép không gian Studio. Giá và hướng view vẫn thay đổi theo tầng — hãy nêu ngân sách và tầng mong muốn khi liên hệ để tư vấn viên lọc giỏ.",
      },
      {
        heading: "1PN + 1 (từ 3,28 tỷ): ở một mình thoải mái hoặc làm việc tại nhà",
        text: "Căn 1 phòng ngủ + 1 có diện tích thông thủy 47,0 m² (mã CH-06), tầng 3A đến 23, giá từ 3,28 tỷ theo công bố. Điểm khác Studio là khu đa năng kèm bếp mở — hữu ích khi cần góc làm việc, tủ đồ hoặc chỗ ngủ phụ linh hoạt mà chưa muốn nhảy lên căn 2 phòng ngủ.",
      },
      {
        text: "Nhóm phù hợp: chuyên gia / cặp đôi cần riêng tư hơn Studio; khách mua lần đầu muốn “một phòng ngủ thật” trong pháp lý sổ hồng lâu dài; hoặc nhà đầu tư cân bằng giữa diện tích sử dụng và mức giá giữa Studio và 2PN. Nếu ưu tiên cho thuê dài hạn kiểu căn hộ nhà ở (không phải cam kết hotel), 1PN+1 thường dễ khớp nhu cầu người thuê độc thân hoặc cặp đôi hơn Studio siêu nhỏ — miễn tầng và hướng view chấp nhận được.",
      },
      {
        text: "Khi nào nên bỏ qua 1PN+1? Khi gia đình đã có hoặc sắp có trẻ nhỏ và cần hai phòng ngủ tách; hoặc khi anh chị xác định ở dài hạn với cha mẹ / khách thường xuyên — lúc đó 2PN (hoặc 3PN) khớp hơn. Cũng nên xem tour ảo và mặt bằng trước khi chốt cảm giác không gian.",
        links: [
          { to: "/kham-pha", label: "Tour 360 PanaMotion" },
          { to: "/can-ho", label: "Chi tiết 1PN+1 & layout" },
        ],
      },
      {
        heading: "2PN (từ 3,90 tỷ): gia đình nhỏ và ở thật hàng ngày",
        text: "Căn 2 phòng ngủ có diện tích thông thủy khoảng 57,4 – 72,1 m², nhiều mã (CH-01, CH-3A, CH-07, CH-08, CH-10, CH-15, CH-18…), giá từ 3,90 tỷ, tầng 3A đến 23. Site mô tả đây là căn cho gia đình — view nội khu, phố hoặc góc núi biển tùy mã; một số căn góc được chọn lọc.",
      },
      {
        text: "2PN phù hợp khi mục tiêu là an cư tại P. Sơn Trà: hai phòng ngủ cho vợ chồng và con (hoặc phòng khách + phòng làm việc), vẫn gần biển Mân Thái (khoảng 200 m / 2 phút) và Bán đảo Sơn Trà (khoảng 5 phút) theo thông tin dự án. Với pháp lý sở hữu lâu dài công bố trên site, đây thường là “điểm ngọt” giữa ngân sách và không gian sống thật — trước khi cân nhắc 3PN (từ 7,50 tỷ) hoặc Duplex (sắp công bố mặt bằng).",
      },
      {
        text: "Lưu ý mềm: 2PN có dải diện tích rộng; hai mã cùng “2PN” có thể khác nhau rõ về thông thủy và hướng. Đừng chọn chỉ vì nhãn loại căn — hãy đối chiếu mã căn, NTA/GFA trên trang căn hộ, rồi nhờ tư vấn viên khớp giỏ theo tầng và view. Thông tin trên website giúp định hướng sớm; trước khi đặt cọc hoặc ký HĐMB, anh chị nên đối chiếu bảng giá / hồ sơ tại thời điểm tư vấn với chủ đầu tư hoặc đơn vị phân phối.",
      },
      {
        heading: "Cách chọn nhanh trước khi nhận bảng giá",
        text: "Một khung đơn giản: (1) Mục tiêu — ở thật hay giữ tài sản dài hạn gần biển Sơn Trà. (2) Số người và nhu cầu phòng ngủ / khu đa năng. (3) Ngân sách neo theo mức từ đã công bố (Studio 1,98 tỷ · 1PN+1 3,28 tỷ · 2PN 3,90 tỷ) và chấp nhận biến động theo đợt, tầng, hướng. (4) Tầng và view ưu tiên. (5) Sẵn sàng xem mặt bằng / tour 360 trước khi đặt chỗ.",
      },
      {
        text: "The Camellia còn 3PN và Duplex trong danh mục; bài này tập trung Studio–2PN vì đó là các nhóm khách hỏi “giỏ hàng phù hợp ai” nhiều nhất sau mở bán. Mọi mức giá và mô tả trên đây bám dữ liệu /can-ho và fact sheet — không thay thế tư vấn tại thời điểm ký.",
        links: [
          { to: "/gioi-thieu", label: "Xem fact sheet" },
          { to: "/lien-he", label: "Để lại nhu cầu nhận bảng giá" },
        ],
      },
      {
        heading: "Nhận bảng giá The Camellia Sơn Trà",
        text: "Hotline / Zalo 0934 885 108 (cùng số). Gửi mẫu ngắn: ở hoặc đầu tư · loại căn (Studio / 1PN+1 / 2PN) · ngân sách · tầng / hướng view ưu tiên. Tư vấn viên sẽ đối chiếu giỏ hàng và bảng giá cập nhật theo đợt — không cần tự lọc giữa hàng trăm căn. Có thể đăng ký qua trang liên hệ hoặc nút nhận bảng giá bên dưới.",
        links: [
          { to: "/lien-he", label: "Trang liên hệ — nhận bảng giá" },
          { to: "/can-ho", label: "Quay lại trang căn hộ" },
        ],
      },
    ],
  },
  {
    slug: "su-kien-mo-ban-chinh-thuc-12-09-2026",
    date: "12.09.2026",
    title: "Premier Launch: gần 400 khách, 159 giao dịch thành công",
    excerpt:
      "12.09.2026 The Camellia Sơn Trà – Đà Nẵng mở bán chính thức. Gần 400 khách hàng và đối tác, 159 giao dịch thành công — Life Within, nơi chốn thuộc về.",
    image: "/images/featured-premier-launch-16x9.jpg",
    youtubeId: "e2vRxNmuyOk",
    youtubeTitle:
      "Video tóm tắt sự kiện mở bán chính thức Premier Launch ngày 12.09.2026",
    youtubeCaption: "Recap Premier Launch 12.09.2026.",
    gallery: [
      "/images/news-event-01.webp",
      "/images/news-event-02.webp",
      "/images/news-event-03.webp",
      "/images/news-event-04.webp",
      "/images/news-event-05.webp",
      "/images/news-event-14.webp",
      "/images/news-event-10.webp",
      "/images/news-event-16.webp",
      "/images/news-event-18.webp",
      "/images/news-event-06.webp",
      "/images/news-event-08.webp",
      "/images/news-event-09.webp",
      "/images/news-event-17.webp",
      "/images/news-event-07.webp",
      "/images/news-event-15.webp",
      "/images/news-event-11.webp",
      "/images/news-event-12.webp",
      "/images/news-event-13.webp",
      "/images/news-event-19.webp",
      "/images/news-event-20.webp",
    ],
    body: [
      {
        text: "Đà Nẵng đón một ngày mưa, nhưng bên trong khán phòng sự kiện, gần 400 khách hàng và đối tác vẫn hiện diện, lấp đầy từng hàng ghế và cùng tạo nên một ngày mở bán đầy cảm xúc.",
      },
      {
        heading: "159 giao dịch thành công",
        text: "The Camellia Sơn Trà – Đà Nẵng chính thức cán mốc 159 giao dịch thành công tính tới thời điểm kết thúc sự kiện Premier Launch ngày 12.09.2026, ghi dấu sức nóng cùng niềm tin từ những khách hàng tiên phong đã sớm đưa ra lựa chọn.",
      },
      {
        heading: "Life Within — nơi chốn thuộc về",
        text: "Chúc mừng những chủ nhân tương lai của The Camellia Sơn Trà đã tìm thấy cho mình Life Within — nơi chốn thuộc về. Căn hộ kề rừng gần biển, pháp lý sở hữu lâu dài tại P. Sơn Trà.",
      },
      {
        heading: "Tiếp tục chọn căn",
        text: "Quỹ căn còn lại theo từng đợt. Inbox hoặc gọi hotline 0934 885 108 — Zalo cùng số — để được rà soát giỏ hàng theo loại căn, ngân sách và hướng view.",
      },
    ],
  },
  {
    slug: "can-ho-son-tra-so-huu-lau-dai",
    date: "17.09.2026",
    title: "Căn hộ Sơn Trà sở hữu lâu dài: khác gì có thời hạn?",
    excerpt:
      "Căn hộ Sơn Trà sở hữu lâu dài tại The Camellia: sổ hồng lâu dài (không condotel/có hạn), giá từ 1,98 tỷ. So nhanh với sản phẩm có thời hạn trước khi hỏi CĐT / DKRA.",
    image: "/images/news-tt03-og.jpg",
    poster: "/images/news-tt03.webp",
    gallery: [
      "/images/news-tt03.webp",
      "/images/news-tt04.webp",
      "/images/sontra-beach.webp",
      "/images/exterior-1.webp",
      "/images/hero.webp",
    ],
    body: [
      {
        text: "Căn hộ Sơn Trà sở hữu lâu dài tại The Camellia, theo thông tin dự án công bố trên site, là căn hộ nhà ở gắn sổ hồng sở hữu lâu dài — không phải condotel / căn hộ du lịch có thời hạn. Dự án 469 căn, giá từ 1,98 tỷ, tại giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà. Nội dung dưới đây giúp so nhanh với sản phẩm có thời hạn trước khi xem hồ sơ gốc với CĐT / DKRA Virgo.",
      },
      {
        text: "Các câu hỏi dưới đây dựa trên số liệu dự án đã công bố (469 căn, 25 tầng nổi & 2 hầm, giá từ 1,98 tỷ, giao lộ Lê Văn Lương – Lê Đức Thọ). Nội dung không thay thế tư vấn pháp lý cá nhân — khi ký hợp đồng hãy đối chiếu hồ sơ gốc với chủ đầu tư và đơn vị phân phối.",
      },
      {
        heading: "Căn hộ Sơn Trà sở hữu lâu dài khác gì có thời hạn?",
        text: "Trên thị trường ven biển Đà Nẵng, nhiều sản phẩm mang tên “căn hộ biển” thuộc nhóm căn hộ du lịch, condotel hoặc nghỉ dưỡng có thời hạn. Người mua thường quan tâm quyền sử dụng trong khung thời gian xác định, vận hành khai thác và điều kiện chuyển nhượng theo quy chế dự án.",
      },
      {
        text: "Theo pháp lý sở hữu lâu dài công bố trên site, The Camellia được định vị là căn hộ nhà ở gắn sổ hồng sở hữu lâu dài. Khách tìm hiểu với góc nhìn an cư hoặc giữ tài sản nhà ở — khác kỳ vọng mua nghỉ dưỡng có thời hạn rồi khai thác kiểu hotel / condo hotel. Đây là điểm then chốt khi so “căn hộ Sơn Trà sở hữu lâu dài” với lựa chọn có thời hạn cùng khu vực.",
      },
      {
        text: "Lưu ý mềm: từng dự án có hồ sơ pháp lý riêng. Thông tin trên website giúp định hướng sớm; trước khi đặt cọc hoặc ký HĐMB, anh chị nên yêu cầu được xem và giải thích các giấy tờ liên quan do chủ đầu tư / đơn vị phân phối cung cấp, thay vì chỉ dựa vào bài viết tổng hợp.",
      },
      {
        heading: "Ai mua căn hộ Sơn Trà sở hữu lâu dài thì phù hợp?",
        text: "Nhóm phù hợp nhất thường là người muốn an cư tại P. Sơn Trà — gần biển Mân Thái, gần Bán đảo Sơn Trà — nhưng vẫn cần kết nối đô thị Đà Nẵng. Với pháp lý sổ hồng sở hữu lâu dài theo thông tin dự án, The Camellia hướng tới khách ưu tiên ngôi nhà để ở hoặc giữ lâu dài hơn là sản phẩm nghỉ dưỡng ngắn hạn.",
      },
      {
        text: "Người mua lần đầu hoặc gia đình nhỏ thường xem Studio đến 2PN (giá từ 1,98 tỷ cho Studio theo công bố). Cần không gian lớn hơn có thể xem 3PN hoặc theo dõi Duplex khi công bố mặt bằng. Nhà đầu tư dài hạn quan tâm vị trí kề rừng gần biển cũng phù hợp — miễn tiêu chí khớp loại căn, tầng và hướng view.",
      },
      {
        text: "Ngược lại, nếu anh chị đang tìm mô hình cam kết lợi nhuận kiểu hotel / condotel có thời hạn, The Camellia (theo định vị pháp lý nhà ở sở hữu lâu dài trên site) có thể không phải lựa chọn đúng kỳ vọng. Nên làm rõ mục tiêu: ở thật, cho thuê dài hạn, hay sản phẩm nghỉ dưỡng có thời hạn — rồi mới đối chiếu giỏ hàng.",
        links: [
          { to: "/can-ho", label: "Xem loại căn & mặt bằng" },
          { to: "/gioi-thieu", label: "Fact sheet dự án" },
        ],
      },
      {
        heading: "Giấy tờ gì nên hỏi chủ đầu tư / DKRA Virgo?",
        text: "Khi tìm hiểu căn hộ Sơn Trà sở hữu lâu dài, hãy bám hồ sơ thực tế thay vì chỉ brochure. Anh chị có thể nhờ DKRA Virgo hoặc đại diện chủ đầu tư giải thích các nhóm sau và đối chiếu tài liệu tại thời điểm tư vấn:",
      },
      {
        text: "Một, thông tin pháp lý dự án đã công bố: chủ đầu tư Công ty TNHH Địa ốc Thành Lâm, đơn vị phát triển MBLAND, kinh doanh WELAND, phân phối DKRA Virgo; pháp lý “sổ hồng sở hữu lâu dài” như ghi trên site. Hai, các mốc đã nêu trong timeline dự án (chấp thuận chủ trương, quy hoạch 1/500, đủ điều kiện bán nhà ở hình thành trong tương lai…). Ba, loại căn, diện tích thông thủy / tim tường, tầng, hướng view và chính sách thanh toán / vay tại đợt mở bán hiện tại.",
      },
      {
        text: "Bốn, tiến độ thi công và cam kết bàn giao (dự kiến 2028 theo thông tin dự án). Năm, quy trình đặt chỗ / ký HĐMB, các khoản phí và điều kiện chuyển nhượng nếu có. Không nên suy diễn số hiệu giấy chứng nhận cụ thể từ bài viết; hãy yêu cầu được xem bản sao / bản công bố hợp lệ do CĐT hoặc DKRA cung cấp trước khi quyết định.",
        links: [
          { to: "/lien-he", label: "Liên hệ nhận bảng giá & hồ sơ" },
        ],
      },
      {
        heading: "Sở hữu lâu dài liên quan gì tới vị trí Sơn Trà / biển?",
        text: "Sơn Trà là khu vực hiếm ở Đà Nẵng nơi rừng nguyên sinh, biển và đô thị giao nhau. The Camellia tọa lạc giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà — theo thông tin dự án: khoảng 200 m / 2 phút tới biển Mân Thái, khoảng 5 phút tới Bán đảo Sơn Trà và chùa Linh Ứng, khoảng 20 phút tới sân bay Đà Nẵng.",
      },
      {
        text: "Với sổ hồng sở hữu lâu dài (theo công bố trên site), vị trí kề rừng gần biển mang ý nghĩa khác căn hộ du lịch có thời hạn: anh chị cân nhắc không gian sống gắn địa điểm dài hạn — nhà ở, điểm đến gia đình, hoặc giữ tài sản ven biển Đà Nẵng — thay vì chỉ quyền sử dụng trong khung thời hạn nghỉ dưỡng.",
      },
      {
        text: "Tầm view 360 (biển – rừng – thành phố – nội khu) và tiện ích Wellness · Nature · Community được dự án nhấn mạnh như trải nghiệm ở thật hàng ngày. Anh chị có thể xem thêm tour ảo và mặt bằng để cảm nhận không gian trước khi chốt căn.",
        links: [
          { to: "/kham-pha", label: "Tour 360 PanaMotion" },
          { to: "/can-ho", label: "Căn hộ & tầm view" },
        ],
      },
      {
        heading: "Tóm tắt nhanh trước khi nhận bảng giá",
        text: "The Camellia Sơn Trà, theo thông tin dự án / pháp lý sở hữu lâu dài công bố trên site, là căn hộ nhà ở sổ hồng lâu dài tại P. Sơn Trà — khác với nhiều sản phẩm resort / condo có thời hạn. Phù hợp người an cư hoặc giữ tài sản dài hạn gần biển Mân Thái. Khi làm việc với CĐT / DKRA Virgo, hãy hỏi rõ hồ sơ pháp lý, loại căn, tiến độ và chính sách đợt bán hiện tại — rồi mới quyết định.",
      },
      {
        heading: "FAQ: căn hộ Sơn Trà sở hữu lâu dài",
        text: "The Camellia có phải căn hộ sở hữu lâu dài không? Theo pháp lý công bố trên site: có — định vị căn hộ nhà ở, sổ hồng sở hữu lâu dài (không định vị condotel / resort có thời hạn). Khác gì căn hộ / nghỉ dưỡng có thời hạn? Sản phẩm có thời hạn thường gắn quyền sử dụng trong khung thời gian và mô hình khai thác nghỉ dưỡng; The Camellia hướng an cư hoặc giữ tài sản nhà ở dài hạn theo thông tin dự án. Giấy tờ nào cần hỏi trước khi đặt cọc? Hồ sơ pháp lý dự án do CĐT / DKRA cung cấp, loại căn và diện tích, tiến độ / bàn giao (dự kiến 2028), chính sách thanh toán đợt hiện tại — đối chiếu bản công bố hợp lệ, không chỉ brochure. Giá và liên hệ tư vấn? Giá từ 1,98 tỷ (Studio) theo công bố trên site. Hotline / Zalo 0934 885 108 · trang Liên hệ · xem loại căn tại Căn hộ.",
        links: [
          { to: "/can-ho", label: "Xem loại căn" },
          { to: "/lien-he", label: "Liên hệ tư vấn" },
        ],
      },
      {
        heading: "Nhận bảng giá The Camellia Sơn Trà",
        text: "Hotline / Zalo 0934 885 108. Để lại nhu cầu (ở hoặc đầu tư, loại căn, ngân sách, tầng / hướng view) để được rà soát giỏ hàng và nhận bảng giá cập nhật. Có thể đăng ký qua trang liên hệ hoặc nút nhận bảng giá bên dưới.",
        links: [
          { to: "/lien-he", label: "Đến trang liên hệ" },
          { to: "/gioi-thieu", label: "Xem fact sheet" },
        ],
      },
    ],
  },
  {
    slug: "gio-hang-chinh-thuc-mo-09-09-2026",
    date: "09.09.2026",
    title: "Giỏ hàng đã mở: The Camellia Sơn Trà chính thức ra hàng",
    excerpt:
      "09.09.2026 The Camellia Sơn Trà chính thức ra hàng. DKRA Virgo đồng hành chọn căn theo nhu cầu, loại căn, ngân sách và hướng view.",
    image: "/images/news-gio-hang-card-og.jpg",
    poster: "/images/news-gio-hang.webp",
    gallery: [
      "/images/news-gio-hang.webp",
      "/images/hero.webp",
      "/images/exterior-1.webp",
      "/images/lifestyle-1.webp",
    ],
    body: [
      {
        text: "Sau thời gian chờ đợi, The Camellia Sơn Trà – Đà Nẵng chính thức ra hàng ngày 09.09.2026. DKRA Virgo đã sẵn sàng đồng hành cùng quý anh chị lựa chọn căn ưng ý.",
      },
      {
        heading: "Câu hỏi đã đổi",
        text: "Từ thời điểm này, điều quan trọng không còn là “bao giờ dự án ra hàng?”, mà là: trong giỏ sản phẩm ra mắt, đâu là căn phù hợp nhất với nhu cầu của mình.",
      },
      {
        heading: "Mỗi khách một tiêu chí",
        text: "Có người cần căn vừa đủ cho gia đình nhỏ. Người khác ưu tiên số phòng ngủ, tầng cao thoáng, hướng view, hoặc một khoảng ngân sách cần tối ưu. Thay vì tự tìm giữa nhiều lựa chọn, anh chị chỉ cần gửi nhu cầu — tư vấn viên sẽ rà soát giỏ hàng và đề xuất những căn khớp tiêu chí.",
      },
      {
        heading: "Gửi nhu cầu theo mẫu",
        text: "Nhu cầu: ở hoặc đầu tư. Loại căn quan tâm: Studio, 1PN, 2PN hoặc 3PN. Ngân sách dự kiến. Tiêu chí ưu tiên: tầng, hướng, view. Inbox, gọi hotline 0934 885 108 hoặc Zalo cùng số.",
      },
      {
        text: "Giỏ căn đẹp đã được giới thiệu. Nếu anh chị đã quan tâm The Camellia Sơn Trà, đây là lúc gửi nhu cầu để bắt đầu chọn căn phù hợp.",
      },
    ],
  },
  {
    slug: "chinh-thuc-ra-hang-09-09-2026",
    date: "08.09.2026",
    title: "Ra hàng 09.09.2026: The Camellia Sơn Trà chính thức mở bán",
    excerpt:
      "15h00–16h00 ngày 09.09.2026, The Camellia Sơn Trà – Đà Nẵng chính thức ra hàng. DKRA Virgo phân phối. Liên hệ nhận thông tin quỹ căn phù hợp.",
    image: "/images/news-ra-hang-card-og.jpg",
    poster: "/images/news-ra-hang.webp",
    gallery: [
      "/images/news-ra-hang.webp",
      "/images/hero.webp",
      "/images/exterior-1.webp",
      "/images/lifestyle-1.webp",
    ],
    body: [
      {
        text: "Sau thời gian được nhiều khách hàng quan tâm, tìm hiểu và chờ đợi, ngày 09.09.2026 The Camellia Sơn Trà – Đà Nẵng chính thức bước vào thời điểm được mong chờ nhất: ra hàng.",
      },
      {
        heading: "Ra quyết định đúng thời điểm",
        text: "Với bất động sản, sự khác biệt đôi khi không nằm ở việc biết thông tin sớm hơn, mà ở việc ra quyết định đúng lúc. Khi dự án mở bán, những căn phù hợp nhất về vị trí, diện tích và nhu cầu thường là lựa chọn được quan tâm đầu tiên.",
      },
      {
        heading: "Dành cho ai",
        text: "Anh chị đang tìm căn hộ an cư lâu dài tại Sơn Trà, quan tâm cơ hội đầu tư tại Đà Nẵng, cần không gian sống cho gia đình, hoặc đã theo dõi The Camellia Sơn Trà trong thời gian qua — đây là thời điểm nên hành động, trước khi những lựa chọn phù hợp đã có người quan tâm.",
      },
      {
        heading: "Thông tin ra hàng",
        text: "Thời gian: 15h00–16h00 ngày 09.09.2026. Đơn vị phân phối chính thức: DKRA Virgo. Vị trí dự án: giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng. Căn hộ kề rừng gần biển, tầm view biển – rừng – thành phố – nội khu. Pháp lý sở hữu lâu dài, 469 căn, giá từ 1,98 tỷ.",
      },
      {
        heading: "Nhận thông tin quỹ căn",
        text: "Inbox hoặc gọi hotline 0934 885 108 — Zalo cùng số — để được hỗ trợ thông tin, đối chiếu loại căn và hướng dẫn đăng ký.",
      },
    ],
  },
  {
    slug: "mbland-ra-mat-du-an-dau-tien-tai-da-nang",
    date: "31.07.2026",
    title: "MBLAND ra mắt dự án đầu tiên tại Đà Nẵng — Sơn Trà",
    excerpt:
      "Ngày 26.07.2026, MBLAND tổ chức sự kiện giới thiệu The Camellia Sơn Trà – Đà Nẵng, mở đầu hành trình kiến tạo không gian sống chất lượng bên biển.",
    image: "/images/news-launch-og.jpg",
    gallery: [
      "/images/news-launch.webp",
      "/images/news-launch-2.webp",
      "/images/news-launch-3.webp",
      "/images/event-crowd.webp",
      "/images/news-tt02.webp",
    ],
    body: [
      {
        text: "Ngày 26.07.2026, MBLAND tổ chức sự kiện giới thiệu The Camellia Sơn Trà – Đà Nẵng, mở đầu hành trình kiến tạo không gian sống chất lượng bên biển và khẳng định định hướng gắn bó lâu dài với thành phố Đà Nẵng.",
      },
      {
        heading: "Diễn biến sự kiện",
        text: "Sự kiện quy tụ đại diện chủ đầu tư, đơn vị phát triển dự án MBLAND, đơn vị phát triển kinh doanh WELAND cùng các đối tác và đội ngũ tư vấn bán hàng. Những thông tin đầu tiên về định hướng phát triển, câu chuyện thương hiệu và kế hoạch triển khai đã được công bố.",
      },
      {
        heading: "Quy mô dự án",
        text: "The Camellia Sơn Trà – Đà Nẵng là dự án đầu tiên của MBLAND tại Đà Nẵng, quy mô 25 tầng nổi và 2 hầm, gồm 469 căn hộ, pháp lý sở hữu lâu dài.",
      },
      {
        heading: "Vì sao Sơn Trà",
        text: "Sau nhiều năm nghiên cứu thị trường, MBLAND đánh giá Sơn Trà là một trong số ít khu vực hội tụ cả lợi thế đô thị và giá trị thiên nhiên: kết nối trung tâm, tiếp giáp núi rừng và biển. Tọa lạc tại giao lộ Lê Văn Lương – Lê Đức Thọ, dự án nằm ở điểm chuyển tiếp giữa không gian bán đảo và khu đô thị hiện hữu.",
      },
      {
        heading: "Cảm hứng tên gọi",
        text: "Tên gọi lấy cảm hứng từ hoa trà — biểu trưng cho vẻ đẹp bền bỉ, thanh nhã và kín đáo. The Camellia được kiến tạo như một biểu tượng sống mới bên Bán đảo Sơn Trà.",
      },
    ],
  },
  {
    slug: "ceo-meeting-the-camellia-son-tra",
    date: "08.07.2026",
    title: "CEO Meeting The Camellia Sơn Trà",
    excerpt:
      "Ngày 07.07.2026, CEO Meeting diễn ra với sự tham dự của WELAND cùng các CEO và đối tác chiến lược, lần đầu hé lộ hình ảnh dự án.",
    image: "/images/news-ceo-1-og.jpg",
    gallery: [
      "/images/news-ceo-1.webp",
      "/images/news-ceo-2.webp",
      "/images/news-ceo-3.webp",
      "/images/news-ceo-4.webp",
      "/images/lifestyle-1.webp",
    ],
    body: [
      {
        text: "Ngày 07.07.2026, CEO Meeting The Camellia Sơn Trà – Đà Nẵng đã diễn ra trong không khí trang trọng với sự tham dự của đơn vị phát triển kinh doanh WELAND cùng các CEO và đại diện đối tác chiến lược.",
      },
      {
        heading: "Nội dung cuộc họp",
        text: "Sự kiện chia sẻ bức tranh tổng quan về dự án, định hướng phát triển, kế hoạch triển khai và lần đầu hé lộ những hình ảnh của The Camellia Sơn Trà – Đà Nẵng.",
      },
      {
        heading: "Thông tin được công bố",
        text: "Vị trí tại giao lộ Lê Văn Lương – Lê Đức Thọ, quy mô 25 tầng với 469 căn hộ, pháp lý sở hữu lâu dài và định hướng vận hành do MBLAND đảm nhiệm đã được giới thiệu tới mạng lưới phân phối.",
      },
      {
        text: "CEO Meeting cũng là bước chuẩn bị cho chuỗi sự kiện ra mắt chính thức, kết nối đội ngũ tư vấn với câu chuyện thương hiệu hoa trà — biểu tượng sống mới bên Bán đảo Sơn Trà.",
      },
    ],
  },
  {
    slug: "can-ho-bien-so-huu-lau-dai-son-tra",
    date: "12.08.2026",
    title: "Căn hộ biển sở hữu lâu dài — quỹ hàng giới hạn tại Sơn Trà",
    excerpt:
      "The Camellia là một trong số ít căn hộ biển kề rừng được sở hữu lâu dài tại Sơn Trà, nơi quỹ đất ven biển ngày càng khan hiếm.",
    image: "/images/news-tt03-og.jpg",
    gallery: [
      "/images/news-tt03.webp",
      "/images/news-tt04.webp",
      "/images/sontra-beach.webp",
      "/images/linh-ung.webp",
    ],
    body: [
      {
        text: "Sơn Trà là vùng đất hiếm nơi rừng, biển và đô thị giao hòa. Phía sau là núi rừng nguyên sinh, phía trước là biển xanh khoáng đạt, bên cạnh là nhịp sống sôi động của Đà Nẵng.",
      },
      {
        heading: "Không gian sống",
        text: "The Camellia Sơn Trà – Đà Nẵng được kiến tạo như một biểu tượng sống mới bên Bán đảo Sơn Trà, mang trải nghiệm cân bằng giữa thiên nhiên trong lành và tiện nghi hiện đại — để mỗi ngày đều là một kỳ nghỉ dưỡng giữa lòng thành phố.",
      },
      {
        heading: "Pháp lý sở hữu lâu dài",
        text: "Pháp lý sở hữu lâu dài là điểm khác biệt then chốt so với nhiều sản phẩm căn hộ du lịch trên thị trường. Khách hàng an cư hoặc khai thác cho thuê đều dựa trên sổ hồng lâu dài, không giới hạn thời hạn như condotel.",
      },
      {
        heading: "Sản phẩm và chính sách",
        text: "Quỹ căn từ Studio đến Duplex, bàn giao hoàn thiện, giá từ 1,98 tỷ đồng. Dự án có nhiều phương án tài chính, trong đó hỗ trợ vay đến 70% giá trị căn hộ. Ưu đãi và tiến độ thanh toán thay đổi theo từng đợt — tư vấn viên sẽ đối chiếu bảng giá tại thời điểm ký.",
      },
    ],
  },
];

export const NAV = [
  { href: "/#du-an", label: "Dự án", to: "/" },
  { href: "/#vi-tri", label: "Vị trí", to: "/" },
  { href: "/tien-ich", label: "Tiện ích", to: "/tien-ich" },
  { href: "/can-ho", label: "Căn hộ", to: "/can-ho" },
  { href: "/kham-pha", label: "Tour 360", to: "/kham-pha" },
  { href: "/#chinh-sach", label: "Chính sách", to: "/" },
  { href: "/tin-tuc", label: "Tin tức", to: "/tin-tuc" },
  { href: "/lien-he", label: "Liên hệ", to: "/lien-he" },
] as const;

export const VIRTUAL_TOUR = {
  src: "https://the-camellia.quann111.workers.dev/",
  origin: "https://the-camellia.quann111.workers.dev",
  poster: "/images/hero-aerial.webp",
  creditUrl: "https://panamotion.vn/the_camellia_son_tra_da_nang/",
  credit: "PanaMotion VFX Studio",
} as const;

export const PARTNERS = [
  "MBLAND",
  "WELAND",
  "Thành Lâm",
  "Archivina",
  "Delta",
  "DKRA",
] as const;

export const GALLERIES = {
  hero: [
    { src: "/videos/aerial.mp4", alt: "Flycam The Camellia Sơn Trà", kind: "video" as const, poster: "/images/hero-aerial.webp" },
    { src: "/images/hero.webp", alt: "Phối cảnh tòa tháp lúc chiều", kind: "image" as const },
    { src: "/images/pool-1.webp", alt: "Hồ bơi trên cao lúc hoàng hôn", kind: "image" as const },
  ],
  exterior: [
    { src: "/images/exterior-1.webp", alt: "Mặt phố chiều muộn" },
    { src: "/images/exterior-2.webp", alt: "Góc phố lúc chạng vạng" },
  ],
  interior: [
    { src: "/images/lobby.webp", alt: "Sảnh đón" },
    { src: "/images/bedroom.webp", alt: "Phòng ngủ master" },
    { src: "/images/kitchen.webp", alt: "Bếp hoàn thiện" },
    { src: "/images/facade.webp", alt: "Không gian nội thất terracotta" },
  ],
  amenity: [
    { src: "/images/pool-1.webp", alt: "Hồ bơi The Camellia", caption: "Hồ bơi" },
    { src: "/images/pool-3.webp", alt: "Lounge hồ bơi lúc hoàng hôn", caption: "Lounge hồ bơi" },
    { src: "/images/amenity-plan.webp", alt: "Mặt bằng bể bơi, gym, yoga", caption: "Mặt bằng tiện ích", fit: "contain" as const },
    { src: "/images/amenity-collage.webp", alt: "Tiện ích kiến tạo từng khoảnh khắc", caption: "Tiện ích", fit: "contain" as const },
    { src: "/images/floor-typical.webp", alt: "Mặt bằng tầng điển hình 22 căn", caption: "Tầng điển hình · 22 căn", fit: "contain" as const },
    { src: "/images/yoga-op1.webp", alt: "Yoga studio view Sơn Trà", caption: "Yoga" },
    { src: "/images/yoga-op2.webp", alt: "Yoga studio ánh sáng tự nhiên", caption: "Yoga" },
    { src: "/images/locker.webp", alt: "Phòng thay đồ", caption: "Phòng thay đồ" },
  ],
  location: [
    { src: "/images/location-map.webp", alt: "Bản đồ vị trí The Camellia Sơn Trà", fit: "contain" as const },
    { src: "/images/sontra-beach.webp", alt: "Bãi biển Đà Nẵng" },
    { src: "/images/linh-ung.webp", alt: "Chùa Linh Ứng" },
  ],
  lifestyle: [
    { src: "/images/lifestyle-1.webp", alt: "Hoàng hôn bên tháp The Camellia" },
    { src: "/images/event-crowd.webp", alt: "CEO Meeting MBLAND" },
    { src: "/images/pool-3.webp", alt: "Lounge hồ bơi lúc hoàng hôn" },
    { src: "/images/lobby.webp", alt: "Sảnh đón The Camellia" },
    { src: "/images/yoga-op1.webp", alt: "Yoga view Sơn Trà" },
    { src: "/images/exterior-1.webp", alt: "Mặt phố Lê Văn Lương lúc chiều" },
    { src: "/images/news-launch.webp", alt: "Sự kiện ra mắt dự án" },
    { src: "/images/sontra-beach.webp", alt: "Bãi biển Sơn Trà" },
  ],
  architecture: [
    { src: "/images/facade.webp", alt: "Không gian cảm hứng terracotta" },
    { src: "/images/exterior-2.webp", alt: "Mặt đứng lúc chạng vạng" },
    { src: "/images/hero.webp", alt: "Tòa tháp nhìn từ hướng biển" },
  ],
  cta: [
    { src: "/images/pool-3.webp", alt: "Lounge hồ bơi The Camellia" },
    { src: "/images/brochure-02.webp", alt: "Góc phố chiều" },
  ],
} as const;
