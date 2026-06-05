"use client";

import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";
import type { DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

const WHATSAPP_NUMBER = "31611352773";
const POPULAR_INDEX = 2; // Pro

/**
 * Özellik × paket erişim matrisi (BRIEF #128 tablosu).
 * Satır = özellik (dict.packages.features sırası), sütun = Basic/Starter/Pro/Ultra.
 * Dilden bağımsız → hardcoded; etiketler dict'ten gelir.
 */
const MATRIX: boolean[][] = [
  [true, true, true, true], // Kurumsal web sitesi
  [true, true, true, true], // AI asistan
  [false, true, true, true], // Admin panelli sayfa
  [false, true, true, true], // WhatsApp bildirim
  [false, false, true, true], // E-ticaret modülü
  [false, false, true, true], // Reklam yönetimi
  [false, false, false, true], // SaaS modülü
  [false, false, false, true], // Özel entegrasyon
];

function CheckIcon() {
  return (
    <svg
      className="mx-auto text-emerald-600"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="dahil"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function PackagesModal({
  labels,
}: {
  labels: DijitalEkibinizDictionary["packages"];
}) {
  const [open, setOpen] = useState(false);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(labels.waPrefill)}`;
  const prices = [labels.priceBasic, labels.priceCustom, labels.priceCustom, labels.priceCustom];

  return (
    <>
      <div className="flex flex-col items-center gap-2 text-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#122d54] px-6 py-3 text-sm font-semibold text-[#122d54] transition hover:bg-[#122d54] hover:text-white md:text-base"
        >
          <span aria-hidden>📦</span> {labels.triggerLabel}
        </button>
        <p className="text-xs text-neutral-500">{labels.triggerHint}</p>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={labels.title}
        subtitle={labels.subtitle}
        closeLabel={labels.closeLabel}
        size="xl"
      >
        <div className="px-4 py-5 md:px-6">
          <div className="mb-4 flex justify-end">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span aria-hidden>🎁</span> {labels.annualBadge}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-2/5 px-3 pb-3 text-left align-bottom text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {labels.featureColLabel}
                  </th>
                  {labels.packageNames.map((name, i) => {
                    const popular = i === POPULAR_INDEX;
                    return (
                      <th
                        key={name}
                        className={`relative px-3 pb-3 pt-7 text-center align-bottom ${
                          popular ? "rounded-t-xl bg-emerald-50" : ""
                        }`}
                      >
                        {popular ? (
                          <span className="absolute left-1/2 top-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            ⭐ {labels.popularBadge}
                          </span>
                        ) : null}
                        <div className="text-base font-semibold text-neutral-900">{name}</div>
                        <div
                          className={`mt-1 text-xs font-medium ${
                            i === 0 ? "text-emerald-700" : "text-neutral-500"
                          }`}
                        >
                          {prices[i]}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {labels.features.map((feature, r) => (
                  <tr key={feature} className="border-t border-neutral-100">
                    <td className="px-3 py-3 text-left text-neutral-700">{feature}</td>
                    {MATRIX[r].map((on, c) => (
                      <td
                        key={c}
                        className={`px-3 py-3 text-center ${
                          c === POPULAR_INDEX ? "bg-emerald-50/50" : ""
                        }`}
                      >
                        {on ? <CheckIcon /> : <span className="text-neutral-300">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-7 flex justify-center">
            <WhatsAppLink
              href={waHref}
              source="packages"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 md:text-base"
            >
              <span aria-hidden>💬</span> {labels.ctaLabel}
            </WhatsAppLink>
          </div>
        </div>
      </Dialog>
    </>
  );
}
