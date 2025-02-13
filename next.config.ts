import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.cvent.com",
        protocol: "https",
      }
    ],
  },
  /* config options here */
};

export default nextConfig;
