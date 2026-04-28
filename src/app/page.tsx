import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";
import { recipes } from "@/data/recipes";

export default function HomePage() {
  const featuredRecipe = recipes.find((recipe) => recipe.featured) ?? recipes[0];
  const recipeGrid = recipes.filter((recipe) => recipe.slug !== featuredRecipe.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-5 py-10 sm:py-14">
      <Hero />

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Featured cup"
          title="Honey Lemon Ginger Hot Water"
          description="A bright, cozy mug with pantry-friendly ingredients and a soft little ritual built in."
        />
        <article className="rounded-[2rem] border border-amber-100 bg-white/85 p-6 shadow-lg sm:p-8">
          <div className="flex flex-wrap gap-2">
            {featuredRecipe.bestFor.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>
          <h3 className="mt-5 font-serif text-3xl text-stone-900">{featuredRecipe.title}</h3>
          <p className="mt-4 leading-7 text-stone-600">{featuredRecipe.description}</p>
          <Link
            className="mt-6 inline-flex rounded-full bg-amber-300 px-5 py-3 font-bold text-stone-950 transition hover:bg-amber-200"
            href={`/recipes/${featuredRecipe.slug}`}
          >
            Make the cozy cup
          </Link>
        </article>
      </section>

      <AdSlot className="mx-auto max-w-4xl" format="horizontal" label="Sponsored placement" slot="home-horizontal-1" />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Recipe box"
          title="Warm, practical, pantry-friendly recipes"
          description="Hydration ideas, broths, warm milks, teas, and little prep-ahead helpers for everyday comfort."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {recipeGrid.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white/75 p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="The promise"
          title="Comfort first. Pantry friendly. No exaggerated claims."
          description="Chaotic Wellness Kitchen is here for cozy food and drink ideas that fit real kitchens."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Recipes use gentle language and practical ingredients.",
            "Wellness is framed as comfort, ritual, and personal preference.",
            "Nothing here replaces care from a qualified healthcare professional.",
          ].map((item) => (
            <div className="rounded-3xl bg-cream p-5 text-stone-700" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <AdSlot className="mx-auto max-w-3xl" format="rectangle" label="Sponsored placement" slot="home-rectangle-1" />

      <Newsletter />
    </div>
  );
}
