import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { dijitalEkibinizTr, type DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";
import { dijitalEkibinizEn } from "@/content/locales/en/dijital-ekibiniz";
import { dijitalEkibinizNl } from "@/content/locales/nl/dijital-ekibiniz";
import { DijitalEkibinizCTAs } from "@/components/landing/dijital-ekibiniz-modals";
import { DijitalEkibinizLeadForm } from "@/components/landing/dijital-ekibiniz-lead-form";
import { SiteFooter } from "@/components/site-footer";

const WHATSAPP_NUMBER = "31644967207";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

const TRUST_LOGOS = [
  { name: "Next.js", src: "/logos/partners/nextjs.svg" },
  { name: "Vercel", src: "/logos/partners/vercel.svg" },
  { name: "Supabase", src: "/logos/partners/supabase.svg" },
  { name: "Google", src: "/logos/partners/google.svg" },
  { name: "Meta", src: "/logos/partners/meta.svg" },
  { name: "OpenAI", src: "/logos/partners/openai.svg" },
  { name: "Mollie", src: "/logos/partners/mollie.png" },
] as const;

const dictionaries: Record<Locale, DijitalEkibinizDictionary> = {
  tr: dijitalEkibinizTr,
  en: dijitalEkibinizEn,
  nl: dijitalEkibinizNl,
};

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
  const dict = dictionaries[locale];
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://upudev.nl/${locale}/dijital-ekibiniz`,
      languages: {
        tr: "https://upudev.nl/tr/dijital-ekibiniz",
        en: "https://upudev.nl/en/dijital-ekibiniz",
        nl: "https://upudev.nl/nl/dijital-ekibiniz",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://upudev.nl/${locale}/dijital-ekibiniz`,
      type: "website",
      locale,
    },
    robots: { index: true, follow: true },
  };
}

export default async function DijitalEkibinizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = dictionaries[locale];
  const copyright =
    locale === "en"
      ? "© 2026 UpuDev. All rights reserved."
      : locale === "nl"
        ? "© 2026 UpuDev. Alle rechten voorbehouden."
        : "© 2026 UpuDev. Tüm hakları saklıdır.";

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight text-neutral-900">
            upu<span className="text-[#122d54]">dev</span>
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-50 md:text-sm"
          >
            <span aria-hidden>💬</span> WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#122d54] to-[#1e3a6f] py-16 text-white md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.18) 0, transparent 45%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <p className="mb-3 inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
              {dict.hero.badge}
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {dict.hero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {dict.hero.subtitle}
            </p>
            <DijitalEkibinizCTAs
              hero={dict.hero}
              whatsappHref={WHATSAPP_HREF}
              leadFormHref={`#${dict.leadForm.sectionId}`}
            />
            <p className="mt-6 text-xs text-white/70 md:text-sm">
              <span aria-hidden>🇳🇱</span> {dict.hero.trust}
            </p>
          </div>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-20 border-b border-neutral-100 bg-white py-14 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                {dict.capabilities.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                {dict.capabilities.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
              {dict.capabilities.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm md:p-6"
                >
                  <div className="mb-3 text-3xl" aria-hidden>
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 md:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-emerald-50 px-6 py-8 text-center md:flex-row md:justify-between md:gap-6 md:px-8 md:text-left">
              <p className="text-base font-semibold text-emerald-950 md:text-lg">
                {dict.ctaBand.midTitle}
              </p>
              <a
                href={`#${dict.leadForm.sectionId}`}
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                {dict.ctaBand.midButton}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {dict.process.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {dict.process.steps.map((step) => (
                <div key={step.id} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#122d54] text-sm font-bold text-white">
                    {step.id}
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 md:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-100 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              {dict.faq.title}
            </h2>
            <div className="space-y-3">
              {dict.faq.items.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-neutral-200 bg-white p-5 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-neutral-900 marker:hidden [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-lg leading-none transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-100 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
              {dict.trust.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{dict.trust.subtitle}</p>
            <div className="mt-8 grid grid-cols-3 items-center gap-6 sm:grid-cols-4 md:grid-cols-7 md:gap-8">
              {TRUST_LOGOS.map((logo) => (
                <div key={logo.name} className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={96}
                    height={32}
                    className="h-7 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id={dict.leadForm.sectionId}
          className="scroll-mt-16 border-t border-neutral-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60 py-16 md:py-24"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="mb-8 text-center md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                {dict.leadForm.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                {dict.ctaBand.endTitle} — {dict.leadForm.title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
                {dict.leadForm.subtitle}
              </p>
            </div>
            <DijitalEkibinizLeadForm locale={locale} labels={dict.leadForm} />
          </div>
        </section>

        <section className="bg-[#122d54] py-10 text-center text-white">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <p className="text-sm text-white/80">{dict.footerNote}</p>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} copyright={copyright} />
    </div>
  );
}
