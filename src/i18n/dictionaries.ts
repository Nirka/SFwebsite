import "server-only";

const dictionaries = {
  en: () => import("../messages/en.json").then((m) => m.default),
  he: () => import("../messages/he.json").then((m) => m.default),
  hu: () => import("../messages/hu.json").then((m) => m.default),
  hi: () => import("../messages/hi.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
