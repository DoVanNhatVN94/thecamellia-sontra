import { useRouterState } from "@tanstack/react-router";
import { NEWS } from "@/data/project";
import {
  SITE_ORIGIN,
  apartmentComplexLd,
  articleLd,
  breadcrumbLd,
  faqLd,
  jsonLdGraph,
} from "@/lib/seo";

export function SeoJsonLd() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const origin = SITE_ORIGIN;
  const nodes: object[] = [];

  if (pathname === "/") {
    nodes.push(apartmentComplexLd(origin), faqLd());
  } else if (pathname === "/can-ho") {
    nodes.push(
      apartmentComplexLd(origin),
      breadcrumbLd(
        [
          { name: "Trang chủ", path: "/" },
          { name: "Căn hộ", path: "/can-ho" },
        ],
        origin,
      ),
    );
  } else if (pathname === "/tien-ich") {
    nodes.push(
      breadcrumbLd(
        [
          { name: "Trang chủ", path: "/" },
          { name: "Tiện ích", path: "/tien-ich" },
        ],
        origin,
      ),
    );
  } else if (pathname === "/kham-pha") {
    nodes.push(
      breadcrumbLd(
        [
          { name: "Trang chủ", path: "/" },
          { name: "Khám phá", path: "/kham-pha" },
        ],
        origin,
      ),
    );
  } else if (pathname === "/tin-tuc") {
    nodes.push(
      breadcrumbLd(
        [
          { name: "Trang chủ", path: "/" },
          { name: "Tin tức", path: "/tin-tuc" },
        ],
        origin,
      ),
    );
  } else if (pathname.startsWith("/tin-tuc/")) {
    const slug = pathname.replace("/tin-tuc/", "");
    const article = NEWS.find((n) => n.slug === slug);
    nodes.push(
      breadcrumbLd(
        [
          { name: "Trang chủ", path: "/" },
          { name: "Tin tức", path: "/tin-tuc" },
          { name: article?.title ?? "Bài viết", path: pathname },
        ],
        origin,
      ),
    );
    if (article) nodes.push(articleLd(article, origin));
  } else if (pathname === "/lien-he") {
    nodes.push(
      breadcrumbLd(
        [
          { name: "Trang chủ", path: "/" },
          { name: "Liên hệ", path: "/lien-he" },
        ],
        origin,
      ),
    );
  }

  if (!nodes.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph(nodes, origin)) }}
    />
  );
}
