import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { buildAlternates, canonicalUrl } from "@/lib/seo";
import { getGroothandelLanding } from "@/content/ai-team-landing";
import { AiTeamLanding } from "@/components/landing/ai-team-landing";

/**
 * Reklam hedef sayfası — "Maandag 08:00" reeli (A/B, 15 Kas 2026): toptancı/groothandel.
 * Order-medewerker (dağınık sipariş → temiz satır + upsell) · Boekhoud-medewerker (fatura kontrolü / prijsverschil).
 * Reklam-eşleşmeli → şimdilik noindex,follow + sitemap'te YOK (SEO'ya açmak Çağrı kararı).
 */
const PATH = "ai-medewerkers/groothandel";

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

export default async function GroothandelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AiTeamLanding locale={locale} dict={getGroothandelLanding(locale)} variant="groothandel" pagePath={PATH} />;
}
