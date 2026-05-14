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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Services
            </p>
            <h2 className="mb-4 text-4xl font-bold">
              Разработка современных SEO-ориентированных сайтов
            </h2>
            <p className="text-zinc-400">
              Архитектура, frontend-разработка, техническая SEO-оптимизация и
              адаптивный интерфейс.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mb-5 leading-7 text-zinc-400">
                  {service.description}
                </p>
                <p className="text-secondary-language text-sm text-zinc-500">
                  {service.secondary}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
