/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  env: {
    HYGRAPH_API_TOKEN: process.env.HYGRAPH_API_TOKEN,
  }
}

module.exports = nextConfig
