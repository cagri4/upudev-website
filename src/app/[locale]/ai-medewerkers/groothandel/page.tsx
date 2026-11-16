import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { canonicalUrl } from "@/lib/seo";
import { getGroothandelLanding } from "@/content/ai-team-landing";
import { AiTeamLanding } from "@/components/landing/ai-team-landing";

/**
 * Reklam hedef sayfası — "Maandag 08:00" reeli (A/B, 15 Kas 2026): toptancı/groothandel.
 * Order-medewerker · Boekhoud-medewerker — yalnız SONUÇ düzeyinde (16 Kas 2026: yöntem detayı/upsell kaldırıldı).
 * Google'a AÇIK (Çağrı 15 Kas): NL + TR index + sitemap'te. EN sürümü noindex kalır (onaylanmadı) ve hreflang'de yok.
 */
const PATH = "ai-medewerkers/groothandel";
/** Google'a açık diller (sitemap.ts'deki groothandel listesiyle aynı tutulmalı). */
const GROOTHANDEL_INDEXED_LOCALES = ["nl", "tr"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getGroothandelLanding(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: canonicalUrl(locale, PATH),
      languages: {
        nl: canonicalUrl("nl", PATH),
        tr: canonicalUrl("tr", PATH),
        "x-default": canonicalUrl("nl", PATH),
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonicalUrl(locale, PATH),
      siteName: "UPU Dev",
      type: "website",
      locale,
      images: [{ url: "/robots/copadam/og-team.jpg", width: 1200, height: 630 }],
    },
    robots: { index: (GROOTHANDEL_INDEXED_LOCALES as readonly string[]).includes(locale), follow: true },
  };
}

export default async function GroothandelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AiTeamLanding locale={locale} dict={getGroothandelLanding(locale)} variant="groothandel" pagePath={PATH} />;
}
