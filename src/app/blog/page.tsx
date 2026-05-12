import Link from "next/link";

const posts = [
  {
    slug: "seo-frontend",

    title: "SEO и современный frontend",

    description: "Почему frontend архитектура влияет на индексацию.",
  },
];

export default function BlogPage() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Blog
          </p>

          <h1 className="mb-6 text-5xl font-bold">Технические статьи</h1>

          <p className="text-xl leading-8 text-zinc-400">
            Заметки о frontend-разработке, SEO и web-архитектуре.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold">{post.title}</h2>

              <p className="mb-6 text-zinc-400">{post.description}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-400 transition hover:text-blue-300"
              >
                Читать статью →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
