type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HeroTitle({ children, className = "" }: Props) {
  return (
    <h1
      className={`${className} animate-fade-up`}
      style={{ animationDelay: "0.1s" }}
    >
      {children}
    </h1>
  );
}
