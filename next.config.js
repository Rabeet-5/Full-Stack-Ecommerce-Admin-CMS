/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
