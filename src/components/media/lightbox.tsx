import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type LiteImage = { src: string; alt: string };

type Props = {
  images: LiteImage[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onIndex }: Props) {
  const [mounted, setMounted] = useState(false);
  const current = images[index];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, images.length, onClose, onIndex]);

  if (!mounted || !current) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || "Xem ảnh"}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Đóng"
        onClick={onClose}
        className="absolute top-4 right-4 grid size-11 place-items-center rounded-full border border-paper/20 text-paper"
      >
        <X className="size-5" />
      </button>
      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Ảnh trước"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + images.length) % images.length);
            }}
            className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 text-paper sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Ảnh sau"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index + 1) % images.length);
            }}
            className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 text-paper sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      ) : null}
      <img
        src={current.src}
        alt={current.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[86vh] max-w-full rounded-md object-contain"
      />
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-widest text-paper/70 uppercase">
        {index + 1} / {images.length}
        {current.alt ? ` · ${current.alt}` : ""}
      </p>
    </div>,
    document.body,
  );
}
