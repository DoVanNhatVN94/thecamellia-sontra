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
] as const;

export type NewsBlock = {
  heading?: string;
  text: string;
  /** Optional internal paths rendered under the block (SEO FAQ articles). */
  links?: readonly {
    to: "/" | "/gioi-thieu" | "/can-ho" | "/tien-ich" | "/lien-he" | "/kham-pha" | "/tin-tuc";
    label: string;
  }[];
};
export type NewsArticle = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  poster?: string;
  /**
   * Optional Tailwind object-position for card/cover crops (e.g. "object-top").
   * Use for hero-biased assets so object-cover keeps faces/crowns, not sand.
   */
  imageObjectClass?: string;
  gallery: readonly string[];
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
      "The Camellia Sơn Trà công bố pháp lý sổ hồng sở hữu lâu dài — khác căn hộ / resort có thời hạn. Ai phù hợp, giấy tờ nên hỏi CĐT / DKRA, và liên quan vị trí biển Sơn Trà.",
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
        text: "Câu trả lời ngắn: theo thông tin dự án công bố trên site, The Camellia Sơn Trà là căn hộ nhà ở với pháp lý sổ hồng sở hữu lâu dài — không phải sản phẩm căn hộ du lịch / condotel hay resort có thời hạn sử dụng. Điểm này thường là lý do khách hàng so sánh The Camellia với nhiều dự án ven biển khác tại Đà Nẵng trước khi quyết định an cư hoặc giữ tài sản dài hạn.",
      },
      {
        text: "Các câu hỏi dưới đây dựa trên số liệu dự án đã công bố (469 căn, 25 tầng nổi & 2 hầm, giá từ 1,98 tỷ, giao lộ Lê Văn Lương – Lê Đức Thọ). Nội dung không thay thế tư vấn pháp lý cá nhân — khi ký hợp đồng hãy đối chiếu hồ sơ gốc với chủ đầu tư và đơn vị phân phối.",
      },
      {
        heading: "Sở hữu lâu dài khác gì căn hộ / resort có thời hạn?",
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
