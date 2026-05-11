export default function ContactSection() {
  return (
    <section id="contacts" className="py-24">
      <div className="container-custom">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 md:p-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Contacts
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight">
              Связь для сотрудничества и frontend-разработки
            </h2>

            <p className="mb-4 text-lg leading-8 text-zinc-300">
              Разработка SEO-ориентированных сайтов, адаптивных интерфейсов и
              современных frontend-проектов.
            </p>

            <p className="text-secondary-language mb-10 text-sm text-zinc-500">
              Open for collaboration, frontend projects and SEO-oriented web
              development.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Email
                </p>

                <a
                  href="mailto:tamogoghi@gmail.com"
                  className="text-lg transition hover:text-blue-400"
                >
                  melkorp@proton.me
                </a>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/melkorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg transition hover:text-blue-400"
                >
                  github.com/melkorp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
