import { Card, CardContent } from "@/components/ui/card";
import type { UseCase } from "@/content/products";

interface ProductUseCasesProps {
  items: UseCase[];
  title: string;
  labels: {
    scenario: string;
    problem: string;
    solution: string;
    outcome: string;
  };
}

export function ProductUseCases({ items, title, labels }: ProductUseCasesProps) {
  return (
    <div className="io-product-use-cases">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card key={index} className="rounded-xl border-neutral-200">
            <CardContent className="p-5 space-y-3">
              <h3 className="font-semibold text-neutral-900">{item.title}</h3>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-neutral-600">{labels.scenario}:</span>
                  <p className="text-neutral-700 mt-0.5">{item.scenario}</p>
                </div>

                <div>
                  <span className="font-medium text-neutral-600">{labels.problem}:</span>
                  <p className="text-neutral-700 mt-0.5">{item.problem}</p>
                </div>

                <div>
                  <span className="font-medium text-neutral-600">{labels.solution}:</span>
                  <p className="text-neutral-700 mt-0.5">{item.solution}</p>
                </div>

                <div className="pt-2 border-t border-neutral-100">
                  <span className="font-medium text-green-700">{labels.outcome}:</span>
                  <p className="text-green-700 mt-0.5">{item.outcome}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
