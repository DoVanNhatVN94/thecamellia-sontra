# The Camellia Sơn Trà — Tài liệu bàn giao (HANDOVER)

> **Đọc file này trước** khi làm bất kỳ việc dev / SEO / lead / DNS nào trên site.
> Cập nhật lần cuối: **24.09.2026** (Asia/Bangkok). Repo: `DoVanNhatVN94/thecamellia-sontra`.

---

## 1. Mục đích + cách dùng

File này là **bàn giao đầy đủ** để một AI assistant mới (tài khoản Grok Bot khác) tiếp nhận toàn bộ công việc phát triển, SEO/GEO và vận hành website [thecamellia-sontra.com](https://thecamellia-sontra.com).

**Cách dùng (assistant mới):**

1. Đọc toàn bộ file này một lần.
2. Đối chiếu fact với code: `src/data/project.ts`, `src/data/sales-plans.ts` — **code là nguồn sự thật**, không bịa số liệu.
3. Trước khi sửa: kiểm tra vấn đề → đề xuất phương án → xin duyệt khi ảnh hưởng lớn (xem mục 8).
4. Git: backup → nhánh phụ → verify → PR → merge (không push thẳng `main`).
5. Sau khi xong: gửi review kèm ảnh chụp live; trả lời bằng **tiếng Việt**.

Tài liệu liên quan trong repo:

| File | Vai trò |
|------|---------|
| `docs/vercel-runbook.md` | Domain, DNS Mắt Bão, env Vercel, Preview Protection, recovery |
| `docs/leads-email.md` | Lead form + Resend + anti-bot |
| `docs/ai-smoke-prompts.md` | Bộ prompt kiểm AI (ChatGPT / Perplexity / Gemini) |
| Chiến lược 90 ngày (ngoài repo) | `/home/box/agent-data/workflows/thecamellia-seo-ai-strategy/STRATEGY.md` |

---

## 2. Fact dự án chuẩn (single source of truth)

**Không bao giờ dùng giá 1,72 tỷ** — giá công bố đúng là **từ 1,98 tỷ**.

| Hạng mục | Giá trị chuẩn |
|----------|----------------|
| Tên | The Camellia Sơn Trà |
| Quy mô | **469 căn** · **25 tầng nổi + 2 hầm** |
| Giá từ | **1,98 tỷ** (Studio) |
| Pháp lý | **Sổ hồng sở hữu lâu dài** |
| Địa chỉ | Giao lộ **Lê Văn Lương – Lê Đức Thọ**, P. Sơn Trà, Đà Nẵng |
| CĐT | Công ty TNHH Địa ốc Thành Lâm |
| Phát triển | MBLAND |
| Kinh doanh | WELAND |
| Phân phối | DKRA Virgo *(có trong nội dung/NEWS/PARTNERS; chưa có field riêng trên `PROJECT`)* |
| Thiết kế / Nhà thầu | Archivina · Tập đoàn Xây dựng Delta |
| Hotline / Zalo | **0934 885 108** (`https://zalo.me/0934885108`) |
| Bàn giao | Dự kiến **2028** (một số bài ghi Q1/2028) |
| Email nhận lead | **xem Vercel env** (`LEADS_TO_EMAIL`) — không paste email cá nhân vào code/SEO công khai mới |

**Chính sách bán hàng (theo đợt — luôn ghi “theo đợt/ngân hàng tại thời điểm ký”):**

| Phương án | Điểm nổi bật |
|-----------|----------------|
| HTLS | Vay đến **70%** · hỗ trợ lãi **0% trong 18 tháng** (theo đợt/NH) |
| Chuẩn | Chiết khấu **4%** |
| TTS 95% | Thanh toán sớm 95% · CK đến **13%** |
| Thảnh thơi | Thanh toán **50%** nhận nhà · CK **2%** |
| Early Bird | CK **3%** · tối đa **100 căn** (khi còn suất) |
| Phí quản lý | **Miễn 12 tháng** (theo chính sách khi ký) |

Nguồn code:

- Fact / loại căn / tin / gallery / tour: `src/data/project.ts`
- 4 phương án thanh toán chi tiết: `src/data/sales-plans.ts`
- SEO meta / JSON-LD / `SITEMAP_PATHS`: `src/lib/seo.ts`

---

## 3. Kiến trúc kỹ thuật

### Stack (từ `package.json` + `vite.config.ts`)

| Lớp | Công nghệ |
|-----|-----------|
| UI | React 19 · Tailwind CSS 4 (`@tailwindcss/vite`) · Radix UI · Lucide |
| App framework | **TanStack Start** (`@tanstack/react-start`) + TanStack Router / Query |
| Bundler / SSR | **Vite 8** + plugin React |
| Server / deploy | **Nitro** (`nitro` beta, preset `vercel`) |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` |
| Form / validate | react-hook-form · Zod |
| Khác | better-auth, PGLite/pg (app-data nội bộ — không phải CMS marketing) |

### Hosting & domain

| Mục | Chi tiết |
|-----|----------|
| Host | **Vercel** — team `dragonkingdn99gmailcoms-projects` |
| Production primary | Apex **`https://thecamellia-sontra.com`** |
| Redirect | `www` và `*.vercel.app` (alias prod) **308** → apex (`vercel.json`) |
| DNS | **Mắt Bão** (Mat Bao) — xem `docs/vercel-runbook.md` |
| Preview | **Vercel Authentication** (protected) |
| Production | **Public** (bắt buộc cho SEO) |
| Canonical env | `VITE_SITE_URL=https://thecamellia-sontra.com` (client) |

### Bản đồ thư mục / file quan trọng

```
src/data/project.ts          # Fact, NEWS, UNIT_TYPES, galleries, VIRTUAL_TOUR
src/data/sales-plans.ts      # 4 PA thanh toán + meta
src/lib/seo.ts               # meta, JSON-LD, SITEMAP_PATHS, SAME_AS
src/lib/leads.ts             # client: POST /api/leads, honeypot, dwell, rate
src/lib/leads.server.ts      # server: Resend, IP rate limit, validate
src/routes/api/leads.ts      # route handler TanStack Start
src/components/lead-form.tsx # UX form compact
src/components/sections/     # homepage sections + answer-capsule
src/routes/*.tsx             # trang marketing
public/sitemap.xml           # sinh bằng npm run sitemap
public/robots.txt            # Allow AI bots + Sitemap
public/llms.txt              # GEO / AI crawlers
docs/                        # runbook, leads, AI smoke, HANDOVER
scripts/generate-sitemap.mjs # giữ sync với SITEMAP_PATHS (có rủi ro drift)
vercel.json                  # redirects host + cache headers
```

### Lệnh thường dùng

```bash
npm run dev          # Vite dev :8080
npm run build        # vite build (+ migrate-on-build nếu có)
npm run typecheck
npm run lint
npm run sitemap      # regenerate public/sitemap.xml
npm test
```

**Cảnh báo drift sitemap:** `SITEMAP_PATHS` trong `src/lib/seo.ts` và danh sách `STATIC` + parse NEWS trong `scripts/generate-sitemap.mjs` phải khớp. Sau khi thêm trang/bài → cập nhật cả hai (hoặc chạy `npm run sitemap` và diff) rồi commit `public/sitemap.xml`.

---

## 4. Lead form

**Đường chính:** form → `POST /api/leads` → Resend API → inbox (`LEADS_TO_EMAIL`).

| Thành phần | File / ghi chú |
|------------|----------------|
| Client | `src/lib/leads.ts` + `src/components/lead-form.tsx` |
| Server | `src/lib/leads.server.ts` · route `src/routes/api/leads.ts` |
| Chi tiết ops | `docs/leads-email.md` |

**Anti-bot mềm (không captcha):**

- Honeypot (company / website / honey) → silent `200 { ok: true }`, không gửi mail
- Dwell time: form phải mở ≥ ~2,5s (`openedAt`)
- Rate limit IP in-memory trên server (không distributed giữa các instance Vercel)
- Rate limit mềm phía client (sessionStorage)
- Origin allowlist + Zod validate SĐT VN

**Env server-only (không `VITE_`):**

| Biến | Vai trò |
|------|---------|
| `RESEND_API_KEY` | API key Resend (Sensitive) |
| `LEADS_TO_EMAIL` | Email nhận lead — **xem Vercel env** |
| `LEADS_FROM_EMAIL` | Ví dụ `leads@thecamellia-sontra.com` (domain đã verify) |

Client: `VITE_SITE_URL` (apex). Thiếu 3 biến server → `/api/leads` trả **503**; UI hiện fallback mailto / hotline / Zalo.

**DNS gửi mail (Mắt Bão + Resend Domains):** DKIM / return-path / DMARC theo Resend (ví dụ `resend._domainkey`, `send`/`rsend`, `_dmarc`) — **copy giá trị từ Resend UI**, không invent. Chi tiết: `docs/vercel-runbook.md`.

**FormSubmit** (`VITE_FORMSUBMIT_EMAIL`): **legacy fallback only** — không còn đường gửi chính.

**UX form:** bước đầu gọn **họ tên + SĐT** (+ loại căn); email / nhu cầu sau nút **「Thêm thông tin」**.

---

## 5. SEO + GEO — hiện trạng

### Đã có

| Hạng mục | Trạng thái |
|----------|------------|
| GSC | Domain property `thecamellia-sontra.com` đã verify + sitemap đã submit (tài khoản Google của chủ dự án) |
| Sitemap | Nguồn `SITEMAP_PATHS` (`src/lib/seo.ts`) + `npm run sitemap` → `public/sitemap.xml` |
| `robots.txt` | Allow: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Anthropic-AI, PerplexityBot, Google-Extended, Googlebot, Bingbot, Applebot… · Disallow `/sua-anh`, `/embed`, `/api` |
| `llms.txt` | Fact + link trang/bài cho AI crawler |
| JSON-LD | `WebSite`, `ApartmentComplex`, `RealEstateAgent`, `Organization`, `FAQPage`, `NewsArticle`, `BreadcrumbList`, `GeoCoordinates` |
| Answer capsules | Trên `/can-ho`, `/gioi-thieu` (`src/components/sections/answer-capsule.tsx`) |
| `sameAs` | **Chỉ Zalo** (`SAME_AS` trong `seo.ts`) — chỉ thêm profile thật, không bịa |
| AggregateRating / Offer giả | **Không** — Offer schema chỉ khi có bảng giá có ngày |

### Tóm tắt chiến lược 90 ngày (STRATEGY.md)

**Mục tiêu:** thống trị brand SERP; top 5–10 vài non-brand; AI trả lời đúng fact; convert về `/lien-he` hoặc Zalo.

**Nguyên tắc:** một host canonical (apex); một URL / intent; single source of truth fact; bài thật + OG JPEG + canonical + sitemap/llms; đo GSC trước khi đoán content tiếp.

**Keyword map (rút gọn):** brand → `/`; giá/loại căn → `/can-ho` → CTA `/lien-he`; sở hữu lâu dài / Mân Thái / tiến độ → bài tin + fact sheet.

**Lịch nội dung 90 ngày:**

| Giai đoạn | Nội dung | Trạng thái |
|-----------|----------|------------|
| **Tháng 1** | Fact sheet, FAQ sở hữu lâu dài, tiến độ, giỏ Studio/1PN/2PN, vị trí Sơn Trà–Mân Thái | **Xong** |
| **Tháng 2 W5–W7** | Chính sách HTLS/CK/Early Bird · tiện ích 42 · hướng dẫn Tour 360 | **Shipped 23.09.2026** (PR #34) + Gói A Tour 360/schema (PR #33) |
| **Tháng 2 W8** | So sánh khu vực trung lập | **Tiếp theo** |
| **Tháng 3** | Recap Premier Launch sâu hơn · Q&A mốc pháp lý · video+transcript · retune title/meta từ GSC | Chưa |
| Indexing | Request indexing 3 bài Month 2 + `/kham-pha` trên GSC | Cần làm |
| AI smoke | Chạy `docs/ai-smoke-prompts.md` (đặc biệt giá **1,98** vs sai **1,72**) | Định kỳ |
| Bing | **Luna** sở hữu / Webmaster — Dev không trùng việc indexing Bing |

Cadence ops gợi ý trong STRATEGY: thứ Hai GSC+Analytics+www; biweekly tiến độ+1 bài; monthly fact audit + AI test + Lighthouse.

---

## 6. Danh sách trang + bài tin (live / sitemap)

**Trang tĩnh**

| URL | Vai trò |
|-----|---------|
| `https://thecamellia-sontra.com/` | Brand hub |
| `/can-ho` | Loại căn + giá + view |
| `/tien-ich` | 42 tiện ích |
| `/kham-pha` | Tour 360 PanaMotion |
| `/tin-tuc` | Hub tin |
| `/gioi-thieu` | Fact sheet |
| `/lien-he` | Conversion / form |

**Bài tin** (`/tin-tuc/<slug>`) — theo `NEWS` trong `project.ts` / sitemap:

| Ngày | Slug |
|------|------|
| 23.09.2026 | `chinh-sach-ban-hang-htls-early-bird-chiet-khau` |
| 23.09.2026 | `tien-ich-the-camellia-wellness-nature-community` |
| 23.09.2026 | `huong-dan-tour-360-the-camellia-son-tra` |
| 22.09.2026 | `tich-san-vinh-cuu-di-san` |
| 18.09.2026 | `vi-sao-son-tra-man-thai` |
| 17.09.2026 | `tien-do-thi-cong-minh-chung-cam-ket` |
| 17.09.2026 | `gio-hang-studio-1pn-2pn-phu-hop-ai` |
| 17.09.2026 | `can-ho-son-tra-so-huu-lau-dai` |
| 12.09.2026 | `su-kien-mo-ban-chinh-thuc-12-09-2026` |
| 09.09.2026 | `gio-hang-chinh-thuc-mo-09-09-2026` |
| 08.09.2026 | `chinh-thuc-ra-hang-09-09-2026` |
| 12.08.2026 | `can-ho-bien-so-huu-lau-dai-son-tra` |
| 31.07.2026 | `mbland-ra-mat-du-an-dau-tien-tai-da-nang` |
| 08.07.2026 | `ceo-meeting-the-camellia-son-tra` |

Không index: `/sua-anh`, `/embed`, `/api/*`.

---

## 7. Lịch sử thay đổi (PR đã merge)

Thời gian **Asia/Bangkok (ICT = UTC+7)**. Ưu tiên #22–#34.

| PR | Ngày (ICT) | Mục đích (1 dòng) |
|----|------------|-------------------|
| **#34** | 23.09.2026 11:36 | Month 2 Luna: HTLS, tiện ích, Tour 360 |
| **#33** | 23.09.2026 11:33 | SEO+GEO Gói A: Tour 360, answer capsules, schema, AI smoke |
| **#32** | 22.09.2026 20:02 | UX P2: CountUp, filter fade, taps, scrim, news, Duplex |
| **#31** | 22.09.2026 16:45 | UX P0b: hero dots trên sticky CTA |
| **#30** | 22.09.2026 16:10 | UX Sprint 1 P1: form compact, labels, payment teaser, news 16:9 |
| **#29** | 22.09.2026 16:07 | UX P0: hero dots tránh sticky CTA mobile |
| **#28** | 22.09.2026 15:25 | Tối ưu ảnh bài Tích sản |
| **#27** | 22.09.2026 15:02 | Bài Tích sản vĩnh cửu |
| **#26** | 22.09.2026 13:29 | Docs runbook Vercel/DNS/env |
| **#25** | 22.09.2026 10:31 | First-party `/api/leads` + Resend |
| **#24** | 21.09.2026 11:12 | Mid-homepage visual upgrade (Phase A) |
| **#23** | 18.09.2026 18:43 | Ẩn chrome YouTube Premier Launch |
| **#22** | 18.09.2026 18:22 | Embed YouTube Premier Launch |
| #21 | 18.09.2026 10:59 | SEO vị trí Sơn Trà / Mân Thái |
| #20 | 17.09.2026 19:10 | sameAs Zalo |
| #19 | 17.09.2026 19:06 | Tiến độ 17.09 + giỏ Studio/1PN/2PN |
| #17 | 17.09.2026 16:39 | FAQ sở hữu lâu dài |
| #16 | 17.09.2026 16:31 | Fact sheet `/gioi-thieu` |
| #15 | 17.09.2026 16:26 | Audit packs: form hygiene, perf, sitemap |
| #14 | 16.09.2026 16:04 | Meta/OG/alts/titles/llms |
| #13 | 16.09.2026 11:17 | Redirect www + vercel.app → apex |
| #12 | 16.09.2026 10:33 | Canonical SEO → thecamellia-sontra.com |
| #11–#1 | 15.09.2026 | Perf, a11y, gallery, tin tiến độ, Speed Insights, UX P0/P1 |

---

## 8. Quy trình làm việc chủ dự án muốn

**Rất quan trọng — assistant mới phải tuân thủ:**

1. **Trước khi code:** kiểm tra / tái hiện vấn đề → đề xuất phương án (kèm phạm vi ảnh hưởng & rủi ro) → **xin duyệt** khi ảnh hưởng lớn (SEO, DNS, env, redesign, đổi fact).
2. **Git:** backup branch nếu cần → **nhánh phụ** → verify (typecheck/lint/smoke) → **PR** → merge vào `main` (đã được user approve cho handover này và các PR trước).
3. **Luôn báo rõ** phạm vi ảnh hưởng / rủi ro khi sửa (SEO index, form lead, redirect, ảnh LCP…).
4. **Gallery / ảnh:** ưu tiên khung ngang **16:9**; không cắt mất ý poster (logo, mặt, headline); bias crop `object-top` khi cần.
5. **Tối ưu ảnh trước khi lên repo:** WebP khoảng **&lt;200KB**; OG **JPEG 1200×630** (hoặc đúng dims đã khai báo trong `OG_IMAGE_DIMS`).
6. **Không bịa số liệu** — chỉ dùng số đã có trên site / `project.ts` / `sales-plans.ts`.
7. **Trả lời bằng tiếng Việt.**
8. **Sau khi xong:** gửi review kèm **ảnh chụp live** (Production hoặc Preview đã auth).

---

## 9. Chia việc với Luna (trợ lý nội dung)

| Vai trò | Phạm vi |
|---------|---------|
| **Dev (AI / eng)** | Code, schema JSON-LD, form/leads, GSC (kỹ thuật), DNS/env wiring, sitemap/`llms.txt`, UX, PR |
| **Luna** | Viết bài, copy, ảnh bài, **Bing Webmaster** |

**Quy tắc phối hợp:**

- **Ping trước** khi sửa file dùng chung: `project.ts`, `seo.ts`, sitemap, `llms.txt`, sales-plans.
- **Không trùng việc indexing:** Dev lo GSC; Luna lo Bing.
- Caption / post Facebook phải dùng giá **1,98 tỷ** (không 1,72).

---

## 10. Routine đang chạy

### 「Camellia GSC tuần」

- **Khi:** mỗi **Thứ Hai 9:00 sáng giờ VN** (Asia/Bangkok).
- **Việc:** kiểm tra GSC (index coverage, truy vấn, CTR), kiểm tra redirect `www` → apex, báo thay đổi bất thường.
- **Lưu ý:** routine gắn tài khoản Grok Bot cũ — **cần tạo lại** trên tài khoản assistant mới + quyền GSC qua Google của chủ dự án.

---

## 11. Việc còn mở / đề xuất tiếp

| Hạng mục | Ghi chú |
|----------|---------|
| Exit runbook rời Vercel | Cloudflare Pages / Netlify + Nitro, DNS cutover — **chưa ghi** trong repo |
| GSC indexing | Request indexing **3 bài Month 2** + `/kham-pha` |
| Month 2 W8 | Bài so sánh khu vực trung lập |
| Month 3 | Theo calendar STRATEGY (recap, pháp lý Q&A, video+transcript, retune meta) |
| Caption Facebook | Luôn **1,98 tỷ** |
| UX residual nhỏ | Filter fade luôn hiện; CountUp dưới fold; nav desktop dày |
| Offer schema | Chỉ khi có **bảng giá có ngày** |
| Google Business Profile | Chỉ nếu xác minh được; NAP khớp site; không tạo listing giả |
| AI smoke | Chạy định kỳ `docs/ai-smoke-prompts.md` |
| Sync sitemap | Sau mọi bài/trang mới: `npm run sitemap` + commit |

---

## 12. Kết nối cần có ở tài khoản mới

| Kết nối | Khi nào cần |
|---------|-------------|
| **GitHub** | Repo `DoVanNhatVN94/thecamellia-sontra` (`gh` / git) — bắt buộc |
| **Vercel** | Deploy, env, Domains, Runtime Logs, Preview auth — team `dragonkingdn99gmailcoms-projects` |
| **Google Drive / Gmail** | Tuỳ — bàn giao file, đính kèm |
| **GSC** | Qua tài khoản Google của **chủ dự án** (domain property) |
| **Resend / Mắt Bão** | Chỉ khi sửa DNS gửi mail hoặc domain email |
| **Bing Webmaster** | Luna — không bắt buộc cho Dev |

**Không** commit secret (API key, token, mật khẩu). Chỉ ghi **tên** biến môi trường.

---

## Phụ lục nhanh — “đừng làm”

- Đổi giá thành 1,72 tỷ hoặc số không có trong `project.ts`.
- Thêm `sameAs` / AggregateRating / Offer bịa.
- Index `/api`, `/sua-anh`, `/embed`.
- Sửa Production DNS/env không xin duyệt + không đối chiếu runbook.
- Merge thẳng `main` không PR (trừ khi chủ dự án ra lệnh rõ).
- Đăng ảnh nặng / crop cắt poster / OG không phải JPEG đúng size.

---

*Hết HANDOVER. Cập nhật file này khi đổi fact, stack, hoặc quy trình — PR docs-only.*
