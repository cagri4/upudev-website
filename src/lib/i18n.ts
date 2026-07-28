import { homeTr, type HomeDictionary } from "@/content/locales/tr/home";
import { homeEn } from "@/content/locales/en/home";
import { homeNl } from "@/content/locales/nl/home";

export type Locale = "tr" | "en" | "nl";
export const locales: Locale[] = ["tr", "en", "nl"];
export const defaultLocale: Locale = "nl";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const dictionaries: Record<Locale, HomeDictionary> = {
  tr: homeTr,
  en: homeEn,
  nl: homeNl,
};

export function getHomeDictionary(locale: Locale): HomeDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
