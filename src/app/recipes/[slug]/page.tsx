import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";
import { siteConfig } from "@/lib/site";
import { getRecipeBySlug, recipes } from "@/data/recipes";

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: recipe.title,
    description: recipe.description,
    alternates: {
      canonical: `/recipes/${recipe.slug}`,
    },
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      type: "article",
      url: `${siteConfig.url}/recipes/${recipe.slug}`,
    },
  };
}

export default async function RecipeDetailPage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <article className="overflow-hidden rounded-[2.5rem] bg-white/85 shadow-xl">
        <div className="h-64 bg-[radial-gradient(circle_at_30%_25%,#f7cf86,transparent_30%),linear-gradient(135deg,#fff8eb,#dfead7)]" />
        <div className="space-y-10 p-8 sm:p-12">
          <header>
            <div className="mb-5 flex flex-wrap gap-2">
              <TagPill label={recipe.category} />
              {recipe.bestFor.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
            <SectionHeading title={recipe.title} description={recipe.description} />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
              Prep time: {recipe.prepTime}
            </p>
          </header>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-stone-700">
            <h2 className="font-serif text-2xl text-stone-900">Gentle note</h2>
            <p className="mt-3 leading-7">
              This recipe is shared for cozy, informational inspiration only. If you have questions
              about ingredients and your personal health needs, check with a qualified healthcare professional.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-stone-900">Ingredients</h2>
            <ul className="mt-5 list-inside list-disc space-y-3 text-stone-700">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-stone-900">Instructions</h2>
            <ol className="mt-5 list-inside list-decimal space-y-3 text-stone-700">
              {recipe.instructions.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <AdSlot format="horizontal" label="Sponsored placement" slot="recipe-horizontal-1" />

          <section>
            <h2 className="font-serif text-3xl text-stone-900">Notes</h2>
            <ul className="mt-5 list-inside list-disc space-y-3 text-stone-700">
              {recipe.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
