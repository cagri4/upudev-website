import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, productDetails } from "@/content/products";
import { getHomeDictionary } from "@/lib/i18n";
import { SaasProjectsGrid } from "@/components/saas-projects-grid";

export function generateStaticParams() {
  return productDetails.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const dict = getHomeDictionary("tr");

  if (!product) notFound();

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
              <Link href={`/${item.href}`} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="io-btn io-btn-dark" href="/#iletisim">
            İletişime Geç
          </Link>
        </div>
      </header>

      <main className="min-h-screen bg-neutral-50">
        <section className="mx-auto w-[min(1180px,calc(100%-2rem))] py-10">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-neutral-600 hover:text-neutral-900">
            ← Ana sayfaya dön
          </Link>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="overflow-hidden rounded-2xl border-neutral-200">
              <div className="relative aspect-[16/10]">
                <Image src={product.image} alt={product.title} fill priority className="object-cover" />
              </div>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-4 p-6 md:p-7">
                <Badge className="rounded-md px-2.5 py-1 text-[10px] uppercase tracking-[0.12em]">{product.category}</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{product.title}</h1>
                <p className="text-base leading-relaxed text-neutral-700">{product.heroSummary}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">Amaçlar</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.goals.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">Ne işe yarar?</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.whatItDoes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">Faydalar</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.benefits.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200">
              <CardContent className="space-y-3 p-6">
                <h2 className="text-xl font-semibold text-neutral-900">Kimler için?</h2>
                <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
                  {product.targetUsers.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8" />
        </section>

        <SaasProjectsGrid ongoing={dict.ongoing} />

        <section className="io-wrap io-contact" id="iletisim">
          <div className="io-contact-left">
            <p className="io-eyebrow io-eyebrow-invert">Contact</p>
            <h2>{dict.cta.title}</h2>
            <p>{dict.cta.text}</p>
            <a className="io-btn io-btn-accent" href={`mailto:${dict.contact.email}`}>
              {dict.cta.button}
            </a>
          </div>
          <div className="io-contact-right">
            <ul>
              <li>
                <strong>E-posta</strong>
                <span>{dict.contact.email}</span>
              </li>
              <li>
                <strong>Telefon</strong>
                <a href={dict.contact.phoneHref}>{dict.contact.phone}</a>
              </li>
              <li>
                <strong>Adres</strong>
                <span>{dict.contact.location}</span>
              </li>
              <li>
                <strong>KVK</strong>
                <span>{dict.contact.kvk}</span>
              </li>
              <li>
                <strong>IBAN</strong>
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
            <Link href="/">Home</Link>
            <Link href="/#projeler">Cases</Link>
            <Link href="/#iletisim">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
