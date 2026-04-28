import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { RecipeCard } from "@/components/RecipeCard";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  getRecipeCategoryBySlug,
  getRecipesByCategory,
  recipeCategories,
} from "@/data/recipes";

type RecipeCategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export function generateStaticParams() {
  return recipeCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: RecipeCategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getRecipeCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Recipe Category Not Found",
    };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/recipes/category/${category.slug}`,
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `${siteConfig.url}/recipes/category/${category.slug}`,
    },
  };
}

export default async function RecipeCategoryPage({ params }: RecipeCategoryPageProps) {
  const { categorySlug } = await params;
  const category = getRecipeCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryRecipes = getRecipesByCategory(category.title);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-5 py-14">
      <div className="rounded-[2rem] border border-amber-100 bg-white/80 p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Recipe category"
          title={category.title}
          description={category.description}
        />
        <Link
          className="mt-6 inline-flex rounded-full bg-amber-300 px-5 py-3 font-bold text-stone-950 transition hover:bg-amber-200"
          href="/recipes"
        >
          Back to all recipes
        </Link>
      </div>

      {categoryRecipes.length > 0 ? (
        <>
          <AdSlot className="mx-auto max-w-4xl" format="horizontal" label="Sponsored placement" slot="recipe-category-horizontal-1" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 text-stone-700 shadow-sm">
          <h2 className="font-serif text-3xl text-stone-900">Recipes coming soon</h2>
          <p className="mt-3 leading-7">
            This category is ready for future cozy additions. For now, browse all recipes while the
            next batch of kitchen favorites is being added.
          </p>
        </div>
      )}
    </div>
  );
}
