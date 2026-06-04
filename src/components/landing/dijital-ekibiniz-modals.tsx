"use client";

import { FormEvent, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { pushEvent } from "@/lib/analytics";
import { Dialog } from "@/components/ui/dialog";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";
import type { DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

type FormStatus = "idle" | "sending" | "success" | "error";

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

type CommonProps = {
  locale: Locale;
  common: DijitalEkibinizDictionary["formCommon"];
};

type ModalType = "teklif" | "toplanti";

type CTAProps = {
  hero: DijitalEkibinizDictionary["hero"];
  whatsappHref: string;
  leadFormHref: string;
};

export function DijitalEkibinizCTAs({ hero, whatsappHref, leadFormHref }: CTAProps) {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
      <a
        href={leadFormHref}
        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400 md:text-base"
      >
        {hero.ctaPrimary}
      </a>
      <WhatsAppLink
        href={whatsappHref}
        source="hero"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
      >
        <span aria-hidden>💬</span> {hero.ctaWhatsapp}
      </WhatsAppLink>
    </div>
  );
}

function isoDate(daysFromToday: number) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + daysFromToday);
  return d.toISOString().slice(0, 10);
}

function validate(payload: { name: string; phone: string; sector: string; priority: string }, t: CommonProps["common"]): string | null {
  if (!payload.name || !payload.phone || !payload.sector || !payload.priority) return t.requiredError;
  if (payload.phone.replace(/\D/g, "").length < 7) return t.phoneError;
  return null;
}

