import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { FadeSlider } from "@/components/media/fade-slider";
import { ImageMarquee, TextMarquee } from "@/components/media/marquee";
import { ParallaxImage } from "@/components/media/parallax-image";
import { PeekSlider } from "@/components/media/peek-slider";
import { TourEmbed } from "@/components/media/tour-embed";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SmartImg } from "@/lib/image-src";
import {
  AMENITY_LAYERS,
  DISTANCES,
  FACTS,
  GALLERIES,
  LEGAL_MILESTONES,
  NEWS,
  PARTNERS,
  POLICIES,
  PROJECT,
  UNIT_TYPES,
} from "@/data/project";
import { FAQS } from "@/lib/seo";
import { useRegister } from "@/lib/register-store";

export function StorySection() {
  return (
    <section id="du-an" className="scroll-mt-24 bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="kicker">Câu chuyện vùng đất</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
            <span className="split-mask">
              <span className="split-line">Nơi thiên nhiên chưa từng rời xa,</span>
            </span>
            <span className="split-mask">
              <span className="split-line">nơi biển cả luôn ở lại</span>
            </span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            Có những vùng đất được gọi tên bằng vị trí. Và có những vùng đất được
            nhận diện bằng linh khí. Sơn Trà là nơi rừng gặp biển, nơi núi lặng lẽ
            chở che và đại dương mở ra những mùa sóng khoáng đạt.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Từ hình ảnh Phượng bay về núi bạc và Cá Ông nâng sóng biển khơi,{" "}
            {PROJECT.name} được khởi nguồn như một biểu tượng sống giữa thế đất{" "}
            <em>phượng quy ngư hội — sơn hải giao hòa</em>. Nơi hoa trà bung nở —
            thanh nhã, bền bỉ, kín đáo.
          </p>
        </Reveal>
        <Reveal delay={120} className="relative">
          <div className="relative min-h-[380px] sm:min-h-[480px]">
            <ParallaxImage
              src="/images/hero-aerial.webp"
              slot="story:main"
              alt="Flycam tổng thể The Camellia Sơn Trà"
              className="img-reveal aspect-4/3 w-[88%] rounded-xl"
              sizes="(max-width: 1024px) 88vw, 520px"
            />
            <ParallaxImage
              src="/images/brochure-02.webp"
              slot="story:inset"
              alt="Góc phố Lê Văn Lương lúc chiều"
              className="absolute right-0 bottom-0 w-[58%] rounded-xl shadow-border"
              imgClassName="aspect-4/3"
              speed={0.12}
              sizes="(max-width: 1024px) 58vw, 340px"
            />
            <SmartImg
              src="/images/camellia.webp"
              alt="Hoa trà Camellia — biểu tượng dự án"
              width={128}
              height={186}
              sizes="128px"
              loading="lazy"
              decoding="async"
              className="camellia-float pointer-events-none absolute -bottom-4 -left-3 w-24 !bg-transparent outline-none sm:w-32"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ExteriorSlider() {
  return (
    <section className="bg-ink py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-paper">Thư viện phối cảnh</p>
          <h2 className="mt-3 mb-6 font-display text-3xl text-paper sm:text-4xl">
            Tòa tháp trong từng khoảnh khắc
          </h2>
        </Reveal>
      </div>
      <FadeSlider
        slides={[...GALLERIES.exterior]}
        galleryId="exterior"
        interval={4800}
        className="h-[62vw] max-h-[760px] min-h-[280px] w-full"
        kenBurns
        lightbox
      />
    </section>
  );
}

export function FactsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <ParallaxImage
        src="/images/hero.webp"
        slot="facts:bg"
        alt="Phối cảnh tòa tháp The Camellia Sơn Trà lúc chiều"
        className="absolute inset-0 size-full opacity-40"
        speed={0.18}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="kicker text-paper">Thông tin dự án</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Một tòa tháp, một biểu tượng</h2>
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 items-stretch gap-px overflow-hidden rounded-xl bg-paper/10 sm:grid-cols-3">
          {FACTS.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 70}
              className="flex h-full min-h-[8.75rem] flex-col justify-center bg-ink/85 p-5 sm:min-h-[9.75rem] sm:p-6"
            >
              <dt className="text-[0.65rem] tracking-[0.16em] uppercase text-paper/90">
                {f.label}
              </dt>
              <dd className="mt-2 font-num text-xl leading-snug sm:text-2xl">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-6 text-sm text-paper/65">
          Chủ đầu tư {PROJECT.developer} · Phát triển {PROJECT.operator} · Kinh
          doanh {PROJECT.sales}
        </p>
      </div>
    </section>
  );
}

