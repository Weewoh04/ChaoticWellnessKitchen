export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  intro: string[];
  sections: BlogSection[];
  closing: string[];
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
    intro: [
      "Some mornings ask for coffee. Some mornings ask for a mug you can hold with both hands while the kitchen slowly wakes up around you.",
      "These cozy drink ideas are simple, pantry-friendly, and comfort-first. They are not here to promise anything dramatic. They are just warm, practical little rituals many people enjoy when they want a softer start.",
    ],
    sections: [
      {
        heading: "1. Honey Lemon Ginger Hot Water",
        paragraphs: [
          "This is the bright, classic cup that fits into almost any morning. Hot water, lemon, ginger, and honey make a simple sip that feels cozy without being complicated.",
          "Use fresh ginger if you have it, or keep it very simple with lemon and honey when the pantry is running low.",
        ],
      },
      {
        heading: "2. Golden Turmeric Milk",
        paragraphs: [
          "Golden turmeric milk is a warm, creamy option for mornings that feel slow or evenings that need a gentle landing. A little cinnamon keeps it soft and cozy.",
          "Milk, turmeric, honey, and cinnamon are enough. No specialty powders required.",
        ],
      },
      {
        heading: "3. Brown Sugar Ginger Tea",
        paragraphs: [
          "This one is for ginger lovers. Fresh ginger gives it a warm little kick, while brown sugar makes the cup feel mellow and nostalgic.",
          "It is especially nice when you want something sweet but still simple.",
        ],
      },
      {
        heading: "4. Clove Orange Tea",
        paragraphs: [
          "Orange and clove make the kitchen smell lovely with almost no effort. It feels like the coziest parts of winter, even if you are just making a quick mug between chores.",
          "Use a light hand with clove because a little goes a long way.",
        ],
      },
      {
        heading: "5. Salted Honey Hydration Tea",
        paragraphs: [
          "This warm sip is light, simple, and pantry-friendly. Honey, lemon, warm water, and a tiny pinch of salt make a quiet little reset cup.",
          "Keep the salt truly tiny so the drink stays soft and pleasant.",
        ],
      },
    ],
    closing: [
      "The best cozy morning drink is the one you will actually make. Start with what you already have, keep the mug simple, and let the ritual be easy.",
      "As always, these ideas are for comfort and kitchen inspiration only, not medical advice.",
    ],
  },
  {
    slug: "pantry-for-comfort-recipes",
    title: "What I Keep in My Pantry for Comfort Recipes",
    excerpt:
      "A practical starter list of honey, citrus, ginger, teas, broths, and gentle flavor builders.",
    date: "2026-01-19",
    readTime: "5 min read",
    tags: ["pantry-friendly", "comfort recipes", "kitchen basics"],
    intro: [
      "A comfort pantry does not need to be perfect, expensive, or aesthetic enough for a labeled glass jar video. It just needs to help you make something warm, simple, and reassuring when real life is happening.",
      "Here are the ingredients I like to keep around for cozy drinks, broths, hydration ideas, and gentle kitchen rituals.",
    ],
    sections: [
      {
        heading: "Warm drink basics",
        paragraphs: [
          "Honey, lemons, ginger, cinnamon sticks, cloves, tea bags, and milk or oat milk can carry a lot of cozy recipes.",
          "With just those basics, you can make hot lemon ginger water, cinnamon honey tea, clove orange tea, or a no-coffee maple cinnamon latte.",
        ],
        list: [
          "Honey",
          "Lemons or bottled lemon juice",
          "Fresh ginger or ginger tea",
          "Cinnamon, cloves, and turmeric",
          "Herbal tea, black tea, or rooibos",
        ],
      },
      {
        heading: "Broth and soup helpers",
        paragraphs: [
          "Broth is one of the easiest comfort shortcuts. Keep a carton, jar, or freezer container around and you can build a cozy mug or soup quickly.",
          "Garlic, onion, carrots, celery, rice, noodles, and rotisserie chicken are all helpful when you want something more filling.",
        ],
        list: [
          "Chicken broth, veggie broth, or bone broth",
          "Garlic and onions",
          "Carrots and celery",
          "Rice or noodles",
          "Frozen vegetables",
        ],
      },
      {
        heading: "Cold hydration add-ins",
        paragraphs: [
          "For chilled drinks, keep things light and flexible. Cucumber, mint, citrus, berries, basil, chia seeds, and herbal tea cubes can make plain water feel more inviting.",
          "This is not about rules. It is about making sipping feel easier and more enjoyable.",
        ],
      },
      {
        heading: "Cozy add-ons",
        paragraphs: [
          "A comfort pantry also includes the tiny extras that turn a mug of broth into a small meal. Think crackers, bread, oats, rice, butter, and eggs.",
          "Honey butter toast, garlic herb toast, soft scrambled eggs, or a simple rice bowl can make a cozy recipe feel more complete.",
        ],
      },
    ],
    closing: [
      "Build your pantry slowly. Start with the ingredients you already like and add one or two helpers at a time.",
      "The goal is not a perfect wellness shelf. The goal is having enough simple options to make something comforting when you need it.",
    ],
  },
  {
    slug: "honey-lemon-ginger-hot-water-go-to-cozy-cup",
    title: "Honey Lemon Ginger Hot Water: My Go-To Cozy Cup",
    excerpt:
      "Why this bright little mug stays in the regular rotation for chilly days and quiet kitchen moments.",
    date: "2026-01-26",
    readTime: "3 min read",
    tags: ["honey", "lemon", "ginger"],
    intro: [
      "Honey lemon ginger hot water is one of those tiny kitchen rituals that feels more special than the effort it takes.",
      "It is bright from the lemon, warm from the ginger, and softened with honey. It is the kind of cup I reach for when I want something cozy but not heavy.",
    ],
    sections: [
      {
        heading: "Why it works as a cozy ritual",
        paragraphs: [
          "This mug is simple enough for a busy morning and soft enough for a quiet evening. You only need hot water, lemon, ginger, and honey.",
          "The ritual is part of the comfort: slice the ginger, squeeze the lemon, stir in the honey, and give yourself a minute before the next thing.",
        ],
      },
      {
        heading: "How I like to make it",
        paragraphs: [
          "I steep fresh ginger in hot water for a few minutes first, then add lemon juice and honey after the water cools slightly.",
          "That keeps the flavor bright and makes the cup easier to sip slowly.",
        ],
        list: [
          "1 cup hot water",
          "1 to 2 teaspoons honey",
          "Juice from 1/2 lemon",
          "4 to 6 slices fresh ginger",
        ],
      },
      {
        heading: "Small ways to change it",
        paragraphs: [
          "Add a tiny pinch of cinnamon if you want it warmer and softer. Add more lemon if you want it brighter. Use less ginger if you want it mellow.",
          "There is no need to make it fussy. The cozy version is the one that tastes good to you.",
        ],
      },
      {
        heading: "A gentle note",
        paragraphs: [
          "This is a comfort drink, not medical advice. Honey should not be given to infants under 1 year old.",
          "If you have questions about ingredients and your personal health needs, check with a qualified healthcare professional.",
        ],
      },
    ],
    closing: [
      "If your kitchen is a little chaotic, this is a forgiving place to start. A mug, a lemon, a little ginger, and a few quiet sips can still feel like care.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
