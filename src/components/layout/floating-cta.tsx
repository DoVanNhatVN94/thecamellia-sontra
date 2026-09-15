import { MessageCircle, Phone } from "lucide-react";
import { PROJECT } from "@/data/project";
import { useRegister } from "@/lib/register-store";

export function FloatingCta() {
  const openWith = useRegister((s) => s.openWith);
  return (
    <>
      <div className="fixed right-4 bottom-4 z-30 hidden flex-col gap-3 sm:flex">
        <a
          href={`tel:${PROJECT.hotlineTel}`}
          className="grid size-[3.25rem] place-items-center rounded-full bg-ink text-paper shadow-border transition-transform duration-150 hover:opacity-90 active:scale-[0.96]"
          aria-label={`Gọi ${PROJECT.hotlineDisplay}`}
        >
          <Phone className="size-5" />
        </a>
        <a
          href={PROJECT.zalo}
          target="_blank"
          rel="noreferrer"
          className="grid size-[3.25rem] place-items-center rounded-full bg-ink-soft text-paper shadow-border transition-transform duration-150 hover:opacity-90 active:scale-[0.96]"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="size-5" />
        </a>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-stone bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md sm:hidden">
        <a
          href={`tel:${PROJECT.hotlineTel}`}
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 text-[0.65rem] font-medium tracking-wide"
        >
          <Phone className="size-4" />
          Gọi ngay
        </a>
        <a
          href={PROJECT.zalo}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 text-[0.65rem] font-medium tracking-wide"
        >
          <MessageCircle className="size-4" />
          Zalo
        </a>
        <button
          type="button"
          onClick={() => openWith()}
          className="min-h-[3.25rem] bg-terracotta text-[0.65rem] font-medium tracking-wide text-paper"
        >
          Nhận bảng giá
        </button>
      </div>
    </>
  );
}
