import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/media/lightbox";
import { NewsYoutube } from "@/components/media/news-youtube";
import { PeekSlider } from "@/components/media/peek-slider";
import { RelatedNews } from "@/components/media/related-news";
import {
  ThanhThoiLayoutBExtras,
  isThanhThoiArticleSlug,
} from "@/components/media/thanh-thoi-article-extras";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { NEWS, PROJECT } from "@/data/project";
import { SmartImg, useImageSrc } from "@/lib/image-src";
import { pageHead, parseDotDate } from "@/lib/seo";
import { useRegister } from "@/lib/register-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tin-tuc/$slug")({
  loader: ({ params }) => {
    const article = NEWS.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const published = parseDotDate(loaderData.date);
    return pageHead({
      title: loaderData.title,
      description: loaderData.description ?? loaderData.excerpt,
      path: `/tin-tuc/${loaderData.slug}`,
      image: loaderData.image,
      imageAlt: loaderData.imageAlt,
      type: "article",
      publishedTime: published,
      modifiedTime: published,
      keywords: `${loaderData.title}, The Camellia Sơn Trà, tin tức MBLAND Đà Nẵng`,
    });
  },
  component: ArticlePage,
});

function isNewsArticlePath(path: string): path is `/tin-tuc/${string}` {
  return path.startsWith("/tin-tuc/");
}

function ArticlePage() {
  const article = Route.useLoaderData();
  const openWith = useRegister((s) => s.openWith);
  const others = NEWS.filter((n) => n.slug !== article.slug);
  const { resolve, isHidden } = useImageSrc();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const showLayoutB = isThanhThoiArticleSlug(article.slug);

  const heroSrc = article.poster ?? article.image;
  const heroSlot = article.poster ? `news:${article.slug}:poster` : `news:${article.slug}`;
  const galleryId = `news:${article.slug}`;

  const lightboxImages = useMemo(() => {
    const seen = new Set<string>();
    const out: { src: string; alt: string }[] = [];
    const push = (displaySrc: string | undefined | null, alt: string) => {
      if (!displaySrc || seen.has(displaySrc)) return;
      seen.add(displaySrc);
      out.push({ src: displaySrc, alt });
    };

    push(resolve(heroSlot, heroSrc), article.imageAlt ?? article.title);

    article.body.forEach((block, i) => {
      if (!block.image) return;
      const slot = `${galleryId}:body:${i}`;
      if (isHidden(slot)) return;
      push(
        resolve(slot, block.image),
        block.imageAlt ?? block.heading ?? article.title,
      );
    });

    article.gallery.forEach((src, i) => {
      const slot = `${galleryId}:${i}`;
      if (isHidden(slot)) return;
      push(resolve(slot, src), article.title);
    });

    return out;
  }, [article.body, article.gallery, article.imageAlt, article.title, galleryId, heroSlot, heroSrc, isHidden, resolve]);

  const heroClickable = lightboxImages.length > 0;

  const openLightboxAtSrc = (displaySrc: string) => {
    const found = lightboxImages.findIndex((img) => img.src === displaySrc);
    setLightboxIndex(found >= 0 ? found : 0);
    setLightboxOpen(true);
  };

  return (
    <article className="bg-cream pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Breadcrumbs
          items={[{ label: "Tin tức", href: "/tin-tuc" }, { label: article.title }]}
          className="mb-6 text-muted"
        />
        <Link
          to="/tin-tuc"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
        >
          <ArrowLeft className="size-4" /> Tất cả tin tức
        </Link>
        <p className="mt-6 text-xs tracking-[0.16em] uppercase text-terracotta">
          <time dateTime={article.date.split(".").reverse().join("-")}>{article.date}</time>
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">{article.title}</h1>
        <SmartImg
          slot={heroSlot}
          src={heroSrc}
          alt={article.imageAlt ?? article.title}
          fetchPriority="high"
          decoding="async"
          onClick={
            heroClickable
              ? () => {
                  setLightboxIndex(0);
                  setLightboxOpen(true);
                }
              : undefined
          }
          className={cn(
            article.poster && !article.imageObjectClass
              ? "news-poster"
              : `mt-8 aspect-video w-full rounded-xl object-cover ${article.imageObjectClass ?? ""}`,
            heroClickable && "cursor-zoom-in",
          )}
        />
        {article.imageCaption ? (
          <p className="mt-2 text-sm text-muted">{article.imageCaption}</p>
        ) : null}
        {article.youtubeId ? (
          <NewsYoutube
            id={article.youtubeId}
            title={article.youtubeTitle}
            caption={article.youtubeCaption}
          />
        ) : null}

        {showLayoutB ? <ThanhThoiLayoutBExtras /> : null}

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          {article.body.map((block, i) => {
            const bodySlot = `${galleryId}:body:${i}`;
            const bodyHidden = block.image ? isHidden(bodySlot) : true;
            const bodyDisplay = block.image && !bodyHidden ? resolve(bodySlot, block.image) : null;

            return (
              <div key={i}>
                {block.heading ? (
                  <h2 className="mt-8 mb-3 font-display text-2xl text-ink">{block.heading}</h2>
                ) : null}
                {block.text ? <p>{block.text}</p> : null}
                {bodyDisplay ? (
                  <SmartImg
                    slot={bodySlot}
                    src={block.image!}
                    alt={block.imageAlt ?? block.heading ?? article.title}
                    loading="lazy"
                    decoding="async"
                    onClick={() => openLightboxAtSrc(bodyDisplay)}
                    className="mt-4 w-full cursor-zoom-in rounded-xl object-contain shadow-border"
                  />
                ) : null}
                {block.links?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {block.links.map((l) => (
                      <li key={l.to}>
                        {isNewsArticlePath(l.to) ? (
                          <a
                            href={l.to}
                            className="font-medium text-terracotta underline-offset-4 hover:underline"
                          >
                            {l.label} →
                          </a>
                        ) : (
                          <Link
                            to={l.to}
                            className="font-medium text-terracotta underline-offset-4 hover:underline"
                          >
                            {l.label} →
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-sm text-muted">
          {PROJECT.address} · Hotline {PROJECT.hotlineDisplay}
        </p>
        <Button className="mt-6" onClick={() => openWith()}>
          Nhận quỹ căn phù hợp
        </Button>
      </div>

      {article.gallery.length ? (
        <div className="mx-auto mt-16 max-w-6xl px-4 pb-16 sm:px-6">
          <p className="kicker">Hình ảnh</p>
          <h2 className="mt-3 mb-6 font-display text-3xl">Thư viện hình ảnh</h2>
          <PeekSlider
            galleryId={`news:${article.slug}`}
            slides={article.gallery.map((src) => ({
              src,
              alt:
                (src === article.poster ? article.imageAlt : undefined) ??
                article.body.find((block) => block.image === src)?.imageAlt ??
                article.title,
              fit: article.galleryFit,
            }))}
          />
        </div>
      ) : null}

      {others.length ? (
        <RelatedNews articles={others.slice(0, 4)} className="mt-4" />
      ) : (
        <div className="pb-20" />
      )}

      {lightboxOpen ? (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onIndex={setLightboxIndex}
        />
      ) : null}
    </article>
  );
}
