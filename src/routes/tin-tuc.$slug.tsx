import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PeekSlider } from "@/components/media/peek-slider";
import { RelatedNews } from "@/components/media/related-news";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { NEWS, PROJECT } from "@/data/project";
import { SmartImg } from "@/lib/image-src";
import { pageHead, parseDotDate } from "@/lib/seo";
import { useRegister } from "@/lib/register-store";

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
      description: loaderData.excerpt,
      path: `/tin-tuc/${loaderData.slug}`,
      image: loaderData.image,
      type: "article",
      publishedTime: published,
      modifiedTime: published,
      keywords: `${loaderData.title}, The Camellia Sơn Trà, tin tức MBLAND Đà Nẵng`,
    });
  },
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const openWith = useRegister((s) => s.openWith);
  const others = NEWS.filter((n) => n.slug !== article.slug);

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
          slot={article.poster ? `news:${article.slug}:poster` : `news:${article.slug}`}
          src={article.poster ?? article.image}
          alt={article.title}
          fetchPriority="high"
          decoding="async"
          className={
            article.poster
              ? "news-poster"
              : "mt-8 aspect-video w-full rounded-xl object-cover"
          }
        />
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          {article.body.map((block, i) => (
            <div key={i}>
              {block.heading ? (
                <h2 className="mt-8 mb-3 font-display text-2xl text-ink">{block.heading}</h2>
              ) : null}
              <p>{block.text}</p>
              {block.links?.length ? (
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {block.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="font-medium text-terracotta underline-offset-4 hover:underline"
                      >
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          {PROJECT.address} · Hotline {PROJECT.hotlineDisplay}
        </p>
        <Button className="mt-6" onClick={() => openWith()}>
          Nhận bảng giá
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
              alt: article.title,
            }))}
          />
        </div>
      ) : null}

      {others.length ? (
        <RelatedNews articles={others.slice(0, 4)} className="mt-4" />
      ) : (
        <div className="pb-20" />
      )}
    </article>
  );
}
