import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The site is content-only for now, so a static export keeps the
  // Cloudflare/Sites build portable.
  output: 'export',
};

export default nextConfig;
