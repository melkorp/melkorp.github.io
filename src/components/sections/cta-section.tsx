import Link from "next/link";
import FadeIn from "@/components/motion/fade-in";

export default function CTASection() {
  return (
    <FadeIn>
      <section className="relative z-10 py-24">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
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
                className="inline-flex rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-blue-400 active:scale-[0.98]"
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
