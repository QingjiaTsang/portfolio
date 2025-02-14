import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

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

  sentry: {
    hideSourceMaps: true,
    disableLogger: true,
  },
};

export default withSentryConfig(withNextIntl(nextConfig), {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: "qingjia-tsang",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    // Note: 在vercel部署上线后一直报错: Cannot read properties of undefined (reading 'sentry')
    // 目前了解是sentry的bug，特别是使用了 @react-three/fiber 这个库的时候，目前仍然是等待sentry修复的状态中
    // reference: https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/530
    enabled: false,
  },

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
