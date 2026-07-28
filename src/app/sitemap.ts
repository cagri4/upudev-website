import type { MetadataRoute } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const BASE_URL = "https://upudev.nl";

const PRODUCT_SLUGS = [
  "bayi-yonetimi",
  "muhasebe-asistani",
  "emlak-danismani-yardimcisi",
  "restoran-asistani",
  "agent-ai-calismalari",
  "e-ticaret-web-uygulamalari",
] as const;

type PagePath = string;
type PageMeta = {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const PAGE_PATHS: Record<PagePath, PageMeta> = {
  "": { priority: 1.0, changeFrequency: "weekly" },
  "dijital-ekibiniz": { priority: 0.9, changeFrequency: "weekly" },
  iletisim: { priority: 0.6, changeFrequency: "monthly" },
  privacy: { priority: 0.3, changeFrequency: "yearly" },
  terms: { priority: 0.3, changeFrequency: "yearly" },
  "data-deletion": { priority: 0.3, changeFrequency: "yearly" },
};

function localeUrl(locale: Locale, path: string) {
  return path ? `${BASE_URL}/${locale}/${path}` : `${BASE_URL}/${locale}`;
}

function languagesFor(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [l, localeUrl(l, path)])),
    "x-default": localeUrl(defaultLocale, path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const [path, meta] of Object.entries(PAGE_PATHS)) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, path),
        lastModified: now,
        changeFrequency: meta.changeFrequency,
        priority: meta.priority,
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  for (const slug of PRODUCT_SLUGS) {
    const productPath = `urunler/${slug}`;
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, productPath),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: languagesFor(productPath) },
      });
    }
  }

  return entries;
}
