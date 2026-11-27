import { useMemo, useState } from "react";
import { Phone, Printer } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PAYMENT_POLICIES, PRICE_SHEET, type PaymentPolicyId } from "@/data/price-sheet";
import {
  findPriceSheetUnit,
  searchPriceSheetUnits,
  type PriceSheetUnit,
} from "@/data/price-sheet-units";
import { PROJECT } from "@/data/project";
import {
  calculatePrice,
  formatPercent,
  formatVnd,
  parseAreaInput,
  parsePercentInput,
  parseVndInput,
  type ScheduleRow,
} from "@/lib/price-calculator";
import { cn } from "@/lib/utils";

const SAMPLE = findPriceSheetUnit(PRICE_SHEET.sampleUnitCode);

function formatDigits(digits: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function groupRows(rows: ScheduleRow[]) {
  const groups: {
    key: string;
    marker: string;
    batch: string;
    title: string;
    dateLabel: string;
    lines: ScheduleRow[];
  }[] = [];
  for (const row of rows) {
    const current = groups[groups.length - 1];
    if (!row.batch && current) {
      current.lines.push(row);
      continue;
    }
    groups.push({
      key: row.id,
      marker: row.marker,
      batch: row.batch,
      title: row.title,
      dateLabel: row.dateLabel,
      lines: [row],
    });
  }
  return groups;
}

export function PriceCalculatorSection() {
  const [unitCode, setUnitCode] = useState(SAMPLE?.code ?? "");
  const [unitQuery, setUnitQuery] = useState(SAMPLE?.code ?? "");
  const [unitOpen, setUnitOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [grossDigits, setGrossDigits] = useState(SAMPLE?.listGross ? String(SAMPLE.listGross) : "");
  const [areaText, setAreaText] = useState(SAMPLE ? String(SAMPLE.netArea) : "");
  const [agencyText, setAgencyText] = useState("");
  const [policyId, setPolicyId] = useState<PaymentPolicyId>("thong-thuong");
  const [anchorDate, setAnchorDate] = useState<string>(PRICE_SHEET.sampleAnchorDate);
  const [handoverDate, setHandoverDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [earlyText, setEarlyText] = useState("");
  const [specialText, setSpecialText] = useState("");

  const unit = findPriceSheetUnit(unitCode);
  const matches = useMemo(() => searchPriceSheetUnits(unitQuery, 8), [unitQuery]);
  const gross = parseVndInput(grossDigits);
  const area = parseAreaInput(areaText);
  const early = parsePercentInput(earlyText);
  const special = parsePercentInput(specialText);
  const agency = parsePercentInput(agencyText);
  const anchorOk = /^\d{4}-\d{2}-\d{2}$/.test(anchorDate);
  const code = unitCode.trim();

  const quote = useMemo(() => {
    if (
      !code ||
      gross == null ||
      area == null ||
      early == null ||
      special == null ||
      agency == null ||
      !anchorOk
    ) {
      return null;
    }
    return calculatePrice({
      policyId,
      listGross: gross,
      netArea: area,
      earlyDiscount: early,
      specialDiscount: special,
      agencyDiscount: agency,
      anchorDate,
      handoverDate: handoverDate || undefined,
    });
  }, [code, gross, area, early, special, agency, anchorOk, policyId, anchorDate, handoverDate]);

  function selectUnit(next: PriceSheetUnit) {
    const changed = next.code !== unitCode;
    setUnitCode(next.code);
    setUnitQuery(next.code);
    setUnitOpen(false);
    setActiveIndex(0);
    if (changed) {
      setGrossDigits(next.listGross == null ? "" : String(next.listGross));
      setAreaText(String(next.netArea));
    }
  }

  function commitTypedCode(raw: string) {
    const next = raw.trim().toUpperCase();
    setUnitOpen(false);
    if (!next) {
      setUnitCode("");
      setUnitQuery("");
      return;
    }
    const exact = findPriceSheetUnit(next);
    if (exact) {
      selectUnit(exact);
      return;
    }
    if (next !== unitCode) {
      if (findPriceSheetUnit(unitCode)?.listGross) setGrossDigits("");
      setAreaText("");
    }
    setUnitCode(next);
    setUnitQuery(next);
  }

  const groups = quote ? groupRows(quote.rows) : [];
  const listboxId = "tinh-gia-units";

  return (
    <section id="tinh-gia" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="kicker">Chính sách bán hàng</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
            Tính giá & lịch thanh toán
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {PRICE_SHEET.policyLabel}. Chọn mã căn và phương án để xem giá trị căn hộ, chiết khấu,
            VAT, phí bảo trì và số tiền từng đợt.
          </p>
        </Reveal>

        <div className="mt-8 grid min-w-0 items-start gap-8 lg:mt-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10">
          <form
            className="print-hide min-w-0 space-y-5 rounded-xl border border-stone bg-cream p-4 shadow-border sm:p-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="relative">
              <Label htmlFor="tinh-gia-unit">Mã căn</Label>
              <Input
                id="tinh-gia-unit"
                className="mt-1.5"
                role="combobox"
                aria-expanded={unitOpen}
                aria-controls={listboxId}
                aria-autocomplete="list"
                autoComplete="off"
                value={unitQuery}
                placeholder="CH-0301 hoặc C-06-12"
                onChange={(event) => {
                  setUnitQuery(event.target.value.toUpperCase());
                  setUnitOpen(true);
                  setActiveIndex(0);
                }}
                onFocus={() => setUnitOpen(true)}
                onBlur={() => commitTypedCode(unitQuery)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setUnitOpen(true);
                    setActiveIndex((index) => Math.min(index + 1, Math.max(matches.length - 1, 0)));
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setActiveIndex((index) => Math.max(index - 1, 0));
                  } else if (event.key === "Enter") {
                    event.preventDefault();
                    if (unitOpen && matches[activeIndex]) selectUnit(matches[activeIndex]);
                    else commitTypedCode(unitQuery);
                  } else if (event.key === "Escape") {
                    setUnitOpen(false);
                  }
                }}
              />
              {unitOpen && matches.length > 0 ? (
                <ul
                  id={listboxId}
                  role="listbox"
                  className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-md border border-stone bg-paper shadow-border"
                >
                  {matches.map((item, index) => (
                    <li key={item.code} role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={item.code === unitCode}
                        className={cn(
                          "flex w-full items-baseline justify-between gap-3 px-3 py-2.5 text-left text-sm",
                          index === activeIndex ? "bg-sand" : "bg-paper",
                        )}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => selectUnit(item)}
                      >
                        <span className="font-num">{item.code}</span>
                        <span className="text-xs text-muted">
                          Tầng {item.floor} · {item.bedrooms} · {item.netArea} m²
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
              {unitOpen && unitQuery.trim() && matches.length === 0 ? (
                <p className="absolute z-20 mt-1 w-full rounded-md border border-stone bg-paper px-3 py-2.5 text-sm shadow-border">
                  Dùng mã {unitQuery.trim().toUpperCase()}. Nhập diện tích thông thủy bên dưới.
                </p>
              ) : null}
            </div>

            {unit ? (
              <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                <div>
                  <dt className="text-xs text-muted">Tầng / căn</dt>
                  <dd>
                    {unit.floor} · {unit.unit}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Loại</dt>
                  <dd>
                    {unit.bedrooms}
                    {unit.corner ? " · căn góc" : ""}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Thông thủy</dt>
                  <dd className="font-num">{unit.netArea} m²</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Tim tường</dt>
                  <dd className="font-num">{unit.wallArea} m²</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs text-muted">Hướng ban công</dt>
                  <dd>{unit.orientation}</dd>
                </div>
              </dl>
            ) : code ? (
              <p className="text-sm text-muted">
                Mã {code} không có trong bảng giá mẫu. Nhập diện tích và tổng giá của căn này.
              </p>
            ) : (
              <p className="text-sm text-muted">
                Chọn mã trong bảng giá, hoặc gõ mã khác như C-06-12.
              </p>
            )}

            <div>
              <Label htmlFor="tinh-gia-area">Diện tích thông thủy (m²)</Label>
              <Input
                id="tinh-gia-area"
                className="mt-1.5 w-full min-w-0 font-num"
                inputMode="decimal"
                value={areaText}
                placeholder="47,2"
                onChange={(event) => setAreaText(event.target.value)}
              />
              {area == null && areaText.trim() ? (
                <p className="mt-1.5 text-xs text-terracotta">Nhập diện tích lớn hơn 0.</p>
              ) : null}
            </div>

            <div>
              <Label htmlFor="tinh-gia-gross">Tổng giá niêm yết (gồm VAT và KPBT)</Label>
              <Input
                id="tinh-gia-gross"
                className="mt-1.5 font-num"
                inputMode="numeric"
                autoComplete="off"
                placeholder="3.843.462.803"
                value={grossDigits ? formatDigits(grossDigits) : ""}
                onChange={(event) =>
                  setGrossDigits(event.target.value.replace(/\D/g, "").slice(0, 15))
                }
              />
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {unit?.listGross
                  ? "Phiếu mẫu ghi sẵn tổng giá căn này."
                  : "Bảng giá mẫu chưa ghi tổng giá căn này. Ô này trên phiếu là thông tin điền tay."}
              </p>
            </div>

            <div>
              <Label htmlFor="tinh-gia-date">Ngày đặt cọc 100 triệu</Label>
              <Input
                id="tinh-gia-date"
                className="mt-1.5 w-full min-w-0"
                type="date"
                value={anchorDate}
                onChange={(event) => setAnchorDate(event.target.value)}
              />
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Mốc của các đợt sau. Phiếu mẫu đang để{" "}
                {PRICE_SHEET.sampleAnchorDate.split("-").reverse().join("/")}.
              </p>
            </div>

            <fieldset role="radiogroup">
              <legend className="text-xs font-medium tracking-wide">Phương án thanh toán</legend>
              <div className="mt-2 grid min-w-0 grid-cols-2 gap-2">
                {PAYMENT_POLICIES.map((policy) => {
                  const on = policy.id === policyId;
                  return (
                    <button
                      key={policy.id}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => setPolicyId(policy.id)}
                      className={cn(
                        "min-h-11 rounded-xl border px-3 py-2.5 text-left",
                        on
                          ? "border-ink bg-ink text-paper"
                          : "border-stone bg-paper text-ink hover:border-ink/30",
                      )}
                    >
                      <span className="block text-sm font-medium">{policy.short}</span>
                      <span
                        className={cn(
                          "mt-1 block font-num text-xs",
                          on ? "text-paper/80" : "text-terracotta",
                        )}
                      >
                        {policy.highlight}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <Label htmlFor="tinh-gia-agency">Chiết khấu thêm (sàn/đặc biệt) %</Label>
              <Input
                id="tinh-gia-agency"
                className="mt-1.5"
                inputMode="decimal"
                value={agencyText}
                placeholder="0"
                onChange={(event) => setAgencyText(event.target.value)}
              />
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Chỉ mang tính chất tham khảo. Mức này tùy từng căn và từng sàn, không phải chính
                sách chung của chủ đầu tư, và cần được xác nhận khi tư vấn.
              </p>
              {agency == null ? (
                <p className="mt-1.5 text-xs text-terracotta">Nhập mức từ 0 đến 100.</p>
              ) : null}
            </div>

            {policyId === "gian" ? (
              <div>
                <Label htmlFor="tinh-gia-handover">Ngày nhận bàn giao để sử dụng</Label>
                <Input
                  id="tinh-gia-handover"
                  className="mt-1.5 w-full min-w-0"
                  type="date"
                  value={handoverDate}
                  onChange={(event) => setHandoverDate(event.target.value)}
                />
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  Phiếu để trống ô này. Các đợt sau bàn giao tính 5 tháng một lần kể từ ngày này.
                </p>
              </div>
            ) : null}

            <details className="rounded-lg border border-stone bg-paper px-3 py-2">
              <summary className="cursor-pointer py-1 text-sm font-medium">
                Chiết khấu khác (nếu có)
              </summary>
              <div className="grid gap-3 pt-3 pb-1">
                <div>
                  <Label htmlFor="tinh-gia-early">Chiết khấu khác, Early (%)</Label>
                  <Input
                    id="tinh-gia-early"
                    className="mt-1.5"
                    inputMode="decimal"
                    value={earlyText}
                    placeholder="0"
                    onChange={(event) => setEarlyText(event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="tinh-gia-special">Chiết khấu ngoại giao (%)</Label>
                  <Input
                    id="tinh-gia-special"
                    className="mt-1.5"
                    inputMode="decimal"
                    value={specialText}
                    placeholder="0"
                    onChange={(event) => setSpecialText(event.target.value)}
                  />
                </div>
                {early == null || special == null ? (
                  <p className="text-xs text-terracotta">Nhập mức từ 0 đến 100.</p>
                ) : null}
              </div>
            </details>

            <div>
              <Label htmlFor="tinh-gia-name">Tên khách hàng (khi in phiếu)</Label>
              <Input
                id="tinh-gia-name"
                className="mt-1.5"
                autoComplete="name"
                maxLength={80}
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
              />
            </div>
          </form>

          <div className="min-w-0">
            {quote ? (
              <div className="rounded-xl border border-stone bg-cream shadow-border">
                <div className="border-b border-stone px-4 py-5 sm:px-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs tracking-[0.16em] uppercase text-muted">
                        {PRICE_SHEET.title}
                      </p>
                      <h3 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">
                        {quote.policy.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        {code}
                        {unit ? ` · tầng ${unit.floor} · ${unit.bedrooms}` : ""} · thông thủy {area}{" "}
                        m²
                        {customerName.trim() ? ` · ${customerName.trim()}` : ""}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      className="print-hide"
                      onClick={() => window.print()}
                    >
                      <Printer className="size-4" />
                      In / lưu phiếu
                    </Button>
                  </div>
                </div>

                <dl className="px-4 sm:px-6">
                  <BreakdownRow
                    label="Giá niêm yết (gồm VAT và KPBT)"
                    value={formatVnd(quote.enteredListGross)}
                  />
                  {quote.agencyDiscount > 0 ? (
                    <>
                      <BreakdownRow
                        label={`Chiết khấu thêm (sàn/đặc biệt) ${formatPercent(quote.agencyDiscount)}`}
                        value={formatVnd(quote.agencyAmount)}
                        hint="Trừ trên giá niêm yết trước chiết khấu của chủ đầu tư: giá sau mức này = giá niêm yết / (1 + mức %)."
                        emphasize
                      />
                      <BreakdownRow
                        label="Giá niêm yết sau chiết khấu sàn"
                        value={formatVnd(quote.listGrossAfterAgency)}
                      />
                    </>
                  ) : null}
                  <BreakdownRow
                    label="Giá trị căn hộ (chưa VAT, chưa KPBT)"
                    value={formatVnd(quote.breakdown.listPreVatRounded)}
                    hint={`Đơn giá thông thủy ${formatVnd(quote.breakdown.unitPrice)}/m²`}
                  />
                  <BreakdownRow
                    label="Chiết khấu thanh toán"
                    value={formatVnd(quote.breakdown.discountAmount)}
                    hint={`Thanh toán ${formatPercent(quote.breakdown.paymentDiscount)}${
                      quote.breakdown.earlyDiscount
                        ? ` · Early ${formatPercent(quote.breakdown.earlyDiscount)}`
                        : ""
                    }${
                      quote.breakdown.specialDiscount
                        ? ` · Ngoại giao ${formatPercent(quote.breakdown.specialDiscount)}`
                        : ""
                    }. Các mức nhân lần lượt trên giá chưa VAT.`}
                    emphasize={quote.breakdown.discountAmount > 0}
                  />
                  <BreakdownRow
                    label="Giá sau chiết khấu"
                    value={formatVnd(quote.breakdown.preVat)}
                    hint={`Đơn giá sau chiết khấu ${formatVnd(quote.breakdown.unitPriceAfter)}/m²`}
                  />
                  <BreakdownRow label="VAT" value={formatVnd(quote.breakdown.vat)} />
                  <BreakdownRow
                    label="Phí bảo trì (KPBT)"
                    value={formatVnd(quote.breakdown.maintenance)}
                  />
                </dl>
                <div className="mx-4 mb-5 flex items-end justify-between gap-4 rounded-xl bg-ink px-4 py-4 text-paper sm:mx-6">
                  <p className="text-sm">Tổng giá</p>
                  <p className="font-num text-xl sm:text-2xl" aria-live="polite">
                    {formatVnd(quote.breakdown.total)}
                  </p>
                </div>

                <div className="space-y-2 px-4 pb-5 text-xs leading-relaxed text-muted sm:px-6">
                  <p>Quà tặng: {PRICE_SHEET.gift}. Khoản này không trừ vào giá.</p>
                  <p>
                    VAT bằng 10% phần giá sau chiết khấu sau khi trừ quyền sử dụng đất{" "}
                    {formatVnd(PRICE_SHEET.landDeductionPerM2)}/m² thông thủy.
                  </p>
                  {quote.policy.id === "htls-45" ? (
                    <p>
                      Trên phiếu, ngân hàng giải ngân 50% giá gồm VAT (chưa gồm phí bảo trì). Tên
                      phương án vẫn là Vay HTLS 45%.
                    </p>
                  ) : null}
                  {quote.policy.id === "htls-70" || quote.policy.id === "htls-45" ? (
                    <p>
                      Phiếu không tính số tiền hỗ trợ lãi. Dòng ngân hàng là khoản giải ngân theo tỷ
                      lệ.
                    </p>
                  ) : null}
                  {quote.breakdown.maintenanceFromGross && quote.breakdown.specialDiscount > 0 ? (
                    <p>
                      Khi chưa có chiết khấu Early và chiết khấu thanh toán, phiếu lấy phí bảo trì
                      bằng phần còn lại để tổng giá vẫn bằng giá niêm yết. Chiết khấu đặc biệt một
                      mình không làm giảm tổng đó.
                    </p>
                  ) : null}
                  {quote.hasNegative ? (
                    <p className="text-terracotta">
                      Có đợt âm. Kiểm tra lại tổng giá — tiền cọc trên phiếu là 100 triệu.
                    </p>
                  ) : null}
                  {quote.agencyDiscount > 0 ? (
                    <p>
                      Chiết khấu thêm (sàn/đặc biệt) chỉ mang tính chất tham khảo. Mức này tùy từng
                      căn và từng sàn, không phải chính sách chung của chủ đầu tư, và cần được xác
                      nhận khi tư vấn.
                    </p>
                  ) : null}
                </div>

                <div className="mx-4 mb-5 rounded-lg border border-terracotta/40 bg-paper px-4 py-3 text-sm leading-relaxed sm:mx-6">
                  <p className="font-medium">Chỉ mang tính chất tham khảo</p>
                  <p className="mt-1 text-muted">
                    Mọi kết quả chỉ mang tính chất tham khảo. Giá và chính sách theo công bố chính
                    thức của chủ đầu tư từng thời điểm.
                  </p>
                </div>

                <div className="border-t border-stone px-4 py-5 sm:px-6">
                  <p className="text-xs tracking-[0.16em] uppercase text-muted">Lịch thanh toán</p>
                  <ol className="mt-4">
                    {groups.map((group, index) => {
                      const last = index === groups.length - 1;
                      return (
                        <li key={group.key} className="relative flex gap-4 pb-6">
                          {last ? null : (
                            <span
                              className="absolute top-3 left-[0.6875rem] h-[calc(100%-0.75rem)] w-px bg-stone"
                              aria-hidden
                            />
                          )}
                          <span className="relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-terracotta bg-cream font-num text-xs text-terracotta">
                            {group.marker}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                              <p className="font-medium">{group.batch}</p>
                              <p className="font-num text-sm text-terracotta">{group.dateLabel}</p>
                            </div>
                            <p className="mt-1 text-sm leading-relaxed text-muted">{group.title}</p>
                            <ul className="mt-2 space-y-1">
                              {group.lines.map((line) => (
                                <li
                                  key={line.id}
                                  className="flex items-baseline justify-between gap-3 text-sm"
                                >
                                  <span className="text-muted">
                                    {line.payer ? `${line.payer} · ` : ""}
                                    {line.rateLabel === "—" ? "Tiền cọc" : line.rateLabel}
                                  </span>
                                  <span className="font-num">{formatVnd(line.amount)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="overflow-x-auto border-t border-stone">
                  <table className="w-full min-w-[40rem] text-left text-sm">
                    <caption className="sr-only">
                      Các đợt thanh toán của {quote.policy.sheetName}
                    </caption>
                    <thead className="text-xs tracking-wide text-muted uppercase">
                      <tr className="border-b border-stone">
                        <th className="px-4 py-3 font-medium sm:px-6">Đợt</th>
                        <th className="px-3 py-3 font-medium">Nội dung</th>
                        <th className="px-3 py-3 font-medium">Tỷ lệ</th>
                        <th className="px-3 py-3 text-right font-medium">Số tiền</th>
                        <th className="px-4 py-3 font-medium sm:px-6">Thời điểm</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quote.rows.map((row) => (
                        <tr key={row.id} className="border-b border-stone/80">
                          <td className="px-4 py-3 font-medium sm:px-6">{row.batch}</td>
                          <td className="px-3 py-3 text-muted">
                            {row.title}
                            {row.payer && row.payer !== row.title ? (
                              <span className="mt-1 block text-xs text-terracotta">
                                {row.payer}
                              </span>
                            ) : null}
                          </td>
                          <td className="px-3 py-3 font-num">{row.rateLabel}</td>
                          <td className="px-3 py-3 text-right font-num">{formatVnd(row.amount)}</td>
                          <td className="px-4 py-3 sm:px-6">{row.dateLabel}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="px-4 py-3 font-medium sm:px-6" colSpan={3}>
                          Tổng cộng
                        </td>
                        <td className="px-3 py-3 text-right font-num">{formatVnd(quote.paid)}</td>
                        <td className="px-4 sm:px-6" />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-stone bg-cream px-4 py-10 text-sm leading-relaxed text-muted sm:px-6">
                {!code
                  ? "Nhập mã căn. Mã ngoài bảng giá, như C-06-12, vẫn tính được."
                  : area == null
                    ? "Nhập diện tích thông thủy."
                    : !anchorOk
                      ? "Chọn ngày đặt cọc 100 triệu."
                      : early == null || special == null || agency == null
                        ? "Mức chiết khấu cần là số từ 0 đến 100."
                        : "Nhập tổng giá niêm yết gồm VAT và KPBT để xem lịch thanh toán."}
              </div>
            )}

            <div className="mt-5 space-y-4">
              <p className="rounded-lg border border-terracotta/40 bg-cream px-4 py-3 text-sm leading-relaxed">
                <span className="font-medium">Chỉ mang tính chất tham khảo. </span>
                Giá và chính sách theo công bố chính thức của chủ đầu tư từng thời điểm.
              </p>
              <div className="print-hide flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <a href={`tel:${PROJECT.hotlineTel}`}>
                    <Phone className="size-4" />
                    Gọi {PROJECT.hotlineDisplay}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={PROJECT.zalo} target="_blank" rel="noreferrer">
                    Nhắn Zalo {PROJECT.hotlineDisplay}
                  </a>
                </Button>
              </div>
              <p className="print-only text-sm">Hotline / Zalo {PROJECT.hotlineDisplay}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BreakdownRow({
  label,
  value,
  hint,
  emphasize = false,
}: {
  label: string;
  value: string;
  hint?: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-stone py-3">
      <dt>
        <span className="text-sm">{label}</span>
        {hint ? (
          <span className="mt-1 block text-xs leading-relaxed text-muted">{hint}</span>
        ) : null}
      </dt>
      <dd className={cn("font-num text-sm whitespace-nowrap", emphasize && "text-terracotta")}>
        {value}
      </dd>
    </div>
  );
}
