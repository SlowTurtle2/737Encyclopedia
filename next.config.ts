import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The site is content-only for now, so a static export is the most portable
  // Netlify target. It also keeps the existing Cloudflare/Sites build usable.
  output: 'export',
};

export default nextConfig;
