import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import {
  ROBOT_IMAGES,
  aiTeamWhatsAppHref,
  type AiTeamLandingDictionary,
} from "@/content/ai-team-landing";
import { AiTeamForm } from "@/components/landing/ai-team-form";
import { CtaPair, WhatsAppGlyph } from "@/components/landing/cta-pair";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";
import { SiteFooter } from "@/components/site-footer";

/**
 * Ortak reklam landing'i — "het uitzendbureau voor AI-medewerkers".
 * Kullananlar: /[locale]/ai-eleman (variant "ai-eleman") ve /[locale]/ai-medewerkers/groothandel (variant "groothandel").
 * Robot görselleri: ajans upu-robots/out (A · Scherm; Order = teal, Boekhoud = paars) → public/robots/.
 */

type Variant = "ai-eleman" | "groothandel";

const CREAM = "bg-[#F6EEDC]";

function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function AiTeamLanding({
  locale,
  dict,
  variant,
  pagePath,
}: {
  locale: Locale;
  dict: AiTeamLandingDictionary;
  variant: Variant;
  pagePath: string;
}) {
  const waHref = aiTeamWhatsAppHref(dict.whatsappText);
  const formHref = `#${dict.form.sectionId}`;
  const src = {
    header: variant === "groothandel" ? "groothandel-header" : "ai-eleman-header",
    hero: variant === "groothandel" ? "groothandel-hero" : "ai-eleman-hero",
    pricing: variant === "groothandel" ? "groothandel-pricing" : "ai-eleman-pricing",
    closing: variant === "groothandel" ? "groothandel-closing" : "ai-eleman-closing",
    success: variant === "groothandel" ? "groothandel-success" : "ai-eleman-success",
  } as const;
  const [orderMember, boekhoudMember] = dict.team.members;
  const story = dict.story;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href={`/${locale}`} aria-label={dict.homeLabel} className="text-xl font-bold tracking-tight text-neutral-900">
            upu<span className="text-[#122d54]">dev</span>
          </Link>
          <div className="flex items-center gap-3">
            <a href={formHref} className="hidden rounded-full bg-[#122d54] px-4 py-2 text-sm font-semibold !text-white transition hover:bg-[#0b1f3a] sm:inline-flex">
              {dict.cta.primary}
            </a>
            <WhatsAppLink
              href={waHref}
              source={src.header}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-3 py-1.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              <WhatsAppGlyph /> WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={`${CREAM} overflow-hidden`}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.15fr_1fr] md:px-6 md:py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1D7F75]">{dict.hero.badge}</p>
              <h1 className="mt-4 text-[2.3rem] font-bold leading-[1.05] tracking-tight text-[#122d54] md:text-6xl">
                {dict.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">{dict.hero.subtitle}</p>
              <CtaPair
                className="mt-8"
                primaryLabel={dict.cta.primary}
                primaryHref={formHref}
                waHref={waHref}
                waLabel={dict.cta.whatsapp}
                waSource={src.hero}
              />
              <p className="mt-5 text-sm font-medium text-neutral-600">{dict.hero.priceNote}</p>
            </div>
            <div className="relative mx-auto flex w-full max-w-md items-end justify-center">
              <div className="relative w-1/2 -rotate-2 overflow-hidden rounded-3xl border-[3px] border-[#1C1612] shadow-[6px_6px_0_#1C1612]">
                <Image src={ROBOT_IMAGES.order} alt={orderMember.name} width={564} height={786} priority className="h-auto w-full" />
              </div>
              <div className="relative -ml-4 mt-10 w-1/2 rotate-2 overflow-hidden rounded-3xl border-[3px] border-[#1C1612] shadow-[6px_6px_0_#1C1612]">
                <Image src={ROBOT_IMAGES.boekhoud} alt={boekhoudMember.name} width={564} height={786} priority className="h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* HİKÂYE — Maandag 08:00 (yalnız groothandel) */}
        {story ? (
          <section className="border-b border-neutral-100 py-14 md:py-20" id="maandag">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="inline-flex rounded-full bg-[#122d54] px-3 py-1 font-mono text-sm font-bold text-white">{story.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{story.title}</h2>
              <p className="mt-3 max-w-2xl text-lg text-neutral-600">{story.intro}</p>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {/* Order-medewerker */}
                <article className="rounded-3xl border border-neutral-200 p-5 md:p-7">
                  <div className="flex items-center gap-3">
                    <Image src={ROBOT_IMAGES.order} alt="" width={56} height={78} className="h-14 w-auto rounded-xl border-2 border-[#1C1612]" />
                    <h3 className="text-xl font-bold text-[#1D7F75]">{story.order.name}</h3>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">{story.order.beforeLabel}</p>
                  <ul className="mt-2 space-y-2">
                    {story.order.before.map((b, i) => (
                      <li
                        key={b.channel}
                        className={`rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-700 ${i % 2 ? "ml-3 rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}
                      >
                        <span className="mr-2 rounded bg-neutral-200 px-1.5 py-0.5 text-xs font-semibold text-neutral-700">{b.channel}</span>
                        {b.text}
                      </li>
                    ))}
                  </ul>
                  <p className="my-4 text-center text-2xl text-[#1D7F75]" aria-hidden>↓</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1D7F75]">{story.order.afterLabel}</p>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {story.order.after.map((a) => (
                      <li key={a} className="flex items-center gap-2 rounded-xl bg-[#E4F4F1] px-3 py-2 text-sm font-medium text-[#14544E]">
                        <Check className="h-4 w-4 shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-2xl border-2 border-[#2AA79A] bg-white px-4 py-3 text-sm font-semibold text-[#14544E]">
                    💡 {story.order.upsell}
                  </p>
                </article>

                {/* Boekhoud-medewerker */}
                <article className="rounded-3xl border border-neutral-200 p-5 md:p-7">
                  <div className="flex items-center gap-3">
                    <Image src={ROBOT_IMAGES.boekhoud} alt="" width={56} height={78} className="h-14 w-auto rounded-xl border-2 border-[#1C1612]" />
                    <h3 className="text-xl font-bold text-[#634287]">{story.boekhoud.name}</h3>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">{story.boekhoud.beforeLabel}</p>
                  <div className="mt-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 font-mono text-sm text-neutral-700">
                    {story.boekhoud.invoice}
                  </div>
                  <p className="my-4 text-center text-2xl text-[#634287]" aria-hidden>↓</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#634287]">{story.boekhoud.afterLabel}</p>
                  <div className="mt-2 rounded-2xl border-2 border-[#8A62B8] bg-[#F3EDFA] px-4 py-3">
                    <p className="text-base font-semibold text-[#3F2A57]">{story.boekhoud.finding}</p>
                    <p className="mt-2 text-sm text-[#3F2A57]">{story.boekhoud.question}</p>
                  </div>
                </article>
              </div>
              <p className="mt-4 text-xs text-neutral-500">{story.illustration}</p>
            </div>
          </section>
        ) : null}

        {/* ONS AI-TEAM */}
        <section className="py-14 md:py-20" id="team">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1D7F75]">{dict.team.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{dict.team.title}</h2>
            <p className="mt-3 max-w-2xl text-lg text-neutral-600">{dict.team.intro}</p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {dict.team.members.map((m) => (
                <article key={m.name} className="grid grid-cols-[110px_1fr] gap-5 rounded-3xl border border-neutral-200 p-5 md:grid-cols-[150px_1fr] md:p-6">
                  <div className="overflow-hidden rounded-2xl border-[3px] border-[#1C1612]">
                    <Image src={ROBOT_IMAGES[m.robot]} alt={m.name} width={564} height={786} className="h-auto w-full" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{m.role}</p>
                    <h3 className={`mt-1 text-xl font-bold ${m.robot === "order" ? "text-[#1D7F75]" : "text-[#634287]"}`}>{m.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">{m.text}</p>
                    <p className="mt-3 text-sm text-neutral-600">
                      <span className="font-semibold text-neutral-800">{dict.team.asksLabel}</span> {m.asks}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* …en elk ander terugkerend werk — soluk '?' robotlar */}
            <div className="mt-6 grid items-center gap-8 rounded-3xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
              <div className="flex justify-center gap-3" aria-hidden>
                {dict.team.more.examples.map((ex, i) => (
                  <figure key={ex} className={`w-1/3 max-w-[130px] opacity-80 ${i === 1 ? "-translate-y-3" : ""}`}>
                    <div className="overflow-hidden rounded-2xl border-2 border-neutral-300">
                      <Image src={ROBOT_IMAGES.vraag} alt="" width={564} height={786} className="h-auto w-full" />
                    </div>
                    <figcaption className="mt-2 text-center text-sm font-semibold text-neutral-500">{ex}</figcaption>
                  </figure>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#122d54] md:text-3xl">{dict.team.more.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-neutral-700">{dict.team.more.text}</p>
                <CtaPair
                  className="mt-6"
                  primaryLabel={dict.cta.primary}
                  primaryHref={formHref}
                  waHref={waHref}
                  waLabel={dict.cta.whatsapp}
                  waSource={src.hero}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ZO WERKT HET */}
        <section className={`${CREAM} py-14 md:py-20`}>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1D7F75]">{dict.how.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{dict.how.title}</h2>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {dict.how.steps.map((s, i) => (
                <li key={s.title} className="rounded-3xl bg-white p-6 shadow-sm">
                  <span className="font-mono text-sm font-bold text-[#1D7F75]">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTROLE */}
        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_1.2fr] md:px-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1D7F75]">{dict.control.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{dict.control.title}</h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {dict.control.items.map((it) => (
                <li key={it} className="flex gap-3 rounded-2xl border border-neutral-200 p-4 text-base text-neutral-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E4F4F1] text-[#1D7F75]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FİYAT — model B */}
        <section className="pb-14 md:pb-20" id="prijs">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="rounded-3xl bg-[#122d54] p-7 text-white md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">{dict.pricing.eyebrow}</p>
              <p className="mt-3 text-2xl font-bold tracking-tight md:text-4xl">{dict.pricing.headline}</p>
              <p className="mt-3 text-white/80 md:text-lg">{dict.pricing.terms}</p>
              <p className="mt-1 text-sm text-white/60">{dict.pricing.note}</p>
              <CtaPair
                className="mt-7"
                tone="dark"
                primaryLabel={dict.cta.primary}
                primaryHref={formHref}
                waHref={waHref}
                waLabel={dict.cta.whatsapp}
                waSource={src.pricing}
              />
            </div>
          </div>
        </section>

        {/* FORM — "Plan een gesprek" */}
        <section id={dict.form.sectionId} className={`${CREAM} scroll-mt-4 py-14 md:py-20`}>
          <div className="mx-auto max-w-2xl px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#122d54] md:text-4xl">{dict.form.title}</h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-neutral-700">{dict.form.subtitle}</p>
            </div>
            <AiTeamForm
              locale={locale}
              labels={dict.form}
              whatsappText={dict.whatsappText}
              subject={dict.subject}
              formLocation={dict.formLocation}
              pagePath={pagePath}
              waSource={src.success}
            />
            <p className="mt-5 text-center text-sm text-neutral-600">
              <WhatsAppLink href={waHref} source={src.closing} className="inline-flex items-center gap-2 font-semibold text-[#122d54] underline underline-offset-4">
                <WhatsAppGlyph className="h-4 w-4 text-[#1faa52]" /> {dict.cta.whatsapp}
              </WhatsAppLink>
            </p>
          </div>
        </section>

        {/* KAPANIŞ */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#122d54] md:text-4xl">{dict.closing.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-neutral-600">{dict.closing.text}</p>
            <CtaPair
              className="mt-8"
              align="center"
              primaryLabel={dict.cta.primary}
              primaryHref={formHref}
              waHref={waHref}
              waLabel={dict.cta.whatsapp}
              waSource={src.closing}
            />
            <p className="mt-5 text-sm text-neutral-500">{dict.hero.priceNote}</p>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} copyright={dict.copyright} />
    </div>
  );
}
