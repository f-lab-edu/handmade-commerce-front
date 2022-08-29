/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.wconcept.co.kr', "goldendew.com", "ai.esmplus.com"]
  }
}

module.exports = nextConfig
