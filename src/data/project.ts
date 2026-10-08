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
    note: "Ân hạn gốc đến 5 năm · hỗ trợ lãi theo chương trình ngân hàng",
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
};

export const NEWS: NewsArticle[] = [

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
      "Poster căn hộ tầng 3 The Camellia Sơn Trà trần cao 5,4m: phòng khách trần cao với đèn chùm và ban công nhìn ra biển, tổng giá chỉ từ 1,82 tỷ",
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
          "Poster căn hộ tầng 3 The Camellia Sơn Trà trần cao 5,4m: phòng khách trần cao với đèn chùm và ban công nhìn ra biển, tổng giá chỉ từ 1,82 tỷ",
      },
      {
        heading: "Không gian cao — rộng thoáng, đón nắng và gió biển",
        text: "Không gian cao cho cảm giác rộng thoáng ngay từ cửa vào, đón ánh sáng tự nhiên và gió biển Mân Thái. The Camellia Sơn Trà tọa lạc giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng, khoảng 200m tới biển Mân Thái, tựa bán đảo Sơn Trà. Dự án 469 căn, 25 tầng, sổ hồng sở hữu lâu dài; bàn giao dự kiến khoảng 2028. Xem thêm ba đặc quyền của BST tầng 3 và mặt bằng tiện ích trong bài giới thiệu bộ sưu tập.",
        links: [
          {
            to: "/tin-tuc/bst-can-ho-tang-3-the-camellia-11-can",
            label: "BST căn hộ tầng 3: chỉ 11 căn, trần cao đến 5,4m",
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
    title: "BST căn hộ tầng 3 The Camellia: chỉ 11 căn, trần cao đến 5,4m",
    excerpt:
      "Bộ sưu tập căn hộ tầng 3 The Camellia: chỉ 11 căn, trần cao đến 5,4m, ngoài cửa là bể bơi–gym–kid club. Tổng giá chỉ từ 1,72 tỷ. Gặp Nhật 0934 885 108.",
    image: "/images/news-tang-3-og.jpg",
    imageAlt:
      "Poster Bộ sưu tập căn hộ tầng 3 The Camellia Sơn Trà — giới hạn 11 căn, trần cao 5,4m",
    poster: "/images/news-tang-3-hero.webp",
    gallery: [
      "/images/news-tang-3-hero.webp",
      "/images/news-tang-3-mat-bang.webp",
      "/images/news-tang-3-can-1pn.webp",
    ],
    galleryFit: "contain",
    body: [
      {
        text: "Dành riêng cho những tâm hồn thích sự tự do và trải nghiệm, Bộ sưu tập căn hộ tầng 3 tại The Camellia Sơn Trà mang đến một không gian sống hội tụ ba đặc quyền khác biệt — quỹ giới hạn chỉ 11 căn. Trần cao đến 5,4m, sát tiện ích nội khu ngay ngoài cửa, tổng giá chỉ từ 1,72 tỷ. Dự án 469 căn, 25 tầng nổi & 2 hầm, sổ hồng sở hữu lâu dài, giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng; khoảng 200m tới biển Mân Thái. CĐT Công ty TNHH Địa ốc Thành Lâm · phát triển MBLAND · kinh doanh WELAND · phân phối DKRA Virgo; bàn giao dự kiến khoảng 2028.",
      },
      {
        heading: "Ba đặc quyền trải nghiệm không giới hạn",
        text: "Một khoảng sống riêng: số lượng giới hạn chỉ 11 căn, mật độ cư dân thấp, riêng tư, hành lang và không gian chung tĩnh lặng. Một khoảng cao rộng mở: trần cao đến 5,4m, thoáng đón nắng gió biển, có thể thiết kế thêm tầng lửng tăng diện tích sử dụng. Một nhịp sống tiện nghi: không chờ thang máy — ngay ngoài cửa là bể bơi, vườn cảnh quan, Kid Club, Gym & Yoga.",
      },
      {
        heading: "Mặt bằng tầng 3 — căn ở xen tiện ích",
        text: "Tầng 3 bố trí Studio, 1PN+1, 2PN 2VS và 3PN xen các tiện ích: vườn cảnh quan, gym, yoga/dancing studio, event/party ballroom, gaming room, kid club, bể bơi, sảnh lễ tân bể bơi, bể vầy trẻ em, WC–locker nam/nữ và khu ghế thư giãn. Hướng view theo mặt bằng: Núi Sơn Trà, Chùa Linh Ứng, Biển Sơn Trà, Biển Mân Thái; tiếp cận Lê Văn Lương và Lê Đức Thọ.",
        image: "/images/news-tang-3-mat-bang.webp",
        imageAlt:
          "Mặt bằng tầng 3 The Camellia Sơn Trà: căn hộ xen tiện ích bể bơi, gym, kid club, hướng Núi Sơn Trà và biển Mân Thái",
      },
      {
        heading: "Trần cao đến 5,4m — không gian linh hoạt, đầy cảm hứng",
        text: "Trần cao đến 5,4m giúp căn hộ cảm giác rộng thoáng và mở ra khả năng thiết kế tầng lửng tăng diện tích sử dụng. Ảnh căn 1PN+ trong gallery là hình ảnh minh họa phong cách không gian cao có tầng lửng — anh chị đối chiếu mặt bằng và hồ sơ kỹ thuật theo từng mã căn khi tư vấn.",
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
        text: "BST căn hộ tầng 3 có bao nhiêu căn? Chỉ 11 căn. Trần cao bao nhiêu? Trần cao đến 5,4m. Tiện ích có ngay tầng không? Có — bể bơi, vườn cảnh quan, Kid Club, Gym & Yoga ngay ngoài cửa. Tổng giá thế nào? Tổng giá chỉ từ 1,72 tỷ. Tư vấn ở đâu? 0934 885 108 gặp Nhật · Zalo cùng số · trang Liên hệ · Camellia Gallery Tầng 9 Bạch Đằng Complex.",
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
        text: "Nguồn: thông tin Bộ sưu tập căn hộ tầng 3 và mặt bằng tầng 3 do đơn vị phát triển kinh doanh / phân phối cung cấp; số liệu dự án (469 căn, 25 tầng, sổ hồng lâu dài, vị trí, CĐT · MBLAND · WELAND · DKRA Virgo, bàn giao khoảng 2028) bám thecamellia-sontra.com. Giá đã áp dụng chiết khấu theo phương thức thanh toán; giá và chính sách theo bảng giá đợt tại thời điểm ký. Không cam kết lợi nhuận. Bài không thay thế hồ sơ pháp lý hay HĐMB chính thức.",
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
      "Theo ý kiến Chủ tịch UBND TP Đà Nẵng (Thông báo 157/TB-VP), thành phố cơ bản thống nhất phương án hướng tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa – Hội An. Tin hạ tầng địa phương — không phải thông cáo The Camellia; gợi ý mềm cho người quan tâm sống dài hạn gần biển Sơn Trà.",
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
        text: "Đà Nẵng đang đẩy mạnh nghiên cứu mở rộng các tuyến đường du lịch ven biển, trong đó nổi bật là hành lang Hoàng Sa – Võ Nguyên Giáp – Trường Sa nối bán đảo Sơn Trà hướng Hội An. Nội dung dưới đây tổng hợp từ Thông báo 157/TB-VP (ý kiến Chủ tịch UBND TP Đà Nẵng Phạm Đức Ấn) được báo chí địa phương đăng tải — mang tính tin hạ tầng địa phương, không phải thông cáo của The Camellia Sơn Trà và không cam kết tăng giá bất động sản.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa – Hội An: cơ bản thống nhất phương án hướng tuyến theo Sở Xây dựng. • Chức năng: phục vụ phát triển du lịch, dịch vụ dọc biển; nghiên cứu phân luồng sang tuyến lân cận. • Chủ đầu tư dự án mở rộng: Ban QLDA ĐTXD công trình dân dụng, công nghiệp và hạ tầng kỹ thuật Đà Nẵng (CIC&TII PMU). • CIC&TII PMU lập thiết kế / cảnh quan tuyến; đề xuất hầm chui / cầu vượt cho người đi bộ xuống biển; báo cáo UBND trong tháng 5/2026. • Cải tạo cảnh quan vỉa hè / bãi cát: tổng mức đầu tư dự kiến hơn 620 tỷ đồng — giai đoạn 1 (2026–2027) khu vực trọng điểm; giai đoạn 2 (2028–2029) hạng mục còn lại. • Tiến độ thực tế theo quyết định / thông báo UBND; bài này không suy diễn thời điểm hoàn thành hay mức tăng giá BĐS.",
      },
      {
        heading: "Hành lang Sơn Trà → Hội An: thống nhất hướng tuyến",
        text: "Theo Thông báo 157/TB-VP được doanhnghiepvn.vn và cadn.com.vn đưa tin, Chủ tịch UBND TP Đà Nẵng cơ bản thống nhất phương án hướng tuyến theo đề xuất của Sở Xây dựng đối với tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa – Hội An. Đây là trục ven biển nối bán đảo Sơn Trà hướng Hội An, được định hướng phục vụ phát triển du lịch và dịch vụ dọc biển, đồng thời nghiên cứu phân luồng giao thông sang các tuyến lân cận để giảm áp lực cho hành lang chính.",
        links: [
          {
            to: "/tin-tuc/vi-sao-son-tra-man-thai",
            label: "Vì sao vị trí gần biển Mân Thái / Sơn Trà được quan tâm?",
          },
        ],
      },
      {
        heading: "Ai làm chủ đầu tư? Thiết kế & tiếp cận biển",
        text: "Chủ đầu tư dự án mở rộng được nêu là Ban Quản lý dự án đầu tư xây dựng công trình dân dụng, công nghiệp và hạ tầng kỹ thuật thành phố Đà Nẵng (CIC&TII PMU). Đơn vị này được giao lập thiết kế, cảnh quan cho tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa; nghiên cứu đề xuất hầm chui hoặc cầu vượt phục vụ người đi bộ xuống biển; và báo cáo UBND thành phố trong tháng 5/2026. Mốc báo cáo này là kế hoạch theo thông báo — tiến độ chi tiết vẫn phụ thuộc quyết định tiếp theo của UBND.",
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
        text: "Nguồn chính: Thông báo 157/TB-VP (ý kiến Chủ tịch UBND TP Đà Nẵng Phạm Đức Ấn) — tổng hợp / diễn đạt lại theo doanhnghiepvn.vn và cadn.com.vn. Hạng mục phụ: gói thầu kiên cố hóa đường Hoàng Sa ~66,6 tỷ (Liên danh Đức Nhì - GTC) theo vietnam.vn / Báo Đà Nẵng (khoảng 8/2026). Bài mang tính tin hạ tầng địa phương trên website dự án; không phải thông cáo The Camellia / CIC&TII PMU / UBND; không cam kết tăng giá BĐS, thanh khoản hay tiến độ hoàn thành từng đoạn đường. Tiến độ mở rộng theo quyết định UBND. Giá / quỹ hàng The Camellia chỉ đúng theo bảng giá và phụ lục tại thời điểm ký — giá sàn website từ 1,98 tỷ.",
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
        text: "Ngắm trăng tròn trên biển sóng vỗ — cùng người thân phá cỗ đêm rằm. Trung thu là lúc chậm lại bên gia đình, nhìn ánh trăng soi mặt biển và cảm nhận nhịp sống kề rừng, sát biển tại Sơn Trà. The Camellia Sơn Trà hướng tới một nơi để trở về: thiên nhiên gần gũi, không gian ấm áp và những khoảnh khắc sum vầy đáng nhớ.",
      },
      {
        heading: "Lời chúc Trung thu",
        text: "Thương chúc Quý khách hàng, Quý đại lý, Quý đối tác và gia đình một mùa trung thu an yên, ấm áp và trọn vẹn niềm vui!",
      },
      {
        heading: "Ghé thăm Sales Gallery",
        text: "The Camellia Son Tra - Da Nang kính mời anh chị ghé Sales Gallery tại Tầng 9, Tòa nhà Da Nang Complex, Đà Nẵng — hoặc liên hệ Hotline / Zalo 0934 885 108 để được tư vấn và đặt lịch tham quan.",
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
        text: "Gọi hoặc nhắn Zalo 0934 885 108, hoặc gửi form tại trang liên hệ để nhận bảng giá đợt hiện tại và tư vấn Studio / 1PN+1 / 2PN / 3PN phù hợp ngân sách. Sales Gallery: Tầng 9, Tòa nhà Da Nang Complex, Đà Nẵng. Giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà, Đà Nẵng.",
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
      "The Camellia Sơn Trà chính thức ra mắt Sales Gallery — không gian trải nghiệm mới tại Tầng 9, Tòa nhà Da Nang Complex. Soft Opening 25/09; Grand Opening 10/10.",
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
        text: "The Camellia Sơn Trà chính thức ra mắt Sales Gallery / văn phòng bán hàng — không gian chào đón chủ nhân tương lai tại Tầng 9, Tòa nhà Da Nang Complex, Đà Nẵng. Đây là nơi anh chị trải nghiệm dự án SON TRA – DA NANG trước khi quyết định an cư hay tích sản.",
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
        text: "Tầng 9, Tòa nhà Da Nang Complex, Đà Nẵng. Liên hệ Hotline / Zalo 0934 885 108 hoặc để lại nhu cầu tại trang Liên hệ để đặt lịch tham quan và nhận bảng giá cập nhật (giá công bố từ 1,98 tỷ).",
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
      "Quỹ đất kề biển Đà Nẵng ngày càng khan hiếm. Sở hữu căn hộ The Camellia Sơn Trà không chỉ là an cư — mà là nắm giữ tài sản pháp lý lâu dài, bàn giao hoàn thiện, giá từ 1,98 tỷ.",
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
        text: "Quỹ đất kề biển Đà Nẵng ngày càng khan hiếm. Tại P. Sơn Trà — nơi rừng nguyên sinh, biển Mân Thái và nhịp phố giao nhau — The Camellia Sơn Trà được định vị không chỉ là nơi an cư, mà là tài sản pháp lý lâu dài để truyền lại cho thế hệ sau. Giá công bố từ 1,98 tỷ; bàn giao hoàn thiện; sổ hồng sở hữu lâu dài theo thông tin dự án trên site.",
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
        heading: "Bàn giao full nội thất — nhận nhà để ở thật",
        text: "Căn hộ The Camellia Sơn Trà bàn giao hoàn thiện theo tiêu chuẩn đã công bố trên site (Xingfa, Daikin, Hafele, Grohe/Kohler). Studio đến 3 phòng ngủ — bếp mở, loggia, nội thất sẵn sàng — phù hợp an cư hoặc giữ tài sản dài hạn mà không phải tự hoàn thiện từ thô. Duplex theo lộ trình công bố mặt bằng. Bàn giao dự kiến Quý I/2028.",
        links: [
          { to: "/can-ho", label: "Xem loại căn & mặt bằng" },
          { to: "/kham-pha", label: "Tour 360 PanaMotion" },
        ],
      },
      {
        heading: "Sở hữu nhẹ nhàng — chọn nhịp thanh toán phù hợp",
        text: "Chính sách bán hàng công bố nhiều phương án để giảm áp lực dòng tiền khi tích sản. Phương án HTLS: hỗ trợ vay lên tới 70% trong 18 tháng (ân hạn nợ gốc theo ngân hàng liên kết). Phương án chuẩn: chiết khấu 4%. Thanh toán sớm 95%: chiết khấu 13%. Ngoài ra miễn phí quản lý 12 tháng theo chính sách khi ký. Giá công bố trên site từ 1,98 tỷ. Ưu đãi và điều kiện có thể đổi theo đợt — tư vấn đối chiếu bảng giá tại thời điểm ký.",
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
