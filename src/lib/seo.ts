import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

/** Single canonical host — no www. */
export const SITE_URL = "https://upudev.nl";

/** Build a locale-prefixed path, e.g. localePath("nl", "iletisim") -> "/nl/iletisim". */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

/** Absolute canonical URL for a locale + path. */
export function canonicalUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}

/**
 * Self-referencing canonical + hreflang alternates for a page.
 * `path` is the shared route without the locale prefix ("" for home,
 * "urunler/bayi-yonetimi" for a product, etc.).
 */
export function buildAlternates(locale: Locale, path = ""): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = canonicalUrl(l, path);
  }
  // x-default points to the default locale (nl) variant.
  languages["x-default"] = canonicalUrl(defaultLocale, path);

  return {
    canonical: canonicalUrl(locale, path),
    languages,
  };
}
