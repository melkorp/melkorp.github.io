import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { personSchema, websiteSchema } from "@/lib/structured-data";
import { Inter } from "next/font/google";
import { createMetadata } from "@/lib/metadata";
import { safeJsonLd } from "@/lib/safe-json-ld";
import "./globals.css";
import ScrollToTop from "@/components/ui/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

const verification = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
};

export const metadata: Metadata = {
  ...createMetadata({ title: "Melkorp" }),
  verification,
  metadataBase: new URL("https://melkorp.github.io"),
  icons: {
    icon: "/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://melkorp.github.io",
    languages: {
      "ru-RU": "https://melkorp.github.io",
      "en-US": "https://melkorp.github.io",
    },
  },
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
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        />
      </head>
      <body className="antialiased">
        <div className="relative min-h-screen overflow-hidden bg-background dark:bg-foreground transition-colors duration-300">
          {/* Декоративные элементы — временно убраны, добавим позже при необходимости */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(personSchema()),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: safeJsonLd(websiteSchema()),
            }}
          />

          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
