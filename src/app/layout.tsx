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
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        />
      </head>
      <body className="text-(--text-primary)">
        <div className="relative min-h-screen overflow-hidden bg-(--background) antialiased">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-size-[64px_64px] opacity-[0.06]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />

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
