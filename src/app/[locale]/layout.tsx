import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { VisitorTrackProvider } from "@/components/provider/visitor-track-provider";
import { locales } from "@/i18n/config";
import { env } from "@/lib/env";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/i18n/messages/${locale}`)).default;
  }
  catch (_error) {
    notFound();
  }

  return (
    <VisitorTrackProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        <Analytics />
      </NextIntlClientProvider>
    </VisitorTrackProvider>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        {
          url: "/favicon/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/favicon/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
      ],
      shortcut: [
        {
          url: "/favicon/favicon.ico",
          type: "image/x-icon",
        },
      ],
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/favicon/safari-pinned-tab.svg",
          color: "#050816",
        },
      ],
    },
    manifest: "/favicon/site.webmanifest",
    applicationName: "QingjiaTsang",
    keywords: t("keywords").split(","),
    authors: [{ name: "Qingjia Tsang" }],
    creator: "Qingjia Tsang",
    publisher: "Qingjia Tsang",
    formatDetection: {
      telephone: false,
    },
    metadataBase: new URL(
      env.NODE_ENV === "development"
        ? "http://localhost:3000"
        // TODO: update domain later
        : "https://portfolioqingjiatsang.vercel.app/",
    ),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      // TODO: update domain later
      url: "https://portfolioqingjiatsang.vercel.app/",
      siteName: "QingjiaTsang",
      images: [
        {
          url: t("ogImage"),
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      creator: "@JohnLocke72__",
      images: [t("ogImage")],
    },
  };
}
