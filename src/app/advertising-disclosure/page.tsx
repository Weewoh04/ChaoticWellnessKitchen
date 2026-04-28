import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Advertising Disclosure",
  description: "Advertising and sponsored content disclosure for Chaotic Wellness Kitchen.",
};

export default function AdvertisingDisclosurePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <div className="rounded-[2rem] bg-white/85 p-8 shadow-lg sm:p-12">
        <SectionHeading
          eyebrow="Disclosure"
          title="Advertising disclosure"
          description="How ads, sponsorships, and future affiliate relationships are handled on this site."
        />
        <div className="mt-8 space-y-5 text-lg leading-8 text-stone-700">
          <p>
            Chaotic Wellness Kitchen may display advertisements, sponsored placements, or affiliate
            links in the future to support the site.
          </p>
          <p>
            Sponsored content and paid placements should be clearly labeled so readers can
            distinguish editorial content from advertising.
          </p>
          <p>
            Opinions remain editorial and comfort-focused. Payment or partnership does not change
            the site&apos;s commitment to avoiding exaggerated health claims.
          </p>
          <p>
            If affiliate links are added later, the site may earn a commission at no additional
            cost to the reader.
          </p>
        </div>
      </div>
    </div>
  );
}
