import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Partner = {
  name: string;
  logo: string;
};

type PartnersGridProps = {
  title: string;
  badgeText: string;
  partners: Partner[];
};

export function PartnersGrid({ title, badgeText, partners }: PartnersGridProps) {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="io-wrap py-10 md:py-12">
        <div className="space-y-4">
          <div className="space-y-2">
            <Badge>{badgeText}</Badge>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
              {title}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
            {partners.map((partner) => (
              <Card key={partner.name} className="h-12 rounded-xl shadow-none">
                <CardContent className="flex h-full items-center justify-center p-3">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={26}
                    loading="lazy"
                    className="io-partner-logo h-5 w-auto max-w-full object-contain"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
