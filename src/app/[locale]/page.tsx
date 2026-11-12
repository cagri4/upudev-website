import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHomeDictionary, isLocale, locales } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";
import { getHomeAiDictionary, homeWhatsAppHref } from "@/content/home-ai";
import { SiteHeader } from "@/components/site-header";
import { SiteContact } from "@/components/site-contact";
import { SiteFooter } from "@/components/site-footer";
import { PartnersGrid } from "@/components/partners-grid";
import { AboutSection } from "@/components/about-section";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

/**
 * Ana sayfa — AI Eleman / "eleman tut" konumlaması (12 Kas 2026).
 * Metin: src/content/home-ai.ts. Nav/meta/iletişim bilgisi: locales/{l}/home.ts
 * (diğer sayfalar da kullanıyor). Eleman listesi YOK, sayaç YOK (Çağrı kararı).
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getHomeDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: buildAlternates(locale, ""),
  };
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
    </svg>
  );
}

const waBtn =
  "io-btn gap-2 !bg-[#25D366] !text-white hover:!bg-[#20bd5a] !px-6 !py-3.5 !text-base";

export default async function HomeLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const base = getHomeDictionary(locale);
  const dict = getHomeAiDictionary(locale);
  const waHref = homeWhatsAppHref(dict.whatsappText);
  const contactLabel = base.nav.find((x) => x.href === "/iletisim")?.label ?? "Contact";
  const previousWork = base.ongoing.items.filter((item) => item.slug);

  return (
    <div className="io-page">
      <SiteHeader
        locale={locale}
        navItems={base.nav}
        topbarAddress={base.topbar.address}
        topbarPhone={base.topbar.phone}
        topbarPhoneHref={base.topbar.phoneHref}
        contactLabel={contactLabel}
      />

      <main>
        {/* HERO */}
        <section className="io-hero io-wrap" id="ana-sayfa">
          <div className="io-hero-text">
            <p className="io-eyebrow">{dict.hero.badge}</p>
            <h1>{dict.hero.title}</h1>
            <p className="io-lead">{dict.hero.subtitle}</p>
            <p className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-200 md:text-base">
              {dict.hero.pricing}
            </p>
            <div className="io-hero-actions">
              <WhatsAppLink href={waHref} source="home-hero" className={waBtn}>
                <WhatsAppIcon /> {dict.hero.whatsappCta}
              </WhatsAppLink>
              <a className="io-btn io-btn-outline !px-6 !py-3.5 !text-base" href="#nasil-calisir">
                {dict.hero.howCta}
              </a>
            </div>
            <p className="mt-6 max-w-xl border-l-2 border-[#122d54] pl-3 text-sm leading-relaxed text-neutral-600">
              {dict.hero.selfLine}
            </p>
          </div>
          <div className="io-hero-media">
            <Image
              src="/hero-illustration-square.jpg"
              alt={dict.hero.imageAlt}
              fill
              priority
              className="io-image"
              style={{ objectFit: "contain" }}
            />
          </div>
        </section>

        {/* KONSEPT — eleman listesi yok, fikir */}
        <section className="io-wrap io-section" id="idee">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.concept.eyebrow}</p>
            <h2>{dict.concept.title}</h2>
            <p className="io-lead-small">{dict.concept.intro}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {dict.concept.items.map((item) => (
              <article key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ZIET → DENKT → DOET */}
        <section className="io-wrap io-section" id="nasil-calisir">
          <p className="io-eyebrow">{dict.how.eyebrow}</p>
          <h2 className="io-process-title">{dict.how.title}</h2>
          <p className="io-lead-small">{dict.how.intro}</p>
          <div className="io-process">
            {dict.how.steps.map((step) => (
              <article key={step.id}>
                <p>{step.id}</p>
                <h3>{step.title}</h3>
                <span>{step.text}</span>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-500">{dict.how.footnote}</p>
        </section>

        {/* GENEL İŞ ALANLARI */}
        <section className="io-wrap io-section" id="hizmetler">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.areas.eyebrow}</p>
            <h2>{dict.areas.title}</h2>
            <p className="io-lead-small">{dict.areas.intro}</p>
          </div>
          <div className="io-services-list">
            {dict.areas.items.map((item, index) => (
              <article key={item.title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span>{item.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <AboutSection
          badge={dict.why.badge}
          title={dict.why.title}
          description={dict.why.description}
          bullets={dict.why.bullets}
          stats={dict.why.stats}
        />

        {/* FİYAT — tek dil: paketler vanaf €69 */}
        <section className="io-wrap io-section" id="fiyat">
          <div className="grid items-center gap-8 rounded-3xl bg-[#122d54] p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <p className="io-eyebrow io-eyebrow-invert">{dict.pricing.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{dict.pricing.title}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/80">{dict.pricing.text}</p>
            </div>
            <div>
              <ul className="space-y-3">
                {dict.pricing.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-base font-semibold">
                    <span aria-hidden className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-sm text-[#0b1f3a]">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <WhatsAppLink href={waHref} source="home-pricing" className={`${waBtn} mt-6 w-full`}>
                <WhatsAppIcon /> {dict.pricing.cta}
              </WhatsAppLink>
            </div>
          </div>
        </section>

        {/* BAŞLANGIÇ — 3 adım */}
        <section className="io-wrap io-section" id="surec">
          <p className="io-eyebrow">{dict.start.eyebrow}</p>
          <h2 className="io-process-title">{dict.start.title}</h2>
          <div className="io-process">
            {dict.start.steps.map((step) => (
              <article key={step.id}>
                <p>{step.id}</p>
                <h3>{step.title}</h3>
                <span>{step.text}</span>
              </article>
            ))}
          </div>
        </section>

        <PartnersGrid title={dict.tech.title} badgeText={dict.tech.badge} partners={base.partners.items} />

        {/* ESKİ İŞLER — merkezi değil; ürün sayfalarına iç link korunur (SEO) */}
        <section className="io-wrap io-section" id="projeler">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900">{dict.previous.title}</h2>
          <p className="mt-1 text-sm text-neutral-500">{dict.previous.intro}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {previousWork.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/urunler/${item.slug}`}
                  className="inline-flex rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 transition hover:border-neutral-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <SiteContact locale={locale} cta={dict.cta} contact={base.contact} />
      </main>

      <SiteFooter locale={locale} copyright={base.footer} />
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
