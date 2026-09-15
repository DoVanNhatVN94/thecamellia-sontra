import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/sections/hero";
import {
  AmenitiesPreview,
  ArchitectureSection,
  CtaBand,
  ExteriorSlider,
  FactsSection,
  FaqSection,
  InteriorGallery,
  LegalSection,
  LocationSection,
  NewsPreview,
  PartnerStrip,
  PolicySection,
  StorySection,
  UnderstandSection,
  UnitsPreview,
} from "@/components/sections/home-sections";
import { PAGES, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const base = pageHead(PAGES.home);
    return {
      ...base,
      links: [
        ...(base.links ?? []),
        {
          rel: "preload",
          as: "image",
          href: "/images/hero-aerial.webp",
          type: "image/webp",
        },
      ],
    };
  },
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <StorySection />
      <ExteriorSlider />
      <FactsSection />
      <UnderstandSection />
      <LocationSection />
      <ArchitectureSection />
      <AmenitiesPreview />
      <InteriorGallery />
      <UnitsPreview />
      <PolicySection />
      <LegalSection />
      <FaqSection />
      <NewsPreview />
      <PartnerStrip />
      <CtaBand />
    </SiteShell>
  );
}
