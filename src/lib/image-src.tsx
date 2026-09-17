import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ImgHTMLAttributes,
} from "react";
import { companionSrcSet, isBlobUrl } from "@/lib/image-variants";
import { cn } from "@/lib/utils";

/** Align with /sua-anh gate — avoid IndexedDB studio work on production marketing. */
const imageStudioEnabled =
  import.meta.env.VITE_ENABLE_IMAGE_STUDIO === "true" || !import.meta.env.PROD;

type StudioMod = typeof import("@/lib/image-studio");

type Api = {
  ready: boolean;
  hidden: Set<string>;
  overridden: Set<string>;
  resolve: (slotId: string | undefined, fallback: string) => string;
  isHidden: (slotId: string) => boolean;
  replace: (slotId: string, file: File) => Promise<void>;
  hide: (slotId: string, value: boolean) => void;
  reset: (slotId: string) => Promise<void>;
  resetAll: () => Promise<void>;
};

const ImageSrcContext = createContext<Api | null>(null);

async function loadStudio(): Promise<StudioMod> {
  return import("@/lib/image-studio");
}

export function ImageSrcProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(!imageStudioEnabled);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [hidden, setHidden] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!imageStudioEnabled) {
      setReady(true);
      return;
    }
    let live = true;
    const created: string[] = [];
    void (async () => {
      try {
        const studio = await loadStudio();
        const blobs = await studio.loadOverrides();
        const next: Record<string, string> = {};
        for (const [key, blob] of Object.entries(blobs)) {
          const url = URL.createObjectURL(blob);
          created.push(url);
          next[key] = url;
        }
        if (!live) {
          created.forEach((u) => URL.revokeObjectURL(u));
          return;
        }
        setUrls(next);
        setHidden(new Set(studio.loadHidden()));
      } catch {
        /* private mode / no IDB */
      } finally {
        if (live) setReady(true);
      }
    })();
    return () => {
      live = false;
      created.forEach((u) => URL.revokeObjectURL(u));
    };
  }, []);

  const resolve = useCallback(
    (slotId: string | undefined, fallback: string) => {
      if (slotId && urls[slotId]) return urls[slotId];
      return fallback;
    },
    [urls],
  );

  const isHidden = useCallback((slotId: string) => hidden.has(slotId), [hidden]);

  const replace = useCallback(async (slotId: string, file: File) => {
    if (!imageStudioEnabled) return;
    const studio = await loadStudio();
    const blob = await studio.compressImage(file);
    await studio.saveOverride(slotId, blob);
    const url = URL.createObjectURL(blob);
    setUrls((prev) => {
      if (prev[slotId]) URL.revokeObjectURL(prev[slotId]);
      return { ...prev, [slotId]: url };
    });
  }, []);

  const hide = useCallback((slotId: string, value: boolean) => {
    if (!imageStudioEnabled) return;
    setHidden((prev) => {
      const next = new Set(prev);
      if (value) next.add(slotId);
      else next.delete(slotId);
      void loadStudio().then((studio) => studio.saveHidden([...next]));
      return next;
    });
  }, []);

  const reset = useCallback(
    async (slotId: string) => {
      if (!imageStudioEnabled) return;
      const studio = await loadStudio();
      await studio.deleteOverride(slotId);
      setUrls((prev) => {
        if (prev[slotId]) URL.revokeObjectURL(prev[slotId]);
        const next = { ...prev };
        delete next[slotId];
        return next;
      });
      hide(slotId, false);
    },
    [hide],
  );

  const resetAll = useCallback(async () => {
    if (!imageStudioEnabled) return;
    const studio = await loadStudio();
    await studio.clearOverrides();
    setUrls((prev) => {
      Object.values(prev).forEach((u) => URL.revokeObjectURL(u));
      return {};
    });
    setHidden(new Set());
    studio.saveHidden([]);
  }, []);

  const value = useMemo<Api>(
    () => ({
      ready,
      hidden,
      overridden: new Set(Object.keys(urls)),
      resolve,
      isHidden,
      replace,
      hide,
      reset,
      resetAll,
    }),
    [ready, hidden, urls, resolve, isHidden, replace, hide, reset, resetAll],
  );

  return <ImageSrcContext.Provider value={value}>{children}</ImageSrcContext.Provider>;
}

export function useImageSrc() {
  const ctx = useContext(ImageSrcContext);
  if (!ctx) {
    return {
      ready: true,
      hidden: new Set<string>(),
      overridden: new Set<string>(),
      resolve: (_id: string | undefined, fallback: string) => fallback,
      isHidden: () => false,
      replace: async () => {},
      hide: () => {},
      reset: async () => {},
      resetAll: async () => {},
    } satisfies Api;
  }
  return ctx;
}

export function useSlotSrc(slotId: string | undefined, fallback: string) {
  const { resolve } = useImageSrc();
  return resolve(slotId, fallback);
}

export function useVisibleSlides<T>(
  galleryId: string,
  slides: T[],
  srcOf: (slide: T) => string,
): { slide: T; index: number; src: string }[] {
  const { isHidden, resolve } = useImageSrc();
  return slides
    .map((slide, index) => ({ slide, index, src: resolve(`${galleryId}:${index}`, srcOf(slide)) }))
    .filter(({ index }) => !isHidden(`${galleryId}:${index}`));
}

type SmartProps = ImgHTMLAttributes<HTMLImageElement> & {
  slot?: string;
  /** Explicit responsive candidates; also accepts lowercase `srcset`. */
  srcSet?: string;
  srcset?: string;
};

export function SmartImg({
  slot,
  src,
  srcSet,
  srcset,
  className,
  alt,
  onError,
  loading = "lazy",
  decoding = "async",
  ...rest
}: SmartProps) {
  const fallback = typeof src === "string" ? src : "";
  const resolved = useSlotSrc(slot, fallback);
  const [failed, setFailed] = useState(false);
  const overridden = isBlobUrl(resolved);
  const explicit = srcSet ?? srcset;
  // Studio blob overrides have no variants — drop srcset so the browser keeps the override.
  const resolvedSrcSet = overridden
    ? undefined
    : explicit ?? companionSrcSet(fallback) ?? companionSrcSet(resolved);

  useEffect(() => {
    setFailed(false);
  }, [resolved]);

  if (!resolved || failed) {
    return (
      <span
        className={cn(
          "grid place-items-center bg-sand text-center text-xs text-muted",
          className,
        )}
        role="img"
        aria-label={alt || "Đang cập nhật hình"}
      >
        Đang cập nhật hình
      </span>
    );
  }

  return (
    <img
      {...rest}
      src={resolved}
      srcSet={resolvedSrcSet}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={cn("bg-sand", className)}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
    />
  );
}
