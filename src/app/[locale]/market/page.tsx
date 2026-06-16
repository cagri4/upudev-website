import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getMarketLanding } from "@/content/saas-landing/market";
import { SaasLanding } from "@/components/saas-landing/saas-landing";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const config = getMarketLanding(locale);
  return {
    title: config.meta.title,
    description: config.meta.description,
    alternates: {
      canonical: `https://upudev.nl/${locale}/market`,
      languages: {
        tr: "https://upudev.nl/tr/market",
        en: "https://upudev.nl/en/market",
        nl: "https://upudev.nl/nl/market",
      },
    },
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      url: `https://upudev.nl/${locale}/market`,
      type: "website",
      locale,
    },
    robots: { index: true, follow: true },
  };
}

export default async function MarketPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const config = getMarketLanding(locale);
  const copyright =
    locale === "en"
      ? "© 2026 UpuDev. All rights reserved."
      : locale === "nl"
        ? "© 2026 UpuDev. Alle rechten voorbehouden."
        : "© 2026 UpuDev. Tüm hakları saklıdır.";

  return (
    <>
      <SaasLanding config={config} locale={locale} />
      <SiteFooter locale={locale} copyright={copyright} />
    </>
  );
}
