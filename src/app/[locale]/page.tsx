import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHomeDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SaasProjectsGrid } from "@/components/saas-projects-grid";
import { SiteHeader } from "@/components/site-header";

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
    contact: "Contact",
    home: "Home",
    cases: "Cases",
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
              <a className="io-btn io-btn-dark" href={`/${locale}#projeler`}>
                {dict.hero.ctaSecondary}
              </a>
              <Link className="io-btn io-btn-ghost" href={`/${locale}/iletisim`}>
                {dict.hero.ctaPrimary}
              </Link>
            </div>
          </div>
          <div className="io-hero-media">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
              alt="Strategic workshop in progress"
              fill
              priority
              className="io-image"
            />
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-neutral-50">
          <div className="io-wrap py-5 md:py-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Badge>{ui.ecosystem}</Badge>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">{dict.partners.title}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
                {dict.partners.items.map((partner) => (
                  <Card key={partner.name} className="h-12 rounded-xl shadow-none">
                    <CardContent className="flex h-full items-center justify-center p-3">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={120}
                        height={26}
                        loading="lazy"
                        className="h-5 w-auto max-w-full object-contain"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-5" />

            <div className="grid rounded-2xl border border-neutral-200 bg-white md:grid-cols-3">
              {dict.hero.stats.map((stat, index) => (
                <article
                  key={stat.label}
                  className={cn(
                    "px-7 py-6 text-center",
                    index < dict.hero.stats.length - 1 && "border-b border-neutral-200 md:border-r md:border-b-0",
                  )}
                >
                  <p className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">{stat.value}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">{stat.label}</h3>
                  <small className="mt-2 block text-base leading-relaxed text-neutral-600">{stat.note}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SaasProjectsGrid ongoing={dict.ongoing} locale={locale} id="projeler" />

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

        <section className="io-wrap io-section" id="hakkimizda">
          <div className="io-two-col">
            <article>
              <p className="io-eyebrow">{ui.about}</p>
              <h2>{dict.about.title}</h2>
              <p className="io-lead-small">{dict.about.description}</p>
            </article>
            <article className="io-notes">
              {dict.about.bullets.map((bullet) => (
                <p key={bullet}>{bullet}</p>
              ))}
            </article>
          </div>
        </section>

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
            <a className="io-btn io-btn-accent" href={`mailto:${dict.contact.email}`}>
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
            <a className="io-btn io-btn-whatsapp" href={dict.contact.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="io-footer">
        <div className="io-wrap">
          <p>{dict.footer}</p>
          <div>
            <Link href={`/${locale}`}>{ui.home}</Link>
            <Link href={`/${locale}#projeler`}>{ui.cases}</Link>
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
