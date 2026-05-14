import Link from "next/link";
import FadeIn from "@/components/motion/fade-in";

export default function CTASection() {
  return (
    <FadeIn>
      <section className="relative z-10 py-24">
        <div className="container-custom">
          <div className="rounded-3xl border border-surface bg-surface backdrop-blur-xl p-10 md:p-16 shadow-[var(--shadow-soft)]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                Collaboration
              </p>
              <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight">
                Разработка современных SEO-ориентированных сайтов и
                frontend-проектов
              </h2>
              <p className="mb-4 text-lg leading-8 text-primary">
                Открыт для сотрудничества, frontend-разработки и создания
                производительных web-интерфейсов.
              </p>
              <p className="text-sm text-secondary mb-10">
                Open for frontend development, SEO-oriented websites and modern
                web interfaces.
              </p>
              <Link
                href="#contacts"
                className="inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[var(--accent-hover)] active:scale-[0.98]"
              >
                Обсудить проект
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
