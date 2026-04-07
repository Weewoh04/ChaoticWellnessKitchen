import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="font-serif text-2xl text-stone-900" href="/">
          {siteConfig.name}
        </Link>
        <div className="flex flex-wrap gap-2 text-sm font-semibold text-stone-700">
          {navLinks.map((link) => (
            <Link
              className="rounded-full px-3 py-2 transition hover:bg-amber-100 hover:text-stone-950"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
