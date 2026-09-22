import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeSlider, type FadeSlide } from "@/components/media/fade-slider";
import { CountUp } from "@/components/motion/count-up";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { GALLERIES, PROJECT } from "@/data/project";
import { useRegister } from "@/lib/register-store";

export function Hero() {
  const openWith = useRegister((s) => s.openWith);
  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-ink text-paper">
      <FadeSlider
        slides={[...GALLERIES.hero]}
        galleryId="hero"
        interval={7000}
        className="absolute inset-0"
        kenBurns
        priority
        clearStickyCta
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-ink/20" />
      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-40 pt-28 sm:px-6 sm:pb-28">
        <p className="stagger-item kicker text-paper/80">{PROJECT.nameEn}</p>
        <h1 className="stagger-item mt-4 max-w-3xl font-display text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
          {PROJECT.name}
        </h1>
        <p className="stagger-item mt-4 max-w-3xl font-display text-xl leading-tight text-paper/90 sm:text-3xl">
          {PROJECT.tagline}
        </p>
        <p className="stagger-item mt-4 max-w-xl font-display text-lg text-paper/75 sm:text-2xl md:italic">
          {PROJECT.slogan}
        </p>
        <p className="stagger-item mt-6 max-w-lg text-sm leading-relaxed text-paper/75 sm:text-base">
          Căn hộ biển kề rừng, sở hữu lâu dài. 469 căn · 25 tầng · giao lộ Lê Văn
          Lương – Lê Đức Thọ, nơi núi Sơn Trà chạm nhịp sống Đà Nẵng.
        </p>
        <div className="stagger-item mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => openWith()}>
            Nhận bảng giá
          </Button>
          <Button size="lg" variant="light" asChild>
            <a href="#du-an">Tìm hiểu dự án</a>
          </Button>
        </div>
        <div className="stagger-item mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-paper/20 pt-6">
          <Stat k={<CountUp to={469} />} v="Căn hộ" />
          <Stat k={<CountUp to={25} />} v="Tầng nổi" />
          <Stat k="1,98 tỷ" v="Giá từ" />
        </div>
      </div>
      <a
        href="#du-an"
        className="scroll-hint absolute bottom-6 left-1/2 z-10 hidden min-h-11 min-w-11 -translate-x-1/2 items-center justify-center text-paper/70 sm:flex"
        aria-label="Xuống nội dung"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  children,
  slides,
  galleryId,
  crumbs,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  slides: FadeSlide[];
  galleryId?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate min-h-[52vh] overflow-hidden bg-ink text-paper sm:min-h-[58vh]">
      <FadeSlider
        slides={slides}
        galleryId={galleryId}
        interval={5600}
        className="absolute inset-0"
        kenBurns
        showArrows={false}
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/25" />
      <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:min-h-[58vh] sm:px-6 sm:pb-16">
        {crumbs ? <Breadcrumbs items={crumbs} className="stagger-item mb-5 text-paper/70" /> : null}
        <p className="stagger-item kicker text-paper/80">{kicker}</p>
        <h1 className="stagger-item mt-3 max-w-4xl font-display text-4xl leading-tight sm:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="stagger-item mt-4 max-w-2xl text-sm leading-relaxed text-paper/75 sm:text-base">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: ReactNode; v: string }) {
  return (
    <div>
      <p className="font-num text-2xl sm:text-3xl">{k}</p>
      <p className="mt-1 text-xs tracking-widest uppercase opacity-70">{v}</p>
    </div>
  );
}