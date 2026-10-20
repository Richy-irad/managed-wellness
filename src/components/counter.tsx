"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: string;
  label: string;
};

const DURATION = 1200;

export default function Counter({ value, label }: CounterProps) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match?.[3] ?? "";
  const hasCommas = match?.[2].includes(",") ?? false;

  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !target) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / DURATION);
              setN(Math.round(p * target));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const formatted = hasCommas ? n.toLocaleString() : String(n);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-between text-center aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-5"
    >
      <span className="text-7xl font-bold text-muted-yellow leading-none">
        {prefix}
        {formatted}
        {suffix}
      </span>
      <span className="w-full text-sm text-white/70 font-josefin-sans capitalize tracking-widest border-t border-dotted border-white/30 pt-3">
        {label}
      </span>
    </div>
  );
}
