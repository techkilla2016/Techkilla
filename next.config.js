/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/data/**",
      },
      {
        protocol: "https",
        hostname: "snapshawt.in",
        port: "",
        pathname: "/data/**",
      },
    ],
  },
};

module.exports = nextConfig;
