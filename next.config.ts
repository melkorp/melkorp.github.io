import type { NextConfig } from "next";

import createMDX from "@next/mdx";

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

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    unoptimized: true,
  },

  basePath: isProd ? "/portfolio-site" : "",

  assetPrefix: isProd ? "/portfolio-site/" : "",
};

export default withMDX(nextConfig);
