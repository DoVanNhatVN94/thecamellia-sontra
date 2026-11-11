# The Camellia Sơn Trà

Website marketing cho dự án căn hộ **The Camellia Sơn Trà** (Đà Nẵng). Bản production: https://thecamellia-sontra.com — apex là host duy nhất; `www` và alias `*.vercel.app` redirect 308 về apex.

Fact (giá sàn, quy mô, pháp lý) lấy từ `src/data/project.ts` và `docs/HANDOVER.md`. Không bịa số liệu. Giá sàn công bố mặc định: **từ 1,98 tỷ**.

## Stack

| Lớp | Công nghệ |
|-----|-----------|
| UI | React 19, Tailwind CSS 4, Radix UI, Lucide |
| App | TanStack Start, TanStack Router, TanStack Query |
| Bundler / SSR | Vite 8, Nitro preset `vercel` |
| Form | react-hook-form, Zod |
| Lead | `POST /api/leads` → Resend HTTP API (không SDK) |
| Đo lường | `@vercel/analytics`, `@vercel/speed-insights`, Meta Pixel (ID public trong `src/lib/meta-pixel.ts`) |

Không có tài khoản người dùng, không có database cho site marketing.

## Cấu trúc thư mục

```
src/data/project.ts          Fact, NEWS, loại căn, gallery
src/data/sales-plans.ts      4 phương án thanh toán
src/lib/seo.ts               Meta, JSON-LD, SITEMAP_PATHS
src/lib/leads.ts             Client form (honeypot, dwell, rate mềm)
src/lib/leads.server.ts      Server: validate, rate limit, Resend
src/routes/                  Trang marketing + src/routes/api/leads.ts
src/components/              UI, form, section
public/                      Ảnh, sitemap.xml, robots.txt, llms.txt
docs/                        Handover, runbook Vercel, lead email, AI smoke
scripts/generate-sitemap.mjs Sinh public/sitemap.xml
vercel.json                  Redirect host + cache header
```

Không có thư mục `server/`. Route server nằm trong `src/routes/`.

## Chạy và build local

Cần Node 22.

```bash
npm install
npm run dev        # Vite, 0.0.0.0:8080 (đúng script trong package.json)
npm run build      # vite build qua scripts/with-app-env.mjs
npm run typecheck
npm run lint
npm test
npm run sitemap    # sau khi thêm trang hoặc bài tin
```

Không tạo file `.env` trong repo. Không commit secret.

`npm run build` là lệnh Vercel chạy. Script bọc `scripts/with-app-env.mjs` đọc `.grok/app-env.json` (hiện chỉ `VITE_AUTH_ENABLED=false`). Site marketing không đọc cờ đó; file vẫn được giữ vì lệnh build và test hiện tại còn đọc nó.

## Biến môi trường (chỉ tên)

Đặt trên Vercel (Production và Preview). Chi tiết: `docs/vercel-runbook.md`, `docs/leads-email.md`.

| Tên | Phạm vi | Vai trò |
|-----|---------|---------|
| `VITE_SITE_URL` | Client | Canonical, `https://thecamellia-sontra.com` |
| `RESEND_API_KEY` | Server, Sensitive | Gửi mail lead |
| `LEADS_TO_EMAIL` | Server | Hộp thư nhận lead |
| `LEADS_FROM_EMAIL` | Server | Người gửi, domain đã verify trên Resend |

Thiếu một trong ba biến server thì `/api/leads` trả 503; form hiện fallback mailto / hotline / Zalo.

`VITE_FORMSUBMIT_EMAIL` là fallback cũ, không còn đường gửi chính.

## Deploy trên Vercel

1. Làm trên nhánh, mở Pull Request vào `main`. Không push thẳng `main`.
2. Vercel build preview. Check `Vercel` phải pass.
3. Chủ dự án xem preview trước. Chỉ merge khi chủ dự án trả lời OK rõ.
4. Merge `main` thì Vercel deploy production ra apex.

DNS ở Mắt Bão. Không đổi domain, DNS, hay env Vercel nếu chưa được yêu cầu. Rollback: PR revert, không sửa DNS cho một thay đổi code.

## Giới hạn rate limit form lead

`src/lib/leads.server.ts` đếm tối đa 5 POST / 10 phút / IP trong một `Map` trên bộ nhớ process (`globalThis`). Vercel chạy nhiều instance; mỗi instance có map riêng, và map mất khi instance lạnh. Đây là phanh mềm, cạnh honeypot, thời gian dwell, allowlist origin và Zod.

PR này không thêm dịch vụ trả phí và không thêm secret. Cách siết chung giữa các instance mà không cần vendor mới: rate limit của Vercel Firewall cho `POST /api/leads` (cài trên project, không nằm trong repo). Chưa bật.

## Tài liệu

| File | Nội dung |
|------|----------|
| `docs/HANDOVER.md` | Fact, kiến trúc, SEO, lịch sử PR, việc còn mở |
| `docs/vercel-runbook.md` | Domain, DNS, env, preview protection |
| `docs/leads-email.md` | Luồng `/api/leads` và Resend |
| `docs/ai-smoke-prompts.md` | Prompt kiểm AI |
| `AGENTS.project.md` | Quy trình cho trợ lý AI |

## Phần sandbox cố ý giữ lại

Các mục dưới không bị xoá trong đợt dọn này vì còn được site, lệnh build, hoặc test đọc — xoá sẽ đổi hành vi hoặc làm gãy `npm run build` / `npm test`:

- `.grok/` — `scripts/with-app-env.mjs` đọc `.grok/app-env.json` mỗi lần build; script QA và test còn đọc skill trong `.grok/skills/`.
- `src/components/preview-host-bridge.tsx` (và `src/lib/preview-host-bridge.ts`, `src/lib/preview-embedder-origin.ts`) — được mount trong `src/routes/__root.tsx`. Với khách trên apex component trả `null` và không gắn listener. Gỡ nó là sửa cây render production.
- Cổng `8080` trong `npm run dev` và `vite.config.ts` — lệnh dev local hiện tại. Production không dùng cổng này.
- `scripts/with-app-env.mjs` — wrapper của `npm run build` và `npm run dev`.
- Allowlist origin `*.grok-sandbox.com` trong `src/lib/leads.server.ts` — đang là hành vi API. Đổi allowlist sẽ đổi ai được gửi lead.
