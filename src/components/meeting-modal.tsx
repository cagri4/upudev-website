"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { pushEvent } from "@/lib/analytics";
import { isLocale, type Locale } from "@/lib/i18n";

export const OPEN_MEETING_MODAL_EVENT = "open-meeting-modal";

/**
 * "Plan een gesprek" modalı — AI Eleman konumlaması (12 Kas 2026).
 * Eski proje-bütçe mantığı (€1K–€15K+) ve yazılım-hizmet listesi kaldırıldı;
 * yerine sade "işletme türü" seçimi + "vanaf €69" paket satırı.
 */
type SectorKey = "supermarket" | "wholesale" | "horeca" | "other";

type T = {
  title: string;
  subtitle: string;
  close: string;
  name: string;
  namePlaceholder: string;
  company: string;
  companyPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phoneOptional: string;
  phonePlaceholder: string;
  pricing: string;
  sector: string;
  sectorChoose: string;
  sectors: Record<SectorKey, string>;
  message: string;
  messageOptional: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  successTitle: string;
  successText: string;
  errorText: string;
};

const labels: Record<Locale, T> = {
  tr: {
    title: "Görüşme planlayın",
    subtitle: "İşletmenizi kısaca anlatın, bir iş günü içinde size dönelim.",
    close: "Kapat",
    name: "Ad Soyad",
    namePlaceholder: "Adınız Soyadınız",
    company: "Şirket / Kurum",
    companyPlaceholder: "Şirket adı",
    email: "E-posta",
    emailPlaceholder: "ornek@firma.com",
    phone: "Telefon",
    phoneOptional: "(opsiyonel)",
    phonePlaceholder: "+31 ...",
    pricing: "Birlikte çalışma paketleri aylık €69'dan · ilk ay ücretsiz",
    sector: "İşletmeniz",
    sectorChoose: "Seçiniz",
    sectors: {
      supermarket: "Market / bakkal",
      wholesale: "Toptancı / dağıtıcı",
      horeca: "Restoran / kafe / horeca",
      other: "Başka bir sektör",
    },
    message: "Notlar",
    messageOptional: "(opsiyonel)",
    messagePlaceholder: "Sizde hangi iş birikiyor? AI elemanınız neyi devralsın?",
    submit: "Talebi Gönder",
    sending: "Gönderiliyor...",
    successTitle: "Talebiniz alındı",
    successText: "Bir iş günü içinde dönüş yapacağız. — UpuDev Ekibi",
    errorText: "Bir hata oluştu, lütfen tekrar deneyin veya info@upudev.nl'e mail atın.",
  },
  en: {
    title: "Plan a call",
    subtitle: "Tell us briefly about your business — we'll get back to you within one business day.",
    close: "Close",
    name: "Full Name",
    namePlaceholder: "Your full name",
    company: "Company / Organization",
    companyPlaceholder: "Company name",
    email: "Email",
    emailPlaceholder: "example@company.com",
    phone: "Phone",
    phoneOptional: "(optional)",
    phonePlaceholder: "+31 ...",
    pricing: "Partnership packages from €69 per month · first month free",
    sector: "Your business",
    sectorChoose: "Choose",
    sectors: {
      supermarket: "Supermarket / grocery",
      wholesale: "Wholesaler / distributor",
      horeca: "Restaurant / café / hospitality",
      other: "Another sector",
    },
    message: "Notes",
    messageOptional: "(optional)",
    messagePlaceholder: "Which work piles up for you? What should your AI employee take over?",
    submit: "Send Request",
    sending: "Sending...",
    successTitle: "Request received",
    successText: "We'll get back to you within one business day. — The UpuDev Team",
    errorText: "Something went wrong. Please try again or email info@upudev.nl.",
  },
  nl: {
    title: "Plan een gesprek",
    subtitle: "Vertel kort over je zaak — we nemen binnen één werkdag contact op.",
    close: "Sluiten",
    name: "Naam",
    namePlaceholder: "Je volledige naam",
    company: "Bedrijf / Organisatie",
    companyPlaceholder: "Bedrijfsnaam",
    email: "E-mail",
    emailPlaceholder: "voorbeeld@bedrijf.com",
    phone: "Telefoon",
    phoneOptional: "(optioneel)",
    phonePlaceholder: "+31 ...",
    pricing: "Samenwerkingspakketten vanaf €69 p/m · eerste maand gratis",
    sector: "Jouw zaak",
    sectorChoose: "Kies",
    sectors: {
      supermarket: "Supermarkt / toko",
      wholesale: "Groothandel / distributeur",
      horeca: "Restaurant / café / horeca",
      other: "Andere sector",
    },
    message: "Opmerkingen",
    messageOptional: "(optioneel)",
    messagePlaceholder: "Welk werk blijft er bij jou liggen? Wat moet je AI-medewerker overnemen?",
    submit: "Aanvraag Versturen",
    sending: "Bezig met verzenden...",
    successTitle: "Aanvraag ontvangen",
    successText: "We nemen binnen één werkdag contact op. — Het UpuDev-team",
    errorText: "Er is iets misgegaan. Probeer opnieuw of mail info@upudev.nl.",
  },
};

