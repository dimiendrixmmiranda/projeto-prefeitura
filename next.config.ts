import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.controlemunicipal.com.br',
        port: '',
        pathname: '/inga/sistema/imagens/**',
      }
    ]
  }
};

export default nextConfig;
