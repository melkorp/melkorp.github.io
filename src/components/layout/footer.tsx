import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-2xl font-black tracking-tight">Melkorp</div>
          <p className="mt-4 text-secondary leading-7">
            Разработка SEO-ориентированных frontend-платформ с акцентом на
            производительность, архитектуру и масштабируемость.
          </p>
        </div>

        <div className="md:text-center">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Навигация
          </h3>
          <nav className="mt-5 flex flex-col gap-1.5">
            <Link
              href="/"
              className="text-secondary transition-colors hover:text-white"
            >
              Главная
            </Link>
            <Link
              href="/blog"
              className="text-secondary transition-colors hover:text-white"
            >
              Блог
            </Link>
          </nav>
        </div>

        <div className="md:text-right">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Контакты
          </h3>
          <div className="mt-5 space-y-4">
            <a
              href="mailto:tamogoghi@gmail.com"
              className="block text-secondary transition-colors hover:text-white"
            >
              tamogoghi@gmail.com
            </a>
            <a
              href="https://github.com/melkorp"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-secondary transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Melkorp</div>
          <div>Built with Next.js + TypeScript</div>
        </div>
      </div>
    </footer>
  );
}
