/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
module.exports = {
  publicRuntimeConfig: {
    BaseUrl: process.env.BaseUrl,
  },
};
