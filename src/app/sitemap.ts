import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { recipeCategories, recipes } from "@/data/recipes";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/blog", "/disclaimer", "/privacy", "/advertising-disclosure", "/recipes"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...recipes.map((recipe) => ({
      url: `${siteConfig.url}/recipes/${recipe.slug}`,
      lastModified: new Date(),
    })),
    ...recipeCategories.map((category) => ({
      url: `${siteConfig.url}/recipes/category/${category.slug}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
