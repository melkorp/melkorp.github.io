export const dynamic = "force-static";
import { posts } from "@/data/blog";

export async function GET() {
  const baseUrl = "https://melkorp.github.io/portfolio-site";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Melkorp Blog</title>
        <link>${baseUrl}</link>
        <description>Frontend, SEO и web architecture</description>
        ${posts
          .map(
            (post) => `
          <item>
            <title>${post.title}</title>
            <link>${baseUrl}/blog/${post.slug}</link>
          </item>
        `,
          )
          .join("")}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}
