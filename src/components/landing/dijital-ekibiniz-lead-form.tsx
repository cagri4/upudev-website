"use client";

/**
 * /[locale]/dijital-ekibiniz INLINE lead form.
 *
 * Çağrı satış modeli: reklam → toplantı → ihtiyaç analizi → özel paket.
 * Form modal değil, sayfaya yerleşik — Meta/Google Ads landing CR'ı için
 * "sayfayı terk etme" tetikleyicisi azaltır. 3 CTA banner (hero/mid/end)
 * #lead-form anchor ile bu component'e smooth-scroll yapar.
 *
 * Tracking:
 *   - GA4 quote_form_submit (sektor + ihtiyac[] payload'lı)
 *   - Meta Pixel Lead (value €50, currency EUR, content_category=sektor)
 *   analytics.ts `pushEvent` mirror'ı ikisini de tek çağrıda yapar.
 */

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { pushEvent } from "@/lib/analytics";
import type { DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

type Status = "idle" | "sending" | "success" | "error";

type Props = {
  locale: Locale;
  labels: DijitalEkibinizDictionary["leadForm"];
};

export function DijitalEkibinizLeadForm({ locale, labels }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);

  function toggleService(value: string) {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value],
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const sector = String(data.get("sector") ?? "").trim();
    const currentTools = String(data.get("currentTools") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const kvkkConsent = data.get("kvkkConsent") === "on";
    const website = String(data.get("website") ?? "").trim();

    if (!name || !email || !sector) {
      setStatus("error");
      setErrorMessage(labels.requiredError);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage(labels.emailError);
      return;
    }
    if (services.length === 0) {
      setStatus("error");
      setErrorMessage(labels.servicesError);
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
          email,
          phone,
          company,
          sector,
          services,
          currentTools,
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
        ihtiyac: services,
        locale,
      });
      setStatus("success");
      formEl.reset();
      setServices([]);
    } catch {
      setStatus("error");
      setErrorMessage(labels.requiredError);
    }
  }

  if (status === "success") {
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
          href={labels.successCtaHref}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          {labels.successCtaLabel}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-7 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
    >
      {status === "error" && errorMessage ? (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage}
        </p>
      ) : null}

      <fieldset className="space-y-4">
        <legend className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {labels.groupPersonal}
        </legend>

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
            {labels.emailLabel} <span className="text-red-500">*</span>
            <input
              required
              name="email"
              type="email"
              maxLength={160}
              autoComplete="email"
              inputMode="email"
              placeholder={labels.emailPlaceholder}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1.5 text-sm font-medium text-neutral-700">
            {labels.phoneLabel}
            <input
              name="phone"
              type="tel"
              maxLength={40}
              autoComplete="tel"
              inputMode="tel"
              placeholder={labels.phonePlaceholder}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <label className="space-y-1.5 text-sm font-medium text-neutral-700">
            {labels.companyLabel}
            <input
              name="company"
              type="text"
              maxLength={120}
              autoComplete="organization"
              placeholder={labels.companyPlaceholder}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {labels.groupNeeds}
        </legend>

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

        <div className="space-y-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm font-medium text-neutral-700">
            <span>
              {labels.servicesLabel} <span className="text-red-500">*</span>
            </span>
            <span className="text-xs font-normal text-neutral-500">
              {labels.servicesHint}
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {labels.servicesOptions.map((opt) => {
              const checked = services.includes(opt);
              return (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-start gap-2.5 rounded-xl border px-3 py-2.5 text-sm transition ${
                    checked
                      ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                      : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={opt}
                    checked={checked}
                    onChange={() => toggleService(opt)}
                    className="mt-0.5 h-4 w-4 accent-emerald-600"
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        </div>

        <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.currentToolsLabel}
          <input
            name="currentTools"
            type="text"
            maxLength={200}
            placeholder={labels.currentToolsPlaceholder}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </label>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {labels.groupExtra}
        </legend>
        <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.messageLabel}
          <textarea
            name="message"
            maxLength={2000}
            rows={4}
            placeholder={labels.messagePlaceholder}
            className="w-full resize-y rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </label>
      </fieldset>

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

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:text-base"
      >
        {status === "sending" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
