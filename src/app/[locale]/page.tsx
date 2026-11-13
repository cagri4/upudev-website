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
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

/**
 * Ana sayfa v2 — "het uitzendbureau voor AI-medewerkers" (13 Kas 2026).
 * Akış: SITE-REFERANS-ARTISAN.md önerilen akış (hero → tekrar eden iş → kadro →
 * zo werkt het → controle → fiyat → referenties → sector → FAQ/CTA).
 * Metin: src/content/home-ai.ts. Nav/meta/iletişim: locales/{l}/home.ts.
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="io-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader
        locale={locale}
        navItems={base.nav}
        topbarAddress={base.topbar.address}
        topbarPhone={base.topbar.phone}
        topbarPhoneHref={base.topbar.phoneHref}
        contactLabel={contactLabel}
      />

      <main>
        {/* 1. HERO — uitzendbureau tanımı + tek birincil CTA */}
        <section className="io-hero io-wrap" id="ana-sayfa">
          <div className="io-hero-text">
            <p className="io-eyebrow">{dict.hero.badge}</p>
            <h1>{dict.hero.title}</h1>
            <p className="io-lead">{dict.hero.subtitle}</p>
            <div className="io-hero-actions">
              <WhatsAppLink href={waHref} source="home-hero" className={waBtn}>
                <WhatsAppIcon /> {dict.hero.whatsappCta}
              </WhatsAppLink>
              <a className="self-center px-2 text-base font-semibold text-[#122d54] underline underline-offset-4" href="#team">
                {dict.hero.teamCta} →
              </a>
            </div>
            <p className="mt-5 text-sm font-medium text-neutral-600">{dict.hero.priceNote}</p>
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

        {/* 2. TEKRAR EDEN İŞ — sektörden bağımsız */}
        <section className="io-wrap io-section" id="werk">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.work.eyebrow}</p>
            <h2>{dict.work.title}</h2>
            <p className="io-lead-small">{dict.work.intro}</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {dict.work.items.map((item) => (
              <li key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-base font-medium text-neutral-800">{dict.work.outro}</p>
        </section>

        {/* 3. ONS TEAM — kadro vitrini (unvan, isim yok) */}
        <section className="io-wrap io-section" id="team">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.team.eyebrow}</p>
            <h2>{dict.team.title}</h2>
            <p className="io-lead-small">{dict.team.intro}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dict.team.members.map((m) => (
              <article key={m.title} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#122d54] text-sm font-bold text-white">
                    AI
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {m.role}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900">{m.title}</h3>
                <dl className="mt-3 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{dict.team.labels.does}</dt>
                    <dd className="mt-0.5 text-neutral-800">{m.does}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{dict.team.labels.connects}</dt>
                    <dd className="mt-0.5 text-neutral-700">{m.connects}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{dict.team.labels.asks}</dt>
                    <dd className="mt-0.5 text-neutral-700">{m.asks}</dd>
                  </div>
                </dl>
              </article>
            ))}
            <article className="flex flex-col justify-center rounded-2xl border border-dashed border-neutral-300 p-6">
              <p className="text-base leading-relaxed text-neutral-700">{dict.team.note}</p>
              <WhatsAppLink href={waHref} source="home-sector" className="mt-4 text-sm font-semibold text-[#122d54] underline underline-offset-4">
                {dict.hero.whatsappCta} →
              </WhatsAppLink>
            </article>
          </div>
        </section>

        {/* 4. ZO WERKT HET — funnel 4 adım */}
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
        </section>

        {/* 5. JIJ HOUDT DE CONTROLE — onay/eskalasyon + AVG */}
        <section className="io-about-section" id="controle">
          <div className="io-wrap">
            <p className="io-eyebrow">{dict.control.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{dict.control.title}</h2>
            <p className="io-lead-small mt-3">{dict.control.intro}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {dict.control.items.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                  <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FİYAT — Eerste maand €69 → vanaf €249 / €549 / €999 */}
        <section className="io-wrap io-section" id="fiyat">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.pricing.eyebrow}</p>
            <h2>{dict.pricing.title}</h2>
          </div>
          <div className="mt-6 grid items-center gap-6 rounded-3xl bg-[#122d54] p-6 text-white md:grid-cols-[1.3fr_1fr] md:p-10">
            <div>
              <p className="text-2xl font-bold tracking-tight md:text-3xl">{dict.pricing.headline}</p>
              <p className="mt-2 text-white/80">{dict.pricing.terms}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                {dict.pricing.trial.label} · {dict.pricing.trial.price}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {dict.pricing.trial.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden className="text-emerald-300">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {dict.pricing.tiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative flex flex-col rounded-2xl bg-white p-6 ${
                  tier.recommended ? "ring-2 ring-[#122d54]" : "ring-1 ring-neutral-200"
                }`}
              >
                {tier.recommended ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#122d54] px-3 py-1 text-xs font-semibold text-white">
                    {dict.pricing.recommended}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-neutral-900">{tier.name}</h3>
                <p className="mt-3 text-neutral-500">
                  <span className="text-sm">{dict.pricing.from} </span>
                  <span className="text-4xl font-bold tracking-tight text-neutral-900">{tier.price}</span>
                  <span className="text-sm"> {dict.pricing.perMonth}</span>
                </p>
                <p className="mt-3 text-sm font-medium text-neutral-800">{tier.volume}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-600">
                  {tier.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span aria-hidden className="text-[#122d54]">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-4 text-xs leading-relaxed text-neutral-500">{dict.pricing.tuned}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-500">{dict.pricing.footnote}</p>
            <WhatsAppLink href={waHref} source="home-pricing" className={`${waBtn} shrink-0`}>
              <WhatsAppIcon /> {dict.pricing.cta}
            </WhatsAppLink>
          </div>
        </section>

        {/* 7. REFERENTIES — yalnız gerçek kanıt */}
        <section className="io-about-section" id="referenties">
          <div className="io-wrap">
            <p className="io-eyebrow">{dict.references.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{dict.references.title}</h2>
            <p className="io-lead-small mt-3 max-w-2xl">{dict.references.text}</p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-300/70 pt-6">
              {dict.references.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-[#122d54]">{s.value}</dd>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">{s.label}</dd>
                </div>
              ))}
            </dl>
            {previousWork.length ? (
              <div className="mt-8">
                <p className="text-sm font-semibold text-neutral-700">{dict.references.previousTitle}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {previousWork.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/${locale}/urunler/${item.slug}`}
                        className="inline-flex rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-700 transition hover:border-neutral-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        {/* 8. KIES JE SECTOR — gıda ilk, diğerleri op aanvraag */}
        <section className="io-wrap io-section" id="sector">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.sectors.eyebrow}</p>
            <h2>{dict.sectors.title}</h2>
            <p className="io-lead-small">{dict.sectors.intro}</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <article className="flex flex-col rounded-2xl bg-[#122d54] p-7 text-white">
              <h3 className="text-2xl font-bold tracking-tight">{dict.sectors.first.name}</h3>
              <p className="mt-2 leading-relaxed text-white/80">{dict.sectors.first.text}</p>
              <WhatsAppLink
                href={homeWhatsAppHref(dict.sectors.first.whatsappText)}
                source="home-sector"
                className={`${waBtn} mt-6 self-start`}
              >
                <WhatsAppIcon /> {dict.sectors.first.cta}
              </WhatsAppLink>
            </article>
            <ul className="grid gap-3">
              {dict.sectors.others.map((s) => (
                <li key={s.name}>
                  <WhatsAppLink
                    href={homeWhatsAppHref(s.whatsappText)}
                    source="home-sector"
                    className="flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 transition hover:border-neutral-400"
                  >
                    <span className="font-semibold text-neutral-900">{s.name}</span>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {dict.sectors.onRequest} →
                    </span>
                  </WhatsAppLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. FAQ + kapanış CTA */}
        <section className="io-wrap io-section" id="faq">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.faq.eyebrow}</p>
            <h2>{dict.faq.title}</h2>
          </div>
          <div className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
            {dict.faq.items.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-neutral-900">
                  {f.q}
                  <span aria-hidden className="text-xl text-neutral-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="io-wrap io-section">
          <div className="rounded-3xl bg-[#122d54] p-8 text-center text-white md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{dict.closing.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">{dict.closing.text}</p>
            <WhatsAppLink href={waHref} source="home-closing" className={`${waBtn} mt-7`}>
              <WhatsAppIcon /> {dict.closing.cta}
            </WhatsAppLink>
            <p className="mt-4 text-sm text-white/70">{dict.hero.priceNote}</p>
          </div>
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
