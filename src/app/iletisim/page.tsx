import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { getHomeDictionary } from "@/lib/i18n";

export default function ContactPage() {
  const dict = getHomeDictionary("tr");
  const resolveNavHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

  return (
    <div className="io-page">
      <header className="io-header">
        <div className="io-wrap io-topline">
          <p>{dict.topbar.address}</p>
          <a href={dict.topbar.phoneHref}>{dict.topbar.phone}</a>
        </div>
        <div className="io-wrap io-nav">
          <Link href="/" className="io-logo">
            upu<span>dev</span>
          </Link>
          <nav>
            {dict.nav.map((item) => (
              <Link href={resolveNavHref(item.href)} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="io-btn io-btn-dark" href="/iletisim">
            İletişime Geç
          </Link>
        </div>
      </header>

      <main className="bg-neutral-50 pb-12">
        <section className="io-wrap py-10 md:py-12">
          <div className="mb-6">
            <p className="io-eyebrow">Contact</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">İletişim</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
              Yeni proje, revizyon veya teknik destek için bize yazabilirsiniz. Formu doldurduğunuzda ekibimiz en kısa
              sürede sizinle iletişime geçer.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactForm />

            <aside className="space-y-5">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h2 className="text-xl font-semibold text-neutral-900">İletişim Bilgileri</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">E-posta</strong>
                    {dict.contact.email}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">Telefon</strong>
                    {dict.contact.phone}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">Adres</strong>
                    {dict.contact.location}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">KVK</strong>
                    {dict.contact.kvk}
                  </li>
                  <li>
                    <strong className="block text-xs uppercase tracking-[0.12em] text-neutral-500">IBAN</strong>
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
            <Link href="/">Home</Link>
            <Link href="/#projeler">Cases</Link>
            <Link href="/iletisim">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

