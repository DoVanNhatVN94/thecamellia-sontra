# Vercel / DNS / Env — Ops Runbook

Runbook vận hành ngắn cho **The Camellia Sơn Trà** (`DoVanNhatVN94/thecamellia-sontra`).
Dùng khi kiểm tra domain, DNS Mat Bao, env Vercel, lead email, Preview Protection, và recovery.

Chi tiết lead email: [`docs/leads-email.md`](./leads-email.md).

---

## 1. Domain policy

| Host | Vai trò |
|---|---|
| **https://thecamellia-sontra.com** (apex) | **Production primary** — canonical URL |
| `www.thecamellia-sontra.com` | **308** → apex |
| `*.vercel.app` (production alias) | **308** → apex |

Redirects được khai báo trong `vercel.json` (host-based, permanent). SEO / OG / sitemap phải dùng apex (`VITE_SITE_URL`).

**Checklist nhanh**

- [ ] Mở apex → 200, HTTPS OK
- [ ] `www` → redirect 308/301 về apex (giữ path)
- [ ] Production `*.vercel.app` → redirect về apex

---

## 2. DNS (Mat Bao)

Registrar / DNS: **Mat Bao**. Không ghi cứng IP trong runbook — luôn đối chiếu **Vercel → Project → Settings → Domains** và **giá trị hiện tại trên Mat Bao**.

### Bản ghi quan trọng

| Mục đích | Loại (thường gặp) | Tên / Host | Giá trị |
|---|---|---|---|
| Apex → Vercel | **A** | `@` (apex) | **Theo Vercel Domains / giá trị hiện tại trên Mat Bao** |
| www → Vercel | **CNAME** | `www` | **Theo Vercel Domains / giá trị hiện tại trên Mat Bao** (thường `cname.vercel-dns.com` hoặc tương đương Vercel chỉ định) |
| Resend DKIM | **TXT** | `resend._domainkey` | **Theo Resend Domains / giá trị hiện tại trên Mat Bao** |
| Resend (MX/return path) | **CNAME** | `rsend` / `send` (đúng tên Resend hiện) | **Theo Resend Domains / giá trị hiện tại trên Mat Bao** |
| DMARC (tuỳ chọn) | **TXT** | `_dmarc` | **Theo chính sách hiện tại trên Mat Bao** (nếu đã thêm) |

### Lưu ý

- Thêm / sửa DNS xong: chờ propagate, rồi **Verify** trên Vercel Domains và Resend Domains.
- Không invent IP A-record — copy từ Vercel UI.
- Sau khi domain Resend **Verified**, `LEADS_FROM_EMAIL` dùng `leads@thecamellia-sontra.com`.

---

## 3. Vercel env checklist

**Project → Settings → Environment Variables.** Chỉ biến `VITE_*` vào browser; còn lại **server-only**.

| Biến | Scope | Ghi chú |
|---|---|---|
| `VITE_SITE_URL` | Client | `https://thecamellia-sontra.com` (apex, có `https://`) |
| `RESEND_API_KEY` | Server | Đánh dấu **Sensitive**; từ Resend → API Keys |
| `LEADS_TO_EMAIL` | Server | Inbox nhận lead |
| `LEADS_FROM_EMAIL` | Server | `leads@thecamellia-sontra.com` — domain đã verify trên Resend |

### Không còn primary

- **FormSubmit** / `VITE_FORMSUBMIT_EMAIL` **không còn đường gửi chính**.
- Mailto / hotline / Zalo chỉ là **fallback** khi `/api/leads` lỗi hoặc thiếu env (xem form client).

Áp dụng Production + Preview (và Development nếu cần local). Sau khi đổi env Sensitive: redeploy **một lần** cho môi trường đó — không spam redeploy.

---

## 4. Lead flow

```text
Form (client)  →  POST /api/leads  →  Resend API  →  LEADS_TO_EMAIL
```

- Route server: TanStack Start `/api/leads` (không lộ API key ra browser).
- Thiếu `RESEND_API_KEY` / `LEADS_TO_EMAIL` / `LEADS_FROM_EMAIL` → **503** JSON; UI hiện fallback.

### Khi lead không tới — kiểm tra đâu?

1. **Vercel → Deployments → (deployment) → Runtime Logs** — lỗi `/api/leads`, 4xx/503, Resend HTTP fail.
2. **Resend → Emails** (và Domains) — delivery, bounce, domain chưa Verified, FROM sai.
3. Env đúng môi trường (Production vs Preview) và đã redeploy sau khi set.

Chi tiết anti-bot / Zod: [`docs/leads-email.md`](./leads-email.md).

---

## 5. Preview Deployment Protection

| Môi trường | Khuyến nghị |
|---|---|
| **Preview** | Bật **Deployment Protection** (Vercel Authentication / team login) |
| **Production** | **Public** — không khoá visitor |

### Mở protected preview

1. Mở URL preview (`*.vercel.app` của PR/branch).
2. Đăng nhập bằng tài khoản **team / Vercel** được grant.
3. Sau khi auth, browse bình thường.

Production apex phải luôn public cho SEO và khách.

---

## 6. Hàng tháng

- [ ] **Vercel → Usage** — bandwidth, build minutes, function invocations; tránh bất ngờ bill.
- [ ] Không spam **Redeploy** chỉ để “refresh”; chỉ redeploy khi cần (env mới, rollback có chủ đích).
- [ ] Spot-check apex + www redirect + 1 form lead smoke (Preview hoặc Production có kiểm soát).

---

## 7. Recovery

| Nguyên tắc | Chi tiết |
|---|---|
| **Source of truth** | **GitHub** (`main`). Code / docs / `vercel.json` sống trên repo. |
| **Backup branches** | Trước thay đổi lớn: `backup/pre-<topic>-YYYY-MM-DD` từ `main` (ví dụ `backup/pre-p1-runbook-2026-09-22`). Không xoá vội. |
| **DNS / domain** | **User (owner)** — Mat Bao + Vercel Domains + Resend Domains. |
| **Code / PR / deploy hooks** | **Dev Agent** — branch, PR, merge theo quy trình; không merge khi user bảo “do NOT merge”. |

Rollback nhanh: checkout / revert commit trên GitHub → Vercel redeploy từ `main` (hoặc deploy backup branch nếu cần nóng). DNS hiếm khi cần rollback nếu chỉ đổi code.

---

## Liên kết nhanh

- Site: https://thecamellia-sontra.com
- Repo: https://github.com/DoVanNhatVN94/thecamellia-sontra
- Lead docs: [`docs/leads-email.md`](./leads-email.md)
