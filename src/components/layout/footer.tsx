import Link from "next/link";
import ProtectedEmail from "@/components/protected-email";
import { encryptEmail } from "@/lib/encrypt-email";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24">
      {/* Стеклянная карточка футера */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-surface bg-surface/80 backdrop-blur-xl p-8 md:p-12 shadow-(--shadow-soft)">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Логотип и описание */}
            <div className="md:col-span-5">
              <div className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Melkorp
              </div>
              <p className="mt-4 text-sm text-secondary leading-relaxed">
                Разработка SEO-ориентированных frontend-платформ с акцентом на
                производительность, архитектуру и масштабируемость.
              </p>
              {/* Декоративная линия */}
              <div className="mt-6 h-px w-12 bg-gradient-to-r from-accent to-transparent" />
            </div>

            {/* Навигация */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Навигация
              </h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-secondary transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  Главная
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-secondary transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  Блог
                </Link>
                <Link
                  href="#portfolio"
                  className="text-sm text-secondary transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  Портфолио
                </Link>
              </nav>
            </div>

            {/* Контакты */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Контакты
              </h3>
              <div className="mt-4 space-y-3">
                <ProtectedEmail
                  encryptedEmail={encryptEmail("tamogoghi@gmail.com")}
                  className="text-sm text-secondary transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                  label="Написать"
                  revealLabel="Показать email"
                />
                <a
                  href="https://github.com/melkorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-secondary transition-all duration-200 hover:text-white hover:translate-x-1"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Нижняя линия с копирайтом */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex flex-col gap-2 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
              <div>© 2026 Melkorp</div>
              <div className="flex gap-3">
                <span>Built with Next.js</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
