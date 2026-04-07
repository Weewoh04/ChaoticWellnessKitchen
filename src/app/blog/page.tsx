import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Cozy kitchen notes and pantry-friendly wellness ideas.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-5 py-14">
      <SectionHeading
        eyebrow="Blog"
        title="Cozy notes from the kitchen"
        description="A simple card-based listing for now, ready to expand into full posts later."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-sm" key={post.slug}>
            <div className="mb-5 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
            <p className="text-sm font-semibold text-stone-500">
              {post.date} · {post.readTime}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-stone-900">{post.title}</h2>
            <p className="mt-4 leading-7 text-stone-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
