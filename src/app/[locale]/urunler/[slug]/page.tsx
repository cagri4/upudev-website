import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildAlternates } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, productDetails } from "@/content/products";
import { getHomeDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { SaasProjectsGrid } from "@/components/saas-projects-grid";
import { SiteHeader } from "@/components/site-header";
import { SiteContact } from "@/components/site-contact";
import { SiteFooter } from "@/components/site-footer";
import { ProductFAQ } from "@/components/product-faq";
import { ProductUseCases } from "@/components/product-use-cases";
import { ProductFeaturesDetailed } from "@/components/product-features-detailed";

const pageText: Record<
  Locale,
  {
    back: string;
    goals: string;
    does: string;
    benefits: string;
    audience: string;
    contactButton: string;
    featuresDetailed: string;
    faq: string;
    useCases: string;
    useCaseLabels: {
      scenario: string;
      problem: string;
      solution: string;
      outcome: string;
    };
  }
> = {
  tr: {
    back: "← Ana sayfaya dön",
    goals: "Amaçlar",
    does: "Ne işe yarar?",
    benefits: "Faydalar",
    audience: "Kimler için?",
    contactButton: "İletişime Geç",
    featuresDetailed: "Detaylı Özellikler",
    faq: "Sıkça Sorulan Sorular",
    useCases: "Kullanım Senaryoları",
    useCaseLabels: {
      scenario: "Senaryo",
      problem: "Problem",
      solution: "Çözüm",
      outcome: "Sonuç",
    },
  },
  en: {
    back: "← Back to home",
    goals: "Goals",
    does: "What does it do?",
    benefits: "Benefits",
    audience: "Who is it for?",
    contactButton: "Contact Us",
    featuresDetailed: "Detailed Features",
    faq: "Frequently Asked Questions",
    useCases: "Use Cases",
    useCaseLabels: {
      scenario: "Scenario",
      problem: "Problem",
      solution: "Solution",
      outcome: "Outcome",
    },
  },
  nl: {
    back: "← Terug naar home",
    goals: "Doelen",
    does: "Wat doet het?",
    benefits: "Voordelen",
    audience: "Voor wie?",
    contactButton: "Contact Opnemen",
    featuresDetailed: "Gedetailleerde Functies",
    faq: "Veelgestelde Vragen",
    useCases: "Gebruiksscenario's",
    useCaseLabels: {
      scenario: "Scenario",
      problem: "Probleem",
      solution: "Oplossing",
      outcome: "Resultaat",
    },
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) => productDetails.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = getProductBySlug(slug, locale);
  if (!product) return {};
  return {
    title: `${product.title} | UpuDev`,
    description: product.heroSummary,
    alternates: buildAlternates(locale, `urunler/${slug}`),
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const product = getProductBySlug(slug, locale);
  const dict = getHomeDictionary(locale);
  const t = pageText[locale];

  if (!product) notFound();

  return (
    <div className="io-page">
      <SiteHeader
        locale={locale}
        navItems={dict.nav}
        topbarAddress={dict.topbar.address}
        topbarPhone={dict.topbar.phone}
        topbarPhoneHref={dict.topbar.phoneHref}
        contactLabel={t.contactButton}
      />

      <main className="min-h-screen bg-neutral-50">
        <section className="mx-auto w-[min(1180px,calc(100%-2rem))] py-10">
          <Link href={`/${locale}`} className="inline-flex items-center text-sm font-semibold text-neutral-600 hover:text-neutral-900">
            {t.back}
          </Link>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="overflow-hidden rounded-2xl border-neutral-200">
              <div className="relative aspect-[16/10]">
                <Image src={product.image} alt={product.title} fill priority className="object-cover" />
              </div>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-4 p-6 md:p-7">
                <Badge className="rounded-md px-2.5 py-1 text-[10px] uppercase tracking-[0.12em]">{product.category}</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{product.title}</h1>
                <p className="text-base leading-relaxed text-neutral-700">{product.heroSummary}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">{t.goals}</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.goals.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">{t.does}</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.whatItDoes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">{t.benefits}</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.benefits.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">{t.audience}</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.targetUsers.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {product.featuresDetailed && product.featuresDetailed.length > 0 && (
            <ProductFeaturesDetailed items={product.featuresDetailed} title={t.featuresDetailed} />
          )}

          {product.useCases && product.useCases.length > 0 && (
            <ProductUseCases items={product.useCases} title={t.useCases} labels={t.useCaseLabels} />
          )}

          {product.faq && product.faq.length > 0 && (
            <ProductFAQ items={product.faq} title={t.faq} />
          )}

          <Separator className="my-8" />
        </section>

        <SaasProjectsGrid ongoing={dict.ongoing} locale={locale} />

        <SiteContact locale={locale} cta={dict.cta} contact={dict.contact} />
      </main>

      <SiteFooter locale={locale} copyright={dict.footer} />
    </div>
  );
}
