export const recipeCategories = [
  {
    title: "Cozy Broths & Healing Feeling Soups",
    slug: "cozy-broths-healing-feeling-soups",
    description: "Savory bowls and brothy cups for cozy, comfort-first days.",
  },
  {
    title: "Warm Drinks",
    slug: "warm-drinks",
    description: "Steamy mugs, gentle teas, and slow-sip kitchen rituals.",
  },
  {
    title: "Cold Wellness/Hydration",
    slug: "cold-wellness-hydration",
    description: "Infused waters and chilled ideas that make sipping feel easier.",
  },
  {
    title: "Remedy Shots and Mixes",
    slug: "remedy-shots-and-mixes",
    description: "Small, punchy mixes for flavor-forward pantry experiments.",
  },
  {
    title: "Cozy Add-Ons",
    slug: "cozy-add-ons",
    description: "Freezer helpers, little toppings, and easy extras.",
  },
] as const;

export type RecipeCategory = (typeof recipeCategories)[number]["title"];

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  category: RecipeCategory;
  bestFor: string[];
  ingredients: string[];
  instructions: string[];
  notes: string[];
  featured?: boolean;
};

export const recipes: Recipe[] = [
  {
    slug: "honey-lemon-ginger-hot-water",
    title: "Honey Lemon Ginger Hot Water",
    description:
      "A bright, cozy cup many people enjoy when they want something warm, simple, and comforting.",
    image: "/images/hero-tea.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["cozy mornings", "scratchy throat days", "pantry-friendly"],
    ingredients: [
      "1 cup hot water",
      "1 teaspoon honey",
      "1 tablespoon fresh lemon juice",
      "2 thin slices fresh ginger",
      "Optional: tiny pinch of cinnamon",
    ],
    instructions: [
      "Add ginger slices to a mug and pour hot water over them.",
      "Let steep for 5 minutes.",
      "Stir in lemon juice and honey once the water is warm, not boiling.",
      "Sip slowly as a gentle kitchen ritual.",
    ],
    notes: [
      "Honey should not be given to infants under 1 year old.",
      "Add more lemon if you like a brighter cup.",
    ],
    featured: true,
  },
  {
    slug: "cinnamon-orange-comfort-tea",
    title: "Cinnamon Orange Comfort Tea",
    description:
      "A softly spiced citrus tea that makes slow mornings feel a little more special.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "12 minutes",
    category: "Warm Drinks",
    bestFor: ["slow mornings", "cozy afternoons", "citrus"],
    ingredients: [
      "1 black tea bag or rooibos tea bag",
      "1 orange slice",
      "1 cinnamon stick",
      "1 teaspoon honey or maple syrup, optional",
    ],
    instructions: [
      "Add tea, orange, and cinnamon to a mug.",
      "Pour over hot water and steep according to the tea package.",
      "Sweeten lightly if desired.",
      "Remove the tea bag and enjoy warm.",
    ],
    notes: ["Rooibos keeps this caffeine-free if that fits your evening routine."],
  },
  {
    slug: "mint-cucumber-hydration-water",
    title: "Mint Cucumber Hydration Water",
    description:
      "A crisp infused water for days when plain water needs a little cozy-kitchen encouragement.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "fresh", "make-ahead"],
    ingredients: [
      "4 cups cold water",
      "1/2 cucumber, thinly sliced",
      "1 small handful fresh mint",
      "Optional: lemon slices",
    ],
    instructions: [
      "Add cucumber, mint, and lemon to a pitcher.",
      "Pour in cold water.",
      "Chill for at least 20 minutes.",
      "Serve over ice.",
    ],
    notes: ["Use within 24 hours for the freshest flavor."],
  },
  {
    slug: "bedtime-honey-lavender-milk",
    title: "Bedtime Honey Lavender Milk",
    description:
      "A gentle, floral warm milk many people enjoy as a calming-feeling evening ritual.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["bedtime ritual", "cozy evenings", "floral"],
    ingredients: [
      "1 cup milk or oat milk",
      "1 teaspoon honey",
      "1/4 teaspoon culinary lavender",
      "Optional: splash of vanilla",
    ],
    instructions: [
      "Warm milk gently in a small saucepan.",
      "Add lavender and steep for 3 minutes on low heat.",
      "Strain into a mug.",
      "Stir in honey and vanilla, if using.",
    ],
    notes: [
      "Use culinary lavender only.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "lemon-ginger-ice-cubes",
    title: "Lemon Ginger Ice Cubes",
    description:
      "Freezer-friendly flavor cubes for sparkling water, iced tea, or a quick warm cup.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes plus freezing",
    category: "Cozy Add-Ons",
    bestFor: ["hydration", "meal prep", "freezer-friendly"],
    ingredients: [
      "1/2 cup fresh lemon juice",
      "1/2 cup water",
      "1 tablespoon grated fresh ginger",
      "Optional: small mint leaves",
    ],
    instructions: [
      "Stir lemon juice, water, and ginger together.",
      "Pour into an ice cube tray.",
      "Add mint leaves if using.",
      "Freeze until solid, then store in a freezer-safe container.",
    ],
    notes: ["Start with one cube per glass and adjust to your taste."],
  },
  {
    slug: "garlic-broth-for-cozy-days",
    title: "Garlic Broth for Cozy Days",
    description:
      "A savory, pantry-friendly broth that feels grounding when you want something simple and warm.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "20 minutes",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["cozy days", "savory", "pantry-friendly"],
    ingredients: [
      "4 cups vegetable or chicken broth",
      "3 garlic cloves, thinly sliced",
      "1 teaspoon olive oil",
      "1 bay leaf",
      "Optional: squeeze of lemon",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Warm olive oil in a small pot over medium-low heat.",
      "Add garlic and cook gently for 1 minute.",
      "Pour in broth and add the bay leaf.",
      "Simmer for 15 minutes.",
      "Season to taste and finish with lemon if desired.",
    ],
    notes: ["Keep the heat gentle so the garlic stays mellow, not bitter."],
  },
  {
    slug: "golden-chicken-bone-broth-soup",
    title: "Golden Chicken Bone Broth Soup",
    description:
      "A cozy golden chicken soup placeholder, ready for the full recipe details soon.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["cozy broths", "comfort soup", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
  {
    slug: "garlic-onion-comfort-broth",
    title: "Garlic Onion Comfort Broth",
    description:
      "A simple, savory broth placeholder for cozy garlic and onion comfort.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["savory", "comfort broth", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
  {
    slug: "lazy-day-rotisserie-chicken-soup",
    title: "Lazy Day Rotisserie Chicken Soup",
    description:
      "A low-effort chicken soup placeholder for days when easy and cozy is the whole plan.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["lazy day", "rotisserie chicken", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
  {
    slug: "turmeric-ginger-chicken-soup",
    title: "Turmeric Ginger Chicken Soup",
    description:
      "A warm, golden chicken soup placeholder with turmeric and ginger notes.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["golden soup", "ginger", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
  {
    slug: "simple-salt-and-herb-bone-broth",
    title: "Simple Salt & Herb Bone Broth",
    description:
      "A pared-back bone broth placeholder with salt, herbs, and cozy simplicity.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["bone broth", "simple", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
  {
    slug: "egg-drop-wellness-broth",
    title: "Egg Drop Wellness Broth",
    description:
      "A silky egg drop broth placeholder for a quick, comforting cup or bowl.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["quick broth", "egg drop", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
  {
    slug: "sick-day-sip-broth",
    title: "Sick Day Sip Broth",
    description:
      "A cozy sipping broth placeholder for days when you want something warm and gentle.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["sipping broth", "cozy days", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
  {
    slug: "freezer-scrap-veggie-broth",
    title: "Freezer Scrap Veggie Broth",
    description:
      "A flexible veggie broth placeholder for turning saved scraps into something cozy.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "Coming soon",
    category: "Cozy Broths & Healing Feeling Soups",
    bestFor: ["veggie broth", "freezer-friendly", "coming soon"],
    ingredients: ["Full ingredient list coming soon."],
    instructions: ["Full instructions coming soon."],
    notes: ["Placeholder recipe. Add the full recipe details when ready."],
  },
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getRecipeCategoryBySlug(slug: string) {
  return recipeCategories.find((category) => category.slug === slug);
}

export function getRecipesByCategory(category: RecipeCategory) {
  return recipes.filter((recipe) => recipe.category === category);
}
