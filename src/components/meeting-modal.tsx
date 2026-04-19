"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { pushEvent } from "@/lib/analytics";
import { isLocale, type Locale } from "@/lib/i18n";

export const OPEN_MEETING_MODAL_EVENT = "open-meeting-modal";

type ServiceKey =
  | "web"
  | "software"
  | "dealer"
  | "accounting"
  | "ai"
  | "unsure";

type BudgetKey = "unknown" | "1to5k" | "5to15k" | "15kplus";

type MeetingMethodKey =
  | "video_whatsapp"
  | "video_meet"
  | "video_teams"
  | "video_zoom"
  | "audio_whatsapp"
  | "audio_phone";

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
  service: string;
  serviceChoose: string;
  services: Record<ServiceKey, string>;
  budget: string;
  budgetOptional: string;
  budgets: Record<BudgetKey, string>;
  meetingMethod: string;
  meetingMethodOptional: string;
  meetingMethods: Record<MeetingMethodKey, string>;
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
    title: "Toplantı Planla",
    subtitle: "Kısa bir form doldurun, 48 saat içinde size geri dönelim.",
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
    service: "Hangi hizmet?",
    serviceChoose: "Seçiniz",
    services: {
      web: "Web sitesi / E-ticaret",
      software: "Özel yazılım geliştirme",
      dealer: "Bayi / Toptan yönetim sistemi",
      accounting: "Muhasebe / Stok / Kasa yazılımı",
      ai: "AI entegrasyon / chatbot",
      unsure: "Henüz emin değilim, konuşalım",
    },
    budget: "Bütçe aralığı",
    budgetOptional: "(opsiyonel)",
    budgets: {
      unknown: "Bilmiyorum / sohbet edelim",
      "1to5k": "€1K – €5K",
      "5to15k": "€5K – €15K",
      "15kplus": "€15K+",
    },
    meetingMethod: "Toplantı yöntemi tercihiniz",
    meetingMethodOptional: "(opsiyonel)",
    meetingMethods: {
      video_whatsapp: "Görüntülü görüşme — WhatsApp",
      video_meet: "Görüntülü görüşme — Google Meet",
      video_teams: "Görüntülü görüşme — Microsoft Teams",
      video_zoom: "Görüntülü görüşme — Zoom",
      audio_whatsapp: "Sadece sesli görüşme — WhatsApp",
      audio_phone: "Sadece sesli görüşme — Telefon",
    },
    message: "Notlar",
    messageOptional: "(opsiyonel)",
    messagePlaceholder: "Projenizle ilgili kısa bir açıklama...",
    submit: "Talebi Gönder",
    sending: "Gönderiliyor...",
    successTitle: "Talebiniz alındı",
    successText: "48 saat içinde dönüş yapacağız. — UpuDev Ekibi",
    errorText: "Bir hata oluştu, lütfen tekrar deneyin veya info@upudev.nl'e mail atın.",
  },
  en: {
    title: "Book a Meeting",
    subtitle: "Fill out the short form and we'll get back to you within 48 hours.",
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
    service: "Which service?",
    serviceChoose: "Choose",
    services: {
      web: "Website / E-commerce",
      software: "Custom software development",
      dealer: "Dealer / Wholesale management system",
      accounting: "Accounting / Inventory / POS software",
      ai: "AI integration / chatbot",
      unsure: "Not sure yet, let's talk",
    },
    budget: "Budget range",
    budgetOptional: "(optional)",
    budgets: {
      unknown: "Not sure / let's chat",
      "1to5k": "€1K – €5K",
      "5to15k": "€5K – €15K",
      "15kplus": "€15K+",
    },
    meetingMethod: "Preferred meeting method",
    meetingMethodOptional: "(optional)",
    meetingMethods: {
      video_whatsapp: "Video call — WhatsApp",
      video_meet: "Video call — Google Meet",
      video_teams: "Video call — Microsoft Teams",
      video_zoom: "Video call — Zoom",
      audio_whatsapp: "Audio only — WhatsApp",
      audio_phone: "Audio only — Phone",
    },
    message: "Notes",
    messageOptional: "(optional)",
    messagePlaceholder: "A short description of your project...",
    submit: "Send Request",
    sending: "Sending...",
    successTitle: "Request received",
    successText: "We'll get back to you within 48 hours. — The UpuDev Team",
    errorText: "Something went wrong. Please try again or email info@upudev.nl.",
  },
  nl: {
    title: "Afspraak Inplannen",
    subtitle: "Vul het korte formulier in, we nemen binnen 48 uur contact met je op.",
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
    service: "Welke dienst?",
    serviceChoose: "Kies",
    services: {
      web: "Website / E-commerce",
      software: "Maatwerk softwareontwikkeling",
      dealer: "Dealer / Groothandel managementsysteem",
      accounting: "Boekhouding / Voorraad / Kassasoftware",
      ai: "AI-integratie / chatbot",
      unsure: "Nog niet zeker, laten we praten",
    },
    budget: "Budget",
    budgetOptional: "(optioneel)",
    budgets: {
      unknown: "Weet ik nog niet / laten we overleggen",
      "1to5k": "€1K – €5K",
      "5to15k": "€5K – €15K",
      "15kplus": "€15K+",
    },
    meetingMethod: "Voorkeur voor vergadermethode",
    meetingMethodOptional: "(optioneel)",
    meetingMethods: {
      video_whatsapp: "Videogesprek — WhatsApp",
      video_meet: "Videogesprek — Google Meet",
      video_teams: "Videogesprek — Microsoft Teams",
      video_zoom: "Videogesprek — Zoom",
      audio_whatsapp: "Alleen audio — WhatsApp",
      audio_phone: "Alleen audio — Telefoon",
    },
    message: "Opmerkingen",
    messageOptional: "(optioneel)",
    messagePlaceholder: "Een korte beschrijving van je project...",
    submit: "Aanvraag Versturen",
    sending: "Bezig met verzenden...",
    successTitle: "Aanvraag ontvangen",
    successText: "We nemen binnen 48 uur contact op. — Het UpuDev-team",
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
    const serviceKey = String(data.get("service") ?? "") as ServiceKey | "";
    const budgetKey = String(data.get("budget") ?? "") as BudgetKey | "";
    const meetingMethodKey = String(data.get("meetingMethod") ?? "") as MeetingMethodKey | "";
    const message = String(data.get("message") ?? "").trim();

    if (!name || !company || !email || !serviceKey) return;

    const serviceLabel = serviceKey ? t.services[serviceKey as ServiceKey] : "";
    const budgetLabel = budgetKey ? t.budgets[budgetKey as BudgetKey] : "";
    const meetingMethodLabel = meetingMethodKey ? t.meetingMethods[meetingMethodKey as MeetingMethodKey] : "";

    const subject = `[Toplantı Talebi] ${serviceLabel} — ${name} (${company})`;

    const messageBody = [
      `Şirket / Company: ${company}`,
      `Hizmet / Service: ${serviceLabel}`,
      budgetLabel ? `Bütçe / Budget: ${budgetLabel}` : null,
      meetingMethodLabel ? `Toplantı Yöntemi / Meeting Method: ${meetingMethodLabel}` : null,
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
        form_subject: serviceLabel,
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
              {t.service}
              <select
                required
                name="service"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
              >
                <option value="" disabled>
                  {t.serviceChoose}
                </option>
                {(Object.keys(t.services) as ServiceKey[]).map((key) => (
                  <option key={key} value={key}>
                    {t.services[key]}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1.5 text-sm font-medium text-neutral-700">
              {t.budget} <span className="text-neutral-400">{t.budgetOptional}</span>
              <select
                name="budget"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
              >
                <option value="">—</option>
                {(Object.keys(t.budgets) as BudgetKey[]).map((key) => (
                  <option key={key} value={key}>
                    {t.budgets[key]}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1.5 text-sm font-medium text-neutral-700">
              {t.meetingMethod} <span className="text-neutral-400">{t.meetingMethodOptional}</span>
              <select
                name="meetingMethod"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
              >
                <option value="">—</option>
                {(Object.keys(t.meetingMethods) as MeetingMethodKey[]).map((key) => (
                  <option key={key} value={key}>
                    {t.meetingMethods[key]}
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
