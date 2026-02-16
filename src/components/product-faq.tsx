"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { FAQItem } from "@/content/products";

interface ProductFAQProps {
  items: FAQItem[];
  title: string;
}

export function ProductFAQ({ items, title }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="io-product-faq">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <Card key={index} className="rounded-xl border-neutral-200 overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
            >
              <span className="font-medium text-neutral-900">{item.question}</span>
              <span className="text-neutral-400 text-xl flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <CardContent className="px-4 pb-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                {item.answer}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
