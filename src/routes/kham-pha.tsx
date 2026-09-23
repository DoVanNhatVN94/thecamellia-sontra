import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { TourEmbed } from "@/components/media/tour-embed";
import { Button } from "@/components/ui/button";
import { PROJECT, VIRTUAL_TOUR } from "@/data/project";
import { PAGES, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/kham-pha")({
  head: () => {
    const base = pageHead(PAGES.tour);
    return {
      ...base,
      links: [
        ...base.links,
        { rel: "preconnect", href: VIRTUAL_TOUR.origin, crossOrigin: "anonymous" },
        { rel: "dns-prefetch", href: VIRTUAL_TOUR.origin },
      ],
    };
  },
  component: TourPage,
});

function TourPage() {
  return (
    <SiteShell chrome="tour">
      <section className="border-b border-paper/10 bg-ink px-4 pb-8 pt-6 text-paper sm:px-6 sm:pb-10 sm:pt-8">
        <div className="mx-auto max-w-3xl">
          <p className="kicker text-paper/70">Tour 360 · PanaMotion</p>
          <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Tour 360 The Camellia Sơn Trà
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-paper/80 sm:text-base">
            Xoay nhìn không gian The Camellia Sơn Trà trước khi đặt lịch xem thực
            tế — PanaMotion trên trình duyệt, không cần cài app.
          </p>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-paper/75 sm:text-base">
            <li>
              469 căn · giá từ {PROJECT.fromPrice} · sổ hồng sở hữu lâu dài
            </li>
            <li>{PROJECT.address}</li>
            <li>Sau tour: nhận bảng giá / xem nhà mẫu qua Liên hệ</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/lien-he">Nhận bảng giá</Link>
            </Button>
            <Button asChild variant="light">
              <Link to="/gioi-thieu">Tìm hiểu dự án</Link>
            </Button>
          </div>
        </div>
      </section>
      <TourEmbed mode="page" />
    </SiteShell>
  );
}
