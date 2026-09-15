import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CamelliaWordmark } from "@/components/camellia-logo";
import { Button } from "@/components/ui/button";
import { NAV, PROJECT } from "@/data/project";
import { useRegister } from "@/lib/register-store";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  const solid = scrolled || !onHome || open;
  const openRegister = useRegister((s) => s.openWith);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-250",
        solid ? "bg-ink text-paper shadow-border" : "bg-transparent text-paper",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link to="/" aria-label="The Camellia Sơn Trà" className="shrink-0">
          <CamelliaWordmark inverted compact />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => {
            const active =
              item.to !== "/" &&
              (pathname === item.to || pathname.startsWith(`${item.to}/`));
            const cls = cn(
              "text-[0.72rem] font-medium tracking-[0.16em] uppercase transition-opacity duration-150",
              active ? "opacity-100" : "opacity-80 hover:opacity-100",
            );
            return item.href.startsWith("/#") ? (
              <a key={item.label} href={item.href} className={cls}>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={cls}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PROJECT.hotlineTel}`}
            className="hidden items-center gap-2 pr-1 text-sm md:inline-flex"
          >
            <Phone className="size-3.5" />
            <span className="font-num tracking-wide">{PROJECT.hotlineDisplay}</span>
          </a>
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => openRegister()}
          >
            Nhận bảng giá
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-paper/10 bg-ink px-4 py-4 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-paper/10 text-sm tracking-[0.14em] uppercase"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center border-b border-paper/10 text-sm tracking-[0.14em] uppercase"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Button className="mt-4 w-full" onClick={() => openRegister()}>
            Nhận bảng giá
          </Button>
        </div>
      ) : null}
    </header>
  );
}
