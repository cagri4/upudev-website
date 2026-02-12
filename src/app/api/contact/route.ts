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

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, message: "Çok fazla deneme yaptınız. Lütfen sonra tekrar deneyin." }, { status: 429 });
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      company?: string;
      subject?: string;
      message?: string;
      website?: string;
    };

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const company = (body.company ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();
    const website = (body.website ?? "").trim();

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, message: "Lütfen zorunlu alanları doldurun." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 160 || subject.length > 140 || message.length > 2500) {
      return NextResponse.json({ ok: false, message: "Gönderilen veri sınırları aşıldı." }, { status: 400 });
    }

    if (!email.includes("@")) {
      return NextResponse.json({ ok: false, message: "Geçerli bir e-posta girin." }, { status: 400 });
    }

    const host = requiredEnv("SMTP_HOST");
    const port = Number(requiredEnv("SMTP_PORT"));
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const to = process.env.MAIL_TO ?? "info@upudev.nl";
    const from = process.env.MAIL_FROM ?? user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[UpuDev] ${subject}`,
      text: [
        `Ad Soyad: ${name}`,
        `E-posta: ${email}`,
        `Telefon: ${phone || "-"}`,
        `Firma: ${company || "-"}`,
        "",
        "Mesaj:",
        message,
      ].join("\n"),
      html: `
        <h2>Yeni Iletisim Formu</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Firma:</strong> ${company || "-"}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ ok: false, message: "Sunucu hatasi olustu. Lutfen tekrar deneyin." }, { status: 500 });
  }
}

