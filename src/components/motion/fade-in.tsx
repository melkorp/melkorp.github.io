type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({ children, className = "", delay = 0 }: Props) {
  return (
    <div
      className={`${className} animate-fade-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
