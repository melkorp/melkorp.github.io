import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createMetadata } from "@/lib/metadata";
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
          content="
            default-src 'self';
            img-src 'self' data: blob:;
            script-src 'self';
            style-src 'self' 'unsafe-hashes' sha256-PWEsJbDDdbIMebZDI9YWizXqPKxk4tOslYmWk2nJ+QE= sha256-8Z+NIkNTY9PA6IZWyla86zLScyPYu+DMCE0SOb56Xx8= sha256-loarVluNUQVbM7rhQ8Hq9m282hh+HPYxAVebTfBOTHE= sha256-+Sz7UVbGpHDb3n1JfZ44f1Kf3VLPIWNPMnKoc0Ne9wk= sha256-32mYGAQxBjRbIqEhE8i3momV3VlKU/I11QWNCRHvsw8= sha256-/hsS7oXTDPMp6bXDYcvYv143BPifqzm6v132HBsS0A0=;
            connect-src 'self' https://formspree.io https://*.formspree.io;
            form-action 'self' https://formspree.io https://*.formspree.io;
          "
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
