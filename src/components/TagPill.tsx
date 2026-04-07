type TagPillProps = {
  label: string;
};

export function TagPill({ label }: TagPillProps) {
  return (
    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
      {label}
    </span>
  );
}
