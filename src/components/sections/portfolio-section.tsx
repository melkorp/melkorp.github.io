import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import { ExternalLink, Mountain, Coffee } from "lucide-react";
import Link from "next/link";

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

const externalProjects = [
  {
    title: "NordTrail Travel",
    description:
      "Практические гиды по Исландии, Норвегии, Японии, Грузии, Альпам, Камчатке, Кольскому, Алтаю и Байкалу. Сезоны, бюджеты, маршруты для самостоятельного планирования путешествий.",
    url: "https://nord-trail-travel.vercel.app/",
    icon: Mountain,
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Travel"],
    status: "Готов к продаже",
  },
  {
    title: "Ароматный кофе",
    description:
      "Сайт кофейни в Дмитрове. Свежеобжаренный кофе, завтраки весь день, уютная атмосфера. Меню, информация о заведении и контакты.",
    url: "https://melkorp.github.io/cafe-dmitrov",
    icon: Coffee,
    gradient: "from-orange-500 via-red-500 to-pink-600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cafe"],
    status: "Готов к продаже",
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

        {/* Существующие проекты */}
        <div className="grid gap-6 lg:grid-cols-3 mb-20">
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
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex text-sm text-blue-400 transition hover:text-blue-200 hover:underline"
                >
                  Смотреть case study →
                </a>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Новые проекты для продажи */}
        <FadeIn>
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Available for Purchase
            </p>
            <h2 className="text-3xl font-bold text-primary mb-3">
              Готовые проекты для продажи
            </h2>
            <p className="text-secondary leading-relaxed">
              Современные сайты под ключ на Next.js, TypeScript и Tailwind CSS.
              Все проекты полностью готовы к передаче и дальнейшему развитию.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {externalProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.2}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div
                  className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-[2px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
                >
                  <div className="relative h-full rounded-2xl bg-surface backdrop-blur-xl p-8">
                    {/* Статус */}
                    <div className="mb-6 flex items-center justify-between">
                      <span
                        className={`rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-xs font-medium text-white`}
                      >
                        {project.status}
                      </span>
                      <ExternalLink className="h-5 w-5 text-secondary transition-all duration-300 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    {/* Иконка */}
                    <div
                      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} p-4 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <project.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Заголовок */}
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Описание */}
                    <p className="text-secondary mb-6 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    {/* Теги */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-surface bg-background/50 px-3 py-1 text-xs text-secondary backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Кнопка */}
                    <div className="pt-6 border-t border-surface">
                      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-[var(--accent)] transition-colors duration-300">
                        <span>Открыть сайт</span>
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Декоративный градиент */}
                    <div
                      className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                    />
                    <div
                      className={`absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                    />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Дополнительная информация */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-secondary text-sm">
              💼 Заинтересовал проект? Свяжитесь со мной для обсуждения деталей
              покупки и передачи.
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
