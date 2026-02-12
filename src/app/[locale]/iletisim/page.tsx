import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { getHomeDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

const pageText: Record<
  Locale,
  {
    badge: string;
    title: string;
    intro: string;
    infoTitle: string;
    email: string;
    phone: string;
    address: string;
    kvk: string;
    iban: string;
    contactButton: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      companyPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
    };
  }
> = {
  tr: {
    badge: "Contact",
    title: "İletişim",
    intro:
      "Yeni proje, revizyon veya teknik destek için bize yazabilirsiniz. Formu doldurduğunuzda ekibimiz en kısa sürede sizinle iletişime geçer.",
    infoTitle: "İletişim Bilgileri",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    kvk: "KVK",
    iban: "IBAN",
    contactButton: "İletişime Geç",
    form: {
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      company: "Firma",
      subject: "Konu",
      message: "Mesaj",
      submit: "Mesaj Gönder",
      sending: "Gönderiliyor...",
      namePlaceholder: "Adınız Soyadınız",
      emailPlaceholder: "ornek@firma.com",
      phonePlaceholder: "+31 ...",
      companyPlaceholder: "Firma adı",
      subjectPlaceholder: "Proje talebi, revizyon, destek...",
      messagePlaceholder: "Projenizle ilgili detayları yazabilirsiniz.",
    },
  },
  en: {
    badge: "Contact",
    title: "Contact",
    intro:
      "Reach out for a new project, revision, or technical support. After you submit the form, our team will get back to you shortly.",
    infoTitle: "Contact Details",
    email: "Email",
    phone: "Phone",
    address: "Address",
    kvk: "KVK",
    iban: "IBAN",
    contactButton: "Contact Us",
    form: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      namePlaceholder: "Your full name",
      emailPlaceholder: "example@company.com",
      phonePlaceholder: "+31 ...",
      companyPlaceholder: "Company name",
      subjectPlaceholder: "Project request, revision, support...",
      messagePlaceholder: "You can share your project details here.",
    },
  },
  nl: {
    badge: "Contact",
    title: "Contact",
    intro:
      "Neem contact op voor een nieuw project, revisie of technische ondersteuning. Na het versturen van het formulier nemen wij snel contact met je op.",
    infoTitle: "Contactgegevens",
    email: "E-mail",
    phone: "Telefoon",
    address: "Adres",
    kvk: "KVK",
    iban: "IBAN",
    contactButton: "Contact Opnemen",
    form: {
      name: "Naam",
      email: "E-mail",
      phone: "Telefoon",
      company: "Bedrijf",
      subject: "Onderwerp",
      message: "Bericht",
      submit: "Bericht Versturen",
      sending: "Bezig met verzenden...",
      namePlaceholder: "Je volledige naam",
      emailPlaceholder: "voorbeeld@bedrijf.com",
      phonePlaceholder: "+31 ...",
      companyPlaceholder: "Bedrijfsnaam",
      subjectPlaceholder: "Projectaanvraag, revisie, support...",
      messagePlaceholder: "Je kunt hier je projectdetails delen.",
    },
  },
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getHomeDictionary(locale);
  const t = pageText[locale];

  return (
    <div className="io-page">
      <SiteHeader
        locale={locale}
        navItems={dict.nav}
        topbarAddress={dict.topbar.address}
        topbarPhone={dict.topbar.phone}
        topbarPhoneHref={dict.topbar.phoneHref}
        contactLabel={t.contactButton}
      />

      <main className="bg-neutral-50 pb-12">
        <section className="io-wrap py-10 md:py-12">
          <div className="mb-6">
            <p className="io-eyebrow">{t.badge}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">{t.title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactForm locale={locale} labels={t.form} />

            <aside className="space-y-5">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h2 className="text-xl font-semibold text-neutral-900">{t.infoTitle}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">{t.email}</strong>
                    {dict.contact.email}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">{t.phone}</strong>
                    {dict.contact.phone}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">{t.address}</strong>
                    {dict.contact.location}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">{t.kvk}</strong>
                    {dict.contact.kvk}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">{t.iban}</strong>
                    {dict.contact.iban}
                  </li>
                </ul>
                <a
                  className="io-btn io-btn-whatsapp mt-5"
                  href={dict.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <iframe
                  title="UPU Dev Office Map"
                  src="https://www.google.com/maps?q=Computerweg%2022%2C%203542%20DR%20Utrecht%2C%20Netherlands&output=embed"
                  className="h-[330px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="io-footer">
        <div className="io-wrap">
          <p>{dict.footer}</p>
          <div>
            <Link href={`/${locale}`}>Home</Link>
            <Link href={`/${locale}#projeler`}>Cases</Link>
            <Link href={`/${locale}/iletisim`}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
