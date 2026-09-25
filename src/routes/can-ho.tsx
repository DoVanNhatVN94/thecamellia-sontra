import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { PeekSlider } from "@/components/media/peek-slider";
import { Reveal } from "@/components/motion/reveal";
import { AnswerCapsule } from "@/components/sections/answer-capsule";
import { PageHero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { UnitFilterChips, UnitSmartFilter, type UnitId } from "@/components/units/compare-table";
import { View360Section } from "@/components/units/view-360";
import { GALLERIES, PROJECT, UNIT_TYPES } from "@/data/project";
import { SmartImg } from "@/lib/image-src";
import { PAGES, pageHead } from "@/lib/seo";
import { useRegister } from "@/lib/register-store";

export const Route = createFileRoute("/can-ho")({
  head: () => pageHead(PAGES.units),
  component: UnitsPage,
});

const UNIT_IDS = UNIT_TYPES.map((u) => u.id);

function readHash(): UnitId {
  if (typeof window === "undefined") return "studio";
  const raw = window.location.hash.replace("#", "");
  return UNIT_IDS.includes(raw as UnitId) ? (raw as UnitId) : "studio";
}

function UnitsPage() {
  const openWith = useRegister((s) => s.openWith);
  const [filter, setFilter] = useState<UnitId>("studio");

  useEffect(() => {
    const initial = readHash();
    setFilter(initial);
    const hash = window.location.hash.replace("#", "");
    if (hash === "tam-view") {
      requestAnimationFrame(() => {
        document.getElementById("tam-view")?.scrollIntoView({ block: "start" });
      });
    } else if (hash) {
      requestAnimationFrame(() => {
        document.getElementById("mat-bang")?.scrollIntoView({ block: "start" });
      });
    }
    const onHash = () => setFilter(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function select(id: UnitId, scroll = true) {
    setFilter(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
    if (scroll) {
      document.getElementById("mat-bang")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const unit = useMemo(
    () => UNIT_TYPES.find((u) => u.id === filter) ?? UNIT_TYPES[0],
    [filter],
  );

  return (
    <SiteShell>
      <PageHero
        kicker="Sản phẩm"
        title="Loại hình căn hộ The Camellia Sơn Trà"
        crumbs={[{ label: "Căn hộ" }]}
        slides={[...GALLERIES.interior.slice(0, 3)]}
        galleryId="interior"
      >
        Studio đến 3 phòng ngủ, bàn giao hoàn thiện. Duplex sắp công bố mặt bằng.
        Lọc theo nhu cầu hoặc ngân sách, rồi xem mặt bằng loại căn phù hợp.
      </PageHero>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-12">
          <AnswerCapsule
            label="Giá The Camellia Sơn Trà"
            actions={
              <Button onClick={() => openWith()}>Nhận bảng giá</Button>
            }
          >
            Giá căn hộ The Camellia Sơn Trà công bố từ {PROJECT.fromPrice} (Studio).
            1PN+1 từ 3,28 tỷ · 2PN từ 3,90 tỷ · 3PN từ 7,50 tỷ (theo đợt, tầng, hướng
            view). {PROJECT.legal}. {PROJECT.units} tại {PROJECT.address}. Bàn giao{" "}
            {PROJECT.handover.toLowerCase()}. Hotline / Zalo {PROJECT.hotlineDisplay}.
          </AnswerCapsule>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="gia-the-camellia">
        <div className="mx-auto max-w-6xl px-4 pb-2 sm:px-6">
          <Reveal>
            <article className="rounded-xl border border-stone bg-paper px-5 py-6 shadow-border sm:px-6">
              <h2 id="gia-the-camellia" className="font-display text-2xl sm:text-3xl">
                Giá The Camellia Sơn Trà từ bao nhiêu?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Theo công bố trên site, giá The Camellia Sơn Trà bắt đầu từ{" "}
                {PROJECT.fromPrice} cho căn Studio (khoảng 27,8–28,4 m² thông thủy). Các
                mức tham chiếu tiếp theo: 1PN+1 từ 3,28 tỷ (47,0 m²), 2PN từ 3,90 tỷ
                (57,4–72,1 m²), 3PN từ 7,50 tỷ. Duplex sắp công bố mặt bằng. Giá thay đổi
                theo đợt mở bán, tầng và hướng view — nhận bảng giá cập nhật qua hotline{" "}
                {PROJECT.hotlineDisplay} hoặc form đăng ký.
              </p>
              <h3 className="mt-5 font-display text-xl">
                The Camellia Đà Nẵng giá có phải 1,72 tỷ không?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                Không. Fact sheet và trang căn hộ của dự án ghi giá từ 1,98 tỷ — không
                dùng mức 1,72 tỷ. Khi thấy số khác trên mạng xã hội hoặc trang đại lý,
                hãy đối chiếu lại với{" "}
                <a href="/can-ho" className="text-terracotta underline-offset-2 hover:underline">
                  /can-ho
                </a>{" "}
                hoặc fact sheet{" "}
                <a href="/gioi-thieu" className="text-terracotta underline-offset-2 hover:underline">
                  /gioi-thieu
                </a>
                .
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <div className="sticky-under-header sticky z-20 border-b border-stone bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl min-w-0 items-center gap-3 px-4 py-2 sm:px-6">
          <UnitFilterChips active={filter} onSelect={(id) => select(id, true)} />
          <p className="font-num hidden shrink-0 text-sm text-muted md:block">
            {unit.price}
          </p>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-1.5 text-[0.65rem] tracking-wide text-muted md:hidden sm:px-6">
          Vuốt ngang để xem thêm loại căn →
        </p>
      </div>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-12 sm:px-6 sm:py-16">
          <Reveal>
            <UnitSmartFilter active={filter} onSelect={select} />
          </Reveal>

          <Reveal>
            <article>
              <p className="kicker">22 căn / tầng</p>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl">Mặt bằng tầng điển hình</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                Tầng điển hình 22 căn: Studio, 1 phòng ngủ + 1, 2 phòng ngủ và 3 phòng
                ngủ. Hướng núi Sơn Trà, chùa Linh Ứng, biển Sơn Trà và biển Mân Thái.
              </p>
              <div className="mt-8 overflow-hidden rounded-xl bg-paper shadow-border">
                <SmartImg
                  slot="unit:typical"
                  src="/images/floor-typical.webp"
                  alt="Mặt bằng tầng điển hình The Camellia"
                  className="aspect-video w-full bg-paper object-contain"
                />
              </div>
            </article>
          </Reveal>

          <Reveal>
            <View360Section />
          </Reveal>

          <article id="mat-bang" className="scroll-mt-36 pb-8 sm:scroll-mt-32">
            <div className="max-w-2xl">
              <p className="kicker">{unit.beds}</p>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl">{unit.name}</h2>
              {unit.comingSoon ? (
                <p className="mt-3 text-sm tracking-[0.2em] text-terracotta uppercase">Sắp công bố</p>
              ) : (
                <>
                  <p className="mt-3 font-num text-lg text-terracotta">{unit.price}</p>
                  <p className="mt-1 font-num text-sm text-muted">
                    {unit.area} · {unit.floors}
                  </p>
                </>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted">{unit.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {unit.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-stone px-3 py-1 text-xs tracking-wide"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {unit.comingSoon ? (
              <div className="mt-8 grid min-h-[280px] place-items-center rounded-xl bg-paper px-6 py-16 text-center shadow-border">
                <p className="font-display text-4xl">Sắp công bố</p>
                <p className="mt-3 max-w-md text-sm text-muted">
                  Mặt bằng Duplex đang được chủ đầu tư hoàn thiện. Để lại thông tin
                  để nhận layout ngay khi cập nhật.
                </p>
                <Button className="mt-6" onClick={() => openWith(unit.name)}>
                  Nhận thông tin Duplex
                </Button>
              </div>
            ) : (
              <div className="mt-8">
                <PeekSlider
                  key={unit.id}
                  slides={unit.layouts.map((l) => ({
                    src: l.src,
                    alt: `${unit.name} ${l.code}`,
                    caption: `${l.code} · ${l.nta} thông thủy · ${l.gfa} tim tường`,
                    fit: "contain" as const,
                  }))}
                  galleryId={`unit:${unit.id}`}
                  cardClassName="w-[min(94vw,1040px)]"
                />
                <Button className="mt-6" onClick={() => openWith(unit.name)}>
                  Nhận mặt bằng {unit.name}
                </Button>
              </div>
            )}
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
