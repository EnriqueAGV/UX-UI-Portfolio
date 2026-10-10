"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fades [data-reveal] elements up as they scroll into view. Mounted once in the layout;
// re-scans on every route change. Without JS, or with reduced motion, everything is just visible.
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    if (reduced() || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

// Counts the leading number of a stat ("86", "3.5%", "10K", "4.5:1") up from zero once visible.
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || reduced() || !("IntersectionObserver" in window)) return;
    const target = parseFloat(match[1]);
    const decimals = match[1].split(".")[1]?.length ?? 0;
    const suffix = match[2];
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown((target * eased).toFixed(decimals) + suffix);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setShown((0).toFixed(decimals) + suffix);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{shown}</span>
    </span>
  );
}
