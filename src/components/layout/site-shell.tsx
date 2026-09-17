import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { FloatingCta } from "@/components/layout/floating-cta";
import { Header } from "@/components/layout/header";
import { LazyRegisterDialog } from "@/components/register-dialog-lazy";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  chrome = "full",
}: {
  children: ReactNode;
  chrome?: "full" | "tour";
}) {
  const tour = chrome === "tour";
  return (
    <div className={cn(tour ? "bg-ink text-paper" : "min-h-dvh bg-cream text-ink")}>
      <a
        href="#noi-dung"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2"
      >
        Bỏ qua điều hướng
      </a>
      <Header />
      <main id="noi-dung" className={tour ? "tour-page" : "main-pad-cta"}>
        {children}
      </main>
      {tour ? null : <Footer />}
      {tour ? null : <FloatingCta />}
      <LazyRegisterDialog />
      <SeoJsonLd />
    </div>
  );
}
