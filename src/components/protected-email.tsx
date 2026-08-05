"use client";

import { useState } from "react";

type ProtectedEmailProps = {
  readonly encryptedEmail: string;
  readonly className?: string;
  readonly label?: string;
  readonly revealLabel?: string;
};
export default function ProtectedEmail({
  encryptedEmail,
  className,
  label = "Написать",
  revealLabel = "Показать email",
}: ProtectedEmailProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = atob(encryptedEmail).replace(/./g, (char) =>
    String.fromCodePoint((char.codePointAt(0) ?? 0) ^ 42),
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsRevealed(false);
    }, 2000);
  };

  if (isRevealed) {
    return (
      <div className={className}>
        <button
          type="button"
          onClick={handleCopy}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          {copied ? "Скопировано! ✓" : email}
        </button>
      </div>
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
