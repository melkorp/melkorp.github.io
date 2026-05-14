import FadeIn from "@/components/motion/fade-in";

const services = [
  {
    title: "SEO-ориентированные сайты",
    description:
      "Разработка сайтов с корректной HTML-структурой, технической SEO-подготовкой и высокой скоростью загрузки.",
    secondary: "SEO-first website architecture and technical optimization.",
  },
  {
    title: "Frontend разработка",
    description:
      "Создание современных интерфейсов на Next.js, TypeScript и Tailwind CSS.",
    secondary: "Modern frontend interfaces with scalable architecture.",
  },
  {
    title: "Адаптивный дизайн",
    description:
      "Интерфейсы корректно работают на мобильных устройствах, планшетах и desktop.",
    secondary: "Responsive layouts across all screen sizes.",
  },
  {
    title: "Performance optimization",
    description:
      "Оптимизация Lighthouse-показателей, Core Web Vitals и скорости рендеринга.",
    secondary: "Fast loading and optimized rendering pipeline.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24">
      <div className="container-custom">
        <FadeIn>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Services
            </p>
            <h2 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight">
              Разработка современных SEO-ориентированных сайтов
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-secondary">
              Архитектура, frontend-разработка, техническая SEO-оптимизация и
              адаптивный интерфейс.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <article className="rounded-2xl border border-surface bg-surface backdrop-blur-xl p-8 ... shadow-[var(--shadow-soft)]">
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mb-5 text-base leading-8 text-primary">
                  {service.description}
                </p>
                <p className="text-sm text-secondary">{service.secondary}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