export function UnderstandSection() {
  return (
    <section className="bg-paper">
      <Reveal>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <p className="kicker">Tinh thần dự án</p>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl">Một ngôi nhà “hiểu” bạn?</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            Có những giá trị không được tạo nên từ sự khác biệt, mà từ sự giao hòa.
            Nơi rừng gặp biển để hình thành một miền thiên nhiên hiếm có. Nơi kiến
            trúc hòa cùng cảnh quan. Nơi nhịp sống đô thị cân bằng với những khoảng
            bình yên để trở về.
          </p>
          <p className="mt-4 font-display text-xl italic text-ink sm:text-2xl">
            Là nhà — nhưng ở biển, kề rừng.
          </p>
        </div>
      </Reveal>
      <ImageMarquee items={[...GALLERIES.lifestyle]} galleryId="lifestyle" />
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="vi-tri" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="kicker">Vị thế giao thoa độc bản</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">
              Nơi rừng — phố — biển gặp nhau
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              Tọa lạc tại giao lộ Lê Văn Lương – Lê Đức Thọ, một bước tới biển, một
              bước tới núi Sơn Trà. Phía sau là tầng xanh nguyên bản của núi rừng,
              phía trước là biển lớn rộng mở, bên cạnh là nhịp sống năng động của
              Đà Nẵng.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <PeekSlider slides={[...GALLERIES.location]} galleryId="location" />
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {DISTANCES.map((d, i) => (
            <li key={d.place}>
              <Reveal delay={i * 50} className="h-full rounded-lg bg-paper p-4 shadow-border">
                <p className="font-num text-2xl text-terracotta">{d.time}</p>
                <p className="mt-1 text-sm font-medium">{d.place}</p>
                <p className="text-xs text-muted">{d.note}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ArchitectureSection() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <FadeSlider
            slides={[...GALLERIES.architecture]}
            galleryId="architecture"
            className="aspect-4/3 rounded-xl"
            interval={4200}
            lightbox
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="kicker text-paper">Kiến trúc biểu tượng</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">
            Cảm hứng Sơn Trà trên mặt đứng
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-paper/75 sm:text-base">
            Sảnh đón hình chữ V tạo dáng cánh chim phượng. Mặt đứng lấy cảm hứng từ
            sóng và nhịp điệu mặt nước. Dáng núi, đường bờ biển cùng sự chuyển
            tiếp giữa các lớp không gian được đưa vào kiến trúc và cảnh quan,
            tạo nên mối liên kết tự nhiên giữa công trình với vùng đất.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-paper/80">
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-terracotta-soft" />
              Hai khối tháp kết nối qua lõi giao thông trung tâm
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-terracotta-soft" />
              22 căn/tầng điển hình, ưu tiên góc view và riêng tư
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-terracotta-soft" />
              Tiện ích xếp lớp theo tầng chức năng, không dồn hết ở khối đế
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function AmenitiesPreview() {
  return (
    <section id="tien-ich" className="cv-auto scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">42 tiện ích</p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl">
                Bốn lớp sống mỗi ngày
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/tien-ich">
                Xem tất cả tiện ích <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITY_LAYERS.map((layer, i) => (
            <Reveal key={layer.id} delay={i * 70}>
              <article className="group overflow-hidden rounded-xl bg-paper shadow-border">
                <div className="overflow-hidden">
                  <SmartImg
                    slot={`amenity-layer:${layer.id}`}
                    src={layer.image}
                    alt={layer.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs tracking-widest uppercase text-terracotta">{layer.kicker}</p>
                  <h3 className="mt-1 font-display text-2xl">{layer.title}</h3>
                  <p className="mt-2 text-sm text-muted">{layer.items.slice(0, 4).join(" · ")}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <PeekSlider slides={[...GALLERIES.amenity]} galleryId="amenity" />
        </Reveal>
      </div>
    </section>
  );
}

export function InteriorGallery() {
  return (
    <section className="cv-auto bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker">Không gian sống</p>
          <h2 className="mt-3 mb-8 font-display text-3xl sm:text-5xl">
            Nội thất hoàn thiện, ánh sáng tràn ngập
          </h2>
        </Reveal>
        <PeekSlider slides={[...GALLERIES.interior]} galleryId="interior" interval={3600} />
      </div>
    </section>
  );
}

export function UnitsPreview() {
  return (
    <section id="can-ho" className="cv-auto scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Sản phẩm</p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl">
                Căn hộ đa dạng, bàn giao hoàn thiện
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" asChild>
                <Link to="/can-ho">
                  Xem loại căn hộ <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/kham-pha">Tour 360</Link>
              </Button>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {UNIT_TYPES.filter((u) => !u.comingSoon).map((u, i) => (
            <Reveal key={u.id} delay={i * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl bg-paper shadow-border">
                <SmartImg
                  slot={`unit:${u.id}`}
                  src={u.image}
                  alt={u.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-16/10 w-full object-contain bg-paper"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl">{u.name}</h3>
                    <span className="font-num shrink-0 text-sm text-terracotta">{u.price}</span>
                  </div>
                  <p className="mt-1 font-num text-xs tracking-wide text-muted">{u.area}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{u.desc}</p>
                  <Button className="mt-5" variant="outline" asChild>
                    <Link to="/can-ho" hash={u.id}>
                      Xem mặt bằng {u.name}
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {UNIT_TYPES.filter((u) => u.comingSoon).map((u) => (
          <Reveal key={u.id} delay={80}>
            <article className="mt-4 flex flex-col items-start justify-between gap-4 rounded-xl bg-paper p-6 shadow-border sm:flex-row sm:items-center">
              <div>
                <p className="text-xs tracking-[0.22em] text-terracotta uppercase">Sắp công bố</p>
                <h3 className="mt-1 font-display text-2xl">{u.name}</h3>
                <p className="mt-1 font-num text-sm text-muted">{u.area}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{u.desc}</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/can-ho" hash={u.id}>
                  Nhận thông tin Duplex
                </Link>
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function TourPreview() {
  return (
    <section id="kham-pha" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-4 sm:px-6 sm:pt-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="kicker text-paper">Tour 360°</p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl">Khám phá dự án</h2>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">
                Xoay tòa nhà, vào căn hộ và tầm view biển — rừng. Bấm 360° để tải
                tour PanaMotion — không làm chậm trang đầu.
              </p>
            </div>
            <Button variant="light" asChild>
              <Link to="/kham-pha">Toàn màn hình</Link>
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <TourEmbed mode="section" />
      </div>
    </section>
  );
}

export function PolicySection() {
  return (
    <section id="chinh-sach" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="kicker">Chính sách</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">Linh hoạt dòng tiền</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Ưu đãi và phương án thanh toán có thể thay đổi theo đợt mở bán. Tư vấn
            viên sẽ đối chiếu hồ sơ pháp lý và bảng giá tại thời điểm ký.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POLICIES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="rounded-xl bg-cream p-6 shadow-border">
                <p className="text-xs tracking-widest uppercase text-muted">{p.title}</p>
                <p className="mt-2 font-num text-2xl text-terracotta">{p.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="kicker">Pháp lý</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Giá trị tạo niềm tin</h2>
        </Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEGAL_MILESTONES.map((m, i) => (
            <li key={m.date}>
              <Reveal delay={i * 80} className="h-full rounded-xl border border-stone p-5">
                <span className="font-num text-3xl text-stone">0{i + 1}</span>
                <p className="mt-3 text-xs tracking-widest uppercase text-terracotta">{m.date}</p>
                <p className="mt-2 text-sm leading-relaxed">{m.title}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">
          Hình thức sở hữu: {PROJECT.legal}. Thiết kế {PROJECT.designer} · Nhà
          thầu {PROJECT.contractor}.
        </p>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="kicker">Câu hỏi thường gặp</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">
            Những điều khách hàng hỏi trước khi đặt chỗ
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-stone border-y border-stone">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group py-1" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="text-terracotta transition-transform duration-200 group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsPreview() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="kicker">Tin tức</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Cập nhật dự án</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/tin-tuc">Tất cả bài viết</Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={n.slug} delay={i * 80}>
              <Link
                to="/tin-tuc/$slug"
                params={{ slug: n.slug }}
                className="group overflow-hidden rounded-xl bg-cream shadow-border"
              >
                <SmartImg
                  slot={`news:${n.slug}`}
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="p-5">
                  <p className="text-xs tracking-widest uppercase text-muted">{n.date}</p>
                  <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-terracotta">
                    {n.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{n.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnerStrip() {
  return <TextMarquee items={[...PARTNERS, "Sơn Trà · Đà Nẵng"]} />;
}

export function CtaBand() {
  return (
    <section id="lien-he" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <Reveal>
          <p className="kicker text-paper">Đăng ký nhận thông tin</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">
            Nhận bảng giá và mặt bằng
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            Hotline {PROJECT.hotlineDisplay}. Tư vấn viên sẽ gửi chính sách mới
            nhất, quỹ căn còn lại và lịch xem nhà mẫu.
          </p>
          <FadeSlider
            slides={[...GALLERIES.cta]}
            galleryId="cta"
            className="mt-8 hidden aspect-16/10 rounded-xl lg:block"
            showArrows={false}
            interval={4200}
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-xl bg-cream p-6 text-ink sm:p-8">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
