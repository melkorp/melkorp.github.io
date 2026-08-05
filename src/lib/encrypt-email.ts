const KEY = 42;

export function encryptEmail(email: string): string {
  let encrypted = "";
  for (const char of email) {
    const codePoint = char.codePointAt(0) ?? 0;
    encrypted += String.fromCodePoint(codePoint ^ KEY);
  }
  return btoa(encrypted);
}

export function decryptEmail(encoded: string): string {
  const decoded = atob(encoded);
  let decrypted = "";
  for (const char of decoded) {
    const codePoint = char.codePointAt(0) ?? 0;
    decrypted += String.fromCodePoint(codePoint ^ KEY);
  }
  return decrypted;
}
