import { notFound } from "next/navigation";

import SEOFrontend from "@/content/blog/seo-frontend.mdx";

const posts = {
  "seo-frontend": SEOFrontend,
};

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const Post = posts[slug as keyof typeof posts];

  if (!Post) {
    notFound();
  }

  return (
    <section className="py-24">
      <div className="container-custom">
        <article className="prose prose-invert max-w-4xl">
          <Post />
        </article>
      </div>
    </section>
  );
}
