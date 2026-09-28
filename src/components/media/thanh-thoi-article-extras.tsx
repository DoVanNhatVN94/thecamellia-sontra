/** Layout B extras for bài Thảnh thơi: summary cards + responsive unit table. */

const DISCLAIMER =
  "Số liệu mang tính minh họa, tham khảo — không phải cam kết. Giá sàn công bố trên website: từ 1,98 tỷ. Giá minh họa đã gồm VAT + KPBT, đã trừ CK 2% phương án Thảnh thơi.";

const SUMMARY_CARDS = [
  { label: "Nhận nhà", value: "50%", hint: "Thanh toán ~50% nhận nhà sử dụng" },
  { label: "Giãn dòng tiền", value: "≈ 38 tháng", hint: "~18 tháng tới nhận nhà + ~20 tháng sau" },
  { label: "Lợi nhuận minh họa", value: "300–900 triệu", hint: "Sau ~20 tháng nhận nhà, tùy loại căn" },
  { label: "Thuê minh họa", value: "16–50 tr/tháng", hint: "Studio 16–19 · 3PN 40–50" },
] as const;

const UNIT_ROWS = [
  {
    type: "Studio",
    total: "2,24 tỷ",
    before: "1,14 tỷ",
    after: "~1 tỷ",
    profit: "300 triệu",
    rent: "16–19 tr/th",
  },
  {
    type: "1PN+1",
    total: "3,16 tỷ",
    before: "1,61 tỷ",
    after: "~1,4 tỷ",
    profit: "400 triệu",
    rent: "22–24 tr/th",
  },
  {
    type: "2PN",
    total: "3,79 tỷ",
    before: "1,93 tỷ",
    after: "~1,76 tỷ",
    profit: "600 triệu",
    rent: "30–40 tr/th",
  },
  {
    type: "3PN",
    total: "6,30 tỷ",
    before: "3,21 tỷ",
    after: "~2,78 tỷ",
    profit: "900 triệu",
    rent: "40–50 tr/th",
  },
] as const;

export const THANH_THOI_ARTICLE_SLUG = "bai-toan-dau-tu-thanh-thoi-the-camellia";

export function isThanhThoiArticleSlug(slug: string): boolean {
  return slug === THANH_THOI_ARTICLE_SLUG;
}

export function ThanhThoiSummaryCards() {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2">
      {SUMMARY_CARDS.map((c) => (
        <div
          key={c.label}
          className="rounded-xl border border-stone bg-paper px-4 py-3 shadow-border"
        >
          <p className="text-[0.65rem] tracking-[0.16em] uppercase text-muted">{c.label}</p>
          <p className="mt-1 font-num text-xl text-terracotta sm:text-2xl">{c.value}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{c.hint}</p>
        </div>
      ))}
    </div>
  );
}

export function ThanhThoiUnitTable() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-stone bg-paper shadow-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <caption className="sr-only">
            Minh họa giá trị, lợi nhuận và thuê theo loại căn — phương án Thảnh thơi
          </caption>
          <thead>
            <tr className="border-b border-stone bg-cream text-xs tracking-wide text-muted uppercase">
              <th className="px-3 py-2.5 font-medium sm:px-4">Loại căn</th>
              <th className="px-3 py-2.5 font-medium sm:px-4">Tổng GT*</th>
              <th className="px-3 py-2.5 font-medium sm:px-4">Trước NN (~50%)</th>
              <th className="px-3 py-2.5 font-medium sm:px-4">Giãn sau (~45%)</th>
              <th className="px-3 py-2.5 font-medium sm:px-4">LN minh họa</th>
              <th className="px-3 py-2.5 font-medium sm:px-4">Thuê minh họa</th>
            </tr>
          </thead>
          <tbody>
            {UNIT_ROWS.map((r) => (
              <tr key={r.type} className="border-b border-stone/70 last:border-0">
                <td className="px-3 py-2.5 font-medium text-ink sm:px-4">{r.type}</td>
                <td className="px-3 py-2.5 font-num text-terracotta sm:px-4">{r.total}</td>
                <td className="px-3 py-2.5 font-num sm:px-4">{r.before}</td>
                <td className="px-3 py-2.5 font-num sm:px-4">{r.after}</td>
                <td className="px-3 py-2.5 font-num sm:px-4">{r.profit}</td>
                <td className="px-3 py-2.5 font-num sm:px-4">{r.rent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-stone px-3 py-2.5 text-xs leading-relaxed text-muted sm:px-4">
        *{DISCLAIMER}
      </p>
    </div>
  );
}

/** Cards + unit table after hero (layout B). */
export function ThanhThoiLayoutBExtras() {
  return (
    <div className="mt-6">
      <p className="text-xs tracking-[0.16em] uppercase text-terracotta">Tóm tắt nhanh</p>
      <ThanhThoiSummaryCards />
      <p className="mb-2 text-xs tracking-[0.16em] uppercase text-terracotta">
        Minh họa theo loại căn
      </p>
      <ThanhThoiUnitTable />
    </div>
  );
}
