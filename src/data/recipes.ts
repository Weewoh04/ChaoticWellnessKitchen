export const recipeCategories = [
  {
    title: "Cozy Broths & Comfort Soups",
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
      "A bright, cozy cup many people enjoy for comfort hydration and slow sipping.",
    image: "/images/hero-tea.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["cozy mornings", "scratchy throat days", "comfort hydration"],
    ingredients: [
      "1 cup hot water",
      "1 to 2 teaspoons honey",
      "1/2 lemon, juiced",
      "4 to 6 slices fresh ginger",
    ],
    instructions: [
      "Heat water until hot.",
      "Add ginger and steep 5 to 8 minutes.",
      "Stir in lemon juice and honey.",
      "Sip warm.",
    ],
    notes: [
      "Honey should not be given to infants under 1 year old.",
      "Cozy, simple, and grounding.",
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
    slug: "cucumber-mint-calm-water",
    title: "Cucumber Mint Calm Water",
    description:
      "A crisp infused water for warm afternoons and light, refreshing sipping.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "fresh", "make-ahead"],
    ingredients: ["4 cups cold water", "6 cucumber slices", "6 mint leaves", "Ice, optional"],
    instructions: [
      "Add cucumber and mint to a pitcher.",
      "Pour in cold water.",
      "Chill for at least 20 minutes.",
      "Serve cold.",
    ],
    notes: ["Light and refreshing.", "Best enjoyed same day."],
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
      "Freezer-friendly flavor cubes for quick cold drinks, water, or tea.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes plus freezing",
    category: "Cold Wellness/Hydration",
    bestFor: ["quick wellness drinks", "easy add-ins", "freezer-friendly"],
    ingredients: ["1 cup water", "1 tablespoon grated ginger", "2 tablespoons lemon juice"],
    instructions: [
      "Mix all ingredients.",
      "Pour into ice cube tray.",
      "Freeze until solid.",
      "Add cubes to water or tea.",
    ],
    notes: ["Great for fast flavor without prep."],
  },
  {
    slug: "garlic-broth-for-cozy-days",
    title: "Garlic Broth for Cozy Days",
    description:
      "A savory, pantry-friendly broth that feels grounding when you want something simple and warm.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "20 minutes",
    category: "Cozy Broths & Comfort Soups",
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
      "A warm, golden chicken soup for cozy reset days and comfort-first meals.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "30 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["cozy reset days", "slow evenings", "comfort meals"],
    ingredients: [
      "6 cups chicken bone broth",
      "1 to 2 cups shredded chicken (rotisserie works great)",
      "2 carrots, sliced",
      "2 celery stalks, chopped",
      "1/2 onion, diced",
      "2 cloves garlic, minced",
      "1/2 teaspoon turmeric",
      "Salt to taste",
    ],
    instructions: [
      "Bring bone broth to a gentle simmer.",
      "Add carrots, celery, onion, and garlic.",
      "Simmer 15 to 20 minutes until vegetables are soft.",
      "Stir in turmeric and shredded chicken.",
      "Let simmer another 5 to 10 minutes.",
      "Salt to taste and serve warm.",
    ],
    notes: [
      "Add rice or noodles if you want it more filling.",
      "Many people enjoy this when they want something warm and grounding.",
    ],
  },
  {
    slug: "garlic-onion-comfort-broth",
    title: "Garlic Onion Comfort Broth",
    description:
      "A simple, savory broth for low-effort comfort and light cozy meals.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "20 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["simple comfort", "light meals", "low appetite days"],
    ingredients: [
      "4 cups broth (chicken or veggie)",
      "4 cloves garlic, smashed",
      "1/2 onion, sliced",
      "1 tablespoon olive oil or butter",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat oil in a pot and lightly saute garlic and onion until soft.",
      "Add broth and bring to a simmer.",
      "Let cook 10 to 15 minutes.",
      "Season and serve warm.",
    ],
    notes: [
      "You can strain it or leave it chunky.",
      "Add toast or crackers on the side for extra comfort.",
    ],
  },
  {
    slug: "lazy-day-rotisserie-chicken-soup",
    title: "Lazy Day Rotisserie Chicken Soup",
    description:
      "A quick, low-effort chicken soup for busy days when cozy is the whole plan.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "25 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["busy days", "quick comfort meals", "rotisserie chicken"],
    ingredients: [
      "6 cups broth",
      "1 rotisserie chicken, shredded",
      "1 cup frozen veggies or chopped carrots and celery",
      "Salt and pepper to taste",
      "Optional: noodles or rice",
    ],
    instructions: [
      "Add broth and veggies to a pot and bring to a simmer.",
      "Cook 10 to 15 minutes.",
      "Add shredded chicken.",
      "Add noodles or rice if using and cook until done.",
      "Season and serve.",
    ],
    notes: ["This is a great low-effort comfort recipe for tired days."],
  },
  {
    slug: "turmeric-ginger-chicken-soup",
    title: "Turmeric Ginger Chicken Soup",
    description:
      "A warm, slightly bold chicken soup with turmeric, ginger, garlic, and cozy broth.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "25 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["cozy evenings", "warming meals", "ginger"],
    ingredients: [
      "6 cups broth",
      "1 cup cooked chicken",
      "1 tablespoon fresh ginger, grated",
      "1/2 teaspoon turmeric",
      "2 cloves garlic, minced",
      "1 carrot, sliced",
      "Salt to taste",
    ],
    instructions: [
      "Bring broth to a simmer.",
      "Add ginger, garlic, carrot, and turmeric.",
      "Simmer 15 minutes.",
      "Add chicken and cook 5 more minutes.",
      "Season and serve.",
    ],
    notes: ["Warm, cozy, and slightly bold in flavor."],
  },
  {
    slug: "simple-salt-and-herb-bone-broth",
    title: "Simple Salt & Herb Bone Broth",
    description:
      "A minimal, cozy broth with herbs and a pinch of salt for simple sipping.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["calm", "simple", "reset days"],
    ingredients: [
      "4 cups broth",
      "Fresh herbs (parsley, thyme, or rosemary)",
      "Pinch of salt",
    ],
    instructions: [
      "Heat broth gently.",
      "Add herbs and let steep 5 to 10 minutes.",
      "Remove herbs if desired and serve warm.",
    ],
    notes: ["Minimal, calming, and very easy."],
  },
  {
    slug: "egg-drop-wellness-broth",
    title: "Egg Drop Wellness Broth",
    description:
      "A silky egg drop broth for a quick, comforting cup or light bowl.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["light meals", "quick comfort", "egg drop"],
    ingredients: [
      "4 cups broth",
      "2 eggs, whisked",
      "Salt and pepper to taste",
      "Optional: green onion",
    ],
    instructions: [
      "Bring broth to a gentle simmer.",
      "Slowly drizzle in whisked eggs while stirring.",
      "Let eggs cook into soft ribbons.",
      "Season and serve immediately.",
    ],
    notes: [
      "This takes less than 10 minutes from start to finish.",
      "Great when you want something warm but very light.",
    ],
  },
  {
    slug: "sick-day-sip-broth",
    title: "Sick Day Sip Broth",
    description:
      "A simple, warm broth you can sip slowly when you do not feel like eating but still want something comforting and easy.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["quiet days", "low energy", "light sipping", "cozy recovery"],
    ingredients: [
      "2 to 3 cups chicken broth or veggie broth",
      "1 small clove garlic, lightly smashed, optional",
      "Pinch of salt, if needed",
      "Squeeze of lemon, optional",
      "Pinch of turmeric, optional",
    ],
    instructions: [
      "Pour broth into a small pot.",
      "Add garlic and turmeric if using.",
      "Heat gently until warm, not aggressively boiling.",
      "Remove garlic if you prefer a smoother sip.",
      "Add a squeeze of lemon if desired.",
      "Pour into a mug and sip slowly.",
    ],
    notes: [
      "This is meant to be sipped, not eaten like a full soup.",
      "Many people enjoy this when they want something warm but very light.",
      "Adjust ingredients based on what sounds good that day.",
    ],
  },
  {
    slug: "freezer-scrap-veggie-broth",
    title: "Freezer Scrap Veggie Broth",
    description:
      "A flexible veggie broth for turning saved scraps into something cozy and useful.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "1 hour",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["reducing waste", "pantry cooking", "freezer-friendly"],
    ingredients: [
      "Veggie scraps (carrot peels, onion ends, celery tops, etc.)",
      "6 to 8 cups water",
      "Salt to taste",
      "Optional: garlic, herbs",
    ],
    instructions: [
      "Add everything to a pot.",
      "Bring to a boil, then simmer 30 to 60 minutes.",
      "Strain out solids.",
      "Salt to taste.",
    ],
    notes: [
      "Store in the fridge or freeze for later.",
      "Every batch will taste a little different.",
    ],
  },
  {
    slug: "lemon-chicken-rice-broth",
    title: "Lemon Chicken Rice Broth",
    description:
      "A light, cozy broth with soft rice and lemon that feels simple and comforting.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "15 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["light meals", "simple comfort", "cozy comfort"],
    ingredients: [
      "4 cups chicken broth",
      "1/2 cup cooked rice",
      "1/2 cup shredded chicken",
      "Squeeze of lemon",
      "Salt to taste",
    ],
    instructions: [
      "Bring broth to a simmer.",
      "Add rice and chicken.",
      "Heat through.",
      "Add lemon and salt.",
      "Serve warm.",
    ],
    notes: ["Soft, simple, and easy to eat."],
  },
  {
    slug: "miso-ginger-comfort-broth",
    title: "Miso Ginger Comfort Broth",
    description:
      "A warm, savory broth with ginger and miso for a simple cozy sip.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["cozy evenings", "light meals"],
    ingredients: ["2 cups hot water", "1 tablespoon miso paste", "1 teaspoon grated ginger"],
    instructions: [
      "Stir miso into hot water.",
      "Add ginger.",
      "Mix well and sip warm.",
    ],
    notes: ["Do not boil after adding miso."],
  },
  {
    slug: "creamy-potato-sip-soup",
    title: "Creamy Potato Sip Soup",
    description:
      "A soft blended potato soup that feels warm and filling without being heavy.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "15 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["comfort meals", "low appetite"],
    ingredients: ["2 potatoes, cooked", "2 cups broth", "1 tablespoon butter", "Salt to taste"],
    instructions: [
      "Blend all ingredients until smooth.",
      "Heat gently.",
      "Serve warm.",
    ],
    notes: ["Add more broth for thinner texture."],
  },
  {
    slug: "tomato-basil-light-soup",
    title: "Tomato Basil Light Soup",
    description:
      "A simple, smooth tomato soup with basil that feels warm and easy to enjoy.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["light meals", "cozy comfort"],
    ingredients: [
      "2 cups tomato soup or blended tomatoes",
      "Pinch dried basil",
      "1 tablespoon cream, optional",
      "Salt to taste",
    ],
    instructions: [
      "Heat tomato base in a pot.",
      "Add basil and cream if using.",
      "Stir and warm through.",
      "Season and serve.",
    ],
    notes: ["Keep it light or make it creamy."],
  },
  {
    slug: "zucchini-herb-broth",
    title: "Zucchini Herb Broth",
    description:
      "A soft, veggie-based broth with zucchini and herbs for a light, cozy bowl.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "15 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["light meals", "simple comfort"],
    ingredients: [
      "3 cups broth",
      "1 zucchini, sliced",
      "Pinch dried herbs",
      "Salt to taste",
    ],
    instructions: [
      "Bring broth to a simmer.",
      "Add zucchini and herbs.",
      "Cook until soft.",
      "Serve warm.",
    ],
    notes: ["Very light and simple."],
  },
  {
    slug: "spinach-garlic-broth",
    title: "Spinach Garlic Broth",
    description:
      "A simple broth with garlic and spinach that feels fresh and comforting.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Broths & Comfort Soups",
    bestFor: ["reset days", "light meals"],
    ingredients: ["3 cups broth", "1 handful spinach", "2 cloves garlic", "Salt to taste"],
    instructions: [
      "Bring broth to a simmer.",
      "Add garlic and cook 5 minutes.",
      "Add spinach until wilted.",
      "Serve warm.",
    ],
    notes: ["Fresh and simple."],
  },
  {
    slug: "golden-turmeric-milk",
    title: "Golden Turmeric Milk",
    description:
      "A warm, gently spiced milk for cozy nights and soft evening wind-downs.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["evening wind-down", "cozy nights", "warm spice"],
    ingredients: [
      "1 cup milk, any kind",
      "1/2 teaspoon turmeric",
      "1 teaspoon honey",
      "Pinch of cinnamon",
    ],
    instructions: [
      "Heat milk gently.",
      "Stir in turmeric and cinnamon.",
      "Add honey and mix well.",
      "Serve warm.",
    ],
    notes: [
      "Warm and slightly spiced.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "cinnamon-honey-sleep-tea",
    title: "Cinnamon Honey Sleep Tea",
    description:
      "A simple cinnamon and honey tea for a cozy bedtime routine.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["bedtime routine", "calming evenings", "simple tea"],
    ingredients: ["1 cup hot water", "1 cinnamon stick", "1 teaspoon honey"],
    instructions: [
      "Add cinnamon stick to hot water.",
      "Steep 5 to 10 minutes.",
      "Stir in honey.",
      "Drink warm.",
    ],
    notes: [
      "Simple and comforting.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "clove-orange-tea",
    title: "Clove Orange Tea",
    description:
      "A bright citrus tea with warm clove spice for cozy afternoons.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["cold days", "cozy afternoons", "citrus spice"],
    ingredients: [
      "1 cup hot water",
      "1 orange slice",
      "2 cloves",
      "1 teaspoon honey",
    ],
    instructions: [
      "Add orange slice and cloves to hot water.",
      "Steep 5 to 8 minutes.",
      "Add honey and stir.",
      "Serve warm.",
    ],
    notes: [
      "Bright citrus with warm spice.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "brown-sugar-ginger-tea",
    title: "Brown Sugar Ginger Tea",
    description:
      "A slightly sweet ginger tea with a warm kick for slow morning sipping.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["slow mornings", "comfort sipping", "ginger"],
    ingredients: [
      "1 cup hot water",
      "1 tablespoon fresh ginger, sliced",
      "1 teaspoon brown sugar",
    ],
    instructions: [
      "Add ginger to hot water.",
      "Steep 5 to 10 minutes.",
      "Stir in brown sugar.",
      "Sip warm.",
    ],
    notes: ["Slightly sweet with a warm kick."],
  },
  {
    slug: "vanilla-honey-warm-milk",
    title: "Vanilla Honey Warm Milk",
    description:
      "A smooth warm milk with honey and vanilla for cozy bedtime comfort.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "8 minutes",
    category: "Warm Drinks",
    bestFor: ["bedtime", "cozy comfort", "warm milk"],
    ingredients: ["1 cup milk", "1 teaspoon honey", "Splash of vanilla extract"],
    instructions: [
      "Heat milk gently.",
      "Stir in honey and vanilla.",
      "Serve warm.",
    ],
    notes: [
      "Smooth and calming.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "maple-cinnamon-latte-no-coffee",
    title: "Maple Cinnamon Latte (No Coffee)",
    description:
      "A caffeine-free cozy drink that feels latte-like without coffee.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "8 minutes",
    category: "Warm Drinks",
    bestFor: ["caffeine-free cozy drink", "warm milk", "maple"],
    ingredients: ["1 cup milk", "1 teaspoon maple syrup", "Pinch cinnamon"],
    instructions: [
      "Heat milk.",
      "Stir in maple syrup and cinnamon.",
      "Serve warm.",
    ],
    notes: ["Feels like a latte without coffee."],
  },
  {
    slug: "salted-honey-hydration-tea",
    title: "Salted Honey Hydration Tea",
    description:
      "A light warm water sip with honey, lemon, and a tiny pinch of salt.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Warm Drinks",
    bestFor: ["gentle hydration", "reset days", "simple sipping"],
    ingredients: [
      "1 cup warm water",
      "1 teaspoon honey",
      "Pinch of salt",
      "Squeeze of lemon",
    ],
    instructions: [
      "Mix all ingredients into warm water.",
      "Stir until dissolved.",
      "Sip slowly.",
    ],
    notes: [
      "Light, simple, and refreshing.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "cozy-apple-cinnamon-water",
    title: "Cozy Apple Cinnamon Water",
    description:
      "A soft apple and cinnamon warm water for fall mornings and cozy sipping.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["fall mornings", "cozy sipping", "apple cinnamon"],
    ingredients: [
      "1 cup hot water",
      "2 apple slices",
      "Pinch cinnamon",
      "1 teaspoon honey",
    ],
    instructions: [
      "Add apple slices and cinnamon to hot water.",
      "Steep 5 to 8 minutes.",
      "Stir in honey.",
      "Serve warm.",
    ],
    notes: [
      "Soft apple flavor with cozy spice.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "lavender-honey-tea",
    title: "Lavender Honey Tea",
    description:
      "A soft, calming tea with light floral notes and honey sweetness.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["bedtime", "calm evenings"],
    ingredients: ["1 cup hot water", "1/2 teaspoon dried lavender", "1 teaspoon honey"],
    instructions: [
      "Steep lavender in hot water.",
      "Strain.",
      "Add honey and stir.",
    ],
    notes: [
      "Use food-grade lavender only.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "chamomile-vanilla-tea",
    title: "Chamomile Vanilla Tea",
    description:
      "A cozy tea with soft vanilla and chamomile for relaxed evenings.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["sleep routine", "calm"],
    ingredients: [
      "1 chamomile tea bag",
      "1 cup hot water",
      "Splash vanilla",
      "1 teaspoon honey",
    ],
    instructions: [
      "Steep tea.",
      "Add vanilla and honey.",
      "Serve warm.",
    ],
    notes: [
      "Light and soothing.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "rose-petal-warm-water",
    title: "Rose Petal Warm Water",
    description:
      "A light floral drink with a soft, calming vibe.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Warm Drinks",
    bestFor: ["calm moments", "self-care"],
    ingredients: ["1 cup hot water", "1/2 teaspoon dried rose petals", "1 teaspoon honey"],
    instructions: [
      "Steep rose petals in hot water.",
      "Strain.",
      "Add honey and stir.",
    ],
    notes: [
      "Use food-safe rose petals only.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "coconut-milk-warm-drink",
    title: "Coconut Milk Warm Drink",
    description:
      "A creamy, cozy warm drink made with coconut milk and a touch of sweetness.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "8 minutes",
    category: "Warm Drinks",
    bestFor: ["cozy nights", "comfort drinks"],
    ingredients: ["1 cup coconut milk", "1 teaspoon honey", "Pinch cinnamon"],
    instructions: [
      "Heat coconut milk gently.",
      "Stir in honey and cinnamon.",
      "Serve warm.",
    ],
    notes: [
      "Rich and comforting.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "molasses-cinnamon-milk",
    title: "Molasses Cinnamon Milk",
    description:
      "A warm, slightly sweet drink with deep molasses flavor and cinnamon.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "8 minutes",
    category: "Warm Drinks",
    bestFor: ["evening drinks", "cozy vibes"],
    ingredients: ["1 cup milk", "1 teaspoon molasses", "Pinch cinnamon"],
    instructions: [
      "Heat milk.",
      "Stir in molasses and cinnamon.",
      "Serve warm.",
    ],
    notes: ["Unique flavor, slightly rich."],
  },
  {
    slug: "warm-lemon-vanilla-water",
    title: "Warm Lemon Vanilla Water",
    description:
      "A soft citrus drink with a hint of vanilla for a cozy twist.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Warm Drinks",
    bestFor: ["morning routine", "light sipping"],
    ingredients: [
      "1 cup warm water",
      "Squeeze lemon",
      "Splash vanilla",
      "1 teaspoon honey",
    ],
    instructions: [
      "Mix all ingredients together.",
      "Stir well.",
      "Serve warm.",
    ],
    notes: [
      "Bright but soft flavor.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "toasted-marshmallow-milk",
    title: "Toasted Marshmallow Milk",
    description:
      "A fun, cozy drink with melted marshmallow sweetness.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "8 minutes",
    category: "Warm Drinks",
    bestFor: ["treat drinks", "cozy nights"],
    ingredients: ["1 cup milk", "2 marshmallows"],
    instructions: [
      "Heat milk.",
      "Stir in marshmallows until melted.",
      "Serve warm.",
    ],
    notes: ["Sweet and nostalgic."],
  },
  {
    slug: "strawberry-basil-hydration-water",
    title: "Strawberry Basil Hydration Water",
    description:
      "A lightly fruity infused water for summer days and fresh sipping.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "25 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["summer days", "light fruity drinks", "hydration"],
    ingredients: ["4 cups cold water", "3 strawberries, sliced", "4 basil leaves"],
    instructions: [
      "Add strawberries and basil to water.",
      "Chill for 20 to 30 minutes.",
      "Serve cold.",
    ],
    notes: ["Slightly sweet and fresh."],
  },
  {
    slug: "orange-salt-electrolyte-water",
    title: "Orange Salt Electrolyte Water",
    description:
      "A simple electrolyte-style orange water for easy, refreshing sipping.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "reset days", "orange"],
    ingredients: [
      "1 cup water",
      "Juice of 1/2 orange",
      "Pinch of salt",
      "1 teaspoon honey, optional",
    ],
    instructions: [
      "Mix all ingredients.",
      "Stir until combined.",
      "Drink chilled or room temperature.",
    ],
    notes: ["Simple DIY electrolyte-style drink."],
  },
  {
    slug: "chia-fresca-energy-drink",
    title: "Chia Fresca Energy Drink",
    description:
      "A simple chia drink with lemon or lime for light texture and refreshing sipping.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["light energy", "hydration", "chia"],
    ingredients: [
      "1 cup water",
      "1 tablespoon chia seeds",
      "1 tablespoon lemon or lime juice",
      "1 teaspoon honey",
    ],
    instructions: [
      "Mix all ingredients.",
      "Let sit 5 to 10 minutes until chia softens.",
      "Stir and drink.",
    ],
    notes: [
      "Slight texture from chia.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "frozen-herbal-tea-cubes",
    title: "Frozen Herbal Tea Cubes",
    description:
      "A freezer-friendly herbal tea cube for quick iced tea and flavor boosts.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes plus freezing",
    category: "Cold Wellness/Hydration",
    bestFor: ["quick iced tea", "flavor boosters", "freezer-friendly"],
    ingredients: ["Brewed herbal tea, cooled"],
    instructions: [
      "Pour cooled tea into ice cube tray.",
      "Freeze until solid.",
      "Add to water for flavor.",
    ],
    notes: ["Works with any tea type."],
  },
  {
    slug: "watermelon-lime-refresher",
    title: "Watermelon Lime Refresher",
    description:
      "A naturally sweet watermelon and lime refresher for hot days.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hot days", "refreshing drinks", "watermelon"],
    ingredients: [
      "1 cup watermelon chunks",
      "Juice of 1/2 lime",
      "1/2 cup cold water",
    ],
    instructions: [
      "Blend all ingredients.",
      "Strain if desired.",
      "Serve cold.",
    ],
    notes: ["Naturally sweet and hydrating."],
  },
  {
    slug: "pineapple-mint-water",
    title: "Pineapple Mint Water",
    description:
      "A fresh and slightly sweet hydration drink with pineapple and mint.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "25 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "summer days"],
    ingredients: ["4 cups water", "Pineapple chunks", "Mint leaves"],
    instructions: [
      "Add ingredients to water.",
      "Chill 20 minutes.",
      "Serve cold.",
    ],
    notes: ["Best served chilled."],
  },
  {
    slug: "blueberry-lemon-water",
    title: "Blueberry Lemon Water",
    description:
      "A light fruit-infused water with a bright lemon finish.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "20 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "refreshing drinks"],
    ingredients: ["4 cups water", "Handful blueberries", "Lemon slices"],
    instructions: [
      "Combine ingredients.",
      "Chill.",
      "Serve cold.",
    ],
    notes: ["Light and refreshing."],
  },
  {
    slug: "apple-cider-chill-drink",
    title: "Apple Cider Chill Drink",
    description:
      "A simple chilled apple cider drink with a fresh, cozy feel.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["fall drinks", "refreshing"],
    ingredients: ["1 cup apple cider", "Ice", "Cinnamon stick"],
    instructions: [
      "Pour cider over ice.",
      "Add cinnamon stick.",
      "Serve cold.",
    ],
    notes: ["Simple and seasonal."],
  },
  {
    slug: "aloe-lime-water",
    title: "Aloe Lime Water",
    description:
      "A light, refreshing drink with aloe and lime.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "reset days"],
    ingredients: ["1 cup water", "2 tablespoons aloe juice", "Squeeze lime"],
    instructions: ["Mix all ingredients.", "Serve chilled."],
    notes: ["Very light and refreshing."],
  },
  {
    slug: "coconut-lime-refresher",
    title: "Coconut Lime Refresher",
    description:
      "A light, tropical drink with coconut and lime that feels fresh and simple.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "warm days"],
    ingredients: ["1 cup coconut water", "Squeeze of lime", "Ice"],
    instructions: [
      "Mix coconut water and lime.",
      "Pour over ice.",
      "Serve cold.",
    ],
    notes: ["Light and refreshing."],
  },
  {
    slug: "iced-hibiscus-tea",
    title: "Iced Hibiscus Tea",
    description:
      "A bright, slightly tart tea served cold for a refreshing sip.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes plus cooling",
    category: "Cold Wellness/Hydration",
    bestFor: ["hydration", "afternoon drinks"],
    ingredients: [
      "1 hibiscus tea bag",
      "1 cup hot water",
      "Ice",
      "1 teaspoon honey, optional",
    ],
    instructions: [
      "Steep tea in hot water.",
      "Let cool.",
      "Pour over ice and add honey if desired.",
    ],
    notes: [
      "Bright and slightly tart.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "mango-ginger-cooler",
    title: "Mango Ginger Cooler",
    description:
      "A smooth, fruity drink with a hint of ginger for a fresh twist.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cold Wellness/Hydration",
    bestFor: ["summer drinks", "refreshing"],
    ingredients: ["1/2 cup mango chunks", "1/2 cup water", "1 teaspoon grated ginger"],
    instructions: ["Blend all ingredients.", "Serve chilled."],
    notes: ["Naturally sweet and fresh."],
  },
  {
    slug: "ginger-lemon-shot",
    title: "Ginger Lemon Shot",
    description:
      "A bold, bright little mix for a quick morning kitchen ritual.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["morning reset", "quick pick-me-up", "ginger"],
    ingredients: [
      "1 tablespoon fresh ginger, grated",
      "2 tablespoons lemon juice",
      "1 teaspoon honey",
      "2 tablespoons warm water",
    ],
    instructions: [
      "Mix all ingredients together.",
      "Stir well.",
      "Take as a small shot.",
    ],
    notes: [
      "Bold, bright, and quick.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "turmeric-honey-shot",
    title: "Turmeric Honey Shot",
    description:
      "A tiny turmeric and honey mix for a simple cozy morning ritual.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["cozy mornings", "simple ritual", "turmeric"],
    ingredients: ["1/2 teaspoon turmeric", "1 teaspoon honey", "2 tablespoons warm water"],
    instructions: ["Mix until smooth.", "Drink immediately."],
    notes: [
      "Slightly earthy and warm.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "apple-cider-vinegar-tonic",
    title: "Apple Cider Vinegar Tonic",
    description:
      "A diluted apple cider vinegar tonic with honey for a bright pantry-style sip.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["morning routine", "reset days", "bright flavor"],
    ingredients: ["1 tablespoon apple cider vinegar", "1 teaspoon honey", "1/2 cup water"],
    instructions: [
      "Mix all ingredients.",
      "Stir well.",
      "Sip or take as a quick drink.",
    ],
    notes: [
      "Dilute well for smoother taste.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "garlic-honey-spoon-mix",
    title: "Garlic Honey Spoon Mix",
    description:
      "A strong, pantry-based garlic and honey mix for bold flavor days.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["simple", "pantry-based mix", "bold flavor"],
    ingredients: ["1 clove garlic, minced", "1 teaspoon honey"],
    instructions: ["Mix garlic and honey.", "Take as a spoonful."],
    notes: [
      "Strong flavor, very simple.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "cayenne-lemon-wake-up-shot",
    title: "Cayenne Lemon Wake-Up Shot",
    description:
      "A spicy-bright lemon shot for mornings when you want bold flavor.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["morning energy", "bold flavor", "lemon"],
    ingredients: [
      "2 tablespoons lemon juice",
      "Pinch cayenne pepper",
      "1 teaspoon honey",
      "2 tablespoons warm water",
    ],
    instructions: [
      "Mix all ingredients.",
      "Stir well.",
      "Take as a shot.",
    ],
    notes: [
      "Spicy and bright.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "morning-reset-shot",
    title: "Morning Reset Shot",
    description:
      "A light lemon, salt, and honey drink for a simple start.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["hydration reset", "simple start", "morning routine"],
    ingredients: [
      "1 cup water",
      "Squeeze of lemon",
      "Pinch of salt",
      "1 teaspoon honey",
    ],
    instructions: [
      "Mix all ingredients.",
      "Stir until dissolved.",
      "Drink.",
    ],
    notes: [
      "Light and refreshing.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "ginger-turmeric-power-shot",
    title: "Ginger Turmeric Power Shot",
    description:
      "A strong ginger and turmeric shot with honey for bold, warming flavor.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["bold", "warming flavor", "ginger turmeric"],
    ingredients: [
      "1 tablespoon ginger juice or grated ginger",
      "1/2 teaspoon turmeric",
      "1 teaspoon honey",
      "2 tablespoons water",
    ],
    instructions: [
      "Mix all ingredients.",
      "Stir well.",
      "Take as a shot.",
    ],
    notes: [
      "Strong and warming.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "ginger-lime-shot",
    title: "Ginger Lime Shot",
    description:
      "A bold, quick shot with ginger and lime for a bright start.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["morning reset"],
    ingredients: ["1 tablespoon ginger", "2 tablespoons lime juice", "1 teaspoon honey"],
    instructions: ["Mix ingredients.", "Take as a shot."],
    notes: [
      "Strong flavor.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "honey-cinnamon-paste",
    title: "Honey Cinnamon Paste",
    description:
      "A simple mix you can take by the spoon or stir into drinks.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["cozy routines"],
    ingredients: ["1 teaspoon honey", "Pinch cinnamon"],
    instructions: ["Mix together.", "Take as a spoonful."],
    notes: [
      "Also great in tea.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "lemon-salt-shot",
    title: "Lemon Salt Shot",
    description:
      "A quick, simple shot with lemon and a pinch of salt.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["morning reset", "simple routines"],
    ingredients: ["2 tablespoons lemon juice", "Pinch of salt"],
    instructions: ["Mix ingredients.", "Take as a shot."],
    notes: ["Very simple and bold."],
  },
  {
    slug: "turmeric-pepper-shot",
    title: "Turmeric Pepper Shot",
    description:
      "A bold, earthy shot with turmeric and a pinch of black pepper.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["morning routines", "simple rituals"],
    ingredients: [
      "1/2 teaspoon turmeric",
      "Pinch black pepper",
      "1 teaspoon honey",
      "2 tablespoons warm water",
    ],
    instructions: [
      "Mix all ingredients.",
      "Stir well.",
      "Take as a shot.",
    ],
    notes: [
      "Strong and warming.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "warm-vinegar-honey-shot",
    title: "Warm Vinegar Honey Shot",
    description:
      "A simple warm mix of vinegar and honey for a quick, bold sip.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Remedy Shots and Mixes",
    bestFor: ["reset days", "morning routines"],
    ingredients: [
      "1 tablespoon apple cider vinegar",
      "1 teaspoon honey",
      "2 tablespoons warm water",
    ],
    instructions: [
      "Mix all ingredients.",
      "Stir well.",
      "Take as a shot.",
    ],
    notes: [
      "Dilute more if needed.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "honey-butter-toast",
    title: "Honey Butter Toast",
    description:
      "A simple slice of warm toast with butter and honey for quick, cozy comfort.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["quiet days", "quick comfort", "simple meals"],
    ingredients: ["1 slice bread", "1 tablespoon butter", "1 teaspoon honey"],
    instructions: [
      "Toast the bread.",
      "Spread butter while warm.",
      "Drizzle honey on top.",
      "Serve immediately.",
    ],
    notes: [
      "Simple, cozy, and comforting.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "garlic-herb-toast",
    title: "Garlic Herb Toast",
    description:
      "A warm, savory toast that pairs beautifully with broths and cozy soups.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["pairing with broths and soups", "savory sides", "quick comfort"],
    ingredients: [
      "1 slice bread",
      "1 tablespoon butter",
      "1 clove garlic, minced",
      "Pinch of dried herbs",
    ],
    instructions: [
      "Mix butter, garlic, and herbs.",
      "Spread on bread.",
      "Toast until golden.",
      "Serve warm.",
    ],
    notes: ["Perfect side for broth recipes."],
  },
  {
    slug: "soft-scrambled-eggs",
    title: "Soft Scrambled Eggs",
    description:
      "A soft, simple egg add-on for light meals and low-effort cozy plates.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["light meals", "recovery days", "simple protein"],
    ingredients: ["2 eggs", "1 tablespoon butter", "Pinch of salt"],
    instructions: [
      "Melt butter in pan over low heat.",
      "Add eggs and stir slowly.",
      "Cook until soft and creamy.",
      "Season and serve.",
    ],
    notes: ["Keep heat low for best texture."],
  },
  {
    slug: "simple-rice-bowl",
    title: "Simple Rice Bowl",
    description:
      "A warm, minimal rice bowl for simple meals that feel gentle and filling.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes with cooked rice",
    category: "Cozy Add-Ons",
    bestFor: ["easy digestion", "simple meals", "warm bowls"],
    ingredients: [
      "1 cup cooked rice",
      "Pinch of salt",
      "Optional: drizzle of butter or broth",
    ],
    instructions: [
      "Prepare rice.",
      "Add salt and optional butter or broth.",
      "Serve warm.",
    ],
    notes: ["Very gentle and filling."],
  },
  {
    slug: "herb-infused-honey",
    title: "Herb-Infused Honey",
    description:
      "A cozy honey add-in for teas, warm drinks, toast, and simple kitchen rituals.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes plus resting",
    category: "Cozy Add-Ons",
    bestFor: ["adding to teas and drinks", "make-ahead", "sweet add-ins"],
    ingredients: ["1 cup honey", "Fresh herbs (mint, thyme, or rosemary)"],
    instructions: [
      "Place herbs in jar.",
      "Pour honey over herbs.",
      "Let sit for a few days.",
      "Use as needed.",
    ],
    notes: [
      "Store at room temperature.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "cinnamon-sugar-warm-oats",
    title: "Cinnamon Sugar Warm Oats",
    description:
      "A simple bowl of warm oats with cinnamon and sugar for cozy mornings.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["cozy mornings", "simple breakfast", "warm oats"],
    ingredients: [
      "1/2 cup oats",
      "1 cup water or milk",
      "1 teaspoon sugar",
      "Pinch cinnamon",
    ],
    instructions: [
      "Cook oats with liquid.",
      "Stir in sugar and cinnamon.",
      "Serve warm.",
    ],
    notes: ["Simple and comforting breakfast."],
  },
  {
    slug: "buttered-crackers-and-broth-plate",
    title: "Buttered Crackers & Broth Plate",
    description:
      "A minimal-effort comfort plate with buttered crackers and warm broth.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["low energy meals", "comfort days", "broth pairings"],
    ingredients: ["Crackers", "Butter", "Warm broth"],
    instructions: [
      "Spread butter on crackers.",
      "Serve alongside warm broth.",
      "Eat together.",
    ],
    notes: ["Minimal effort comfort meal."],
  },
  {
    slug: "butter-rice-with-herbs",
    title: "Butter Rice with Herbs",
    description:
      "Soft rice with butter and herbs for a simple comfort side.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes with cooked rice",
    category: "Cozy Add-Ons",
    bestFor: ["easy meals"],
    ingredients: ["1 cup cooked rice", "1 tablespoon butter", "Pinch herbs"],
    instructions: ["Mix everything together.", "Serve warm."],
    notes: ["Simple and filling."],
  },
  {
    slug: "warm-apples-with-cinnamon",
    title: "Warm Apples with Cinnamon",
    description:
      "Soft warm apples with cinnamon for a cozy sweet side.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "10 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["comfort snacks"],
    ingredients: ["1 apple, sliced", "Pinch cinnamon", "1 teaspoon honey"],
    instructions: [
      "Cook apples until soft.",
      "Add cinnamon and honey.",
      "Serve warm.",
    ],
    notes: [
      "Feels like a cozy comfort snack.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "mashed-sweet-potato-bowl",
    title: "Mashed Sweet Potato Bowl",
    description:
      "A soft, warm bowl of mashed sweet potato that feels simple and comforting.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes with cooked sweet potato",
    category: "Cozy Add-Ons",
    bestFor: ["comfort meals", "easy eating"],
    ingredients: ["1 sweet potato, cooked", "1 tablespoon butter", "Pinch cinnamon"],
    instructions: [
      "Mash sweet potato.",
      "Stir in butter and cinnamon.",
      "Serve warm.",
    ],
    notes: ["Soft and naturally sweet."],
  },
  {
    slug: "soft-banana-mash-bowl",
    title: "Soft Banana Mash Bowl",
    description:
      "A simple mashed banana bowl that is soft, sweet, and easy to eat.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["quick snacks", "low energy"],
    ingredients: ["1 ripe banana", "1 teaspoon honey", "Pinch cinnamon"],
    instructions: [
      "Mash banana.",
      "Stir in honey and cinnamon.",
      "Serve immediately.",
    ],
    notes: [
      "Very soft and simple.",
      "Honey should not be given to infants under 1 year old.",
    ],
  },
  {
    slug: "warm-milk-and-toast-bowl",
    title: "Warm Milk and Toast Bowl",
    description:
      "A cozy bowl with warm milk and soft toast pieces.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes",
    category: "Cozy Add-Ons",
    bestFor: ["comfort meals", "nostalgic recipes"],
    ingredients: ["1 cup warm milk", "1 slice toast, torn"],
    instructions: [
      "Warm the milk.",
      "Add torn toast pieces.",
      "Serve immediately.",
    ],
    notes: ["Very soft and comforting."],
  },
  {
    slug: "simple-butter-noodle-bowl",
    title: "Simple Butter Noodle Bowl",
    description:
      "A basic, cozy bowl of noodles with butter for easy comfort food.",
    image: "/images/recipe-placeholder.jpg",
    prepTime: "5 minutes with cooked noodles",
    category: "Cozy Add-Ons",
    bestFor: ["easy meals", "low effort"],
    ingredients: ["1 cup cooked noodles", "1 tablespoon butter", "Pinch salt"],
    instructions: [
      "Mix noodles with butter.",
      "Add salt.",
      "Serve warm.",
    ],
    notes: ["Very simple and filling."],
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
