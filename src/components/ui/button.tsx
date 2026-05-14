import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-4 font-medium text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      {children}
    </Link>
  );
}
