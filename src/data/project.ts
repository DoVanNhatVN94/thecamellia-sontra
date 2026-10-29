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
    slug: "phan-loai-room-tin-dung-nguoi-mua-can-ho-hoi-gi",
    date: "29.10.2026",
    title: "Room tín dụng phân loại: người mua căn hộ hỏi gì?",
    excerpt:
      "Báo Thanh Tra 29/10 ghi chuyên gia nói room tín dụng BĐS sẽ chọn lọc theo pháp lý và nhu cầu ở thực. Người mua căn hộ nên hỏi ngân hàng gì trước khi vay.",
    description:
      "Báo Thanh Tra 29/10: room tín dụng BĐS chọn lọc theo pháp lý và nhu cầu ở thực. Công văn 8509/NHNN-CSTT ngày 16/9 không nói tự nới room vay căn hộ.",
    image: "/images/news-room-tin-dung-2910-og.jpg",
    imageAlt:
      "Ảnh minh họa tạo bằng AI: bàn gỗ với sổ hồ sơ trắng, tờ giấy không chữ và biểu đồ cột không số. Không phải quầy của một ngân hàng.",
    imageCaption:
      "Ảnh minh họa tạo bằng AI: bàn làm việc với hồ sơ và biểu đồ cột không chữ, không số. Không phải ảnh một ngân hàng và không phải hồ sơ vay thật.",
    poster: "/images/news-room-tin-dung-2910-hero.webp",
    gallery: [
      "/images/news-room-tin-dung-2910-hero.webp",
      "/images/news-room-tin-dung-2910-body-01.webp",
      "/images/news-room-tin-dung-2910-body-02.webp",
      "/images/news-room-tin-dung-2910-body-03.webp",
    ],
    body: [
      {
        text: "Sáng 29/10/2026, Báo Thanh Tra (Kỳ Phương, 08:43) đăng bài về việc phân loại room tín dụng bất động sản. Bài dẫn các chuyên gia: không nên hiểu chính sách mới là nới room cho mọi dự án; dòng vốn phân hóa theo chất lượng dự án và chất lượng người vay, trong đó có pháp lý hoàn chỉnh và nhu cầu ở thực. Người mua căn hộ, trước khi ký, hỏi ngân hàng năm việc: pháp lý dự án đã được chấp thuận cho vay chưa, room còn cho vay mua nhà ở thương mại không, lãi ưu đãi bao lâu và lãi thả nổi sau đó, vốn tự có tối thiểu, và hồ sơ thu nhập. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        text: "Bài này tóm tắt báo chí và đối chiếu Công văn 8509/NHNN-CSTT ngày 16/9/2026. Bài không phải thông báo của Ngân hàng Nhà nước, không phải thông báo của một ngân hàng, và không phải tư vấn tín dụng.",
      },
      {
        text: "Ảnh đầu bài là bàn gỗ, sổ hồ sơ trắng và biểu đồ cột không chữ. Ảnh người đọc hợp đồng, ảnh sổ tay checklist và ảnh tòa căn hộ giữa bài cũng là ảnh minh họa tạo bằng AI. Các ảnh không có logo, không có biển hiệu dự án, không phải ảnh một ngân hàng và không phải ảnh một tòa nhà có tên. Trang Báo Thanh Tra ngày 29/10 đăng ảnh một dự án khác; bài này không dùng ảnh đó.",
      },
      {
        heading: "Công văn 8509 nói gì, và không nói gì, với người mua căn hộ",
        text: "Công văn số 8509/NHNN-CSTT ngày 16/9/2026 của Ngân hàng Nhà nước, về việc tăng trưởng tín dụng năm 2026, được Thư viện pháp luật và dulieuphapluat.vn đăng nội dung, và được VietNamNet (Tuân Nguyễn, 17/9/2026) tường thuật. Điểm 1: kể từ ngày 01/01/2026 đến hết ngày 31/12/2026, các tổ chức tín dụng không phải tính phần dư nợ tín dụng tăng thêm so với cuối năm 2025 đối với nhà hàng, khách sạn, khu du lịch, sinh thái, nghỉ dưỡng vào dư nợ tín dụng đối với lĩnh vực bất động sản, khi kiểm soát mức tăng trưởng tín dụng bất động sản theo điểm 4 Công văn 11686/NHNN-CSTT ngày 31/12/2025. Câu này là cách tính dư nợ trong phép kiểm soát tăng trưởng. Câu này không phải danh sách khoản vay được miễn thẩm định. (Nguồn: nội dung Công văn 8509/NHNN-CSTT; VietNamNet, 17/9/2026)",
      },
      {
        text: "Câu mở đầu công văn, theo các nguồn vừa nêu, nói việc này nhằm tạo điều kiện cho tổ chức tín dụng cấp tín dụng đối với một số loại hình bất động sản phù hợp chủ trương của Đảng, Nhà nước và chính sách của cấp có thẩm quyền. Điểm 2 yêu cầu các tổ chức tín dụng tiếp tục thực hiện nghiêm Công văn 11686/NHNN-CSTT ngày 31/12/2025 và các văn bản liên quan. VietNamNet ngày 17/9/2026 viết rằng điều 4 Công văn 11686/NHNN-CSTT ngày 31/12/2025 yêu cầu tổ chức tín dụng kiểm soát tốc độ tăng trưởng tín dụng bất động sản so với cuối năm 2025 không vượt quá tốc độ tăng trưởng tín dụng chung so với cuối năm 2025 của chính tổ chức đó. Công văn 8509 gọi cùng chỗ là điểm 4, và điều chỉnh cách đưa nhóm nhà hàng, khách sạn, khu du lịch, sinh thái, nghỉ dưỡng vào phép so sánh đó. (Nguồn: nội dung Công văn 8509/NHNN-CSTT; VietNamNet, 17/9/2026)",
      },
      {
        text: "Báo Thanh Tra ngày 29/10/2026 ghi cùng khung ngày 1/1/2026 đến 31/12/2026 và cùng nhóm nhà hàng, khách sạn, khu du lịch, sinh thái, nghỉ dưỡng. Bài viết thêm một câu: phần cho vay tăng thêm này vẫn nằm trong hạn mức tín dụng chung của từng ngân hàng. Bản nội dung Công văn 8509 trên Thư viện pháp luật và dulieuphapluat.vn không có câu tăng hạn mức tín dụng chung của tổ chức tín dụng. Bài này gắn câu «vẫn nằm trong hạn mức tín dụng chung» với Báo Thanh Tra ngày 29/10/2026, và không biến câu đó thành một câu chữ nguyên văn của công văn. (Nguồn: Báo Thanh Tra, 29/10/2026; nội dung Công văn 8509/NHNN-CSTT)",
      },
      {
        text: "Với người mua căn hộ, công văn không nói ba việc. Văn bản không có câu «tự động nới room vay mua căn hộ». Văn bản không có câu «lãi suất vay nhà sẽ giảm». Nhóm được nêu tên là nhà hàng, khách sạn, khu du lịch, sinh thái, nghỉ dưỡng, không phải khoản vay mua nhà ở thương mại của một cá nhân. Việc không tính một phần dư nợ vào phép kiểm soát tăng trưởng cũng không có nghĩa khoản vay được duyệt không cần thẩm định. Báo Thanh Tra ngày 29/10/2026 dẫn ông Nguyễn Quang Huy, CEO Khoa Tài chính - Ngân hàng, Trường Đại học Nguyễn Trãi: việc mở thêm dư địa tạo điều kiện cho thị trường phục hồi khi vốn vào dự án khả thi, có nhu cầu thực và khả năng trả nợ; cơ hội tiếp cận vốn vẫn phụ thuộc kết quả thẩm định và điều kiện cho vay của từng ngân hàng; dự án vẫn cần pháp lý, phương án kinh doanh khả thi và khả năng trả nợ. Ảnh dưới đây là người ngồi đọc hợp đồng, chữ trên giấy không đọc được. Ảnh minh họa tạo bằng AI. (Nguồn: Báo Thanh Tra, 29/10/2026; nội dung Công văn 8509/NHNN-CSTT)",
        image: "/images/news-room-tin-dung-2910-body-01.webp",
        imageAlt:
          "Người ngồi quay lưng đọc một xấp hợp đồng, chữ trên giấy không đọc được. Ảnh minh họa tạo bằng AI, không phải khách hàng của một ngân hàng.",
      },
      {
        heading: "Vì sao «phân loại room» khác với giảm lãi suất",
        text: "Theo dữ liệu Batdongsan.com mà Báo Thanh Tra dẫn ngày 29/10/2026, 63% môi giới đánh giá người mua vẫn đang quan sát, cân nhắc kỹ trước khi xuống tiền. Cùng bài, rào cản chính được nêu là lãi suất vay cao, lo ngại biến động chính sách và quy hoạch, cùng hạn chế về dòng tiền. Tỷ lệ 63% là đánh giá của môi giới về tâm lý người mua. Tỷ lệ này không phải tỷ lệ hồ sơ vay được ngân hàng duyệt, và không phải một mức lãi suất. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        text: "«Phân loại room» trong bài Báo Thanh Tra ngày 29/10/2026 là cách chuyên gia nói về chỗ dòng vốn được ưu tiên. Cách nói này không phải một thông báo giảm lãi suất. Ông Nguyễn Viết Hùng, chuyên gia tài chính – bất động sản, nói không nên hiểu chính sách mới là nới «room tín dụng riêng» cho tất cả dự án. Dòng vốn sẽ phân hóa theo chất lượng dự án và chất lượng người vay. Ngân hàng thẩm định pháp lý của dự án, khả năng tạo dòng tiền, sản phẩm có phục vụ nhu cầu thật hay không, và năng lực tài chính của chủ đầu tư. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        text: "Cùng bài Báo Thanh Tra ngày 29/10/2026, ông Nguyễn Viết Hùng nói giải pháp không phải mở tín dụng bất động sản một cách đại trà. Nếu tín dụng tăng mạnh mà vốn vẫn vào dự án pháp lý chưa hoàn chỉnh hoặc phân khúc mang tính đầu cơ, rủi ro nợ xấu chỉ bị đẩy sang sau. Việc ông gọi là phân loại room ưu tiên hạn mức cho dự án đã hoàn thiện pháp lý, có triển khai thực tế, có năng lực tài chính và có sản phẩm đáp ứng nhu cầu ở thực. Với người mua nhà, bài ghi ý áp dụng chính sách ưu đãi cho người mua để ở, có thu nhập ổn định và tỷ lệ vốn tự có hợp lý. Đó là nhận định được báo dẫn ngày 29/10/2026, chưa phải một gói lãi suất Ngân hàng Nhà nước công bố cùng ngày, và không phải ưu đãi của một dự án căn hộ. Ảnh dưới đây là một tòa căn hộ không tên, không biển hiệu. Ảnh minh họa tạo bằng AI. (Nguồn: Báo Thanh Tra, 29/10/2026)",
        image: "/images/news-room-tin-dung-2910-body-03.webp",
        imageAlt:
          "Tòa căn hộ nhiều tầng, không biển tên, nhìn từ đường phố có cây. Ảnh minh họa tạo bằng AI, không phải một dự án có tên và không phải The Camellia Sơn Trà.",
      },
      {
        text: "Chi phí vay là một lớp khác, và bài này không viết lại chủ đề lãi suất. DXS-FERI, theo Báo Thanh Tra ngày 29/10/2026, cho biết 9 tháng đầu năm 2026 lãi suất vay mua bất động sản ở mức cao, lãi thả nổi phổ biến khoảng 13%–15%/năm; cùng với hạn mức tín dụng còn hạn chế, chi phí vay tiếp tục ảnh hưởng quyết định mua. Bà Võ Nhật Liễu, Tổng Giám đốc Công ty Tư vấn Phát triển dự án BrandLift ASIA, nói mặt bằng lãi cao cùng room tín dụng thắt khiến cả nhà đầu tư lẫn người mua ở thực thận trọng hơn, tỷ lệ khách vay để mua giảm rõ so với trước, và lãi vay hiện cao gấp khoảng 3 lần so với hơn 2 năm trước, lúc đó chỉ tầm 6%. Mức khoảng 13%–15%/năm và mức tầm 6% là bối cảnh chi phí bài báo dẫn. Hai mức này không phải bảng lãi của một ngân hàng trong ngày 29/10, và không phải cam kết lãi sẽ giảm. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        text: "Bà Võ Nhật Liễu, theo Báo Thanh Tra ngày 29/10/2026, đề xuất gói tín dụng dài hạn, lãi suất ổn định cho người mua nhà lần đầu, nhà ở xã hội và nhà ở thương mại vừa túi tiền; ưu tiên hạn mức cho dự án có pháp lý đầy đủ, triển khai đúng tiến độ và giá bán vừa túi tiền; và phân biệt tín dụng phục vụ nhu cầu ở thực với vốn đầu cơ. Đây là đề xuất được báo ghi, không phải nội dung Công văn 8509/NHNN-CSTT, và không phải chính sách bán hàng của một dự án. Phân loại room, theo các câu ông Nguyễn Viết Hùng và bà Võ Nhật Liễu, trả lời câu ngân hàng còn room cho nhóm nào. Giảm lãi suất trả lời câu mỗi tháng trả bao nhiêu. Hai câu không thay nhau. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        heading: "Người mua căn hộ nên hỏi gì trước khi ký",
        text: "Năm câu dưới đây bám các điểm Báo Thanh Tra ngày 29/10/2026 đã nêu, và bám phần Công văn 8509/NHNN-CSTT không nói. Đây là việc hỏi trên hồ sơ của đúng căn và đúng ngân hàng. Bài không kết luận một ngân hàng đã trả lời các câu đó. Bài không gắn The Camellia Sơn Trà với một hạn mức room hay một mức lãi. Ảnh dưới đây là sổ tay với ô checklist trống, không chữ. Ảnh minh họa tạo bằng AI.",
        image: "/images/news-room-tin-dung-2910-body-02.webp",
        imageAlt:
          "Sổ tay mở với các ô checklist trống và bút chì, không chữ. Ảnh minh họa tạo bằng AI.",
      },
      {
        text: "Câu thứ nhất: pháp lý dự án đã được ngân hàng chấp thuận cho vay chưa. Ông Nguyễn Quang Huy, theo Báo Thanh Tra ngày 29/10/2026, nói dự án vẫn cần bảo đảm pháp lý, phương án kinh doanh khả thi và khả năng trả nợ. Ông Nguyễn Viết Hùng, cùng bài, nói ngân hàng thẩm định tính pháp lý của dự án. Người mua hỏi ngân hàng đã có chấp thuận cho vay đối với đúng dự án và đúng giai đoạn hay chưa, hay mới dừng ở tờ giới thiệu của chủ đầu tư. Công văn 8509/NHNN-CSTT không thay cho giấy chấp thuận đó. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        text: "Câu thứ hai: room còn cho vay mua nhà ở thương mại không. Công văn 8509/NHNN-CSTT ngày 16/9/2026 nói về cách tính dư nợ nhà hàng, khách sạn, khu du lịch, sinh thái, nghỉ dưỡng khi kiểm soát tăng trưởng tín dụng bất động sản. Báo Thanh Tra ngày 29/10/2026 ghi phần cho vay tăng thêm của nhóm đó vẫn nằm trong hạn mức tín dụng chung của từng ngân hàng. Người mua căn hộ hỏi hạn mức còn lại của chính ngân hàng cho khoản vay mua nhà ở, và không lấy nhóm nghỉ dưỡng trong công văn làm câu trả lời cho căn mình định mua. Ông Nguyễn Viết Hùng nói dòng vốn phân hóa theo chất lượng dự án và người vay, không phải nới room cho mọi dự án. (Nguồn: Báo Thanh Tra, 29/10/2026; nội dung Công văn 8509/NHNN-CSTT)",
      },
      {
        text: "Câu thứ ba: lãi ưu đãi bao lâu, và lãi thả nổi sau ưu đãi là bao nhiêu. DXS-FERI, qua Báo Thanh Tra ngày 29/10/2026, nêu lãi thả nổi phổ biến khoảng 13%–15%/năm trong 9 tháng đầu năm 2026. Đó là mặt bằng được báo dẫn, không phải lãi ghi trên một hợp đồng. Người mua hỏi trên giấy của ngân hàng: thời hạn ưu đãi, lãi trong thời hạn đó, công thức lãi thả nổi sau ưu đãi, và ngày bắt đầu tính thả nổi. Bà Võ Nhật Liễu nói lãi vay hiện cao gấp khoảng 3 lần so với hơn 2 năm trước. Câu đó giải thích vì sao phải hỏi số sau ưu đãi. Câu đó không thay phụ lục lãi của hồ sơ. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        text: "Câu thứ tư: vốn tự có tối thiểu là bao nhiêu. Ông Nguyễn Viết Hùng, theo Báo Thanh Tra ngày 29/10/2026, nói người mua để ở được nhắc trong ý ưu đãi là người có thu nhập ổn định và tỷ lệ vốn tự có hợp lý. Người mua hỏi ngân hàng tỷ lệ vốn tự có tối thiểu trên giá căn, khoản nào được tính là vốn tự có, và khoản nào không. Bài này không nêu một tỷ lệ phần trăm, vì Báo Thanh Tra ngày 29/10/2026 không công bố một tỷ lệ vốn tự có bắt buộc cho mọi ngân hàng. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        text: "Câu thứ năm: hồ sơ thu nhập ngân hàng cần những gì. Ông Nguyễn Viết Hùng, theo Báo Thanh Tra ngày 29/10/2026, nói ngân hàng nên đánh giá khả năng trả nợ từ dòng tiền thực tế của khách, thay vì phụ thuộc hoàn toàn vào giá trị tài sản bảo đảm, vì giá trị tài sản có thể giảm thanh khoản khi thị trường khó khăn. Bà Võ Nhật Liễu, cùng bài, nói người mua ở thực cân nhắc kỹ hơn vì sợ áp lực trả nợ. Người mua hỏi danh mục giấy thu nhập, kỳ sao kê ngân hàng yêu cầu, và cách ngân hàng tính nghĩa vụ trả nợ hàng tháng trên lãi sau ưu đãi, không chỉ trên lãi tháng ưu đãi. (Nguồn: Báo Thanh Tra, 29/10/2026)",
      },
      {
        heading: "Cần đọc hồ sơ vay cùng chuyên viên",
        text: "Anh chị muốn ngồi đọc hồ sơ vay và hồ sơ căn hộ The Camellia Sơn Trà cùng chuyên viên, liên hệ Nhật qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery – Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, tựa lưng bán đảo Sơn Trà. Phát triển dự án: MBLAND · Phát triển kinh doanh: WELAND. Buổi gặp để xem giấy tờ đã công bố và để đặt các câu hỏi về chấp thuận cho vay, room còn cho vay mua nhà ở, lãi ưu đãi và lãi thả nổi, vốn tự có, và hồ sơ thu nhập. Buổi gặp không phải thông báo room tín dụng của Ngân hàng Nhà nước, không gắn The Camellia Sơn Trà với một hạn mức room hay một mức lãi ưu đãi, và không thay thẩm định của ngân hàng.",
        links: [
          { to: "/lien-he", label: "Liên hệ — hẹn đọc hồ sơ vay" },
          { to: "/gioi-thieu", label: "Hồ sơ đã công bố" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Công văn 8509 có phải tự động nới room vay mua căn hộ không?",
        text: "Không. Công văn 8509/NHNN-CSTT ngày 16/9/2026, theo nội dung đăng trên Thư viện pháp luật và dulieuphapluat.vn, và theo VietNamNet ngày 17/9/2026, điều chỉnh cách tính dư nợ: từ 1/1/2026 đến hết 31/12/2026, tổ chức tín dụng không phải tính phần dư nợ tăng thêm so với cuối năm 2025 của nhà hàng, khách sạn, khu du lịch, sinh thái, nghỉ dưỡng vào dư nợ tín dụng bất động sản khi kiểm soát tăng trưởng tín dụng bất động sản. Văn bản không có câu tự động nới room vay mua căn hộ, không có câu lãi suất vay nhà sẽ giảm, và không miễn thẩm định từng khoản vay. Báo Thanh Tra ngày 29/10/2026 ghi phần cho vay tăng thêm của nhóm này vẫn nằm trong hạn mức tín dụng chung của từng ngân hàng.",
      },
      {
        heading: "Phân loại room có nghĩa là lãi suất vay nhà sẽ giảm không?",
        text: "Không suy ra điều đó từ các nguồn bài này dẫn. Báo Thanh Tra ngày 29/10/2026 dẫn ông Nguyễn Viết Hùng: dòng vốn phân hóa theo pháp lý, nhu cầu ở thực, thu nhập ổn định và vốn tự có hợp lý, không phải nới room đại trà. Cùng bài, DXS-FERI nêu lãi thả nổi phổ biến khoảng 13%–15%/năm trong 9 tháng đầu năm 2026, và bà Võ Nhật Liễu nói lãi vay hiện cao gấp khoảng 3 lần so với hơn 2 năm trước, lúc đó tầm 6%. Các câu này mô tả mặt bằng chi phí và cách chọn chỗ cho vốn. Các câu này không phải thông báo lãi suất giảm. Lãi của một khoản vay theo giấy từng ngân hàng tại thời điểm vay.",
      },
      {
        heading: "Người mua căn hộ nên hỏi ngân hàng những gì trước khi ký?",
        text: "Năm việc, theo các điểm Báo Thanh Tra ngày 29/10/2026 và phần Công văn 8509/NHNN-CSTT không nói: pháp lý dự án đã được ngân hàng chấp thuận cho vay chưa; room còn cho khoản vay mua nhà ở thương mại không, tách khỏi nhóm nhà hàng, khách sạn, khu du lịch, sinh thái, nghỉ dưỡng trong công văn; lãi ưu đãi trong bao lâu và lãi thả nổi sau ưu đãi tính thế nào; vốn tự có tối thiểu là bao nhiêu; hồ sơ thu nhập và cách tính khả năng trả nợ trên dòng tiền thực tế. Bài không trả lời thay cho ngân hàng, và không gắn các câu này với một mức ưu đãi của The Camellia Sơn Trà.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tóm tắt báo chí, không phải thông báo của Ngân hàng Nhà nước hay của một ngân hàng, và không phải tư vấn tín dụng. Bài không gắn The Camellia Sơn Trà với một hạn mức room hay một mức lãi suất, không cam kết lợi nhuận và không chào giá. Nguồn: Báo Thanh Tra, Kỳ Phương, 08:43 ngày 29/10/2026 — https://thanhtra.com.vn/nha-dat-57A4B2310/phan-loai-room-tin-dung-se-tao-don-bay-cho-thi-truong-bat-dong-san-cce97599e.html ; Công văn 8509/NHNN-CSTT ngày 16/9/2026, nội dung trên Thư viện pháp luật — https://thuvienphapluat.vn/cong-van/Tien-te-Ngan-hang/Cong-van-8509-NHNN-CSTT-2026-tang-truong-tin-dung-726620.aspx ; cùng nội dung trên dulieuphapluat.vn — https://dulieuphapluat.vn/van-ban/tai-chinh-ngan-hang-van-ban/cong-van-8509nhnn-cstt-ve-tang-truong-tin-dung-nam-2026-do-ngan-hang-nha-nuoc-viet-nam-ban-hanh-1908937.html ; VietNamNet, Tuân Nguyễn, 17/9/2026 — https://vietnamnet.vn/tin-dung-khach-san-khu-nghi-duong-duoc-loai-tru-khi-kiem-soat-tang-truong-bds-2556075.html. Ảnh đầu bài, ảnh người đọc hợp đồng, ảnh sổ tay checklist và ảnh tòa căn hộ: Ảnh minh họa tạo bằng AI, không logo, không biển hiệu, không phải ảnh một ngân hàng hay một dự án có tên. Bài không dùng ảnh dự án đăng trên Báo Thanh Tra.",
      },
    ],
  },
  {
    slug: "son-tra-27-10-duong-30m-cho-moi-chung-cu-cu",
    date: "29.10.2026",
    title: "Phường Sơn Trà: đường 30m, chợ mới, chung cư cũ được ưu tiên",
    excerpt:
      "Ngày 27/10/2026, lãnh đạo thành phố làm việc với phường Sơn Trà: đẩy nhanh đường 30m, rà soát chợ mới, 9 khu chung cư Nhà nước và 13 dự án bán đảo.",
    description:
      "Sáng 27/10/2026, Phó Bí thư Thường trực Thành ủy Nguyễn Khắc Toàn làm việc với phường Sơn Trà: đường 30m, khu dân cư Thọ Quang – Biển Đông, chợ, chung cư.",
    image: "/images/news-son-tra-uu-tien-2910-og.jpg",
    imageAlt:
      "Ảnh minh họa tạo bằng AI: tàu cá neo đậu trong một âu thuyền ven biển, phía sau là núi xanh, gợi khu vực âu thuyền Thọ Quang, phường Sơn Trà. Không phải ảnh chụp thực tế.",
    imageCaption:
      "Ảnh minh họa tạo bằng AI, gợi khu vực âu thuyền Thọ Quang với núi Sơn Trà phía sau; không phải ảnh chụp thực tế.",
    poster: "/images/news-son-tra-uu-tien-2910-hero.webp",
    imageObjectClass: "object-top",
    gallery: [
      "/images/news-son-tra-uu-tien-2910-hero.webp",
      "/images/news-son-tra-uu-tien-2910-body-01.webp",
      "/images/news-son-tra-uu-tien-2910-body-02.webp",
      "/images/news-son-tra-uu-tien-2910-body-03.webp",
    ],
    body: [
      {
        text: "Sáng 27/10/2026, Phó Bí thư Thường trực Thành ủy Nguyễn Khắc Toàn làm việc với Ban Thường vụ Đảng ủy phường Sơn Trà. Trước buổi làm việc, đoàn kiểm tra thực tế một số dự án trên địa bàn phường, trong đó có âu thuyền, cảng cá Thọ Quang (Nguồn: Báo Đà Nẵng, 27/10/2026). Những việc được nêu gồm tuyến đường 30m từ Ngô Quyền đến Lê Tấn Trung, khu dân cư dọc tuyến Thọ Quang – Biển Đông, chợ Sơn Trà mới, 9 khu chung cư thuộc sở hữu Nhà nước và 13 dự án trên bán đảo Sơn Trà.",
      },
      {
        text: "Bài này tóm tắt tin của Báo Đà Nẵng và Cổng Thông tin điện tử TP Đà Nẵng ngày 27/10/2026, cùng hai tin về khu vực Thọ Quang ngày 13 và 14/10/2026. Bài không phải thông báo chính thức của thành phố hay của phường, và không nêu mốc khởi công hay hoàn thành nào mà các nguồn không nêu.",
      },
      {
        heading: "Phường Sơn Trà đang ở đâu sau 10 tháng",
        text: "Theo Cổng TTĐT TP Đà Nẵng (Quang Hà, 27/10/2026), phường Sơn Trà hiện có 1.325 doanh nghiệp, 05 hợp tác xã và 4.662 hộ kinh doanh cá thể. Thu ngân sách lũy kế đến ngày 21/10 đạt 1.388 tỷ đồng, bằng 82,3% dự toán giao; chi ngân sách đạt 424,8 tỷ đồng, bằng 76,49% dự toán. Tổng kế hoạch vốn đầu tư công được giao là 120,133 tỷ đồng; đến 18/10 giải ngân đạt 80,4%, dự kiến đến 31/10 đạt 86% kế hoạch vốn. Báo Đà Nẵng cùng ngày ghi mức giải ngân đến 18/10 là 80,44%. (Nguồn: Cổng TTĐT TP Đà Nẵng; Báo Đà Nẵng, 27/10/2026)",
      },
      {
        text: "Cùng nguồn ghi phường tổ chức 357 đợt ra quân làm sạch bãi biển, âu thuyền Thọ Quang và khu vực chân núi, với hơn 20.000 lượt người tham gia. Đảng ủy phường đã ban hành ba đề án: phát triển kinh tế biển bền vững, giáo dục và nguồn nhân lực, và xây dựng cộng đồng hạnh phúc. Báo cáo cũng nêu hạn chế: hạ tầng giao thông, giáo dục, y tế, văn hóa – thể thao còn thiếu, một số dự án chậm vì giải phóng mặt bằng và tái định cư. (Nguồn: Cổng TTĐT TP Đà Nẵng, 27/10/2026)",
      },
      {
        heading: "Hạ tầng giao thông và khu dân cư",
        text: "Phó Bí thư Thường trực Thành ủy yêu cầu tập trung tháo gỡ khó khăn, đẩy nhanh tiến độ tuyến đường 30m từ Ngô Quyền đến Lê Tấn Trung và dự án khu dân cư dọc tuyến Thọ Quang – Biển Đông, theo Báo Đà Nẵng ngày 27/10/2026. Cổng TTĐT TP Đà Nẵng ghi cụ thể hơn: đẩy nhanh thủ tục đầu tư, giải phóng mặt bằng tuyến 30m, rà soát dự án khu dân cư Thọ Quang – Biển Đông và các dự án trường học. Với dự án còn vướng, phường phải xác định rõ việc thuộc thẩm quyền phường hay thành phố, đầu mối chịu trách nhiệm và thời hạn xử lý. Các nguồn không nêu ngày khởi công hay hoàn thành tuyến 30m.",
        image: "/images/news-son-tra-uu-tien-2910-body-01.webp",
        imageAlt:
          "Ảnh minh họa tạo bằng AI: công trường làm đường trong khu dân cư ven biển, máy xúc và xe lu, phía xa là núi xanh. Không phải ảnh tuyến đường 30m Ngô Quyền – Lê Tấn Trung.",
      },
      {
        heading: "Sáu việc được nêu, tóm tắt một trang",
        text: "Đồ họa dưới đây gom sáu việc được nêu trong buổi làm việc ngày 27/10/2026, rút gọn từ hai nguồn Báo Đà Nẵng và Cổng TTĐT TP Đà Nẵng. Đây là đồ họa tóm tắt chữ, không phải ảnh chụp và không phải văn bản của cơ quan nhà nước.",
        image: "/images/news-son-tra-uu-tien-2910-body-02.webp",
        imageAlt:
          "Đồ họa tóm tắt sáu việc được nêu tại buổi làm việc với phường Sơn Trà ngày 27/10/2026: đường 30m Ngô Quyền – Lê Tấn Trung, khu dân cư Thọ Quang – Biển Đông, 9 khu chung cư thuộc sở hữu Nhà nước, trường THPT, trạm y tế, chợ Sơn Trà mới, 13 dự án bán đảo và tuần tra ven biển.",
      },
      {
        heading: "Trường học, trạm y tế, chung cư và chợ",
        text: "Về hạ tầng xã hội, phường cần rà soát nhu cầu phòng học, phòng chức năng, sân chơi, nhà vệ sinh và trang thiết bị tại các trường; khẩn trương xây dựng phương án đầu tư trường THPT và đưa các hạng mục cấp thiết vào kế hoạch đầu tư giai đoạn 2026 – 2030, theo Báo Đà Nẵng ngày 27/10/2026. Cùng bài nêu xây dựng phương án phát triển trạm y tế phù hợp quy mô dân số. (Nguồn: Báo Đà Nẵng, 27/10/2026)",
      },
      {
        text: "Phường được yêu cầu rà soát 9 khu chung cư thuộc sở hữu Nhà nước, đánh giá mức độ xuống cấp, nguy cơ mất an toàn và đề xuất phương án xử lý, nhất là hệ thống điện, nước, phòng cháy chữa cháy và lối thoát nạn (Nguồn: Báo Đà Nẵng, 27/10/2026). Phường đã kiến nghị thành phố bố trí vốn ngân sách xây dựng chợ Sơn Trà và rà soát, cải tạo, sửa chữa các khu chung cư thuộc sở hữu nhà nước đã xuống cấp; phía thành phố yêu cầu rà soát phương án đầu tư chợ Sơn Trà mới (Nguồn: Cổng TTĐT TP Đà Nẵng, 27/10/2026). Các nguồn không nêu tên 9 khu chung cư, vị trí chợ mới hay mức vốn.",
      },
      {
        heading: "Bán đảo Sơn Trà và dịch vụ bãi biển",
        text: "Sơn Trà cần phối hợp với các sở, ngành tháo gỡ thủ tục pháp lý, quy hoạch đối với các dự án trên bán đảo, và thúc đẩy khai thác dịch vụ tại các bãi biển theo phương án được thành phố phê duyệt, theo Cổng TTĐT TP Đà Nẵng ngày 27/10/2026. Báo Đà Nẵng cùng ngày ghi Phó Bí thư Thường trực Thành ủy đề nghị UBND thành phố chỉ đạo các sở, ngành tháo gỡ vướng mắc pháp lý, quy hoạch đối với 13 dự án trên bán đảo Sơn Trà. Các bài không liệt kê tên 13 dự án và không nêu dự án nào sẽ được triển khai trước.",
        image: "/images/news-son-tra-uu-tien-2910-body-03.webp",
        imageAlt:
          "Ảnh minh họa tạo bằng AI: một con phố dân cư với nhà ống, cây xanh và xe máy, cuối phố là núi xanh, gợi khung cảnh phường Sơn Trà. Không phải ảnh chụp thực tế.",
      },
      {
        text: "Về an ninh, các lực lượng cần phối hợp tuần tra, kiểm soát khu vực cảng cá, âu thuyền, ven biển và bán đảo Sơn Trà, theo Báo Đà Nẵng ngày 27/10/2026. Định hướng kinh tế được nêu là phát huy lợi thế kinh tế biển, du lịch và dịch vụ gắn với bảo vệ cảnh quan, môi trường, rừng và đa dạng sinh học. (Nguồn: Báo Đà Nẵng, 27/10/2026)",
      },
      {
        heading: "Âu thuyền và cảng cá Thọ Quang trong tháng 10",
        text: "Theo Báo Đà Nẵng ngày 13/10/2026, kè mái nghiêng phía đông nam âu thuyền Thọ Quang đã được gia cố, nâng cấp; các vị trí lún sụt đã được sửa. Ban Quản lý âu thuyền và cảng cá Đà Nẵng đang làm chủ đầu tư dự án sửa chữa, thay thế 10 phao neo hư hỏng tại âu thuyền, bằng ngân sách thành phố, dự kiến hoàn thành trong năm 2026. Cùng bài dẫn ông Phạm Trung Thành, Phó trưởng ban phụ trách, cho biết thành phố đã huy động vốn Trung ương để nâng cấp âu thuyền Thọ Quang. (Nguồn: Báo Đà Nẵng, 13/10/2026)",
      },
      {
        text: "Ngày 14/10/2026, Diễn đàn Giao thông (Công Huy) dẫn lãnh đạo Sở Xây dựng cho biết sở đã nghiên cứu, cập nhật, hiệu chỉnh nội dung quy hoạch liên quan việc di dời cảng cá Thọ Quang và nâng cấp cảng cá Hồng Triều cho phù hợp Quy hoạch chung thành phố. Cùng bài nêu một doanh nghiệp đề xuất dự án «Khu phức hợp đô thị dịch vụ bến du thuyền Thọ Quang» và kiến nghị cơ chế đặc thù. Bài cũng ghi thành phố hiện chưa có cơ chế, chính sách đặc thù để di dời cảng cá Thọ Quang, và việc nâng cấp Hồng Triều để thay thế chức năng cảng Thọ Quang chưa có đầy đủ cơ sở triển khai. Đây là đề xuất và việc đang nghiên cứu, chưa phải quyết định di dời. (Nguồn: Diễn đàn Giao thông, 14/10/2026)",
      },
      {
        heading: "Đọc hồ sơ một căn tại phường Sơn Trà",
        text: "Anh chị đang tìm hiểu căn hộ sở hữu lâu dài tại phường Sơn Trà có thể xem hồ sơ The Camellia Sơn Trà, tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà. Chủ đầu tư là Công ty TNHH Địa ốc Thành Lâm; MBLAND phát triển dự án, WELAND phát triển kinh doanh. Giá sàn website từ 1,98 tỷ; giá và chính sách theo bảng giá và phụ lục tại thời điểm ký. Liên hệ Nhật qua hotline hoặc Zalo 0934 885 108. Các việc thành phố nêu ngày 27/10/2026 là định hướng của địa phương; bài không gắn chúng với tiến độ, giá hay giá trị của một căn hộ cụ thể.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Tuyến đường 30m ở phường Sơn Trà nối từ đâu đến đâu?",
        text: "Theo Báo Đà Nẵng và Cổng TTĐT TP Đà Nẵng ngày 27/10/2026, tuyến đường 30m nối từ đường Ngô Quyền đến đường Lê Tấn Trung. Yêu cầu tại buổi làm việc là đẩy nhanh thủ tục đầu tư, giải phóng mặt bằng và tiến độ. Các nguồn không nêu ngày khởi công, ngày hoàn thành hay tổng mức đầu tư của tuyến.",
      },
      {
        heading: "Cảng cá Thọ Quang đã có quyết định di dời chưa?",
        text: "Chưa có quyết định di dời được công bố trong các nguồn bài này dẫn. Diễn đàn Giao thông ngày 14/10/2026 ghi Sở Xây dựng đang nghiên cứu, cập nhật quy hoạch liên quan việc di dời cảng cá Thọ Quang và nâng cấp cảng cá Hồng Triều; thành phố hiện chưa có cơ chế, chính sách đặc thù để di dời. Đề xuất bến du thuyền Thọ Quang là đề xuất của doanh nghiệp, chưa phải dự án được phê duyệt.",
      },
      {
        heading: "13 dự án trên bán đảo Sơn Trà đã được tháo gỡ chưa?",
        text: "Chưa có kết quả tháo gỡ được công bố trong tin ngày 27/10/2026. Báo Đà Nẵng ghi Phó Bí thư Thường trực Thành ủy đề nghị UBND thành phố chỉ đạo các sở, ngành tháo gỡ vướng mắc pháp lý, quy hoạch đối với 13 dự án; phường Sơn Trà cũng kiến nghị tháo gỡ thủ tục pháp lý để triển khai các dự án này. Các bài không nêu tên dự án và không nêu thời hạn.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tóm tắt báo chí và tin của Cổng TTĐT TP Đà Nẵng về buổi làm việc ngày 27/10/2026 và khu vực Thọ Quang. Bài không phải thông báo chính thức, không phải tư vấn đầu tư. Số liệu và yêu cầu theo đúng các nguồn tại thời điểm đăng. Nguồn: Báo Đà Nẵng, 27/10/2026 — https://baodanang.vn/son-tra-can-phat-huy-loi-the-nang-cao-hieu-qua-quan-ly-va-phat-trien-dia-phuong-3356590.html ; Cổng TTĐT TP Đà Nẵng, Quang Hà, 27/10/2026 — https://danang.gov.vn/vi/w/pho-bi-thu-thuong-truc-thanh-uy-nguyen-khac-toan-lam-viec-voi-ban-thuong-vu-dang-uy-phuong-son-tra ; Báo Đà Nẵng, 13/10/2026 — https://baodanang.vn/bao-dam-an-toan-neo-dau-tau-ca-3354986.html ; Diễn đàn Giao thông, Công Huy, 14/10/2026 — https://diendangiaothong.vn/gt360/da-nang-cap-nhat-quy-hoach-di-doi-cang-ca-tho-quang-nang-cap-cang-hong-trieu-tintuc84497. Ảnh đầu bài, ảnh công trường làm đường và ảnh phố dân cư: Ảnh minh họa tạo bằng AI, không phải ảnh chụp thực tế, không mô tả công trình, dự án hay người cụ thể. Đồ họa sáu việc: đồ họa tóm tắt chữ từ các nguồn trên, không dùng AI.",
      },
    ],
  },
  {
    slug: "so-huu-chung-quy-bao-tri-2-nguoi-mua-can-ho-can-hoi",
    date: "29.10.2026",
    title: "Sở hữu chung, quỹ bảo trì 2%: người mua căn hộ cần hỏi gì?",
    excerpt:
      "Chiều 28/10, Quốc hội thảo luận Luật Nhà ở (sửa đổi); dự thảo làm rõ sở hữu riêng, sở hữu chung. Người mua căn hộ nên đọc kỹ hợp đồng và quỹ bảo trì 2%.",
    description:
      "Chiều 28/10/2026 Quốc hội thảo luận dự thảo Luật Nhà ở. Sở hữu riêng, sở hữu chung được làm rõ; quỹ bảo trì 2% giữ mức đóng. Luật chưa có hiệu lực.",
    image: "/images/news-so-huu-chung-2910-og.jpg",
    imageAlt:
      "Bộ trưởng Bộ Xây dựng Trần Hồng Minh giải trình tại hội trường Quốc hội chiều 28/10/2026 về dự thảo Luật Nhà ở (sửa đổi). Ảnh: Media Quốc hội/Báo Xây dựng.",
    imageCaption:
      "Bộ trưởng Bộ Xây dựng Trần Hồng Minh giải trình, làm rõ một số nội dung đại biểu quan tâm tại hội trường chiều 28/10/2026. Ảnh: Media Quốc hội/Báo Xây dựng.",
    poster: "/images/news-so-huu-chung-2910-hero.webp",
    gallery: [
      "/images/news-so-huu-chung-2910-hero.webp",
      "/images/news-so-huu-chung-2910-body-01.webp",
      "/images/news-so-huu-chung-2910-body-02.webp",
      "/images/news-so-huu-chung-2910-body-03.webp",
    ],
    body: [
      {
        text: "Chiều 28/10/2026, Quốc hội thảo luận dự thảo Luật Nhà ở (sửa đổi) tại hội trường, với 30 đại biểu phát biểu; phiên thảo luận tổ ngày 22/10 đã có 141 lượt đại biểu phát biểu (Nguồn: Báo Xây dựng, 28/10/2026). Thảo luận chiều 28/10 gồm nhiều nhóm việc, trong đó có nhà ở xã hội, nhà ở cho thuê, chất lượng quản lý nhà chung cư và việc cải tạo chung cư cũ. Với người mua căn hộ, chỗ cần đọc là cách dự thảo làm rõ sở hữu riêng và sở hữu chung, cùng kinh phí bảo trì 2%: hai quy định này cho biết ai trả tiền và ai quản lý sảnh, thang máy, hành lang và hệ thống thoát nạn sau khi nhận nhà (Nguồn: Báo Xây dựng, 28/10/2026; Báo Chính phủ, 22/10/2026).",
      },
      {
        text: "Bài này tóm tắt báo chí về một dự thảo đang được Quốc hội thảo luận tại kỳ họp. Bài không phải thông báo chính thức của Quốc hội hay của Bộ Xây dựng, không phải nghị định hướng dẫn, và không phải tư vấn pháp lý cho một hợp đồng cụ thể.",
      },
      {
        text: "Ảnh đầu bài là Bộ trưởng Bộ Xây dựng Trần Hồng Minh giải trình tại hội trường chiều 28/10/2026. Ảnh: Media Quốc hội/Báo Xây dựng. Ảnh trong phần ba nhóm sở hữu là Đại biểu Quốc hội Vũ Văn Tiến (Hải Phòng) phát biểu tại thảo luận tổ. Ảnh: Báo Chính phủ. Ảnh sảnh thang máy và ảnh người đọc báo cáo là ảnh minh họa tạo bằng AI, không gắn một tòa nhà có tên và không có logo.",
      },
      {
        heading: "Chiều 28/10 Quốc hội bàn gì về quản lý chung cư",
        text: "Chiều 28/10/2026, Quốc hội thảo luận dự thảo Luật Nhà ở (sửa đổi) tại hội trường. Theo Báo Xây dựng (Văn Duẩn, 28/10/2026), phiên này có 30 đại biểu phát biểu. Cùng bài ghi phiên thảo luận tổ ngày 22/10 đã có 141 lượt đại biểu phát biểu. Số 30 là số đại biểu phát biểu tại hội trường, số 141 là số lượt phát biểu tại phiên tổ, theo đúng cách bài báo ghi, không phải số điều khoản đã được chốt. (Nguồn: Báo Xây dựng, 28/10/2026)",
      },
      {
        text: "Nội dung thảo luận, theo Báo Xây dựng ngày 28/10/2026, gồm nhiều nhóm việc, trong đó có nhà ở xã hội, nhà ở cho thuê, chất lượng quản lý nhà chung cư, và những vướng mắc khi cải tạo chung cư cũ. Phần quản lý nhà chung cư là phần người mua căn hộ gặp lại trên hợp đồng sau khi nhận nhà: ai giữ sảnh, thang máy, hành lang, và ai trả tiền bảo trì các hạng mục đó. (Nguồn: Báo Xây dựng, 28/10/2026)",
      },
      {
        text: "Bộ trưởng Bộ Xây dựng Trần Hồng Minh giải trình rằng dự thảo xác định thời hạn sử dụng căn hộ chung cư theo niên hạn công trình của tòa nhà, theo Báo Xây dựng ngày 28/10/2026. Khi nhà phải phá dỡ, chủ sở hữu được bồi thường, được hỗ trợ tái định cư, hoặc góp tiền để xây dựng lại. Bài báo không nêu một số năm niên hạn cho một tòa cụ thể, và không nêu mức bồi thường. (Nguồn: Báo Xây dựng, 28/10/2026)",
      },
      {
        text: "Để giảm tranh chấp trong quản lý vận hành, dự thảo cũng làm rõ phần sở hữu riêng và phần sở hữu chung, theo Báo Xây dựng ngày 28/10/2026. Chi tiết của việc phân định này được giao cho nghị định hướng dẫn. Câu này nói dự thảo đang làm rõ ranh giới sở hữu, không nói một hợp đồng mua căn hộ hôm nay đã được viết lại theo nghị định đó. (Nguồn: Báo Xây dựng, 28/10/2026)",
      },
      {
        heading: "Ba nhóm sở hữu đại biểu đề nghị phân định",
        text: "Đại biểu Quốc hội Vũ Văn Tiến (Hải Phòng) đề nghị phân biệt ba nhóm hạng mục, nhất là ở nhà hỗn hợp nhiều chức năng, theo Báo Chính phủ ngày 22/10/2026. Nhóm một là hạng mục sở hữu riêng hợp pháp. Nhóm hai là hạng mục thuộc sở hữu chung của từng khu chức năng. Nhóm ba là hạng mục thuộc sở hữu chung của cả tòa nhà. Đây là ý kiến đại biểu tại phiên thảo luận tổ, chưa phải điều Quốc hội đã thông qua. (Nguồn: Báo Chính phủ, 22/10/2026)",
        image: "/images/news-so-huu-chung-2910-body-01.webp",
        imageAlt:
          "Đại biểu Quốc hội Vũ Văn Tiến (Hải Phòng) phát biểu tại phiên thảo luận tổ về sở hữu chung, sở hữu riêng và quỹ bảo trì nhà chung cư. Ảnh: Báo Chính phủ.",
      },
      {
        text: "Việc xác định sở hữu, theo ý kiến được Báo Chính phủ ghi ngày 22/10/2026, căn cứ hồ sơ dự án, thiết kế đã phê duyệt, quy định về sở hữu, và hợp đồng mua bán hoặc thuê mua. Kết cấu chịu lực, hệ thống thoát nạn và hạ tầng kỹ thuật phục vụ cả tòa nhà phải thuộc sở hữu chung. Cùng ý kiến nêu cần có quy tắc xử lý hợp đồng không ghi rõ sở hữu. Người mua vì vậy không chỉ đọc một câu «phần chung» trên tờ giới thiệu, mà hỏi bốn chỗ vừa nêu có khớp nhau hay không. (Nguồn: Báo Chính phủ, 22/10/2026)",
      },
      {
        text: "Thang máy và hành lang không mặc nhiên là sở hữu riêng chỉ vì chúng phục vụ một khu, theo Báo Chính phủ ngày 22/10/2026. Ý này nằm trong phần đại biểu đề nghị phân định sở hữu ở nhà hỗn hợp, và chưa phải quy định đang áp dụng cho hợp đồng ký hôm nay. Một khu căn hộ có thang máy riêng vẫn phải hỏi thang đó được ghi là sở hữu chung của khu, của cả tòa, hay là sở hữu riêng. (Nguồn: Báo Chính phủ, 22/10/2026)",
      },
      {
        heading: "Quỹ bảo trì 2%: giữ mức đóng, minh bạch cách dùng",
        text: "Kinh phí bảo trì 2% được giữ nguyên mức đóng, theo Báo Chính phủ ngày 22/10/2026. Việc phân bổ, công khai, giám sát và sử dụng khoản này phải rõ. Quỹ của khu này không được dùng để chi cho hạng mục chỉ phục vụ khu khác. Ảnh dưới đây là sảnh căn hộ với hai thang máy, không biển hiệu và không logo. Ảnh minh họa tạo bằng AI. (Nguồn: Báo Chính phủ, 22/10/2026)",
        image: "/images/news-so-huu-chung-2910-body-02.webp",
        imageAlt:
          "Sảnh căn hộ với hai thang máy, ghế gỗ và cây xanh, không biển hiệu và không logo. Ảnh minh họa tạo bằng AI.",
      },
      {
        text: "Phương án phân quỹ được nêu trên Báo Chính phủ ngày 22/10/2026 gồm hai phần. Ban quản trị quản lý phần dành cho hạng mục dùng chung cả tòa và phần diện tích chung của khu căn hộ. Chủ sở hữu khu thương mại, dịch vụ quản lý phần dành cho diện tích chung của khu đó. Đây là phương án được đề nghị, chưa phải cơ cấu quỹ đã được Quốc hội chốt trong luật. (Nguồn: Báo Chính phủ, 22/10/2026)",
      },
      {
        text: "Với phần diện tích chủ đầu tư giữ lại để kinh doanh dài hạn, gồm văn phòng, khách sạn và cửa hàng, dự thảo tính kinh phí bảo trì 2% theo giá căn hộ cao nhất tại thời điểm bàn giao, theo Báo Chính phủ ngày 22/10/2026. Đại biểu đề nghị bổ sung một cách định giá theo chức năng của không gian đó, được thẩm định khách quan và được công khai lúc bàn giao. Bài báo không nêu một mức giá căn hộ, và không nêu tên một dự án. (Nguồn: Báo Chính phủ, 22/10/2026)",
      },
      {
        text: "Đại biểu Quốc hội Tạ Thị Yên (Điện Biên) đề nghị công khai, minh bạch hơn khi sử dụng quỹ và tài sản chung, theo Báo Chính phủ ngày 22/10/2026. Đại biểu cũng đề nghị làm rõ trách nhiệm của ban quản trị và đơn vị quản lý vận hành, có giám sát của cơ quan nhà nước, và có cách để cư dân tiếp cận thông tin cùng tham gia giám sát. Cùng ý kiến đề nghị bảo vệ người mua khi dự án chậm, đình trệ, hoặc khi chủ đầu tư không thực hiện cam kết. (Nguồn: Báo Chính phủ, 22/10/2026)",
      },
      {
        heading: "Người mua căn hộ nên hỏi gì trước khi ký",
        text: "Năm câu dưới đây bám các điểm Báo Xây dựng ngày 28/10/2026 và Báo Chính phủ ngày 22/10/2026 đã nêu. Đây là việc người mua hỏi trên hồ sơ của đúng căn mình định ký. Bài không kết luận một tòa nhà cụ thể đã trả lời các câu đó.",
      },
      {
        text: "Câu thứ nhất: hợp đồng liệt kê hạng mục nào là sở hữu riêng, hạng mục nào là sở hữu chung. Báo Chính phủ ngày 22/10/2026 ghi ý kiến xác định sở hữu căn cứ hồ sơ dự án, thiết kế đã phê duyệt, quy định về sở hữu, và hợp đồng mua bán hoặc thuê mua. Người mua đối chiếu danh mục trên hợp đồng với các giấy đó, và hỏi hợp đồng có chỗ nào chưa ghi rõ sở hữu hay không, vì cùng nguồn nêu cần có quy tắc xử lý hợp đồng không ghi rõ.",
      },
      {
        text: "Câu thứ hai: kinh phí bảo trì 2% được thu thế nào, đang giữ ở đâu, và khi nào bàn giao cho ban quản trị. Báo Chính phủ ngày 22/10/2026 ghi mức 2% được giữ nguyên, còn phân bổ, công khai, giám sát và sử dụng phải rõ. Người mua hỏi đúng ba việc thu, giữ và bàn giao trên giấy của dự án mình định ký, không lấy một bài báo làm biên bản bàn giao quỹ.",
      },
      {
        text: "Câu thứ ba: tòa nhà có khu thương mại, dịch vụ hay không, và phần sở hữu chung của khu đó được tách khỏi phần của khu căn hộ ra sao. Báo Chính phủ ngày 22/10/2026 ghi phương án ban quản trị quản lý phần cả tòa và phần chung của khu căn hộ, còn chủ sở hữu khu thương mại, dịch vụ quản lý phần chung của khu mình. Cùng nguồn ghi quỹ của khu này không chi cho hạng mục chỉ phục vụ khu kia. Người mua hỏi ranh giới đó có được ghi trong hợp đồng hay chưa.",
      },
      {
        text: "Câu thứ tư: nội quy quản lý vận hành có trong bộ hồ sơ được giao khi ký hay không. Báo Xây dựng ngày 28/10/2026 ghi thảo luận có chất lượng quản lý nhà chung cư, và dự thảo làm rõ sở hữu riêng, sở hữu chung để giảm tranh chấp trong quản lý vận hành. Báo Chính phủ ngày 22/10/2026 ghi đề nghị làm rõ trách nhiệm của ban quản trị và đơn vị quản lý vận hành. Nội quy là chỗ các trách nhiệm đó, nếu có, được viết thành điều khoản cho cư dân đọc.",
      },
      {
        text: "Câu thứ năm: cư dân xem báo cáo sử dụng quỹ ở đâu. Đại biểu Tạ Thị Yên (Điện Biên) đề nghị công khai, minh bạch việc dùng quỹ và tài sản chung, và đề nghị có cách để cư dân tiếp cận thông tin, tham gia giám sát, theo Báo Chính phủ ngày 22/10/2026. Người mua hỏi hợp đồng hoặc nội quy có ghi kỳ công khai và nơi xem báo cáo hay không. Ảnh dưới đây là người ngồi xem báo cáo trên bàn; chữ trên giấy không đọc được. Ảnh minh họa tạo bằng AI.",
        image: "/images/news-so-huu-chung-2910-body-03.webp",
        imageAlt:
          "Người ngồi bên bàn gỗ xem báo cáo quỹ bảo trì và hợp đồng, chữ trên giấy không đọc được. Ảnh minh họa tạo bằng AI.",
      },
      {
        heading: "Dự thảo còn đang hoàn thiện",
        text: "Luật Nhà ở (sửa đổi), tính đến Báo Xây dựng ngày 28/10/2026, vẫn là dự thảo. Cùng bài ghi Bộ Xây dựng sẽ tiếp tục phối hợp với các cơ quan của Quốc hội để hoàn thiện dự thảo sau phiên họp, và chi tiết phần sở hữu riêng, sở hữu chung được giao cho nghị định hướng dẫn. Các bài được dẫn không công bố ngày luật được thông qua và không công bố ngày có hiệu lực. Người mua không lấy dự thảo để bỏ qua hợp đồng đang được mời ký. (Nguồn: Báo Xây dựng, 28/10/2026)",
      },
      {
        heading: "Cần đọc hợp đồng căn hộ cùng chuyên viên",
        text: "Anh chị muốn ngồi đọc hợp đồng và hồ sơ căn hộ The Camellia Sơn Trà cùng chuyên viên, liên hệ Nhật qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery – Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, tựa lưng bán đảo Sơn Trà. Phát triển dự án: MBLAND · Phát triển kinh doanh: WELAND. Buổi gặp để xem giấy tờ đã công bố và để đặt các câu hỏi về sở hữu riêng, sở hữu chung và kinh phí bảo trì trên đúng hợp đồng. Buổi gặp không kết luận dự thảo đã có hiệu lực, và không thay ý kiến của cơ quan nhà nước.",
        links: [
          { to: "/lien-he", label: "Liên hệ — hẹn đọc hồ sơ" },
          { to: "/gioi-thieu", label: "Hồ sơ đã công bố" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Quỹ bảo trì 2% có thay đổi trong dự thảo không?",
        text: "Không đổi mức đóng, theo những gì Báo Chính phủ ngày 22/10/2026 ghi: kinh phí bảo trì 2% được giữ nguyên. Cùng bài, phân bổ, công khai, giám sát và sử dụng phải rõ, và quỹ của khu này không được chi cho hạng mục chỉ phục vụ khu khác. Phương án giao ban quản trị quản lý phần cả tòa và phần chung của khu căn hộ, còn chủ sở hữu khu thương mại, dịch vụ quản lý phần chung của khu đó, là phương án được nêu, chưa phải điều đã thông qua. Với diện tích chủ đầu tư giữ lại để kinh doanh dài hạn, dự thảo đang tính 2% theo giá căn hộ cao nhất lúc bàn giao; đại biểu đề nghị thêm cách định giá theo chức năng của không gian, thẩm định khách quan và công khai lúc bàn giao. Báo Xây dựng ngày 28/10/2026 không nhắc mức 2%.",
      },
      {
        heading: "Thang máy, hành lang có mặc nhiên là sở hữu riêng của một khu không?",
        text: "Không. Theo Báo Chính phủ ngày 22/10/2026, thang máy và hành lang không mặc nhiên được coi là sở hữu riêng chỉ vì chúng phục vụ một khu. Cùng bài, kết cấu chịu lực, hệ thống thoát nạn và hạ tầng kỹ thuật phục vụ cả tòa nhà phải thuộc sở hữu chung. Đại biểu Vũ Văn Tiến (Hải Phòng) đề nghị tách ba nhóm: sở hữu riêng hợp pháp, sở hữu chung của từng khu chức năng, và sở hữu chung của cả tòa. Đây là ý kiến trong thảo luận về dự thảo, chưa phải luật đã có hiệu lực.",
      },
      {
        heading: "Luật Nhà ở (sửa đổi) đã có hiệu lực chưa?",
        text: "Chưa. Tính đến Báo Xây dựng ngày 28/10/2026 và Báo Chính phủ ngày 22/10/2026, Luật Nhà ở (sửa đổi) vẫn là dự thảo đang được thảo luận tại kỳ họp, chưa được thông qua. Báo Xây dựng ghi Bộ Xây dựng sẽ tiếp tục phối hợp với các cơ quan của Quốc hội để hoàn thiện dự thảo sau phiên họp, và chi tiết sở hữu riêng, sở hữu chung nằm ở nghị định hướng dẫn. Bài này không phải thông báo luật đã có hiệu lực.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tóm tắt báo chí về dự thảo Luật Nhà ở (sửa đổi). Bài không phải thông báo chính thức và không phải tư vấn pháp lý. Quy định cuối cùng theo luật và nghị định sau khi được thông qua. Nguồn: Báo Xây dựng, Văn Duẩn, 28/10/2026 — https://baoxaydung.vn/bo-truong-tran-hong-minh-lam-ro-nhieu-noi-dung-dai-bieu-quan-tam-ve-luat-nha-o-sua-doi-192261028184244189.htm ; Báo Chính phủ (Chinhphu.vn), 22/10/2026 — https://baochinhphu.vn/hoan-thien-quy-dinh-ve-so-huu-chung-rieng-va-quan-ly-quy-bao-tri-nha-chung-cu-102261022113540815.htm. Ảnh đầu bài: Media Quốc hội/Báo Xây dựng. Ảnh đại biểu Vũ Văn Tiến: Báo Chính phủ. Ảnh sảnh thang máy và ảnh người đọc báo cáo: ảnh minh họa tạo bằng AI.",
      },
    ],
  },
  {
    slug: "gop-von-nha-o-da-nang-nguoi-mua-can-ho-phan-biet",
    date: "28.10.2026",
    title: "Góp vốn nhà ở Đà Nẵng: người mua căn hộ phân biệt gì?",
    excerpt:
      "Ngày 28/10/2026, Sở Xây dựng Đà Nẵng thông báo hai dự án đủ điều kiện góp vốn. Hình thức này không phải hợp đồng mua căn hộ.",
    description:
      "Sở Xây dựng Đà Nẵng ngày 28/10/2026 thông báo hai dự án đủ điều kiện góp vốn theo Điều 116. Góp vốn không phải hợp đồng mua căn hộ.",
    image: "/images/news-gop-von-nha-o-2810-og.jpg",
    imageAlt:
      "Phối cảnh biệt thự thấp tầng mái ngói đỏ và hàng hiên xanh trên đảo Đồng Nò. Ảnh bài báo, không phải tòa căn hộ các lô A3 hay A2 trong thông báo, và không phải The Camellia Sơn Trà. Ảnh: Sun Group/Báo Đà Nẵng.",
    imageCaption:
      "Phối cảnh biệt thự đảo Đồng Nò, đúng chú thích Báo Đà Nẵng ngày 28/10/2026. Ảnh này không phải tòa căn hộ chung cư tại các lô A3-3, A3-4, A3-5, A3-10 hay A2-1, A2-2 được nêu trong thông báo, và không phải The Camellia Sơn Trà. Ảnh: Sun Group/Báo Đà Nẵng.",
    poster: "/images/news-gop-von-nha-o-2810-hero.webp",
    gallery: [
      "/images/news-gop-von-nha-o-2810-hero.webp",
      "/images/news-gop-von-nha-o-2810-body-01.webp",
      "/images/news-gop-von-nha-o-2810-body-02.webp",
      "/images/news-gop-von-nha-o-2810-body-03.webp",
    ],
    body: [
      {
        text: "Ngày 28/10/2026, theo Báo Đà Nẵng (Gia Minh, 09:12), Sở Xây dựng thành phố Đà Nẵng thông báo hai dự án phát triển nhà ở đủ điều kiện huy động vốn theo hình thức góp vốn, hợp tác kinh doanh, liên doanh, liên kết. Điểm người mua căn hộ cần tách ngay: bài báo viết rằng bên tham gia góp vốn, hợp tác đầu tư, hợp tác kinh doanh, liên doanh, liên kết chỉ được phân chia lợi nhuận bằng tiền hoặc cổ phiếu theo tỷ lệ vốn góp trong hợp đồng, và chủ đầu tư không được phân chia sản phẩm nhà ở, không ưu tiên đăng ký, đặt cọc, hưởng quyền mua nhà ở hay phân chia quyền sử dụng đất cho bên tham gia, trừ trường hợp góp vốn thành lập pháp nhân mới để được Nhà nước giao làm chủ đầu tư. Thông báo đủ điều kiện huy động vốn theo hình thức này không phải hợp đồng mua bán nhà ở hình thành trong tương lai, và không phải văn bản trả lời rằng một căn hộ đã đủ điều kiện được bán.",
      },
      {
        text: "Bài này là tin tổng hợp từ báo chí và từ điều luật được các nguồn dẫn. Bài không phải thông báo chính thức của Sở Xây dựng thành phố Đà Nẵng, không phải văn bản của UBND thành phố, và không phải thông cáo của The Camellia Sơn Trà. Hai dự án được nêu dưới đây chỉ là hai dự án có tên trong bài Báo Đà Nẵng ngày 28/10/2026. Bài không gắn hai dự án đó với The Camellia Sơn Trà, và không kết luận The Camellia Sơn Trà thuộc hoặc không thuộc diện thông báo này — bài báo không nhắc tên dự án tại phường Sơn Trà.",
      },
      {
        text: "Ảnh đầu bài là ảnh Báo Đà Nẵng đăng ngày 28/10/2026, chú thích gốc «Phối cảnh biệt thự đảo Đồng Nò. Ảnh: Sun Group». Đó là phối cảnh biệt thự, không phải ảnh hiện trạng và không phải ảnh tòa căn hộ chung cư tại các lô được thông báo. Góc ảnh có ký hiệu của trang đăng. Ảnh giữa bài là ảnh minh họa tạo bằng AI, để tách hai loại giấy tờ; ảnh minh họa không phải hồ sơ của một dự án và không phải sa bàn The Camellia Sơn Trà.",
      },
      {
        heading: "Hai dự án trong thông báo ngày 28/10/2026",
        text: "Theo Báo Đà Nẵng (Gia Minh, 09:12 ngày 28/10/2026), cùng nội dung được vietnam.vn và BaoMoi dẫn lại cùng ngày, hai công trình đủ điều kiện huy động vốn để phát triển nhà ở qua góp vốn, hợp tác kinh doanh, liên doanh, liên kết của tổ chức, cá nhân là: tòa căn hộ chung cư tại các lô đất ký hiệu A3-3, A3-4, A3-5, A3-10 thuộc dự án Khu đô thị ven sông Hòa Quý – Đồng Nò, và tòa căn hộ chung cư tại lô đất ký hiệu A2-1, A2-2 thuộc dự án Khu đô thị sinh thái ven sông Hòa Xuân. Bài báo không công bố số, ký hiệu văn bản thông báo của Sở Xây dựng. Người đọc chỉ có tên dự án, ký hiệu lô và hình thức huy động vốn như bài đã viết.",
      },
      {
        text: "Mức vốn, theo đúng câu của Báo Đà Nẵng ngày 28/10/2026, là mức huy động vốn phát triển nhà ở tối đa hơn 2.833,9 tỷ đồng, chiếm 75% tổng vốn đầu tư xây dựng nhà ở, đối với dự án tòa căn hộ chung cư tại các lô A3-3, A3-4, A3-5, A3-10 thuộc Khu đô thị ven sông Hòa Quý – Đồng Nò. Cùng bài ghi mức tối đa hơn 1.161,7 tỷ đồng, cũng chiếm 75% tổng vốn đầu tư xây dựng nhà ở, đối với dự án Khu đô thị sinh thái ven sông Hòa Xuân. Câu tiền của dự án thứ hai không lặp lại ký hiệu lô A2-1, A2-2; ký hiệu lô nằm ở câu nêu công trình đủ điều kiện. Hai mức này là trần huy động vốn phát triển nhà ở mà bài báo ghi, không phải giá một căn hộ và không phải số tiền một người góp vốn sẽ nhận lại.",
      },
      {
        text: "Thời gian huy động vốn, theo Báo Đà Nẵng ngày 28/10/2026, tính từ khi có văn bản thông báo đủ điều kiện của Sở Xây dựng đến khi kết thúc tiến độ đầu tư xây dựng dự án. Bài không ghi ngày khởi công, không ghi ngày bàn giao căn hộ, và không ghi ngày kết thúc tiến độ bằng một mốc lịch. Cùng bài, doanh nghiệp phải dùng vốn huy động đúng mục đích phát triển nhà ở và thực hiện dự án, không được dùng cho dự án khác hoặc mục đích khác, và phải triển khai đúng quy định về đầu tư, đất đai, nhà ở, xây dựng, bảo vệ môi trường, phòng cháy chữa cháy và các quy định liên quan. Đó là yêu cầu bài báo ghi lại từ thông báo, không phải một báo cáo đã giải ngân.",
      },
      {
        heading: "Góp vốn theo Điều 116 không phải quyền một căn hộ",
        text: "Báo Đà Nẵng ngày 28/10/2026 viết Sở Xây dựng yêu cầu chủ đầu tư huy động và sử dụng vốn phát triển nhà ở đúng nguyên tắc tại Điều 116 Luật Nhà ở. Đoạn bài gọi là đáng chú ý nêu: bên tham gia góp vốn, hợp tác đầu tư, hợp tác kinh doanh, liên doanh, liên kết chỉ được phân chia lợi nhuận bằng tiền hoặc cổ phiếu trên cơ sở tỷ lệ vốn góp theo thỏa thuận trong hợp đồng. Câu ngay sau đó: chủ đầu tư không được phân chia sản phẩm nhà ở, không ưu tiên đăng ký, đặt cọc, hưởng quyền mua nhà ở hay phân chia quyền sử dụng đất trong dự án cho bên tham gia huy động vốn. Ngoại lệ bài báo ghi là góp vốn thành lập pháp nhân mới để được Nhà nước giao làm chủ đầu tư dự án đầu tư xây dựng nhà ở theo luật định. Một hợp đồng chỉ chia lợi nhuận bằng tiền hoặc cổ phiếu, theo câu này, không phải giấy nhận một căn hộ.",
      },
      {
        text: "Cách viết của luật khớp đoạn báo dẫn, ở điểm được Cục Quản lý nhà và thị trường bất động sản (Bộ Xây dựng) trích trong mục hỏi đáp. Điểm e khoản 1 Điều 116 Luật Nhà ở năm 2023, theo mục đó, quy định bên tham gia góp vốn, hợp tác đầu tư, hợp tác kinh doanh, liên doanh, liên kết chỉ được phân chia lợi nhuận bằng tiền hoặc cổ phiếu trên cơ sở tỷ lệ vốn góp theo thỏa thuận trong hợp đồng. Cùng điểm, chủ đầu tư dự án đầu tư xây dựng nhà ở không được dùng hình thức này hoặc hình thức huy động vốn khác để phân chia sản phẩm nhà ở, để ưu tiên đăng ký, đặt cọc, hưởng quyền mua nhà ở, hoặc để phân chia quyền sử dụng đất trong dự án cho bên được huy động vốn, trừ trường hợp góp vốn thành lập pháp nhân mới để được Nhà nước giao làm chủ đầu tư. Bài này lấy câu đã được cơ quan quản lý nhà trích lại. Bài không diễn giải thêm các trường hợp ngoài câu trích đó.",
        image: "/images/news-gop-von-nha-o-2810-body-01.webp",
        imageAlt:
          "Hai cuốn sổ đóng, bìa đất nung và bìa xanh đậm, trên bàn gỗ cạnh tách trà. Ảnh minh họa tạo bằng AI, không phải hồ sơ của một dự án.",
      },
      {
        text: "Việc dùng vốn cũng nằm trong phần bài báo ngày 28/10/2026: vốn huy động phải dùng đúng mục đích phát triển nhà ở và thực hiện đúng dự án, không được chuyển sang dự án khác hoặc mục đích khác. Người đọc một thư mời góp vốn vì vậy hỏi hai việc tách nhau. Một, giấy mình sắp ký có ghi phần được chia là tiền hoặc cổ phiếu theo tỷ lệ vốn góp hay không. Hai, giấy đó có hứa một căn hộ, một suất ưu tiên đăng ký, một khoản đặt cọc giữ chỗ, một quyền mua nhà, hoặc một phần quyền sử dụng đất hay không. Nếu giấy hứa những khoản vừa nêu cho bên góp vốn, thì đó là nội dung bài báo và điểm e khoản 1 Điều 116 nói chủ đầu tư không được làm, trừ đúng ngoại lệ lập pháp nhân mới để được giao làm chủ đầu tư. Bài này không kết luận một hợp đồng cụ thể vi phạm. Bài chỉ ghi chỗ cần đọc trên mặt giấy.",
      },
      {
        heading: "Hợp đồng mua bán nhà ở hình thành trong tương lai đọc chỗ nào",
        text: "Hợp đồng mua bán nhà ở hình thành trong tương lai là hợp đồng mua một nhà ở sẽ hình thành, không phải hợp đồng chỉ chia lợi nhuận. Điều kiện để nhà ở hình thành trong tương lai được đưa vào kinh doanh nằm ở Điều 24 Luật Kinh doanh bất động sản số 29/2023/QH15. Khoản 1 yêu cầu nhà ở đã được khởi công theo pháp luật về xây dựng. Khoản 2 yêu cầu có một trong các giấy tờ về quyền sử dụng đất mà điều này liệt kê, gồm quyết định giao đất, quyết định cho thuê đất kèm hợp đồng thuê, quyết định cho phép chuyển mục đích sử dụng đất, hoặc một loại giấy chứng nhận về quyền sử dụng đất, quyền sở hữu nhà ở theo các điểm của khoản đó. Khoản 3 yêu cầu giấy phép xây dựng và hồ sơ đề nghị cấp phép nếu công trình thuộc diện phải có giấy phép, hoặc thông báo khởi công kèm hồ sơ thiết kế nếu thuộc diện không phải có giấy phép, cùng giấy tờ nghiệm thu hạ tầng kỹ thuật theo tiến độ. Với nhà chung cư, tòa nhà hỗn hợp có nhà ở, cùng khoản yêu cầu giấy tờ đã nghiệm thu hoàn thành xây dựng phần móng.",
      },
      {
        text: "Khoản 4 Điều 24 Luật Kinh doanh bất động sản số 29/2023/QH15 quy định: trước khi bán, cho thuê mua nhà ở hình thành trong tương lai, chủ đầu tư phải có văn bản thông báo cho cơ quan quản lý nhà nước về kinh doanh bất động sản cấp tỉnh về việc nhà ở đủ điều kiện được bán, cho thuê mua. Trong 15 ngày kể từ ngày nhận được thông báo, cơ quan đó kiểm tra và trả lời bằng văn bản về việc nhà ở đủ điều kiện được bán, cho thuê mua; nếu không đủ điều kiện thì phải nêu lý do. Văn bản trả lời này khác với văn bản thông báo đủ điều kiện huy động vốn theo góp vốn, hợp tác kinh doanh, liên doanh, liên kết mà Báo Đà Nẵng ngày 28/10/2026 đang nói. Các bài ngày 28/10/2026 không công bố một văn bản trả lời đủ điều kiện được bán cho hai dự án vừa nêu, không công bố giấy phép xây dựng, và không công bố giấy nghiệm thu phần móng. Không thấy trong bài báo không có nghĩa là giấy không tồn tại. Nghĩa là người mua không lấy bài báo ngày 28/10 làm giấy được mua căn.",
      },
      {
        text: "Bảo lãnh nằm ở Điều 26 cùng luật, và chỉ được điều này gắn với bán, cho thuê mua nhà ở hình thành trong tương lai. Khoản 1: trước khi bán, cho thuê mua, chủ đầu tư phải được ngân hàng thương mại trong nước hoặc chi nhánh ngân hàng nước ngoài đang hoạt động hợp pháp tại Việt Nam chấp thuận bảo lãnh nghĩa vụ tài chính của chủ đầu tư đối với bên mua, bên thuê mua khi chủ đầu tư không bàn giao nhà ở theo đúng cam kết. Khoản 3: khi ký hợp đồng, bên mua, bên thuê mua được lựa chọn có hoặc không có bảo lãnh cho nghĩa vụ tài chính của chủ đầu tư đối với mình; nếu chọn không có, việc từ chối được thỏa thuận bằng văn bản tại thời điểm ký. Khoản 6: chủ đầu tư chỉ được nhận tiền thanh toán theo hợp đồng sau khi đã cung cấp thư bảo lãnh và bên mua, bên thuê mua đã nhận thư đó — câu này áp vào trường hợp có bảo lãnh, vì khoản 3 nói nếu bên mua chọn không có bảo lãnh thì không phải thực hiện khoản 6. Quy định bảo lãnh tại Điều 26 không áp dụng với bán, cho thuê mua nhà ở xã hội, theo khoản 8. Các bài ngày 28/10/2026 không mô tả hợp đồng góp vốn của hai dự án như một hợp đồng mua bán, và không nhắc thư bảo lãnh.",
        image: "/images/news-gop-von-nha-o-2810-body-02.webp",
        imageAlt:
          "Phong bì trắng, chìa khóa đồng, máy tính bỏ túi và tập giấy trắng trên mặt bàn gỗ. Ảnh minh họa tạo bằng AI, không phải thư bảo lãnh hay hợp đồng thật.",
      },
      {
        text: "Tiến độ thanh toán của hợp đồng mua bán nhà ở hình thành trong tương lai nằm ở Điều 25 Luật Kinh doanh bất động sản số 29/2023/QH15. Khoản 1: thanh toán nhiều lần; lần đầu không quá 30% giá trị hợp đồng, kể cả tiền đặt cọc; các lần sau phù hợp tiến độ xây dựng nhưng tổng số không quá 70% giá trị hợp đồng khi chưa bàn giao nhà ở cho bên mua. Cùng khoản ghi một trần khác, không quá 50% giá trị hợp đồng trước khi bàn giao, nếu bên bán là tổ chức kinh tế có vốn đầu tư nước ngoài theo khoản 4 Điều 10 của luật này. Khoản 3: nếu bên mua chưa được cấp giấy chứng nhận về quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất thì bên bán không được thu quá 95% giá trị hợp đồng; phần còn lại thanh toán khi cơ quan có thẩm quyền đã cấp giấy đó. Báo Đà Nẵng ngày 28/10/2026 không nêu loại hình vốn của chủ đầu tư hai dự án, nên không suy trần 50% hay 70% từ bài báo. Các mức vừa nêu là trần của luật cho hợp đồng mua bán, không phải lịch góp vốn, và không phải bảng giá một căn.",
      },
      {
        heading: "Bốn việc nên hỏi trước khi chuyển tiền",
        text: "Việc thứ nhất là xin đúng văn bản của Sở Xây dựng, có số và ngày. Với góp vốn, Báo Đà Nẵng ngày 28/10/2026 gọi đó là văn bản thông báo đủ điều kiện huy động vốn, và nói thời gian huy động tính từ văn bản này đến khi kết thúc tiến độ đầu tư xây dựng. Với mua nhà ở hình thành trong tương lai, khoản 4 Điều 24 Luật Kinh doanh bất động sản số 29/2023/QH15 nói tới văn bản trả lời của cơ quan cấp tỉnh về việc nhà ở đủ điều kiện được bán, cho thuê mua. Hai tên giấy không thay nhau. Người mua hỏi giấy trên bàn thuộc loại nào, ký hiệu số bao nhiêu, ngày nào, và tên dự án, ký hiệu lô trên giấy có khớp tên trong thư mời hay không. Bài báo ngày 28/10 không đăng số văn bản, nên số đó chỉ có khi đọc bản giấy, không có khi chỉ đọc bài báo.",
      },
      {
        text: "Việc thứ hai là đọc tên hợp đồng và điều khoản được nhận. Hợp đồng góp vốn, hợp tác kinh doanh, liên doanh hoặc liên kết, theo đoạn Báo Đà Nẵng ngày 28/10/2026 dẫn Điều 116 Luật Nhà ở, để bên tham gia được chia lợi nhuận bằng tiền hoặc cổ phiếu theo tỷ lệ vốn góp. Hợp đồng mua bán nhà ở hình thành trong tương lai là hợp đồng mua nhà ở. Người mua đánh dấu câu nào trên giấy: câu chia lợi nhuận, hay câu chỉ định một căn, một mã căn, một diện tích ở. Nếu giấy vừa mang tên góp vốn vừa hứa chia căn hộ, ưu tiên đăng ký, đặt cọc, quyền mua nhà hoặc quyền sử dụng đất cho bên góp vốn, thì đối chiếu lại ngoại lệ duy nhất mà cả bài báo và điểm e khoản 1 Điều 116 đã ghi: góp vốn thành lập pháp nhân mới để được Nhà nước giao làm chủ đầu tư. Ngoài ngoại lệ đó, bài này không thấy một cửa thứ hai.",
      },
      {
        text: "Việc thứ ba là hỏi bảo lãnh đúng chỗ nó được luật gắn vào. Điều 26 Luật Kinh doanh bất động sản số 29/2023/QH15 gắn bảo lãnh với bán, cho thuê mua nhà ở hình thành trong tương lai, không gắn với hình thức góp vốn mà thông báo ngày 28/10/2026 đang nói. Nếu giấy là hợp đồng mua bán nhà ở hình thành trong tương lai, người mua hỏi ngân hàng nào đã chấp thuận bảo lãnh cho chủ đầu tư, và hợp đồng có ghi mình chọn có bảo lãnh hay từ chối bằng văn bản theo khoản 3 hay không. Nếu chọn có, hỏi thư bảo lãnh trước khi nộp tiền, vì khoản 6 nói chủ đầu tư chỉ được nhận thanh toán sau khi bên mua đã nhận thư. Nếu giấy chỉ là góp vốn theo thông báo ngày 28/10, không lấy một câu «có ngân hàng đứng sau» trên tờ rơi để hiểu thành thư bảo lãnh mua nhà. Bài báo không nêu tên ngân hàng cho hai dự án.",
      },
      {
        text: "Việc thứ tư là đọc tiền ra tiền vào. Với hợp đồng mua bán nhà ở hình thành trong tương lai, đối chiếu từng đợt với Điều 25: lần đầu không quá 30% kể cả đặt cọc, tổng trước khi bàn giao không quá 70% hoặc không quá 50% trong trường hợp luật đã ghi cho bên bán có vốn đầu tư nước ngoài, và không quá 95% khi chưa có giấy chứng nhận. Với hợp đồng góp vốn, hỏi số tiền góp, tỷ lệ, phần được chia là tiền hay cổ phiếu, thời điểm chia, và việc vốn có bị ghi là chỉ dùng cho đúng dự án nhà ở hay không — đúng yêu cầu mục đích mà Báo Đà Nẵng ngày 28/10/2026 ghi lại. Một lịch đóng tiền dày không biến hợp đồng góp vốn thành hợp đồng mua căn. Người mua giữ bản photo giấy mình định ký, không ký trên một bản tóm tắt.",
        image: "/images/news-gop-von-nha-o-2810-body-03.webp",
        imageAlt:
          "Người ngồi quay lưng trước hai tập giấy trắng, phía xa là mô hình khối trắng trừu tượng trong phòng gỗ. Ảnh minh họa tạo bằng AI, không phải sa bàn The Camellia Sơn Trà.",
      },
      {
        heading: "Giá bình quân đi ngang không đổi loại hợp đồng",
        text: "Cùng ngày 28/10/2026, Vietbao (09:46) dẫn Báo cáo thị trường bất động sản Việt Nam quý III/2026 của Hội Môi giới Bất động sản Việt Nam (VARS): giá bán bình quân căn hộ chung cư tại Đà Nẵng khoảng 68,9 triệu đồng/m², không đổi so với quý trước, và tăng 76,2% so với kỳ gốc quý I/2019. VARS IRE đăng bài lúc 10:11 ngày 19/10/2026 về báo cáo đã công bố ngày 17/10/2026, với cùng mức khoảng 68,9 triệu đồng/m² tại Đà Nẵng và nhận định mặt bằng giá đi ngang so với quý trước. Mức 76,2% là so với quý I/2019 trong bài Vietbao, không phải một dự báo quý sau sẽ tăng thêm 76,2%. Vietbao ngày 28/10/2026 cũng ghi nhận định của VARS: nhu cầu thực tập trung nhiều hơn vào sản phẩm có mức giá hợp lý, trong lúc giá căn hộ vẫn ở mặt bằng cao.",
      },
      {
        text: "Các con số vừa nêu là bình quân một tập mẫu mà Vietbao nói VARS theo dõi tại từng thị trường, không phải giá một căn tại Khu đô thị ven sông Hòa Quý – Đồng Nò, không phải giá một căn tại Khu đô thị sinh thái ven sông Hòa Xuân, và không phải giá một căn tại phường Sơn Trà. Giá đi ngang so với quý trước cũng không nói một hợp đồng góp vốn đã trở thành hợp đồng mua căn hộ. Người đang được mời góp vốn vẫn hỏi loại giấy, như bốn việc ở trên, trước khi lấy mức 68,9 triệu đồng/m² để nhẩm một căn cho mình. Bài này không nêu tên các dự án mà Vietbao kể là có lượng đặt chỗ, vì việc của bài là phân biệt loại hợp đồng, không phải xếp hạng dự án.",
      },
      {
        heading: "Hỏi loại hợp đồng khi xem căn tại phường Sơn Trà",
        text: "Anh chị muốn ngồi đọc hồ sơ một căn hộ tại phường Sơn Trà và hỏi loại hợp đồng được chào là góp vốn hay là mua bán nhà ở, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, tựa lưng bán đảo Sơn Trà. Pháp lý đã công bố trên website là sổ hồng sở hữu lâu dài. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Thông báo ngày 28/10/2026 mà Báo Đà Nẵng dẫn không nêu The Camellia Sơn Trà. Buổi gặp để xem hồ sơ đã công bố và để hỏi loại hợp đồng, văn bản của cơ quan nhà nước tương ứng, bảo lãnh nếu hợp đồng là mua bán nhà ở hình thành trong tương lai, và tiến độ thanh toán. Buổi gặp không kết luận thông báo góp vốn ngày 28/10 áp vào căn đang xem, và không biến một mức giá bình quân của thành phố thành giá căn đó.",
        links: [
          { to: "/lien-he", label: "Liên hệ — hỏi loại hợp đồng" },
          { to: "/gioi-thieu", label: "Fact sheet đã công bố" },
        ],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Thông báo ngày 28/10/2026 có phải giấy được mua căn hộ tại hai dự án đó không?",
        text: "Không, theo những gì Báo Đà Nẵng (Gia Minh, 09:12 ngày 28/10/2026) công bố. Bài nói Sở Xây dựng thông báo hai dự án đủ điều kiện huy động vốn theo góp vốn, hợp tác kinh doanh, liên doanh, liên kết: tòa căn hộ chung cư tại lô A3-3, A3-4, A3-5, A3-10 thuộc Khu đô thị ven sông Hòa Quý – Đồng Nò, và tòa căn hộ tại lô A2-1, A2-2 thuộc Khu đô thị sinh thái ven sông Hòa Xuân. Mức tối đa bài ghi là hơn 2.833,9 tỷ đồng, 75% tổng vốn đầu tư xây dựng nhà ở, cho tòa căn hộ tại các lô A3; và hơn 1.161,7 tỷ đồng, cũng 75%, cho dự án Khu đô thị sinh thái ven sông Hòa Xuân. Câu tiền của dự án thứ hai không lặp lại ký hiệu lô. Cùng bài, bên góp vốn chỉ được chia lợi nhuận bằng tiền hoặc cổ phiếu, và chủ đầu tư không được phân chia sản phẩm nhà ở hay quyền mua nhà, trừ góp vốn lập pháp nhân mới để được giao làm chủ đầu tư. Bài không đăng số văn bản và không đăng văn bản trả lời đủ điều kiện được bán nhà ở hình thành trong tương lai.",
      },
      {
        heading: "Hợp đồng góp vốn khác hợp đồng mua bán nhà ở hình thành trong tương lai ở điểm nào?",
        text: "Hợp đồng góp vốn, theo Báo Đà Nẵng ngày 28/10/2026 và điểm e khoản 1 Điều 116 Luật Nhà ở năm 2023 được Cục Quản lý nhà và thị trường bất động sản trích, chỉ chia lợi nhuận bằng tiền hoặc cổ phiếu theo tỷ lệ vốn góp. Hợp đồng mua bán nhà ở hình thành trong tương lai là hợp đồng mua nhà ở, và nhà ở đó phải đáp ứng Điều 24 Luật Kinh doanh bất động sản số 29/2023/QH15, trong đó có văn bản trả lời của cơ quan cấp tỉnh về việc đủ điều kiện được bán. Bảo lãnh tại Điều 26 và trần thanh toán tại Điều 25 của luật này gắn với hợp đồng mua bán, cho thuê mua, không phải với hình thức góp vốn trong thông báo ngày 28/10. Bên mua nhà ở hình thành trong tương lai còn được chọn có hoặc không có bảo lãnh, và việc từ chối phải thành văn bản khi ký.",
      },
      {
        heading: "Người mua nên hỏi những giấy tờ nào trước khi chuyển tiền?",
        text: "Bốn nhóm: văn bản của Sở Xây dựng đúng loại việc mình sắp ký, gồm số và ngày; tên hợp đồng và câu ghi mình được nhận tiền, cổ phiếu hay một căn hộ; nếu là hợp đồng mua bán nhà ở hình thành trong tương lai thì văn bản chấp thuận bảo lãnh của ngân hàng, lựa chọn có hoặc không có bảo lãnh, và thư bảo lãnh trước khi nộp tiền nếu chọn có; tiến độ thanh toán đối chiếu Điều 25 nếu là hợp đồng mua bán, hoặc tỷ lệ vốn góp và mục đích dùng vốn nếu là hợp đồng góp vốn. Báo Đà Nẵng ngày 28/10/2026 không thay cho bộ giấy đó. Mức giá bình quân khoảng 68,9 triệu đồng/m² mà Vietbao dẫn VARS cùng ngày cũng không thay cho bộ giấy đó.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí về thông báo đủ điều kiện huy động vốn theo góp vốn, và từ điều luật được dẫn để người mua phân biệt với hợp đồng mua bán nhà ở hình thành trong tương lai. Bài không phải thông báo của Sở Xây dựng thành phố Đà Nẵng, không phải tư vấn pháp lý cho một hợp đồng cụ thể, không phải thông cáo của The Camellia Sơn Trà, không gắn hai dự án trong thông báo ngày 28/10/2026 với The Camellia Sơn Trà, không cam kết lợi nhuận, không cam kết giá tăng, và không chào giá. Nguồn: Báo Đà Nẵng, Gia Minh, 09:12 ngày 28/10/2026 — https://baodanang.vn/da-nang-hai-du-an-phat-trien-nha-o-du-dieu-kien-huy-dong-von-theo-hinh-thuc-gop-von-dau-tu-3356668.html ; cùng bài trên vietnam.vn — https://www.vietnam.vn/da-nang-hai-du-an-phat-trien-nha-o-du-dieu-kien-huy-dong-von-theo-hinh-thuc-gop-von-dau-tu ; cùng bài trên BaoMoi — https://baomoi.com/da-nang-hai-du-an-phat-trien-nha-o-du-dieu-kien-huy-dong-von-theo-hinh-thuc-gop-von-dau-tu-c56368478.epi ; Cục Quản lý nhà và thị trường bất động sản, Bộ Xây dựng, hỏi đáp trích điểm e khoản 1 Điều 116 Luật Nhà ở năm 2023 — https://moc.gov.vn/vn/pages/ChiTietHoiDap.aspx?chID=9506 ; Luật Kinh doanh bất động sản số 29/2023/QH15, Điều 24, Điều 25 và Điều 26; VARS IRE, bài 10:11 ngày 19/10/2026 về báo cáo quý III/2026 công bố ngày 17/10/2026 — https://varsvietnam.vn/vars-ire-cong-bo-bao-cao-thi-truong-bat-dong-san-viet-nam-quy-iii-2026-d185.html ; Vietbao, 09:46 ngày 28/10/2026 — https://vietbao.vn/bat-dong-san-da-nang-gia-can-ho-di-ngang-nhieu-du-an-hut-khach-613408.html. Ảnh đầu bài: Sun Group/Báo Đà Nẵng, chú thích «Phối cảnh biệt thự đảo Đồng Nò». Ảnh giữa bài: ảnh minh họa tạo bằng AI.",
      },
    ],
  },
  {
    slug: "kinh-te-dem-my-khe-nguoi-mua-can-ho-ven-bien",
    date: "28.10.2026",
    title: "Kinh tế đêm Mỹ Khê: người mua căn hộ ven biển đọc sao?",
    excerpt:
      "Theo Bộ VHTTDL (27/10/2026), Đà Nẵng thống nhất chủ trương dịch vụ đêm Mỹ Khê Paradise, khởi công dự kiến tháng 1/2027. Đây chưa phải giấy phép xây dựng.",
    description:
      "Đà Nẵng thống nhất chủ trương Mỹ Khê Paradise tại phường Ngũ Hành Sơn (Bộ VHTTDL, 27/10/2026). Mốc 1/2027 là tiến độ dự kiến, chưa phải cấp phép xây dựng.",
    image: "/images/news-kinh-te-dem-my-khe-2810-og.jpg",
    imageAlt:
      "Quán dịch vụ đêm trên đường Võ Nguyên Giáp, Đà Nẵng, với biển đèn Paradise và áp phích beach carnival 2022. Ảnh một điểm đang hoạt động, không phải phối cảnh dự án Mỹ Khê Paradise. Ảnh: Nguyễn Tú/Đại Đoàn Kết.",
    imageCaption:
      "Đà Nẵng khuyến khích dịch vụ du lịch đêm tại bãi biển Mỹ Khê. Biển hiệu Paradise và áp phích beach carnival 2022 trong ảnh thuộc một điểm dịch vụ đang có trên đường Võ Nguyên Giáp, không phải phối cảnh dự án vừa được thống nhất chủ trương. Ảnh: Nguyễn Tú/Đại Đoàn Kết (Cổng Bộ VHTTDL đăng lại ngày 27/10/2026).",
    poster: "/images/news-kinh-te-dem-my-khe-2810-hero.webp",
    gallery: [
      "/images/news-kinh-te-dem-my-khe-2810-hero.webp",
      "/images/news-kinh-te-dem-my-khe-2810-body-01.webp",
      "/images/news-kinh-te-dem-my-khe-2810-body-02.webp",
      "/images/news-kinh-te-dem-my-khe-2810-body-03.webp",
    ],
    body: [
      {
        text: "Trưa 27/10/2026, theo Cổng Bộ Văn hóa, Thể thao và Du lịch (16:18) và Báo Đại Đoàn Kết (Nguyễn Tú, 15:57), Phó Chủ tịch UBND TP Đà Nẵng Nguyễn Thị Anh Thi chủ trì buổi làm việc và thống nhất chủ trương triển khai dự án khai thác dịch vụ đêm tại bãi biển Mỹ Khê. Hai bài gọi đây là tổ hợp khách sạn, văn phòng và khu vui chơi giải trí không ngủ Mỹ Khê Paradise, do Công ty CP MBLand Đà Nẵng đầu tư trên khu đất hơn 11.000 m² đường Võ Nguyên Giáp, đối diện bãi biển Mỹ Khê, phường Ngũ Hành Sơn. Báo Đà Nẵng, dẫn qua vietnam.vn và BaoMoi cùng ngày 27/10/2026, viết buổi làm việc diễn ra sáng 27/10 và Phó Chủ tịch cơ bản đồng ý chủ trương, tại bãi biển phía Đông đường Võ Nguyên Giáp, cùng phường Ngũ Hành Sơn. Với người đang xem căn hộ ven biển tại phường Sơn Trà hoặc khu vực biển Mân Thái, đây là tin về một khu đất ở phường khác, chưa phải giấy phép xây dựng và chưa phải ngày khai trương.",
      },
      {
        text: "Bài này là tin tổng hợp từ báo chí. Bài không phải thông báo chính thức của UBND thành phố Đà Nẵng, không phải văn bản của Sở Văn hóa, Thể thao và Du lịch, và không phải thông cáo của The Camellia Sơn Trà. Công ty CP MBLand Đà Nẵng trong các bài nguồn là nhà đầu tư của dự án Mỹ Khê Paradise. Bài không gắn công ty này, cũng không gắn dự án Mỹ Khê Paradise, với The Camellia Sơn Trà.",
      },
      {
        text: "Ảnh đầu bài là ảnh Báo Đại Đoàn Kết, nhiếp ảnh Nguyễn Tú, được Cổng Bộ VHTTDL đăng lại ngày 27/10/2026. Chú thích gốc nói Đà Nẵng khuyến khích sản phẩm, dịch vụ du lịch đêm tại bãi biển Mỹ Khê. Trong ảnh có biển đèn «Paradise» và áp phích «beach carnival 2022» ghi đường Võ Nguyên Giáp, Đà Nẵng. Đó là một điểm dịch vụ đêm đang có, không phải phối cảnh và không phải ảnh công trường của dự án vừa được thống nhất chủ trương. Ảnh Phó Chủ tịch phát biểu là ảnh cùng báo, chú thích Ảnh: Nguyễn Tú. Báo Đà Nẵng đăng ảnh cùng buổi làm việc và ghi chú thích Ảnh: Ngọc Hà. Ảnh biểu diễn trên cát theo chú thích Đại Đoàn Kết là hoạt động văn hóa nghệ thuật phục vụ du khách tại bãi biển Mỹ Khê, cũng của Nguyễn Tú, không phải lễ khởi công.",
      },
      {
        heading: "Chủ trương 27/10 và khu đất hơn 11.000 m² ở Ngũ Hành Sơn",
        text: "Theo Cổng Bộ VHTTDL (16:18 ngày 27/10/2026) và Báo Đại Đoàn Kết (15:57 cùng ngày), tổ hợp Mỹ Khê Paradise gồm khách sạn, văn phòng và khu vui chơi giải trí không ngủ. Trong đó có Tổ hợp T18 với các chức năng thương mại, lưu trú, hội nghị, văn hóa và giải trí. Phần dịch vụ biển được hai bài gắn với Beach Club, ẩm thực, cảnh quan nhiệt đới, sự kiện và tiện ích nghỉ dưỡng. Hai bài đặt khu đất hơn 11.000 m² trên đường Võ Nguyên Giáp, đối diện bãi biển Mỹ Khê, phường Ngũ Hành Sơn. Báo Đà Nẵng ngày 27/10/2026 không nhắc Tổ hợp T18 và không nhắc Beach Club trong phần bài được dẫn trên vietnam.vn và BaoMoi.",
      },
      {
        text: "Khu kinh tế đêm, theo cả Cổng Bộ VHTTDL, Báo Đại Đoàn Kết và Báo Đà Nẵng ngày 27/10/2026, tích hợp ẩm thực, vui chơi giải trí, văn hóa nghệ thuật, sân khấu biểu diễn và tổ chức sự kiện. Báo Đà Nẵng viết tên dự án là Tổ hợp khách sạn, văn phòng và khu vui chơi giải trí «Không ngủ» - Mỹ Khê Paradise, do Công ty Cổ phần MBLand Đà Nẵng làm chủ đầu tư, tổng diện tích hơn 11.000 m² tại đường Võ Nguyên Giáp. Cách viết «Công ty Cổ phần» và «Công ty CP» là hai cách các bài ghi cùng một tên công ty cho dự án này. Các bài không gọi công ty đó là chủ đầu tư của một căn hộ tại phường Sơn Trà.",
      },
      {
        text: "Sau khi nghe các sở, ngành báo cáo, Phó Chủ tịch Nguyễn Thị Anh Thi đánh giá cao ý tưởng của Công ty CP MBLand Đà Nẵng, theo Cổng Bộ VHTTDL và Báo Đại Đoàn Kết ngày 27/10/2026, và thống nhất chủ trương triển khai. Báo Đà Nẵng cùng ngày dùng cụm «cơ bản đồng ý chủ trương», và ghi bà đề nghị tập trung đẩy mạnh đầu tư trước khu kinh tế đêm, dịch vụ tại bãi biển Mỹ Khê, vì dự án phù hợp định hướng kinh tế đêm và làm đa dạng dịch vụ du lịch chất lượng cao. Hai cách viết không phải hai buổi làm việc. Đó là hai mức chữ của hai tuyến bài về cùng một buổi. Các bài không công bố số quyết định.",
        image: "/images/news-kinh-te-dem-my-khe-2810-body-01.webp",
        imageAlt:
          "Phó Chủ tịch UBND TP Đà Nẵng Nguyễn Thị Anh Thi phát biểu kết luận buổi làm việc về dịch vụ đêm tại bãi biển Mỹ Khê. Ảnh: Nguyễn Tú/Đại Đoàn Kết.",
      },
      {
        heading: "Mốc tháng 1/2027 là tiến độ dự kiến, chưa phải cấp phép",
        text: "Theo Cổng Bộ VHTTDL và Báo Đại Đoàn Kết ngày 27/10/2026, dự án dự kiến khởi công vào tháng 1/2027, vận hành giai đoạn 1 từ tháng 8/2027, hoàn thành năm 2031, tuyển dụng khoảng 1.000 vị trí việc làm và nộp ngân sách trên 100 tỷ đồng mỗi năm. Báo Đà Nẵng ngày 27/10/2026 ghi cùng ba mốc thời gian, và gọi 1.000 việc làm cùng mức nộp ngân sách trên 100 tỷ đồng mỗi năm là mục tiêu của dự án. Các con số này là tiến độ và mục tiêu được báo chí dẫn từ báo cáo dự án. Các bài không viết rằng ngân sách đã thu khoản đó, và không viết rằng giá một căn hộ sẽ đổi vì các con số này.",
      },
      {
        text: "Phần còn mở nằm ở thủ tục. Theo Báo Đà Nẵng ngày 27/10/2026, Công ty Cổ phần MBLand Đà Nẵng đề nghị thành phố xem xét phê duyệt, hướng dẫn cấp giấy chứng nhận đầu tư theo từng phân khu hoặc theo tổng thể. Sau khi được chấp thuận, doanh nghiệp hoàn thiện thủ tục xin giấy phép xây dựng và các điều kiện để triển khai. Cùng bài, Phó Chủ tịch giao Sở Xây dựng chủ trì, phối hợp Sở Tài chính hướng dẫn những nội dung về hạ tầng, và lưu ý rà soát sự phù hợp với quy hoạch chung, quy hoạch đô thị, quy hoạch xây dựng, cùng ý kiến về giao thông. Cổng Bộ VHTTDL ngày 27/10/2026 cũng giao Sở Xây dựng chủ trì, phối hợp Sở Tài chính hướng dẫn chủ đầu tư về hạ tầng, quy hoạch và giao thông. Bước rà soát quy hoạch vẫn là việc được giao, chưa phải một câu kết luận rằng hồ sơ đã khớp mọi quy hoạch.",
      },
      {
        text: "Ba việc khác được giao cho tháng 11/2026, và chưa được các bài viết là đã xong. Một, Trung tâm Phát triển quỹ đất hoàn thành đấu giá khai thác dịch vụ tại các bãi biển dọc tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa. Báo Đà Nẵng ngày 27/10/2026 gắn việc này với Thông báo số 1032/TB-VP ngày 17/10/2026 của Văn phòng UBND thành phố, về kết luận của Chủ tịch UBND thành phố tại hội nghị đối thoại với doanh nghiệp du lịch năm 2026. Cổng Bộ VHTTDL cùng ngày nêu trách nhiệm hoàn thành đấu giá, không ghi số thông báo. Hai, Sở Văn hóa, Thể thao và Du lịch cùng Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch hoàn thiện phương án quản lý bãi biển trong tháng 11/2026. Báo Đà Nẵng gọi đây là dự thảo điều chỉnh Phương án số 3729/PA-UBND ngày 9/6/2020, trình UBND thành phố trong tháng 11/2026. Ba, đề án kinh tế đêm. Cổng Bộ VHTTDL viết thành phố dự kiến hoàn thành đề án trong tháng 11/2026 và đưa khu kinh tế đêm biển Mỹ Khê làm thí điểm. Báo Đà Nẵng viết khẩn trương trình đề cương đề án kinh tế ban đêm, hoàn thành trong tháng 11/2026, và đưa dự án của công ty vào làm điểm. «Thí điểm» và «làm điểm» là chữ của từng bài, chưa phải văn bản đề án đã ban hành.",
        image: "/images/news-kinh-te-dem-my-khe-2810-body-03.webp",
        imageAlt:
          "Đại diện Công ty Cổ phần MBLand Đà Nẵng báo cáo về dự án tại buổi làm việc ngày 27/10/2026, theo chú thích Báo Đà Nẵng. Ảnh: Ngọc Hà/Báo Đà Nẵng.",
      },
      {
        text: "Người đọc tiến độ có thể tách ba lớp thời gian, và không cộng chúng thành một ngày mở cửa. Lớp một là chủ trương ngày 27/10/2026: thống nhất theo Cổng Bộ VHTTDL và Báo Đại Đoàn Kết, cơ bản đồng ý theo Báo Đà Nẵng. Lớp hai là lịch doanh nghiệp nêu trong các bài: khởi công dự kiến tháng 1/2027, vận hành giai đoạn 1 từ tháng 8/2027, hoàn thành năm 2031. Lớp ba là giấy chứng nhận đầu tư và giấy phép xây dựng: Báo Đà Nẵng ghi đó là thủ tục doanh nghiệp đề nghị được hướng dẫn và sẽ hoàn thiện sau khi được chấp thuận. Các bài ngày 27/10 không công bố số giấy chứng nhận đầu tư, không công bố số giấy phép xây dựng, và không công bố giờ mở cửa của khu kinh tế đêm.",
      },
      {
        heading: "Dự thảo chỉnh trang bãi biển hơn 12,56 tỷ đang lấy ý kiến",
        text: "Cùng chủ đề bãi biển, nhưng là một hồ sơ khác. Theo Cổng Thông tin điện tử thành phố Đà Nẵng (Minh Phương, 07:00 ngày 15/10/2026), Sở Văn hóa, Thể thao và Du lịch đang lấy ý kiến đối với dự thảo kế hoạch của UBND thành phố về cải tạo hạ tầng tiện ích, cảnh quan cây xanh, vệ sinh môi trường và trồng dừa tại các bãi biển du lịch. Tổng kinh phí dự kiến là 12.562.316.000 đồng, tức hơn 12,56 tỷ đồng. Báo Pháp Luật Việt Nam (Trúc Ninh, 19:20 ngày 22/10/2026) và Diễn đàn Giao thông (Quang Huy, 07:43 ngày 16/10/2026) ghi cùng việc lấy ý kiến và cùng mức hơn 12,56 tỷ đồng. Đây là dự thảo. Ba nguồn không viết rằng UBND thành phố đã ký ban hành kế hoạch.",
      },
      {
        text: "Theo Cổng Thông tin điện tử thành phố Đà Nẵng ngày 15/10/2026, phạm vi dự thảo gồm bốn khu vực: bãi cát tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa dài 17,57 km; bãi cát tuyến Nguyễn Tất Thành dài 16,10 km; các bãi tắm Thống Nhất, Hà My thuộc phường Điện Bàn Đông dài 5,68 km; khu vực bãi cát và Quảng trường Tam Thanh thuộc phường Quảng Phú dài 7,97 km. Dự thảo đề xuất trồng mới, trồng bổ sung 2.200 cây dừa: 701 cây trên tuyến Nguyễn Tất Thành, 981 cây trên tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa, 427 cây tại bãi tắm Thống Nhất và Hà My, 91 cây tại bãi cát và Quảng trường Tam Thanh. Báo Pháp Luật Việt Nam ngày 22/10/2026 ghi cùng bốn chiều dài và cùng cách chia 2.200 cây. Diễn đàn Giao thông ngày 16/10/2026 cũng ghi bốn khu vực và 2.200 cây, với 981 cây trên tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa.",
      },
      {
        text: "Theo Cổng Thông tin điện tử thành phố Đà Nẵng ngày 15/10/2026, trong tổng 12.562.316.000 đồng có 5.279.394.000 đồng cho cải tạo hạ tầng tiện ích, cảnh quan cây xanh và vệ sinh môi trường, và 7.282.922.000 đồng cho trồng dừa. Nguồn kinh phí dự kiến là vận động, kêu gọi tài trợ, đóng góp của doanh nghiệp, tổ chức, cá nhân và các nguồn hợp pháp khác. Lộ trình trong dự thảo: vận động tài trợ từ tháng 10/2026 đến tháng 9/2027; thi công cải tạo, chỉnh trang và trồng dừa từ tháng 1 đến tháng 12/2027. Báo Pháp Luật Việt Nam ngày 22/10/2026 ghi cùng hai khoản và cùng lộ trình. Tiêu đề báo đó viết «dự kiến chi»; phần nội dung vẫn là lấy ý kiến và nguồn tài trợ. Bài này lấy phần nội dung. Dự thảo còn nêu, theo cổng thành phố ngày 15/10/2026, sửa vỉa hè, nhà vệ sinh, lối xuống biển, và riêng đoạn từ Công viên Biển Đông đến bãi tắm Sao Biển thì xây mới 2 nhà vệ sinh di động, cải tạo 3 nhà vệ sinh cố định và 11 vị trí vòi rửa. Việc này nhằm giữ chất lượng môi trường du lịch ven biển trong lúc chờ các dự án cải tạo cảnh quan, hạ tầng và tiện ích công cộng trên hai tuyến biển. Dự thảo không viết một mức giá căn hộ.",
      },
      {
        heading: "Người ở ven biển Sơn Trà và Mân Thái đọc các lớp tin",
        text: "Khu đất Mỹ Khê Paradise, theo Cổng Bộ VHTTDL và Báo Đại Đoàn Kết ngày 27/10/2026, nằm ở phường Ngũ Hành Sơn, đường Võ Nguyên Giáp, đối diện bãi biển Mỹ Khê. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, tựa lưng bán đảo Sơn Trà. Hai địa chỉ thuộc hai phường. Tin chủ trương ngày 27/10 không phải tin về khu đất của một căn hộ tại phường Sơn Trà, và không biến bãi biển Mỹ Khê thành vị trí của căn hộ đó. Người đang xem nhà gần biển Mân Thái có thể đọc tin để biết nhịp du lịch đêm và việc chỉnh trang bãi biển đang được bàn ở thành phố, rồi đối chiếu lại đúng phường của căn mình xem.",
        links: [{ to: "/gioi-thieu", label: "Fact sheet: vị trí phường Sơn Trà" }],
      },
      {
        text: "Một văn bản khác, không phải buổi làm việc ngày 27/10, đã được một đơn vị của thành phố đăng. Theo bài ngày 02/03/2026 trên website Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng, UBND thành phố ban hành Quyết định số 2838/QĐ-UBND ngày 03/12/2025, phê duyệt phương án khai thác dịch vụ tại bãi biển dọc tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa và tuyến Nguyễn Tất Thành. Bài ghi phạm vi là bãi cát và vỉa hè ven biển của hai tuyến, quy mô hơn 33 km, và việc chọn tổ chức, cá nhân khai thác qua đấu giá công khai tại trung tâm khai thác quỹ đất của thành phố. Giai đoạn 1 trong năm 2026, theo bài, gồm xe lưu động thức ăn khô, giải khát và lưu niệm tại phường Ngũ Hành Sơn và phường Sơn Trà; chiếu phim bãi biển và sân khấu sự kiện tại bãi biển Mỹ An, phường Ngũ Hành Sơn; dịch vụ thể thao giải trí biển tại một số phường, trong đó có Sơn Trà và Ngũ Hành Sơn. Giai đoạn 2 là năm 2027 đến năm 2028. Bài ngày 02/03/2026 không viết rằng quyết định này là giấy phép của Mỹ Khê Paradise. Các bài ngày 27/10/2026 không dẫn số 2838.",
      },
      {
        text: "Kinh tế đêm và hạ tầng bãi biển chạm trải nghiệm sống theo những việc các bài đã liệt kê, không theo một lời đoán giá. Nếu khu dịch vụ đêm tại Mỹ Khê được cấp phép và vận hành đúng các mốc đang là dự kiến, người ở và khách du lịch trên tuyến Võ Nguyên Giáp có thêm ẩm thực, sân khấu và sự kiện về đêm — đó là nội dung các bài ngày 27/10 mô tả cho phường Ngũ Hành Sơn. Ảnh biểu diễn dưới đây là ảnh Nguyễn Tú trên Báo Đại Đoàn Kết, chú thích hoạt động văn hóa nghệ thuật đang phục vụ du khách tại bãi biển Mỹ Khê. Ảnh cho thấy một dạng sinh hoạt đêm đã có, không phải lịch diễn của dự án năm 2027. Dự thảo chỉnh trang, nếu sau này được ban hành và có đủ tài trợ, theo cổng thành phố ngày 15/10/2026, là việc nhà vệ sinh, vỉa hè, lối xuống biển, thoát nước, thùng rác và 2.200 cây dừa trên bốn khu vực, trong đó có tuyến Hoàng Sa – Võ Nguyên Giáp – Trường Sa. Các nguồn này không công bố giới hạn tiếng ồn, không công bố giờ đóng cửa của Mỹ Khê Paradise, và không kết luận giá căn hộ tăng hay giảm.",
        image: "/images/news-kinh-te-dem-my-khe-2810-body-02.webp",
        imageAlt:
          "Biểu diễn trang phục trên cát tại bãi biển Mỹ Khê, phía sau là khách sạn đã có. Ảnh một hoạt động đêm đang diễn ra, không phải lễ khởi công Mỹ Khê Paradise. Ảnh: Nguyễn Tú/Đại Đoàn Kết.",
      },
      {
        text: "Những chỗ còn chưa chắc, tính đến các bài được dẫn, gồm năm điểm. Thứ nhất, giờ buổi làm việc: Cổng Bộ VHTTDL và Báo Đại Đoàn Kết viết «trưa 27/10», Báo Đà Nẵng viết «sáng 27/10». Thứ hai, mức đồng ý: «thống nhất chủ trương» và «cơ bản đồng ý chủ trương» là hai cụm chữ, chưa kèm số quyết định. Thứ ba, giấy chứng nhận đầu tư và giấy phép xây dựng chưa được các bài công bố. Thứ tư, khoảng 1.000 việc làm và mức nộp ngân sách trên 100 tỷ đồng mỗi năm là mục tiêu dự án trong bài báo, chưa phải số liệu quyết toán. Thứ năm, kế hoạch chỉnh trang hơn 12,56 tỷ đồng vẫn là dự thảo lấy ý kiến, nguồn tiền là vận động tài trợ, và cửa sổ thi công tháng 1 đến tháng 12/2027 chỉ có trong dự thảo. Đấu giá dịch vụ bãi biển và đề án kinh tế đêm được giao hoàn thành trong tháng 11/2026, chưa được các bài viết là đã ban hành.",
      },
      {
        heading: "Đối chiếu hồ sơ một căn tại phường Sơn Trà",
        text: "Anh chị muốn ngồi đọc hồ sơ một căn hộ tại phường Sơn Trà, và tách tin kinh tế đêm Mỹ Khê khỏi những gì đang ghi cho đúng căn, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, tựa lưng bán đảo Sơn Trà. Buổi gặp để xem hồ sơ đã công bố trên website. Buổi gặp không biến chủ trương ngày 27/10 thành một cam kết về giá, và không gắn dự án Mỹ Khê Paradise với căn hộ đang xem.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Ngày 27/10/2026 Đà Nẵng thống nhất điều gì về dịch vụ đêm tại Mỹ Khê?",
        text: "Theo Cổng Bộ VHTTDL (16:18 ngày 27/10/2026) và Báo Đại Đoàn Kết (15:57 cùng ngày), Phó Chủ tịch UBND TP Đà Nẵng Nguyễn Thị Anh Thi chủ trì buổi làm việc trưa 27/10 và thống nhất chủ trương triển khai dự án khai thác dịch vụ đêm tại bãi biển Mỹ Khê. Dự án là tổ hợp khách sạn, văn phòng và khu vui chơi giải trí không ngủ Mỹ Khê Paradise, của Công ty CP MBLand Đà Nẵng, trên khu đất hơn 11.000 m² đường Võ Nguyên Giáp, đối diện bãi biển Mỹ Khê, phường Ngũ Hành Sơn. Báo Đà Nẵng ngày 27/10/2026 viết buổi làm việc diễn ra sáng 27/10, tại bãi biển phía Đông đường Võ Nguyên Giáp, và Phó Chủ tịch cơ bản đồng ý chủ trương. Các bài không công bố số quyết định.",
      },
      {
        heading: "Khởi công tháng 1/2027 đã phải giấy phép xây dựng chưa?",
        text: "Chưa, theo những gì các bài ngày 27/10/2026 công bố. Mốc khởi công tháng 1/2027, vận hành giai đoạn 1 từ tháng 8/2027 và hoàn thành năm 2031 là tiến độ dự kiến. Báo Đà Nẵng ngày 27/10/2026 ghi doanh nghiệp đề nghị được hướng dẫn cấp giấy chứng nhận đầu tư, và sau khi được chấp thuận sẽ hoàn thiện thủ tục xin giấy phép xây dựng. Cùng bài, Sở Xây dựng được giao rà soát sự phù hợp với quy hoạch. Các bài không nêu số giấy chứng nhận đầu tư và không nêu số giấy phép xây dựng. Khoảng 1.000 việc làm và mức nộp ngân sách trên 100 tỷ đồng mỗi năm là mục tiêu dự án trong các bài, không phải bảng giá một căn hộ.",
      },
      {
        heading: "Dự thảo chỉnh trang bãi biển hơn 12,56 tỷ đã được duyệt chưa?",
        text: "Chưa. Theo Cổng Thông tin điện tử thành phố Đà Nẵng (07:00 ngày 15/10/2026) và Báo Pháp Luật Việt Nam (19:20 ngày 22/10/2026), Sở Văn hóa, Thể thao và Du lịch đang lấy ý kiến dự thảo, tổng kinh phí dự kiến 12.562.316.000 đồng. Trong đó 5.279.394.000 đồng cho hạ tầng tiện ích, cảnh quan và vệ sinh, 7.282.922.000 đồng cho 2.200 cây dừa. Nguồn tiền trong dự thảo là vận động tài trợ. Vận động tài trợ dự kiến từ tháng 10/2026 đến tháng 9/2027; thi công dự kiến từ tháng 1 đến tháng 12/2027 nếu kế hoạch được ban hành sau này. Dự thảo không phải giấy phép của Mỹ Khê Paradise, và không kết luận giá căn hộ.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí về chủ trương khai thác dịch vụ đêm tại bãi biển Mỹ Khê và về dự thảo chỉnh trang bãi biển du lịch. Bài không phải thông báo của UBND thành phố Đà Nẵng hay của Sở Văn hóa, Thể thao và Du lịch, không phải thông cáo của The Camellia Sơn Trà, không gắn Công ty CP MBLand Đà Nẵng hay dự án Mỹ Khê Paradise với The Camellia Sơn Trà, không thay tư vấn pháp lý và không cam kết lợi nhuận hay giá. Nguồn: Cổng Bộ VHTTDL, 16:18 ngày 27/10/2026, theo Báo Đại Đoàn Kết — https://bvhttdl.gov.vn/thong-nhat-dau-tu-khu-kinh-te-dem-dich-vu-chat-luong-cao-tai-bien-da-nang-20260228171220727.htm ; Báo Đại Đoàn Kết, Nguyễn Tú, 15:57 ngày 27/10/2026 — https://daidoanket.vn/thong-nhat-dau-tu-khu-kinh-te-dem-dich-vu-chat-luong-cao-tai-bien-da-nang.html ; Báo Đà Nẵng, dẫn trên vietnam.vn ngày 27/10/2026 — https://www.vietnam.vn/dong-y-chu-truong-khai-thac-dich-vu-dem-tai-bai-bien-my-khe ; cùng bài trên BaoMoi — https://baomoi.com/dong-y-chu-truong-khai-thac-dich-vu-dem-tai-bai-bien-my-khe-c56362149.epi ; Cổng Thông tin điện tử TP Đà Nẵng, Minh Phương, 07:00 ngày 15/10/2026 — https://danang.gov.vn/vi/w/de-xuat-dau-tu-hon-1256-ty-dong-cai-tao-chinh-trang-cac-bai-bien-du-lich ; Báo Pháp Luật Việt Nam, Trúc Ninh, 19:20 ngày 22/10/2026 — https://dnbeta.baophapluat.vn/da-nang-du-kien-chi-hon-12-56-ty-dong-chinh-trang-cac-bai-bien-du-lich.html ; Diễn đàn Giao thông, Quang Huy, 07:43 ngày 16/10/2026 — https://diendangiaothong.vn/gt360/da-nang-de-xuat-hon-1256-ty-dong-cai-tao-ha-tang-chinh-trang-canh-quan-cac-bai-bien-du-lich-tintuc84558 ; Ban Quản lý bán đảo Sơn Trà và các bãi biển du lịch Đà Nẵng, bài ngày 02/03/2026 về Quyết định 2838/QĐ-UBND — http://sontra.danang.vn/index.php/2026/03/02/da-nang-trien-khai-phuong-an-khai-thac-cac-hoat-dong-dich-vu-tai-bai-bien-cac-tuyen-hoang-sa-vo-nguyen-giap-truong-sa-va-nguyen-tat-thanh/. Ảnh đầu bài và ảnh biểu diễn: Nguyễn Tú/Đại Đoàn Kết, Cổng Bộ VHTTDL đăng lại ảnh đầu bài ngày 27/10/2026. Ảnh Phó Chủ tịch phát biểu: Nguyễn Tú/Đại Đoàn Kết. Ảnh đại diện doanh nghiệp báo cáo: Ngọc Hà/Báo Đà Nẵng.",
      },
    ],
  },
  {
    slug: "da-nang-duyet-khu-tai-dinh-cu-duong-sat-toc-do-cao",
    date: "27.10.2026",
    title: "Đà Nẵng duyệt khu tái định cư đường sắt: đọc tiến độ thế nào?",
    excerpt:
      "Theo Báo Xây dựng (27/10/2026), Đà Nẵng duyệt khu tái định cư Điện Bàn Tây hơn 147,8 tỷ, làm 2026–2029. Đây là mốc giải phóng mặt bằng, chưa phải lịch tàu.",
    description:
      "Đà Nẵng duyệt khu tái định cư Điện Bàn Tây hơn 147,8 tỷ (Báo Xây dựng, 27/10/2026). Mốc 2026–2029 là tiến độ khu tái định cư, chưa phải lịch khai thác tàu.",
    image: "/images/news-duong-sat-tdc-2710-og.jpg",
    imageAlt:
      "Ảnh chụp từ trên cao một khu đất tái định cư đang san nền, có đường nội bộ và dãy nhà mái đỏ. Ảnh: Báo Đà Nẵng",
    imageCaption:
      "Một dự án tái định cư được triển khai trên địa bàn phường Điện Bàn Bắc. Ảnh: Báo Đà Nẵng",
    poster: "/images/news-duong-sat-tdc-2710-hero.webp",
    gallery: [
      "/images/news-duong-sat-tdc-2710-hero.webp",
      "/images/news-duong-sat-tdc-2710-body-01.webp",
      "/images/news-duong-sat-tdc-2710-body-02.webp",
      "/images/news-duong-sat-tdc-2710-body-03.webp",
    ],
    body: [
      {
        text: "Ngày 27/10/2026, UBND thành phố Đà Nẵng phê duyệt Dự án thành phần 6: khu tái định cư phục vụ dự án đường sắt tốc độ cao trên trục Bắc – Nam tại xã Điện Bàn Tây. Theo Báo Xây dựng (Vĩnh Nhân, 08:35 ngày 27/10/2026) và VOH (27/10/2026, 10:27), khu này có diện tích sử dụng đất gần 8,8 ha, tổng mức đầu tư hơn 147,8 tỷ đồng, thời gian thực hiện từ năm 2026 đến năm 2029. Với người đang xem căn hộ tại Đà Nẵng, đây là một mốc giải phóng mặt bằng và tái định cư đã được duyệt, chưa phải lịch khai thác tàu.",
      },
      {
        text: "Bài này đọc chuỗi phê duyệt khu tái định cư trong tháng 10/2026 cho người mua căn hộ tại Đà Nẵng, kể cả tại phường Sơn Trà. Hạ tầng giao thông lớn đang chuyển từ bước quy hoạch sang bước bồi thường, hỗ trợ và làm khu tái định cư. Bài là tin thị trường tổng hợp: không phải thông báo của UBND thành phố Đà Nẵng, không phải thông cáo của một ban quản lý dự án, và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        text: "Ảnh đầu bài là một khu tái định cư trên địa bàn phường Điện Bàn Bắc, theo chú thích Người Đưa Tin (Ảnh: Báo Đà Nẵng). Ảnh công trường giữa bài là ảnh Báo Xây dựng đăng ngày 27/10/2026: chú thích báo ghi xã Điện Bàn Tây, còn bảng trong ảnh ghi phường Điện Bàn Bắc; bài không ghi tên nhiếp ảnh gia. Ảnh con đường và dãy nhà mái đỏ là khu tái định cư qua phường Điện Bàn Bắc, theo chú thích Báo Tin tức (Ảnh: Trần Tĩnh/TTXVN). Ảnh tàu trên cầu cạn là ảnh minh họa tạo bằng AI, không phải ảnh thật của tuyến đường sắt tốc độ cao Bắc – Nam, không phải ảnh một ga và không phải ảnh The Camellia Sơn Trà.",
      },
      {
        text: "Website đã có bài ngày 22/10 về quyết định phê duyệt quy hoạch chung Đà Nẵng đến năm 2050. Trong bài đó, theo VnExpress (21/10/2026), thành phố định hướng giao thông công cộng khối lượng lớn, gồm đường sắt đô thị, đường sắt nhẹ, và phát triển đô thị gắn với đầu mối giao thông công cộng (TOD). Bài hôm nay không viết lại đồ án đến năm 2050. Phần mới là các quyết định khu tái định cư của tuyến đường sắt tốc độ cao trục Bắc – Nam, đoạn qua Đà Nẵng.",
        links: [
          {
            to: "/tin-tuc/da-nang-phe-duyet-quy-hoach-chung-den-2050",
            label: "Đà Nẵng phê duyệt quy hoạch chung đến năm 2050",
          },
        ],
      },
      {
        heading: "Khu Điện Bàn Tây hơn 147,8 tỷ, thực hiện 2026–2029",
        text: "Theo Báo Xây dựng (Vĩnh Nhân, 08:35 ngày 27/10/2026), khu tái định cư tại xã Điện Bàn Tây thuộc dự án bồi thường, hỗ trợ, tái định cư, di dời công trình hạ tầng kỹ thuật của đường sắt tốc độ cao trên trục Bắc – Nam, đoạn qua địa phận thành phố Đà Nẵng. VOH (27/10/2026, 10:27) gọi đây là Dự án thành phần 6 và ghi cùng địa điểm xã Điện Bàn Tây, cùng diện tích gần 8,8 ha. Hai bài không nêu số hiệu quyết định. Người đọc muốn đối chiếu số quyết định cần xem văn bản khi cơ quan có thẩm quyền công bố.",
      },
      {
        text: "Theo Báo Xây dựng và VOH ngày 27/10/2026, các hạng mục đầu tư của khu Điện Bàn Tây gồm san nền, giao thông, hệ thống thoát nước mưa, thoát nước thải, trạm xử lý nước thải, cấp nước, cấp điện, điện chiếu sáng, hào kỹ thuật và công viên cây xanh. Cả hai bài viết thiết kế phù hợp với quy hoạch chi tiết tỷ lệ 1/500 đã được phê duyệt. Hai bài không ghi số quyết định của riêng đồ án 1/500 khu Điện Bàn Tây trong phần tin ngày 27/10.",
      },
      {
        text: "Theo Báo Xây dựng (Vĩnh Nhân, 27/10/2026), tổng mức đầu tư khu Điện Bàn Tây hơn 147,8 tỷ đồng và thời gian thực hiện từ năm 2026 đến năm 2029. VOH (27/10/2026, 10:27) ghi cùng hai con số. Tiêu đề Báo Xây dựng viết «gần 150 tỷ đồng» và tiêu đề VOH viết «gần 148 tỷ đồng»; phần nội dung cả hai bài dùng mức hơn 147,8 tỷ đồng. Bài này lấy mức trong phần nội dung. Khoảng thời gian 2026–2029 là thời gian thực hiện dự án khu tái định cư, theo đúng cách hai bài viết.",
      },
      {
        text: "Theo Báo Xây dựng và VOH ngày 27/10/2026, trước quyết định ngày 27/10, thành phố đã phê duyệt một số khu tái định cư tại các xã Hòa Tiến, Gò Nổi và Điện Bàn Bắc, với tổng mức đầu tư khoảng 777 tỷ đồng. Mức khoảng 777 tỷ đồng là cách hai bài gộp «một số» khu tại ba địa danh đó. Đây là dòng tổng hợp của hai bài ngày 27/10, chưa phải tổng mức giải phóng mặt bằng toàn tuyến.",
      },
      {
        text: "Ảnh công trường dưới đây là ảnh Báo Xây dựng đăng kèm bài ngày 27/10/2026. Chú thích của báo ghi khu tái định cư tại xã Điện Bàn Tây. Bảng công trường trong khung ảnh ghi hạng mục khu tái định cư trên địa bàn phường Điện Bàn Bắc. Bài giữ cả chú thích của báo và dòng chữ trên bảng. Hai địa danh này được ghi riêng, không được gộp thành một khu. Bài Báo Xây dựng không ghi tên nhiếp ảnh gia.",
        image: "/images/news-duong-sat-tdc-2710-body-01.webp",
        imageAlt:
          "Công trường san lấp, xe ben và bảng tên dự án. Bảng trong ảnh ghi khu tái định cư đường sắt tốc độ cao trên địa bàn phường Điện Bàn Bắc. Chú thích Báo Xây dựng ghi xã Điện Bàn Tây. Ảnh: Báo Xây dựng.",
      },
      {
        heading: "Tuyến khoảng 116,05 km và 31 dự án thành phần",
        text: "Theo Báo Xây dựng (27/10/2026), VOH (27/10/2026) và Báo Tin tức (Quốc Dũng/TTXVN, 11:48 ngày 22/10/2026), tuyến đường sắt tốc độ cao qua thành phố Đà Nẵng dài khoảng 116,05 km, đi qua 24 xã, phường, điểm đầu tại phường Hải Vân, điểm cuối tại xã Núi Thành. Ba bài nêu cùng chiều dài, cùng số xã, phường và cùng hai điểm đầu cuối. Ba bài không liệt kê đủ tên 24 xã, phường.",
      },
      {
        text: "Theo Báo Xây dựng và VOH ngày 27/10/2026, các hạng mục chính được nêu gồm hai ga hành khách Đà Nẵng và Tam Kỳ, một ga hàng hóa Chu Lai, bốn kho tập kết hàng hóa và trạm bảo dưỡng. Hai bài viết tên ga như vậy và không ghi phường đặt từng ga. Báo Tin tức ngày 22/10/2026 không nhắc danh sách ga trong bài được dẫn.",
      },
      {
        text: "Theo Báo Xây dựng (27/10/2026) và Báo Tin tức (22/10/2026), công tác giải phóng mặt bằng, tái định cư và di dời hạ tầng kỹ thuật được chia thành 31 dự án thành phần. Trong đó, hai dự án thành phần chính thực hiện bồi thường, hỗ trợ, tái định cư, giải phóng mặt bằng toàn tuyến và di dời hệ thống điện, nước, viễn thông, thủy lợi, giao thông ngầm. Hai mươi chín dự án độc lập đầu tư xây dựng 20 khu tái định cư và 9 khu nghĩa trang. VOH ngày 27/10 ghi việc chia thành 31 dự án thành phần.",
      },
      {
        text: "Tên «ga hành khách Đà Nẵng» trong Báo Xây dựng và VOH ngày 27/10 là tên ga các bài nêu, không kèm địa chỉ phường. Danh sách 18 khu vực đã có quy hoạch chi tiết 1/500, theo Báo Tin tức (22/10/2026), gồm Hòa Khánh – Liên Chiểu, Hòa Tiến, Bà Nà, Điện Bàn Bắc, Điện Bàn Tây, Duy Xuyên, Quế Sơn Trung, Thăng Bình, Thăng Phú, Thăng Điền, Tây Hồ, Chiên Đàn, Bàn Thạch, Hương Trà, Tam Xuân, Tam Mỹ, Gò Nổi và Xuân Phú. Phường Sơn Trà không có trong danh sách đó. Các bài được dẫn không viết rằng tuyến hoặc một ga đi qua phường Sơn Trà.",
      },
      {
        text: "Ảnh tàu cao tốc trên cầu cạn dưới đây là ảnh minh họa tạo bằng AI. Ảnh không phải ảnh thật của tuyến khoảng 116,05 km, không phải phối cảnh ga hành khách Đà Nẵng hay Tam Kỳ, không phải ga hàng hóa Chu Lai, và không phải ảnh một khu tái định cư.",
        image: "/images/news-duong-sat-tdc-2710-body-03.webp",
        imageAlt:
          "Tàu cao tốc màu trắng trên cầu cạn, hai bên là ruộng và núi xa. Ảnh minh họa tạo bằng AI, không phải ảnh thật của tuyến đường sắt tốc độ cao Bắc – Nam.",
      },
      {
        heading: "Các khu tái định cư được duyệt trong tháng 10",
        text: "Theo Báo Tin tức (Quốc Dũng/TTXVN, 11:48 ngày 22/10/2026), ngày 21/10, Chủ tịch UBND thành phố Đà Nẵng phê duyệt dự án đầu tư xây dựng Dự án thành phần 3: khu tái định cư phục vụ đường sắt tốc độ cao trên trục Bắc – Nam tại phường Hòa Khánh và phường Liên Chiểu. Tổng mức đầu tư hơn 488 tỷ đồng, thực hiện từ năm 2026 đến năm 2029, diện tích sử dụng đất khoảng 221.432 m². Hạng mục bài liệt kê gồm san nền, giao thông, thoát nước mưa, thoát nước thải, cấp điện, điện chiếu sáng, hào kỹ thuật và công viên cây xanh, phù hợp quy hoạch chi tiết 1/500 được duyệt tại Quyết định số 3207/QĐ-UBND ngày 21/7/2026. Quyết định 3207 là quyết định quy hoạch chi tiết, theo đúng cách bài viết. Bài không nêu số quyết định của lần phê duyệt vốn ngày 21/10.",
      },
      {
        text: "Theo Báo Tin tức (22/10/2026), ngày 16/10, UBND thành phố phê duyệt Dự án thành phần 5, khu tái định cư tại xã Hòa Tiến, tổng mức đầu tư hơn 380 tỷ đồng, diện tích khoảng 245.088 m². Cùng bài, Ban Quản lý dự án đầu tư xây dựng các công trình giao thông và nông nghiệp Đà Nẵng là chủ đầu tư kiêm quản lý dự án đối với khu Hòa Tiến. Mức hơn 380 tỷ đồng là tổng mức đầu tư của riêng dự án thành phần này.",
      },
      {
        text: "Theo Người Đưa Tin (Hà Ly, 07:00 ngày 25/10/2026), UBND thành phố Đà Nẵng ban hành Quyết định số 4878 ngày 23/10/2026, phê duyệt Dự án thành phần 9: khu tái định cư trên địa bàn phường Điện Bàn Bắc (xã Điện Tiến cũ). Tổng mức đầu tư hơn 127,35 tỷ đồng, diện tích sử dụng đất khoảng 66.937,6 m², thời gian thực hiện từ năm 2026 đến năm 2029. Cùng bài, hạ tầng gồm san nền, giao thông, thoát nước mưa, thoát nước thải, trạm xử lý nước thải, cấp điện, điện chiếu sáng, hào kỹ thuật và công viên cây xanh. Giao thông gồm 4 nhánh đường, tổng chiều dài khoảng 1.125 m. Trạm xử lý nước thải có công suất 190 m³/ngày đêm. Đất cây xanh sử dụng công cộng là 4.048,2 m². Ban Quản lý dự án đầu tư xây dựng các công trình giao thông và nông nghiệp Đà Nẵng là chủ đầu tư kiêm đơn vị quản lý dự án.",
      },
      {
        text: "Theo Báo Tin tức (22/10/2026), một khu tái định cư Điện Bàn Bắc thuộc địa bàn xã Điện Hòa cũ có diện tích 4,7 ha với 116 lô đất, đã khởi công và dự kiến hoàn thành trong tháng 12/2026. Hai dòng Điện Bàn Bắc trong hai bài là hai khu khác nhau: bài ngày 22/10 gắn khu 4,7 ha với xã Điện Hòa cũ, bài Người Đưa Tin gắn Dự án thành phần 9 với xã Điện Tiến cũ và diện tích khoảng 66.937,6 m². Mốc tháng 12/2026 là mốc dự kiến hoàn thành khu 4,7 ha trong bài Báo Tin tức.",
        image: "/images/news-duong-sat-tdc-2710-body-02.webp",
        imageAlt:
          "Con đường bê tông qua khu đất trống và dãy nhà mái đỏ. Khu tái định cư đường sắt tốc độ cao qua phường Điện Bàn Bắc. Ảnh: Trần Tĩnh/TTXVN.",
      },
      {
        text: "Mức khoảng 777 tỷ đồng mà Báo Xây dựng và VOH ngày 27/10 ghi cho một số khu tại Hòa Tiến, Gò Nổi và Điện Bàn Bắc là một dòng tổng hợp của hai bài đó. Các mức hơn 380 tỷ đồng (Hòa Tiến, Báo Tin tức, 22/10/2026), hơn 488 tỷ đồng (Hòa Khánh – Liên Chiểu, Báo Tin tức, 22/10/2026) và hơn 127,35 tỷ đồng (Dự án thành phần 9, Người Đưa Tin, 25/10/2026) là tổng mức từng dự án thành phần. Bài này giữ nguyên từng dòng theo từng báo, không cộng các dòng thành một con số mới.",
      },
      {
        heading: "Người mua căn hộ đọc tiến độ và mốc tiền thế nào",
        text: "Theo Báo Tin tức (22/10/2026), tổng mức đầu tư giải phóng mặt bằng tuyến đường sắt tốc độ cao qua thành phố Đà Nẵng dự kiến hơn 19.551 tỷ đồng. Trong đó, chi phí bồi thường, giải phóng mặt bằng hơn 12.704 tỷ đồng, chiếm 65%; đầu tư các khu tái định cư và nghĩa trang hơn 4.229 tỷ đồng, chiếm 21,6%; chi phí dự phòng hơn 1.926 tỷ đồng, chiếm 9,8%; di dời hạ tầng kỹ thuật hơn 690 tỷ đồng, chiếm 3,5%. Các mức này là dự kiến của tổng giải phóng mặt bằng toàn tuyến trong bài ngày 22/10. Mức hơn 147,8 tỷ đồng của khu Điện Bàn Tây là tổng mức một dự án thành phần trong bài ngày 27/10.",
      },
      {
        text: "Theo Báo Tin tức (22/10/2026), đến thời điểm bài đó, thành phố đã hoàn thành phê duyệt 18/18 hồ sơ quy hoạch chi tiết tỷ lệ 1/500 tại Hòa Khánh – Liên Chiểu, Hòa Tiến, Bà Nà, Điện Bàn Bắc, Điện Bàn Tây, Duy Xuyên, Quế Sơn Trung, Thăng Bình, Thăng Phú, Thăng Điền, Tây Hồ, Chiên Đàn, Bàn Thạch, Hương Trà, Tam Xuân, Tam Mỹ, Gò Nổi và Xuân Phú. «18/18» là số hồ sơ quy hoạch chi tiết đã duyệt, theo bài ngày 22/10. Một khu đã có quy hoạch 1/500 là một bước hồ sơ. Bài không viết rằng 18 khu đó đã xây xong nhà, và không viết rằng tàu đã chạy.",
      },
      {
        text: "Người đang xem căn hộ có thể tách ba lớp thời gian. Lớp một là định hướng đường sắt đô thị và TOD trong quy hoạch chung đến năm 2050: theo VnExpress (21/10/2026), đó là định hướng đầu tư trong đồ án, chưa phải lịch khai trương một tuyến tàu tại một phường. Lớp hai là các quyết định khu tái định cư của đường sắt tốc độ cao trục Bắc – Nam trong tháng 10/2026, với cửa sổ thực hiện 2026–2029 ở những dự án thành phần các bài nêu mốc này, và với khu 4,7 ha tại Điện Bàn Bắc (xã Điện Hòa cũ) mà Báo Tin tức ghi đã khởi công, dự kiến hoàn thành trong tháng 12/2026. Lớp ba là lịch khai thác tàu: bốn bài được dẫn không công bố ngày chạy tàu, không công bố giá vé và không công bố ngày một ga đón khách.",
        links: [
          {
            to: "/tin-tuc/da-nang-phe-duyet-quy-hoach-chung-den-2050",
            label: "Quy hoạch chung đến 2050: đường sắt đô thị và TOD",
          },
        ],
      },
      {
        text: "Bốn bài không công bố giá căn hộ và không kết luận giá nhà tại một phường sẽ tăng vì có đường sắt. Một quyết định khu tái định cư là quyết định về đất và hạ tầng kỹ thuật của khu tái định cư, cùng tiến độ giải phóng mặt bằng. Các mức hơn 147,8 tỷ đồng, khoảng 777 tỷ đồng và hơn 19.551 tỷ đồng là vốn dự án hoặc dự kiến chi phí giải phóng mặt bằng trong các bài báo. Các mức đó không phải bảng giá một căn hộ.",
      },
      {
        text: "The Camellia Sơn Trà là căn hộ tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng, tựa lưng vào bán đảo Sơn Trà, quy mô 469 căn, 25 tầng nổi và 2 hầm. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Giá sàn website từ 1,98 tỷ; giá và chính sách theo bảng giá và phụ lục tại thời điểm ký. Vị trí dự án nằm tại phường Sơn Trà. Các bài nguồn về đường sắt tốc độ cao không viết tuyến hoặc ga đi qua phường Sơn Trà.",
        links: [
          { to: "/gioi-thieu", label: "Fact sheet The Camellia Sơn Trà" },
          { to: "/can-ho", label: "Loại căn và giá sàn trên website" },
        ],
      },
      {
        heading: "Đối chiếu hồ sơ một căn tại phường Sơn Trà",
        text: "Anh chị muốn ngồi đọc hồ sơ một căn hộ tại phường Sơn Trà, và tách tin đường sắt tốc độ cao khỏi những gì đang ghi cho đúng căn, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Giá sàn website từ 1,98 tỷ; giá và chính sách theo bảng giá và phụ lục tại thời điểm ký. Buổi gặp để xem hồ sơ đã công bố trên website. Buổi gặp giữ nguyên tính chất của tin đường sắt: mốc 2026–2029 là thời gian thực hiện các khu tái định cư được các bài nêu, và các bài không kết luận giá căn hộ tăng.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Ngày 27/10/2026 Đà Nẵng phê duyệt khu tái định cư nào, với mức đầu tư bao nhiêu?",
        text: "Theo Báo Xây dựng (Vĩnh Nhân, 08:35 ngày 27/10/2026) và VOH (27/10/2026, 10:27), UBND thành phố Đà Nẵng phê duyệt Dự án thành phần 6, khu tái định cư phục vụ đường sắt tốc độ cao trên trục Bắc – Nam tại xã Điện Bàn Tây. Diện tích sử dụng đất gần 8,8 ha, tổng mức đầu tư hơn 147,8 tỷ đồng, thời gian thực hiện từ năm 2026 đến năm 2029. Hai bài không nêu số hiệu quyết định. Trước đó, cùng hai bài, một số khu tại Hòa Tiến, Gò Nổi và Điện Bàn Bắc đã được duyệt với tổng mức khoảng 777 tỷ đồng.",
      },
      {
        heading: "Mốc 2026–2029 có phải lịch khai thác tàu cao tốc không?",
        text: "Mốc từ năm 2026 đến năm 2029 trong các bài là thời gian thực hiện dự án khu tái định cư, chưa phải lịch khai thác tàu. Theo Báo Xây dựng và VOH ngày 27/10/2026, mốc này gắn với khu tại xã Điện Bàn Tây, tổng mức hơn 147,8 tỷ đồng. Báo Tin tức (22/10/2026) ghi cùng cửa sổ 2026–2029 cho Dự án thành phần 3 tại Hòa Khánh và Liên Chiểu, tổng mức hơn 488 tỷ đồng. Người Đưa Tin (25/10/2026) ghi cùng cửa sổ 2026–2029 cho Dự án thành phần 9 tại phường Điện Bàn Bắc, tổng mức hơn 127,35 tỷ đồng. Riêng khu tái định cư Điện Bàn Bắc thuộc xã Điện Hòa cũ, Báo Tin tức ghi đã khởi công và dự kiến hoàn thành trong tháng 12/2026, diện tích 4,7 ha, 116 lô. Bốn bài không công bố ngày chạy tàu.",
      },
      {
        heading: "Người xem căn hộ tại phường Sơn Trà nên hiểu tin đường sắt này thế nào?",
        text: "Đây là tin tiến độ giải phóng mặt bằng của tuyến đường sắt tốc độ cao trục Bắc – Nam, đoạn qua Đà Nẵng. Theo Báo Xây dựng, VOH và Báo Tin tức, tuyến dài khoảng 116,05 km, từ phường Hải Vân đến xã Núi Thành, qua 24 xã, phường. Các bài không viết rằng tuyến hoặc ga đi qua phường Sơn Trà. Danh sách 18 khu đã có quy hoạch 1/500 trong Báo Tin tức (22/10/2026) không có phường Sơn Trà. Các bài cũng không kết luận giá căn hộ tăng. Giá một căn đang xem nằm ở bảng giá của đúng dự án tại thời điểm ký. Với The Camellia Sơn Trà, giá sàn website từ 1,98 tỷ; giá và chính sách theo bảng giá và phụ lục tại thời điểm ký.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí về các quyết định khu tái định cư phục vụ đường sắt tốc độ cao đoạn qua Đà Nẵng. Bài không phải thông báo của UBND thành phố Đà Nẵng hay một cơ quan nhà nước, không phải thông cáo của The Camellia Sơn Trà, không thay tư vấn pháp lý và không cam kết lợi nhuận hay giá. Nguồn: Báo Xây dựng, Vĩnh Nhân, 08:35 ngày 27/10/2026 — https://baoxaydung.vn/da-nang-phe-duyet-them-khu-tai-dinh-cu-duong-sat-toc-do-cao-gan-150-ty-dong-192261027075629034.htm ; VOH, 10:27 ngày 27/10/2026 — https://voh.com.vn/xa-hoi/da-nang-phe-duyet-khu-tai-dinh-cu-duong-sat-toc-do-cao-gan-148-ty-dong-675841.html ; Báo Tin tức (TTXVN), Quốc Dũng, 11:48 ngày 22/10/2026 — https://baotintuc.vn/da-nang-trien-khai-cac-khu-tai-dinh-cu-duong-sat-bac-nam-post1396439.html ; Người Đưa Tin, Hà Ly, 07:00 ngày 25/10/2026 — https://antt.nguoiduatin.vn/da-nang-co-them-khu-tai-dinh-cu-127-ty-dong-phuc-vu-duong-sat-toc-do-cao-truc-bac-nam-205261024212854287.htm. Ảnh đầu bài: Báo Đà Nẵng (chú thích Người Đưa Tin, khu tái định cư tại phường Điện Bàn Bắc). Ảnh công trường: Báo Xây dựng (chú thích báo ghi xã Điện Bàn Tây; bảng trong ảnh ghi phường Điện Bàn Bắc). Ảnh khu Điện Bàn Bắc: Trần Tĩnh/TTXVN. Ảnh tàu trên cầu cạn: ảnh minh họa tạo bằng AI.",
      },
    ],
  },

  {
    slug: "noxh-sau-5-nam-khong-ban-tu-do-nguoi-mua-can-ho",
    date: "27.10.2026",
    title: "NOXH sau 5 năm vẫn không bán tự do: căn hộ thương mại đọc sao?",
    excerpt:
      "Theo VnExpress (25/10/2026), dự thảo Luật Nhà ở đề xuất sau 5 năm chỉ bán lại nhà ở xã hội cho người đủ điều kiện. Đề xuất chưa có hiệu lực.",
    description:
      "Dự thảo Luật Nhà ở: sau 5 năm kể từ khi trả đủ tiền, nhà ở xã hội chỉ bán lại cho người đủ điều kiện, không theo cơ chế thị trường. Chưa có hiệu lực.",
    image: "/images/news-noxh-5-nam-2710-og.jpg",
    imageAlt:
      "Khu nhà ở xã hội Định Hòa, khu vực tỉnh Bình Dương cũ, nay là TP HCM, nhìn từ trên cao: dãy nhà thấp tầng, mái đỏ và cây xanh. Ảnh: Quỳnh Trần/VnExpress",
    imageCaption:
      "Khu nhà ở xã hội Định Hòa tại khu vực tỉnh Bình Dương cũ, nay là TP HCM. Ảnh: Quỳnh Trần/VnExpress",
    poster: "/images/news-noxh-5-nam-2710-hero.webp",
    gallery: [
      "/images/news-noxh-5-nam-2710-hero.webp",
      "/images/news-noxh-5-nam-2710-body-01.webp",
      "/images/news-noxh-5-nam-2710-body-02.webp",
    ],
    body: [
      {
        text: "Nhà ở xã hội, nếu dự thảo Luật Nhà ở (sửa đổi) được giữ như các bài báo đang dẫn, sẽ không trở thành hàng hóa bán tự do trên thị trường chỉ vì đã qua 5 năm. Theo VnExpress (Anh Tú, 13:05 ngày 25/10/2026), thay vì chuyển nhượng tự do sau 5 năm, nhà ở xã hội dự kiến chỉ được bán lại cho người đủ điều kiện hưởng chính sách về loại nhà này. Cổng Thông tin điện tử Chính phủ (Chinhphu.vn, 18:38 ngày 25/10/2026) và LuatVietnam (Ngọc Thúy, 21:32 ngày 25/10/2026) ghi cùng hướng. Đây là nội dung dự thảo. LuatVietnam viết rõ đó chưa phải quy định có hiệu lực.",
      },
      {
        text: "Bài này đọc điều khoản bán lại nhà ở xã hội cho người đang xem căn hộ thương mại tại Đà Nẵng, để tách hai cơ chế: nhà ở xã hội gắn với đối tượng được hưởng chính sách, căn hộ thương mại không nằm trong điều khoản đó. Bài không phải thông báo của Quốc hội, không phải văn bản của Chính phủ, không phải hướng dẫn của Sở Xây dựng và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        text: "Ảnh đầu bài là khu nhà ở xã hội Định Hòa tại khu vực tỉnh Bình Dương cũ, nay là TP HCM, theo chú thích VnExpress (Ảnh: Quỳnh Trần). Ảnh hội trường giữa bài là một phiên họp toàn thể của Quốc hội tại Kỳ họp thứ hai, theo chú thích Báo Đầu tư (Ảnh: QH). Ảnh hai người ngồi xem giấy tờ là ảnh minh họa tạo bằng AI, không phải hợp đồng mua nhà ở xã hội, không phải biên bản một phiên họp và không phải ảnh The Camellia Sơn Trà.",
      },
      {
        text: "Website đã có bài ngày 23/10 về việc Chính phủ trình Quốc hội 3 dự thảo sửa Luật Đất đai, Luật Nhà ở và Luật Kinh doanh bất động sản, và bài về đợt nhận hồ sơ 277 căn nhà ở xã hội tại Hòa Hiệp 4. Bài hôm nay không viết lại hai bài đó. Phần mới là đề xuất siết người được mua lại nhà ở xã hội sau 5 năm, đối chiếu với luật hiện hành.",
        links: [
          {
            to: "/tin-tuc/sua-doi-3-luat-dat-dai-nha-o-kinh-doanh-bds-nguoi-mua-luu-y",
            label: "Sửa 3 luật đất đai, nhà ở, kinh doanh BĐS: người mua lưu ý gì?",
          },
          {
            to: "/tin-tuc/nha-o-xa-hoi-da-nang-q4-2026-hoa-hiep-277-can",
            label: "Nhà ở xã hội Đà Nẵng quý IV/2026: 277 căn Hòa Hiệp",
          },
        ],
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Dự thảo Luật Nhà ở (sửa đổi): sau 5 năm kể từ ngày đã thanh toán đủ tiền, bên mua nhà ở xã hội chỉ được bán lại cho người thuộc đối tượng được mua nhà ở xã hội (VnExpress, Chinhphu.vn và LuatVietnam, 25/10/2026). • Luật Nhà ở hiện hành, theo cùng các bài, cho phép sau 5 năm chuyển nhượng theo cơ chế thị trường, không giới hạn đối tượng mua lại. • Trong thời hạn 5 năm, dự thảo giữ quy định hiện hành: chỉ bán lại cho chủ đầu tư hoặc người được mua nhà ở xã hội, giá bán tối đa bằng giá hợp đồng mua bán ban đầu (VnExpress và LuatVietnam, 25/10/2026). • Nhà ở xã hội thuê mua: thay vì chuyển nhượng tự do sau 5 năm, người thuê mua không còn nhu cầu có thể phải chấm dứt hợp đồng và trả lại nhà. • Giao dịch bán, cho thuê mua, cho thuê nhà ở xã hội dự kiến phải cập nhật vào cơ sở dữ liệu về nhà ở và thị trường bất động sản. • Theo Báo Đầu tư (Nguyễn Lê, 06:45 ngày 26/10/2026), 3 dự án luật Đất đai, Nhà ở và Kinh doanh bất động sản dự kiến được thảo luận tại hội trường từ sáng 29/10 đến giữa sáng 30/10. Thảo luận không có nghĩa là đã thông qua và không có nghĩa là đã có hiệu lực. • Điều khoản này được các bài viết cho nhà ở xã hội. Ba nguồn không viết rằng cùng điều kiện người mua lại áp vào căn hộ thương mại.",
      },
      {
        heading: "Luật hiện hành: sau 5 năm được chuyển nhượng theo cơ chế thị trường",
        text: "Theo VnExpress (Anh Tú, 25/10/2026), Luật Nhà ở hiện hành cho phép sau 5 năm, chủ sở hữu nhà ở xã hội được chuyển nhượng cho người có nhu cầu theo cơ chế thị trường, tức không giới hạn đối tượng mua lại. Chinhphu.vn (25/10/2026) viết cùng ý: sau 5 năm kể từ khi thanh toán đủ tiền mua nhà, chủ sở hữu được chuyển nhượng theo cơ chế thị trường, không giới hạn đối tượng mua lại. LuatVietnam (Ngọc Thúy, 25/10/2026) gọi đó là bán lại theo cơ chế thị trường sau thời hạn 5 năm khi đáp ứng các điều kiện theo quy định.",
      },
      {
        text: "“Không giới hạn đối tượng mua lại” là cách ba bài mô tả luật đang có hiệu lực, không phải lời xác nhận một căn nhà ở xã hội cụ thể đã đủ điều kiện bán. Người đang sở hữu nhà ở xã hội vẫn phải đọc hợp đồng của mình và quy định đang áp dụng, gồm mốc 5 năm tính từ ngày nào. Các bài đều gắn mốc đó với ngày đã thanh toán đủ tiền mua nhà.",
      },
      {
        heading: "Dự thảo: sau 5 năm chỉ bán cho người đủ điều kiện nhà ở xã hội",
        text: "Theo VnExpress (Anh Tú, 25/10/2026), tại dự thảo Luật Nhà ở (sửa đổi), Chính phủ chỉnh lý quy định bán lại nhà ở xã hội sau 5 năm nhằm ngăn nguy cơ trục lợi chính sách từ loại hình nhà ở an sinh này. Cụ thể, sau 5 năm kể từ ngày đã thanh toán đủ tiền, bên mua chỉ được bán lại nhà cho đối tượng thuộc trường hợp được mua nhà ở xã hội theo quy định. Chinhphu.vn (25/10/2026) viết: chủ sở hữu chỉ được bán lại cho người thuộc diện được hưởng chính sách hỗ trợ về nhà ở xã hội. LuatVietnam (25/10/2026) kết luận: dù đã qua thời hạn 5 năm, nhà ở xã hội vẫn không được chuyển nhượng tự do cho mọi người có nhu cầu.",
      },
      {
        text: "Điểm khác với luật hiện hành, theo đúng cách các bài đặt cạnh nhau, nằm ở người được đứng ra mua lại. Luật hiện hành, sau 5 năm, không giới hạn đối tượng mua lại. Dự thảo vẫn yêu cầu người mua lại thuộc đối tượng được mua nhà ở xã hội. Nhóm người có thể nhận chuyển nhượng vì vậy hẹp hơn nhóm “người có nhu cầu” mà luật hiện hành đang viết. Đó là khác biệt về điều kiện người mua, chưa phải một kết luận căn nhà bán được nhanh hay chậm, và chưa phải một kết luận giá sẽ tăng hay giảm.",
      },
      {
        heading: "Trong 5 năm đầu, dự thảo giữ cách bán lại của Luật Nhà ở 2023",
        text: "Theo VnExpress (Anh Tú, 25/10/2026), trong thời hạn 5 năm, dự thảo vẫn tiếp tục duy trì quy định như Luật Nhà ở 2023: bên mua nhà ở xã hội chỉ được bán lại cho chủ đầu tư hoặc đối tượng được mua nhà ở xã hội. Giá bán tối đa bằng giá trong hợp đồng mua bán ban đầu với chủ đầu tư dự án. LuatVietnam (Ngọc Thúy, 25/10/2026) ghi cùng hai ý: người nhận lại là chủ đầu tư hoặc người thuộc đối tượng được mua nhà ở xã hội, và giá bán tối đa bằng giá hợp đồng ban đầu.",
      },
      {
        text: "Mức “giá bán tối đa bằng giá hợp đồng ban đầu” là quy định các bài nói đang được dự thảo giữ cho giao dịch trong 5 năm đầu của nhà ở xã hội. Đó không phải giá một căn hộ thương mại, không phải bảng giá The Camellia Sơn Trà, và không phải công thức để tính lời khi bán lại. Bài Chinhphu.vn ngày 25/10 không nhắc lại đoạn trong 5 năm đầu; đoạn này lấy từ VnExpress và LuatVietnam.",
      },
      {
        heading: "Thuê mua: không còn nhu cầu thì có thể phải trả lại nhà",
        text: "Theo VnExpress (Anh Tú, 25/10/2026), chính sách với nhà ở xã hội dạng thuê mua cũng được đề xuất siết hơn. Thay vì chuyển nhượng tự do sau 5 năm như hiện tại, chủ căn nhà ở xã hội thuê mua có thể phải chấm dứt hợp đồng và trả lại nhà, nếu không còn nhu cầu. Chinhphu.vn và LuatVietnam ngày 25/10 viết cùng hướng, và đều dùng cách nói “có thể phải”, không viết thành một mức phạt hay một thời hạn trả nhà tính bằng ngày.",
      },
      {
        text: "Thuê mua là hình thức khác với mua đứt. Người đang đọc tin không nên gộp hai trường hợp thành một câu. Với mua, dự thảo vẫn nói đến việc bán lại, nhưng chỉ cho người đủ điều kiện. Với thuê mua, các bài nói người không còn nhu cầu có thể phải chấm dứt hợp đồng và trả nhà, thay cho quyền chuyển nhượng tự do sau 5 năm theo luật hiện hành. Cả hai đều là đề xuất trong dự thảo.",
      },
      {
        heading: "Giao dịch nhà ở xã hội dự kiến phải vào cơ sở dữ liệu",
        text: "Theo VnExpress (Anh Tú, 25/10/2026), việc bán, cho thuê mua, cho thuê nhà ở xã hội dự kiến còn phải cập nhật vào hệ thống thông tin, cơ sở dữ liệu về nhà ở và thị trường bất động sản. Chinhphu.vn và LuatVietnam ngày 25/10 ghi cùng nội dung. LuatVietnam thêm rằng việc cập nhật này nhằm hỗ trợ quản lý và kiểm soát giao dịch. Ba bài không nêu ngày hệ thống mở, không nêu biểu mẫu kê khai và không nêu mức xử lý nếu một giao dịch chưa được cập nhật.",
      },
      {
        heading: "Vì sao Chính phủ chỉnh điều khoản sau 5 năm",
        text: "Theo VnExpress (Anh Tú, 25/10/2026), tại phiên thảo luận về Luật Nhà ở (sửa đổi) ngày 22/10, Thủ tướng Lê Minh Hưng cho biết việc siết đối tượng được mua nhà ở xã hội sau 5 năm nhằm ngăn ngừa trục lợi, làm sai lệch mục tiêu của chính sách, biến chính sách an sinh thành cơ hội kiếm lời. Cùng bài, ông nói quy định tại luật mới nhằm bảo đảm nhà ở xã hội luôn nằm trong hệ sinh thái an sinh và phục vụ đúng đối tượng. Đây là nội dung VnExpress dẫn từ phiên 22/10, không phải biên bản Quốc hội đăng kèm bài, và không phải kết luận phiên thảo luận hội trường sắp tới đã chốt điều khoản.",
      },
      {
        text: "Cùng bài VnExpress, theo dự thảo có 8 nhóm đối tượng được hưởng chính sách về nhà ở xã hội. So với quy định hiện hành, nhóm học sinh, sinh viên không còn trong danh sách được hỗ trợ về nhà ở xã hội. Bài không liệt kê đủ 8 nhóm. Vì người được mua lại sau 5 năm, theo dự thảo, phải thuộc đối tượng được mua nhà ở xã hội, việc một nhóm còn hay không còn trong danh sách sẽ ảnh hưởng nhóm người có thể đứng tên nhận nhà. Danh sách áp dụng vẫn là danh sách của văn bản khi văn bản có hiệu lực, không phải danh sách người đọc tự ghép hôm nay.",
      },
      {
        text: "VnExpress (25/10/2026) còn ghi hai điểm về chủ đầu tư dự án nhà ở xã hội, không phải về người mua căn hộ thương mại. Dự thảo không quy định cứng tỷ lệ tối đa 20% diện tích đất trong dự án mà chủ đầu tư được dành để xây công trình kinh doanh dịch vụ, thương mại, nhà ở thương mại. Quy định chủ đầu tư chỉ được hưởng lợi nhuận định mức tối đa 10% tại Luật Nhà ở 2023 cũng không còn xuất hiện trong dự thảo; Chính phủ sẽ quy định chi tiết các tỷ lệ này. Mức 20% và 10% là nội dung dự thảo về ưu đãi, chưa có hiệu lực, và không phải tỷ suất người mua căn hộ được hứa.",
      },
      {
        heading: "Quốc hội dự kiến thảo luận hội trường từ sáng 29/10 đến giữa sáng 30/10",
        text: "Theo Báo Đầu tư (Nguyễn Lê, 06:45 ngày 26/10/2026), Luật Đất đai, Luật Nhà ở và Luật Kinh doanh bất động sản sửa đổi được trình Quốc hội cùng lúc, thảo luận tổ cùng một ngày, và dự kiến lần lượt được thảo luận tại hội trường từ sáng thứ Năm 29/10 đến giữa buổi sáng thứ Sáu 30/10. Cùng bài, thảo luận tại tổ đã diễn ra ngày 22/10. Lịch này là lịch dự kiến cho cả ba dự án luật, không phải một giờ đã ấn định riêng cho điều khoản bán lại nhà ở xã hội, và không phải ngày các luật có hiệu lực. Bài không ghi ngày hiệu lực vì bốn nguồn được dẫn không công bố ngày đó.",
        image: "/images/news-noxh-5-nam-2710-body-01.webp",
        imageAlt:
          "Một phiên họp toàn thể của Quốc hội tại Kỳ họp thứ hai, nhìn từ phía sau hội trường: hàng ghế gỗ và đại biểu. Ảnh: QH/Báo Đầu tư. Không phải ảnh một dự án nhà ở.",
      },
      {
        text: "Người đọc nên tách ba lớp. Lớp một là luật đang áp dụng: sau 5 năm, nhà ở xã hội được chuyển nhượng theo cơ chế thị trường, không giới hạn đối tượng mua lại, theo cách VnExpress, Chinhphu.vn và LuatVietnam dẫn Luật Nhà ở hiện hành. Lớp hai là dự thảo: sau 5 năm chỉ bán lại cho người đủ điều kiện mua nhà ở xã hội. Lớp ba là lịch Quốc hội: thảo luận hội trường dự kiến 29–30/10, theo Báo Đầu tư. Thảo luận xong vẫn còn bước thông qua và bước có hiệu lực. Hôm nay hợp đồng đang ký không lấy dự thảo để thay quy định đang áp dụng.",
      },
      {
        heading: "Người mua căn hộ thương mại đọc thanh khoản và chuyển nhượng thế nào",
        text: "Ba nguồn viết về nhà ở xã hội. Không nguồn nào viết rằng điều kiện “chỉ bán cho người đủ điều kiện mua nhà ở xã hội” áp vào căn hộ thương mại. Người đang xem căn hộ thương mại không suy ra rằng căn của mình bị khóa người mua theo điều khoản này, và cũng không suy ra rằng căn thương mại lúc nào cũng chuyển nhượng được cho bất kỳ ai, ở bất kỳ thời điểm nào. Điều kiện chuyển nhượng của một căn thương mại nằm ở hợp đồng căn đó và quy định đang áp dụng cho nhà ở thương mại.",
      },
      {
        text: "Chỗ đáng đọc, nếu đặt hai cơ chế cạnh nhau, là độ rộng của nhóm người được nhận nhà. Với nhà ở xã hội, luật hiện hành sau 5 năm không giới hạn đối tượng mua lại; dự thảo thì vẫn giới hạn vào người đủ điều kiện. Nhóm người có thể đứng tên nhận nhà ở xã hội, nếu dự thảo được giữ, hẹp hơn cách luật hiện hành đang viết. Đó là khác biệt về điều kiện pháp lý của người mua lại. Không bài nào trong bốn nguồn đo việc này bằng số ngày bán được một căn, và không bài nào kết luận giá căn hộ thương mại sẽ tăng vì nhà ở xã hội khó bán lại hơn.",
        image: "/images/news-noxh-5-nam-2710-body-02.webp",
        imageAlt:
          "Hai người ngồi tại bàn gỗ xem giấy tờ, cạnh mô hình nhà gỗ nhỏ, cửa sổ nhìn ra cây xanh. Ảnh minh họa tạo bằng AI, không phải hợp đồng và không phải The Camellia Sơn Trà.",
      },
      {
        text: "Với một căn hộ thương mại đang xem tại Đà Nẵng, việc nên hỏi trên hồ sơ của đúng căn là: ai được nhận chuyển nhượng, từ thời điểm nào, có khoản nào phải hoàn tất trước khi sang tên, và các khoản phí, thuế được ghi thế nào. Những câu đó đọc trong hợp đồng và giấy tờ pháp lý của dự án, không đọc bằng cách lấy điều khoản nhà ở xã hội trong dự thảo rồi áp sang. Dự thảo chưa có hiệu lực, theo LuatVietnam (25/10/2026).",
      },
      {
        text: "The Camellia Sơn Trà là căn hộ thương mại, pháp lý sổ hồng sở hữu lâu dài, tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Bài này không gắn điều khoản nhà ở xã hội vào hồ sơ của dự án. Buổi xem hồ sơ không dùng đề xuất này để nói một căn sẽ dễ bán hơn, khó bán hơn, hay tăng giá.",
        links: [
          { to: "/gioi-thieu", label: "Fact sheet The Camellia Sơn Trà" },
          { to: "/lien-he", label: "Liên hệ — hẹn xem hồ sơ tại gallery" },
        ],
      },
      {
        heading: "Đối chiếu hồ sơ căn hộ thương mại tại Sơn Trà",
        text: "Anh chị muốn ngồi đọc hồ sơ một căn hộ thương mại tại phường Sơn Trà và tách điều khoản nhà ở xã hội trong dự thảo khỏi những gì đang ghi cho đúng căn, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Buổi gặp để xem hồ sơ đã công bố trên website. Dự thảo Luật Nhà ở chưa có hiệu lực, và buổi gặp không kết luận điều khoản bán lại nhà ở xã hội đã áp vào căn hộ thương mại.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Sau 5 năm, nhà ở xã hội đã được bán tự do trên thị trường chưa?",
        text: "Luật đang áp dụng và dự thảo là hai lớp khác nhau. Theo VnExpress, Chinhphu.vn và LuatVietnam (25/10/2026), Luật Nhà ở hiện hành cho phép sau 5 năm kể từ khi thanh toán đủ tiền, chủ sở hữu nhà ở xã hội chuyển nhượng theo cơ chế thị trường, không giới hạn đối tượng mua lại. Cùng các bài, dự thảo Luật Nhà ở (sửa đổi) đề xuất sau mốc 5 năm đó chỉ được bán lại cho người thuộc đối tượng được mua nhà ở xã hội. Dự thảo chưa có hiệu lực, theo LuatVietnam. Trong 5 năm đầu, VnExpress và LuatVietnam cho biết dự thảo vẫn giữ quy định chỉ bán lại cho chủ đầu tư hoặc người được mua nhà ở xã hội, giá tối đa bằng giá hợp đồng ban đầu.",
      },
      {
        heading: "Dự thảo đã có hiệu lực chưa, và Quốc hội bàn khi nào?",
        text: "Chưa có hiệu lực. LuatVietnam (Ngọc Thúy, 21:32 ngày 25/10/2026) viết nội dung bán lại nhà ở xã hội là nội dung dự thảo Luật Nhà ở (sửa đổi), chưa phải quy định có hiệu lực, và sẽ cập nhật khi dự thảo được thông qua. Theo Báo Đầu tư (Nguyễn Lê, 06:45 ngày 26/10/2026), ba dự án luật Đất đai, Nhà ở và Kinh doanh bất động sản dự kiến được thảo luận lần lượt tại hội trường từ sáng 29/10 đến giữa sáng 30/10. Đó là lịch thảo luận dự kiến, không phải ngày thông qua và không phải ngày có hiệu lực. Phiên thảo luận tổ ngày 22/10, nơi VnExpress dẫn ý kiến của Thủ tướng Lê Minh Hưng về việc siết đối tượng mua nhà ở xã hội sau 5 năm, đã diễn ra trước lịch hội trường này.",
      },
      {
        heading: "Người đang xem căn hộ thương mại tại Đà Nẵng nên hiểu quy định này thế nào?",
        text: "Hiểu đây là đề xuất cho nhà ở xã hội, chưa áp vào hợp đồng ký hôm nay, và không được các bài nguồn gắn sang căn hộ thương mại. Nếu dự thảo được giữ, người mua lại nhà ở xã hội sau 5 năm vẫn phải thuộc đối tượng được mua nhà ở xã hội, hẹp hơn cách luật hiện hành cho chuyển nhượng theo cơ chế thị trường. Đó là điều kiện về người mua lại, không phải lời hứa một căn thương mại bán nhanh hơn hay tăng giá. Với căn thương mại đang xem, hỏi trong hồ sơ của đúng căn: ai được nhận chuyển nhượng, từ khi nào, và phí, thuế ghi thế nào. The Camellia Sơn Trà là căn hộ thương mại sở hữu lâu dài tại phường Sơn Trà; điều khoản nhà ở xã hội trong dự thảo không phải điều khoản của hồ sơ dự án.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí về dự thảo Luật Nhà ở (sửa đổi), chưa được thông qua và chưa có hiệu lực. Bài không phải thông báo của Quốc hội hay Chính phủ, không phải thông báo của Sở Xây dựng, không phải thông cáo của The Camellia Sơn Trà, không thay tư vấn pháp lý và không cam kết lợi nhuận hay giá. Nguồn: VnExpress, Anh Tú, 13:05 ngày 25/10/2026 — https://vnexpress.net/nha-o-xa-hoi-du-kien-khong-duoc-ban-lai-tu-do-sau-5-nam-5136578.html ; Cổng Thông tin điện tử Chính phủ (Chinhphu.vn), 18:38 ngày 25/10/2026 — https://media.chinhphu.vn/du-thao-luat-nha-o-sua-doi-siet-dieu-kien-chuyen-nhuong-nha-o-xa-hoi-102261025183110874.htm ; LuatVietnam, Ngọc Thúy, 21:32 ngày 25/10/2026 — https://luatvietnam.vn/tin-van-ban-moi/de-xuat-nha-o-xa-hoi-khong-duoc-ban-lai-tu-do-sau-5-nam-186-114458-article.html ; Báo Đầu tư, Nguyễn Lê, 06:45 ngày 26/10/2026 — https://baodautu.vn/quoc-hoi-tiep-tuc-cho-y-kien-hoan-thien-chinh-sach-ve-dat-dai-nha-o-bat-dong-san-d730559.html. Ảnh khu Định Hòa: Quỳnh Trần/VnExpress. Ảnh hội trường Quốc hội: QH/Báo Đầu tư. Ảnh hai người xem giấy tờ: ảnh minh họa tạo bằng AI.",
      },
    ],
  },

  {
    slug: "lai-suat-ha-nhiet-vay-mua-nha-chua-giam-sau",
    date: "26.10.2026",
    title: "Lãi suất hạ nhiệt: vay mua nhà vì sao chưa giảm sâu?",
    excerpt:
      "Theo VietnamFinance (26.10.2026), lãi vay giảm 1,5–2,5 điểm/năm nhưng lãi vay mua nhà thả nổi tại nhiều ngân hàng vẫn khoảng 12–15%/năm.",
    description:
      "Lãi suất ngân hàng hạ nhiệt nhưng vay mua nhà tại nhiều ngân hàng vẫn thả nổi khoảng 12–15%/năm, ưu đãi năm đầu khoảng 9–10%. Gói vốn rẻ hướng vào sản xuất và lĩnh vực ưu tiên.",
    image: "/images/news-lai-suat-ha-nhiet-2610-og.jpg",
    imageAlt:
      "Một cặp đôi ngồi tại bàn gỗ xem giấy tờ, cạnh máy tính xách tay và mô hình nhà nhỏ. Ảnh: H.T./VietTimes",
    imageCaption:
      "Một cặp đôi xem giấy tờ cạnh máy tính xách tay và mô hình nhà. Ảnh: H.T./VietTimes",
    poster: "/images/news-lai-suat-ha-nhiet-2610-hero.webp",
    gallery: [
      "/images/news-lai-suat-ha-nhiet-2610-hero.webp",
      "/images/news-lai-suat-ha-nhiet-2610-body-01.webp",
      "/images/news-lai-suat-ha-nhiet-2610-body-02.webp",
    ],
    body: [
      {
        text: "Lãi suất huy động và cho vay đang hạ, nhưng người đang tính vay mua căn hộ chưa nên coi đó là lãi vay mua nhà của mình đã giảm. Theo VietnamFinance (Minh Dũng, 14:30 ngày 26/10/2026), dù lãi suất ngân hàng hạ nhiệt, người vay mua nhà vẫn khó tiếp cận vốn rẻ; lãi vay mua nhà vào cuối năm được dự báo khó giảm sâu, và thị trường vẫn cần thêm điều kiện để phục hồi sức mua. Bài này đọc lại đúng bài đó, đối chiếu thêm VietTimes (Hải Thu, 25/10/2026) đăng trên Báo Mới, và chỉ nhắc một câu về Đà Nẵng từ Tạp chí Doanh nghiệp Việt Nam (Hải Châu, 08:35 ngày 26/10/2026). Đây là bài tổng hợp từ báo chí cho người đang xem căn hộ tại Đà Nẵng. Không phải văn bản của Ngân hàng Nhà nước, không phải thông báo của một ngân hàng, và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        text: "Ảnh đầu bài là ảnh bài VietTimes, chú thích gốc ghi “Ảnh: H.T.”. Ảnh phòng khách giữa bài cũng từ bài đó, chú thích gốc ghi “Ảnh: Znews.”. Ảnh dãy nhà ở giữa bài là ảnh minh họa tạo bằng AI, không chụp một dự án có tên và không phải ảnh The Camellia Sơn Trà. Ba tấm không phải bằng chứng một ngân hàng đã duyệt lãi cho một hồ sơ.",
      },
      {
        text: "Website đã có bài về văn bản Ngân hàng Nhà nước yêu cầu giảm lãi suất ngày 18/10 và ngày 21/10, bài về hình thức “khách hàng bí mật”, và bài ngày 05/10 về cách tính dòng tiền khi lãi vay mua nhà vượt 10%. Bài hôm nay không viết lại các công văn. Phần mới là vì sao các mức giảm đang được công bố chưa thành lãi vay mua nhà thấp hơn cho người mua để ở.",
        links: [
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-mua-nha-luu-y",
            label: "NHNN yêu cầu giảm lãi suất ngày 18/10: người mua nhà lưu ý gì?",
          },
          {
            to: "/tin-tuc/nhnn-khach-hang-bi-mat-kiem-tra-giam-lai-suat",
            label: "NHNN dùng “khách hàng bí mật” kiểm tra giảm lãi: người vay lưu ý",
          },
          {
            to: "/tin-tuc/lai-suat-vay-mua-nha-tren-10-can-ho-da-nang-2026",
            label: "Lãi suất vay mua nhà vượt 10%: người mua căn hộ Đà Nẵng tính dòng tiền thế nào?",
          },
        ],
      },
      {
        heading: "Lãi đã giảm, nhưng vốn rẻ đang vào sản xuất",
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), với chỉ đạo của Chính phủ và Ngân hàng Nhà nước cùng các giải pháp hỗ trợ thanh khoản, lãi suất huy động và cho vay của các ngân hàng thương mại đang có dấu hiệu hạ nhiệt. Đến nay, hầu hết ngân hàng đã công bố biểu lãi suất huy động mới với mức giảm 0,5 điểm phần trăm. Cùng bài, lãi suất cho vay cũng giảm từ 1,5–2,5 điểm phần trăm/năm. Hai mức này là mức giảm trên biểu lãi suất mà bài ghi cho đợt hạ này, không phải xác nhận khoản vay mua nhà đang trả đã được trừ 0,5 điểm hay 1,5–2,5 điểm.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), nhiều người kỳ vọng dòng vốn giá rẻ sẽ tới người mua nhà. Khảo sát thực tế trong cùng bài cho kết quả khác: lãi suất thả nổi cho vay mua nhà tại nhiều ngân hàng vẫn neo ở mức 12–15%/năm, trong khi lãi suất ưu đãi năm đầu tiên rơi vào khoảng 9–10%/năm. “Nhiều ngân hàng” và “khoảng” là cách bài viết, không phải bảng lãi của mọi chi nhánh và không phải lãi một hồ sơ đã được duyệt.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), các gói tín dụng quy mô lớn đang tập trung vào sản xuất, kinh doanh và lĩnh vực ưu tiên. HDBank triển khai gói 10.000 tỷ đồng cho doanh nghiệp nhỏ và vừa, giảm lãi suất 1,5%/năm cho cả khách hàng cũ lẫn mới. Ngân hàng nhấn mạnh nguồn vốn này không áp dụng cho mục đích kinh doanh bất động sản, chứng khoán, kinh doanh tài chính, hay vay để gửi tiền, mua chứng chỉ tiền gửi, trái phiếu tại tổ chức tín dụng khác. Câu loại trừ trong bài là “kinh doanh bất động sản”, không phải một câu kết luận rằng mọi khoản vay mua nhà để ở đều bị loại. Người vay vẫn phải hỏi đúng sản phẩm mình được chào.",
        image: "/images/news-lai-suat-ha-nhiet-2610-body-02.webp",
        imageAlt:
          "Dãy nhà chung cư nhiều tầng nhìn từ đường phố, cây xanh phía trước, trời nhiều mây. Ảnh minh họa tạo bằng AI, không phải một dự án cụ thể và không phải The Camellia Sơn Trà.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), từ ngày 19/10 đến hết ngày 31/12, Vietcombank triển khai chương trình thúc đẩy sản xuất kinh doanh và lĩnh vực ưu tiên, giảm lãi vay từ 1,5–2%/năm; cá biệt một số lĩnh vực ngắn hạn được giảm tới 3%/năm. Agribank công bố hạ tới 2%/năm lãi vay cho lĩnh vực ưu tiên, doanh nghiệp nhỏ và vừa, cùng các động lực tăng trưởng mới với lãi suất thấp hơn từ 1–2%/năm so với mức bình quân. Cùng bài kết luận: quy mô các gói lớn chưa đồng nghĩa mọi khách hàng mua nhà hoặc đầu tư bất động sản đều được tiếp cận.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), các chuyên gia được bài dẫn nhận định đợt giảm này có sự chọn lọc, ưu tiên doanh nghiệp sản xuất kinh doanh. Vì vậy người vay mua nhà hay mua xe vẫn chưa phải đối tượng được ưu tiên tiếp cận mặt bằng lãi suất mới. Đó là nhận định được báo đăng, không phải văn bản từ chối một hồ sơ vay mua căn hộ.",
      },
      {
        heading: "Tín dụng mua nhà để ở tăng chậm hơn kinh doanh bất động sản",
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), TS. Lê Hồng Hạnh, giảng viên ngành Tài chính tại Đại học RMIT Việt Nam, nhận định cơ cấu tín dụng cho thấy ngân hàng đang ưu tiên các phân khúc an toàn hơn. Tính đến ngày 31/8, tín dụng kinh doanh bất động sản tăng 19,59%, trong khi cho vay mua nhà để ở chỉ tăng 1,02%. Cùng bài, ông nói dù lãi suất niêm yết có giảm, người vay không thuộc diện ưu tiên vẫn gặp khó vì điều kiện, hạn mức và chi phí đi kèm bị siết chặt. Hai mức 19,59% và 1,02% là tốc độ tăng tín dụng đến 31/8 mà ông nêu, không phải mức lãi suất, và không phải phần trăm người mua căn hộ tại Đà Nẵng được duyệt vay.",
      },
      {
        heading: "Đến hết năm 2026, lãi vay mua nhà khó giảm sâu",
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), giới chuyên môn nhận định từ nay đến hết năm 2026, lãi suất vay mua nhà khó giảm sâu như mong đợi. Chuyên gia bất động sản Lê Văn Long cho rằng lãi vay mua nhà từ nay đến cuối năm khó giảm sâu, vì bất động sản không thuộc nhóm được ưu tiên trong nhiều chương trình hỗ trợ. Khi chi phí tài chính vẫn cao, một bộ phận khách hàng tiếp tục chờ, thay vì quyết định vay ngay. Đây là nhận định của ông được báo dẫn, không phải lịch giảm lãi đã công bố.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), ông Tô Anh Hùng, Giám đốc REFI, chuyên gia CWP thuộc Cộng đồng Cố vấn tài chính Việt Nam (VWA), cho biết khả năng giảm lãi suất cho vay từ nay đến hết năm 2026 là khá khó khăn. Ông nói với năm 2027, nền kinh tế vẫn đứng trước nhiều thách thức; từ kỳ vọng đến thực tiễn còn không ít khó khăn, và vẫn phải dành ưu tiên cho những mục tiêu lớn hơn của nền kinh tế, thay vì chỉ tập trung vào thị trường bất động sản. Câu này là cách ông nhìn thứ tự ưu tiên, không phải dự báo giá căn hộ.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), lãi suất vay cao đang là một trong những rào cản lớn nhất với thanh khoản bất động sản, khi cả người mua nhà lẫn doanh nghiệp đều chịu áp lực chi phí vốn. Cùng bài, dẫn Viện Nghiên cứu Kinh tế – Tài chính – Bất động sản Dat Xanh Services (DXS-FERI), lãi suất vay mua bất động sản thả nổi trong 9 tháng đầu năm 2026 phổ biến ở mức 13–15%/năm. Hệ quả mà bài nêu: nguồn cung sơ cấp tăng 21%, lượng hấp thụ lại giảm 16%, chỉ đạt 32.469 sản phẩm. “Sản phẩm” là chữ của bài, gồm mặt bằng DXS-FERI dẫn lại, không phải số căn hộ riêng của Đà Nẵng và không phải số giao dịch của một dự án.",
        image: "/images/news-lai-suat-ha-nhiet-2610-body-01.webp",
        imageAlt:
          "Phòng khách căn hộ với sofa, bàn thấp và cửa kính nhìn ra ban công. Ảnh: Znews/VietTimes. Không phải ảnh The Camellia Sơn Trà.",
      },
      {
        text: "Mức thả nổi 13–15%/năm trong câu DXS-FERI ở trên là câu của VietnamFinance ngày 26/10/2026. Khác với bài ngày 21/10 trên website, cũng dẫn DXS-FERI qua VietnamFinance, về lãi ưu đãi 9,8–11,5%/năm trong 12 tháng đầu rồi thả nổi 13–16%/năm. Hai bài dẫn hai câu khác nhau của cùng đơn vị nghiên cứu. Bài này không gộp 12–15%, 13–15% và 13–16% thành một con số.",
        links: [
          {
            to: "/tin-tuc/lai-vay-mua-nha-tha-noi-13-16-sau-uu-dai",
            label: "Bài 21.10.2026: lãi vay mua nhà thả nổi 13–16% sau ưu đãi",
          },
        ],
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), khi mặt bằng lãi suất được định hướng hạ nhiệt để hỗ trợ tăng trưởng, áp lực tài chính lên người đi vay giảm xuống, sức mua và thanh khoản có thêm điều kiện để cải thiện. Cùng bài, thị trường vẫn cần thêm điều kiện thuận lợi để phục hồi sức mua trong những tháng cuối năm. Các nhà phân tích được bài dẫn nói lãi suất giảm mở thêm cơ hội cho thị trường, nhưng sức mua chỉ được khơi thông khi tổng chi phí sở hữu nhà trở nên vừa sức. Nếu giá bán và nghĩa vụ trả nợ vẫn vượt thu nhập, người mua tiếp tục chờ, còn doanh nghiệp đối diện áp lực thu hồi vốn kéo dài. “Cơ hội” trong câu này là chữ của các nhà phân tích được báo dẫn, không phải lời mời mua và không gắn với một dự án.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), ông Nguyễn Hữu Cường, Chủ tịch Câu lạc bộ bất động sản Hà Nội, nhấn mạnh động thái hạ lãi vay của các ngân hàng chắc chắn sẽ tác động tới thị trường bất động sản. Ông nói đây vẫn là bài toán khó: ngân hàng cần lộ trình rõ về mức giảm và thời gian giảm thì mới kích thích được nhu cầu giao dịch. “Chắc chắn sẽ tác động” trong câu của ông là tác động tới thị trường, không phải một khẳng định giá nhà sẽ tăng.",
      },
      {
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), ông Nguyễn Quang Huy, chuyên gia tài chính – ngân hàng, phân tích việc ngân hàng giảm lãi suất giúp chi phí vốn hợp lý hơn, hỗ trợ doanh nghiệp giảm áp lực tài chính, có thêm điều kiện cơ cấu lại nguồn vốn và đẩy nhanh tiến độ những dự án đủ điều kiện triển khai. Ông nói sự phục hồi của thị trường bất động sản cũng có khả năng lan tỏa tới xây dựng, vật liệu, nội thất, dịch vụ tài chính và việc làm. Với người dân, lãi suất cho vay giảm làm nhẹ bớt chi phí trả nợ khi mua nhà và tạo điều kiện thuận lợi hơn cho việc tiếp cận tín dụng. Cùng bài, ông nói những chuyển biến đó chỉ thành động lực phục hồi bền vững khi lãi suất được nhìn cùng thu nhập, sức mua, nguồn cung nhà ở và sự ổn định của nền kinh tế; dòng vốn cần hướng tới dự án có tính khả thi, đáp ứng nhu cầu thực và tạo giá trị kinh tế lâu dài. Đó là điều kiện ông đặt ra, không phải kết luận một dự án đã đáp ứng các điều kiện ấy.",
      },
      {
        heading: "Đà Nẵng: người mua vẫn thận trọng vì áp lực lãi suất",
        text: "Theo Tạp chí Doanh nghiệp Việt Nam (Hải Châu, 08:35 ngày 26/10/2026), dẫn Tập đoàn Dịch vụ Bất động sản DKRA, sức cầu thị trường bất động sản nhà ở Đà Nẵng quý III/2026 ở mức thấp do tâm lý thận trọng của người mua trước áp lực lãi suất. Bài này chỉ lấy câu đó. Nguồn cung và lượng tiêu thụ căn hộ Đà Nẵng quý III đã được tách riêng ở bài ngày 24/10, dẫn Báo Đầu tư; không lặp các con số ấy ở đây.",
        links: [
          {
            to: "/tin-tuc/dkra-quy-iii-2026-can-ho-da-nang-giam-thanh-khoan",
            label: "DKRA quý III/2026: căn hộ Đà Nẵng giảm thanh khoản, quý IV ra sao?",
          },
        ],
      },
      {
        heading: "Trước khi vay, người mua nên kiểm bốn việc",
        text: "Việc thứ nhất là độ dài thời gian ưu đãi. Theo VietnamFinance (Minh Dũng, 26/10/2026), lãi ưu đãi năm đầu tiên trong khảo sát rơi vào khoảng 9–10%/năm, rồi lãi thả nổi tại nhiều ngân hàng vẫn khoảng 12–15%/năm. “Năm đầu” là cách bài mô tả mặt bằng đang thấy, không phải điều khoản sẵn của mọi hợp đồng. Trên giấy tờ ngân hàng đưa, cần đọc số tháng được hưởng mức ưu đãi, và ngày nào thì hết.",
      },
      {
        text: "Việc thứ hai là công thức lãi thả nổi: lãi tham chiếu nào, cộng biên độ bao nhiêu, bao lâu điều chỉnh một lần. VietnamFinance ngày 26/10 không đưa một công thức chung. Một ví dụ đã được đăng, để thấy công thức nằm trong từng gói, là khảo sát VietTimes (Hải Thu, 25/10/2026): tại Woori Bank, khách có thể chọn lãi cố định 9,2%/năm trong năm đầu hoặc 9,7%/năm trong hai năm đầu; sau ưu đãi, lãi được tính theo lãi suất tiền gửi kỳ hạn 12 tháng bình quân của nhóm Big4 cộng biên độ 4,5 điểm phần trăm. Cùng bài, thời hạn vay tối đa tại ngân hàng này là 30 năm, ân hạn trả gốc hai năm đầu; điều kiện ưu đãi gồm mở thẻ tín dụng và sổ tiết kiệm 40 triệu đồng kỳ hạn 12 tháng. Đó là một gói được bài khảo sát ghi lại, không phải lời khuyên chọn ngân hàng và không phải công thức của các ngân hàng khác.",
      },
      {
        text: "Cùng bài VietTimes (Hải Thu, 25/10/2026), một khảo sát ghi lãi vay mua nhà thả nổi phân hóa: Agribank khoảng 10–11%/năm, BIDV khoảng 10,5–11%/năm, Vietcombank khoảng 10,5–12%/năm, một số gói tại ACB từ 12%/năm, mức được ghi tại VPBank lên tới 15%/năm, Shinhan Bank khoảng 10%/năm. Đây là khảo sát bài báo đăng ngày 25/10, không phải bảng niêm yết tại quầy hôm nay. Đặt cạnh câu VietnamFinance ngày 26/10 — nhiều ngân hàng vẫn neo 12–15%/năm — hai bài cùng nói một điều thực hành: không lấy một con số trên mặt báo làm lãi của hồ sơ mình. Mức thấp hơn ở một số ngân hàng thương mại nhà nước trong khảo sát VietTimes không bác câu “nhiều ngân hàng vẫn 12–15%”, và câu 12–15% cũng không có nghĩa mọi ngân hàng đều ở mức đó.",
      },
      {
        text: "Việc thứ ba là phí trả nợ trước hạn. VietnamFinance ngày 26/10 không nêu một mức phí. Hợp đồng cần được hỏi: có phí hay không, phí tính trên dư nợ hay trên số tiền trả trước, và phí có giảm theo năm hay không. Bài ngày 21/10 trên website đã ghi giới chuyên gia khuyên rà soát phí này cùng biên độ và chu kỳ điều chỉnh; bài hôm nay chỉ nhắc lại việc cần hỏi, không thêm một con số phí.",
        links: [
          {
            to: "/tin-tuc/lai-vay-mua-nha-tha-noi-13-16-sau-uu-dai",
            label: "Bài 21.10: sau ưu đãi, kiểm biên độ, chu kỳ điều chỉnh và phí trả trước",
          },
        ],
      },
      {
        text: "Việc thứ tư là thử dòng tiền ở mức lãi sau ưu đãi, không chỉ ở mức năm đầu. Ví dụ minh họa, không phải lịch trả nợ của ngân hàng và không phải số tiền The Camellia Sơn Trà: lấy dư nợ còn 1 tỷ đồng, chỉ tính phần lãi, chưa gồm tiền gốc trả dần, phí bảo hiểm hay phí trả trước. Ở 9%/năm, phần lãi là 90 triệu đồng/năm, đúng 7,5 triệu đồng/tháng. Ở 10%/năm là 100 triệu đồng/năm, khoảng 8,33 triệu đồng/tháng. Ở 12%/năm là 120 triệu đồng/năm, đúng 10 triệu đồng/tháng. Ở 15%/năm là 150 triệu đồng/năm, đúng 12,5 triệu đồng/tháng. Các mốc 9–10% và 12–15% lấy từ khoảng khảo sát năm đầu và lãi thả nổi tại nhiều ngân hàng theo VietnamFinance (26/10/2026). Trên cùng dư nợ 1 tỷ, phần lãi khi đi từ 9% lên 15% tăng 60 triệu đồng/năm, đúng 5 triệu đồng/tháng, trước khi tính gốc.",
      },
      {
        text: "Khoảng 13–15%/năm là câu khác, của DXS-FERI được VietnamFinance dẫn cùng ngày, cho lãi vay mua bất động sản thả nổi 9 tháng đầu năm 2026. Trên cùng giả định dư nợ 1 tỷ và chỉ tính lãi, 13%/năm là 130 triệu đồng/năm, khoảng 10,83 triệu đồng/tháng. Không cộng dồn khoảng 12–15% của khảo sát ngân hàng với khoảng 13–15% của DXS-FERI. Khoản vay thật còn phụ thuộc số tiền vay, thời hạn, cách trả gốc và phí trong hợp đồng. Người vay lấy công thức trong hợp đồng của mình để tính lại.",
      },
      {
        text: "Theo VietTimes (Hải Thu, 25/10/2026), ông Võ Hồng Thắng, Phó tổng giám đốc DKRA Group, nói lãi suất chỉ là một trong những yếu tố quyết định khả năng tiếp cận vốn. Nếu doanh nghiệp và người dân vẫn gặp khó về thủ tục hoặc không đáp ứng điều kiện tín dụng, việc giảm lãi suất cũng khó tạo tác động như kỳ vọng. Câu này bổ sung cho bốn việc ở trên: đọc xong lãi suất vẫn chưa đủ, còn phải đọc điều kiện được vay.",
      },
      {
        heading: "Muốn ngồi đối chiếu tin lãi suất với hồ sơ một căn",
        text: "Anh chị muốn ngồi đọc một hồ sơ căn hộ tại phường Sơn Trà và tách tin lãi suất hôm nay khỏi những gì ngân hàng đang chào cho đúng căn, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Buổi gặp để xem hồ sơ đã công bố. Lãi suất áp dụng theo ngân hàng và thời điểm vay, không phải một mức gắn sẵn với dự án.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Lãi vay đã giảm 1,5–2,5 điểm, vì sao vay mua nhà vẫn khoảng 12–15%?",
        text: "Theo VietnamFinance (Minh Dũng, 26/10/2026), hầu hết ngân hàng giảm lãi huy động 0,5 điểm phần trăm, và lãi cho vay giảm từ 1,5–2,5 điểm phần trăm/năm. Cùng bài, các gói vốn rẻ đang tập trung vào sản xuất, kinh doanh và lĩnh vực ưu tiên. Khảo sát trong bài ghi lãi thả nổi cho vay mua nhà tại nhiều ngân hàng vẫn 12–15%/năm, ưu đãi năm đầu khoảng 9–10%/năm. HDBank nêu gói 10.000 tỷ đồng, giảm 1,5%/năm, không áp dụng cho kinh doanh bất động sản và một số mục đích khác. Vietcombank, từ 19/10 đến hết 31/12, giảm 1,5–2%/năm cho sản xuất kinh doanh và lĩnh vực ưu tiên, cá biệt một số lĩnh vực ngắn hạn tới 3%/năm. Agribank hạ tới 2%/năm cho lĩnh vực ưu tiên, doanh nghiệp nhỏ và vừa, cùng động lực tăng trưởng mới. Bài kết luận quy mô gói lớn chưa có nghĩa mọi người mua nhà đều được tiếp cận.",
      },
      {
        heading: "Sau ưu đãi, lãi thả nổi được tính thế nào?",
        text: "Hỏi trong hợp đồng: hết tháng ưu đãi vào ngày nào, lãi tham chiếu là lãi nào, biên độ cộng thêm bao nhiêu, và bao lâu điều chỉnh một lần. VietnamFinance ngày 26/10 không đưa một công thức dùng chung. VietTimes (Hải Thu, 25/10/2026) ghi một ví dụ tại Woori Bank: sau ưu đãi, lãi bằng lãi tiền gửi kỳ hạn 12 tháng bình quân của nhóm Big4 cộng 4,5 điểm phần trăm. Đó là một gói được bài khảo sát, không phải công thức của mọi ngân hàng. Cùng bài, lãi thả nổi được ghi khác nhau giữa các nhà băng, từ khoảng 10%/năm ở một số ngân hàng tới mức lên tới 15%/năm tại VPBank.",
      },
      {
        heading: "Người mua căn hộ tại Đà Nẵng nên thử dòng tiền ở mức nào?",
        text: "Nên thử ở mức sau khi hết ưu đãi, không chỉ ở mức năm đầu. Theo VietnamFinance (26/10/2026), ưu đãi năm đầu trong khảo sát khoảng 9–10%/năm, lãi thả nổi tại nhiều ngân hàng khoảng 12–15%/năm; DXS-FERI được cùng bài dẫn với lãi vay mua bất động sản thả nổi 9 tháng đầu năm phổ biến 13–15%/năm. Ví dụ chỉ tính lãi trên dư nợ 1 tỷ đồng: 9%/năm là 7,5 triệu đồng/tháng, 15%/năm là 12,5 triệu đồng/tháng. Đó là phép nhân để thấy chênh lệch, chưa gồm gốc và phí, không phải khoản phải trả của một hồ sơ. Với mặt bằng Đà Nẵng, Tạp chí Doanh nghiệp Việt Nam (26/10/2026) dẫn DKRA: sức cầu quý III/2026 thấp do người mua thận trọng trước áp lực lãi suất. Chi tiết tiêu thụ căn hộ nằm ở bài DKRA quý III trên website.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Thông tin tổng hợp từ báo chí, mang tính tham khảo chung, không phải văn bản của Ngân hàng Nhà nước, không phải thông báo của một ngân hàng và không phải thông cáo của The Camellia Sơn Trà. Lãi suất, thời gian ưu đãi, biên độ, phí trả nợ trước hạn và điều kiện vay khác nhau theo từng ngân hàng, từng sản phẩm và từng thời điểm; cần đối chiếu trực tiếp với ngân hàng trước khi ký. Bài không hứa lợi nhuận, không kết luận giá căn hộ sẽ tăng hay giảm, và không thay cho tư vấn tín dụng. Nguồn: VietnamFinance, Minh Dũng, 14:30 ngày 26/10/2026 — https://vietnamfinance.vn/lai-suat-ha-nhiet-nhanh-cac-khoan-vay-mua-nha-se-dieu-chinh-the-nao-d152670.html ; VietTimes, Hải Thu, 25/10/2026, đăng trên Báo Mới — https://baomoi.com/het-thoi-han-uu-dai-nguoi-mua-nha-dau-dau-vi-lai-suat-tha-noi-tang-c56346636.epi ; Tạp chí Doanh nghiệp Việt Nam, Hải Châu, 08:35 ngày 26/10/2026 — https://doanhnghiepvn.vn/kinh-te/suc-cau-thi-truong-bat-dong-san-tai-da-nang-thap/20261026072248249. Ảnh cặp đôi: H.T./VietTimes. Ảnh phòng khách: Znews/VietTimes. Ảnh dãy nhà chung cư: ảnh minh họa tạo bằng AI.",
      },
    ],
  },


  {
    slug: "de-xuat-thue-02-dat-bo-hoang-nguoi-mua-nha",
    date: "25.10.2026",
    title: "Đề xuất thuế 0,2% đất bỏ hoang: người mua nhà đọc sao?",
    excerpt:
      "Theo VnExpress (23.10.2026), Chính phủ đề xuất thuế 0,2%, không hạn mức, với đất bỏ hoang. Đề xuất chưa được thông qua và chưa có hiệu lực.",
    description:
      "Đề xuất thuế 0,2% đất phi nông nghiệp bỏ hoang, không hạn mức. Chưa có hiệu lực. Quốc hội bàn 6/11; nếu thông qua 20/11 thì hiệu lực từ 2027.",
    image: "/images/news-thue-dat-bo-hoang-2510-og.jpg",
    imageAlt:
      "Bộ trưởng Tài chính Ngô Văn Tuấn đứng tại bục trình bày trước Quốc hội sáng 23/10/2026, phía sau là hàng ghế đại biểu và cờ Tổ quốc. Ảnh: Cổng thông tin điện tử Quốc hội/VnExpress",
    imageCaption:
      "Bộ trưởng Tài chính Ngô Văn Tuấn trình dự thảo luật trước Quốc hội sáng 23/10/2026. Ảnh: Cổng thông tin điện tử Quốc hội/VnExpress",
    poster: "/images/news-thue-dat-bo-hoang-2510-hero.webp",
    gallery: [
      "/images/news-thue-dat-bo-hoang-2510-hero.webp",
      "/images/news-thue-dat-bo-hoang-2510-body-01.webp",
      "/images/news-thue-dat-bo-hoang-2510-body-02.webp",
      "/images/news-thue-dat-bo-hoang-2510-body-03.webp",
    ],
    body: [
      {
        text: "Sáng 23/10/2026, thừa ủy quyền của Thủ tướng, Bộ trưởng Tài chính Ngô Văn Tuấn trình Quốc hội dự thảo Luật sửa đổi, bổ sung một số điều của ba luật: Thuế thu nhập doanh nghiệp, Thuế sử dụng đất phi nông nghiệp và Thuế thu nhập cá nhân. Phần người mua nhà cần đọc trước là đề xuất thuế suất 0,2%, không áp dụng hạn mức, với đất bỏ hoang, không đưa vào sử dụng hoặc chậm đưa vào sử dụng. Đây mới là đề xuất trong hồ sơ dự án luật, chưa được Quốc hội thông qua và chưa có hiệu lực. Người đang ở một căn hộ, hoặc đang tìm mua căn hộ để ở, không có căn cứ từ bài báo này để coi mức 0,2% là khoản thuế đã áp lên căn hộ đang sử dụng. Theo VnExpress (Anh Tú, 09:14 ngày 23.10.2026).",
      },
      {
        text: "Bài này đọc lại bốn bài báo: VnExpress sáng 23.10.2026 (Anh Tú, 09:14), VnExpress chiều cùng ngày (Anh Tú – Viết Tuân, 17:15), CafeF ngày 24.10.2026 (An Nam, 10:44) và điểm tin Kinh tế Xây dựng (Petrotimes) lúc 08:11 ngày 25.10.2026. Đây là bài tổng hợp từ báo chí cho người mua nhà và người giữ căn hộ để ở lâu dài. Không phải văn bản của Quốc hội, không phải thông cáo của Chính phủ, và không phải thông báo của The Camellia Sơn Trà.",
      },
      {
        text: "Ba luật trong dự thảo sáng 23/10 là ba luật thuế. Khác với ba dự thảo sửa Luật Đất đai, Luật Nhà ở và Luật Kinh doanh bất động sản mà Bộ trưởng Tư pháp trình ngày 22/10/2026. Hai gói cùng được Quốc hội xem xét trong kỳ này, nhưng đối tượng và nội dung khác nhau. Bài ngày 23.10 trên website đã tóm tắt gói luật đất đai, nhà ở và kinh doanh bất động sản. Bài hôm nay chỉ nói gói luật thuế, và trong gói đó chỉ đi sâu phần thuế sử dụng đất phi nông nghiệp.",
        links: [
          {
            to: "/tin-tuc/sua-doi-3-luat-dat-dai-nha-o-kinh-doanh-bds-nguoi-mua-luu-y",
            label: "Bài 23.10.2026: gói dự thảo Luật Đất đai, Nhà ở và Kinh doanh bất động sản",
          },
        ],
      },
      {
        text: "Ảnh đầu bài là Bộ trưởng Tài chính Ngô Văn Tuấn trình dự thảo trước Quốc hội sáng 23/10/2026, theo chú thích VnExpress “Ảnh: Cổng thông tin điện tử Quốc hội”. Ảnh Chủ nhiệm Ủy ban Kinh tế và Tài chính Phan Văn Mãi cũng mang chú thích đó. Ảnh Phó bí thư Tỉnh ủy Lạng Sơn Đoàn Thu Hà phát biểu chiều 23/10, VnExpress ghi “Ảnh: Anh Tú”. Ảnh Chủ tịch Agribank Tô Huy Vũ tại tổ, VnExpress ghi “Ảnh: Văn Tuyến”. Bốn tấm là ảnh báo đã đăng kèm tin, không phải ảnh một dự án nhà ở và không phải ảnh The Camellia Sơn Trà.",
      },
      {
        heading: "Đề xuất 0,2% và chuyện không áp dụng hạn mức",
        text: "Theo VnExpress (Anh Tú, 23.10.2026), với nội dung sửa Luật Thuế sử dụng đất phi nông nghiệp, Chính phủ đề xuất áp thuế với đất bỏ hoang, không đưa vào sử dụng, chậm đưa vào sử dụng. Mức thuế dự kiến là 0,2% và không áp dụng hạn mức. Cùng bài giải thích: toàn bộ diện tích đất bỏ hoang, chậm hoặc không đưa vào sử dụng đều chịu thuế suất 0,2%, không được hưởng ngưỡng thấp hơn với phần trong hạn mức. CafeF (An Nam, 24.10.2026) ghi rõ đối tượng là đất phi nông nghiệp bỏ hoang, không đưa vào sử dụng hoặc chậm đưa vào sử dụng, và các trường hợp thuộc diện áp dụng sẽ được xác định theo pháp luật về đất đai.",
      },
      {
        text: "Theo VnExpress (Anh Tú – Viết Tuân, 23.10.2026), mức 0,2% không áp dụng hạn mức được diễn đạt là toàn bộ phần đất bỏ hoang, chậm hoặc không đi vào sử dụng đều bị tính thuế 0,2%, gấp gần 7 lần đất ở trong hạn mức. Kinh tế Xây dựng (Petrotimes, 25.10.2026) viết mức đề xuất cao gấp gần 7 lần mức thuế suất 0,03% đang áp dụng với một số loại đất. Hai cách so sánh này nằm ở hai bài khác nhau. Bài này giữ nguyên từng câu của từng báo, và không gộp 0,03% thành thuế suất đất ở trong hạn mức, vì không bài nào trong bốn nguồn viết thẳng điều đó.",
      },
      {
        text: "Theo VnExpress (Anh Tú, 23.10.2026), cơ quan soạn thảo nêu mục đích thể chế hóa Nghị quyết 21 của Trung ương về nghiên cứu chính sách tài chính, thuế với lộ trình phù hợp, nhất là khắc phục đất bỏ hoang, nhằm tăng hiệu quả sử dụng đất. CafeF (An Nam, 24.10.2026) gọi văn bản này là Nghị quyết số 21-NQ/TW. Kinh tế Xây dựng (Petrotimes, 25.10.2026) tóm tắt chính sách hướng tới hạn chế găm giữ đất, sử dụng đất kém hiệu quả và thúc đẩy khai thác nguồn lực đất đai. Đó là mục tiêu được báo ghi từ hồ sơ và từ cơ quan thẩm tra. Cùng sáng 23/10, Ủy ban Kinh tế và Tài chính nói hồ sơ chưa đánh giá được tác động thu ngân sách, nên các mục tiêu này chưa phải một kết quả đã đo được.",
      },
      {
        text: "Cùng bài VnExpress sáng 23.10, khái niệm đất bỏ hoang lần đầu được đề cập tại dự thảo Luật Đất đai (sửa đổi): đất đã được Nhà nước giao, cho thuê mà không đưa vào sử dụng liên tục trong một thời gian nhất định. Bài đó còn nêu đất nông nghiệp bỏ hoang quá 24 tháng liên tục và không tiếp tục sử dụng sau khi bị phạt hành chính thì bị thu hồi. Với đất dự án chậm tiến độ, ngoài tiền thuê và tiền sử dụng đất, chủ đầu tư phải nộp thêm một khoản bổ sung tăng dần hàng năm, và bị thu hồi nếu quá 60 tháng vẫn không đưa vào khai thác. Hai mốc 24 tháng và 60 tháng trong đoạn này là nội dung dự thảo Luật Đất đai mà VnExpress tường thuật, không phải thời điểm bắt đầu tính thuế suất 0,2%. Chiều cùng ngày, đại biểu vẫn hỏi đất bỏ hoang bao lâu thì bị đánh thuế. Câu đó chưa có số tháng trong phần thuế của dự thảo.",
      },
      {
        heading: "Ủy ban Kinh tế và Tài chính: tán thành nhưng căn cứ chưa khớp",
        text: "Theo CafeF (An Nam, 24.10.2026), Chủ nhiệm Ủy ban Kinh tế và Tài chính Phan Văn Mãi cho biết cơ quan thẩm tra cơ bản tán thành đề xuất thuế 0,2%. Cùng bài, quy định cần được rà soát để thống nhất với pháp luật về đất đai và thể chế hóa Nghị quyết số 21-NQ/TW. VnExpress sáng 23.10 ghi ông Mãi trình bày báo cáo thẩm tra: hồ sơ dự án luật chưa đánh giá được tác động thu ngân sách khi thu thuế với đất bỏ hoang. “Cơ bản tán thành” trong hai bài này là thái độ với hướng chính sách, không phải xác nhận dự thảo đã đủ căn cứ để áp dụng.",
        image: "/images/news-thue-dat-bo-hoang-2510-body-01.webp",
        imageAlt:
          "Chủ nhiệm Ủy ban Kinh tế và Tài chính Phan Văn Mãi đứng phát biểu tại bục trong hội trường Quốc hội sáng 23/10/2026, phía sau là cờ Tổ quốc và cờ Đảng. Ảnh: Cổng thông tin điện tử Quốc hội/VnExpress",
      },
      {
        text: "Theo VnExpress (Anh Tú, 23.10.2026), dự thảo chưa loại trừ thời gian bất khả kháng và đất của dự án đầu tư phân kỳ được phê duyệt. Ủy ban nêu việc này có thể dẫn đến thu thuế với trường hợp chậm sử dụng đất do nguyên nhân khách quan. Cùng bài, dự thảo dẫn chiếu pháp luật về đất đai cho ba trường hợp “đất bỏ hoang”, “không đưa vào sử dụng”, “chậm đưa vào sử dụng”, trong khi dự thảo Luật Đất đai (sửa đổi) chỉ quy định khái niệm đất bỏ hoang và các trường hợp thu hồi đất bỏ hoang do vi phạm pháp luật về đất đai. Cơ quan thẩm tra cho rằng quy định dẫn chiếu chưa có căn cứ để áp dụng.",
      },
      {
        text: "Theo VnExpress (Anh Tú, 23.10.2026), đối chiếu dự thảo Luật Đất đai (sửa đổi), Ủy ban nhận thấy Luật Thuế sử dụng đất phi nông nghiệp hiện hành còn mâu thuẫn: luật hiện hành áp thuế 0,15% với đất sử dụng chưa đúng quy định, và về bản chất đây là đất không hoặc chậm đưa vào sử dụng. CafeF (An Nam, 24.10.2026) ghi Ủy ban đề nghị làm rõ mối quan hệ giữa quy định bổ sung tại khoản 8 Điều 7 dự thảo với khoản 6 Điều 7 của luật hiện hành. Cùng bài CafeF, cần làm rõ mối quan hệ giữa thuế suất 0,2% với các khoản tiền phải nộp theo pháp luật về đất đai, tránh trùng nghĩa vụ tài chính, nhưng không làm giảm nghĩa vụ với các trường hợp đang áp dụng thuế suất 0,15%.",
      },
      {
        text: "Theo CafeF (An Nam, 24.10.2026), Ủy ban còn đề nghị thống nhất thuật ngữ, khái niệm, tiêu chí và phạm vi áp dụng giữa dự thảo luật thuế với pháp luật về đất đai, nhất là các trường hợp loại trừ và đất chậm đưa vào sử dụng. Dự thảo cần bổ sung đánh giá tác động với ngân sách nhà nước, người nộp thuế và khả năng tổ chức thực hiện. VnExpress sáng 23.10 cũng ghi yêu cầu thống nhất thuật ngữ, khái niệm, tiêu chí, phạm vi với Luật Đất đai (sửa đổi), và làm rõ thuế suất 0,2% với khoản tiền phải nộp theo pháp luật về đất đai để không trùng nghĩa vụ tài chính. Kinh tế Xây dựng (Petrotimes, 25.10.2026) nhắc lại hai điểm: nguy cơ trùng nghĩa vụ với các khoản thu theo pháp luật đất đai, và cần làm rõ cách xác định đất bỏ hoang cùng tính khả thi khi triển khai.",
      },
      {
        heading: "Đại biểu hỏi tiêu chí, thời điểm tính thuế và lý do khách quan",
        text: "Chiều 23/10/2026, Quốc hội thảo luận tại tổ về dự thảo. Theo VnExpress (Anh Tú – Viết Tuân, 17:15 ngày 23.10.2026), phần lớn đại biểu ủng hộ đề xuất, nhằm tránh găm giữ, đầu cơ và gây ô nhiễm môi trường. Nhiều đại biểu vẫn đề nghị làm rõ khi áp thuế. Việc ủng hộ chủ trương, theo đúng bài này, đi cùng những câu hỏi chưa được trả lời trong phiên tổ.",
        image: "/images/news-thue-dat-bo-hoang-2510-body-02.webp",
        imageAlt:
          "Phó bí thư Tỉnh ủy Lạng Sơn Đoàn Thu Hà đứng phát biểu trước micro trong phiên thảo luận tổ chiều 23/10/2026, phía sau là cờ Tổ quốc và cờ Đảng. Ảnh: Anh Tú/VnExpress",
      },
      {
        text: "Theo VnExpress (Anh Tú – Viết Tuân, 23.10.2026), Phó bí thư Tỉnh ủy Lạng Sơn Đoàn Thu Hà cho rằng ba cụm “đất bỏ hoang”, “không đưa vào sử dụng”, “chậm đưa vào sử dụng” có nội hàm chưa rõ. Bà đề nghị quy định thời điểm tính thuế 0,2%: từ ngày bắt đầu không sử dụng đất, từ thời điểm hết hạn, hay khi cơ quan có thẩm quyền xác định tình trạng đất. Bà cũng đề nghị lượng hóa mức 0,2% trên cơ sở giá đất tính thuế, để đánh giá khả năng thúc đẩy đưa đất vào sử dụng. Việc thu thuế, theo bà, phải nối với xử lý vi phạm và thu hồi đất, để không hình thành tâm lý chỉ cần nộp thêm thuế là có thể tiếp tục giữ đất kéo dài.",
      },
      {
        text: "Theo VnExpress (Anh Tú – Viết Tuân, 23.10.2026), tại tổ Hà Nội, Chủ tịch Agribank Tô Huy Vũ nói sửa Luật Đất đai cũng chưa có khái niệm và tiêu chí xác định thế nào là đất bỏ hoang. Ông cho rằng việc này dẫn đến rủi ro, vướng mắc khi áp dụng, và nguy cơ thu trùng với các khoản tiền phạt lũy tiến đối với dự án chậm tiến độ. Ông nói thêm quy định có thể tác động tiêu cực đến xử lý nợ xấu của ngân hàng, nhất là nhóm bất động sản do tổ chức tín dụng hoặc Công ty Quản lý tài sản (VAMC) nhận hoặc nắm giữ khi xử lý tài sản bảo đảm. Đó là các thửa đất đang chờ bán để xử lý nợ, không phải hành vi găm giữ hay đầu cơ. Ông nói nếu không có quy định loại trừ, chính sách sẽ gây gánh nặng thuế không hợp lý cho các tổ chức tài chính.",
        image: "/images/news-thue-dat-bo-hoang-2510-body-03.webp",
        imageAlt:
          "Chủ tịch Agribank Tô Huy Vũ ngồi phát biểu tại bàn trong phiên thảo luận tổ chiều 23/10/2026, tay cầm micro, phía trước là biển tên. Ảnh: Văn Tuyến/VnExpress",
      },
      {
        text: "Câu của ông Vũ và đoạn VnExpress sáng cùng ngày — rằng khái niệm đất bỏ hoang lần đầu được đề cập trong dự thảo Luật Đất đai (sửa đổi) — cùng được báo đăng. Bài này không gộp hai câu thành một định nghĩa đã chốt. Thủ tướng sau phiên thảo luận yêu cầu rà soát để luật quy định rõ thế nào là đất bỏ hoang và đất không đưa vào sử dụng.",
      },
      {
        text: "Theo VnExpress (Anh Tú – Viết Tuân, 23.10.2026), một số ý kiến đề xuất không thu thuế 0,2% khi đất bỏ hoang vì lý do khách quan. PGS. TS Trần Hoàng Ngân (đoàn TP.HCM) nêu người dân mua đất nhưng điều kiện kinh tế chưa đủ để xây nhà ngay, và hỏi những mảnh đất này có phải chịu thuế không. Ông đề nghị luật phân biệt rõ, tránh trùng lắp, và không đánh thuế đất bỏ hoang vì lý do khách quan. Cùng bài, ông góp ý phải làm rõ thời gian bỏ hoang bao lâu thì bị đánh thuế. Câu hỏi của ông Ngân là nội dung thảo luận, chưa phải một diện miễn đã được ghi trong luật.",
      },
      {
        text: "Theo VnExpress (Anh Tú – Viết Tuân, 23.10.2026), bà Nguyễn Thị Việt Nga, Phó trưởng đoàn đại biểu Quốc hội TP Hải Phòng, cho rằng luật phải phân biệt hành vi giữ đất, chậm triển khai với trường hợp có nguyên nhân khách quan. Bà tách chậm do chủ đầu tư khỏi chậm vì thủ tục của cơ quan nhà nước, chưa bàn giao đất, hoặc tiến độ phân kỳ được phê duyệt. Bà đề nghị nói rõ phạm vi áp thuế có bao gồm đất ở hợp pháp của hộ gia đình, cá nhân chưa xây dựng hay không, vì việc này tác động trực tiếp đến người dân và không nên để mỗi nơi hiểu một cách. Bà cũng đề nghị xác định cơ quan có trách nhiệm kết luận tình trạng sử dụng đất, cùng mốc bắt đầu và mốc kết thúc áp dụng thuế.",
      },
      {
        text: "Sau thảo luận, theo VnExpress (Anh Tú – Viết Tuân, 23.10.2026), Thủ tướng Lê Minh Hưng cho biết sẽ chỉ đạo Bộ Tài chính và Bộ Nông nghiệp và Môi trường phối hợp rà soát, quy định rõ trong luật thế nào là đất bỏ hoang và đất không đưa vào sử dụng. Ông nói quy định cần dễ áp dụng và khả thi. Ông cho biết thêm Luật Đất đai đã có quy định về tính thuế với đất không đưa vào sử dụng, nên phải tính toán, phân định rõ mức thuế suất và thời điểm áp dụng, để đồng bộ, thống nhất, không chồng chéo về thuế. Chỉ đạo rà soát này xác nhận định nghĩa chưa được xem là đã xong.",
      },
      {
        heading: "Người mua căn hộ để ở nên đọc đề xuất này thế nào",
        text: "Người mua căn hộ để ở, và người đã nhận nhà để ở lâu dài, nên đọc đề xuất đúng đối tượng mà báo chí đang mô tả: đất phi nông nghiệp bỏ hoang, không đưa vào sử dụng hoặc chậm đưa vào sử dụng, không áp dụng hạn mức (CafeF, An Nam, 24.10.2026; VnExpress, 23.10.2026). Một căn hộ đã xây xong và đang được sử dụng để ở không được bốn bài nguồn gọi là đất bỏ hoang. Các bài cũng không tính mức 0,2% trên giá một căn hộ, không nói căn hộ đang ở phải nộp thêm 0,2% mỗi năm, và không nói đề xuất này làm giá căn hộ tăng hay giảm.",
      },
      {
        text: "Chỗ còn mở, và đụng tới hộ gia đình, là câu của đại biểu Nguyễn Thị Việt Nga: luật có áp thuế 0,2% với đất ở hợp pháp của hộ gia đình, cá nhân chưa xây dựng hay không (VnExpress, Anh Tú – Viết Tuân, 23.10.2026). Đó là thửa đất ở đã hợp pháp nhưng chưa xây nhà, không phải căn hộ đã hình thành và đang ở. PGS. TS Trần Hoàng Ngân nêu tình huống người dân mua đất nhưng chưa đủ điều kiện kinh tế để xây ngay, và hỏi những mảnh đó có chịu thuế không. Câu hỏi ấy, theo các bài này, chưa được trả lời bằng một danh sách loại trừ đã chốt. Người đang giữ một thửa đất trống không có cơ sở để tự kết luận mình được miễn, và cũng không có cơ sở để tự kết luận mình đã phải nộp 0,2%.",
      },
      {
        text: "Theo CafeF (An Nam, 24.10.2026), TS. Nguyễn Văn Đính, Chủ tịch Hội Môi giới Bất động sản Việt Nam (VARS), đồng tình với hướng đánh thuế đất bỏ hoang. Ông cho rằng thuế bất động sản nên hướng tới người tích lũy tài sản và đầu cơ, thay vì đánh đồng với người mua nhà để ở hoặc dùng bất động sản cho sản xuất, kinh doanh. Ông đề xuất thiết kế thuế lũy tiến theo thời gian bỏ hoang, và dẫn ví dụ Hàn Quốc: thuế với đất bỏ hoang hoặc đất đang cải tạo có thể tăng từ 5% khi bỏ hoang vượt 2 năm, lên 8% sau 5 năm, 9% sau 7 năm và 10% khi kéo dài hơn 10 năm. Các mức 5%, 8%, 9% và 10% là ví dụ ông dẫn về Hàn Quốc, không phải thuế suất trong dự thảo Việt Nam. Dự thảo mà Bộ trưởng Ngô Văn Tuấn trình sáng 23/10, theo cả bốn bài, là một mức 0,2% và không áp dụng hạn mức.",
      },
      {
        text: "Cùng bài CafeF, ông Đính nói khi nghĩa vụ thuế tăng theo thời gian, chủ sở hữu phải cân nhắc giữa việc tiếp tục bỏ không với đưa vào khai thác, cho thuê hoặc chuyển nhượng, và việc nắm giữ chỉ để chờ tăng giá sẽ tốn kém hơn nếu cộng lãi vay cùng chi phí cơ hội. Ông cũng nói chính sách có thể làm giảm hiệu quả của mua đi bán lại để hưởng chênh lệch. Đó là nhận định của ông được CafeF đăng. Bài này ghi lại nhận định đã xuất bản, không biến nó thành lời khuyên mua, bán hay giữ một tài sản nào, và không dùng nó để nói giá nhà tại Đà Nẵng hay tại phường Sơn Trà sẽ đi theo hướng nào. Đề xuất 0,2% cũng không được bốn bài gắn với một dự án căn hộ cụ thể.",
      },
      {
        text: "Với người chỉ đang xem một căn hộ để ở, hai lớp nên để riêng. Lớp chính sách: một đề xuất thuế nhằm vào đất bỏ hoang, găm giữ, dùng kém hiệu quả, đang bị Quốc hội yêu cầu làm rõ căn cứ, tiêu chí, thời điểm và diện loại trừ (VnExpress, 23.10.2026; CafeF, 24.10.2026). Lớp hồ sơ của mình: pháp lý căn đang xem, điều kiện đưa vào kinh doanh, hợp đồng và tiến độ thanh toán theo quy định đang áp dụng hôm nay. Lớp thứ nhất chưa phải luật. Lớp thứ hai là việc phải kiểm trên đúng căn đang xem. Đề xuất thuế không thay cho việc đọc hợp đồng.",
      },
      {
        heading: "Mốc 6/11 và 20/11: vẫn là đề xuất, chưa có hiệu lực",
        text: "Theo VnExpress (Anh Tú, 23.10.2026), Quốc hội thảo luận sửa đổi, bổ sung 3 luật thuế tại tổ chiều 23/10 và tại nghị trường ngày 6/11. Nếu được Quốc hội thông qua vào 20/11, luật sẽ có hiệu lực từ 2027. VnExpress chiều cùng ngày (Anh Tú – Viết Tuân, 17:15) nhắc lại thảo luận tại nghị trường ngày 6/11, và nếu thông qua ngày 20/11 thì hiệu lực từ 2027. Kinh tế Xây dựng (Petrotimes, 25.10.2026) viết đây mới là đề xuất trong quá trình xây dựng luật, chưa phải chính sách đã có hiệu lực.",
      },
      {
        text: "Cụm “nếu được thông qua” trong hai bài VnExpress là điều kiện, không phải lịch đã chốt việc Quốc hội sẽ bấm nút đồng ý. Trước mốc 6/11, Thủ tướng đã nói sẽ chỉ đạo rà soát định nghĩa đất bỏ hoang và đất không đưa vào sử dụng (VnExpress, Anh Tú – Viết Tuân, 23.10.2026). Ủy ban Kinh tế và Tài chính còn yêu cầu đánh giá tác động ngân sách, thống nhất khái niệm với Luật Đất đai (sửa đổi) và tránh trùng nghĩa vụ tài chính (VnExpress, 23.10.2026; CafeF, 24.10.2026). Những việc đó có thể làm nội dung trình ngày 6/11 khác với bản sáng 23/10. Người đọc không lấy mức 0,2% của bản trình sáng 23/10 làm số đã khóa cho năm 2027.",
      },
      {
        text: "Năm 2027, trong cách các bài VnExpress viết, là năm hiệu lực trong trường hợp Quốc hội thông qua vào 20/11/2026. Không bài nào trong bốn nguồn nói thuế 0,2% được thu ngay trong tháng 10 hoặc tháng 11/2026. Cũng không bài nào nói một căn hộ đã bàn giao và đang ở sẽ bị tính 0,2% từ năm 2027. Việc còn phải chờ là Quốc hội có thông qua hay không, và văn bản cuối cùng xác định đất nào, từ thời điểm nào, có loại trừ lý do khách quan hay không, trong đó có đất ở hợp pháp của hộ chưa xây nhà.",
      },
      {
        heading: "Muốn ngồi đọc tin này cùng hồ sơ một căn tại Sơn Trà",
        text: "Anh chị muốn ngồi xem hồ sơ một căn hộ tại phường Sơn Trà, và tách tin luật này khỏi những gì đang ghi trong hồ sơ căn, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Buổi gặp để xem hồ sơ đã công bố trên website. Đề xuất thuế 0,2% không phải bảng giá của dự án, và buổi gặp không dùng đề xuất này để nói một căn sẽ tăng hay giảm giá.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Đề xuất thuế 0,2% áp với loại đất nào?",
        text: "Theo VnExpress (Anh Tú, 23.10.2026), Chính phủ đề xuất áp thuế 0,2%, không áp dụng hạn mức, với đất bỏ hoang, không đưa vào sử dụng, chậm đưa vào sử dụng, trong phần sửa Luật Thuế sử dụng đất phi nông nghiệp. Toàn bộ diện tích thuộc diện này chịu 0,2%, không hưởng ngưỡng thấp hơn cho phần trong hạn mức. CafeF (An Nam, 24.10.2026) ghi đối tượng là đất phi nông nghiệp, và trường hợp cụ thể được xác định theo pháp luật về đất đai. Cùng lúc, Ủy ban Kinh tế và Tài chính nói cách dẫn chiếu sang luật đất đai chưa có đủ căn cứ, vì dự thảo Luật Đất đai (sửa đổi) mới quy định khái niệm đất bỏ hoang và việc thu hồi khi vi phạm, chưa khớp ba cụm từ trong dự thảo thuế (VnExpress, 23.10.2026). Mức 0,2% vì vậy là đề xuất, chưa phải danh mục đất đã chốt.",
      },
      {
        heading: "Người đang ở căn hộ có phải nộp thuế 0,2% này không?",
        text: "Bốn bài nguồn không nói một căn hộ đã xây và đang được sử dụng để ở là đất bỏ hoang, và không tính 0,2% trên căn hộ đó. Đề xuất, theo CafeF (24.10.2026) và VnExpress (23.10.2026), nhằm vào đất phi nông nghiệp bỏ hoang, không đưa vào sử dụng hoặc chậm đưa vào sử dụng, trong bối cảnh đại biểu muốn hạn chế găm giữ và đầu cơ. Điều còn chưa được luật trả lời là đất ở hợp pháp của hộ gia đình, cá nhân chưa xây nhà có nằm trong phạm vi hay không — đại biểu Nguyễn Thị Việt Nga nêu đúng câu này (VnExpress, Anh Tú – Viết Tuân, 23.10.2026). Người mua đất nhưng chưa đủ điều kiện xây, theo câu hỏi của PGS. TS Trần Hoàng Ngân, cũng chưa được xác định là được miễn hay phải nộp. Người đang ở căn hộ không suy ra từ các bài này rằng mình đã có thêm một khoản thuế 0,2%.",
      },
      {
        heading: "Đề xuất đã có hiệu lực chưa, mốc 6/11 và 20/11 nghĩa là gì?",
        text: "Chưa có hiệu lực. Kinh tế Xây dựng (Petrotimes, 25.10.2026) viết đây mới là đề xuất trong quá trình xây dựng luật, chưa phải chính sách đã có hiệu lực. Theo VnExpress (Anh Tú, 23.10.2026), Quốc hội thảo luận tại tổ chiều 23/10 và tại nghị trường ngày 6/11. Nếu Quốc hội thông qua vào 20/11, luật có hiệu lực từ 2027. Chữ “nếu” trong câu đó là điều kiện. Thủ tướng Lê Minh Hưng đã nói sẽ chỉ đạo Bộ Tài chính và Bộ Nông nghiệp và Môi trường rà soát định nghĩa đất bỏ hoang và đất không đưa vào sử dụng cho dễ áp dụng, và phân định mức thuế cùng thời điểm để không chồng chéo (VnExpress, 23.10.2026). Bản thảo luận ngày 6/11 có thể khác bản trình sáng 23/10.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Thông tin tổng hợp từ báo chí, không phải văn bản chính thức của Quốc hội hay Chính phủ, không phải tư vấn thuế và không phải thông cáo của The Camellia Sơn Trà. Đề xuất thuế suất 0,2% chưa được thông qua, chưa có hiệu lực. Bài không hứa lợi nhuận, không kết luận giá bất động sản sẽ tăng hay giảm, và không nói đề xuất này làm thay đổi giá một căn hộ. Nguồn: VnExpress, Anh Tú, 09:14 ngày 23.10.2026 — https://vnexpress.net/chinh-phu-de-xuat-ap-thue-0-2-voi-dat-bo-hoang-5135850.html ; VnExpress, Anh Tú – Viết Tuân, 17:15 ngày 23.10.2026 — https://vnexpress.net/dai-bieu-quoc-hoi-can-ro-tieu-chi-thoi-diem-tinh-thue-dat-bo-hoang-0-2-5136046.html ; CafeF, An Nam, 10:44 ngày 24.10.2026 — https://cafef.vn/de-xuat-danh-thue-02-dat-bo-hoang-quoc-hoi-yeu-cau-lam-ro-can-cu-ap-dung-188261024104508431.chn ; Kinh tế Xây dựng (Petrotimes), 08:11 ngày 25.10.2026 — https://kinhtexaydung.petrotimes.vn/diem-tin-xay-dung-bat-dong-san-ngay-25-10-chinh-phu-de-xuat-danh-thue-0-2-voi-dat-bo-hoang-747105.html. Ảnh Bộ trưởng Ngô Văn Tuấn và ảnh Chủ nhiệm Phan Văn Mãi: Cổng thông tin điện tử Quốc hội/VnExpress. Ảnh Đoàn Thu Hà: Anh Tú/VnExpress. Ảnh Tô Huy Vũ: Văn Tuyến/VnExpress.",
      },
    ],
  },

  {
    slug: "nhnn-khach-hang-bi-mat-kiem-tra-giam-lai-suat",
    date: "24.10.2026",
    title: "NHNN dùng “khách hàng bí mật” kiểm tra giảm lãi: người vay lưu ý",
    excerpt:
      "Theo VnEconomy (24.10.2026), NHNN sẽ dùng “khách hàng bí mật” kiểm tra giảm lãi suất. Người vay không nên mặc định khoản vay hiện hữu tự động được giảm.",
    description:
      "Theo VnEconomy (24.10.2026), Thống đốc NHNN nói sẽ kiểm tra giảm lãi suất bằng “khách hàng bí mật”. Người vay đối chiếu hợp đồng, khoản cũ không tự giảm.",
    image: "/images/news-khach-hang-bi-mat-2410-og.jpg",
    imageAlt:
      "Thống đốc Phạm Đức Ấn ngồi giữa bàn họp, phía sau là phông Ngân hàng Nhà nước Việt Nam. Ảnh: SBV/VnEconomy",
    imageCaption:
      "Thống đốc NHNN Phạm Đức Ấn: kiểm soát rủi ro bất động sản, giảm lãi suất lĩnh vực ưu tiên và siết kỷ luật thị trường tiền tệ. Ảnh: SBV/VnEconomy",
    poster: "/images/news-khach-hang-bi-mat-2410-hero.webp",
    gallery: [
      "/images/news-khach-hang-bi-mat-2410-hero.webp",
      "/images/news-khach-hang-bi-mat-2410-body-01.webp",
      "/images/news-khach-hang-bi-mat-2410-body-02.webp",
    ],
    body: [
      {
        text: "Chiều 23/10/2026, tại TP. Hồ Chí Minh, Thống đốc Ngân hàng Nhà nước Phạm Đức Ấn cho biết ngành ngân hàng sẽ bị kiểm tra việc chấp hành chỉ đạo về lãi suất, kể cả bằng hình thức “khách hàng bí mật”. Với người đang vay hoặc đang tính vay mua căn hộ ở Đà Nẵng, ý cần lấy ra ngay là: đây là cách cơ quan quản lý giám sát ngân hàng. Khoản vay đang trả không vì câu nói này mà tự động được giảm. Việc nên làm là mở hợp đồng, đọc lãi suất đang áp dụng, thời gian còn ưu đãi và biên độ sau khi hết ưu đãi. Theo VnEconomy (Phan Linh, 09:25 ngày 24.10.2026).",
      },
      {
        text: "Hội nghị mang tên “Ngành ngân hàng đồng hành khơi thông nguồn lực tài chính – ngân hàng, phục vụ tăng trưởng vùng Đông Nam Bộ giai đoạn 2026–2030”, họp chiều 23/10/2026. Theo Thời báo Ngân hàng (Thạch Bình, 15:56 ngày 23.10.2026), Ngân hàng Nhà nước phối hợp UBND TP. Hồ Chí Minh tổ chức; Thống đốc Phạm Đức Ấn đồng chủ trì cùng Chủ tịch UBND thành phố Nguyễn Văn Được, Phó thống đốc Nguyễn Ngọc Cảnh cùng chủ trì. Bài này đọc lại VnEconomy sáng 24.10, Thời báo Ngân hàng chiều 23.10 và Kinh tế & Đô thị sáng 23.10. Đây là bài tổng hợp từ báo chí cho người vay mua nhà, không phải văn bản của Ngân hàng Nhà nước và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        text: "Công văn 9736/NHNN-CSTT ngày 21/10/2026, về giảm lãi tiền gửi của giao dịch mới, đã có bài riêng trên website ngày 22.10.2026. Bài hôm nay chỉ nhắc công văn đó cho đủ bối cảnh. Phần mới là cơ chế kiểm tra “khách hàng bí mật”, cùng yêu cầu không để giá bất động sản bị đẩy lên thành thị trường ảo và tránh để thị trường hạ cánh cứng.",
        links: [
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-vay-mua-nha-luu-y",
            label: "Bài 22.10.2026: công văn 9736 và cách người vay mua nhà đọc mức 0,5%/năm",
          },
        ],
      },
      {
        text: "Ảnh đầu bài là ảnh VnEconomy đăng kèm tin, chú thích gốc “(Ảnh: SBV)”: Thống đốc Phạm Đức Ấn ngồi tại bàn họp, phía sau là phông Ngân hàng Nhà nước. Bài nguồn không ghi tấm ảnh đó là ảnh hội nghị chiều 23/10 tại TP.HCM. Ảnh Thống đốc đứng phát biểu giữa bài là ảnh Thời báo Ngân hàng chụp tại hội nghị, credit “Ảnh: Thời báo Ngân hàng”. Ảnh người ngồi đọc tờ hợp đồng là ảnh minh họa tạo bằng AI: không phải một khách hàng có thật, không phải quầy của một ngân hàng, và dòng chữ trên giấy không phải điều khoản của một hợp đồng vay.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Chiều 23/10/2026 tại TP.HCM, Thống đốc Phạm Đức Ấn nói Ngân hàng Nhà nước yêu cầu các đơn vị tăng cường kiểm tra, giám sát việc chấp hành chỉ đạo về lãi suất, kể cả dùng “khách hàng bí mật”. Tổ chức tín dụng không tuân thủ có thể bị xử lý, xử phạt hoặc bị kiểm soát tăng trưởng tín dụng (VnEconomy, Phan Linh, 24.10.2026). • Cùng bài, ông nói không để giá bất động sản bị đẩy lên cao rồi tạo thị trường ảo. Ngân hàng và doanh nghiệp bất động sản phải cân đối để hài hòa lợi ích, tránh hạ cánh cứng. Ngân hàng Nhà nước sẽ vào cuộc. • Một số tổ chức tín dụng chưa giảm ngay được lãi suất vì đã huy động vốn với chi phí cao. Lãi suất với sản xuất, thương mại, dịch vụ và dự án hạ tầng hỗ trợ tăng trưởng thì phải giảm (VnEconomy, 24.10.2026). Câu này không nêu một mức cắt cho lãi vay mua nhà. • Đến cuối tháng 9/2026, vốn huy động 19,5 triệu tỷ đồng, tăng 10,7% so với cuối năm 2025; dư nợ tín dụng trên 20,7 triệu tỷ đồng, tăng 11,7%. Chỉ tiêu tăng trưởng tín dụng năm 2026 khoảng 15% (Thời báo Ngân hàng, Thạch Bình, 23.10.2026). • Hơn 25 ngân hàng thương mại cổ phần đã công bố giảm lãi huy động hoặc cho vay. Công văn 9736 yêu cầu giảm tối thiểu 0,5 điểm phần trăm/năm lãi tiền gửi bình quân của giao dịch mới, kỳ hạn từ 6 tháng trở lên (Kinh tế & Đô thị, Nha Trang, 23.10.2026). Việc ngân hàng công bố giảm không có nghĩa mọi khoản vay đang trả tự động giảm.",
      },
      {
        heading: "“Khách hàng bí mật” kiểm tra chấp hành chỉ đạo lãi suất",
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc Phạm Đức Ấn cho biết Ngân hàng Nhà nước đã yêu cầu các đơn vị, chi nhánh, vụ, cục tăng cường kiểm tra, giám sát việc chấp hành các chỉ đạo về lãi suất. Hình thức kiểm tra gồm cả “khách hàng bí mật”, để phát hiện vi phạm. Bài nguồn đặt việc này trong bối cảnh chỉ đạo giảm lãi suất. Bài báo không mô tả khách hàng bí mật là ai, vào chi nhánh nào, hay dùng kịch bản hỏi gì. Người đọc chỉ có căn cứ để biết hình thức này được nêu như một cách kiểm tra, chưa có quy trình công bố kèm theo.",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc nói tổ chức tín dụng không tuân thủ chỉ đạo về lãi suất của Ngân hàng Nhà nước sẽ bị xử lý, xử phạt hoặc bị kiểm soát tăng trưởng tín dụng. Cùng bài, các tổ chức tín dụng được yêu cầu tiếp tục huy động vốn, nhưng không cạnh tranh lãi suất không lành mạnh và không giành giật khách hàng của nhau. Ông nói không thể để một vài ngân hàng, vì muốn tăng trưởng cao, phá vỡ thị trường bằng cách cạnh tranh không lành mạnh.",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), nhu cầu tín dụng tăng cao thời gian qua đã tạo áp lực lên nguồn vốn huy động, nên giữa các ngân hàng đã có cạnh tranh lãi suất. Ngân hàng Nhà nước đã dùng linh hoạt các công cụ điều hành, gồm nghiệp vụ thị trường mở, tái cấp vốn và hoán đổi ngoại tệ, để hỗ trợ thanh khoản hệ thống. Thống đốc nói không thể để ngân hàng chỉ cần nâng lãi suất tiền gửi là kéo được tiền từ tổ chức tín dụng khác về, vì chi phí huy động tăng sẽ gây áp lực lên lãi suất cho vay.",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc thừa nhận một số tổ chức tín dụng chưa giảm ngay được lãi suất, vì trước đó đã huy động vốn đầu vào với chi phí cao. Ông vẫn khẳng định: trong thời gian tới, lãi suất với những lĩnh vực theo chỉ đạo của Ngân hàng Nhà nước — sản xuất, thương mại, dịch vụ và các dự án hạ tầng hỗ trợ tăng trưởng — thì phải giảm. Danh sách lĩnh vực trong câu này không có một dòng riêng cho vay mua nhà ở. Người vay mua căn hộ không nên lấy câu “phải giảm” đó để kết luận khoản vay nhà của mình đã có một mức cắt mới.",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc nhắc lãi suất là việc nhạy cảm, cần cân bằng lợi ích giữa người gửi tiền, ngân hàng và người vay. Lãi cho vay quá cao ảnh hưởng hiệu quả sản xuất, kinh doanh và khả năng trả nợ của doanh nghiệp. Lãi tiền gửi không đủ hấp dẫn thì hệ thống khó huy động vốn. Ngân hàng Nhà nước cho biết sẽ tiếp tục theo dõi lãi suất, tỷ giá, lạm phát và tình hình quốc tế để điều hành chính sách tiền tệ linh hoạt, phối hợp với chính sách tài khóa. Đây là định hướng điều hành, không phải biểu lãi suất mới của một khoản vay mua căn hộ.",
      },
      {
        heading: "Không đẩy giá bất động sản lên “thị trường ảo”",
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), trong phát biểu kết luận hội nghị, Thống đốc Phạm Đức Ấn nhấn mạnh yêu cầu kiểm soát rủi ro bất động sản, bảo đảm an toàn tín dụng và tăng kỷ luật thị trường tiền tệ. Ông lưu ý thị trường bất động sản phát triển nóng những năm qua, và ngành ngân hàng đã đưa một lượng vốn tín dụng đáng kể vào lĩnh vực này. Trước yêu cầu của lãnh đạo Đảng và Nhà nước về kiểm soát chặt, ngăn đầu cơ và trục lợi trong nhà ở, bất động sản, ông đề nghị cả doanh nghiệp và tổ chức tín dụng xác định lại chiến lược cho giai đoạn hiện nay.",
        image: "/images/news-khach-hang-bi-mat-2410-body-01.webp",
        imageAlt:
          "Thống đốc Phạm Đức Ấn đứng phát biểu tại bục trong hội nghị chiều 23/10/2026 tại TP.HCM, phía sau là cờ Tổ quốc và cờ Đảng. Ảnh: Thời báo Ngân hàng",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc dẫn bài học về hệ lụy khi thị trường bất động sản phát triển nóng ở một số nước lớn, và nói ngân hàng thương mại cùng doanh nghiệp không thể tiếp tục coi bất động sản là lĩnh vực luôn mang lại lợi nhuận lớn. Hai bên phải hài hòa lợi ích. Câu “luôn mang lại lợi nhuận lớn” trong bài nguồn là điều ông nói không nên mặc định. Bài này không biến câu đó thành dự báo giá căn hộ Đà Nẵng sẽ giảm, cũng không biến nó thành lời khuyên mua hay bán.",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc nói không thể để giá bất động sản bị đẩy lên cao rồi tạo ra một thị trường ảo. Ngân hàng thương mại và doanh nghiệp bất động sản phải cân đối lại để hài hòa lợi ích, sao cho không bị hạ cánh cứng: vẫn bảo đảm duy trì và phát triển, nhưng theo chủ trương mới, theo điều kiện và hoàn cảnh mới. Ngân hàng Nhà nước cho biết sẽ vào cuộc ở nội dung này, nhằm ngăn giá bị đẩy lên mức ảo và tránh cú hạ cánh cứng, để thị trường được duy trì ổn định. “Vào cuộc” trong bài báo là cam kết sẽ tham gia kiểm soát, không phải một quyết định giá cho từng dự án và không phải lịch giảm giá căn hộ.",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), cùng với kiểm soát rủi ro bất động sản, các tổ chức tín dụng phải bảo đảm an toàn hoạt động, kiểm soát chặt rủi ro khi cấp tín dụng, và ưu tiên vốn cho sản xuất, kinh doanh cùng các lĩnh vực tạo động lực tăng trưởng. Với vùng Đông Nam Bộ, ông nói đây là khu vực chiếm tỷ trọng lớn, ảnh hưởng trực tiếp tới tăng trưởng chung, nên cần được ưu tiên khi triển khai chính sách tín dụng. Ưu tiên vùng đó là nội dung của hội nghị tại TP.HCM. Đà Nẵng không nằm trong vùng Đông Nam Bộ. Người mua căn hộ tại Đà Nẵng đọc đây như tín hiệu kiểm soát rủi ro và kỷ luật giá, không đọc thành hạn mức tín dụng của thành phố mình.",
      },
      {
        heading: "Vốn huy động và dư nợ đến cuối tháng 9/2026",
        text: "Theo Thời báo Ngân hàng (Thạch Bình, 23.10.2026), năm 2026 là năm đầu của kế hoạch phát triển kinh tế – xã hội 2026–2030. Thống đốc nói điều hành chính sách tiền tệ phải làm cùng lúc nhiều việc: góp phần kiểm soát lạm phát, bảo đảm an toàn hệ thống ngân hàng, và hỗ trợ tăng trưởng. Cùng bài, ngay từ cuối năm 2025, Ngân hàng Nhà nước đã giao chỉ tiêu tăng trưởng tín dụng năm 2026 khoảng 15%, đồng thời chỉ đạo các tổ chức tín dụng đơn giản hóa thủ tục cấp tín dụng, tăng chuyển đổi số và phấn đấu giảm lãi suất cho vay để hỗ trợ người dân, doanh nghiệp. Mức khoảng 15% là chỉ tiêu tăng trưởng tín dụng cả năm đã giao, không phải mức lãi suất và không phải tỷ lệ một khoản vay mua nhà được duyệt.",
      },
      {
        text: "Theo Thời báo Ngân hàng (Thạch Bình, 23.10.2026), đến cuối tháng 9/2026, tổng vốn huy động của các tổ chức tín dụng trên toàn quốc đạt 19,5 triệu tỷ đồng, tăng 10,7% so với cuối năm 2025. Dư nợ tín dụng toàn nền kinh tế đạt trên 20,7 triệu tỷ đồng, tăng 11,7%. Hai con số này là quy mô cả nước. Chúng không cho biết dư nợ nhà ở tại Đà Nẵng, và không cho biết một hồ sơ vay mua căn hộ sẽ được giải ngân bao nhiêu.",
      },
      {
        text: "Theo Thời báo Ngân hàng (Thạch Bình, 23.10.2026), riêng vùng Đông Nam Bộ, dư nợ tín dụng ước đạt gần 6,8 triệu tỷ đồng, tăng 10,93% so với cuối năm 2025, chiếm gần 35% dư nợ toàn quốc. Hội nghị chiều 23/10 bàn về vùng này. Gần 35% là tỷ trọng dư nợ của vùng Đông Nam Bộ trong cả nước, không phải tỷ trọng của Đà Nẵng. Người đang xem căn hộ tại phường Sơn Trà không dùng tỷ lệ đó để ước sức mua hay hạn mức vay tại Đà Nẵng.",
      },
      {
        text: "Theo Thời báo Ngân hàng (Thạch Bình, 23.10.2026), Ngân hàng Nhà nước định hướng các tổ chức tín dụng cân đối nguồn vốn, tập trung tín dụng vào sản xuất kinh doanh, các động lực tăng trưởng và những công trình trọng điểm. Cùng bài, các ngân hàng được yêu cầu chủ động xây dựng chương trình tín dụng với lãi suất hợp lý, đẩy mạnh kết nối ngân hàng – doanh nghiệp, và phối hợp chính quyền địa phương tháo gỡ vướng mắc khi tiếp cận vốn. “Lãi suất hợp lý” trong câu này là định hướng, không phải một biểu lãi suất cho vay mua nhà đã ban hành ngày 23/10/2026.",
      },
      {
        heading: "Người vay mua nhà đối chiếu những gì trong hợp đồng",
        text: "Theo Kinh tế & Đô thị (Nha Trang, 09:18 ngày 23.10.2026), sau chỉ đạo của Ngân hàng Nhà nước, làn sóng giảm lãi suất huy động và cho vay lan trong hệ thống. Tính đến thời điểm bài đó, hơn 25 ngân hàng thương mại cổ phần đã công bố giảm lãi suất huy động hoặc cho vay. Cùng bài, công văn 9736/NHNN-CSTT ngày 21/10/2026 yêu cầu giảm tối thiểu 0,5 điểm phần trăm/năm lãi suất tiền gửi bình quân của các giao dịch phát sinh mới, kỳ hạn từ 6 tháng trở lên, trong những tháng cuối năm 2026, so với mức của chính ngân hàng đó tại kỳ báo cáo từ 11 đến 20/10/2026. Ngân hàng Nhà nước theo dõi số liệu lãi suất bình quân của giao dịch mới qua hệ thống báo cáo thống kê. Mức 0,5 điểm phần trăm trong công văn, theo đúng bài này, gắn với lãi tiền gửi bình quân của giao dịch mới. Bài ngày 22.10 trên website đã tách phần lãi tiền gửi khỏi phần lãi cho vay; bài hôm nay không viết lại toàn bộ công văn.",
        links: [
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-vay-mua-nha-luu-y",
            label: "Đọc lại cách tách lãi tiền gửi và lãi vay trong công văn 9736",
          },
        ],
      },
      {
        text: "Theo Kinh tế & Đô thị (Nha Trang, 23.10.2026), người vay mua nhà, vay tiêu dùng hoặc vay sản xuất kinh doanh nên nhìn vào lãi suất áp dụng thực tế trong hợp đồng, thời gian được hưởng ưu đãi, biên độ điều chỉnh sau ưu đãi và các khoản phí đi kèm. Cùng bài nói rõ: một ngân hàng công bố giảm lãi suất không có nghĩa mọi khách hàng đang vay đều tự động được giảm tương ứng. Câu này đúng với khoản vay đã ký trước đợt công bố, và cũng đúng với khoản đang thương lượng: mức giảm trên bản tin không thay cho trang lãi suất của hợp đồng mình sắp ký.",
        image: "/images/news-khach-hang-bi-mat-2410-body-02.webp",
        imageAlt:
          "Người ngồi tại bàn gỗ đọc một tờ hợp đồng, cạnh đó là cây bút. Ảnh minh họa tạo bằng AI, không phải ảnh một ngân hàng hay một sự kiện thật",
      },
      {
        text: "Hình thức “khách hàng bí mật”, theo VnEconomy (Phan Linh, 24.10.2026), là cách Ngân hàng Nhà nước yêu cầu các đơn vị dùng khi kiểm tra việc chấp hành chỉ đạo về lãi suất. Việc kiểm tra nhằm vào tổ chức tín dụng. Nó không sửa một hợp đồng đã ký, không thay biên độ đã thỏa thuận, và không tự làm giảm số tiền phải trả của tháng tới. Người đang trả góp mua nhà vẫn hỏi đúng ngân hàng đang cho vay: kỳ điều chỉnh tới lấy lãi tham chiếu nào, biên độ cộng thêm bao nhiêu, và phí trả nợ trước hạn là bao nhiêu.",
      },
      {
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), nhóm được Thống đốc nêu là phải giảm lãi suất gồm sản xuất, thương mại, dịch vụ và các dự án hạ tầng hỗ trợ tăng trưởng. Người mua căn hộ để ở có thể hỏi ngân hàng xem sản phẩm vay mua nhà của mình có nằm trong chương trình giảm hay không. Câu trả lời nằm ở biểu lãi và ở điều khoản hợp đồng của đúng ngân hàng, không nằm ở danh sách lĩnh vực trong bài phát biểu. Nếu ngân hàng nói có giảm, hãy xin mức áp dụng cho hồ sơ của mình, thời điểm áp dụng, và phần nào chỉ dành cho khoản giải ngân mới.",
      },
      {
        text: "Với người đang xem căn hộ tại Đà Nẵng, hai lớp tin nên để riêng. Lớp chính sách: Ngân hàng Nhà nước siết kiểm tra lãi suất và yêu cầu không đẩy giá bất động sản thành thị trường ảo, đồng thời tránh hạ cánh cứng (VnEconomy, 24.10.2026). Lớp hồ sơ của mình: lãi suất trong hợp đồng, số tháng ưu đãi, biên độ sau ưu đãi, phí, và tiến độ trả nợ. Lớp thứ nhất không quyết định giá một căn tại phường Sơn Trà. Lớp thứ hai mới cho biết mỗi tháng phải trả bao nhiêu khi hết ưu đãi. Ảnh người đọc hợp đồng trong mục này là ảnh minh họa tạo bằng AI, không phải biên bản kiểm tra “khách hàng bí mật” và không phải hợp đồng mẫu của một ngân hàng.",
      },
      {
        heading: "Muốn đối chiếu hợp đồng vay với một căn tại Sơn Trà",
        text: "Anh chị muốn được ngồi xem cách đọc một điều khoản lãi suất khi đang tìm căn hộ tại phường Sơn Trà, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Buổi gặp để xem hồ sơ đã công bố trên website và để hỏi những chỗ cần đối chiếu trong hợp đồng vay, không phải để nhận một mức lãi suất được hứa sẵn.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Ngân hàng Nhà nước sẽ kiểm tra việc giảm lãi suất bằng cách nào?",
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc Phạm Đức Ấn cho biết Ngân hàng Nhà nước yêu cầu các đơn vị, chi nhánh, vụ, cục tăng cường kiểm tra, giám sát việc chấp hành chỉ đạo về lãi suất, kể cả dùng hình thức “khách hàng bí mật” để phát hiện vi phạm. Tổ chức tín dụng không tuân thủ có thể bị xử lý, xử phạt hoặc bị kiểm soát tăng trưởng tín dụng. Cùng bài, ngân hàng không được cạnh tranh lãi suất huy động không lành mạnh để kéo tiền gửi của tổ chức khác. Bài báo không công bố quy trình chi tiết của đợt kiểm tra. Việc kiểm tra này không tự sửa hợp đồng vay đã ký.",
      },
      {
        heading: "Khoản vay mua nhà đang trả có tự động được giảm không?",
        text: "Không có căn cứ để mặc định như vậy. Theo Kinh tế & Đô thị (Nha Trang, 23.10.2026), một ngân hàng công bố giảm lãi suất không có nghĩa mọi khách hàng đang vay đều tự động được giảm tương ứng. Người vay cần xem lãi suất thực tế trong hợp đồng, thời gian ưu đãi, biên độ sau ưu đãi và các khoản phí. Theo VnEconomy (Phan Linh, 24.10.2026), “khách hàng bí mật” là hình thức kiểm tra việc ngân hàng chấp hành chỉ đạo, không phải cơ chế giảm lãi cho từng khoản vay hiện hữu. Một số tổ chức tín dụng còn chưa giảm ngay được vì đã huy động vốn giá cao trước đó; nhóm được nêu là phải giảm gồm sản xuất, thương mại, dịch vụ và dự án hạ tầng, không phải một mức cắt đã ấn cho mọi khoản vay mua nhà.",
      },
      {
        heading: "Người mua căn hộ ở Đà Nẵng nên hiểu “thị trường ảo” và “hạ cánh cứng” ra sao?",
        text: "Theo VnEconomy (Phan Linh, 24.10.2026), Thống đốc Phạm Đức Ấn nói không để giá bất động sản bị đẩy lên cao tạo thị trường ảo. Ngân hàng và doanh nghiệp bất động sản phải cân đối, hài hòa lợi ích, tránh hạ cánh cứng, nghĩa là vẫn duy trì và phát triển nhưng theo chủ trương và điều kiện mới. Ngân hàng Nhà nước sẽ vào cuộc. Cùng hướng đó, tổ chức tín dụng phải kiểm soát rủi ro cấp tín dụng và ưu tiên vốn cho sản xuất, kinh doanh, lĩnh vực tạo động lực tăng trưởng. Đây là tín hiệu chính sách về kỷ luật giá và rủi ro tín dụng. Nó không phải dự báo giá căn hộ Đà Nẵng sẽ tăng hay giảm, và không phải thông báo giá của một dự án tại phường Sơn Trà. Số vốn huy động 19,5 triệu tỷ đồng và dư nợ trên 20,7 triệu tỷ đồng đến cuối tháng 9/2026, theo Thời báo Ngân hàng (23.10.2026), là số cả nước.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Thông tin tổng hợp từ báo chí, không phải văn bản chính thức của Ngân hàng Nhà nước, không phải thông báo của một ngân hàng thương mại, không phải tư vấn tài chính và không phải thông cáo của The Camellia Sơn Trà. Bài không hứa một mức lãi suất, không hứa lợi nhuận và không kết luận giá bất động sản sẽ đi lên hay đi xuống. Nguồn: VnEconomy, Phan Linh, 09:25 ngày 24.10.2026 — https://vneconomy.vn/ngan-hang-nha-nuoc-se-dung-khach-hang-bi-mat-de-kiem-tra-viec-giam-lai-suat.htm ; Thời báo Ngân hàng, Thạch Bình, 15:56 ngày 23.10.2026 — https://thoibaonganhang.vn/khoi-thong-nguon-luc-cho-tang-truong-vung-dong-nam-bo-189562.html ; Kinh tế & Đô thị, Nha Trang, 09:18 ngày 23.10.2026 — https://kinhtedothi.vn/cuoc-dua-giam-lai-suat-tang-nhiet-ngan-hang-nha-nuoc-phat-canh-bao-chan-lai-suat-ngam.990737.html. Ảnh đầu bài: SBV/VnEconomy (chú thích gốc trên VnEconomy: “(Ảnh: SBV)”). Ảnh Thống đốc phát biểu: Thời báo Ngân hàng. Ảnh người đọc hợp đồng: ảnh minh họa tạo bằng AI.",
      },
    ],
  },

  {
    slug: "dkra-quy-iii-2026-can-ho-da-nang-giam-thanh-khoan",
    date: "24.10.2026",
    title: "DKRA quý III/2026: căn hộ Đà Nẵng giảm thanh khoản, Q4 ra sao?",
    excerpt:
      "Theo Báo Đầu tư (23.10.2026), DKRA ghi nhận căn hộ Đà Nẵng quý III nguồn cung sơ cấp 4.385 căn, tiêu thụ 2.099 căn, giảm so với quý trước.",
    description:
      "Theo Báo Đầu tư (23.10.2026), DKRA: căn hộ Đà Nẵng quý III nguồn cung 4.385 căn, tiêu thụ 2.099 căn. Quý IV dự kiến khoảng 500–1.000 căn. Tóm tắt báo cáo, không cam kết giá.",
    image: "/images/news-dkra-q3-dn-2410-og.jpg",
    imageAlt:
      "Tuyến phố Đà Nẵng: dãy nhà ống nhiều tầng hai bên đường, cây xanh và vài người đi bộ, trời nhiều mây",
    imageCaption:
      "Sức cầu trong quý III/2026 tại TP Đà Nẵng sụt giảm. Ảnh: Thanh Đức/Báo Xây dựng",
    poster: "/images/news-dkra-q3-dn-2410-hero.webp",
    gallery: [
      "/images/news-dkra-q3-dn-2410-hero.webp",
      "/images/news-dkra-q3-dn-2410-body-01.webp",
      "/images/news-dkra-q3-dn-2410-body-02.webp",
      "/images/news-dkra-q3-dn-2410-body-03.webp",
    ],
    body: [
      {
        text: "Ngày 23/10/2026, DKRA Consulting (thuộc DKRA Group) công bố Báo cáo thị trường bất động sản nhà ở TP. Đà Nẵng quý III/2026. Theo Báo Đầu tư (Ngọc Tân, 23.10.2026), thị trường ghi nhận biến động cả về nguồn cung và lượng tiêu thụ ở hầu hết các phân khúc. Với người đang xem căn hộ, hai mốc trong bài nguồn là nguồn cung sơ cấp 4.385 căn, giảm 14% so với quý trước, và lượng tiêu thụ 2.099 căn, giảm 25% so với quý trước.",
      },
      {
        text: "Bài này tóm tắt báo cáo đó qua Báo Đầu tư (23.10.2026), Báo Xây dựng (Thanh Đức, 23.10.2026) và MarketTimes (Mạnh Đại, 23.10.2026). Số căn tuyệt đối 4.385 và 2.099 chỉ có trong bài Báo Đầu tư; hai bài kia ghi cùng các tỷ lệ, không nêu lại hai số căn đó. Đây là bài đọc số liệu thị trường, không phải thông báo của cơ quan nhà nước, không phải bản báo cáo gốc của DKRA và không phải thông cáo của The Camellia Sơn Trà.",
        links: [
          {
            to: "/tin-tuc/thanh-khoan-phan-hoa-can-ho-dat-nen-da-nang-2026",
            label: "Bài 09.10.2026: số liệu DKRA quý II, không phải báo cáo quý III này",
          },
        ],
      },
      {
        text: "Ảnh đầu bài là ảnh Báo Xây dựng đăng kèm chú thích «Sức cầu trong quý III/2026 tại TP Đà Nẵng sụt giảm» (Ảnh: Thanh Đức). Ảnh ghi một tuyến phố, không phải biểu đồ nguồn cung căn hộ và không phải ảnh The Camellia Sơn Trà. Trong bài còn ba ảnh: khung cảnh chung cư ven vịnh là ảnh minh họa tạo bằng AI, không phải biểu đồ số liệu; ảnh Báo Xây dựng chú thích «Nguồn cung đất nền tại TP Đà Nẵng tiếp tục khan hiếm» (Ảnh: Thanh Đức); ảnh Báo Đầu tư ngày 23.10.2026 ghi Cầu Rồng và bờ biển. Không ảnh nào là ảnh The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• Căn hộ, theo Báo Đầu tư (23.10.2026) dẫn DKRA Consulting: nguồn cung sơ cấp quý III/2026 là 4.385 căn từ 20 dự án, giảm 14% so với quý trước; nguồn cung mới giảm gần 40% so với quý II/2026. Lượng tiêu thụ 2.099 căn, giảm 25% so với quý trước và 24% so với cùng kỳ năm trước. • Hạng B chiếm 46% nguồn cung và 68% lượng tiêu thụ sơ cấp. Giao dịch chủ yếu ở dự án mới mở bán, mức giá trung bình 60–70 triệu đồng/m². Ngũ Hành Sơn chiếm 40% nguồn cung và 43% lượng giao dịch. Giá sơ cấp ổn định kèm ưu đãi; giá thứ cấp giảm khoảng 3–5%. • Đất nền: nguồn cung mới khoảng 4% nguồn cung sơ cấp; tiêu thụ 54 nền, khoảng 4% nguồn cung sơ cấp, giảm 16% so với quý trước. Giá sơ cấp giảm khoảng 7%; giá thứ cấp giảm trung bình 3%. • Nhà phố, biệt thự: giá thứ cấp giảm trung bình 10% so với quý trước (Báo Xây dựng và MarketTimes, 23.10.2026). • Quý IV/2026, ông Võ Hồng Thắng (DKRA) dự báo nguồn cung căn hộ mới khoảng 500–1.000 căn, tập trung ở Ngũ Hành Sơn, Hải Châu và Sơn Trà; sức cầu chưa cải thiện rõ vì lãi suất cao và kiểm soát tín dụng. Ông nói thị trường kỳ vọng hồi phục nhưng ở mức thấp, khó đột biến — đó là dự báo, không phải cam kết giá tăng.",
      },
      {
        heading: "Căn hộ: nguồn cung và thanh khoản cùng giảm",
        text: "Theo Báo Đầu tư (23.10.2026), nguồn cung sơ cấp căn hộ trên địa bàn TP. Đà Nẵng quý III/2026 đạt 4.385 căn, đến từ 20 dự án, giảm 14% so với quý trước. Trong đó nguồn cung mới giảm gần 40% so với quý II/2026. Cùng bài, các chủ đầu tư tiếp tục thận trọng khi triển khai dự án. 4.385 căn là nguồn cung sơ cấp của cả quý, không phải số căn mở bán mới.",
        image: "/images/news-dkra-q3-dn-2410-body-01.webp",
        imageAlt:
          "Khung cảnh chung cư ven vịnh và đường chân trời Đà Nẵng, có dáng bán đảo Sơn Trà. Ảnh minh họa tạo bằng AI",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), thanh khoản căn hộ quý III/2026 đạt 2.099 căn, giảm 25% so với quý trước và giảm 24% so với cùng kỳ năm trước. MarketTimes (23.10.2026) ghi mức giảm cùng kỳ là so với năm 2025. Báo Xây dựng (23.10.2026) và MarketTimes cùng ghi nguồn cung sơ cấp giảm 14%, nguồn cung mới giảm gần 40%, thanh khoản giảm 25% so với quý trước và 24% so với cùng kỳ, nhưng không nêu số căn 4.385 hay 2.099.",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), căn hộ hạng B dẫn dắt thị trường, chiếm 46% tổng nguồn cung và 68% lượng tiêu thụ sơ cấp. Giao dịch chủ yếu tập trung tại các dự án mới mở bán, với mức giá trung bình 60–70 triệu đồng/m². Báo Xây dựng và MarketTimes (23.10.2026) ghi cùng hai tỷ lệ hạng B và cùng khoảng giá 60–70 triệu đồng/m². Mức 60–70 triệu đồng/m² là mức giá trung bình của nhóm giao dịch tại dự án mới mở bán mà báo cáo ghi nhận, không phải giá một căn hộ cụ thể và không phải giá The Camellia Sơn Trà.",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), phường Ngũ Hành Sơn đóng góp 40% nguồn cung và 43% lượng giao dịch toàn thành phố. Báo Xây dựng và MarketTimes (23.10.2026) ghi cùng hai tỷ lệ này. Phần còn lại của nguồn cung và giao dịch nằm ở các phường khác; bài này không tự chia phần còn lại vì ba nguồn không nêu tỷ lệ từng phường còn lại trong quý III.",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), mặt bằng giá sơ cấp căn hộ duy trì ổn định, đi kèm các chính sách ưu đãi nhằm kích cầu. Giá thứ cấp giảm khoảng 3–5% trước áp lực dòng tiền của nhóm nhà đầu tư dùng đòn bẩy tài chính. MarketTimes (23.10.2026) cũng ghi giá sơ cấp duy trì ổn định nhờ chính sách bán hàng, và giá thứ cấp giảm khoảng 3–5%. Đây là diễn biến đã ghi trong quý III/2026, không phải mức giảm áp cho một căn đang thương lượng.",
      },
      {
        heading: "Đất nền và nhà phố, biệt thự",
        text: "Phần này chỉ ghi ngắn, để không đọc nhầm số liệu đất nền thành số liệu căn hộ. Theo Báo Đầu tư (23.10.2026), nguồn cung sơ cấp đất nền duy trì ổn định so với quý trước, ở mức 1.547 nền từ 7 dự án. Nguồn cung mới tiếp tục khan hiếm, chỉ chiếm khoảng 4% tổng nguồn cung sơ cấp. Lượng tiêu thụ đạt 54 nền, tương đương khoảng 4% tổng cung sơ cấp, giảm 16% so với quý trước. Cùng bài nêu nguyên nhân chủ yếu là tâm lý thận trọng của người mua trước áp lực lãi suất. Báo Xây dựng (23.10.2026) ghi nguồn cung sơ cấp đất nền ổn định so với quý II/2026, nguồn cung mới khoảng 4%, tiêu thụ khoảng 4% và giảm 16% so với quý trước, với nguyên nhân là tâm lý thận trọng trước áp lực lãi suất vay ngân hàng.",
        image: "/images/news-dkra-q3-dn-2410-body-02.webp",
        imageAlt:
          "Đường đô thị Đà Nẵng dưới trời xanh, phía xa có công trình cao tầng. Nguồn cung đất nền tại TP Đà Nẵng tiếp tục khan hiếm. Ảnh: Thanh Đức/Báo Xây dựng",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), mặt bằng giá sơ cấp đất nền giảm khoảng 7% so với quý trước; chủ đầu tư vẫn dùng ưu đãi và hỗ trợ thanh toán. Giá thứ cấp đất nền giảm trung bình 3% so với quý trước, khi một bộ phận nhà đầu tư chủ động chỉnh giá để thu hồi dòng tiền. MarketTimes (23.10.2026) ghi cùng mức khoảng 7% ở giá sơ cấp và trung bình 3% ở giá thứ cấp. Các mức này là giá đất nền, không phải giá căn hộ chung cư.",
      },
      {
        text: "Với nhà phố và biệt thự, theo Báo Xây dựng (23.10.2026), nguồn cung sơ cấp quý III/2026 giảm 48% so với quý trước; khoảng 98% đến từ dự án đã mở bán trước đó. Lượng tiêu thụ giảm 68% so với quý trước. Phường Hải Vân chiếm 75% nguồn cung và 99% lượng tiêu thụ sơ cấp của phân khúc này. Giá thứ cấp giảm trung bình 10% so với quý trước. MarketTimes (23.10.2026) ghi cùng mức giảm 48% nguồn cung, 68% tiêu thụ và trung bình 10% ở giá thứ cấp, và nói giá sơ cấp vẫn ở mức cao do chi phí đầu vào cùng chi phí phát triển dự án. Hai bài không nêu một phần trăm giảm của giá sơ cấp nhà phố, biệt thự, nên bài này không ghi con số đó.",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), ông Võ Hồng Thắng dự báo nguồn cung đất nền mới trong quý IV/2026 tiếp tục khan hiếm, dao động khoảng 50–100 sản phẩm, và sức cầu đất nền khó phục hồi trong ngắn hạn. Câu này chỉ thuộc phân khúc đất nền.",
      },
      {
        heading: "Quý IV/2026 theo DKRA",
        text: "Theo Báo Đầu tư (23.10.2026), ông Võ Hồng Thắng, Phó tổng giám đốc phụ trách mảng DKRA Consulting kiêm Giám đốc Đầu tư DKRA Group, cho rằng nguồn cung căn hộ mới trong quý IV/2026 dự kiến khoảng 500–1.000 căn, tập trung tại phường Ngũ Hành Sơn, Hải Châu và Sơn Trà. Căn hộ hạng A và hạng B tiếp tục chiếm tỷ trọng chủ đạo, với định vị ở phân khúc trung cao cấp. Báo Xây dựng và MarketTimes (23.10.2026) ghi cùng khoảng 500–1.000 căn và cùng ba phường, trong phần dự báo của DKRA Consulting.",
        image: "/images/news-dkra-q3-dn-2410-body-03.webp",
        imageAlt:
          "Cầu Rồng bắc qua sông Hàn, bãi biển và bán đảo Sơn Trà dưới trời xanh có mây. Ảnh: Báo Đầu tư",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), ông Võ Hồng Thắng nói sức cầu căn hộ quý IV dự kiến chưa cải thiện rõ nét trước áp lực lãi suất cao và việc kiểm soát tín dụng. Mặt bằng giá sơ cấp tiếp tục neo cao do chi phí đầu vào gia tăng, trong khi giá thứ cấp được dự báo duy trì xu hướng giảm. Báo Xây dựng và MarketTimes (23.10.2026) ghi cùng nhận định này. «Neo cao» và «xu hướng giảm» là cách DKRA mô tả hai thị trường khác nhau: sơ cấp và thứ cấp. Bài này không đổi hai câu đó thành một dự báo giá sẽ đi lên.",
      },
      {
        text: "Theo Báo Đầu tư (23.10.2026), ông Võ Hồng Thắng nói: «Bước sang quý IV/2026, thị trường kỳ vọng hồi phục, tuy nhiên vẫn ở mức thấp, khó ghi nhận sự đột biến trong ngắn hạn». Câu này là dự báo của người phát ngôn DKRA, gắn với phần vừa nêu: sức cầu chưa cải thiện rõ và giá thứ cấp vẫn được dự báo theo hướng giảm. Không đọc chữ «hồi phục» thành lời hứa giá căn hộ sẽ tăng, và không đọc «mức thấp» thành một tỷ lệ phần trăm vì bài nguồn không đưa tỷ lệ đó.",
      },
      {
        text: "Việc phường Sơn Trà nằm trong danh sách vùng DKRA dự kiến có nguồn cung căn hộ mới quý IV, cùng Ngũ Hành Sơn và Hải Châu, chỉ là địa bàn nguồn cung được nêu. Danh sách đó không nói giá, pháp lý hay tiến độ của một dự án tại phường Sơn Trà.",
      },
      {
        heading: "Người mua căn hộ nên tự kiểm",
        text: "Số liệu cả thành phố không thay hồ sơ của một căn. Người đang xem căn hộ tại Đà Nẵng, kể cả tại phường Sơn Trà, có thể dùng báo cáo như bối cảnh thanh khoản, rồi tự kiểm năm việc dưới đây. Năm việc này không lấy từ một mục riêng của báo cáo DKRA; đó là cách đọc trung lập khi nguồn cung và thanh khoản cùng giảm.",
      },
      {
        text: "Pháp lý: hỏi văn bản của đúng dự án đang xem, gồm chủ trương đầu tư, quy hoạch được duyệt, giấy phép xây dựng nếu dự án thuộc diện phải có, và văn bản đủ điều kiện bán nhà ở hình thành trong tương lai nếu sản phẩm thuộc diện phải có văn bản đó. Một báo cáo nguồn cung toàn thành phố không thay các giấy tờ này.",
      },
      {
        text: "Tiến độ: hỏi tiến độ thi công và mốc bàn giao đang ghi trong hồ sơ của đúng dự án. Khoảng 500–1.000 căn nguồn cung mới quý IV là dự báo cho cả ba phường, không phải lịch bàn giao của một căn.",
      },
      {
        text: "Dòng tiền: đối chiếu tiến độ thanh toán trong hợp đồng với thu nhập và với khoản phải trả ngân hàng. Thanh khoản toàn thị trường giảm 25% so với quý trước, theo Báo Đầu tư (23.10.2026), không có nghĩa người bán một căn cụ thể sẽ giảm giá cho người mua.",
      },
      {
        text: "Nhu cầu ở thực: nếu mua để ở, câu hỏi là căn đó có khớp chỗ ở, diện tích và thời điểm nhận nhà hay không. Mức 60–70 triệu đồng/m² trong báo cáo là mức giá trung bình của giao dịch tại dự án mới mở bán, theo Báo Đầu tư (23.10.2026), không phải cách định giá một căn tại phường Sơn Trà.",
      },
      {
        text: "Thử lãi suất: với đất nền quý III, Báo Đầu tư (23.10.2026) nêu lượng tiêu thụ thấp chủ yếu vì người mua thận trọng trước áp lực lãi suất. Với căn hộ quý IV, ông Võ Hồng Thắng nói sức cầu chưa cải thiện rõ vì lãi suất cao và kiểm soát tín dụng. Người định vay nên tự tính số tiền phải trả khi hết thời gian lãi ưu đãi, theo lãi suất trong hợp đồng của ngân hàng sẽ vay. Báo cáo ngày 23/10 không công bố một mức lãi suất. Cách đọc mặt bằng lãi vay đang được bàn trên báo chí là một bài khác, không phải một số trong báo cáo DKRA này.",
        links: [
          {
            to: "/tin-tuc/nhnn-yeu-cau-giam-lai-suat-nguoi-vay-mua-nha-luu-y",
            label: "NHNN yêu cầu giảm lãi suất: người vay mua nhà nên đọc thế nào?",
          },
        ],
      },
      {
        heading: "Liên hệ Nhật tại Camellia Gallery",
        text: "Anh chị muốn hỏi pháp lý, tiến độ hoặc cách đối chiếu một căn tại phường Sơn Trà với nhu cầu ở của mình, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, 50 Bạch Đằng, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Buổi gặp để xem hồ sơ đã công bố trên website, không phải để nhận một dự báo giá sẽ tăng.",
        links: [{ to: "/lien-he", label: "Liên hệ — để lại nhu cầu" }],
      },
      {
        heading: "Câu hỏi thường gặp",
        text: "",
      },
      {
        heading: "Căn hộ Đà Nẵng quý III/2026 có bao nhiêu căn nguồn cung và tiêu thụ?",
        text: "Theo Báo Đầu tư (23.10.2026), dẫn báo cáo DKRA Consulting, nguồn cung sơ cấp là 4.385 căn từ 20 dự án, giảm 14% so với quý trước; nguồn cung mới giảm gần 40% so với quý II/2026. Lượng tiêu thụ là 2.099 căn, giảm 25% so với quý trước và 24% so với cùng kỳ năm trước. Hạng B chiếm 46% nguồn cung và 68% lượng tiêu thụ sơ cấp. Giao dịch chủ yếu ở dự án mới mở bán, mức giá trung bình 60–70 triệu đồng/m². Ngũ Hành Sơn chiếm 40% nguồn cung và 43% lượng giao dịch. Giá sơ cấp ổn định kèm ưu đãi; giá thứ cấp giảm khoảng 3–5%. Báo Xây dựng và MarketTimes cùng ngày xác nhận các tỷ lệ này, không nêu lại 4.385 căn và 2.099 căn.",
      },
      {
        heading: "DKRA dự báo căn hộ Đà Nẵng quý IV/2026 như thế nào?",
        text: "Theo Báo Đầu tư (23.10.2026), ông Võ Hồng Thắng (DKRA Consulting) dự báo nguồn cung mới khoảng 500–1.000 căn, tập trung ở phường Ngũ Hành Sơn, Hải Châu và Sơn Trà. Hạng A và hạng B được nêu là tiếp tục chiếm tỷ trọng chủ đạo, định vị trung cao cấp. Sức cầu chưa cải thiện rõ nét vì lãi suất cao và kiểm soát tín dụng. Giá sơ cấp được dự báo neo cao do chi phí đầu vào; giá thứ cấp được dự báo duy trì xu hướng giảm. Ông Thắng nói thị trường kỳ vọng hồi phục nhưng vẫn ở mức thấp, khó đột biến trong ngắn hạn. Đó là dự báo, không phải cam kết giá sẽ tăng. Báo Xây dựng và MarketTimes (23.10.2026) ghi cùng khoảng nguồn cung và cùng nhận định về sức cầu.",
      },
      {
        heading: "Người mua căn hộ tại Sơn Trà nên dùng báo cáo này để làm gì?",
        text: "Dùng báo cáo như bối cảnh thanh khoản của cả thành phố, rồi kiểm pháp lý, tiến độ, dòng tiền theo hợp đồng, nhu cầu ở thực và khả năng trả nợ khi hết lãi ưu đãi của đúng căn đang xem. Phường Sơn Trà chỉ được DKRA nêu là một trong ba phường dự kiến có nguồn cung căn hộ mới quý IV/2026, theo Báo Đầu tư (23.10.2026). Việc có tên trong danh sách đó không quyết định giá hay pháp lý của một dự án. Mức 60–70 triệu đồng/m² và mức giảm giá thứ cấp 3–5% là số của cả phân khúc căn hộ, không phải giá một căn tại Sơn Trà.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tóm tắt báo cáo thị trường bất động sản nhà ở TP. Đà Nẵng quý III/2026 của DKRA Consulting qua báo chí ngày 23.10.2026. Không phải thông báo của cơ quan nhà nước, không phải bản báo cáo gốc của DKRA, không phải thông cáo của The Camellia Sơn Trà, không phải khuyến nghị đầu tư và không cam kết thanh khoản, lợi nhuận hay diễn biến giá. Số liệu chỉ đúng theo bài nguồn tại thời điểm đăng; bài không tự tính thêm tỷ lệ hấp thụ. Nguồn: Báo Đầu tư, Ngọc Tân, 23.10.2026 — https://baodautu.vn/quy-iii2026-thi-truong-dat-nen-can-ho-da-nang-giam-nguon-cung-va-thanh-khoan-d729484.html ; Báo Xây dựng, Thanh Đức, 23.10.2026 — https://batdongsan.baoxaydung.vn/da-nang-suc-cau-phan-khuc-dat-nen-quy-3-2026-sut-giam-192261023162154172.htm ; MarketTimes, Mạnh Đại, 23.10.2026 — https://markettimes.vn/lai-suat-gay-suc-ep-nha-dau-tu-bat-dong-san-da-nang-chap-nhan-giam-gia-de-thoat-hang-133348.html. Ảnh đầu bài: Thanh Đức/Báo Xây dựng (chú thích gốc trên Báo Xây dựng: «Sức cầu trong quý III/2026 tại TP Đà Nẵng sụt giảm». Dòng tín dụng của báo là «Ảnh: Thanh Đức»). Ảnh đất nền trong bài: Thanh Đức/Báo Xây dựng (chú thích gốc: «Nguồn cung đất nền tại TP Đà Nẵng tiếp tục khan hiếm»). Ảnh Cầu Rồng: Báo Đầu tư, 23.10.2026. Ảnh khung cảnh chung cư: ảnh minh họa tạo bằng AI.",
      },
    ],
  },

  {
    slug: "sua-doi-3-luat-dat-dai-nha-o-kinh-doanh-bds-nguoi-mua-luu-y",
    date: "23.10.2026",
    title: "Sửa 3 luật đất đai, nhà ở, kinh doanh BĐS: người mua lưu ý gì?",
    excerpt:
      "Theo VietnamPlus (22.10.2026), Chính phủ trình Quốc hội 3 dự thảo sửa Luật Đất đai, Nhà ở và Kinh doanh BĐS. Dự thảo đang được xem xét, chưa có hiệu lực.",
    description:
      "Dự thảo sửa 3 luật đất đai, nhà ở, kinh doanh BĐS trình Quốc hội ngày 22/10/2026. Chưa có hiệu lực. Người mua căn hộ nên kiểm hồ sơ đang áp dụng.",
    image: "/images/news-3-luat-2310-og.jpg",
    imageAlt:
      "Phiên họp Quốc hội nghe trình bày tờ trình: người đứng tại bục giữa hội trường, đại biểu ngồi hai bên, phía sau là hàng cờ và màn hình lớn",
    imageCaption:
      "Quốc hội nghe trình bày Tờ trình về 3 dự án luật, 22/10/2026. Ảnh: Doãn Tấn/TTXVN",
    poster: "/images/news-3-luat-2310-hero.webp",
    gallery: ["/images/news-3-luat-2310-hero.webp"],
    body: [
      {
        text: "Ngày 22/10/2026, Bộ trưởng Bộ Tư pháp Hoàng Thanh Tùng trình bày Tờ trình của Chính phủ về 3 dự án luật sửa đổi: Luật Đất đai, Luật Nhà ở và Luật Kinh doanh bất động sản. Theo VietnamPlus (TTXVN, 22.10.2026), đây là các dự thảo đang được Quốc hội xem xét. Ba văn bản chưa được thông qua và chưa có hiệu lực. Người đang tìm mua căn hộ, nhất là nhà ở hình thành trong tương lai, nên đọc đây là định hướng sửa luật, không phải quy định đang áp dụng cho hợp đồng ký hôm nay.",
      },
      {
        text: "Bài này tóm tắt tin VietnamPlus (TTXVN) ngày 22.10.2026 và điểm tin Kinh tế Xây dựng (Petrotimes) ngày 23.10.2026. Đây là bài đọc cho người mua căn hộ, không phải thông báo chính thức của Quốc hội, không phải thông cáo của Chính phủ và không phải thông báo của The Camellia Sơn Trà.",
      },
      {
        text: "Ảnh đầu bài là phiên họp Quốc hội nghe trình bày Tờ trình về 3 dự án luật ngày 22/10/2026, theo chú thích VietnamPlus (Ảnh: Doãn Tấn/TTXVN). Ảnh ghi hội trường phiên họp, không phải phối cảnh một dự án nhà ở và không phải ảnh The Camellia Sơn Trà.",
      },
      {
        heading: "Tóm tắt nhanh (đọc trong 30 giây)",
        text: "• 22/10/2026: Bộ trưởng Bộ Tư pháp Hoàng Thanh Tùng trình Quốc hội 3 dự thảo sửa Luật Đất đai, Luật Nhà ở và Luật Kinh doanh bất động sản (VietnamPlus, 22.10.2026). • Cả ba là dự thảo đang được Quốc hội xem xét, chưa được thông qua, chưa có hiệu lực. • Luật Đất đai (sửa đổi): 13 chương, 112 điều, giảm 3 chương, 148 điều so với Luật Đất đai 2024; mỗi thửa đất gắn một mã định danh duy nhất; không còn quy định giá đất cụ thể. • Luật Nhà ở (sửa đổi): 13 chương, 130 điều, giảm 68 điều so với Luật Nhà ở 2023; chia 4 nhóm nhà ở; thêm chương nhà ở cho thuê. • Luật Kinh doanh bất động sản (sửa đổi): 10 chương, 61 điều, giảm 22 điều so với luật 2023; bổ sung quy trình giao dịch, mã định danh điện tử và cơ chế với 5% giá trị còn lại của hợp đồng. • Với bất động sản hình thành trong tương lai, báo cáo thẩm tra đề nghị quản lý khoản 5% trong tài khoản phong tỏa và phân biệt đặt cọc với huy động vốn (VietnamPlus, 22.10.2026). • Dự thảo nêu chủ đầu tư chỉ được thu đặt cọc tối đa 5% giá bán hoặc giá thuê mua khi bất động sản đủ điều kiện đưa vào kinh doanh; tại phiên 22/10, đại biểu Bùi Xuân Hải đề xuất nghiên cứu cho nhận đặt cọc sớm hơn (Kinh tế Xây dựng, 23.10.2026). • Hôm nay người mua vẫn kiểm tra theo quy định đang áp dụng: pháp lý dự án, điều kiện đưa vào kinh doanh, hợp đồng, bảo lãnh và thanh toán theo tiến độ.",
      },
      {
        heading: "Dự thảo Luật Đất đai sửa những điểm nào",
        text: "Theo VietnamPlus (22.10.2026), dự thảo Luật Đất đai (sửa đổi) có 13 chương, 112 điều, giảm 3 chương, 148 điều so với Luật Đất đai 2024. Cùng bài, mỗi thửa đất được gắn một mã định danh duy nhất trên cả nước. Dự thảo quy định rõ các trường hợp giao đất, cho thuê đất không qua đấu giá, đấu thầu. Dự thảo không còn quy định giá đất cụ thể, mà tập trung vào bảng giá đất và hệ số điều chỉnh giá đất. Dự thảo còn bổ sung quy định về bồi thường, hỗ trợ, tái định cư.",
      },
      {
        text: "Theo Kinh tế Xây dựng (Petrotimes, 23.10.2026), dự thảo Luật Đất đai đề xuất áp dụng khoản tiền lũy tiến với đất dự án chậm đưa vào sử dụng. Khoản tiền này là nội dung trong dự thảo đang được Quốc hội xem xét, chưa phải mức đang thu và chưa áp dụng cho một dự án cụ thể. Việc dự thảo tập trung vào bảng giá đất và hệ số điều chỉnh giá đất, theo VietnamPlus (22.10.2026), cũng không phải bảng giá một căn hộ và không phải thông báo điều chỉnh giá bán của một dự án.",
      },
      {
        heading: "Dự thảo Luật Nhà ở sửa những điểm nào",
        text: "Theo VietnamPlus (22.10.2026), dự thảo Luật Nhà ở (sửa đổi) có 13 chương, 130 điều, giảm 68 điều so với Luật Nhà ở 2023. Dự thảo phân nhà ở thành 4 nhóm: nhà ở thương mại, nhà ở cho thuê, nhà ở công vụ và nhà ở chính sách. Cùng bài, dự thảo bổ sung một chương mới về nhà ở cho thuê, luật hóa chính sách thí điểm nhà ở xã hội, và phân cấp 20/21 thủ tục hành chính cho địa phương.",
      },
      {
        text: "Bốn nhóm nhà ở trong dự thảo là cách sắp xếp lại phạm vi điều chỉnh của luật, chưa phải cách phân loại một căn hộ đang chào bán hôm nay. Người mua căn hộ thương mại không nên hiểu việc luật hóa chính sách thí điểm nhà ở xã hội là thay đổi điều kiện mua của căn thương mại mình đang xem. Dự thảo chưa có hiệu lực.",
      },
      {
        heading: "Dự thảo Luật Kinh doanh bất động sản sửa những điểm nào",
        text: "Theo VietnamPlus (22.10.2026), dự thảo Luật Kinh doanh bất động sản (sửa đổi) có 10 chương, 61 điều, giảm 22 điều so với luật năm 2023. Dự thảo bổ sung quy trình giao dịch bất động sản; cấp mã định danh điện tử cho từng tổ chức, cá nhân và bất động sản; mở rộng các loại hợp đồng chuyển nhượng. Cùng bài, dự thảo bổ sung cơ chế bảo đảm đối với 5% giá trị còn lại của hợp đồng, thông qua tài khoản phong tỏa hoặc theo thỏa thuận các bên.",
      },
      {
        text: "Theo VietnamPlus (22.10.2026), UBND cấp tỉnh quyết định việc chuyển nhượng toàn bộ hoặc một phần dự án. Dự thảo cắt giảm 4/12 thủ tục hành chính và đơn giản hóa 7 điều kiện đầu tư kinh doanh. Các con số này mô tả dự thảo, không có nghĩa một thủ tục của một dự án tại Đà Nẵng đã được bỏ từ ngày 22/10/2026.",
      },
      {
        heading: "Báo cáo thẩm tra nói gì với nhà hình thành trong tương lai",
        text: "Theo VietnamPlus (22.10.2026), Chủ nhiệm Ủy ban Kinh tế và Tài chính Phan Văn Mãi trình bày báo cáo thẩm tra. Với bất động sản hình thành trong tương lai, báo cáo đề nghị quy định nguyên tắc quản lý khoản 5% giá trị còn lại trong tài khoản phong tỏa, và phân biệt rõ thỏa thuận đặt cọc với huy động vốn. Cùng báo cáo đề nghị rà soát rõ các trường hợp bắt buộc công chứng, chứng thực, và bảo đảm thời điểm hiệu lực đồng bộ giữa 3 luật.",
      },
      {
        text: "Khoản 5% trong báo cáo thẩm tra là đề nghị đối với dự thảo, chưa phải quy tắc đang khóa tiền trong hợp đồng mua căn hộ hôm nay. Người mua không nên tự lấy 5% giá căn đang xem rồi coi đó là số tiền luật đã bắt phong tỏa. Khi 3 luật được thông qua, thời điểm hiệu lực còn phải đồng bộ, theo đúng nội dung báo cáo thẩm tra đã nêu. Bài này không ghi ngày các luật có hiệu lực, vì hai nguồn được dẫn không công bố ngày đó.",
      },
      {
        heading: "Đặt cọc tối đa 5% vẫn là nội dung dự thảo",
        text: "Theo Kinh tế Xây dựng (Petrotimes, 23.10.2026), dự thảo nêu chủ đầu tư chỉ được thu tiền đặt cọc tối đa 5% giá bán hoặc giá thuê mua khi bất động sản đủ điều kiện đưa vào kinh doanh. Cùng bài, tại phiên thảo luận ngày 22/10, đại biểu Bùi Xuân Hải đề xuất nghiên cứu cho phép nhận đặt cọc sớm hơn. Báo nhận định cần cân bằng đề xuất đó với việc bảo vệ người mua.",
      },
      {
        text: "Đề xuất của đại biểu là ý kiến tại phiên thảo luận, chưa phải điều khoản Quốc hội đã chốt. Mức trần 5% trong dự thảo cũng chưa có hiệu lực. Hôm nay, số tiền đặt cọc, thời điểm được nhận cọc và điều kiện đưa bất động sản vào kinh doanh vẫn phải đọc trong hồ sơ và hợp đồng của đúng dự án, theo quy định đang áp dụng, không suy từ dự thảo.",
      },
      {
        heading: "Người mua căn hộ hình thành trong tương lai kiểm gì hôm nay",
        text: "Ba dự thảo chưa có hiệu lực. Trong lúc Quốc hội còn xem xét, người định mua căn hộ hình thành trong tương lai vẫn đối chiếu hồ sơ của đúng dự án theo quy định đang áp dụng, không lấy dự thảo để bỏ qua giấy tờ hiện có.",
      },
      {
        text: "Pháp lý dự án: hỏi các văn bản đã ban hành cho đúng dự án, gồm chủ trương đầu tư, quy hoạch được duyệt và giấy phép xây dựng nếu dự án thuộc diện phải có giấy phép đó. Một tin sửa luật không thay các giấy tờ này.",
      },
      {
        text: "Điều kiện đưa vào kinh doanh: với nhà ở hình thành trong tương lai, hỏi văn bản xác nhận đủ điều kiện bán, nếu sản phẩm thuộc diện phải có văn bản đó, trước khi đặt cọc hoặc ký hợp đồng. Theo Kinh tế Xây dựng (23.10.2026), chính dự thảo còn gắn việc thu đặt cọc với điều kiện bất động sản đã đủ điều kiện đưa vào kinh doanh. Dù ở quy định đang áp dụng hay ở dự thảo, điều kiện đó không được thay bằng lời giới thiệu.",
      },
      {
        text: "Hợp đồng: đọc tiến độ thanh toán, thời điểm bàn giao, điều kiện nhận nhà và các phụ lục. Theo VietnamPlus (22.10.2026), báo cáo thẩm tra đề nghị phân biệt thỏa thuận đặt cọc với huy động vốn, và rà soát các trường hợp bắt buộc công chứng, chứng thực. Đó là việc của dự thảo. Với hợp đồng định ký hôm nay, người mua hỏi rõ khoản tiền mình trả là đặt cọc, là thanh toán theo tiến độ hay là khoản khác, và hỏi văn bản nào ghi nhận khoản đó.",
      },
      {
        text: "Bảo lãnh và thanh toán theo tiến độ: hỏi bảo lãnh ngân hàng đối với nghĩa vụ giao nhà, nếu giao dịch thuộc diện phải có bảo lãnh, và đối chiếu số tiền đã đóng với tiến độ ghi trong hợp đồng. Cơ chế bảo đảm 5% giá trị còn lại qua tài khoản phong tỏa hoặc theo thỏa thuận các bên, theo VietnamPlus (22.10.2026), nằm trong dự thảo Luật Kinh doanh bất động sản và chưa có hiệu lực. Không suy ra rằng mọi hợp đồng hôm nay đã có, hoặc chưa có, tài khoản phong tỏa.",
      },
      {
        text: "Bài này không kết luận hồ sơ của một dự án cụ thể đã đủ hay chưa đủ điều kiện đưa vào kinh doanh. Người mua đối chiếu văn bản của đúng dự án đang xem.",
      },
      {
        heading: "Hỏi hồ sơ tại Camellia Gallery",
        text: "Anh chị muốn được giải thích các mốc pháp lý đã công bố của The Camellia Sơn Trà, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng. The Camellia Sơn Trà nằm tại giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, Đà Nẵng. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Buổi gặp đối chiếu hồ sơ đã công bố trên website, không phải kết luận rằng 3 dự thảo luật đã có hiệu lực.",
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
        heading: "Ba dự thảo luật đã có hiệu lực chưa?",
        text: "Chưa. Theo VietnamPlus (22.10.2026), ngày 22/10/2026 Bộ trưởng Bộ Tư pháp Hoàng Thanh Tùng trình bày Tờ trình về 3 dự án luật sửa đổi: Luật Đất đai, Luật Nhà ở và Luật Kinh doanh bất động sản. Đó là dự thảo đang được Quốc hội xem xét. Báo cáo thẩm tra, cùng bài, còn đề nghị bảo đảm thời điểm hiệu lực đồng bộ giữa 3 luật. Bài này không phải thông báo các luật đã được thông qua.",
      },
      {
        heading: "Dự thảo nói gì về 5% giá trị hợp đồng và tiền đặt cọc?",
        text: "Theo VietnamPlus (22.10.2026), dự thảo Luật Kinh doanh bất động sản bổ sung cơ chế bảo đảm đối với 5% giá trị còn lại của hợp đồng, qua tài khoản phong tỏa hoặc theo thỏa thuận các bên. Báo cáo thẩm tra đề nghị quy định nguyên tắc quản lý khoản 5% đó trong tài khoản phong tỏa với bất động sản hình thành trong tương lai, và phân biệt thỏa thuận đặt cọc với huy động vốn. Theo Kinh tế Xây dựng (23.10.2026), dự thảo nêu chủ đầu tư chỉ được thu đặt cọc tối đa 5% giá bán hoặc giá thuê mua khi bất động sản đủ điều kiện đưa vào kinh doanh; đại biểu Bùi Xuân Hải đề xuất nghiên cứu cho nhận đặt cọc sớm hơn, và báo nhận định cần cân bằng với việc bảo vệ người mua. Các mức 5% này nằm trong dự thảo, chưa có hiệu lực.",
      },
      {
        heading: "Người mua căn hộ hình thành trong tương lai nên kiểm gì khi dự thảo chưa có hiệu lực?",
        text: "Kiểm pháp lý của đúng dự án, văn bản đủ điều kiện đưa nhà ở hình thành trong tương lai vào kinh doanh nếu sản phẩm thuộc diện phải có, nội dung hợp đồng, rồi bảo lãnh ngân hàng cùng tiến độ thanh toán đang ghi trong hồ sơ. Không lấy số chương, số điều hay mức 5% trong dự thảo để thay các giấy tờ đó. Theo VietnamPlus (22.10.2026) và Kinh tế Xây dựng (23.10.2026), 3 dự án luật vẫn đang được Quốc hội xem xét.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ báo chí về các dự thảo đang được Quốc hội xem xét, chưa được thông qua và chưa có hiệu lực. Bài không phải thông báo chính thức của Quốc hội hay Chính phủ, không phải thông báo của The Camellia Sơn Trà, không thay tư vấn pháp lý và không cam kết lợi nhuận hay giá. Nguồn: VietnamPlus (TTXVN), 22.10.2026 — https://www.vietnamplus.vn/chinh-phu-trinh-3-du-an-sua-doi-luat-dat-dai-nha-o-va-kinh-doanh-bat-dong-san-post1143533.vnp ; Kinh tế Xây dựng (Petrotimes), 23.10.2026 — https://kinhtexaydung.petrotimes.vn/diem-tin-xay-dung-bat-dong-san-ngay-23-10-de-xuat-sua-doi-ba-luat-ve-dat-dai-nha-o-va-kinh-doanh-747057.html. Ảnh: Doãn Tấn/TTXVN (Quốc hội nghe trình bày Tờ trình về 3 dự án luật, 22/10/2026), qua VietnamPlus.",
      },
    ],
  },

  {
    slug: "da-nang-chap-thuan-thi-diem-2-du-an-nha-o-thuong-mai",
    date: "23.10.2026",
    title: "Đà Nẵng chấp thuận thí điểm 2 dự án nhà ở thương mại: đọc sao?",
    excerpt:
      "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026), Thông báo 226/TB-UBND chấp thuận thí điểm 2 dự án nhà ở thương mại, tổng vốn 7.359 tỷ. Đây chưa phải mở bán.",
    description:
      "Thông báo 226/TB-UBND (22.10.2026) chấp thuận thí điểm Diamond Square và Sapphire Coast, tổng 7.359 tỷ đồng. Bước này chưa phải mở bán.",
    image: "/images/news-tb226-thi-diem-2310-og.jpg",
    imageAlt:
      "Hội trường kỳ họp: hàng ghế đại biểu nhìn lên bàn chủ tọa trên bục, phía sau là màn hình lớn và cờ",
    imageCaption:
      "Sáng 6/10/2026, HĐND thành phố Đà Nẵng khóa XI khai mạc kỳ họp thứ 6. Ảnh: Anh Dũng/TTXVN",
    poster: "/images/news-tb226-thi-diem-2310-hero.webp",
    gallery: ["/images/news-tb226-thi-diem-2310-hero.webp"],
    body: [
      {
        text: "Ngày 22/10/2026, Cổng Thông tin điện tử thành phố Đà Nẵng đưa tin UBND thành phố ban hành Thông báo số 226/TB-UBND, chấp thuận cho tổ chức kinh doanh bất động sản thực hiện dự án thí điểm nhà ở thương mại đợt 2, có hiệu lực từ 22/10/2026. Đợt này gồm Tổ hợp căn hộ cao cấp Diamond Square tại phường Hải Châu và Tổ hợp chung cư cao cấp cùng trung tâm thương mại dịch vụ Sapphire Coast tại phường Liên Chiểu, tổng mức đầu tư 7.359 tỷ đồng. Với người đang tìm nhà ở Đà Nẵng, đây là bước chấp thuận để các bên làm thủ tục tiếp theo, chưa phải tin mở bán và chưa phải thông báo một căn hộ đã có thể đặt mua.",
      },
      {
        text: "Bài này tóm tắt tin trên Cổng TTĐT TP Đà Nẵng lúc 16:27 ngày 22.10.2026, trang thông báo cùng ngày lúc 17:29, và bối cảnh Hội đồng nhân dân thành phố thông qua danh mục ngày 6/10 theo VietnamPlus (Anh Dũng, 06.10.2026). Đây là bài tổng hợp để người mua đọc tin, không phải thông báo của UBND thành phố và không phải thông cáo của The Camellia Sơn Trà.",
      },
      {
        heading: "Thông báo 226 chấp thuận điều gì",
        text: "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026, 16:27), UBND thành phố ban hành Thông báo số 226/TB-UBND về việc chấp thuận cho các tổ chức kinh doanh bất động sản được thực hiện dự án thí điểm nhà ở thương mại (đợt 2). Trang thông báo đăng lúc 17:29 cùng ngày ghi thông báo chấp thuận cho các tổ chức có tên trong danh sách kèm theo được thực hiện dự án thí điểm mà Hội đồng nhân dân thành phố đã thông qua.",
      },
      {
        text: "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026, 16:27), thông báo là căn cứ để các tổ chức và cơ quan nhà nước liên quan triển khai các bước tiếp theo, và có hiệu lực từ ngày 22/10/2026. Trang thông báo cùng ngày nói thông báo có hiệu lực kể từ ngày ký. Hai cách viết cùng chỉ một mốc: văn bản dùng để đi bước sau, không thay cho các giấy phép còn lại của từng dự án.",
      },
      {
        text: "Theo trang thông báo trên Cổng TTĐT TP Đà Nẵng (22.10.2026, 17:29), trong quá trình triển khai, chủ đầu tư của dự án thí điểm phải tuân thủ quy hoạch đã được phê duyệt, gồm chỉ tiêu dân số, điều kiện hạ tầng kỹ thuật, hạ tầng xã hội và các chỉ tiêu hạ tầng khác theo quy định của pháp luật, sau khi danh mục khu đất thí điểm được HĐND thành phố phê duyệt. Điều kiện dân số và hạ tầng vì vậy vẫn là việc phải đối chiếu ở hồ sơ quy hoạch, không được bỏ qua chỉ vì đã có thông báo chấp thuận.",
      },
      {
        heading: "Hai dự án được nêu trong đợt 2",
        text: "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026), dự án thứ nhất là Tổ hợp căn hộ cao cấp Diamond Square, do Công ty TNHH MTV Đầu tư Kinh Bắc – Đà Nẵng thực hiện, tại số 84 đường Hùng Vương, phường Hải Châu. Diện tích 11.170,6 m², tổng mức đầu tư 5.159 tỷ đồng, thời gian thực hiện từ quý II/2026 đến quý IV/2030. Bài không nêu số căn, giá bán hay ngày mở bán của Diamond Square.",
      },
      {
        text: "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026), dự án thứ hai là Tổ hợp chung cư cao cấp và Trung tâm thương mại dịch vụ Sapphire Coast, do Công ty Cổ phần Sapphire Coast thực hiện, tại khu C, vệt biệt thự Xuân Thiều – Nam Ô, phường Liên Chiểu. Diện tích 8.719,7 m², tổng mức đầu tư 2.200 tỷ đồng, thời gian thực hiện 36 tháng kể từ khi được chấp thuận chủ trương đầu tư. Mốc 36 tháng trong tin gắn với chấp thuận chủ trương đầu tư; bài ngày 22/10 không viết rằng Thông báo 226 chính là văn bản chấp thuận chủ trương đầu tư đó.",
      },
      {
        text: "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026), cả hai dự án thuộc trường hợp tổ chức kinh doanh bất động sản đang có quyền sử dụng đất. Tiêu đề tin ghi tổng vốn đầu tư của đợt này là 7.359 tỷ đồng, khớp với 5.159 tỷ đồng của Diamond Square cộng 2.200 tỷ đồng của Sapphire Coast. Bài này chỉ ghi các con số đã công bố, không bình luận năng lực doanh nghiệp và không so sánh chất lượng hai dự án.",
      },
      {
        heading: "Nghị quyết 171 và danh mục HĐND ngày 6/10",
        text: "Theo VietnamPlus (Anh Dũng, 06.10.2026), sáng 6/10, HĐND thành phố Đà Nẵng khóa XI, nhiệm kỳ 2026–2031, kỳ họp thứ 6 (kỳ họp chuyên đề), thông qua nghị quyết về danh mục khu đất dự kiến thực hiện dự án thí điểm theo Nghị quyết số 171/2024/QH15 của Quốc hội. Nghị quyết 171, theo cách VietnamPlus dẫn, là thí điểm nhà ở thương mại thông qua thỏa thuận về nhận quyền sử dụng đất hoặc đang có quyền sử dụng đất. Hai dự án trong tin 22/10 thuộc vế đang có quyền sử dụng đất, theo Cổng TTĐT TP Đà Nẵng.",
      },
      {
        text: "Theo VietnamPlus (06.10.2026), danh mục gồm 2 khu đất, tổng diện tích 23.828,6 m², được chuyển mục đích sang đất ở, không chiếm dụng đất trồng lúa, đất rừng phòng hộ, rừng đặc dụng hay rừng sản xuất. Cùng bài mô tả đúng hai dự án mà tin 22/10 sau đó nêu: Diamond Square 11.170,6 m², vốn 5.159 tỷ đồng, tiến độ quý II/2026–quý IV/2030; Sapphire Coast 8.719,7 m², vốn 2.200 tỷ đồng, 36 tháng kể từ khi được chấp thuận chủ trương đầu tư. VietnamPlus lúc đó ghi các doanh nghiệp đăng ký thực hiện; tin 22/10 ghi các doanh nghiệp được chấp thuận để thực hiện.",
      },
      {
        text: "Theo VietnamPlus (06.10.2026), HĐND thống nhất chủ trương bổ sung khu đất Khu C, vệt biệt thự Xuân Thiều – Nam Ô vào danh mục khu vực dự kiến phát triển nhà ở thương mại giai đoạn 2021–2030, trong đợt điều chỉnh Chương trình phát triển nhà ở thành phố gần nhất. Cùng bài, HĐND giao UBND thành phố triển khai đúng pháp luật về đất đai, đầu tư, quy hoạch, xây dựng, nhà ở và môi trường, và yêu cầu các sở, ngành rà soát chỉ tiêu dân số, tháo gỡ vướng mắc, hỗ trợ hoàn thiện thủ tục. Việc hỗ trợ thủ tục khác với việc dự án đã đủ điều kiện bán nhà.",
      },
      {
        text: "Theo VietnamPlus (06.10.2026), tổng diện tích danh mục 2 khu đất là 23.828,6 m². Cổng TTĐT TP Đà Nẵng (22.10.2026) ghi diện tích Diamond Square 11.170,6 m² và Sapphire Coast 8.719,7 m². Hai bài không giải thích vì sao tổng danh mục và tổng diện tích hai dự án không trùng nhau. Người đọc không nên tự cộng rồi kết luận một trong hai nguồn đã đăng sai; khi cần con số dùng cho giao dịch, đối chiếu văn bản danh mục của HĐND.",
      },
      {
        text: "Ảnh đầu bài là ảnh khai mạc kỳ họp HĐND thành phố Đà Nẵng khóa XI sáng 6/10/2026, theo chú thích VietnamPlus (Ảnh: Anh Dũng/TTXVN). Ảnh ghi hội trường kỳ họp, không phải phối cảnh Diamond Square hay Sapphire Coast và không phải ảnh The Camellia Sơn Trà.",
      },
      {
        heading: "Chấp thuận thí điểm chưa phải mở bán",
        text: "Người mua nhà ở Đà Nẵng nên tách ba lớp tin. Lớp một là Nghị quyết 171/2024/QH15, cơ chế thí điểm nhà ở thương mại qua thỏa thuận nhận quyền sử dụng đất hoặc qua đất tổ chức kinh doanh bất động sản đang có. Lớp hai là nghị quyết HĐND ngày 6/10/2026 đưa 2 khu đất vào danh mục. Lớp ba là Thông báo 226/TB-UBND ngày 22/10/2026, chấp thuận cho tổ chức được nêu thực hiện dự án thí điểm và làm căn cứ cho bước tiếp theo. Cả ba lớp, theo các bài đã dẫn, đều chưa phải thông báo mở bán.",
      },
      {
        text: "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026), lịch thực hiện Diamond Square được ghi từ quý II/2026 đến quý IV/2030. Mốc cuối quý IV/2030 là lịch thực hiện đã công bố, không phải ngày bàn giao một căn hộ cho người mua, vì tin không nói dự án đã mở bán. Với Sapphire Coast, 36 tháng được tính kể từ khi được chấp thuận chủ trương đầu tư; tin 22/10 không ghi ngày chấp thuận chủ trương đầu tư, nên người đọc chưa có căn cứ để tự cộng 36 tháng kể từ 22/10/2026.",
      },
      {
        text: "Hai bài nguồn không nêu số căn hộ, giá bán, ngân hàng bảo lãnh hay ngày mở giỏ hàng của Diamond Square và Sapphire Coast. Khi một tin sau này dùng chữ mở bán, người mua vẫn nên hỏi văn bản đủ điều kiện bán nhà ở hình thành trong tương lai, nếu sản phẩm thuộc diện phải có văn bản đó, cùng quy hoạch, chỉ tiêu dân số và hạ tầng mà thông báo ngày 22/10 đã nhắc phải tuân thủ. Chấp thuận thí điểm không thay các giấy tờ đó.",
      },
      {
        heading: "Muốn đối chiếu một dự án tại phường Sơn Trà",
        text: "Anh chị đang so các hướng nhà ở tại Đà Nẵng có thể xem thêm The Camellia Sơn Trà để đối chiếu một dự án đã công bố hồ sơ trên website này: giao lộ Lê Văn Lương – Lê Đức Thọ, phường Sơn Trà, tựa lưng vào bán đảo Sơn Trà, 469 căn, 25 tầng nổi và 2 hầm, pháp lý công bố là sổ hồng sở hữu lâu dài, bàn giao dự kiến 2028. MBLAND phát triển dự án, WELAND phát triển kinh doanh. Bài này không so giá giữa các dự án và không đưa lời khuyên giao dịch.",
      },
      {
        text: "Muốn hỏi vị trí, tiến độ hoặc pháp lý của The Camellia Sơn Trà, liên hệ Nhật (Nhat Elite Realty) qua hotline hoặc Zalo 0934 885 108, hoặc ghé Camellia Gallery — Tầng 9, Bạch Đằng Complex, Đà Nẵng.",
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
        heading: "Thông báo 226/TB-UBND có phải tin mở bán hai dự án không?",
        text: "Không. Theo Cổng TTĐT TP Đà Nẵng (22.10.2026), Thông báo 226/TB-UBND chấp thuận cho tổ chức kinh doanh bất động sản thực hiện dự án thí điểm nhà ở thương mại đợt 2 và là căn cứ để triển khai các bước tiếp theo, hiệu lực từ 22/10/2026. Tin không thông báo mở bán, không nêu số căn và không nêu giá bán của Diamond Square hay Sapphire Coast.",
      },
      {
        heading: "Hai dự án thí điểm nằm ở đâu và tổng vốn bao nhiêu?",
        text: "Theo Cổng TTĐT TP Đà Nẵng (22.10.2026), Diamond Square do Công ty TNHH MTV Đầu tư Kinh Bắc – Đà Nẵng thực hiện tại 84 Hùng Vương, phường Hải Châu, diện tích 11.170,6 m², vốn 5.159 tỷ đồng, thời gian thực hiện quý II/2026–quý IV/2030. Sapphire Coast do Công ty Cổ phần Sapphire Coast thực hiện tại khu C, vệt biệt thự Xuân Thiều – Nam Ô, phường Liên Chiểu, diện tích 8.719,7 m², vốn 2.200 tỷ đồng, 36 tháng kể từ khi được chấp thuận chủ trương đầu tư. Tổng vốn đợt này là 7.359 tỷ đồng. Cả hai thuộc trường hợp tổ chức đang có quyền sử dụng đất.",
      },
      {
        heading: "Người mua nhà ở Đà Nẵng nên đọc tin này thế nào?",
        text: "Nên đọc Thông báo 226 như bước chấp thuận để làm thủ tục tiếp, sau khi HĐND thông qua danh mục ngày 6/10/2026 theo VietnamPlus, trong cơ chế thí điểm của Nghị quyết 171/2024/QH15. Lịch Diamond Square đến quý IV/2030 và lịch 36 tháng của Sapphire Coast không phải ngày mở bán. Giá, số căn và điều kiện giao dịch chỉ có khi đúng dự án công bố hồ sơ bán, không suy ra từ thông báo chấp thuận thí điểm.",
      },
      {
        heading: "Lưu ý",
        text: "Lưu ý: Bài tổng hợp từ cổng thông tin thành phố và báo chí, không phải thông báo của UBND thành phố Đà Nẵng, không phải thông cáo của The Camellia Sơn Trà, không thay tư vấn pháp lý và không cam kết lợi nhuận hay giá. Nguồn: Cổng TTĐT TP Đà Nẵng, 22.10.2026, 16:27 — https://danang.gov.vn/vi/w/chap-thuan-thi-diem-2-du-an-nha-o-thuong-mai-voi-tong-von-dau-tu-7359-ty-dong ; Cổng TTĐT TP Đà Nẵng, trang thông báo, 22.10.2026, 17:29 — https://danang.gov.vn/vi/w/thong-bao-chap-thuan-cho-to-chuc-kinh-doanh-bat-dong-san-duoc-thuc-hien-du-an-thi-diem-nha-o-thuong-mai-dot-2 ; VietnamPlus, Anh Dũng, 06.10.2026 — https://www.vietnamplus.vn/da-nang-thi-diem-2-du-an-nha-o-thuong-mai-theo-nghi-quyet-171-cua-quoc-hoi-post1140320.vnp. Ảnh: Anh Dũng/TTXVN (khai mạc kỳ họp HĐND thành phố Đà Nẵng khóa XI, sáng 6/10/2026).",
      },
    ],
  },

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
