import { Card, CardContent } from "@/components/ui/card";
import type { FeatureDetail } from "@/content/products";

interface ProductFeaturesDetailedProps {
  items: FeatureDetail[];
  title: string;
}

export function ProductFeaturesDetailed({ items, title }: ProductFeaturesDetailedProps) {
  return (
    <div className="io-product-features-detailed">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <Card key={index} className="rounded-xl border-neutral-200">
            <CardContent className="p-5 space-y-2">
              <h3 className="font-semibold text-neutral-900">{item.title}</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {item.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-neutral-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
