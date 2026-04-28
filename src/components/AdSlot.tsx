"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  label?: string;
  className?: string;
};

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export function AdSlot({
  slot,
  format = "auto",
  label = "Advertisement",
  className = "",
}: AdSlotProps) {
  const isConfigured = Boolean(clientId && slot);

  useEffect(() => {
    if (!isConfigured) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
    } catch {
      // Ignore duplicate slot initialization during development.
    }
  }, [isConfigured, slot]);

  const minHeightClass =
    format === "horizontal"
      ? "min-h-[140px]"
      : format === "rectangle"
        ? "min-h-[280px]"
        : "min-h-[160px]";

  if (!isConfigured) {
    return (
      <aside
        aria-label={label}
        className={`rounded-[2rem] border border-dashed border-amber-300 bg-amber-50/70 p-5 text-center text-sm text-stone-600 ${minHeightClass} ${className}`}
      >
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-800">{label}</p>
        <p className="mt-3">
          Reserved ad placement. Add <code>NEXT_PUBLIC_ADSENSE_CLIENT</code> and a slot ID to turn
          this on.
        </p>
      </aside>
    );
  }

  return (
    <aside
      aria-label={label}
      className={`overflow-hidden rounded-[2rem] border border-amber-100 bg-white/80 p-3 shadow-sm ${minHeightClass} ${className}`}
    >
      <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.24em] text-stone-500">
        {label}
      </p>
      <Script
        async
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle block"
        data-ad-client={clientId}
        data-ad-format={format === "rectangle" ? "fluid" : format}
        data-ad-layout={format === "horizontal" ? "in-article" : undefined}
        data-ad-slot={slot}
        data-full-width-responsive="true"
        style={{ display: "block", minHeight: "120px" }}
      />
    </aside>
  );
}
