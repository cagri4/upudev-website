"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

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
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setState("error");
        setMessage(data.message ?? "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        return;
      }

      setState("success");
      setMessage("Mesajınız iletildi. En kısa sürede dönüş yapacağız.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Bağlantı hatası oluştu. Lütfen tekrar deneyin.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          Ad Soyad
          <input
            required
            name="name"
            type="text"
            maxLength={100}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder="Adınız Soyadınız"
          />
        </label>

        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          E-posta
          <input
            required
            name="email"
            type="email"
            maxLength={160}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder="ornek@firma.com"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          Telefon
          <input
            name="phone"
            type="text"
            maxLength={40}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder="+31 ..."
          />
        </label>

        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          Firma
          <input
            name="company"
            type="text"
            maxLength={120}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            placeholder="Firma adı"
          />
        </label>
      </div>

      <label className="space-y-1.5 text-sm font-medium text-neutral-700">
        Konu
        <input
          required
          name="subject"
          type="text"
          maxLength={140}
          className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          placeholder="Proje talebi, revizyon, destek..."
        />
      </label>

      <label className="space-y-1.5 text-sm font-medium text-neutral-700">
        Mesaj
        <textarea
          required
          name="message"
          minLength={20}
          maxLength={2500}
          rows={6}
          className="w-full resize-y rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          placeholder="Projenizle ilgili detayları yazabilirsiniz."
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
          {state === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
        </button>

        {message ? (
          <p className={`text-sm ${state === "success" ? "text-emerald-700" : "text-red-600"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}

