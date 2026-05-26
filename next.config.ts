import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = createMDX({
  extension: /\.mdx?$/,

  options: {
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          theme: "github-dark",

          keepBackground: false,
        },
      ],
    ],
  },
});

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "X-Content-Type-Options",

            value: "nosniff",
          },

          {
            key: "X-Frame-Options",

            value: "DENY",
          },

          {
            key: "Referrer-Policy",

            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
