import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";

export default function CTASection() {
  return (
    <FadeIn>
      <Section>
        <Container>
          <div className="rounded-3xl border border-surface bg-surface backdrop-blur-xl p-10 md:p-16 shadow-[var(--shadow-soft)]">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                Collaboration
              </p>
              <Heading
                title="Разработка современных SEO-ориентированных сайтов и frontend-проектов"
                description="Открыт для сотрудничества, frontend-разработки и создания производительных web-интерфейсов."
              />
              <p className="text-sm text-secondary mb-10">
                Open for frontend development, SEO-oriented websites and modern
                web interfaces.
              </p>
              <Button href="#contacts">Обсудить проект</Button>
            </div>
          </div>
        </Container>
      </Section>
    </FadeIn>
  );
}
