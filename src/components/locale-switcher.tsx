"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  nl: "NL",
};

function replaceLocaleInPathname(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/");
  if (locales.includes(segments[1] as Locale)) {
    segments[1] = targetLocale;
    return segments.join("/") || "/";
  }
  return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="inline-flex items-center rounded-full border border-neutral-300 bg-white p-1">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={replaceLocaleInPathname(pathname, locale)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
            locale === currentLocale ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"
          }`}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}

