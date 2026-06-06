const KEY = 42;

export function encryptEmail(email: string): string {
  let encrypted = "";
  for (const char of email) {
    const codePoint = char.codePointAt(0) ?? 0;
    encrypted += String.fromCodePoint(codePoint ^ KEY);
  }
  return btoa(encrypted);
}
