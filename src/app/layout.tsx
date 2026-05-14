import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...createMetadata({ title: "Melkorp" }),
  verification: {
    google: "9guNaiNc7jeb4jdK2Oki0J59B5Yqc5CC2F15flhxgLM",
    yandex: "b87e2b2622c5d4d0",
  },
  metadataBase: new URL("https://melkorp.github.io/portfolio-site"),
  icons: {
    icon: "/portfolio-site/images/icon.png",
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
      <body className="text-[var(--text-primary)]">
        <div className="relative min-h-screen overflow-hidden bg-[var(--background)] antialiased">
          {/* Grid overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.06]" />
          {/* Radial glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          {/* Noise texture (CSS) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />

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
        </div>
      </body>
    </html>
  );
}
