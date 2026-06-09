import Link from "next/link";
import { Github } from "lucide-react";
import ProtectedEmail from "@/components/protected-email";
import { encryptEmail } from "@/lib/encrypt-email";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Левая колонка — логотип и описание */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tight">
              Melkorp<span className="text-primary">.</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Разработка SEO-ориентированных frontend-платформ
            </p>
          </div>

          {/* Центр — навигация */}
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <Link
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-primary transition-colors"
            >
              Портфолио
            </Link>
            <Link
              href="#contacts"
              className="hover:text-primary transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Правая колонка — контакты (вертикально) */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <ProtectedEmail
              encryptedEmail={encryptEmail("tamogoghi@gmail.com")}
              className="text-sm text-slate-400 hover:text-primary transition-colors"
              label="Написать"
              revealLabel="Показать email"
            />
            <a
              href="https://github.com/melkorp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
            >
              <Github size={16} />
              GitHub →
            </a>
          </div>
        </div>

        {/* Нижняя строка — копирайт */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
          © {currentYear} Melkorp. Built with Next.js • TypeScript • Tailwind
          CSS
        </div>
      </div>
    </footer>
  );
}
