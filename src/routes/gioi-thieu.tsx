import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { FACTS, GALLERIES, PROJECT } from "@/data/project";
import { PAGES, pageHead } from "@/lib/seo";
import { useRegister } from "@/lib/register-store";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => pageHead(PAGES.factSheet),
  component: FactSheetPage,
});

/** Fixed truths for Google + AI crawlers — values only from PROJECT / FACTS. */
const FIXED_TRUTHS = [
  `${PROJECT.name}: ${PROJECT.units}, ${PROJECT.floors}, quy mô khu đất ${PROJECT.land}.`,
  `Giá từ ${PROJECT.fromPrice} · ${PROJECT.legal} · Bàn giao ${PROJECT.handover.toLowerCase()}.`,
  `Địa chỉ: ${PROJECT.address}.`,
  `Chủ đầu tư: ${PROJECT.developer}. Phát triển: ${PROJECT.operator}. Kinh doanh: ${PROJECT.sales}. Phân phối: DKRA Virgo.`,
  `Thiết kế ${PROJECT.designer} · Nhà thầu ${PROJECT.contractor}.`,
  `Hotline / Zalo: ${PROJECT.hotlineDisplay}.`,
] as const;

const RELATED_LINKS = [
  { to: "/can-ho" as const, label: "Căn hộ", desc: "Studio đến 3PN & Duplex" },
  { to: "/kham-pha" as const, label: "Khám phá 360", desc: "Tour ảo PanaMotion" },
  { to: "/tin-tuc" as const, label: "Tin tức", desc: "Cập nhật dự án" },
  { to: "/lien-he" as const, label: "Liên hệ", desc: "Nhận bảng giá" },
] as const;

const FACT_ROWS: { label: string; value: string }[] = [
  { label: "Tên dự án", value: PROJECT.name },
  { label: "Tên tiếng Anh", value: PROJECT.nameEn },
  { label: "Slogan", value: PROJECT.slogan },
  { label: "Địa chỉ", value: PROJECT.address },
  { label: "Chủ đầu tư", value: PROJECT.developer },
  { label: "Phát triển dự án", value: PROJECT.operator },
  { label: "Kinh doanh", value: PROJECT.sales },
  { label: "Phân phối", value: "DKRA Virgo" },
  { label: "Thiết kế", value: PROJECT.designer },
  { label: "Nhà thầu", value: PROJECT.contractor },
  { label: "Quy mô khu đất", value: PROJECT.land },
  { label: "DT sàn xây dựng", value: PROJECT.floorArea },
  { label: "Quy mô công trình", value: PROJECT.floors },
  { label: "Tổng số căn hộ", value: PROJECT.units },
  { label: "Thương mại khối đế", value: PROJECT.shops },
  { label: "Pháp lý", value: PROJECT.legal },
  { label: "Giá từ", value: PROJECT.fromPrice },
  { label: "Bàn giao", value: PROJECT.handover },
  { label: "Hotline / Zalo", value: PROJECT.hotlineDisplay },
];

function FactSheetPage() {
  const openWith = useRegister((s) => s.openWith);

  return (
    <SiteShell>
      <PageHero
        kicker="Fact sheet"
        title={`Giới thiệu ${PROJECT.name}`}
        crumbs={[{ label: "Giới thiệu" }]}
        slides={[...GALLERIES.exterior.slice(0, 3)]}
        galleryId="exterior"
      >
        Trang sự thật cố định cho Google và AI crawler — số liệu lấy từ dữ liệu
        dự án, không suy diễn.
      </PageHero>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <div className="max-w-3xl">
              <p className="kicker">Sự thật cố định</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                {PROJECT.name} — tóm tắt để trích dẫn
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {PROJECT.tagline}. {PROJECT.units}, giá từ {PROJECT.fromPrice},{" "}
                {PROJECT.legal.toLowerCase()}, bàn giao {PROJECT.handover.toLowerCase()}.
              </p>
              <ul className="mt-8 space-y-3">
                {FIXED_TRUTHS.map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-stone bg-paper px-4 py-3.5 text-sm leading-relaxed shadow-border sm:px-5"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="kicker">Bảng thông tin</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Thông số dự án
              </h2>
              <dl className="mt-8 overflow-hidden rounded-xl border border-stone bg-paper shadow-border">
                {FACT_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid gap-1 px-4 py-3.5 sm:grid-cols-12 sm:gap-4 sm:px-5 ${
                      i % 2 === 0 ? "bg-paper" : "bg-cream/60"
                    }`}
                  >
                    <dt className="text-[0.65rem] tracking-[0.14em] uppercase text-muted sm:col-span-4 sm:self-center">
                      {row.label}
                    </dt>
                    <dd className="text-sm leading-snug sm:col-span-8 sm:text-base">
                      {row.label === "Hotline / Zalo" ? (
                        <a
                          href={`tel:${PROJECT.hotlineTel}`}
                          className="font-num text-terracotta hover:underline"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="kicker">Tóm tắt nhanh</p>
              <h2 className="mt-2 font-display text-3xl">Các mốc chính</h2>
              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-stone sm:grid-cols-3">
                {FACTS.map((f) => (
                  <div
                    key={f.label}
                    className="flex min-h-[7.5rem] flex-col justify-center bg-paper p-5"
                  >
                    <dt className="text-[0.65rem] tracking-[0.14em] uppercase text-muted">
                      {f.label}
                    </dt>
                    <dd className="mt-2 font-num text-xl leading-snug">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>


          <Reveal>
            <div className="max-w-3xl rounded-xl border border-stone bg-paper px-5 py-6 shadow-border sm:px-6">
              <p className="kicker">FAQ</p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl">
                Căn hộ Sơn Trà sở hữu lâu dài khác gì có thời hạn?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Theo thông tin dự án, The Camellia công bố pháp lý sổ hồng sở hữu
                lâu dài — khác nhiều sản phẩm resort / condo có thời hạn. Đọc câu
                trả lời đầy đủ cho người mua.
              </p>
              <Link
                to="/tin-tuc/$slug"
                params={{ slug: "can-ho-son-tra-so-huu-lau-dai" }}
                className="mt-4 inline-flex text-sm font-medium text-terracotta underline-offset-4 hover:underline"
              >
                Đọc FAQ sở hữu lâu dài →
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="kicker">Khám phá thêm</p>
              <h2 className="mt-2 font-display text-3xl">Trang liên quan</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {RELATED_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="flex h-full flex-col rounded-xl border border-stone bg-paper p-5 shadow-border transition-colors hover:border-terracotta/40"
                    >
                      <span className="font-display text-xl text-terracotta">{l.label}</span>
                      <span className="mt-1 text-sm text-muted">{l.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-xl bg-ink px-6 py-10 text-paper sm:px-10 sm:py-12">
              <p className="kicker text-paper">Đăng ký</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Nhận bảng giá {PROJECT.name}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/75">
                Hotline {PROJECT.hotlineDisplay}. Để lại thông tin để nhận bảng
                giá, mặt bằng và lịch xem nhà mẫu theo nhu cầu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => openWith()}>
                  Nhận bảng giá
                </Button>
                <Button asChild size="lg" variant="light">
                  <Link to="/lien-he">Đến trang liên hệ</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
