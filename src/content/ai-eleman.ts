import type { Locale } from "@/lib/i18n";

/**
 * /[locale]/ai-eleman — "AI Eleman / AI-medewerker" reel reklamı landing'i.
 * NL birincil (reklam NL). Metin reklam vaadiyle birebir eşleşmeli —
 * hero/rozet/WA mesajını değiştirirken reklam kreatifini de kontrol et.
 */

export const AI_ELEMAN_WHATSAPP_NUMBER = "31611352773";

/** Form → /api/contact "subject" alanı (mail konusu: "[UpuDev] AI Eleman — gratis maand"). */
export const AI_ELEMAN_SUBJECT = "AI Eleman — gratis maand";

export type AiElemanDictionary = {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    whatsappCta: string;
    formCta: string;
    trust: string;
  };
  whatsappText: string;
  features: { title: string; items: { icon: string; title: string; text: string }[] };
  form: {
    sectionId: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    email: string;
    company: string;
    message: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    optional: string;
    defaultMessage: string;
    submit: string;
    sending: string;
    requiredError: string;
    networkError: string;
    successTitle: string;
    successText: string;
    successWa: string;
  };
  closing: { title: string; text: string; whatsappCta: string; formCta: string };
  copyright: string;
};

const nl: AiElemanDictionary = {
  meta: {
    title: "Je AI-medewerker — eerste maand gratis | UpuDev",
    description:
      "Jij runt je zaak, je AI-medewerker regelt de rest: berichten, afspraken en facturen 24/7. Social media en website altijd up-to-date. Eerste maand gratis.",
  },
  hero: {
    badge: "Eerste maand gratis",
    title: "Jij runt je zaak. Je AI-medewerker regelt de rest.",
    subtitle:
      "Berichten, afspraken en facturen — 24/7 geregeld. Je social media en website altijd up-to-date.",
    whatsappCta: "Start via WhatsApp",
    formCta: "Liever een formulier?",
    trust: "Binnen een paar minuten antwoord · Nederlands en Turks",
  },
  whatsappText: "Hoi, ik wil meer weten over de AI-medewerker (gratis maand).",
  features: {
    title: "Wat doet je AI-medewerker?",
    items: [
      { icon: "💬", title: "Klantberichten, 24/7", text: "Beantwoordt WhatsApp, Instagram en mail — ook 's avonds en in het weekend." },
      { icon: "📅", title: "Afspraken plannen", text: "Plant, verzet en bevestigt afspraken in je agenda, zonder heen-en-weer bellen." },
      { icon: "🧾", title: "Facturen", text: "Maakt facturen en offertes klaar en herinnert klanten aan openstaande betalingen." },
      { icon: "📣", title: "Social media posts", text: "Bedenkt en plaatst posts, zodat je online zichtbaar blijft." },
      { icon: "🌐", title: "Website actueel", text: "Openingstijden, prijzen en aanbiedingen altijd up-to-date." },
    ],
  },
  form: {
    sectionId: "gratis-maand",
    eyebrow: "Geen WhatsApp? Geen probleem",
    title: "Vraag je gratis maand aan",
    subtitle: "Laat je gegevens achter, we nemen binnen één werkdag contact op.",
    name: "Naam",
    phone: "Telefoon",
    email: "E-mail",
    company: "Bedrijf",
    message: "Bericht",
    namePlaceholder: "Je naam",
    phonePlaceholder: "06 12345678",
    emailPlaceholder: "naam@bedrijf.nl",
    companyPlaceholder: "Naam van je zaak",
    messagePlaceholder: "Waar kan je AI-medewerker je mee helpen?",
    optional: "(optioneel)",
    defaultMessage: "Ik wil graag de gratis maand van de AI-medewerker aanvragen.",
    submit: "Vraag je gratis maand aan",
    sending: "Bezig met verzenden…",
    requiredError: "Vul je naam, telefoon en e-mail in.",
    networkError: "Er is een verbindingsfout opgetreden. Probeer opnieuw of stuur ons een WhatsApp.",
    successTitle: "Bedankt! We nemen snel contact op.",
    successText: "Geen zin om te wachten? Stuur ons direct een WhatsApp.",
    successWa: "WhatsApp ons nu",
  },
  closing: {
    title: "Probeer je AI-medewerker een maand gratis.",
    text: "Geen installatie, geen gedoe. Eén bericht en we regelen de rest.",
    whatsappCta: "Start via WhatsApp",
    formCta: "Demo aanvragen",
  },
  copyright: "© 2026 UpuDev. Alle rechten voorbehouden.",
};

