const projects = [
  {
    title: "SEO Landing Platform",

    status: "В разработке",

    description:
      "Frontend-проект с SEO-архитектурой, адаптивным интерфейсом и технической оптимизацией.",

    stack: "Next.js · TypeScript · Tailwind",

    secondary: "Technical SEO and modern frontend architecture.",
  },

  {
    title: "Business Website Concept",

    status: "Concept",

    description:
      "Концепт коммерческого сайта с упором на UX, скорость загрузки и индексируемость.",

    stack: "Responsive UI · Semantic HTML · SEO",

    secondary: "Optimized structure for search engine visibility.",
  },

  {
    title: "Frontend UI System",

    status: "UI Architecture",

    description:
      "Система компонентов и reusable UI-архитектура для масштабируемых интерфейсов.",

    stack: "React · Components · UI System",

    secondary: "Reusable frontend component ecosystem.",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container-custom">
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

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:-translate-y-1 hover:border-zinc-700"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                  {project.status}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>

              <p className="mb-6 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mb-5 text-sm text-zinc-500">{project.stack}</div>

              <p className="text-secondary-language text-sm text-zinc-500">
                {project.secondary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
