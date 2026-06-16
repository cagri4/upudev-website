"use client";

import { useEffect, useState } from "react";
import type { SaasLandingConfig } from "@/content/saas-landing/types";
import type { Locale } from "@/lib/i18n";
import { CtaButton } from "./cta";

/**
 * Mobil alt sticky CTA bar — Demo Al (birincil) + WhatsApp (ikincil).
 * Hero geçildikten sonra görünür. Sadece mobil (md:hidden).
 */
export function MobileCtaBar({
  config,
  locale,
}: {
  config: SaasLandingConfig;
  locale: Locale;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <CtaButton
        cta={config.ctaPrimary}
        locale={locale}
        variant="primary"
        source="mobile-bar"
        className="flex-1"
      />
      <CtaButton
        cta={config.ctaSecondary}
        locale={locale}
        variant="secondary"
        source="mobile-bar"
        className="flex-1"
      />
    </div>
  );
}
