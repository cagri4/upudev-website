import type { Locale } from "@/lib/i18n";

/**
 * "Wij zetten klaar, jij keurt goed" — uçtan uca iş zinciri + güvence + mevcut sistemler (15 Kas 2026, Çağrı onayı).
 * Konsept referansı Repetive (ilham, klon değil): süreç zinciri · "hiçbir şeyi değiştirmen gerekmez" · emin değilse durur.
 *
 * DİL KURALI (IND iş planı G.5 "geen uitzendconstructie, geen detachering"): AI "işi/insanın işini devralmaz";
 * hazırlar, insan onaylar. "uitzendbureau", "huren", "neemt werk over", "in dienst" KULLANMA.
 *
 * Sistem LOGOLARI: yalnız Çağrı'nın onayladığı liste (15 Kas 2026, rc). Dosyalar public/logos/systems/ (kaynak: KAYNAK.md).
 * Listeye yeni logo eklemeden önce onay al. `items` = logosu olmayan genel sistem türleri ("en ook").
 */
/**
 * `big`: dosyasında iç boşluk olan logo (WhatsApp) — karoda diğerleriyle aynı görünsün diye büyütülür.
 * `tone`: gri (monokrom) hâlde ton eşitleme — saf siyah logo "dark" (daha soluk), açık renkli logo "light" (koyulaştırılır).
 */
export const SYSTEM_LOGOS: { name: string; src: string; big?: boolean; tone?: "dark" | "light" }[] = [
  { name: "e-Boekhouden", src: "/logos/systems/e-boekhouden-64.webp" },
  { name: "Exact", src: "/logos/systems/exact.svg" },
  { name: "WhatsApp", src: "/logos/systems/whatsapp.svg", big: true },
  { name: "Gmail", src: "/logos/systems/gmail.svg" },
  { name: "Outlook", src: "/logos/systems/outlook.svg" },
  { name: "Microsoft", src: "/logos/systems/microsoft.svg" },
  { name: "Meta", src: "/logos/systems/meta.svg" },
  { name: "Facebook", src: "/logos/systems/facebook.svg" },
  { name: "Instagram", src: "/logos/systems/instagram.svg" },
  { name: "Linux", src: "/logos/systems/linux.svg" },
  { name: "Claude (Anthropic)", src: "/logos/systems/claude.svg" },
  { name: "Higgsfield", src: "/logos/systems/higgsfield-64.webp", tone: "light" },
  { name: "Replicate", src: "/logos/systems/replicate.svg", tone: "dark" },
];
export type WorkChainDictionary = {
  eyebrow: string;
  title: string;
  /** Slogan hero'da zaten H1 olan sayfalarda (ana sayfa, ai-eleman) tekrar olmasın diye zincir başlığı. */
  altTitle: string;
  intro: string;
  steps: { label: string; title: string; text: string; human?: boolean }[];
  doubt: { title: string; text: string };
  systems: { title: string; text: string; alsoLabel: string; items: string[] };
};

const nl: WorkChainDictionary = {
  eyebrow: "Zo werkt een AI-medewerker",
  title: "Wij zetten klaar. Jij keurt goed.",
  altTitle: "Van binnenkomst tot verzonden of geboekt",
  intro: "Ingericht op jouw proces. De AI-medewerker doet het voorwerk, jij houdt de beslissing.",
  steps: [
    { label: "01", title: "Binnenkomst", text: "Het werk komt binnen zoals altijd: een bestelling, een factuur, een bericht." },
    { label: "02", title: "AI zet klaar", text: "Hij zet het klaar in je eigen systeem, zoals jij het gewend bent." },
    { label: "03", title: "Jij keurt goed", text: "Je kijkt het na en keurt goed. Klopt iets niet, dan pas je het aan.", human: true },
    { label: "04", title: "Verzonden of geboekt", text: "De bevestiging gaat naar je klant, de factuur staat in je boekhouding." },
  ],
  doubt: {
    title: "Twijfelt hij? Dan stopt hij en vraagt het jou.",
    text: "Is iets anders dan normaal? Hij gaat niet gokken. Hij legt het aan jou voor.",
  },
  systems: {
    title: "Werkt in je bestaande systemen — je hoeft niets te veranderen.",
    text: "Wij richten de AI-medewerker in binnen de software die je al gebruikt en beheren hem op abonnementsbasis.",
    alsoLabel: "En ook:",
    items: ["pdf-facturen", "je kassasysteem", "je order- of ERP-systeem"],
  },
};

const tr: WorkChainDictionary = {
  eyebrow: "Bir AI eleman nasıl çalışır",
  title: "Biz hazırlarız. Siz onaylarsınız.",
  altTitle: "İşin gelişinden gönderilmesine kadar",
  intro: "Sizin sürecinize göre kurulur. Ön hazırlığı AI eleman yapar, karar sizde kalır.",
  steps: [
    { label: "01", title: "İş gelir", text: "İş her zamanki gibi gelir: bir sipariş, bir fatura, bir mesaj." },
    { label: "02", title: "AI hazırlar", text: "Kendi sisteminizde, alıştığınız şekilde hazırlar." },
    { label: "03", title: "Siz onaylarsınız", text: "Kontrol edip onaylarsınız. Bir şey yanlışsa düzeltirsiniz.", human: true },
    { label: "04", title: "Gönderildi / işlendi", text: "Onay müşterinize gider, fatura muhasebenize işlenir." },
  ],
  doubt: {
    title: "Emin değil mi? Durur ve size sorar.",
    text: "Bir şey her zamankinden farklı mı? Tahmin yürütmez. Size sorar.",
  },
  systems: {
    title: "Mevcut sistemlerinizde çalışır — hiçbir şeyi değiştirmeniz gerekmez.",
    text: "AI elemanı zaten kullandığınız yazılımın içinde kurarız ve abonelikle yönetiriz.",
    alsoLabel: "Ayrıca:",
    items: ["PDF faturalar", "kasa sisteminiz", "sipariş / ERP sisteminiz"],
  },
};

const en: WorkChainDictionary = {
  eyebrow: "How an AI employee works",
  title: "We prepare. You approve.",
  altTitle: "From incoming to sent or booked",
  intro: "Set up around your process. The AI employee does the groundwork, you keep the decision.",
  steps: [
    { label: "01", title: "Incoming", text: "Work comes in as always: an order, an invoice, a message." },
    { label: "02", title: "AI prepares", text: "It prepares it in your own system, the way you are used to." },
    { label: "03", title: "You approve", text: "You check and approve. Something off? You adjust it.", human: true },
    { label: "04", title: "Sent or booked", text: "The confirmation goes to your customer, the invoice is in your books." },
  ],
  doubt: {
    title: "In doubt? It stops and asks you.",
    text: "Something different from normal? It doesn't guess. It asks you.",
  },
  systems: {
    title: "Works in your existing systems — you don't have to change anything.",
    text: "We set up the AI employee inside the software you already use and manage it on a subscription basis.",
    alsoLabel: "And also:",
    items: ["PDF invoices", "your POS", "your order or ERP system"],
  },
};

const DICTS: Record<Locale, WorkChainDictionary> = { nl, tr, en };

export function getWorkChain(locale: Locale): WorkChainDictionary {
  return DICTS[locale];
}
