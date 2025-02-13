import type { NextRequest } from "next/server";

import createMiddleware from "next-intl/middleware";

import { locales } from "@/i18n/config";

const I18nMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
