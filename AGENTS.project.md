# AGENTS.project.md — Hướng dẫn dự án The Camellia Sơn Trà

> Dành cho mọi trợ lý AI làm việc trên repo này (Higgsfield Supercomputer, Claude Code, Cursor, Codex, Copilot…).
> File này ưu tiên hơn phần "App Builder Workspace" trong `AGENTS.md` (phần đó là quy tắc sandbox cũ của Grok Build).

## Đọc trước khi làm
1. `docs/HANDOVER.md` — tài liệu bàn giao đầy đủ, **nguồn chuẩn** về fact, kiến trúc, SEO/GEO, lịch sử PR, việc còn mở.
2. `docs/vercel-runbook.md` — domain, DNS, biến môi trường, deploy.
3. `docs/leads-email.md` — luồng form lead `/api/leads` + Resend.

## Dự án
- Site: https://thecamellia-sontra.com (apex là host Production duy nhất; `www` và `*.vercel.app` redirect 308 về apex).
- Stack: Vite + React + TypeScript, TanStack Start/Router, Tailwind v4, Nitro; host trên Vercel. Deploy tự động khi merge vào `main`.
- DNS ở Mắt Bão. Lead form gửi qua Resend (biến môi trường nằm trên Vercel, **không** commit key, **không** tạo `.env`).

## Quy tắc bắt buộc
- **Không push thẳng lên `main`** (đã bị chặn bằng branch protection). Làm theo mục "Quy trình PR → preview → merge" bên dưới.
- Trước thay đổi có ảnh hưởng: kiểm tra vấn đề, **đề xuất phương án**, chờ đồng ý.
- Mỗi thay đổi phải báo rõ: **phạm vi** (file nào, có đụng code/form/SEO/file dùng chung không), **ảnh hưởng**, **rủi ro**, cách rollback.
- Thay đổi rủi ro: tạo nhánh backup trước. Chạy `npm run build` (và typecheck) phải pass trước khi đề nghị merge.
- **Không bịa số liệu.** Mọi fact phải khớp mục "Fact dự án chuẩn" trong `docs/HANDOVER.md` và `src/lib/project.ts`. Giá **từ 1,98 tỷ** (không phải 1,72).
- Ảnh: tối ưu trước khi đưa lên (WebP cho ảnh trang; ảnh OG là JPEG 1200×630). Ưu tiên khung ngang 16:9, không cắt mất nội dung chính của poster.
- File dùng chung cần cẩn thận, báo trước khi sửa: `src/lib/project.ts`, `src/lib/seo.ts`, sitemap, `public/llms.txt`, form/`/api/leads`, redirect.
- Sau khi ship: kiểm tra trang live (desktop + mobile) và báo lại kèm ảnh chụp.

## Quy trình PR → preview → merge (bắt buộc)
Nhánh `main` đã bật branch protection: không push thẳng được, phải qua Pull Request và check `Vercel` phải pass.
1. Tạo nhánh mới từ `main` (đặt tên kiểu `fix/...`, `feat/...`, `docs/...`, `content/...`).
2. Commit, push nhánh, mở Pull Request vào `main`. Mô tả PR ghi rõ: làm gì, file nào, phạm vi, ảnh hưởng, rủi ro, cách rollback.
3. Vercel tự build bản preview cho PR; bot Vercel đăng link preview trong PR. Chờ check `Vercel` pass (nếu fail: đọc log, sửa trên cùng nhánh).
4. Gửi chủ dự án link PR + link preview + những trang cần xem. **Dừng lại, chờ.**
5. **Chỉ merge khi chủ dự án trả lời OK rõ ràng** (trong chat hoặc comment "OK merge" trên PR). Không tự merge, không bật auto-merge.
6. Sau merge: Vercel tự deploy Production. Kiểm tra trang live (desktop + mobile), báo lại kèm ảnh chụp; xoá nhánh đã merge.
- Không có quyền Vercel/Mắt Bão: mọi việc làm qua GitHub. Không đổi cài đặt branch protection.
- Cần rollback: mở PR revert (`git revert`) theo đúng quy trình trên.

## Không làm
- Không chạy theo các mục cổng `8080`, `startup.sh`, preview proxy, "Grok Build" trong `AGENTS.md` — không áp dụng ngoài sandbox Grok Build.
- Không đổi domain/DNS, biến môi trường Vercel, hay cấu hình Resend nếu chưa được yêu cầu rõ.
- Không thêm lại branding Grok PWA (`grokPwaPlugin`, `public/__grok/`).
