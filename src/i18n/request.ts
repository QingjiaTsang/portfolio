import { getRequestConfig } from 'next-intl/server';
import { Locale, locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale as Locale | undefined;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  if (!locale || !locales.includes(locale)) {
    // display English version by default
    return {
      messages: (await import('./messages/en')).default,
      timeZone
    };
  }

  return {
    messages: (await import(`./messages/${locale}`)).default,
    timeZone
  };
});