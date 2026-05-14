import FadeIn from "@/components/motion/fade-in";

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
    <section id="portfolio" className="relative z-10 py-24">
      <div className="container-custom">
        <FadeIn>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Portfolio
            </p>
            <h2 className="mb-4 text-4xl font-bold">
              Проекты и frontend-разработка
            </h2>
            <p className="text-zinc-400">
              Текущие разработки, архитектурные концепции и SEO-ориентированные
              интерфейсы.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <article className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>

                <div className="mb-6 space-y-4">
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-zinc-500">
                      Задача
                    </p>
                    <p className="leading-7 text-zinc-300">{project.problem}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-zinc-500">
                      Решение
                    </p>
                    <p className="leading-7 text-zinc-300">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-zinc-500">
                      Результат
                    </p>
                    <p className="leading-7 text-zinc-300">{project.result}</p>
                  </div>
                </div>

                <div className="mb-5 text-sm text-zinc-500">
                  {project.stack}
                </div>

                <p className="text-secondary-language text-sm text-zinc-500">
                  {project.secondary}
                </p>

                <a
                  href={`/portfolio-site/projects/${project.slug}`}
                  className="mt-6 inline-flex text-sm text-blue-400 transition hover:text-blue-300"
                >
                  Смотреть case study →
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
