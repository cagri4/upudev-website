"use client";

import { FormEvent, useState } from "react";
import { pushEvent } from "@/lib/analytics";

/**
 * Kişiye özel demo formu: naam + e-mail + taak → POST /api/contact (mevcut SMTP lead yolu, MAIL_TO).
 * Başarıda GTM quote_form_submit (form_location = formLocation).
 */
type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-3 py-3 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100";

export function DemoTaskForm({ subject, formLocation, pagePath }: { subject: string; formLocation: string; pagePath: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const task = get("task");

    if (!name || !email || !email.includes("@") || !task) {
      setStatus("error");
      setError("Vul je naam, e-mail en een korte omschrijving van de taak in.");
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
          email,
          company: "MCC Agency",
          subject,
          message: `Taak:\n${task}\n\n— via upudev.nl${pagePath}`,
          website: get("website"),
          locale: "nl",
        }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.message ?? "Er ging iets mis. Probeer het opnieuw of stuur me een WhatsApp.");
        return;
      }
      pushEvent({ event: "quote_form_submit", form_location: formLocation, form_subject: subject, locale: "nl" });
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setError("Er ging iets mis met de verbinding. Probeer het opnieuw of stuur me een WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center" role="status">
        <p className="text-xl font-semibold text-emerald-950">Dank je! Ik heb je taak ontvangen.</p>
        <p className="mt-2 text-emerald-900">Ik maak er een voorbeeld van en neem contact met je op.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
      {status === "error" && error ? (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          Naam <span className="text-red-500">*</span>
          <input required name="name" type="text" maxLength={100} autoComplete="name" placeholder="Je naam" className={inputClass} />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          E-mail <span className="text-red-500">*</span>
          <input required name="email" type="email" inputMode="email" maxLength={160} autoComplete="email" placeholder="naam@bureau.nl" className={inputClass} />
        </label>
      </div>
      <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
        De taak <span className="text-red-500">*</span>
        <textarea
          required
          name="task"
          maxLength={2000}
          rows={4}
          placeholder="Bijvoorbeeld: elke week captions en een postplanning voor 5 klanten klaarzetten…"
          className={`${inputClass} resize-y`}
        />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#122d54] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#0b1f3a] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Bezig met verzenden…" : "Beschrijf je taak"}
      </button>
    </form>
  );
}
