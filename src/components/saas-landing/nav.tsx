"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { SaasLandingConfig } from "@/content/saas-landing/types";
import type { Locale } from "@/lib/i18n";
import { CtaButton } from "./cta";

/**
 * S0 — Glass sticky nav. Scroll'da arka plan koyulaşır. Mobilde linkler
 * gizlenir, sadece marka + birincil CTA kalır (alt sticky bar zaten var).
 */
export function SaasNav({
  config,
  locale,
}: {
  config: SaasLandingConfig;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const brandHref = config.nav.brandHref.replace("{locale}", locale);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-neutral-200/70 bg-white/80 backdrop-blur-md"
          : "border-transparent bg-white/40 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href={brandHref} className="text-lg font-bold tracking-tight text-neutral-900">
          upu<span className="text-[var(--accent-strong)]">market</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {config.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <CtaButton
          cta={config.ctaPrimary}
          locale={locale}
          variant="primary"
          source="nav"
          className="!px-5 !py-2 text-xs md:text-sm"
        />
      </div>
    </header>
  );
}
