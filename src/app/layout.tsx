import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Melkorp",
    template: "%s | Melkorp",
  },

  description:
    "Разработка SEO-ориентированных сайтов с современной frontend-архитектурой, высокой скоростью загрузки и адаптивным интерфейсом.",

  keywords: [
    "seo разработка",
    "frontend developer",
    "next.js",
    "создание сайтов",
    "seo сайты",
    "адаптивные сайты",
    "technical seo",
    "typescript",
  ],

  metadataBase: new URL("https://melkorp.github.io"),

  openGraph: {
    title: "Melkorp",
    description:
      "Разработка SEO-ориентированных сайтов с современной frontend-архитектурой.",
    url: "https://melkorp.github.io",
    siteName: "Melkorp",
    locale: "ru_RU",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
