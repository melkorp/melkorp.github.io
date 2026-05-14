import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
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
          __html: JSON.stringify(projectSchema),
        }}
      />
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Case Study
            </p>
            <h1 className="mb-6 text-5xl md:text-7xl font-black tracking-tight leading-[0.95] text-primary">
              {project.title}
            </h1>
            <p className="mb-10 text-xl leading-8 text-secondary">
              {project.description}
            </p>
            <article className="prose prose-invert max-w-none">
              <p className="leading-8 whitespace-pre-line text-primary">
                {project.content}
              </p>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
