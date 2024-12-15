import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.controlemunicipal.com.br',
        port: '',
        pathname: '/inga/sistema/imagens/**',
      },
      {
        protocol: 'https',
        hostname: 'www.iat.pr.gov.br',
        port: '',
        pathname: '/sites/agua-terra/**',
      },
      {
        protocol: 'https',
        hostname: 'www.crmpr.org.br',
        port: '',
        pathname: '/dbimages/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rotadorosario.org',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'eremjt.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ]
  }
};

export default nextConfig;
