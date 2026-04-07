import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { TagPill } from "@/components/TagPill";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <article className="rounded-[2.5rem] bg-white/85 p-8 shadow-xl sm:p-12">
        <header className="border-b border-amber-100 pb-8">
          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>
          <SectionHeading title={post.title} description={post.excerpt} />
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
            {post.date} - {post.readTime}
          </p>
        </header>

        <div className="mt-8 space-y-6 text-lg leading-8 text-stone-700">
          {post.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-3xl text-stone-900">{section.heading}</h2>
              <div className="mt-4 space-y-5 text-lg leading-8 text-stone-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.list ? (
                <ul className="mt-5 list-inside list-disc space-y-2 rounded-3xl bg-cream p-6 text-stone-700">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-10 space-y-5 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-stone-700">
          {post.closing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Link
          className="mt-8 inline-flex rounded-full bg-amber-300 px-5 py-3 font-bold text-stone-950 transition hover:bg-amber-200"
          href="/blog"
        >
          Back to blog
        </Link>
      </article>
    </div>
  );
}
