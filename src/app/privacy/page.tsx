import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Chaotic Wellness Kitchen.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <div className="rounded-[2rem] bg-white/85 p-8 shadow-lg sm:p-12">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy policy"
          description="A simple explanation of what this site may collect and how advertising tools may be used."
        />
        <div className="mt-8 space-y-5 text-lg leading-8 text-stone-700">
          <p>
            Chaotic Wellness Kitchen may collect basic information you choose to provide, such as
            an email address if newsletter signup is added in the future.
          </p>
          <p>
            This site may also use standard analytics, cookies, and advertising technologies to
            understand traffic, improve content, and show relevant ads if monetization is enabled.
          </p>
          <p>
            Third-party vendors, including advertising partners, may use cookies or similar
            technologies to personalize ads based on prior visits to this and other websites.
          </p>
          <p>
            You can adjust cookie settings in your browser and opt out of personalized advertising
            through applicable industry tools and platform settings.
          </p>
          <p>
            If you have privacy questions, contact {siteConfig.contactEmail}.
          </p>
        </div>
      </div>
    </div>
  );
}
