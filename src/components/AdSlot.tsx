"use client";

import { useEffect, useRef } from "react";

type AdSlotProps = {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  label?: string;
  className?: string;
};

const adScriptSrc = "https://quge5.com/88/tag.min.js";
const adZone = "234249";

export function AdSlot({
  slot: _slot,
  format = "auto",
  label = "Advertisement",
  className = "",
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = adScriptSrc;
    script.async = true;
    script.setAttribute("data-zone", adZone);
    script.setAttribute("data-cfasync", "false");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  const minHeightClass =
    format === "horizontal"
      ? "min-h-[140px]"
      : format === "rectangle"
        ? "min-h-[280px]"
        : "min-h-[160px]";

  return (
    <aside
      aria-label={label}
      className={`overflow-hidden rounded-[2rem] border border-amber-100 bg-white/80 p-3 shadow-sm ${minHeightClass} ${className}`}
    >
      <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.24em] text-stone-500">
        {label}
      </p>
      <div className="flex min-h-[120px] items-center justify-center" ref={containerRef} />
    </aside>
  );
}
