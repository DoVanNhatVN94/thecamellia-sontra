import { useEffect, useRef, useState } from "react";

export function CountUp({
  to,
  suffix = "",
  duration = 1100,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  // SSR + first paint: final value (no 0 flash). Animate only after scroll-into-view.
  const [n, setN] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const wasHidden = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (!entry.isIntersecting) {
          wasHidden.current = true;
          return;
        }
        if (started.current) return;
        started.current = true;
        io.disconnect();

        // Already on-screen at mount (hero stats) — keep final value, no flash.
        if (!wasHidden.current) {
          setN(to);
          return;
        }

        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - (1 - p) ** 3;
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        setN(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const stable = `${to.toLocaleString("vi-VN")}${suffix}`;

  return (
    <span ref={ref} className="tabular-nums" aria-label={stable}>
      <span aria-hidden="true">
        {n.toLocaleString("vi-VN")}
        {suffix}
      </span>
    </span>
  );
}
