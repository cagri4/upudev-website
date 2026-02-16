import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const labels: Record<Locale, { home: string; cases: string; contact: string }> = {
  tr: { home: "Ana Sayfa", cases: "Projeler", contact: "İletişim" },
  en: { home: "Home", cases: "Cases", contact: "Contact" },
  nl: { home: "Home", cases: "Projecten", contact: "Contact" },
};

interface SiteFooterProps {
  locale: Locale;
  copyright: string;
}

export function SiteFooter({ locale, copyright }: SiteFooterProps) {
  const t = labels[locale];

  return (
    <footer className="io-footer">
      <div className="io-wrap">
        <p>{copyright}</p>
        <div>
          <Link href={`/${locale}`}>{t.home}</Link>
          <Link href={`/${locale}#projeler`}>{t.cases}</Link>
          <Link href={`/${locale}/iletisim`}>{t.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
