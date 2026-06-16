"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { CtaConfig } from "@/content/saas-landing/types";
import type { Locale } from "@/lib/i18n";

type Variant = "primary" | "secondary";
type Tone = "light" | "dark";

function resolveHref(href: string, locale: Locale) {
  return href.replace("{locale}", locale);
}

function track(source: string, label: string) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("trackCustom", "LandingCtaClick", { source, label });
  window.fbq("track", "Lead", { content_name: source });
}

/**
 * Tek CTA butonu. Birincil = dolu aksan, ikincil = outline.
 * Hover scale 1.03 (buton YERİNİ değiştirmez — sadece ölçek). Dış link
 * (WhatsApp) yeni sekmede + pixel tracking.
 */
export function CtaButton({
  cta,
  locale,
  variant,
  tone = "light",
  source,
  className,
}: {
  cta: CtaConfig;
  locale: Locale;
  variant: Variant;
  tone?: Tone;
  source: string;
  className?: string;
}) {
  const href = resolveHref(cta.href, locale);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white shadow-[0_10px_30px_-10px_var(--accent-ring)] hover:bg-[var(--accent-strong)]"
      : tone === "dark"
        ? "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
        : "border border-[var(--accent)] text-[var(--accent-strong)] hover:bg-[var(--accent-soft)]";

  const inner = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${styles} ${className ?? ""}`}
    >
      {variant === "secondary" && cta.external && <span aria-hidden>💬</span>}
      {cta.label}
    </motion.span>
  );

  if (cta.external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        onClick={() => track(source, cta.label)}
        className="inline-flex"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} onClick={() => track(source, cta.label)} className="inline-flex">
      {inner}
    </Link>
  );
}

/** İki CTA'yı yan yana (birincil + ikincil). */
export function CtaPair({
  primary,
  secondary,
  locale,
  source,
  tone = "light",
  className,
}: {
  primary: CtaConfig;
  secondary: CtaConfig;
  locale: Locale;
  source: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className ?? ""}`}>
      <CtaButton cta={primary} locale={locale} variant="primary" tone={tone} source={`${source}-primary`} />
      <CtaButton cta={secondary} locale={locale} variant="secondary" tone={tone} source={`${source}-secondary`} />
    </div>
  );
}
