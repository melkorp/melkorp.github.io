import type { Metadata } from "next";

import { seoConfig } from "@/config/seo";

type Props = {
  title: string;

  description?: string;

  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: Props): Metadata {
  const fullTitle = `${title} | ${seoConfig.siteName}`;

  const fullUrl = `${seoConfig.siteUrl}${path}`;

  return {
    title: fullTitle,

    description: description ?? seoConfig.description,

    keywords: seoConfig.keywords,

    authors: [
      {
        name: seoConfig.author,
      },
    ],

    openGraph: {
      title: fullTitle,

      description: description ?? seoConfig.description,

      url: fullUrl,

      siteName: seoConfig.siteName,

      locale: "ru_RU",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: fullTitle,

      description: description ?? seoConfig.description,
    },
  };
}
