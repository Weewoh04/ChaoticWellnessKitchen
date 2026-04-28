import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-stone-600 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-serif text-2xl text-stone-900">{siteConfig.name}</p>
          <p className="mt-2">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-3 md:text-right">
          <p>
            Content is for educational and informational purposes only and is not medical advice.
            Please read the <Link className="font-semibold text-amber-800 underline" href="/disclaimer">full disclaimer</Link>.
          </p>
          <p>
            Read the <Link className="font-semibold text-amber-800 underline" href="/privacy">privacy policy</Link> and <Link className="font-semibold text-amber-800 underline" href="/advertising-disclosure">advertising disclosure</Link>.
          </p>
          <p>Copyright {new Date().getFullYear()} Chaotic Wellness Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
