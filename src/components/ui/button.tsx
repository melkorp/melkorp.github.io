import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  const styles = `inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] active:scale-[0.98]`;

  if (isExternal) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
