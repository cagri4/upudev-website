import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHomeDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { SaasProjectsGrid } from "@/components/saas-projects-grid";
import { SiteHeader } from "@/components/site-header";
import { PartnersGrid } from "@/components/partners-grid";
import { StatsSection } from "@/components/stats-section";
import { AboutSection } from "@/components/about-section";

const uiText: Record<
  Locale,
  {
    ecosystem: string;
    capabilities: string;
    about: string;
    process: string;
    contact: string;
    home: string;
    cases: string;
    email: string;
    phone: string;
    address: string;
    kvk: string;
    iban: string;
  }
> = {
  tr: {
    ecosystem: "Ekosistem",
    capabilities: "Yetenekler",
    about: "Hakkında",
    process: "Süreç",
    contact: "İletişim",
    home: "Ana Sayfa",
    cases: "Projeler",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    kvk: "KVK",
    iban: "IBAN",
  },
  en: {
    ecosystem: "Ecosystem",
    capabilities: "Capabilities",
    about: "About",
    process: "Process",
    contact: "Contact",
    home: "Home",
    cases: "Cases",
    email: "Email",
    phone: "Phone",
    address: "Address",
    kvk: "KVK",
    iban: "IBAN",
  },
  nl: {
    ecosystem: "Ecosysteem",
    capabilities: "Capaciteiten",
    about: "Over",
    process: "Proces",
    contact: "Contact",
    home: "Home",
    cases: "Cases",
    email: "E-mail",
    phone: "Telefoon",
    address: "Adres",
    kvk: "KVK",
    iban: "IBAN",
  },
};

export default async function HomeLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getHomeDictionary(locale);
  const ui = uiText[locale];
  const contactLabel = dict.nav.find((x) => x.href === "/iletisim")?.label ?? "Contact";

  return (
    <div className="io-page">
      <SiteHeader
        locale={locale}
        navItems={dict.nav}
        topbarAddress={dict.topbar.address}
        topbarPhone={dict.topbar.phone}
        topbarPhoneHref={dict.topbar.phoneHref}
        contactLabel={contactLabel}
      />

      <main>
        <section className="io-hero io-wrap" id="ana-sayfa">
          <div className="io-hero-text">
            <p className="io-eyebrow">{dict.hero.badge}</p>
            <h1>{dict.hero.title}</h1>
            <p className="io-lead">{dict.hero.subtitle}</p>
            <div className="io-hero-actions">
              <Link className="io-btn io-btn-dark" href={`/${locale}/iletisim`}>
                {dict.hero.ctaSecondary}
              </Link>
              <a className="io-btn io-btn-ghost" href={`/${locale}#projeler`}>
                {dict.hero.ctaPrimary}
              </a>
            </div>
          </div>
          <div className="io-hero-media">
            <Image
              src="/hero-illustration-square.jpg"
              alt="AI-powered software development"
              fill
              priority
              className="io-image"
              style={{ objectFit: "contain" }}
            />
          </div>
        </section>

        <PartnersGrid
          title={dict.partners.title}
          badgeText={ui.ecosystem}
          partners={dict.partners.items}
        />

        <SaasProjectsGrid ongoing={dict.ongoing} locale={locale} id="projeler" />

        <StatsSection stats={dict.hero.stats} />

        <section className="io-wrap io-section" id="hizmetler">
          <div className="io-section-head">
            <p className="io-eyebrow">{ui.capabilities}</p>
            <h2>{dict.services.title}</h2>
            <p className="io-lead-small">{dict.services.intro}</p>
          </div>
          <div className="io-services-list">
            {dict.services.items.map((service, index) => (
              <article key={service.title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span>{service.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <AboutSection
          badge={ui.about}
          title={dict.about.title}
          description={dict.about.description}
          bullets={dict.about.bullets}
        />

        <section className="io-wrap io-section" id="surec">
          <p className="io-eyebrow">{ui.process}</p>
          <h2 className="io-process-title">{dict.process.title}</h2>
          <div className="io-process">
            {dict.process.steps.map((step) => (
              <article key={step.id}>
                <p>{step.id}</p>
                <h3>{step.title}</h3>
                <span>{step.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="io-wrap io-contact" id="iletisim">
          <div className="io-contact-left">
            <p className="io-eyebrow io-eyebrow-invert">{ui.contact}</p>
            <h2>{dict.cta.title}</h2>
            <p>{dict.cta.text}</p>
            <a className="io-btn io-btn-accent mt-6" href={`mailto:${dict.contact.email}`}>
              {dict.cta.button}
            </a>
          </div>
          <div className="io-contact-right">
            <ul>
              <li>
                <strong>{ui.email}</strong>
                <span>{dict.contact.email}</span>
              </li>
              <li>
                <strong>{ui.phone}</strong>
                <a href={dict.contact.phoneHref}>{dict.contact.phone}</a>
              </li>
              <li>
                <strong>{ui.address}</strong>
                <span>{dict.contact.location}</span>
              </li>
              <li>
                <strong>{ui.kvk}</strong>
                <span>{dict.contact.kvk}</span>
              </li>
              <li>
                <strong>{ui.iban}</strong>
                <span>{dict.contact.iban}</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="io-footer">
        <div className="io-wrap">
          <p>{dict.footer}</p>
          <div>
            <Link href={`/${locale}`}>{ui.home}</Link>
            <Link href={`/${locale}#projeler`}>{ui.cases}</Link>
            <Link href={`/${locale}/iletisim`}>{ui.contact}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
