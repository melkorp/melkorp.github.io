"use client";

import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import ProtectedEmail from "@/components/protected-email";
import { encryptEmail } from "@/lib/encrypt-email";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mzepbdqn");
  const hasFormErrors = Boolean(
    state.errors &&
    typeof state.errors === "object" &&
    Object.keys(state.errors).length > 0,
  );
  const errorMessages =
    state.errors && typeof state.errors === "object"
      ? Object.entries(state.errors).map(([field, error]) => {
          const message =
            typeof error === "string"
              ? error
              : Array.isArray(error)
                ? error.join(", ")
                : "Ошибка отправки";

          return `${field}: ${message}`;
        })
      : [];

  if (state.succeeded) {
    return (
      <FadeIn>
        <Section id="contacts">
          <Container>
            <div className="rounded-3xl border border-surface bg-surface md:backdrop-blur-xl p-10 md:p-16 shadow-(--shadow-soft) overflow-hidden">
              <div className="max-w-3xl text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--accent)">
                  Contacts
                </p>
                <h2 className="mt-2 text-3xl font-bold">Спасибо</h2>
                <p className="mt-4 text-sm text-secondary">
                  Ваше сообщение отправлено — я свяжусь с вами в ближайшее
                  время.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <Section id="contacts">
        <Container>
          <div className="rounded-3xl border border-surface bg-surface md:backdrop-blur-xl p-10 md:p-16 shadow-(--shadow-soft) overflow-hidden">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--accent)">
                Contacts
              </p>
              <Heading
                title="Напишите мне"
                description="Есть задача, вопрос или идея? Я открыт к сотрудничеству — выходите на связь удобным способом."
              />
              <p className="text-sm text-secondary mb-10">
                Available for frontend projects, SEO consulting and web
                development.
              </p>

              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    {hasFormErrors ? (
                      <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                        <p className="font-medium">
                          Не удалось отправить сообщение.
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {errorMessages.map((message, index) => (
                            <li key={`${message}-${index}`}>{message}</li>
                          ))}
                        </ul>
                        <p className="mt-2">
                          Проверьте поля формы или напишите напрямую по email
                          ниже.
                        </p>
                      </div>
                    ) : null}

                    <label className="block text-sm font-medium text-secondary">
                      Имя
                      <input
                        type="text"
                        name="name"
                        required
                        className="mt-2 w-full rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </label>

                    <label className="block text-sm font-medium text-secondary">
                      Email
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </label>

                    <label className="block text-sm font-medium text-secondary">
                      Тема (опционально)
                      <input
                        type="text"
                        name="subject"
                        className="mt-2 w-full rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </label>

                    <label className="block text-sm font-medium text-secondary">
                      Сообщение
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="mt-2 w-full resize-none rounded-3xl border border-surface bg-background/70 px-4 py-3 text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 text-sm font-medium text-white transition hover:bg-primary/90 disabled:opacity-60"
                    >
                      {state.submitting ? "Отправка..." : "Отправить сообщение"}
                    </button>

                    {hasFormErrors ? (
                      <div className="rounded-xl border border-surface bg-background/50 p-4 text-sm text-secondary">
                        <p className="mb-2 font-medium text-white">
                          Если форма не работает, напишите напрямую:
                        </p>
                        <ProtectedEmail
                          encryptedEmail={encryptEmail("tamogoghi@gmail.com")}
                          className="transition hover:text-(--accent-hover)"
                          label="Показать email"
                          revealLabel="Показать адрес для связи"
                        />
                      </div>
                    ) : null}
                  </form>
                </div>

                <div className="space-y-6 rounded-3xl border border-surface bg-surface/80 p-8">
                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-secondary">
                      Email
                    </p>
                    <ProtectedEmail
                      encryptedEmail={encryptEmail("tamogoghi@gmail.com")}
                      className="text-lg transition hover:text-(--accent-hover)"
                      label="Показать email"
                      revealLabel="Показать адрес для связи"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-secondary">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/melkorp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg transition hover:text-(--accent-hover)"
                    >
                      github.com/melkorp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </FadeIn>
  );
}
