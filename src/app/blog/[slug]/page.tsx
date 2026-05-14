import { notFound } from "next/navigation";
import SEOFrontend from "@/content/blog/seo-frontend.mdx";
import type { Metadata } from "next";
import { posts } from "@/data/blog";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";

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
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
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
      url: "https://melkorp.github.io/portfolio-site/",
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
      <Section>
        <Container>
          <article className="prose prose-invert max-w-3xl">
            <Post />
          </article>
        </Container>
      </Section>
    </>
  );
}
