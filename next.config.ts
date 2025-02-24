import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
