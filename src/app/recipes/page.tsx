import type { Metadata } from "next";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionHeading } from "@/components/SectionHeading";
import { recipes } from "@/data/recipes";

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
        description="Warm cups, infused waters, broths, and easy prep-ahead ideas using local mock data for now."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
