import { getRequestConfig } from "next-intl/server";

import type { Locale } from "./config";

import { locales } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale || "en") as Locale;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (!locale || !locales.includes(locale)) {
    // display English version by default
    return {
      messages: (await import("./messages/en")).default,
      timeZone,
      locale,
    };
  }

  return {
    messages: (await import(`./messages/${locale}`)).default,
    timeZone,
    locale,
  };
});
