import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10 md:p-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Collaboration
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight">
              Разработка современных SEO-ориентированных сайтов и
              frontend-проектов
            </h2>
            <p className="mb-4 text-lg leading-8 text-zinc-300">
              Открыт для сотрудничества, frontend-разработки и создания
              производительных web-интерфейсов.
            </p>
            <p className="text-secondary-language mb-10 text-sm text-zinc-500">
              Open for frontend development, SEO-oriented websites and modern
              web interfaces.
            </p>
            <Link
              href="#contacts"
              className="inline-flex rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-blue-400 active:scale-[0.98]"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
