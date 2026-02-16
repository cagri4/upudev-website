import Image from "next/image";
import Link from "next/link";
import type { HomeDictionary } from "@/content/locales/tr/home";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";

type Props = {
  ongoing: HomeDictionary["ongoing"];
  locale: Locale;
  id?: string;
};

export function SaasProjectsGrid({ ongoing, locale, id }: Props) {
  return (
    <section className="io-wrap io-section" id={id}>
      <div className="space-y-2">
        <Badge>{ongoing.badge}</Badge>
        <h2 className="io-process-title">{ongoing.title}</h2>
        <p className="io-lead-small">{ongoing.subtitle}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ongoing.items.map((item) => (
          <article key={item.name}>
            {item.slug ? (
              <Link href={`/${locale}/urunler/${item.slug}`} className="group block">
                <Card className="overflow-hidden rounded-2xl border-neutral-200 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="space-y-3 p-5">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-md px-2.5 py-1 text-[10px] uppercase tracking-[0.12em]">{item.category}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{item.name}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.summary}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">{ongoing.openLabel}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card className="overflow-hidden rounded-2xl border-neutral-200">
                <div className="relative aspect-[16/10]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <CardContent className="space-y-3 p-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="rounded-md px-2.5 py-1 text-[10px] uppercase tracking-[0.12em]">{item.category}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{item.summary}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">{ongoing.soonLabel}</p>
                </CardContent>
              </Card>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
