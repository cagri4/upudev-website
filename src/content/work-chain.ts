import type { Locale } from "@/lib/i18n";

/**
 * "Hij zet klaar, jij keurt goed" — uçtan uca iş zinciri + güvence + mevcut sistemler (15 Kas 2026, Çağrı onayı).
 * Konsept referansı Repetive (ilham, klon değil): süreç zinciri · "hiçbir şeyi değiştirmen gerekmez" · emin değilse durur.
 *
 * DİL KURALI (IND iş planı G.5 "geen uitzendconstructie, geen detachering"): AI "işi/insanın işini devralmaz";
 * hazırlar, insan onaylar. "uitzendbureau", "huren", "neemt werk over", "in dienst" KULLANMA.
 *
 * Sistemler: yalnız sitede zaten söylenen sistem TÜRLERİ (metin). Marka LOGOSU yok — hangi sistemlere gerçekten
 * bağlandığımız rc/Çağrı'dan onaylanınca `logos` doldurulur. Onaysız logo koyma.
 */
export type WorkChainDictionary = {
  eyebrow: string;
  title: string;
  /** Slogan hero'da zaten H1 olan sayfalarda (ana sayfa, ai-eleman) tekrar olmasın diye zincir başlığı. */
  altTitle: string;
  intro: string;
  steps: { label: string; title: string; text: string; human?: boolean }[];
  doubt: { title: string; text: string };
  systems: { title: string; text: string; items: string[] };
};

const nl: WorkChainDictionary = {
  eyebrow: "Zo werkt een AI-medewerker",
  title: "Hij zet klaar, jij keurt goed.",
  altTitle: "Van binnenkomst tot verzonden of geboekt",
  intro: "De AI-medewerker doet het voorwerk, jij houdt de beslissing. Jij bepaalt wat hij zelf mag afronden.",
  steps: [
    { label: "01", title: "Binnenkomst", text: "Een bestelling via WhatsApp, een factuur in je mail, een voicemail." },
    { label: "02", title: "AI zet klaar", text: "Hij leest het en zet een orderregel of boeking klaar in je eigen systeem." },
    { label: "03", title: "Jij keurt goed", text: "Je kijkt het na en keurt goed. Klopt iets niet, dan pas je het aan.", human: true },
    { label: "04", title: "Verzonden of geboekt", text: "De bevestiging gaat naar je klant, de factuur staat in je boekhouding." },
  ],
  doubt: {
    title: "Twijfelt hij? Dan stopt hij en vraagt het jou.",
    text: "Een onbekend product, een prijs die afwijkt, een klant die hij niet kent: hij gaat niet gokken. Hij legt het aan jou voor.",
  },
  systems: {
    title: "Werkt in je bestaande systemen — je hoeft niets te veranderen.",
    text: "Wij richten de AI-medewerker in binnen de software die je al gebruikt en beheren hem op abonnementsbasis.",
    items: ["WhatsApp", "E-mail", "Pdf-facturen", "Je boekhoudpakket", "Je kassasysteem", "Je order- of ERP-systeem"],
  },
};

const tr: WorkChainDictionary = {
  eyebrow: "Bir AI eleman nasıl çalışır",
  title: "O hazırlar, siz onaylarsınız.",
  altTitle: "İşin gelişinden gönderilmesine kadar",
  intro: "Ön hazırlığı AI eleman yapar, karar sizde kalır. Neyi kendisinin tamamlayabileceğine siz karar verirsiniz.",
  steps: [
    { label: "01", title: "İş gelir", text: "WhatsApp'tan bir sipariş, mailde bir fatura, bir sesli mesaj." },
    { label: "02", title: "AI hazırlar", text: "Okur ve sipariş satırını ya da kaydı kendi sisteminizde hazırlar." },
    { label: "03", title: "Siz onaylarsınız", text: "Kontrol edip onaylarsınız. Bir şey yanlışsa düzeltirsiniz.", human: true },
    { label: "04", title: "Gönderildi / işlendi", text: "Onay müşterinize gider, fatura muhasebenize işlenir." },
  ],
  doubt: {
    title: "Emin değil mi? Durur ve size sorar.",
    text: "Tanımadığı bir ürün, farklı bir fiyat, bilmediği bir müşteri: tahmin yürütmez. Size sorar.",
  },
  systems: {
    title: "Mevcut sistemlerinizde çalışır — hiçbir şeyi değiştirmeniz gerekmez.",
    text: "AI elemanı zaten kullandığınız yazılımın içinde kurarız ve abonelikle yönetiriz.",
    items: ["WhatsApp", "E-posta", "PDF faturalar", "Muhasebe programınız", "Kasa sisteminiz", "Sipariş / ERP sisteminiz"],
  },
};

const en: WorkChainDictionary = {
  eyebrow: "How an AI employee works",
  title: "It prepares, you approve.",
  altTitle: "From incoming to sent or booked",
  intro: "The AI employee does the groundwork, you keep the decision. You decide what it may finish on its own.",
  steps: [
    { label: "01", title: "Incoming", text: "An order via WhatsApp, an invoice in your mail, a voicemail." },
    { label: "02", title: "AI prepares", text: "It reads it and prepares an order line or booking in your own system." },
    { label: "03", title: "You approve", text: "You check and approve. Something off? You adjust it.", human: true },
    { label: "04", title: "Sent or booked", text: "The confirmation goes to your customer, the invoice is in your books." },
  ],
  doubt: {
    title: "In doubt? It stops and asks you.",
    text: "An unknown product, a price that differs, a customer it doesn't know: it doesn't guess. It asks you.",
  },
  systems: {
    title: "Works in your existing systems — you don't have to change anything.",
    text: "We set up the AI employee inside the software you already use and manage it on a subscription basis.",
    items: ["WhatsApp", "Email", "PDF invoices", "Your accounting software", "Your POS", "Your order or ERP system"],
  },
};

const DICTS: Record<Locale, WorkChainDictionary> = { nl, tr, en };

export function getWorkChain(locale: Locale): WorkChainDictionary {
  return DICTS[locale];
}
