import { notFound } from "next/navigation";

import SEOFrontend from "@/content/blog/seo-frontend.mdx";
import type { Metadata } from "next";
import { posts } from "@/data/blog";

const postModules = {
  "seo-frontend": SEOFrontend,
};

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,

    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);
  const Post = postModules[slug as keyof typeof postModules];

  if (!Post || !post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Melkorp",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <section className="py-24">
        <div className="container-custom">
          <article className="prose prose-invert max-w-4xl">
            <Post />
          </article>
        </div>
      </section>
    </>
  );
}
