// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    //domínios das imagens que virão da API
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sua-api.com', //  API
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
    ],
  },
};

export default nextConfig;