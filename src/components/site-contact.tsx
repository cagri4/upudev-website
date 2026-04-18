import type { Locale } from "@/lib/i18n";
import { TrackedLink } from "@/components/tracked-link";

const labels: Record<Locale, { badge: string; email: string; phone: string; address: string; kvk: string; iban: string }> = {
  tr: { badge: "İletişim", email: "E-posta", phone: "Telefon", address: "Adres", kvk: "KVK", iban: "IBAN" },
  en: { badge: "Contact", email: "Email", phone: "Phone", address: "Address", kvk: "KVK", iban: "IBAN" },
  nl: { badge: "Contact", email: "E-mail", phone: "Telefoon", address: "Adres", kvk: "KVK", iban: "IBAN" },
};

interface SiteContactProps {
  locale: Locale;
  cta: { title: string; text: string; button: string };
  contact: { email: string; phone: string; phoneHref: string; location: string; kvk: string; iban: string };
}

export function SiteContact({ locale, cta, contact }: SiteContactProps) {
  const t = labels[locale];

  return (
    <section className="io-wrap io-contact" id="iletisim">
      <div className="io-contact-left">
        <p className="io-eyebrow io-eyebrow-invert">{t.badge}</p>
        <h2>{cta.title}</h2>
        <p>{cta.text}</p>
        <TrackedLink
          className="io-btn io-btn-accent mt-6"
          href={`mailto:${contact.email}`}
          location="meeting_cta"
          locale={locale}
        >
          {cta.button}
        </TrackedLink>
      </div>
      <div className="io-contact-right">
        <ul>
          <li>
            <strong>{t.email}</strong>
            <span>{contact.email}</span>
          </li>
          <li>
            <strong>{t.phone}</strong>
            <TrackedLink href={contact.phoneHref} location="home_contact" locale={locale}>
              {contact.phone}
            </TrackedLink>
          </li>
          <li>
            <strong>{t.address}</strong>
            <span>{contact.location}</span>
          </li>
          <li>
            <strong>{t.kvk}</strong>
            <span>{contact.kvk}</span>
          </li>
          <li>
            <strong>{t.iban}</strong>
            <span>{contact.iban}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
