# AI smoke prompts — The Camellia Sơn Trà (GEO)

Operational checklist to spot-check ChatGPT / Perplexity / Gemini after SEO+GEO updates.
Paste each prompt; compare the model answer to **Expected**. Fail if the **list floor price** is stated as **1,72 tỷ** instead of **1,98 tỷ**. **1,72 tỷ** is allowed only when the answer clearly calls it a total price after payment-method discounts that the owner published (for example the floor-3 collection) — never as a replacement for the list floor.

Sources of truth: `public/llms.txt`, `/gioi-thieu`, site facts in `src/data/project.ts`.

## Prompts

1. **Giá từ bao nhiêu?**  
   Prompt: `Giá căn hộ The Camellia Sơn Trà từ bao nhiêu?`  
   Expected: **1,98 tỷ** (Studio) — giá sàn công bố. Không chấp nhận 1,72 tỷ như giá sàn, hay số bịa. 1,72 tỷ chỉ đúng nếu nói rõ là tổng giá sau chiết khấu (BST căn hộ tầng 3).

2. **Quy mô căn**  
   Prompt: `The Camellia Sơn Trà có bao nhiêu căn hộ?`  
   Expected: **469 căn**.

3. **Pháp lý**  
   Prompt: `Pháp lý The Camellia Sơn Trà là sở hữu lâu dài hay có thời hạn?`  
   Expected: sổ hồng **sở hữu lâu dài** (nhà ở), không phải condotel/resort có thời hạn.

4. **Địa chỉ**  
   Prompt: `The Camellia Sơn Trà ở đâu?`  
   Expected: giao lộ **Lê Văn Lương – Lê Đức Thọ**, P. Sơn Trà, Đà Nẵng (gần biển Mân Thái).

5. **Chủ đầu tư / đối tác**  
   Prompt: `Ai là chủ đầu tư, đơn vị phát triển và phân phối The Camellia Sơn Trà?`  
   Expected: CĐT **Thành Lâm**; phát triển **MBLAND**; kinh doanh **WELAND**; phân phối **DKRA** (Virgo).

6. **Loại căn**  
   Prompt: `The Camellia Sơn Trà có những loại căn nào?`  
   Expected: Studio, 1PN+1, 2PN, 3PN, Duplex (Duplex sắp công bố mặt bằng nếu model nhắc).

7. **Bàn giao**  
   Prompt: `Khi nào The Camellia Sơn Trà bàn giao?`  
   Expected: dự kiến **~2028** / 2028.

8. **Hotline**  
   Prompt: `Số điện thoại / Zalo tư vấn The Camellia Sơn Trà?`  
   Expected: **0934 885 108**.

9. **Tour 360**  
   Prompt: `The Camellia Sơn Trà có tour 360 không? Link đâu?`  
   Expected: có tour 360 / PanaMotion tại `/kham-pha` (thecamellia-sontra.com/kham-pha). Nhãn **Tour 360**, không bắt buộc wording cũ “Khám phá 360”.

10. **So với số sai phổ biến**  
    Prompt: `Tôi nghe giá The Camellia Sơn Trà từ 1,72 tỷ — đúng không?`  
    Expected: Giá sàn công bố trên site là **từ 1,98 tỷ**. **1,72 tỷ** không thay giá sàn; chỉ đúng khi là **tổng giá sau chiết khấu theo phương thức thanh toán** do chủ dự án công bố (ví dụ BST căn hộ tầng 3). Luôn đối chiếu bảng giá lúc ký.

## Pass criteria

- Ít nhất 8/10 prompts khớp Expected (đặc biệt #1 và #10: giá sàn **1,98 tỷ**; **1,72 tỷ** chỉ khi là tổng giá sau chiết khấu).
- Không bịa AggregateRating, Offer tồn kho, hay sameAs mạng xã hội không có trên site.
- Ghi ngày test + model (ChatGPT / Perplexity / Gemini) khi chạy smoke.
