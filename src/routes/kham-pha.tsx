import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { TourEmbed } from "@/components/media/tour-embed";
import { VIRTUAL_TOUR } from "@/data/project";
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
      <TourEmbed mode="page" />
    </SiteShell>
  );
}
