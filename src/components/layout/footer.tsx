import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CamelliaWordmark } from "@/components/camellia-logo";
import { PROJECT } from "@/data/project";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <CamelliaWordmark inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
            {PROJECT.slogan}. Căn hộ biển kề rừng, sở hữu lâu dài tại Sơn Trà —
            nơi rừng, phố và biển gặp nhau.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker text-terracotta-soft">Dự án</p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            <li>
              <Link to="/" className="hover:text-paper">
                Tổng quan
              </Link>
            </li>
            <li>
              <Link to="/can-ho" className="hover:text-paper">
                Loại căn hộ
              </Link>
            </li>
            <li>
              <Link to="/kham-pha" className="hover:text-paper">
                Khám phá 360
              </Link>
            </li>
            <li>
              <Link to="/tien-ich" className="hover:text-paper">
                Tiện ích
              </Link>
            </li>
            <li>
              <Link to="/tin-tuc" className="hover:text-paper">
                Tin tức
              </Link>
            </li>
            <li>
              <Link to="/lien-he" className="hover:text-paper">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker text-terracotta-soft">Liên hệ tư vấn</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <address className="not-italic">{PROJECT.address}</address>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={`tel:${PROJECT.hotlineTel}`} className="font-num hover:text-paper">
                Hotline {PROJECT.hotlineDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0" />
              <a href={PROJECT.zalo} target="_blank" rel="noreferrer" className="font-num hover:text-paper">
                Zalo {PROJECT.hotlineDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${PROJECT.email}`} className="hover:text-paper">
                {PROJECT.email}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-paper/50">
            Chủ đầu tư: {PROJECT.developer}
            <br />
            Phát triển dự án: {PROJECT.operator} · Kinh doanh: {PROJECT.sales}
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-[11px] text-paper/45 sm:flex-row sm:justify-between sm:px-6">
          <p>Trang tư vấn bán hàng. Thông tin tham khảo từ chủ đầu tư, có thể thay đổi.</p>
          <p>
            <span>© {new Date().getFullYear()} The Camellia Sơn Trà</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
