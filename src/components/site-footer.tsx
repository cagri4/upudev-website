import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const labels: Record<Locale, { home: string; cases: string; contact: string; privacy: string; terms: string; dataDeletion: string }> = {
  tr: { home: "Ana Sayfa", cases: "Projeler", contact: "İletişim", privacy: "Gizlilik", terms: "Kullanım Şartları", dataDeletion: "Veri Silme" },
  en: { home: "Home", cases: "Cases", contact: "Contact", privacy: "Privacy", terms: "Terms", dataDeletion: "Data Deletion" },
  nl: { home: "Home", cases: "Projecten", contact: "Contact", privacy: "Privacy", terms: "Voorwaarden", dataDeletion: "Gegevens Verwijderen" },
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
          <Link href={`/${locale}/privacy`}>{t.privacy}</Link>
          <Link href={`/${locale}/terms`}>{t.terms}</Link>
          <Link href={`/${locale}/data-deletion`}>{t.dataDeletion}</Link>
        </div>
      </div>
    </footer>
  );
}
