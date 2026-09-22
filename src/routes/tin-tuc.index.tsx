import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/hero";
import { NEWS } from "@/data/project";
import { SmartImg } from "@/lib/image-src";
import { PAGES, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tin-tuc/")({
  head: () => pageHead(PAGES.news),
  component: NewsIndex,
});

function NewsIndex() {
  return (
    <>
      <PageHero
        kicker="Tin tức"
        title="Tin tức The Camellia Sơn Trà"
        crumbs={[{ label: "Tin tức" }]}
        slides={NEWS.slice(0, 3).map((n) => ({ src: n.image, alt: n.title }))}
      >
        Sự kiện ra mắt, tiến độ pháp lý và những câu chuyện sống tại Sơn Trà.
      </PageHero>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {NEWS.map((n, i) => (
              <Reveal key={n.slug} delay={i * 80}>
                <Link
                  to="/tin-tuc/$slug"
                  params={{ slug: n.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-paper shadow-border"
                >
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <SmartImg
                      slot={`news:${n.slug}`}
                      src={n.image}
                      alt={n.title}
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className={`size-full object-cover transition-transform duration-700 group-hover:scale-105 ${n.imageObjectClass ?? ""}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs tracking-[0.16em] uppercase text-muted">{n.date}</p>
                    <h2 className="mt-2 font-display text-2xl leading-snug group-hover:text-terracotta">
                      {n.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{n.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-terracotta">
                      Đọc bài viết <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
