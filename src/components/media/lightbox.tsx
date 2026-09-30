import { ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";

export type LiteImage = { src: string; alt: string };

type Props = {
  images: LiteImage[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
};

type Point = { x: number; y: number };

const ZOOM_STEP = 1.25;
const WHEEL_ZOOM_SPEED = 0.0025;
/** Allow zoom past native 1:1 (user-scale where CSS px ≈ image px). */
const PAST_NATIVE = 2;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function dist(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function mid(a: Point, b: Point): Point {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function contentSize(el: HTMLElement) {
  const cs = getComputedStyle(el);
  const pl = parseFloat(cs.paddingLeft) || 0;
  const pr = parseFloat(cs.paddingRight) || 0;
  const pt = parseFloat(cs.paddingTop) || 0;
  const pb = parseFloat(cs.paddingBottom) || 0;
  return {
    w: Math.max(0, el.clientWidth - pl - pr),
    h: Math.max(0, el.clientHeight - pt - pb),
  };
}

export function Lightbox({ images, index, onClose, onIndex }: Props) {
  const [mounted, setMounted] = useState(false);
  const current = images[index];

  const viewportRef = useRef<HTMLDivElement>(null);

  /** 1 = fitted to viewport; higher = zoomed in (relative to fit). */
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [maxScale, setMaxScale] = useState(4);
  const [natural, setNatural] = useState({ w: 0, h: 0 });
  const [vpSize, setVpSize] = useState({ w: 0, h: 0 });

  const view = useRef({ scale: 1, tx: 0, ty: 0, maxScale: 4 });
  const pointers = useRef(new Map<number, Point>());
  const gesture = useRef<
    | { type: "pan"; x: number; y: number; tx: number; ty: number }
    | {
        type: "pinch";
        dist: number;
        scale: number;
        tx: number;
        ty: number;
        mid: Point;
        vpLeft: number;
        vpTop: number;
      }
    | null
  >(null);
  const didDragRef = useRef(false);

  /**
   * Fit factor: scale the full-res img down to the content box.
   * Zoom applies as fitScale * userScale so the compositor keeps native pixels.
   */
  const fitScale = useMemo(() => {
    if (!natural.w || !natural.h || !vpSize.w || !vpSize.h) return 1;
    return Math.min(vpSize.w / natural.w, vpSize.h / natural.h);
  }, [natural, vpSize]);

  const displayScale = fitScale * scale;

  const commit = useCallback((next: { scale: number; tx: number; ty: number }) => {
    view.current.scale = next.scale;
    view.current.tx = next.tx;
    view.current.ty = next.ty;
    setScale(next.scale);
    setTx(next.tx);
    setTy(next.ty);
  }, []);

  const resetView = useCallback(() => {
    commit({ scale: 1, tx: 0, ty: 0 });
    pointers.current.clear();
    gesture.current = null;
  }, [commit]);

  const recomputeMax = useCallback(() => {
    const vp = viewportRef.current;
    const { w: nw, h: nh } = natural;
    if (!vp || !nw || !nh) return;
    const { w: vw, h: vh } = contentSize(vp);
    if (!vw || !vh) return;
    setVpSize({ w: vw, h: vh });
    const fit = Math.min(vw / nw, vh / nh);
    const nativeAtFit = fit > 0 ? 1 / fit : 1;
    // Cap allows true 1:1 (nativeAtFit) and past it.
    const nextMax = Math.max(4, nativeAtFit * PAST_NATIVE);
    view.current.maxScale = nextMax;
    setMaxScale(nextMax);
  }, [natural]);

  /** Zoom around a client-space focal point (defaults to viewport center). */
  const applyZoom = useCallback(
    (nextScale: number, focalClient?: Point) => {
      const vp = viewportRef.current;
      if (!vp) return;
      const prev = view.current.scale;
      const s = clamp(nextScale, 1, view.current.maxScale);
      if (s <= 1) {
        commit({ scale: 1, tx: 0, ty: 0 });
        return;
      }
      if (Math.abs(s - prev) < 0.0001) return;
      const rect = vp.getBoundingClientRect();
      const fx = (focalClient?.x ?? rect.left + rect.width / 2) - rect.left;
      const fy = (focalClient?.y ?? rect.top + rect.height / 2) - rect.top;
      const ratio = s / prev;
      commit({
        scale: s,
        tx: fx - (fx - view.current.tx) * ratio,
        ty: fy - (fy - view.current.ty) * ratio,
      });
    },
    [commit],
  );

  const zoomBy = useCallback(
    (factor: number, focal?: Point) => {
      applyZoom(view.current.scale * factor, focal);
    },
    [applyZoom],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setNatural({ w: 0, h: 0 });
    resetView();
  }, [index, current?.src, resetView]);

  useEffect(() => {
    if (!mounted) return;
    recomputeMax();
    const vp = viewportRef.current;
    if (!vp) return;
    const onWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const factor = Math.exp(-e.deltaY * WHEEL_ZOOM_SPEED);
      zoomBy(factor, { x: e.clientX, y: e.clientY });
    };
    vp.addEventListener("wheel", onWheelNative, { passive: false });
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => recomputeMax())
        : null;
    ro?.observe(vp);
    return () => {
      vp.removeEventListener("wheel", onWheelNative);
      ro?.disconnect();
    };
  }, [mounted, recomputeMax, zoomBy]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
      if (e.key === "+" || e.key === "=") zoomBy(ZOOM_STEP);
      if (e.key === "-" || e.key === "_") zoomBy(1 / ZOOM_STEP);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, images.length, onClose, onIndex, zoomBy]);

  function onPointerDown(e: ReactPointerEvent) {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    didDragRef.current = false;

    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const rect = viewportRef.current?.getBoundingClientRect();
      gesture.current = {
        type: "pinch",
        dist: dist(a, b) || 1,
        scale: view.current.scale,
        tx: view.current.tx,
        ty: view.current.ty,
        mid: mid(a, b),
        vpLeft: rect?.left ?? 0,
        vpTop: rect?.top ?? 0,
      };
    } else if (pointers.current.size === 1) {
      gesture.current = {
        type: "pan",
        x: e.clientX,
        y: e.clientY,
        tx: view.current.tx,
        ty: view.current.ty,
      };
    }
  }

  function onPointerMove(e: ReactPointerEvent) {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    if (!g) return;

    if (g.type === "pinch" && pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const d = dist(a, b) || 1;
      const m = mid(a, b);
      const nextScale = clamp(g.scale * (d / g.dist), 1, view.current.maxScale);
      const fx0 = g.mid.x - g.vpLeft;
      const fy0 = g.mid.y - g.vpTop;
      const ratio = nextScale / g.scale;
      let ntx = fx0 - (fx0 - g.tx) * ratio;
      let nty = fy0 - (fy0 - g.ty) * ratio;
      ntx += m.x - g.mid.x;
      nty += m.y - g.mid.y;
      if (nextScale <= 1) {
        commit({ scale: 1, tx: 0, ty: 0 });
      } else {
        commit({ scale: nextScale, tx: ntx, ty: nty });
      }
      didDragRef.current = true;
      return;
    }

    if (g.type === "pan" && pointers.current.size === 1 && view.current.scale > 1) {
      const dx = e.clientX - g.x;
      const dy = e.clientY - g.y;
      if (Math.hypot(dx, dy) > 3) didDragRef.current = true;
      commit({ scale: view.current.scale, tx: g.tx + dx, ty: g.ty + dy });
    }
  }

  function onPointerUp(e: ReactPointerEvent) {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size === 0) {
      gesture.current = null;
      return;
    }
    if (pointers.current.size === 1) {
      const [p] = [...pointers.current.values()];
      gesture.current = {
        type: "pan",
        x: p.x,
        y: p.y,
        tx: view.current.tx,
        ty: view.current.ty,
      };
    }
  }

  function onBackdropClick(e: ReactMouseEvent) {
    if (e.target !== e.currentTarget) return;
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }
    onClose();
  }

  if (!mounted || !current) return null;

  const zoomPct = Math.round(scale * 100);
  const hasNatural = natural.w > 0 && natural.h > 0;
  const layoutReady = hasNatural && vpSize.w > 0 && vpSize.h > 0;
  // User-scale that shows ~1 CSS px per image px.
  const nativeUserScale = fitScale > 0 ? 1 / fitScale : 1;
  // Until viewport is measured, keep CSS object-fit; then switch to native + transform.
  const effectiveDisplayScale = layoutReady ? displayScale : 1;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ink/92"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || "Xem ảnh"}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between p-3 sm:p-4">
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Thu nhỏ"
            disabled={scale <= 1}
            onClick={(e) => {
              e.stopPropagation();
              zoomBy(1 / ZOOM_STEP);
            }}
            className="grid size-11 place-items-center rounded-full border border-paper/20 text-paper disabled:opacity-40"
          >
            <Minus className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Phóng to"
            disabled={scale >= maxScale * 0.99}
            onClick={(e) => {
              e.stopPropagation();
              zoomBy(ZOOM_STEP);
            }}
            className="grid size-11 place-items-center rounded-full border border-paper/20 text-paper disabled:opacity-40"
          >
            <Plus className="size-5" />
          </button>
          <span className="hidden rounded-full border border-paper/20 px-3 py-2 text-xs tracking-widest text-paper/80 tabular-nums sm:inline">
            {zoomPct}%
          </span>
        </div>
        <button
          type="button"
          aria-label="Đóng"
          onClick={onClose}
          className="pointer-events-auto grid size-11 place-items-center rounded-full border border-paper/20 text-paper"
        >
          <X className="size-5" />
        </button>
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Ảnh trước"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + images.length) % images.length);
            }}
            className="absolute top-1/2 left-2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 text-paper sm:left-4"
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
            className="absolute top-1/2 right-2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-paper/20 text-paper sm:right-4"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      ) : null}

      <div
        ref={viewportRef}
        className="relative flex min-h-0 flex-1 touch-none items-center justify-center overflow-hidden p-3 pt-16 pb-14 sm:p-6 sm:pt-16 sm:pb-14"
        onClick={onBackdropClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ cursor: scale > 1 ? "grab" : "default" }}
      >
        <img
          src={current.src}
          alt={current.alt}
          draggable={false}
          width={layoutReady ? natural.w : undefined}
          height={layoutReady ? natural.h : undefined}
          onClick={(e) => e.stopPropagation()}
          onDoubleClick={(e) => {
            e.stopPropagation();
            if (view.current.scale > 1.05) {
              applyZoom(1);
            } else {
              // Jump to native 1:1 (or 2× fit if already near-native).
              const nativeTarget = Math.min(
                view.current.maxScale,
                Math.max(2, nativeUserScale),
              );
              applyZoom(nativeTarget, { x: e.clientX, y: e.clientY });
            }
          }}
          onLoad={(e) => {
            const el = e.currentTarget;
            setNatural({ w: el.naturalWidth, h: el.naturalHeight });
          }}
          className="select-none rounded-md object-contain"
          style={{
            // Full natural layout box — avoid max-w/max-h shrink that rasterizes a
            // small GPU layer; fit + zoom via transform keeps native pixels sharp.
            width: layoutReady ? natural.w : undefined,
            height: layoutReady ? natural.h : undefined,
            maxWidth: layoutReady ? "none" : "100%",
            maxHeight: layoutReady ? "none" : "100%",
            transform: `translate3d(${tx}px, ${ty}px, 0) scale(${effectiveDisplayScale})`,
            transformOrigin: "center center",
          }}
        />
      </div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 z-20 max-w-[90vw] -translate-x-1/2 text-center text-xs tracking-widest text-paper/70 uppercase">
        {index + 1} / {images.length}
        {current.alt ? ` · ${current.alt}` : ""}
        <span className="mt-1 block normal-case tracking-normal text-paper/50 sm:hidden">
          Chụm / kéo để phóng · {zoomPct}%
        </span>
      </p>
    </div>,
    document.body,
  );
}
