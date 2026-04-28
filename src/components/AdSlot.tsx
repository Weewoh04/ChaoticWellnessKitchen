"use client";

type AdSlotProps = {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  label?: string;
  className?: string;
};

export function AdSlot({
  slot: _slot,
  format = "auto",
  label = "Advertisement",
  className = "",
}: AdSlotProps) {
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
      <div className="flex min-h-[120px] items-center justify-center rounded-[1.25rem] border border-dashed border-amber-200 bg-amber-50/60 px-4 text-center text-sm text-stone-600">
        Ad placement reserved. Connect a trusted ad provider before publishing live ads here.
      </div>
    </aside>
  );
}
