"use client";

/**
 * /[locale]/ai-eleman YEDEK form (WhatsApp istemeyenler için).
 *
 * Backend = mevcut iletişim formuyla AYNI yol: POST /api/contact
 * → nodemailer SMTP → MAIL_TO (info@upudev.nl). Konu sabit:
 * "[UpuDev] AI Eleman — gratis maand". Backend değiştirilmedi;
 * /api/contact message zorunlu olduğu için boş Bericht → varsayılan metin.
 */

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { pushEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";
import {
  AI_ELEMAN_SUBJECT,
  aiElemanWhatsAppHref,
  type AiElemanDictionary,
} from "@/content/ai-eleman";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-3 py-3 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100";

export function AiElemanForm({
  locale,
  labels,
  whatsappText,
}: {
  locale: Locale;
  labels: AiElemanDictionary["form"];
  whatsappText: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const company = get("company");
    const message = get("message") || labels.defaultMessage;

    if (!name || !phone || !email || !email.includes("@")) {
      setStatus("error");
      setError(labels.requiredError);
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          company,
          subject: AI_ELEMAN_SUBJECT,
          message: `${message}\n\n— via upudev.nl/${locale}/ai-eleman (advertentie)`,
          website: get("website"),
          locale,
        }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.message ?? labels.networkError);
        return;
      }

      pushEvent({
        event: "quote_form_submit",
        form_location: "ai_eleman_form",
        form_subject: AI_ELEMAN_SUBJECT,
        locale,
      });
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_name: "ai-eleman-form",
          value: 50,
          currency: "EUR",
        });
      }
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setError(labels.networkError);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center md:p-12" role="status">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-emerald-950 md:text-2xl">{labels.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-900 md:text-base">{labels.successText}</p>
        <WhatsAppLink
          href={aiElemanWhatsAppHref(whatsappText)}
          source="ai-eleman-success"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#20bd5a]"
        >
          {labels.successWa}
        </WhatsAppLink>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm md:p-8"
    >
      {status === "error" && error ? (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.name} <span className="text-red-500">*</span>
          <input required name="name" type="text" maxLength={100} autoComplete="name" placeholder={labels.namePlaceholder} className={inputClass} />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.phone} <span className="text-red-500">*</span>
          <input required name="phone" type="tel" inputMode="tel" maxLength={40} autoComplete="tel" placeholder={labels.phonePlaceholder} className={inputClass} />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.email} <span className="text-red-500">*</span>
          <input required name="email" type="email" inputMode="email" maxLength={160} autoComplete="email" placeholder={labels.emailPlaceholder} className={inputClass} />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.company} <span className="font-normal text-neutral-400">{labels.optional}</span>
          <input name="company" type="text" maxLength={120} autoComplete="organization" placeholder={labels.companyPlaceholder} className={inputClass} />
        </label>
      </div>

      <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
        {labels.message} <span className="font-normal text-neutral-400">{labels.optional}</span>
        <textarea name="message" maxLength={2000} rows={3} placeholder={labels.messagePlaceholder} className={`${inputClass} resize-y`} />
      </label>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#122d54] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#0b1f3a] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
