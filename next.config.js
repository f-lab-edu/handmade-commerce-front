const { withPlaiceholder } = require("@plaiceholder/next");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["image.wconcept.co.kr", "goldendew.com", "ai.esmplus.com"],
  },
};

module.exports = withPlaiceholder(nextConfig);
