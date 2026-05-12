import BlogSearch from "@/components/blog-search";

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

        <BlogSearch />
      </div>
    </section>
  );
}
