import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

export default function ContactSection() {
  return (
    <FadeIn>
      <Section id="contacts">
        <Container>
          <div className="rounded-3xl border border-surface bg-surface backdrop-blur-xl p-10 md:p-16 shadow-[var(--shadow-soft)]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                Contacts
              </p>
              <Heading
                title="Связь для сотрудничества и frontend-разработки"
                description="Разработка SEO-ориентированных сайтов, адаптивных интерфейсов и современных frontend-проектов."
              />
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
                    className="text-lg transition hover:text-[var(--accent-hover)]"
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
                    className="text-lg transition hover:text-[var(--accent-hover)]"
                  >
                    github.com/melkorp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </FadeIn>
  );
}
