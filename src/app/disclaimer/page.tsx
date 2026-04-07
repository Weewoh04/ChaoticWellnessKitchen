import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Wellness disclaimer for Chaotic Wellness Kitchen.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <div className="rounded-[2rem] bg-white/85 p-8 shadow-lg sm:p-12">
        <SectionHeading
          eyebrow="Disclaimer"
          title="Wellness disclaimer"
          description="A clear note about how to use the recipes and content on this site."
        />
        <div className="mt-8 space-y-5 text-lg leading-8 text-stone-700">
          <p>
            The content on Chaotic Wellness Kitchen is provided for educational and informational
            purposes only. It is not medical advice and is not a substitute for professional medical
            guidance, diagnosis, or care.
          </p>
          <p>
            Recipes and articles on this site are not intended to diagnose, treat, cure, or prevent
            disease. Individual needs can vary, and ingredients that feel supportive for one person
            may not be appropriate for another.
          </p>
          <p>
            Please check with a qualified healthcare professional if you are pregnant, nursing,
            taking medications, managing health conditions, or have questions about specific
            ingredients.
          </p>
          <p>
            Honey should not be given to infants under 1 year old. Always use your best judgment
            with food safety, allergies, and personal dietary needs.
          </p>
        </div>
      </div>
    </div>
  );
}
