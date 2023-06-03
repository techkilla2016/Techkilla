/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'admin-server-topaz.vercel.app', 'https://admin-server-topaz.vercel.app/', 'https://socket-server-mwbe.onrender.com'],
    // Add any additional domains if needed
  },
  publicRuntimeConfig: {
    BaseUrl: process.env.BaseUrl,
  },
};

module.exports = nextConfig;
