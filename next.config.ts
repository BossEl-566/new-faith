import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  /*
   * Cloudflare Pages serves the exported site as static files.
   * Creating /about/index.html etc. gives us predictable
   * routing on static hosting.
   */
  trailingSlash: true,

  /*
   * Next.js's default image optimizer requires a running
   * Next.js server, which a static export does not have.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;