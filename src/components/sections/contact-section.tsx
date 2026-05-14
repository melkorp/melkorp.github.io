import FadeIn from "@/components/motion/fade-in";

export default function ContactSection() {
  return (
    <FadeIn>
      <section id="contacts" className="relative z-10 py-24">
        <div className="container-custom">
          <div className="rounded-3xl border border-surface bg-surface backdrop-blur-xl p-10 md:p-16 shadow-[var(--shadow-soft)]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                Contacts
              </p>

              <h2 className="mb-6 text-3xl md:text-5xl font-bold tracking-tight">
                Связь для сотрудничества и frontend-разработки
              </h2>

              <p className="mb-4 text-lg leading-8 text-primary">
                Разработка SEO-ориентированных сайтов, адаптивных интерфейсов и
                современных frontend-проектов.
              </p>

              <p className="text-sm text-secondary mb-10">
                Open for collaboration, frontend projects and SEO-oriented web
                development.
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-secondary">
                    Email
                  </p>

                  <a
                    href="mailto:tamogoghi@gmail.com"
                    className="text-lg transition hover:text-[var(--accent)]"
                  >
                    melkorp@proton.me
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.2em] text-secondary">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/melkorp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg transition hover:text-[var(--accent)]"
                  >
                    github.com/melkorp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
