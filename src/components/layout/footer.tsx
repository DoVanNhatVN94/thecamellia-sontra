import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { CamelliaWordmark } from "@/components/camellia-logo";
import { PROJECT } from "@/data/project";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <CamelliaWordmark inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/85">
            {PROJECT.slogan}. Căn hộ biển kề rừng, sở hữu lâu dài tại Sơn Trà —
            nơi rừng, phố và biển gặp nhau.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker text-paper">Dự án</p>
          <ul className="mt-4 space-y-1 text-sm text-paper/85">
            <li>
              <Link to="/" className="inline-flex min-h-11 items-center py-1.5 hover:text-paper">
                Tổng quan
              </Link>
            </li>
            <li>
              <Link to="/can-ho" className="inline-flex min-h-11 items-center py-1.5 hover:text-paper">
                Loại căn hộ
              </Link>
            </li>
            <li>
              <Link to="/kham-pha" className="inline-flex min-h-11 items-center py-1.5 hover:text-paper">
                Khám phá 360
              </Link>
            </li>
            <li>
              <Link to="/tien-ich" className="inline-flex min-h-11 items-center py-1.5 hover:text-paper">
                Tiện ích
              </Link>
            </li>
            <li>
              <Link to="/tin-tuc" className="inline-flex min-h-11 items-center py-1.5 hover:text-paper">
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="/lien-he" className="inline-flex min-h-11 items-center py-1.5 hover:text-paper">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker text-paper">Liên hệ tư vấn</p>
          <ul className="mt-4 space-y-1 text-sm text-paper/85">
            <li className="flex min-h-11 items-start gap-2.5 py-1.5">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <address className="not-italic">{PROJECT.address}</address>
            </li>
            <li className="flex min-h-11 items-center gap-2.5 py-1.5">
              <Phone className="size-4 shrink-0" />
              <a href={`tel:${PROJECT.hotlineTel}`} className="font-num hover:text-paper">
                Hotline {PROJECT.hotlineDisplay}
              </a>
            </li>
            <li className="flex min-h-11 items-center gap-2.5 py-1.5">
              <MessageCircle className="size-4 shrink-0" />
              <a href={PROJECT.zalo} target="_blank" rel="noreferrer" className="font-num hover:text-paper">
                Zalo {PROJECT.hotlineDisplay}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-paper/80">
            Chủ đầu tư: {PROJECT.developer}
            <br />
            Phát triển dự án: {PROJECT.operator} · Kinh doanh: {PROJECT.sales}
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-[11px] text-paper/75 sm:flex-row sm:justify-between sm:px-6">
          <p>Trang tư vấn bán hàng. Thông tin tham khảo từ chủ đầu tư, có thể thay đổi.</p>
          <p>
            <span>© {new Date().getFullYear()} The Camellia Sơn Trà</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
