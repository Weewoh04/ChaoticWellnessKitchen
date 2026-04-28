const defaultSiteUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Chaotic Wellness Kitchen",
  tagline: "A little chaotic. A little crunchy. Very cozy.",
  description:
    "Pantry-friendly wellness recipes, cozy drinks, hydration ideas, broths, and gentle kitchen rituals without exaggerated claims.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? defaultSiteUrl,
  socialImage: "/images/hero-tea.jpg",
  contactEmail: "hello@chaoticwellnesskitchen.com",
};
