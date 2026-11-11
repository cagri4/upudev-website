import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { buildAlternates, canonicalUrl } from "@/lib/seo";
import { aiElemanWhatsAppHref, getAiElemanDictionary } from "@/content/ai-eleman";
import { AiElemanForm } from "@/components/landing/ai-eleman-form";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";
import { SiteFooter } from "@/components/site-footer";

/**
 * Reklam landing'i (AI-medewerker reel). İnce, reklam-eşleşmeli içerik →
 * noindex,follow + sitemap'te YOK; canonical/hreflang yine site konvansiyonuyla.
 */
const PATH = "ai-eleman";

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
  const dict = getAiElemanDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: buildAlternates(locale, PATH),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonicalUrl(locale, PATH),
      siteName: "UpuDev",
      type: "website",
      locale,
    },
    robots: { index: false, follow: true },
  };
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
    </svg>
  );
}

const waButtonClass =
  "inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-lg font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:w-auto";

export default async function AiElemanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getAiElemanDictionary(locale);
  const waHref = aiElemanWhatsAppHref(dict.whatsappText);
  const formHref = `#${dict.form.sectionId}`;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight text-neutral-900">
            upu<span className="text-[#122d54]">dev</span>
          </Link>
          <WhatsAppLink
            href={waHref}
            source="ai-eleman-header"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-3 py-1.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </WhatsAppLink>
        </div>
      </header>

      <main>
        {/* HERO — reklam vaadi birebir */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#122d54] to-[#1e3a6f] py-14 text-white md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.18) 0, transparent 45%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-4 md:px-6">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-bold text-[#0b1f3a] shadow-sm">
              <span aria-hidden>🎁</span> {dict.hero.badge}
            </p>
            <h1 className="text-[2.1rem] font-bold leading-[1.1] tracking-tight md:text-6xl">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              {dict.hero.subtitle}
            </p>
            {dict.hero.pricing ? (
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-emerald-300 md:text-lg">
                {dict.hero.pricing}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppLink href={waHref} source="ai-eleman-hero" className={waButtonClass}>
                <WhatsAppIcon className="h-6 w-6" /> {dict.hero.whatsappCta}
              </WhatsAppLink>
              <a
                href={formHref}
                className="text-center text-base font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition hover:text-white sm:text-left"
              >
                {dict.hero.formCta}
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">{dict.hero.trust}</p>
          </div>
        </section>

        {/* WAT DOET JE AI-MEDEWERKER */}
        <section className="border-b border-neutral-100 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              {dict.features.title}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
              {dict.features.items.map((item) => (
                <li key={item.title} className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
                  <span className="text-3xl leading-none" aria-hidden>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* YEDEK FORM */}
        <section
          id={dict.form.sectionId}
          className="scroll-mt-4 border-b border-neutral-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60 py-14 md:py-20"
        >
          <div className="mx-auto max-w-2xl px-4 md:px-6">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">{dict.form.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">{dict.form.title}</h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-neutral-600">{dict.form.subtitle}</p>
            </div>
            <AiElemanForm locale={locale} labels={dict.form} whatsappText={dict.whatsappText} />
          </div>
        </section>

        {/* KAPANIŞ */}
        <section className="bg-[#122d54] py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <p className="mb-4 inline-flex rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-bold text-[#0b1f3a]">
              {dict.hero.badge}
            </p>
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl">{dict.closing.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">{dict.closing.text}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <WhatsAppLink href={waHref} source="ai-eleman-closing" className={waButtonClass}>
                <WhatsAppIcon className="h-6 w-6" /> {dict.closing.whatsappCta}
              </WhatsAppLink>
              <a
                href={formHref}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                {dict.closing.formCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} copyright={dict.copyright} />
    </div>
  );
}
