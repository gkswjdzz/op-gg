/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['opgg-static.akamaized.net'],
  },
  async rewrites() {
    return [
      {
        source: '/api/_/:path*',
        destination: `https://codingtest.op.gg/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
