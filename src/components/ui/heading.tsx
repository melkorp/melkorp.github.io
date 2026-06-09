type Props = {
  title: string;
  description?: string;
};

export default function Heading({ title, description }: Props) {
  return (
    <div className="max-w-3xl">
      <h2
        className="text-4xl font-black tracking-tight md:text-5xl break-words hyphens-auto"
        lang="ru"
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-6 text-lg leading-8 text-secondary break-words hyphens-auto"
          lang="ru"
        >
          {description}
        </p>
      )}
    </div>
  );
}
