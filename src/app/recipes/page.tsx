import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionHeading } from "@/components/SectionHeading";
import { recipeCategories, recipes } from "@/data/recipes";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Browse cozy, pantry-friendly recipes from Chaotic Wellness Kitchen.",
};

export default function RecipesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-5 py-14">
      <SectionHeading
        eyebrow="Recipes"
        title="Comforting recipes for cozy, practical kitchen rituals"
        description="Warm cups, infused waters, broths, and easy prep-ahead ideas for real-life kitchens."
      />
      <section className="rounded-[2rem] border border-amber-100 bg-white/75 p-6 shadow-sm sm:p-8">
        <SectionHeading
          eyebrow="Menu"
          title="Recipe menu"
          description="Use these cozy categories as the starter structure for future filtering, search, and seasonal collections."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {recipeCategories.map((category) => (
            <Link
              className="rounded-3xl bg-cream p-5 text-sm font-bold leading-6 text-stone-800 shadow-sm ring-1 ring-amber-100 transition hover:-translate-y-1 hover:bg-amber-50 hover:shadow-md"
              href={`/recipes/category/${category.slug}`}
              key={category.slug}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </section>
      <AdSlot className="mx-auto max-w-4xl" format="horizontal" label="Sponsored placement" slot="recipes-horizontal-1" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
