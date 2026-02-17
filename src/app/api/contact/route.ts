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
  let serverMessage = "Sunucu hatasi olustu. Lutfen tekrar deneyin.";
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      company?: string;
      subject?: string;
      message?: string;
      website?: string;
      locale?: "tr" | "en" | "nl";
    };
    const locale = body.locale ?? "tr";
    const isEn = locale === "en";
    const isNl = locale === "nl";

    const t = {
      rateLimit: isEn
        ? "Too many attempts. Please try again later."
        : isNl
          ? "Te veel pogingen. Probeer het later opnieuw."
          : "Çok fazla deneme yaptınız. Lütfen sonra tekrar deneyin.",
      required: isEn
        ? "Please fill in required fields."
        : isNl
          ? "Vul de verplichte velden in."
          : "Lütfen zorunlu alanları doldurun.",
      limits: isEn
        ? "Input length limits were exceeded."
        : isNl
          ? "De invoerlimieten zijn overschreden."
          : "Gönderilen veri sınırları aşıldı.",
      email: isEn ? "Please enter a valid email." : isNl ? "Voer een geldig e-mailadres in." : "Geçerli bir e-posta girin.",
      server:
        isEn
          ? "Server error occurred. Please try again."
          : isNl
            ? "Er is een serverfout opgetreden. Probeer opnieuw."
            : "Sunucu hatasi olustu. Lutfen tekrar deneyin.",
    };
    serverMessage = t.server;

    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, message: t.rateLimit }, { status: 429 });
    }

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
      return NextResponse.json({ ok: false, message: t.required }, { status: 400 });
    }

    if (name.length > 100 || email.length > 160 || subject.length > 140 || message.length > 2500) {
      return NextResponse.json({ ok: false, message: t.limits }, { status: 400 });
    }

    if (!email.includes("@")) {
      return NextResponse.json({ ok: false, message: t.email }, { status: 400 });
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
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="background-color:#18181b;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:600;">Yeni İletişim Formu</h1>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Ad Soyad</p>
                    <p style="margin:0;font-size:16px;color:#18181b;font-weight:500;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 0;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">E-posta</p>
                    <p style="margin:0;font-size:16px;color:#18181b;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></p>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding:24px 0;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Telefon</p>
                    <p style="margin:0;font-size:16px;color:#18181b;"><a href="tel:${phone}" style="color:#2563eb;text-decoration:none;">${phone}</a></p>
                  </td>
                </tr>
                ` : ""}
                ${company ? `
                <tr>
                  <td style="padding:24px 0;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Firma</p>
                    <p style="margin:0;font-size:16px;color:#18181b;font-weight:500;">${company}</p>
                  </td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding:24px 0;border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Konu</p>
                    <p style="margin:0;font-size:16px;color:#18181b;font-weight:500;">${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:24px;">
                    <p style="margin:0 0 12px;font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Mesaj</p>
                    <div style="background-color:#fafafa;border-radius:8px;padding:20px;font-size:15px;color:#27272a;line-height:1.6;">
                      ${message.replace(/\n/g, "<br/>")}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#fafafa;padding:24px 40px;text-align:center;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:13px;color:#71717a;">Bu mesaj <strong>upudev.nl</strong> iletişim formu üzerinden gönderildi.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, message: serverMessage }, { status: 500 });
  }
}
