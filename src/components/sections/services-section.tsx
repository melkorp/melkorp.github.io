import FadeIn from "@/components/ui/fade-in";

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
    <FadeIn>
      <section id="services" className="py-24">
        <div className="container-custom">
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

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-zinc-700"
              >
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>

                <p className="mb-5 leading-7 text-zinc-400">
                  {service.description}
                </p>

                <p className="text-secondary-language text-sm text-zinc-500">
                  {service.secondary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
