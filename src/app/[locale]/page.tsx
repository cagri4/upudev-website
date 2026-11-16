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
import { CtaPair } from "@/components/landing/cta-pair";
import { COPADAM } from "@/content/ai-team-landing";
import { getWorkChain } from "@/content/work-chain";
import { WorkChain } from "@/components/landing/work-chain";

/**
 * Ons team kartları: reklamdaki çöp adamlar, home-ai.ts'deki üye sırasıyla (her dilde aynı sıra):
 * Order · Boekhoud · Planner · Teller · Etiketbeheerder. Listede robotu olmayan yeni rol → soluk '?' robot.
 */
const TEAM_ROBOTS = [COPADAM.order, COPADAM.boekhoud, COPADAM.planner, COPADAM.teller, COPADAM.etiketbeheerder];
function teamRobot(index: number) {
  return TEAM_ROBOTS[index] ?? COPADAM.vraag;
}

/**
 * Ana sayfa v2 (13 Kas 2026) — 15 Kas: "AI-implementatiepartner" dili + "Wij zetten klaar, jij keurt goed" iş zinciri.
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
        {/* 1. HERO — implementatiepartner tanımı + slogan + tek birincil CTA */}
        <section className="io-hero io-wrap" id="ana-sayfa">
          <div className="io-hero-text">
            <p className="io-eyebrow">{dict.hero.badge}</p>
            <h1>{dict.hero.title}</h1>
            <p className="io-lead">{dict.hero.subtitle}</p>
            <div className="io-hero-actions">
              <CtaPair
                primaryLabel={dict.hero.primaryCta}
                waHref={waHref}
                waLabel={dict.hero.whatsappCta}
                waSource="home-hero"
              />
            </div>
            <p className="mt-5 text-sm font-medium text-neutral-600">{dict.hero.priceNote}</p>
          </div>
          <div className="io-hero-media">
            {/* Çöp adam hero (ajans upu-robots, 15 Kas 2026) — eski 3D hero-illustration-square.jpg yerine. */}
            <Image
              src="/robots/copadam/hero-desk.png"
              alt={dict.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 900px) 600px, 92vw"
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

        {/* 2a. ZO WERKEN WE SAMEN — yöntem değil yaklaşım (16 Kas 2026, Çağrı): dinleriz → bir iş gününe bakarız → senin sürecine göre kurarız → karar sende */}
        <section className="io-wrap io-section" id="samen">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 md:p-10">
            <p className="io-eyebrow">{dict.approach.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#122d54] md:text-4xl">{dict.approach.title}</h2>
            <p className="mt-2 max-w-2xl text-lg text-neutral-600">{dict.approach.intro}</p>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {dict.approach.steps.map((step) => (
                <li key={step.id} className="border-l-2 border-[#122d54] pl-4">
                  <span className="font-mono text-sm font-bold text-[#1D7F75]">{step.id}</span>
                  <p className="mt-1 text-lg font-bold text-neutral-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-neutral-500">{dict.approach.footnote}</p>
          </div>
        </section>

        {/* 2b. HIJ ZET KLAAR, JIJ KEURT GOED — uçtan uca zincir + güvence + mevcut sistemler */}
        <div className="io-wrap io-section">
          <WorkChain dict={getWorkChain(locale)} id="zo-werkt-het" sloganInHero />
        </div>

        {/* 3. ZO KAN JOUW TEAM ERUITZIEN — yalnız SONUÇ örnekleri; rol kataloğu / 'Wat hij doet · Vraagt jou als' YOK (16 Kas 2026, Çağrı) */}
        <section className="io-wrap io-section" id="team">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.team.eyebrow}</p>
            <h2>{dict.team.title}</h2>
            <p className="io-lead-small">{dict.team.intro}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dict.team.members.map((m, i) => (
              <article key={m.context} className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex justify-end">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {m.context}
                  </span>
                </div>
                {(() => {
                  const robot = teamRobot(i);
                  return (
                    <div className="mt-2 flex justify-center">
                      <Image src={robot.src} alt="" width={robot.w} height={robot.h} sizes="160px" className="h-[260px] w-auto" />
                    </div>
                  );
                })()}
                <p className="mt-4 text-lg font-bold leading-snug tracking-tight text-neutral-900">{m.outcome}</p>
              </article>
            ))}
            <article className="flex flex-col rounded-2xl border border-dashed border-neutral-300 p-6">
              <div className="flex justify-center">
                <Image src={COPADAM.vraag.src} alt="" width={COPADAM.vraag.w} height={COPADAM.vraag.h} sizes="160px" className="h-[260px] w-auto" />
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-[#122d54]">{dict.team.noteTitle}</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700">{dict.team.note}</p>
              <CtaPair
                className="mt-4"
                primaryLabel={dict.hero.primaryCta}
                waHref={waHref}
                waLabel={dict.hero.whatsappCta}
                waSource="home-team"
              />
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

        {/* 6. FİYAT — model B: tek 'vanaf' vitrini; kesin fiyat gesprek'te. Paketler yalnız açılır, fiyatsız. */}
        <section className="io-wrap io-section" id="fiyat">
          <div className="io-section-head">
            <p className="io-eyebrow">{dict.pricing.eyebrow}</p>
            <h2>{dict.pricing.title}</h2>
          </div>
          <div className="mt-6 grid items-center gap-6 rounded-3xl bg-[#122d54] p-6 text-white md:grid-cols-[1.3fr_1fr] md:p-10">
            <div>
              <p className="text-2xl font-bold tracking-tight md:text-3xl">{dict.pricing.headline}</p>
              <p className="mt-2 text-white/80">{dict.pricing.terms}</p>
              <CtaPair
                className="mt-6"
                tone="dark"
                primaryLabel={dict.hero.primaryCta}
                waHref={waHref}
                waLabel={dict.hero.whatsappCta}
                waSource="home-pricing"
              />
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
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-neutral-600">{dict.pricing.footnote}</p>
          <details className="group mt-4 rounded-2xl border border-neutral-200 bg-white px-5 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-800">
              {dict.pricing.detailsToggle}
              <span aria-hidden className="text-lg text-neutral-400 transition group-open:rotate-45">+</span>
            </summary>
            <div className="mt-3 grid gap-4 pb-2 md:grid-cols-3">
              {dict.pricing.tiers.map((tier) => (
                <div key={tier.name} className="text-sm">
                  <p className="font-semibold text-neutral-900">{tier.name}</p>
                  <p className="mt-1 text-neutral-700">{tier.volume}</p>
                  <ul className="mt-1.5 space-y-1 text-neutral-500">
                    {tier.points.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
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
            <CtaPair
              className="mt-7"
              tone="dark"
              align="center"
              primaryLabel={dict.hero.primaryCta}
              waHref={waHref}
              waLabel={dict.hero.whatsappCta}
              waSource="home-closing"
            />
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
