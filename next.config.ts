import type { NextConfig } from "next";
import { headers as cspHeaders } from "./lib/csp";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: { bodySizeLimit: "1mb" } },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: cspHeaders(),
      },
    ];
  },
};

export default nextConfig;
