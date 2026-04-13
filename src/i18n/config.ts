export const locales = ["en", "he", "hu", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const rtlLocales: readonly Locale[] = ["he"];
export const isRtl = (locale: Locale) => rtlLocales.includes(locale);
