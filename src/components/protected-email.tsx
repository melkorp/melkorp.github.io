"use client";

import { useState, useEffect } from "react";

type ProtectedEmailProps = {
  readonly encryptedEmail: string;
  readonly className?: string;
  readonly label?: string;
  readonly revealLabel?: string;
};

// Функция для шифрования с использованием codePointAt
function encryptEmail(email: string): string {
  const key = 42;
  let encrypted = "";
  for (const char of email) {
    const codePoint = char.codePointAt(0) ?? 0;
    encrypted += String.fromCodePoint(codePoint ^ key);
  }
  return btoa(encrypted);
}

// Функция для дешифрования с использованием codePointAt
function decryptEmail(encrypted: string): string {
  const key = 42;
  const decoded = atob(encrypted);
  let decrypted = "";
  for (const char of decoded) {
    const codePoint = char.codePointAt(0) ?? 0;
    decrypted += String.fromCodePoint(codePoint ^ key);
  }
  return decrypted;
}

export default function ProtectedEmail({
  encryptedEmail,
  className,
  label = "Написать",
  revealLabel = "Показать email",
}: ProtectedEmailProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [decryptedEmail, setDecryptedEmail] = useState<string | null>(null);

  useEffect(() => {
    setDecryptedEmail(decryptEmail(encryptedEmail));
  }, [encryptedEmail]);

  const handleCopy = async () => {
    if (decryptedEmail) {
      await navigator.clipboard.writeText(decryptedEmail);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsRevealed(false);
      }, 2000);
    }
  };

  if (isRevealed && decryptedEmail) {
    return (
      <div className={className}>
        <button
          type="button"
          onClick={handleCopy}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          {copied ? "Скопировано! ✓" : decryptedEmail}
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
