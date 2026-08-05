import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="container-custom flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-secondary">404</p>
        <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
          Страница не найдена
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
          Возможно, ссылка устарела или была введена неверно. Вернитесь на
          главную страницу.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-2xl bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Вернуться на сайт
        </Link>
      </div>
    </div>
  );
}
