import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import { posts } from "@/data/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Блог",
  description: "Статьи о frontend-разработке и техническом SEO",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <Heading
          title="Блог"
          description="Статьи о frontend-разработке, SEO и архитектуре интерфейсов."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-surface bg-surface p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 shadow-[var(--shadow-soft)]"
            >
              <h2 className="text-2xl font-bold text-primary">{post.title}</h2>
              <p className="mt-4 text-secondary">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-surface px-3 py-1 text-sm text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
