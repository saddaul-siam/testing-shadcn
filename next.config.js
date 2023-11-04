/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.pexels.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "www.applegadgetsbd.com",
    ],
  },
};

module.exports = nextConfig;
