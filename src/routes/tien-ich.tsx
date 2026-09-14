import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { ImageMarquee } from "@/components/media/marquee";
import { PeekSlider } from "@/components/media/peek-slider";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { AMENITY_LAYERS, GALLERIES } from "@/data/project";
import { SmartImg } from "@/lib/image-src";
import { PAGES, pageHead } from "@/lib/seo";
import { useRegister } from "@/lib/register-store";

export const Route = createFileRoute("/tien-ich")({
  head: () => pageHead(PAGES.amenities),
  component: AmenitiesPage,
});

function amenityPhotos() {
  return GALLERIES.amenity.filter((s) => !("fit" in s && s.fit === "contain"));
}

function AmenitiesPage() {
  const openWith = useRegister((s) => s.openWith);
  const photos = amenityPhotos();
  return (
    <SiteShell>
      <PageHero
        kicker="42 tiện ích"
        title="42 tiện ích The Camellia Sơn Trà"
        crumbs={[{ label: "Tiện ích" }]}
        slides={[...photos.slice(0, 4)]}
      >
        Wellness · Nature · Community · Everyday Living — tiện ích xếp lớp theo
        nhịp sống cư dân, không dồn hết ở khối đế.
      </PageHero>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6">
          {AMENITY_LAYERS.map((layer, i) => (
            <Reveal key={layer.id}>
              <article className="grid items-start gap-8 lg:grid-cols-5">
                <SmartImg
                  slot={`amenity-layer:${layer.id}`}
                  src={layer.image}
                  alt={layer.title}
                  loading="lazy"
                  decoding="async"
                  className="img-reveal aspect-4/3 w-full rounded-xl object-cover lg:col-span-2"
                />
                <div className="lg:col-span-3">
                  <p className="kicker">{layer.kicker}</p>
                  <h2 className="mt-2 font-display text-3xl">{layer.title}</h2>
                  <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-stone bg-paper px-3 py-2.5 text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              {i === 1 ? (
                <div className="mt-10">
                  <PeekSlider slides={[...GALLERIES.amenity]} galleryId="amenity" />
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl">Thư viện hình ảnh</h2>
          </Reveal>
          <div className="mt-8">
            <ImageMarquee items={[...photos]} galleryId="amenity" />
          </div>
          <Button className="mt-10" onClick={() => openWith()}>
            Đăng ký tham quan tiện ích
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
