import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Entry = { count: number; resetAt: number };
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 8;
const rateMap = new Map<string, Entry>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = rateMap.get(ip);
  if (!existing || existing.resetAt < now) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (existing.count >= LIMIT) return true;
  existing.count += 1;
  rateMap.set(ip, existing);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const fallbackMessage = "Sunucu hatası oluştu. Lütfen tekrar deneyin.";
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    const body = (await request.json()) as {
      name?: string;
      phone?: string;
      company?: string;
      sector?: string;
      priority?: string;
      message?: string;
      date?: string;
      time?: string;
      contactPreference?: string;
      formLocation?: string;
      website?: string;
      locale?: "tr" | "en" | "nl";
    };

    const locale = body.locale ?? "tr";
    const t = {
      rateLimit:
        locale === "en"
          ? "Too many attempts. Please try again later."
          : locale === "nl"
            ? "Te veel pogingen. Probeer het later opnieuw."
            : "Çok fazla deneme yaptınız. Lütfen sonra tekrar deneyin.",
      required:
        locale === "en"
          ? "Please fill in required fields."
          : locale === "nl"
            ? "Vul de verplichte velden in."
            : "Lütfen zorunlu alanları doldurun.",
      server:
        locale === "en"
          ? "Server error occurred. Please try again."
          : locale === "nl"
            ? "Er is een serverfout opgetreden. Probeer opnieuw."
            : fallbackMessage,
    };

    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, message: t.rateLimit }, { status: 429 });
    }

    const name = (body.name ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const company = (body.company ?? "").trim();
    const sector = (body.sector ?? "").trim();
    const priority = (body.priority ?? "").trim();
    const message = (body.message ?? "").trim();
    const date = (body.date ?? "").trim();
    const time = (body.time ?? "").trim();
    const contactPreference = (body.contactPreference ?? "").trim();
    const formLocation = (body.formLocation ?? "landing_form").trim().slice(0, 60);
    const website = (body.website ?? "").trim();

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !sector || !priority) {
      return NextResponse.json({ ok: false, message: t.required }, { status: 400 });
    }

    if (
      name.length > 100 ||
      phone.length > 40 ||
      company.length > 120 ||
      sector.length > 80 ||
      priority.length > 200 ||
      message.length > 2000 ||
      date.length > 20 ||
      time.length > 12 ||
      contactPreference.length > 60
    ) {
      return NextResponse.json({ ok: false, message: t.required }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    const isMeeting = formLocation === "toplanti_planla_modal" || Boolean(date || time);
    const logEntry = {
      source: "dijital-ekibiniz",
      formLocation,
      submittedAt,
      ip,
      locale,
      name,
      phone,
      company: company || null,
      sector,
      priority,
      message: message || null,
      date: date || null,
      time: time || null,
      contactPreference: contactPreference || null,
    };
    console.log("[landing-lead]", JSON.stringify(logEntry));

    const host = process.env.SMTP_HOST?.trim();
    const portStr = process.env.SMTP_PORT?.trim();
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();

    if (host && portStr && user && pass) {
      try {
        const port = Number(portStr);
        const secure = process.env.SMTP_SECURE?.trim() === "true" || port === 465;
        const to = process.env.LEADS_MAIL_TO?.trim() ?? process.env.MAIL_TO?.trim() ?? "info@upudev.nl";
        const from = process.env.MAIL_FROM?.trim() ?? user;

        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        });

        const subjectPrefix = isMeeting ? "Toplantı Talebi" : "Teklif Talebi";
        await transporter.sendMail({
          from,
          to,
          subject: `[UpuDev Lead] ${subjectPrefix} — ${name} (${sector})`,
          text: [
            `Yeni Landing Page lead'i — /dijital-ekibiniz (${formLocation})`,
            "",
            `Ad Soyad     : ${name}`,
            `Telefon      : ${phone}`,
            `Şirket       : ${company || "-"}`,
            `Sektör       : ${sector}`,
            `Öncelik      : ${priority}`,
            date ? `Tarih        : ${date}` : "",
            time ? `Saat         : ${time}` : "",
            contactPreference ? `İletişim     : ${contactPreference}` : "",
            message ? `\nMesaj:\n${message}` : "",
            "",
            `Dil          : ${locale}`,
            `IP           : ${ip}`,
            `Submitted At : ${submittedAt}`,
          ]
            .filter((line) => line !== "")
            .join("\n"),
          html: `
<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
        <tr><td style="background:#122d54;padding:24px 32px;color:#fff;">
          <p style="margin:0;font-size:12px;letter-spacing:1px;opacity:.7;text-transform:uppercase;">UpuDev Landing Lead · ${escapeHtml(formLocation)}</p>
          <h1 style="margin:4px 0 0;font-size:20px;">${escapeHtml(subjectPrefix)}</h1>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#18181b;">
            <tr><td style="padding:6px 0;width:140px;color:#71717a;">Ad Soyad</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:6px 0;color:#71717a;">Telefon</td><td style="padding:6px 0;"><a href="tel:${escapeHtml(phone)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(phone)}</a> · <a href="https://wa.me/${escapeHtml(phone.replace(/\D/g, ""))}" style="color:#16a34a;text-decoration:none;">WhatsApp</a></td></tr>
            <tr><td style="padding:6px 0;color:#71717a;">Şirket</td><td style="padding:6px 0;">${escapeHtml(company || "-")}</td></tr>
            <tr><td style="padding:6px 0;color:#71717a;">Sektör</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(sector)}</td></tr>
            <tr><td style="padding:6px 0;color:#71717a;">Öncelik</td><td style="padding:6px 0;">${escapeHtml(priority)}</td></tr>
            ${date ? `<tr><td style="padding:6px 0;color:#71717a;">Tercih Tarih</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(date)}${time ? " · " + escapeHtml(time) : ""}</td></tr>` : ""}
            ${contactPreference ? `<tr><td style="padding:6px 0;color:#71717a;">İletişim Tercihi</td><td style="padding:6px 0;">${escapeHtml(contactPreference)}</td></tr>` : ""}
            ${message ? `<tr><td colspan="2" style="padding:14px 0 6px;color:#71717a;">Mesaj</td></tr><tr><td colspan="2" style="padding:0 0 6px;font-size:14px;line-height:1.5;background:#fafafa;border-radius:8px;padding:14px;">${escapeHtml(message).replace(/\n/g, "<br/>")}</td></tr>` : ""}
            <tr><td style="padding:12px 0 6px;color:#71717a;">Dil / IP</td><td style="padding:12px 0 6px;font-size:12px;color:#71717a;">${escapeHtml(locale)} · ${escapeHtml(ip)}</td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#fafafa;padding:16px 32px;border-top:1px solid #e4e4e7;font-size:12px;color:#71717a;">
          Lead kaynağı: <strong>upudev.nl/${escapeHtml(locale)}/dijital-ekibiniz</strong> · ${escapeHtml(submittedAt)}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`,
        });
      } catch (mailError) {
        console.error("[landing-lead] mail error:", mailError instanceof Error ? mailError.message : mailError);
      }
    } else {
      console.warn("[landing-lead] SMTP not configured — lead recorded via log only.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Landing lead API error:", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, message: fallbackMessage }, { status: 500 });
  }
}
