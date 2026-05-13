import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

  verification: {
    google: "9guNaiNc7jeb4jdK2Oki0J59B5Yqc5CC2F15flhxgLM",
    yandex: "b87e2b2622c5d4d0",
  },

  metadataBase: new URL("https://melkorp.github.io/portfolio-site"),

  openGraph: {
    title: "Melkorp",
    description:
      "Разработка SEO-ориентированных сайтов с современной frontend-архитектурой.",
    url: "https://melkorp.github.io/portfolio-site",
    siteName: "Melkorp",
    locale: "ru_RU",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://melkorp.github.io/portfolio-site",

    languages: {
      "ru-RU": "https://melkorp.github.io/portfolio-site",

      "en-US": "https://melkorp.github.io/portfolio-site",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Melkorp",
  url: "https://melkorp.github.io/portfolio-site",
  jobTitle: "Frontend Developer",
  description: "Разработка SEO-ориентированных сайтов и frontend-интерфейсов.",
  sameAs: ["https://github.com/melkorp"],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Frontend Development",
    "Technical SEO",
    "Responsive Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={inter.className}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preload" as="image" href="/images/hero.png" />
      </head>
      <body className="bg-[#0b0f19] text-[#e5e7eb]">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
