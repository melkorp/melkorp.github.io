import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";

const projects = [
  {
    slug: "seo-landing-platform",
    title: "SEO Landing Platform",
    status: "В разработке",
    problem:
      "Создание SEO-структурированного landing page с высокой скоростью загрузки и современной frontend-архитектурой.",
    solution:
      "Использование Next.js App Router, semantic HTML и performance-oriented структуры.",
    result:
      "Подготовка платформы под поисковую индексацию и дальнейшее масштабирование.",
    stack: "Next.js · TypeScript · Tailwind",
    secondary: "SEO-first architecture and scalable frontend foundation.",
  },
  {
    slug: "business-website-concept",
    title: "Business Website Concept",
    status: "Concept",
    problem:
      "Проектирование коммерческого интерфейса с акцентом на UX и адаптивность.",
    solution: "Построение responsive layout и semantic content structure.",
    result: "Готовая frontend-концепция под коммерческое развитие.",
    stack: "Responsive UI · Semantic HTML · SEO",
    secondary: "Optimized business-oriented frontend interface.",
  },
  {
    slug: "frontend-component-system",
    title: "Frontend Component System",
    status: "UI System",
    problem: "Создание reusable UI-архитектуры для масштабируемых интерфейсов.",
    solution: "Компонентная структура и единая design-system логика.",
    result: "Ускорение дальнейшей frontend-разработки и поддержки.",
    stack: "React · Components · UI Architecture",
    secondary: "Reusable and scalable frontend ecosystem.",
  },
];

export default function PortfolioSection() {
  return (
    <Section id="portfolio">
      <Container>
        <FadeIn>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Portfolio
            </p>
            <Heading
              title="Проекты и frontend-разработка"
              description="Текущие разработки, архитектурные концепции и SEO-ориентированные интерфейсы."
            />
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Card>
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                    {project.status}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
                <div className="mb-6 space-y-6">
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-secondary">
                      Задача
                    </p>
                    <p className="text-base leading-8 text-primary">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-secondary">
                      Решение
                    </p>
                    <p className="text-base leading-8 text-primary">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-secondary">
                      Результат
                    </p>
                    <p className="text-base leading-8 text-primary">
                      {project.result}
                    </p>
                  </div>
                </div>
                <div className="mb-5 text-sm text-secondary">
                  {project.stack}
                </div>
                <p className="text-sm text-secondary">{project.secondary}</p>
                <a
                  href={`/portfolio-site/projects/${project.slug}`}
                  className="mt-6 inline-flex text-sm text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
                >
                  Смотреть case study →
                </a>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
