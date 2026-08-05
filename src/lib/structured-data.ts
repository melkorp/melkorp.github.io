import { seoConfig } from "@/config/seo";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Melkorp",
    url: seoConfig.siteUrl,
    jobTitle: "Frontend Developer",
    description: seoConfig.description,
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "SEO",
      "React",
      "Frontend Architecture",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
  };
}
