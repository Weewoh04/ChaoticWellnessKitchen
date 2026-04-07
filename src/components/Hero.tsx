import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#fff7e8_0%,#f4c76f_48%,#dfead7_100%)] px-6 py-14 shadow-xl sm:px-10 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-900">
            Cozy pantry wellness
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-stone-950 sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-stone-800">{siteConfig.tagline}</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
            Simple kitchen rituals, warm drinks, infused waters, and pantry-friendly comfort recipes
            for real-life days that are a little messy and still very cozy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-full bg-stone-900 px-6 py-3 text-center font-bold text-white shadow-lg transition hover:bg-stone-700" href="/recipes">
              Browse recipes
            </Link>
            <Link className="rounded-full bg-white/80 px-6 py-3 text-center font-bold text-stone-900 shadow-sm ring-1 ring-white transition hover:bg-white" href="/about">
              About the kitchen
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white/70 p-4 shadow-2xl">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[radial-gradient(circle_at_28%_20%,#fff8db,transparent_24%),radial-gradient(circle_at_68%_32%,#f0b65f,transparent_26%),linear-gradient(160deg,#f8e6c6,#dce8d5)] p-6">
            <div className="flex h-full flex-col justify-end rounded-[1.25rem] border border-white/80 bg-white/35 p-6 backdrop-blur-sm">
              <p className="font-serif text-3xl text-stone-900">Warm mugs. Soft mornings. No big promises.</p>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Gentle recipe ideas for when your kitchen is lived-in, your pantry is doing its best,
                and comfort is the goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
