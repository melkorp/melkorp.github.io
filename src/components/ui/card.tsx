type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-2xl border border-surface bg-surface p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
      {children}
    </div>
  );
}
