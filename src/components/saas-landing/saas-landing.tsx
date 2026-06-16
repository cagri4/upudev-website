"use client";

import { MotionConfig, motion } from "motion/react";
import type { CSSProperties } from "react";
import type { SaasLandingConfig } from "@/content/saas-landing/types";
import type { Locale } from "@/lib/i18n";
import { Counter, PhoneChat, QrCard, Section, Stagger, StaggerItem } from "./primitives";
import { HowItWorks } from "./how-it-works";
import { SaasNav } from "./nav";
import { CtaButton, CtaPair } from "./cta";
import { MobileCtaBar } from "./mobile-cta-bar";

/**
 * SaaS Landing ŞABLONU — config-driven orchestrator.
 *
 * Tüm bölümleri (S0–S9) `config`'ten kurar. Yeni SaaS = yeni config + asset.
 * Accent rengi köke CSS değişkeni olarak basılır → tek noktadan tema swap.
 * Kök <MotionConfig reducedMotion="user"> tüm animasyonlarda
 * prefers-reduced-motion'a saygı gösterir.
 */
export function SaasLanding({
  config,
  locale,
}: {
  config: SaasLandingConfig;
  locale: Locale;
}) {
  const accentVars = {
    "--accent": config.accent.base,
    "--accent-strong": config.accent.strong,
    "--accent-soft": config.accent.soft,
    "--accent-ring": config.accent.ring,
  } as CSSProperties;

  return (
    <MotionConfig reducedMotion="user">
      <div style={accentVars} className="min-h-screen bg-white">
        <SaasNav config={config} locale={locale} />

        {/* ===== S1 — HERO (dark) ===== */}
        <section className="relative overflow-hidden bg-[#06231c] py-16 text-white md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 20%, rgba(5,150,105,0.35) 0, transparent 45%), radial-gradient(circle at 85% 75%, rgba(13,148,136,0.28) 0, transparent 50%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                {config.hero.badge}
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                {config.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                {config.hero.sub}
              </p>
              <CtaPair
                primary={config.ctaPrimary}
                secondary={config.ctaSecondary}
                locale={locale}
                source="hero"
                tone="dark"
                className="mt-8"
              />
              <p className="mt-6 text-sm text-white/65">{config.hero.trust}</p>
            </motion.div>

            {/* Hero görseli: telefon + cam QR kartı (gerçek ürün UI) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative mx-auto flex justify-center"
            >
              <PhoneChat
                contactName={config.hero.visual.chat.contactName}
                contactStatus={config.hero.visual.chat.contactStatus}
                bubbles={config.hero.visual.chat.bubbles}
                trHint={config.hero.visual.chat.trHint}
              />
              <div className="absolute -bottom-6 -left-2 hidden sm:block">
                <QrCard
                  title={config.hero.visual.qr.title}
                  sub={config.hero.visual.qr.sub}
                  caption={config.hero.visual.qr.caption}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== S2 — SOSYAL KANIT ===== */}
        <Section className="border-b border-neutral-100 bg-white py-12">
          <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
            <h2 className="text-lg font-semibold text-neutral-900 md:text-xl">
              {config.socialProof.title}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-600">{config.socialProof.line}</p>
            <Stagger className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {config.socialProof.badges.map((b) => (
                <StaggerItem
                  key={b}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-semibold text-neutral-700"
                >
                  {b}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        {/* ===== S3 — PAIN ===== */}
        <Section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl">
                {config.pains.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">{config.pains.sub}</p>
            </div>
            <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {config.pains.items.map((p) => (
                <StaggerItem
                  key={p.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:p-6"
                >
                  <div className="text-3xl" aria-hidden>
                    {p.icon}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-neutral-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        {/* ===== S4 — NASIL ÇALIŞIR (sticky-scroll) ===== */}
        <HowItWorks
          title={config.howItWorks.title}
          sub={config.howItWorks.sub}
          steps={config.howItWorks.steps}
        />

        {/* ===== S5 — BENTO ÖZELLİKLER ===== */}
        <Section id="ozellikler" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl">
                {config.features.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">{config.features.sub}</p>
            </div>
            <Stagger className="mt-12 grid auto-rows-[1fr] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {config.features.items.map((f) => (
                <StaggerItem
                  key={f.title}
                  className={[
                    "rounded-2xl border p-6 shadow-sm",
                    f.large ? "sm:col-span-2 lg:row-span-2" : "",
                    f.honest
                      ? "border-dashed border-[var(--accent)] bg-[var(--accent-soft)]"
                      : "border-neutral-200 bg-white",
                  ].join(" ")}
                >
                  <div className="text-3xl" aria-hidden>
                    {f.icon}
                  </div>
                  <h3
                    className={`mt-3 font-semibold text-neutral-900 ${f.large ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-neutral-600 ${f.large ? "text-base" : "text-sm"}`}
                  >
                    {f.text}
                  </p>
                  {f.honest && (
                    <span className="mt-3 inline-block rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Dürüst sınır
                    </span>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        {/* ===== S6 — KANIT BANDI (sayaç) ===== */}
        <Section className="border-y border-neutral-100 bg-neutral-50 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              {config.proof.title}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {config.proof.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="text-4xl font-bold text-[var(--accent-strong)] md:text-5xl"
                  />
                  <p className="mt-2 text-sm font-semibold text-neutral-900">{s.label}</p>
                  {s.note && <p className="mt-1 text-xs text-neutral-500">{s.note}</p>}
                </div>
              ))}
            </div>

            <figure className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 text-center shadow-sm md:p-8">
              <blockquote className="text-base leading-relaxed text-neutral-700 md:text-lg">
                “{config.proof.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-neutral-500">
                <span className="font-semibold text-neutral-700">{config.proof.testimonial.author}</span>{" "}
                · {config.proof.testimonial.role}
              </figcaption>
            </figure>

            <div className="mt-10 flex justify-center">
              <CtaButton cta={config.ctaPrimary} locale={locale} variant="primary" source="proof" />
            </div>
            <p className="mt-3 text-center text-xs text-neutral-400">İstatistikler illüstratiftir (pilot verisi gelene kadar).</p>
          </div>
        </Section>

        {/* ===== S7 — KİTLE UYUMU ===== */}
        <Section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-strong)]">
                {config.audience.kicker}
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                {config.audience.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">{config.audience.body}</p>
            </div>
            <Stagger className="space-y-3">
              {config.audience.points.map((pt) => (
                <StaggerItem
                  key={pt}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-700">{pt}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Section>

        {/* ===== S8 — SSS ===== */}
        <Section id="sss" className="border-t border-neutral-100 bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              {config.faq.title}
            </h2>
            <div className="space-y-3">
              {config.faq.items.map((item) => (
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
        </Section>

        {/* ===== S9 — FINAL CTA (dark) ===== */}
        <Section className="relative overflow-hidden bg-[#06231c] py-20 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0%, rgba(5,150,105,0.4) 0, transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl">
              {config.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
              {config.finalCta.sub}
            </p>
            <CtaPair
              primary={config.ctaPrimary}
              secondary={config.ctaSecondary}
              locale={locale}
              source="final"
              tone="dark"
              className="mt-8 justify-center"
            />
          </div>
        </Section>

        <MobileCtaBar config={config} locale={locale} />
        {/* Alt sticky bar mobilde son ekranı kapatmasın */}
        <div className="h-20 md:hidden" aria-hidden />
      </div>
    </MotionConfig>
  );
}
