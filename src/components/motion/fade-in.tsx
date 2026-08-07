type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({ children, className = "", delay = 0 }: Props) {
  const delayClass =
    delay === 0 ? "motion-delay-0" : `motion-delay-${Math.round(delay * 10)}`;

  return (
    <div className={`${className} animate-fade-up ${delayClass}`}>
      {children}
    </div>
  );
}
