import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Chaotic Wellness Kitchen and its comfort-first recipe approach.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <div className="rounded-[2rem] bg-white/80 p-8 shadow-lg sm:p-12">
        <SectionHeading
          eyebrow="About"
          title="A cozy recipe space for beautifully imperfect kitchens."
          description="Chaotic Wellness Kitchen is for the days when your counter has crumbs, your mug is mismatched, and you still want something warm and caring."
        />
        <div className="mt-8 space-y-5 text-lg leading-8 text-stone-700">
          <p>
            Here you will find pantry-friendly wellness recipes, warm drinks, hydration ideas,
            infused waters, cozy broths, and gentle kitchen rituals that feel practical and comforting.
          </p>
          <p>
            The tone is intentionally soft and realistic. These recipes are not about perfection,
            complicated routines, or big wellness promises. They are about making a simple cup,
            bowl, or pitcher that helps a day feel a little more cared for.
          </p>
          <p>
            Content on this site is for educational and informational purposes only. It is not
            medical advice, and it should not replace guidance from a qualified healthcare professional.
          </p>
        </div>
      </div>
    </div>
  );
}
