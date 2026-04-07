import Link from "next/link";
import type { Recipe } from "@/data/recipes";
import { TagPill } from "@/components/TagPill";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-44 bg-[radial-gradient(circle_at_30%_20%,#f8d28b,transparent_32%),linear-gradient(135deg,#fff7e8,#dce8d5)]" />
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          {recipe.bestFor.slice(0, 2).map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
        <div>
          <h3 className="font-serif text-2xl text-stone-900">{recipe.title}</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">{recipe.description}</p>
        </div>
        <div className="flex items-center justify-between pt-2 text-sm font-semibold text-stone-600">
          <span>{recipe.prepTime}</span>
          <Link className="text-amber-800 underline-offset-4 group-hover:underline" href={`/recipes/${recipe.slug}`}>
            View recipe
          </Link>
        </div>
      </div>
    </article>
  );
}
