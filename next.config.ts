import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // Enable dynamic SSR by removing static export
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Disable features not supported in static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.withersworldwide.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdni.haymarketmedia.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gwdocs.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i1.rgstatic.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Performance optimizations for static export
  compress: true,
  poweredByHeader: false,
  
  // Base path configuration (if needed for subdirectory deployment)
  // basePath: '/your-subdirectory',
  
  // Asset prefix for CDN (optional)
  // assetPrefix: 'https://your-cdn.com',
  
  // Headers for security and performance (only works with server)
  // Note: These won't work with static export, handle at web server level
};

export default nextConfig;
