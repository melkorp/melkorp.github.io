import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      allow: "/",
    },

    sitemap: "https://Melkorp.github.io/sitemap.xml",
  };
}