function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : "tr";
}

export function MeetingModal() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = labels[locale];

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => setStatus("idle"), 300);
  }, []);

  useEffect(() => {
    const handler = () => {
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener(OPEN_MEETING_MODAL_EVENT, handler);
    return () => window.removeEventListener(OPEN_MEETING_MODAL_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [open, close]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const sectorKey = String(data.get("sector") ?? "") as SectorKey | "";
    const message = String(data.get("message") ?? "").trim();

    if (!name || !company || !email || !sectorKey) return;

    const sectorLabel = t.sectors[sectorKey as SectorKey];

    const subject = `[Görüşme Talebi] AI Eleman — ${sectorLabel} — ${name} (${company})`;

    const messageBody = [
      `Şirket / Company: ${company}`,
      `İşletme / Sector: ${sectorLabel}`,
      `Locale: ${locale}`,
      `Timestamp (UTC): ${new Date().toISOString()}`,
      "",
      message ? `Notlar / Notes:\n${message}` : "Notlar / Notes: —",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          subject,
          message: messageBody,
          locale,
        }),
      });

      const result = (await response.json().catch(() => ({ ok: false }))) as { ok?: boolean };

      if (!response.ok || !result.ok) {
        setStatus("error");
        return;
      }

      pushEvent({
        event: "quote_form_submit",
        form_location: "meeting_modal",
        form_subject: `ai_eleman_${sectorKey}`,
        locale,
      });

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 md:items-center md:p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl md:max-w-xl md:rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-neutral-200 bg-white px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">{t.title}</h2>
            <p className="mt-1 text-sm text-neutral-600">{t.subtitle}</p>
            <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
              {t.pricing}
            </p>
          </div>
          <button
            type="button"
            aria-label={t.close}
            onClick={close}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="px-6 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-neutral-900">{t.successTitle}</h3>
            <p className="mt-2 text-sm text-neutral-600">{t.successText}</p>
            <button
              type="button"
              onClick={close}
              className="mt-6 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 px-6 py-6">
            {status === "error" && (
              <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{t.errorText}</p>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-1.5 text-sm font-medium text-neutral-700">
                {t.name}
                <input
                  ref={firstFieldRef}
                  required
                  name="name"
                  type="text"
                  maxLength={100}
                  placeholder={t.namePlaceholder}
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
                />
              </label>
              <label className="space-y-1.5 text-sm font-medium text-neutral-700">
                {t.company}
                <input
                  required
                  name="company"
                  type="text"
                  maxLength={120}
                  placeholder={t.companyPlaceholder}
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-1.5 text-sm font-medium text-neutral-700">
                {t.email}
                <input
                  required
                  name="email"
                  type="email"
                  maxLength={160}
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
                />
              </label>
              <label className="space-y-1.5 text-sm font-medium text-neutral-700">
                {t.phone} <span className="text-neutral-400">{t.phoneOptional}</span>
                <input
                  name="phone"
                  type="tel"
                  maxLength={40}
                  placeholder={t.phonePlaceholder}
                  className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
                />
              </label>
            </div>

            <label className="space-y-1.5 text-sm font-medium text-neutral-700">
              {t.sector}
              <select
                required
                name="sector"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
              >
                <option value="" disabled>
                  {t.sectorChoose}
                </option>
                {(Object.keys(t.sectors) as SectorKey[]).map((key) => (
                  <option key={key} value={key}>
                    {t.sectors[key]}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1.5 text-sm font-medium text-neutral-700">
              {t.message} <span className="text-neutral-400">{t.messageOptional}</span>
              <textarea
                name="message"
                rows={4}
                maxLength={2000}
                placeholder={t.messagePlaceholder}
                className="w-full resize-y rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
              />
            </label>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? t.sending : t.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
