import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Trailing slash for better compatibility
  trailingSlash: true,
  
  // Base path configuration (update when using custom domain)
  // basePath: '',
  
  // Asset prefix for CDN (can be configured later)
  // assetPrefix: '',
  
  // Disable server-side features that don't work with static export
  // experimental: {
  //   // Enable for better performance
  //   optimizeCss: true,
  // },
};

export default nextConfig;
