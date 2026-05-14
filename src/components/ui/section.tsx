type Props = {
  children: React.ReactNode;
  id?: string;
};

export default function Section({ children, id }: Props) {
  return (
    <section id={id} className="relative z-10 py-24 md:py-32">
      {children}
    </section>
  );
}
