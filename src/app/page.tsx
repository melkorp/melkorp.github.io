import Link from "next/link";
import HeroTitle from "@/components/motion/hero-title";
import FadeIn from "@/components/motion/fade-in";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ContactSection from "@/components/sections/contact-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="container-custom">
          <div className="max-w-4xl">
            <FadeIn>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                Melkorp
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <HeroTitle className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
                Разработка SEO-ориентированных сайтов с современной
                frontend-архитектурой и высокой производительностью.
              </HeroTitle>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mb-3 text-base md:text-lg leading-8 text-zinc-300">
                Создание адаптивных сайтов, frontend-проектов и
                SEO-структурированных интерфейсов с упором на
                производительность, индексацию и техническую оптимизацию.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-secondary-language mb-10 text-sm text-zinc-500">
                SEO-focused frontend development, responsive architecture and
                technical optimization.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#portfolio"
                  className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-blue-400 active:scale-[0.98]"
                >
                  Портфолио
                </Link>

                <Link
                  href="#contacts"
                  className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:border-zinc-500 active:scale-[0.98]"
                >
                  Контакты
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn>
        <ServicesSection />
      </FadeIn>

      <FadeIn>
        <PortfolioSection />
      </FadeIn>

      <FadeIn>
        <CTASection />
      </FadeIn>

      <FadeIn>
        <ContactSection />
      </FadeIn>
    </>
  );
}
