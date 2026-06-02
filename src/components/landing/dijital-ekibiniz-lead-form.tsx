"use client";

/**
 * /[locale]/dijital-ekibiniz INLINE lead form — SADELEŞTİRİLMİŞ (Meta Ads CR).
 *
 * Meta CTR yüksek ama form doldurulmuyordu → friction düşürüldü:
 * 4 alan SADECE (Ad Soyad, WhatsApp No, Sektör, Mesaj) + KVKK onay gate.
 * E-posta / firma / hizmet checkbox'ları kaldırıldı.
 *
 * Submit → teşekkür ekranı + "WhatsApp'ta Hemen Başla" deep-link:
 * sabırsız kullanıcı kuyruğa beklemeden Çağrı'nın hattına (31611352773)
 * önceden doldurulmuş mesajla düşer.
 *
 * Tracking: GA4 quote_form_submit + Meta Pixel Lead (analytics.pushEvent),
 * KVKK consent Pixel Lead gate'i olarak korunur.
 */

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { pushEvent } from "@/lib/analytics";
import type { DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

type Status = "idle" | "sending" | "success" | "error";

// Çağrı'nın doğrudan hattı (insan yanıtlar) — sabırsız kullanıcı için.
const WHATSAPP_DIRECT = "31611352773";

type Props = {
  locale: Locale;
  labels: DijitalEkibinizDictionary["leadForm"];
};

export function DijitalEkibinizLeadForm({ locale, labels }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastMessage, setLastMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);

    const name = String(data.get("name") ?? "").trim();
    const whatsappPhone = String(data.get("whatsappPhone") ?? "").trim();
    const sector = String(data.get("sector") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const kvkkConsent = data.get("kvkkConsent") === "on";
    const website = String(data.get("website") ?? "").trim();

    if (!name || !whatsappPhone || !sector || !message) {
      setStatus("error");
      setErrorMessage(labels.requiredError);
      return;
    }
    if (whatsappPhone.replace(/\D/g, "").length < 7) {
      setStatus("error");
      setErrorMessage(labels.phoneError);
      return;
    }
    if (!kvkkConsent) {
      setStatus("error");
      setErrorMessage(labels.kvkkError);
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads/dijital-ekibiniz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          whatsappPhone,
          sector,
          message,
          kvkkConsent,
          website,
          formLocation: "dijital_ekibiniz_lead_form",
          locale,
        }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as {
        ok?: boolean;
        message?: string;
      };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.message ?? labels.requiredError);
        return;
      }
      pushEvent({
        event: "quote_form_submit",
        form_location: "dijital_ekibiniz_lead_form",
        form_subject: sector,
        sektor: sector,
        locale,
      });
      setLastMessage(message);
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setErrorMessage(labels.requiredError);
    }
  }

  if (status === "success") {
    const waText = `${labels.successWaPrefix} ${lastMessage}`.trim();
    const waHref = `https://wa.me/${WHATSAPP_DIRECT}?text=${encodeURIComponent(waText)}`;
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-emerald-950 md:text-2xl">
          {labels.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-900 md:text-base">
          {labels.successText}
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 md:text-base"
        >
          <span aria-hidden>💬</span> {labels.successWaLabel}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
    >
      {status === "error" && errorMessage ? (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.nameLabel} <span className="text-red-500">*</span>
          <input
            required
            name="name"
            type="text"
            maxLength={100}
            autoComplete="name"
            placeholder={labels.namePlaceholder}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.whatsappLabel} <span className="text-red-500">*</span>
          <input
            required
            name="whatsappPhone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            inputMode="tel"
            placeholder={labels.whatsappPlaceholder}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </label>
      </div>

      <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
        {labels.sectorLabel} <span className="text-red-500">*</span>
        <select
          required
          name="sector"
          defaultValue=""
          className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="" disabled>
            {labels.sectorPlaceholder}
          </option>
          {labels.sectorOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
        {labels.messageLabel} <span className="text-red-500">*</span>
        <textarea
          required
          name="message"
          maxLength={2000}
          rows={4}
          placeholder={labels.messagePlaceholder}
          className="w-full resize-y rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        />
      </label>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-neutral-50 p-4 text-sm text-neutral-700">
        <input
          type="checkbox"
          name="kvkkConsent"
          required
          className="mt-0.5 h-4 w-4 accent-emerald-600"
        />
        <span className="leading-relaxed">{labels.kvkkLabel}</span>
      </label>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? labels.sending : labels.submit}
        </button>
        <p className="text-center text-xs text-neutral-500">{labels.submitHint}</p>
      </div>
    </form>
  );
}
