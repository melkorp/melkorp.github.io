import Link from "next/link";

import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Melkorp
            </p>

            <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
              Разработка SEO-ориентированных сайтов с современной
              frontend-архитектурой и высокой производительностью.
            </h1>

            <p className="mb-3 text-base md:text-lg leading-8 text-zinc-300">
              Создание адаптивных сайтов, frontend-проектов и
              SEO-структурированных интерфейсов с упором на производительность,
              индексацию и техническую оптимизацию.
            </p>

            <p className="text-secondary-language mb-10 text-sm text-zinc-500">
              SEO-focused frontend development, responsive architecture and
              technical optimization.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
              >
                Портфолио
              </Link>

              <Link
                href="/contacts"
                className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-500"
              >
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <PortfolioSection />

      <ContactSection />
    </>
  );
}
