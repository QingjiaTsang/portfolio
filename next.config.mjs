import createNextIntlPlugin from 'next-intl/plugin';

/*
  Note: the plugin will run like this under the hood, so the request.ts file is required by default
  const withNextIntl = createNextIntlPlugin(
  './path/to/i18n/request.ts'
  );
*/
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    qualities: [50, 75, 100],
    formats: ["image/webp"],
  },
};

export default withNextIntl(nextConfig);
