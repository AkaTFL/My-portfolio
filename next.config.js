/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
