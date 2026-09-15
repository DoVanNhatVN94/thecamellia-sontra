import { cn } from "@/lib/utils";

const LOGOS = {
  "on-dark": "/images/brand/logo-white.webp",
  "on-light": "/images/brand/logo-terracotta.webp",
  ink: "/images/brand/logo-ink.webp",
  "nav-dark": "/images/brand/logo-nav-white.webp",
  "nav-light": "/images/brand/logo-nav-terracotta.webp",
} as const;

const MARKS = {
  "on-dark": "/images/brand/mark-white.webp",
  "on-light": "/images/brand/mark-terracotta.webp",
  ink: "/images/brand/mark-ink.webp",
} as const;

export function CamelliaMark({
  className,
  variant = "on-light",
}: {
  className?: string;
  variant?: keyof typeof MARKS;
}) {
  return (
    <img
      src={MARKS[variant]}
      alt=""
      width={40}
      height={40}
      decoding="async"
      className={cn("size-8 object-contain", className)}
      aria-hidden="true"
    />
  );
}

export function CamelliaWordmark({
  className,
  inverted = false,
  compact = false,
}: {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
}) {
  const src = compact
    ? inverted
      ? LOGOS["nav-dark"]
      : LOGOS["nav-light"]
    : inverted
      ? LOGOS["on-dark"]
      : LOGOS["on-light"];
  return (
    <img
      src={src}
      alt="The Camellia Sơn Trà · Đà Nẵng"
      width={compact ? 258 : 220}
      height={compact ? 80 : 81}
      decoding="async"
      fetchPriority={compact ? "high" : "auto"}
      className={cn(compact ? "h-9 w-auto sm:h-10" : "h-12 w-auto sm:h-14", className)}
    />
  );
}
