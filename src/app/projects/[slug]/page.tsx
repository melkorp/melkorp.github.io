import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

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

  if (!project) {
    return {};
  }

  return {
    title: project.title,

    description: project.description,
  };
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
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Case Study
            </p>
            <h1 className="mb-6 text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
              {project.title}
            </h1>
            <p className="mb-10 text-xl leading-8 text-zinc-400">
              {project.description}
            </p>
            <article className="prose prose-invert max-w-none">
              <p className="leading-8 whitespace-pre-line text-zinc-300">
                {project.content}
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
