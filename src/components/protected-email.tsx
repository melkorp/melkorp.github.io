"use client";

import { useMemo, useState } from "react";

type ProtectedEmailProps = {
  className?: string;
  label?: string;
  revealLabel?: string;
};

const emailCodes = [
  109, 101, 108, 107, 111, 114, 112, 64, 112, 114, 111, 116, 111, 110, 46, 109,
  101,
];

export default function ProtectedEmail({
  className,
  label = "Написать",
  revealLabel = "Показать email",
}: ProtectedEmailProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const email = useMemo(
    () => String.fromCharCode(...emailCodes),
    [],
  );

  if (isRevealed) {
    return (
      <a className={className} href={`mailto:${email}`}>
        {email}
      </a>
    );
  }

  return (
    <button
      className={className}
      type="button"
      onClick={() => setIsRevealed(true)}
      aria-label={revealLabel}
    >
      {label}
    </button>
  );
}
