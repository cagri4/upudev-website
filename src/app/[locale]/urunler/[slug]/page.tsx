import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, productDetails } from "@/content/products";
import { getHomeDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { SaasProjectsGrid } from "@/components/saas-projects-grid";
import { SiteHeader } from "@/components/site-header";

const pageText: Record<
  Locale,
  {
    back: string;
    goals: string;
    does: string;
    benefits: string;
    audience: string;
    contactButton: string;
    contactBadge: string;
    email: string;
    phone: string;
    address: string;
    kvk: string;
    iban: string;
  }
> = {
  tr: {
    back: "← Ana sayfaya dön",
    goals: "Amaçlar",
    does: "Ne işe yarar?",
    benefits: "Faydalar",
    audience: "Kimler için?",
    contactButton: "İletişime Geç",
    contactBadge: "Contact",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    kvk: "KVK",
    iban: "IBAN",
  },
  en: {
    back: "← Back to home",
    goals: "Goals",
    does: "What does it do?",
    benefits: "Benefits",
    audience: "Who is it for?",
    contactButton: "Contact Us",
    contactBadge: "Contact",
    email: "Email",
    phone: "Phone",
    address: "Address",
    kvk: "KVK",
    iban: "IBAN",
  },
  nl: {
    back: "← Terug naar home",
    goals: "Doelen",
    does: "Wat doet het?",
    benefits: "Voordelen",
    audience: "Voor wie?",
    contactButton: "Contact Opnemen",
    contactBadge: "Contact",
    email: "E-mail",
    phone: "Telefoon",
    address: "Adres",
    kvk: "KVK",
    iban: "IBAN",
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) => productDetails.map((product) => ({ locale, slug: product.slug })));
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

          <Separator className="my-8" />
        </section>

        <SaasProjectsGrid ongoing={dict.ongoing} locale={locale} />

        <section className="io-wrap io-contact" id="iletisim">
          <div className="io-contact-left">
            <p className="io-eyebrow io-eyebrow-invert">{t.contactBadge}</p>
            <h2>{dict.cta.title}</h2>
            <p>{dict.cta.text}</p>
            <a className="io-btn io-btn-accent" href={`mailto:${dict.contact.email}`}>
              {dict.cta.button}
            </a>
          </div>
          <div className="io-contact-right">
            <ul>
              <li>
                <strong>{t.email}</strong>
                <span>{dict.contact.email}</span>
              </li>
              <li>
                <strong>{t.phone}</strong>
                <a href={dict.contact.phoneHref}>{dict.contact.phone}</a>
              </li>
              <li>
                <strong>{t.address}</strong>
                <span>{dict.contact.location}</span>
              </li>
              <li>
                <strong>{t.kvk}</strong>
                <span>{dict.contact.kvk}</span>
              </li>
              <li>
                <strong>{t.iban}</strong>
                <span>{dict.contact.iban}</span>
              </li>
            </ul>
            <a className="io-btn io-btn-whatsapp" href={dict.contact.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="io-footer">
        <div className="io-wrap">
          <p>{dict.footer}</p>
          <div>
            <Link href={`/${locale}`}>Home</Link>
            <Link href={`/${locale}#projeler`}>Cases</Link>
            <Link href={`/${locale}/iletisim`}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
