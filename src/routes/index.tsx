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
  TourPreview,
  UnitsPreview,
} from "@/components/sections/home-sections";

export const Route = createFileRoute("/")({
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
      <TourPreview />
      <PolicySection />
      <LegalSection />
      <FaqSection />
      <NewsPreview />
      <PartnerStrip />
      <CtaBand />
    </SiteShell>
  );
}
