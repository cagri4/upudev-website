import { homeTr, type HomeDictionary } from "@/content/locales/tr/home";

export type Locale = "tr";

const dictionaries: Record<Locale, HomeDictionary> = {
  tr: homeTr,
};

export function getHomeDictionary(locale: Locale): HomeDictionary {
  return dictionaries[locale] ?? dictionaries.tr;
}
