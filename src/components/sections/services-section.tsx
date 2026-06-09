import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";

const services = [
  {
    title: "SEO-оптимизация",
    description:
      "Технический аудит, корректная HTML-семантика, микроразметка и ускорение индексации — чтобы сайт находили.",
    secondary: "Technical SEO, structured data and crawl optimization.",
  },
  {
    title: "Frontend-архитектура",
    description:
      "Проектирование компонентных систем на Next.js, TypeScript и Tailwind — чистый код, который легко масштабировать.",
    secondary: "Scalable frontend architecture with modern stack.",
  },
  {
    title: "Адаптивная вёрстка",
    description:
      "Интерфейсы, которые одинаково удобны на смартфоне, планшете и десктопе — без компромиссов.",
    secondary: "Pixel-perfect responsive layouts for all devices.",
  },
  {
    title: "Производительность",
    description:
      "Оптимизация Core Web Vitals, Lighthouse и времени загрузки — быстрый рендеринг на любых устройствах.",
    secondary: "Performance tuning for 90+ Lighthouse scores.",
  },
];

export default function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <FadeIn>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Services
            </p>
            <Heading
              title="Что я делаю"
              description="От архитектуры до производительности — создаю сайты, которые работают быстро и ранжируются высоко."
            />
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Card>
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mb-5 text-base leading-8 text-primary">
                  {service.description}
                </p>
                <p className="text-sm text-secondary">{service.secondary}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
