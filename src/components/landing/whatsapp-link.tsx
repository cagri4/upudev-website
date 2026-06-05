"use client";

import type { ReactNode } from "react";

type Source = "header" | "hero" | "success" | "sticky" | "packages";

/**
 * WhatsApp deep-link + Meta Pixel tracking.
 *
 * onClick → fbq('trackCustom', 'WhatsAppClick', { source }) + standard
 * fbq('track', 'Contact'). Tek noktadan tüm WA girişlerini (header / hero /
 * success ekranı) izler. Consent revoke ise fbq event'leri queue'da kalır.
 */
export function WhatsAppLink({
  href,
  source,
  className,
  children,
}: {
  href: string;
  source: Source;
  className?: string;
  children: ReactNode;
}) {
  function track() {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    window.fbq("trackCustom", "WhatsAppClick", { source });
    window.fbq("track", "Contact", { content_name: `whatsapp-${source}` });
  }

  return (
    <a href={href} target="_blank" rel="noopener" className={className} onClick={track}>
      {children}
    </a>
  );
}
