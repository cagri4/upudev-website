import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getHomeDictionary, isLocale, locales } from "@/lib/i18n";
import { dataDeletionContent } from "@/content/legal";

export default async function DataDeletionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getHomeDictionary(locale);
  const t = dataDeletionContent[locale];

  return (
    <div className="io-page">
      <SiteHeader
        locale={locale}
        navItems={dict.nav}
        topbarAddress={dict.topbar.address}
        topbarPhone={dict.topbar.phone}
        topbarPhoneHref={dict.topbar.phoneHref}
        contactLabel={dict.nav.find((n) => n.href === "/iletisim")?.label ?? "Contact"}
      />

      <main className="bg-neutral-50 pb-16">
        <section className="io-wrap py-10 md:py-14">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{t.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">{t.intro}</p>

            <div className="mt-10 space-y-8">
              {t.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-lg font-semibold text-neutral-900">{section.heading}</h2>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-neutral-700">{section.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-xs text-neutral-400">{t.lastUpdated}</p>
          </div>
        </section>
      </main>

      <footer className="io-footer">
        <div className="io-wrap">
          <p>{dict.footer}</p>
          <div>
            <Link href={`/${locale}`}>Home</Link>
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
