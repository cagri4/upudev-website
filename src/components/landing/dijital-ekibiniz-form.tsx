"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { pushEvent } from "@/lib/analytics";
import type { DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

type FormState = "idle" | "sending" | "success" | "error";

export function DijitalEkibinizForm({
  locale,
  labels,
}: {
  locale: Locale;
  labels: DijitalEkibinizDictionary["form"];
}) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      sector: String(formData.get("sector") ?? "").trim(),
      priority: String(formData.get("priority") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      locale,
    };

    if (!payload.name || !payload.phone || !payload.sector || !payload.priority) {
      setState("error");
      setMessage(labels.requiredError);
      return;
    }

    const phoneDigits = payload.phone.replace(/[^\d+]/g, "");
    if (phoneDigits.replace(/\D/g, "").length < 7) {
      setState("error");
      setMessage(labels.phoneError);
      return;
    }

    setState("sending");

    try {
      const response = await fetch("/api/leads/dijital-ekibiniz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({ ok: false }))) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        setState("error");
        setMessage(data.message ?? labels.error);
        return;
      }

      setState("success");
      setMessage(labels.success);
      pushEvent({
        event: "quote_form_submit",
        form_location: "dijital_ekibiniz_landing",
        form_subject: payload.priority,
        locale,
      });
      formEl.reset();
    } catch {
      setState("error");
      setMessage(labels.error);
    }
  }

  if (state === "success") {
    return (
      <div
        id="form"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center md:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-emerald-900">{labels.success}</h3>
        <p className="mt-2 text-sm text-emerald-800">{labels.subtitle}</p>
      </div>
    );
  }

  return (
    <form
      id="form"
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="space-y-1.5">
        <h3 className="text-xl font-semibold text-neutral-900 md:text-2xl">{labels.title}</h3>
        <p className="text-sm text-neutral-600">{labels.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.nameLabel} <span className="text-red-500">*</span>
          <input
            required
            name="name"
            type="text"
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder={labels.namePlaceholder}
          />
        </label>

        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.phoneLabel} <span className="text-red-500">*</span>
          <input
            required
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            inputMode="tel"
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder={labels.phonePlaceholder}
          />
        </label>
      </div>

      <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
        {labels.companyLabel}
        <input
          name="company"
          type="text"
          maxLength={120}
          autoComplete="organization"
          className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          placeholder={labels.companyPlaceholder}
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.sectorLabel} <span className="text-red-500">*</span>
          <select
            required
            name="sector"
            defaultValue=""
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          >
            {labels.sectorOptions.map((opt, i) => (
              <option key={opt} value={i === 0 ? "" : opt} disabled={i === 0}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.priorityLabel} <span className="text-red-500">*</span>
          <select
            required
            name="priority"
            defaultValue=""
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          >
            {labels.priorityOptions.map((opt, i) => (
              <option key={opt} value={i === 0 ? "" : opt} disabled={i === 0}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          {state === "sending" ? labels.sending : labels.submit}
        </button>

        {message ? (
          <p
            className={`text-sm ${state === "error" ? "text-red-600" : "text-neutral-600"}`}
            role="alert"
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
