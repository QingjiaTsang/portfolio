/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    qualities: [50, 75, 100],
    formats: ["image/webp"],
  },
};

export default nextConfig;
