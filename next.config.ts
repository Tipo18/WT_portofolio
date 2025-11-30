import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/WT_portofolio",
  assetPrefix: "/WT_portofolio",
  images: {
    unoptimized: true,
  },
};

module.exports = {
}

export default nextConfig;


