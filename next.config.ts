import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components (directive "use cache") sera activé en S3.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
