export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cozy-wellness-drinks-for-slow-mornings",
    title: "5 Cozy Wellness Drinks for Slow Mornings",
    excerpt:
      "Simple, pantry-friendly sips for mornings that need warmth, softness, and a little extra comfort.",
    date: "2026-01-12",
    readTime: "4 min read",
    tags: ["cozy mornings", "warm drinks", "rituals"],
  },
  {
    slug: "pantry-for-comfort-recipes",
    title: "What I Keep in My Pantry for Comfort Recipes",
    excerpt:
      "A practical starter list of honey, citrus, ginger, teas, broths, and gentle flavor builders.",
    date: "2026-01-19",
    readTime: "5 min read",
    tags: ["pantry-friendly", "comfort recipes", "kitchen basics"],
  },
  {
    slug: "honey-lemon-ginger-hot-water-go-to-cozy-cup",
    title: "Honey Lemon Ginger Hot Water: My Go-To Cozy Cup",
    excerpt:
      "Why this bright little mug stays in the regular rotation for chilly days and quiet kitchen moments.",
    date: "2026-01-26",
    readTime: "3 min read",
    tags: ["honey", "lemon", "ginger"],
  },
];