function SharedFields({ common }: { common: CommonProps["common"] }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {common.nameLabel} <span className="text-red-500">*</span>
          <input
            required
            name="name"
            type="text"
            maxLength={100}
            autoComplete="name"
            placeholder={common.namePlaceholder}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {common.phoneLabel} <span className="text-red-500">*</span>
          <input
            required
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            inputMode="tel"
            placeholder={common.phonePlaceholder}
            className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          />
        </label>
      </div>

      <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
        {common.companyLabel}
        <input
          name="company"
          type="text"
          maxLength={120}
          autoComplete="organization"
          placeholder={common.companyPlaceholder}
          className="w-full rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {common.sectorLabel} <span className="text-red-500">*</span>
          <select
            required
            name="sector"
            defaultValue=""
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          >
            {common.sectorOptions.map((opt, i) => (
              <option key={opt} value={i === 0 ? "" : opt} disabled={i === 0}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5 text-sm font-medium text-neutral-700">
          {common.priorityLabel} <span className="text-red-500">*</span>
          <select
            required
            name="priority"
            defaultValue=""
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
          >
            {common.priorityOptions.map((opt, i) => (
              <option key={opt} value={i === 0 ? "" : opt} disabled={i === 0}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    </>
  );
}

function SuccessBlock({
  title,
  text,
  closeLabel,
  onClose,
}: {
  title: string;
  text: string;
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <div className="px-6 py-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="mt-4 text-base font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{text}</p>
      <button
        type="button"
        onClick={onClose}
        className="mt-6 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        {closeLabel}
      </button>
    </div>
  );
}

function TeklifAlModal({
  open,
  onClose,
  locale,
  common,
  labels,
}: {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  common: CommonProps["common"];
  labels: DijitalEkibinizDictionary["teklifModal"];
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleClose() {
    onClose();
    window.setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 200);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      sector: String(data.get("sector") ?? "").trim(),
      priority: String(data.get("priority") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
      formLocation: "teklif_al_modal",
      locale,
    };

    const err = validate(payload, common);
    if (err) {
      setStatus("error");
      setErrorMessage(err);
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads/dijital-ekibiniz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.message ?? common.error);
        return;
      }
      pushEvent({
        event: "quote_form_submit",
        form_location: "teklif_al_modal",
        form_subject: payload.priority,
        locale,
      });
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setErrorMessage(common.error);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title={labels.title}
      subtitle={labels.subtitle}
      closeLabel={labels.closeLabel}
      size="md"
    >
      {status === "success" ? (
        <SuccessBlock
          title={labels.successTitle}
          text={labels.successText}
          closeLabel={labels.closeLabel}
          onClose={handleClose}
        />
      ) : (
        <form onSubmit={onSubmit} className="space-y-4 px-6 py-6" noValidate>
          {status === "error" && errorMessage ? (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {errorMessage}
            </p>
          ) : null}
          <SharedFields common={common} />
          <label className="block space-y-1.5 text-sm font-medium text-neutral-700">
            {labels.messageLabel}
            <textarea
              name="message"
              maxLength={2000}
              rows={4}
              placeholder={labels.messagePlaceholder}
              className="w-full resize-y rounded-xl border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          >
            {status === "sending" ? common.sending : labels.submit}
          </button>
        </form>
      )}
    </Dialog>
  );
}

function ToplantiPlanlaModal({
  open,
  onClose,
  locale,
  common,
  labels,
}: {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  common: CommonProps["common"];
  labels: DijitalEkibinizDictionary["toplantiModal"];
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const dateBounds = useMemo(() => ({ min: isoDate(1), max: isoDate(14) }), []);

  function handleClose() {
    onClose();
    window.setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 200);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      sector: String(data.get("sector") ?? "").trim(),
      priority: String(data.get("priority") ?? "").trim(),
      date: String(data.get("date") ?? "").trim(),
      time: String(data.get("time") ?? "").trim(),
      contactPreference: String(data.get("contactPreference") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
      formLocation: "toplanti_planla_modal",
      locale,
    };

    const err = validate(payload, common);
    if (err) {
      setStatus("error");
      setErrorMessage(err);
      return;
    }
    if (!payload.date || !payload.time || !payload.contactPreference) {
      setStatus("error");
      setErrorMessage(common.requiredError);
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads/dijital-ekibiniz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.message ?? common.error);
        return;
      }
      pushEvent({
        event: "quote_form_submit",
        form_location: "toplanti_planla_modal",
        form_subject: payload.priority,
        locale,
      });
      pushEvent({
        event: "quote_form_submit",
        form_location: "meeting_requested",
        form_subject: `${payload.date} ${payload.time} · ${payload.contactPreference}`,
        locale,
      });
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
      setErrorMessage(common.error);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title={labels.title}
      subtitle={labels.subtitle}
      closeLabel={labels.closeLabel}
      size="lg"
    >
      {status === "success" ? (
        <SuccessBlock
          title={labels.successTitle}
          text={labels.successText}
          closeLabel={labels.closeLabel}
          onClose={handleClose}
        />
      ) : (
        <form onSubmit={onSubmit} className="space-y-4 px-6 py-6" noValidate>
          {status === "error" && errorMessage ? (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {errorMessage}
            </p>
          ) : null}
          <SharedFields common={common} />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1.5 text-sm font-medium text-neutral-700">
              {labels.dateLabel} <span className="text-red-500">*</span>
              <input
                required
                name="date"
                type="date"
                min={dateBounds.min}
                max={dateBounds.max}
                defaultValue={dateBounds.min}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
              />
              <span className="block text-xs font-normal text-neutral-500">{labels.dateHelp}</span>
            </label>

            <label className="space-y-1.5 text-sm font-medium text-neutral-700">
              {labels.timeLabel} <span className="text-red-500">*</span>
              <select
                required
                name="time"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-neutral-500"
              >
                <option value="" disabled>
                  {labels.timePlaceholder}
                </option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-neutral-700">
              {labels.contactPreferenceLabel} <span className="text-red-500">*</span>
            </legend>
            <div className="grid gap-2 md:grid-cols-3">
              {labels.contactPreferenceOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-700 transition has-[:checked]:border-[#122d54] has-[:checked]:bg-[#122d54]/5 has-[:checked]:text-[#122d54]"
                >
                  <input
                    required
                    type="radio"
                    name="contactPreference"
                    value={opt.value}
                    className="h-4 w-4 accent-[#122d54]"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
          >
            {status === "sending" ? common.sending : labels.submit}
          </button>
        </form>
      )}
    </Dialog>
  );
}