const en: AiElemanDictionary = {
  meta: {
    title: "Your AI employee — first month free | UpuDev",
    description:
      "You run your business, your AI employee handles the rest: messages, appointments and invoices 24/7. Social media and website always up to date. First month free.",
  },
  hero: {
    badge: "First month free",
    title: "You run your business. Your AI employee handles the rest.",
    subtitle:
      "Messages, appointments and invoices — handled 24/7. Your social media and website always up to date.",
    whatsappCta: "Start on WhatsApp",
    formCta: "Prefer a form?",
    trust: "Reply within minutes · Dutch, English and Turkish",
  },
  whatsappText: "Hi, I'd like to know more about the AI employee (free month).",
  features: {
    title: "What does your AI employee do?",
    items: [
      { icon: "💬", title: "Customer messages, 24/7", text: "Answers WhatsApp, Instagram and email — evenings and weekends too." },
      { icon: "📅", title: "Scheduling appointments", text: "Books, moves and confirms appointments in your calendar." },
      { icon: "🧾", title: "Invoices", text: "Prepares invoices and quotes and reminds customers of open payments." },
      { icon: "📣", title: "Social media posts", text: "Writes and publishes posts so you stay visible online." },
      { icon: "🌐", title: "Website up to date", text: "Opening hours, prices and offers always current." },
    ],
  },
  form: {
    sectionId: "gratis-maand",
    eyebrow: "No WhatsApp? No problem",
    title: "Claim your free month",
    subtitle: "Leave your details and we'll get back to you within one business day.",
    name: "Name",
    phone: "Phone",
    email: "Email",
    company: "Company",
    message: "Message",
    namePlaceholder: "Your name",
    phonePlaceholder: "+31 6 12345678",
    emailPlaceholder: "name@company.com",
    companyPlaceholder: "Your business name",
    messagePlaceholder: "What should your AI employee help you with?",
    optional: "(optional)",
    defaultMessage: "I'd like to claim the free month of the AI employee.",
    submit: "Claim your free month",
    sending: "Sending…",
    requiredError: "Please fill in your name, phone and email.",
    networkError: "A connection error occurred. Please try again or message us on WhatsApp.",
    successTitle: "Thanks! We'll be in touch soon.",
    successText: "Don't want to wait? Message us on WhatsApp right away.",
    successWa: "WhatsApp us now",
  },
  closing: {
    title: "Try your AI employee free for a month.",
    text: "No installation, no hassle. One message and we handle the rest.",
    whatsappCta: "Start on WhatsApp",
    formCta: "Request a demo",
  },
  copyright: "© 2026 UpuDev. All rights reserved.",
};

const tr: AiElemanDictionary = {
  meta: {
    title: "AI Elemanınız — ilk ay ücretsiz | UpuDev",
    description:
      "Siz işinizi yönetin, AI elemanınız gerisini halletsin: mesajlar, randevular ve faturalar 7/24. Sosyal medya ve web siteniz hep güncel. İlk ay ücretsiz.",
  },
  hero: {
    badge: "İlk ay ücretsiz",
    title: "Siz işinizi yönetin. AI elemanınız gerisini halletsin.",
    subtitle:
      "Mesajlar, randevular ve faturalar — 7/24 halledilir. Sosyal medyanız ve web siteniz hep güncel.",
    whatsappCta: "WhatsApp'tan başlayın",
    formCta: "Form mu tercih edersiniz?",
    trust: "Dakikalar içinde yanıt · Türkçe ve Felemenkçe",
  },
  whatsappText: "Merhaba, AI eleman (ücretsiz ay) hakkında bilgi almak istiyorum.",
  features: {
    title: "AI elemanınız ne yapar?",
    items: [
      { icon: "💬", title: "Müşteri mesajları, 7/24", text: "WhatsApp, Instagram ve e-postaları yanıtlar — akşam ve hafta sonu da." },
      { icon: "📅", title: "Randevu planlama", text: "Randevuları ajandanıza işler, erteler ve onaylar." },
      { icon: "🧾", title: "Faturalar", text: "Fatura ve teklifleri hazırlar, açık ödemeleri hatırlatır." },
      { icon: "📣", title: "Sosyal medya paylaşımları", text: "Paylaşımları hazırlar ve yayınlar, online görünür kalırsınız." },
      { icon: "🌐", title: "Güncel web sitesi", text: "Çalışma saatleri, fiyatlar ve kampanyalar hep güncel." },
    ],
  },
  form: {
    sectionId: "gratis-maand",
    eyebrow: "WhatsApp kullanmıyor musunuz? Sorun değil",
    title: "Ücretsiz ayınızı talep edin",
    subtitle: "Bilgilerinizi bırakın, bir iş günü içinde dönüş yapalım.",
    name: "Ad Soyad",
    phone: "Telefon",
    email: "E-posta",
    company: "Firma",
    message: "Mesaj",
    namePlaceholder: "Adınız",
    phonePlaceholder: "06 12345678",
    emailPlaceholder: "ad@firma.nl",
    companyPlaceholder: "İşletmenizin adı",
    messagePlaceholder: "AI elemanınız size hangi konuda yardım etsin?",
    optional: "(isteğe bağlı)",
    defaultMessage: "AI elemanın ücretsiz ayını talep etmek istiyorum.",
    submit: "Ücretsiz ayınızı talep edin",
    sending: "Gönderiliyor…",
    requiredError: "Lütfen ad, telefon ve e-posta alanlarını doldurun.",
    networkError: "Bağlantı hatası oluştu. Tekrar deneyin ya da WhatsApp'tan yazın.",
    successTitle: "Teşekkürler! En kısa sürede dönüş yapacağız.",
    successText: "Beklemek istemiyor musunuz? Hemen WhatsApp'tan yazın.",
    successWa: "Şimdi WhatsApp'tan yazın",
  },
  closing: {
    title: "AI elemanınızı bir ay ücretsiz deneyin.",
    text: "Kurulum yok, uğraş yok. Tek mesaj, gerisini biz hallederiz.",
    whatsappCta: "WhatsApp'tan başlayın",
    formCta: "Demo talep edin",
  },
  copyright: "© 2026 UpuDev. Tüm hakları saklıdır.",
};

const dictionaries: Record<Locale, AiElemanDictionary> = { nl, en, tr };

export function getAiElemanDictionary(locale: Locale): AiElemanDictionary {
  return dictionaries[locale] ?? nl;
}

export function aiElemanWhatsAppHref(text: string): string {
  return `https://wa.me/${AI_ELEMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
