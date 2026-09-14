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
    items: ["Phòng gym", "Phòng yoga", "Spa", "Hồ bơi", "Jacuzzi", "Phòng xông hơi", "Đường chạy bộ", "Sân tập ngoài trời", "Sàn thiền", "Phòng thay đồ"],
  },
  {
    id: "nature",
    title: "Nature",
    kicker: "Kết nối thiên nhiên",
    image: "/images/pool-1.webp",
    items: ["Vườn trên cao", "Vườn cảnh quan", "Khu BBQ", "Sân trong nhiệt đới", "Chòi đọc sách", "Đài ngắm hoàng hôn", "Vườn hoa trà", "Mặt nước cảnh quan", "Sân trời", "Mảng xanh đứng"],
  },
  {
    id: "community",
    title: "Community",
    kicker: "Cộng đồng",
    image: "/images/kids.webp",
    items: ["Khu vui chơi trẻ em", "Sảnh tiệc", "Không gian làm việc", "Lounge doanh nhân", "Thư viện", "Hội trường đa năng", "Phòng chiếu phim", "Sky bar", "Phòng họp", "Lounge cư dân"],
  },
  {
    id: "everyday",
    title: "Everyday Living",
    kicker: "Sống mỗi ngày",
    image: "/images/amenity-2.webp",
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

export type NewsBlock = { heading?: string; text: string };
export type NewsArticle = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  poster?: string;
  gallery: readonly string[];
  body: NewsBlock[];
};

export const NEWS: NewsArticle[] = [
  {
    slug: "su-kien-mo-ban-chinh-thuc-12-09-2026",
    date: "12.09.2026",
    title: "Premier Launch: gần 400 khách hiện diện, 159 giao dịch thành công",
    excerpt:
      "12.09.2026 The Camellia Sơn Trà – Đà Nẵng mở bán chính thức. Gần 400 khách hàng và đối tác, 159 giao dịch thành công — Life Within, nơi chốn thuộc về.",
    image: "/images/news-event-card.webp",
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
        text: "Quỹ căn còn lại theo từng đợt. Inbox hoặc gọi hotline 0934 885 108 — Zalo cùng số — để được rà soát giỏ hàng theo loại căn, ngân sách và hướng view. Email: dovannhatdn94@gmail.com.",
      },
    ],
  },
  {
    slug: "gio-hang-chinh-thuc-mo-09-09-2026",
    date: "09.09.2026",
    title: "Giỏ hàng đã mở: The Camellia Sơn Trà chính thức ra hàng",
    excerpt:
      "09.09.2026 The Camellia Sơn Trà chính thức ra hàng. DKRA Virgo đồng hành chọn căn theo nhu cầu, loại căn, ngân sách và hướng view.",
    image: "/images/news-gio-hang-card.webp",
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
        text: "Nhu cầu: ở hoặc đầu tư. Loại căn quan tâm: Studio, 1PN, 2PN hoặc 3PN. Ngân sách dự kiến. Tiêu chí ưu tiên: tầng, hướng, view. Inbox, gọi hotline 0934 885 108 hoặc Zalo cùng số. Email: dovannhatdn94@gmail.com.",
      },
      {
        text: "Giỏ căn đẹp đã được giới thiệu. Nếu anh chị đã quan tâm The Camellia Sơn Trà, đây là lúc gửi nhu cầu để bắt đầu chọn căn phù hợp.",
      },
    ],
  },
  {
    slug: "chinh-thuc-ra-hang-09-09-2026",
    date: "08.09.2026",
    title: "Chỉ còn 1 ngày: The Camellia Sơn Trà chính thức ra hàng 09.09.2026",
    excerpt:
      "15h00–16h00 ngày 09.09.2026, The Camellia Sơn Trà – Đà Nẵng chính thức ra hàng. DKRA Virgo phân phối. Liên hệ nhận thông tin quỹ căn phù hợp.",
    image: "/images/news-ra-hang-card.webp",
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
        text: "Inbox hoặc gọi hotline 0934 885 108 — Zalo cùng số — để được hỗ trợ thông tin, đối chiếu loại căn và hướng dẫn đăng ký. Email: dovannhatdn94@gmail.com.",
      },
    ],
  },
  {
    slug: "mbland-ra-mat-du-an-dau-tien-tai-da-nang",
    date: "31.07.2026",
    title: "MBLAND ra mắt dự án đầu tiên tại Đà Nẵng, chọn Sơn Trà làm điểm khởi đầu",
    excerpt:
      "Ngày 26.07.2026, MBLAND tổ chức sự kiện giới thiệu The Camellia Sơn Trà – Đà Nẵng, mở đầu hành trình kiến tạo không gian sống chất lượng bên biển.",
    image: "/images/news-launch.webp",
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
    image: "/images/news-ceo-1.webp",
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
    image: "/images/news-tt03.webp",
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
  { href: "/kham-pha", label: "Khám phá", to: "/kham-pha" },
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
