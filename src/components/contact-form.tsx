"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";

type FormState = "idle" | "sending" | "success" | "error";

type ContactFormLabels = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  submit: string;
  sending: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  companyPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
};

export function ContactForm({ locale, labels }: { locale: Locale; labels: ContactFormLabels }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const messages =
    locale === "en"
      ? {
          fallback: "Message could not be sent. Please try again.",
          success: "Your message has been sent. We will get back to you shortly.",
          network: "A connection error occurred. Please try again.",
        }
      : locale === "nl"
        ? {
            fallback: "Bericht kon niet worden verzonden. Probeer opnieuw.",
            success: "Je bericht is verzonden. We nemen snel contact op.",
            network: "Er is een verbindingsfout opgetreden. Probeer opnieuw.",
          }
        : {
            fallback: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
            success: "Mesajınız iletildi. En kısa sürede dönüş yapacağız.",
            network: "Bağlantı hatası oluştu. Lütfen tekrar deneyin.",
          };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      locale,
    };

    const form = event.currentTarget;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setState("error");
        setMessage(data.message ?? messages.fallback);
        return;
      }

      setState("success");
      setMessage(messages.success);
      form.reset();
    } catch {
      setState("error");
      setMessage(messages.network);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.name}
          <input
            required
            name="name"
            type="text"
            maxLength={100}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder={labels.namePlaceholder}
          />
        </label>

        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.email}
          <input
            required
            name="email"
            type="email"
            maxLength={160}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder={labels.emailPlaceholder}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.phone}
          <input
            name="phone"
            type="text"
            maxLength={40}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder={labels.phonePlaceholder}
          />
        </label>

        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {labels.company}
          <input
            name="company"
            type="text"
            maxLength={120}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder={labels.companyPlaceholder}
          />
        </label>
      </div>

      <label className="space-y-1.5 text-sm font-medium text-neutral-700">
        {labels.subject}
        <input
          required
          name="subject"
          type="text"
          maxLength={140}
          className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          placeholder={labels.subjectPlaceholder}
        />
      </label>

      <label className="space-y-1.5 text-sm font-medium text-neutral-700">
        {labels.message}
        <textarea
          required
          name="message"
          minLength={20}
          maxLength={2500}
          rows={6}
          className="w-full resize-y rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          placeholder={labels.messagePlaceholder}
        />
      </label>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "sending" ? labels.sending : labels.submit}
        </button>

        {message ? (
          <p className={`text-sm ${state === "success" ? "text-emerald-700" : "text-red-600"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}
