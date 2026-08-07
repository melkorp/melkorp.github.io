import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";
import ScrollToTop from "@/components/ui/scroll-to-top";

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
    <html lang="ru" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-hashes'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; connect-src 'self' https://formspree.io https://*.formspree.io https://fonts.googleapis.com https://fonts.gstatic.com; form-action 'self' https://formspree.io https://*.formspree.io; base-uri 'self'; object-src 'none';"
        />
        {/* JSON-LD вынесены в публичные файлы, чтобы работать с CSP без unsafe-inline для стилей */}
        <script type="application/ld+json" src="/person.json" />
        <script type="application/ld+json" src="/website.json" />
      </head>
      <body className="antialiased">
        <div className="relative min-h-screen overflow-hidden bg-background dark:bg-foreground transition-colors duration-300">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
