type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HeroTitle({ children, className = "" }: Props) {
  return (
    <h1 className={`${className} animate-fade-up motion-delay-1`}>
      {children}
    </h1>
  );
}
