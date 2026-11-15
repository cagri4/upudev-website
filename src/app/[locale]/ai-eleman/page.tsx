import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { buildAlternates, canonicalUrl } from "@/lib/seo";
import { getAiElemanLanding } from "@/content/ai-team-landing";
import { AiTeamLanding } from "@/components/landing/ai-team-landing";

/**
 * Reklam landing'i — genel AI-medewerker (eski reklamlar bu URL'ye gidiyor; URL değişmez).
 * 15 Kas 2026: yeni konsept ("het uitzendbureau voor AI-medewerkers") + model B fiyat; "gratis" yok.
 * İnce, reklam-eşleşmeli içerik → noindex,follow + sitemap'te YOK.
 */
const PATH = "ai-eleman";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getAiElemanLanding(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: buildAlternates(locale, PATH),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonicalUrl(locale, PATH),
      siteName: "UPU Dev",
      type: "website",
      locale,
      images: [{ url: "/robots/order-medewerker.webp", width: 564, height: 786 }],
    },
    robots: { index: false, follow: true },
  };
}

export default async function AiElemanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AiTeamLanding locale={locale} dict={getAiElemanLanding(locale)} variant="ai-eleman" pagePath={PATH} />;
}
