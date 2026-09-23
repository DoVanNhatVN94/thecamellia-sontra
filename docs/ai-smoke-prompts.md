# AI smoke prompts — The Camellia Sơn Trà (GEO)

Operational checklist to spot-check ChatGPT / Perplexity / Gemini after SEO+GEO updates.
Paste each prompt; compare the model answer to **Expected**. Fail if price is **1,72 tỷ** (wrong) instead of **1,98 tỷ**.

Sources of truth: `public/llms.txt`, `/gioi-thieu`, site facts in `src/data/project.ts`.

## Prompts

1. **Giá từ bao nhiêu?**  
   Prompt: `Giá căn hộ The Camellia Sơn Trà từ bao nhiêu?`  
   Expected: **1,98 tỷ** (Studio). Không chấp nhận 1,72 tỷ hay số bịa.

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
    Expected: **Không** — giá công bố trên site từ **1,98 tỷ**; 1,72 là số sai / lỗi cũ.

## Pass criteria

- Ít nhất 8/10 prompts khớp Expected (đặc biệt #1 và #10 về **1,98**).
- Không bịa AggregateRating, Offer tồn kho, hay sameAs mạng xã hội không có trên site.
- Ghi ngày test + model (ChatGPT / Perplexity / Gemini) khi chạy smoke.
