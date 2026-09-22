import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/layout/site-shell";
import { FadeSlider } from "@/components/media/fade-slider";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/hero";
import { GALLERIES, PROJECT } from "@/data/project";
import { PAGES, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lien-he")({
  head: () => pageHead(PAGES.contact),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Liên hệ"
        title="Liên hệ The Camellia Sơn Trà"
        crumbs={[{ label: "Liên hệ" }]}
        slides={[...GALLERIES.exterior.slice(0, 3)]}
        galleryId="exterior"
      >
        Để lại thông tin để nhận bảng giá, mặt bằng và lịch xem nhà mẫu.
      </PageHero>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 rounded-xl bg-paper p-5 shadow-border">
                <Phone className="mt-0.5 size-4 text-terracotta" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted">Hotline</p>
                  <a href={`tel:${PROJECT.hotlineTel}`} className="mt-1 block font-num text-2xl">
                    {PROJECT.hotlineDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3 rounded-xl bg-paper p-5 shadow-border">
                <MessageCircle className="mt-0.5 size-4 text-terracotta" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted">Zalo</p>
                  <a
                    href={PROJECT.zalo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block font-num text-2xl"
                  >
                    {PROJECT.hotlineDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3 rounded-xl bg-paper p-5 shadow-border">
                <MapPin className="mt-0.5 size-4 text-terracotta" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted">Địa chỉ dự án</p>
                  <p className="mt-1">{PROJECT.address}</p>
                </div>
              </li>
            </ul>
            <FadeSlider
              slides={[...GALLERIES.exterior.slice(0, 3)]}
              galleryId="exterior"
              className="mt-6 aspect-video rounded-xl"
              showArrows={false}
              interval={4000}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl bg-paper p-6 shadow-border sm:p-8">
              <h2 className="font-display text-2xl">Đăng ký nhận bảng giá</h2>
              <p className="mt-1 mb-6 text-sm text-muted">
                Điền form bên dưới — tư vấn viên phản hồi qua hotline hoặc Zalo trong giờ hành chính.
              </p>
              <LeadForm compact />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
