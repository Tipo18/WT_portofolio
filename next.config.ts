import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/WT_portofolio",
  output: 'export',
  reactStrictMode: true,
};

module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig;
