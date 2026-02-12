"use client";

import Link from "next/link";
import { useState } from "react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import type { Locale } from "@/lib/i18n";

type SiteHeaderNavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  locale: Locale;
  navItems: SiteHeaderNavItem[];
  topbarAddress: string;
  topbarPhone: string;
  topbarPhoneHref: string;
  contactLabel: string;
};

export function SiteHeader({
  locale,
  navItems,
  topbarAddress,
  topbarPhone,
  topbarPhoneHref,
  contactLabel,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const resolveNavHref = (href: string) => (href.startsWith("#") ? `/${locale}${href}` : `/${locale}${href}`);

  return (
    <header className="io-header">
      <div className="io-wrap io-topline">
        <p>{topbarAddress}</p>
        <a href={topbarPhoneHref}>{topbarPhone}</a>
      </div>
      <div className="io-wrap io-nav">
        <Link href={`/${locale}`} className="io-logo">
          upu<span>dev</span>
        </Link>

        <nav className="io-nav-links">
          {navItems.map((item) => (
            <Link href={resolveNavHref(item.href)} key={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="io-nav-actions">
          <LocaleSwitcher currentLocale={locale} />
          <Link className="io-btn io-btn-dark io-contact-cta" href={`/${locale}/iletisim`}>
            {contactLabel}
          </Link>
          <button
            type="button"
            className="io-menu-toggle"
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav-menu" className={`io-mobile-menu${mobileOpen ? " is-open" : ""}`}>
        <nav>
          {navItems.map((item) => (
            <Link href={resolveNavHref(item.href)} key={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="io-mobile-menu-actions">
          <LocaleSwitcher currentLocale={locale} />
          <Link className="io-btn io-btn-dark" href={`/${locale}/iletisim`} onClick={() => setMobileOpen(false)}>
            {contactLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
