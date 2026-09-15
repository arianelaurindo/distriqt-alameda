import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/distriqt-alameda',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
