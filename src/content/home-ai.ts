import type { Locale } from "@/lib/i18n";

/**
 * Ana sayfa — "AI Eleman / eleman tut" konumlaması (12 Kas 2026).
 *
 * Kurallar (Çağrı kararları):
 * - Elemanları TEK TEK sayma; konsepti anlat, en fazla genel iş alanları.
 * - Fiyat tek dil: "vanaf €69" = birlikte çalışma PAKETLERİNİN başlangıç
 *   fiyatı (eleman başı DEĞİL).
 * - 50+ proje / 15 yıl / yorumlar gerçek ama merkezi değil → ana sayfada yok.
 */

export const HOME_WHATSAPP_NUMBER = "31611352773";

export type HomeAiDictionary = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    pricing: string;
    whatsappCta: string;
    howCta: string;
    selfLine: string;
    imageAlt: string;
  };
  whatsappText: string;
  concept: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { id: string; title: string; text: string }[];
    footnote: string;
  };
  areas: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string; tag: string }[];
  };
  why: {
    badge: string;
    title: string;
    description: string;
    bullets: string[];
    stats: { value: string; label: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    text: string;
    bullets: string[];
    cta: string;
  };
  start: {
    eyebrow: string;
    title: string;
    steps: { id: string; title: string; text: string }[];
  };
  tech: { badge: string; title: string };
  previous: { title: string; intro: string };
  cta: { title: string; text: string; button: string };
};

const nl: HomeAiDictionary = {
  hero: {
    badge: "AI-medewerkers voor ondernemers",
    title: "Huur een medewerker. Maar dan AI.",
    subtitle:
      "Een AI-medewerker neemt het terugkerende werk in je zaak over — van klantberichten tot administratie — en werkt in de systemen die je al hebt. Geen nieuw pakket om te leren. Jij houdt de regie.",
    pricing: "Samenwerkingspakketten vanaf €69 p/m · eerste maand gratis",
    whatsappCta: "Start via WhatsApp",
    howCta: "Hoe werkt het?",
    selfLine: "Wij draaien ons eigen bedrijf op AI-medewerkers. We verkopen wat we zelf elke dag gebruiken.",
    imageAlt: "AI-medewerker aan het werk",
  },
  whatsappText: "Hoi, ik wil meer weten over een AI-medewerker voor mijn zaak.",
  concept: {
    eyebrow: "Het idee",
    title: "Geen software erbij. Een collega erbij.",
    intro:
      "Software moet jij bedienen. Een AI-medewerker doet het werk zelf: hij pakt taken op die elke dag terugkomen en maakt ze af — zoals een medewerker die je inhuurt.",
    items: [
      {
        title: "Neemt werk over",
        text: "Geen dashboard dat je zelf moet bijhouden. Hij voert de taak uit en meldt wat hij gedaan heeft.",
      },
      {
        title: "Werkt in jouw systemen",
        text: "Hij koppelt aan wat je al gebruikt — kassa, boekhouding, mail, WhatsApp. Jij en je team hoeven niets nieuws te leren.",
      },
      {
        title: "Jij houdt de regie",
        text: "Je ziet altijd wat hij doet. Belangrijke beslissingen legt hij aan jou voor.",
      },
    ],
  },
  how: {
    eyebrow: "Hoe het werkt",
    title: "Ziet. Denkt. Doet.",
    intro: "Elke AI-medewerker werkt op dezelfde manier — net als een goede collega.",
    steps: [
      {
        id: "01",
        title: "Ziet",
        text: "Hij merkt op wat er binnenkomt: een bericht, een factuur, een bestelling, een cijfer dat afwijkt.",
      },
      {
        id: "02",
        title: "Denkt",
        text: "Hij kent jouw zaak: je prijzen, je klanten, je afspraken. Daarmee weet hij wat er moet gebeuren.",
      },
      {
        id: "03",
        title: "Doet",
        text: "Hij voert het uit — verwerken, beantwoorden, herinneren, plannen — en houdt jou op de hoogte.",
      },
    ],
    footnote: "Het scherm waar je meekijkt is geen extra werk: het is de plek waar je ziet wat je medewerker gedaan heeft.",
  },
  areas: {
    eyebrow: "Waar hij helpt",
    title: "Het werk dat elke dag terugkomt",
    intro:
      "Elke zaak is anders. In een kort gesprek kijken we samen welk werk bij jou blijft liggen — en dat laten we je AI-medewerker overnemen.",
    items: [
      {
        title: "Klantcontact",
        text: "Berichten, vragen en bestellingen beantwoorden en opvolgen — ook 's avonds en in het weekend, in meerdere talen.",
        tag: "24/7",
      },
      {
        title: "Administratie & geld",
        text: "Facturen, betalingen en cijfers bijhouden, zodat er niets wegglipt en jij weet waar je staat.",
        tag: "Overzicht",
      },
      {
        title: "Planning & opvolging",
        text: "Afspraken, leveringen en herinneringen regelen, zodat niets blijft liggen.",
        tag: "Op tijd",
      },
    ],
  },
  why: {
    badge: "Waarom UPU",
    title: "Waarom een AI-medewerker van UPU?",
    description: "We bouwen niet nog een systeem. We zetten een medewerker aan het werk in jouw zaak.",
    bullets: [
      "Wij draaien zelf op AI-medewerkers — je krijgt wat wij elke dag gebruiken",
      "Koppelt aan je bestaande systemen, geen nieuw pakket",
      "Wij zetten hem aan het werk — jij hoeft niets te installeren of te leren",
      "Nederlands en Turks, persoonlijk contact",
      "Maandelijks opzegbaar",
    ],
    stats: [
      { value: "50+", label: "Projecten opgeleverd" },
      { value: "15+", label: "Jaar ervaring" },
      { value: "3", label: "Talen: NL · TR · EN" },
    ],
  },
  pricing: {
    eyebrow: "Prijs",
    title: "Samenwerken vanaf €69 per maand",
    text:
      "We werken met samenwerkingspakketten die starten vanaf €69 per maand. Welk pakket bij jou past, stellen we samen vast in één kort gesprek — op basis van het werk dat je wilt overdragen.",
    bullets: ["Eerste maand gratis", "Maandelijks opzegbaar", "Pakket op maat in één gesprek"],
    cta: "Vraag naar jouw pakket",
  },
  start: {
    eyebrow: "Starten",
    title: "In drie stappen aan het werk",
    steps: [
      { id: "01", title: "Kort gesprek", text: "15 minuten via WhatsApp of telefoon: wat blijft er bij jou liggen?" },
      { id: "02", title: "Wij koppelen", text: "We verbinden je AI-medewerker met de systemen die je al gebruikt." },
      { id: "03", title: "Aan het werk", text: "Je medewerker begint. De eerste maand is gratis." },
    ],
  },
  tech: { badge: "Technologie", title: "Gebouwd op betrouwbare technologie" },
  previous: { title: "Eerder door ons gebouwd", intro: "Software die we de afgelopen jaren voor ondernemers hebben ontwikkeld." },
  cta: {
    title: "Probeer je AI-medewerker een maand gratis.",
    text: "Vertel ons welk werk bij jou blijft liggen — wij laten zien hoe je AI-medewerker het overneemt.",
    button: "Plan een gesprek",
  },
};

const tr: HomeAiDictionary = {
  hero: {
    badge: "İşletmeler için AI elemanlar",
    title: "Bir eleman tutun. Ama AI olsun.",
    subtitle:
      "AI eleman, işinizde her gün tekrar eden işi devralır — müşteri mesajlarından evrak işlerine kadar — ve zaten kullandığınız sistemlerin içinde çalışır. Öğrenilecek yeni bir program yok. Kontrol sizde.",
    pricing: "Birlikte çalışma paketleri aylık €69'dan başlar · ilk ay ücretsiz",
    whatsappCta: "WhatsApp'tan başlayın",
    howCta: "Nasıl çalışır?",
    selfLine: "Kendi şirketimizi AI elemanlarla yönetiyoruz. Her gün kendi kullandığımızı satıyoruz.",
    imageAlt: "Çalışan AI eleman",
  },
  whatsappText: "Merhaba, işletmem için AI eleman hakkında bilgi almak istiyorum.",
  concept: {
    eyebrow: "Fikir",
    title: "Yeni bir program değil. Yeni bir çalışma arkadaşı.",
    intro:
      "Programı sizin kullanmanız gerekir. AI eleman ise işi kendisi yapar: her gün tekrar eden görevleri üstlenir ve bitirir — tıpkı işe aldığınız bir eleman gibi.",
    items: [
      {
        title: "İşi devralır",
        text: "Sizin takip etmeniz gereken bir panel değil. Görevi yapar, ne yaptığını size bildirir.",
      },
      {
        title: "Sizin sistemlerinizde çalışır",
        text: "Zaten kullandıklarınıza bağlanır — kasa, muhasebe, e-posta, WhatsApp. Siz ve ekibiniz yeni bir şey öğrenmezsiniz.",
      },
      {
        title: "Kontrol sizde",
        text: "Ne yaptığını her zaman görürsünüz. Önemli kararları size danışır.",
      },
    ],
  },
  how: {
    eyebrow: "Nasıl çalışır",
    title: "Görür. Düşünür. Yapar.",
    intro: "Her AI eleman aynı şekilde çalışır — iyi bir çalışma arkadaşı gibi.",
    steps: [
      {
        id: "01",
        title: "Görür",
        text: "Gelen şeyi fark eder: bir mesaj, bir fatura, bir sipariş, beklenmedik bir rakam.",
      },
      {
        id: "02",
        title: "Düşünür",
        text: "İşinizi bilir: fiyatlarınızı, müşterilerinizi, anlaşmalarınızı. Ne yapılması gerektiğini buradan çıkarır.",
      },
      {
        id: "03",
        title: "Yapar",
        text: "Uygular — işler, yanıtlar, hatırlatır, planlar — ve sizi bilgilendirir.",
      },
    ],
    footnote: "Takip ettiğiniz ekran ek bir yük değil: elemanınızın ne yaptığını gördüğünüz yer.",
  },
  areas: {
    eyebrow: "Nerede yardım eder",
    title: "Her gün tekrar eden iş",
    intro:
      "Her işletme farklı. Kısa bir görüşmede sizde hangi işin biriktiğine birlikte bakarız — ve onu AI elemanınıza devrederiz.",
    items: [
      {
        title: "Müşteri iletişimi",
        text: "Mesajları, soruları ve siparişleri yanıtlar ve takip eder — akşam ve hafta sonu da, birden fazla dilde.",
        tag: "7/24",
      },
      {
        title: "Evrak & para",
        text: "Faturaları, ödemeleri ve rakamları takip eder; hiçbir şey gözden kaçmaz, nerede durduğunuzu bilirsiniz.",
        tag: "Netlik",
      },
      {
        title: "Planlama & takip",
        text: "Randevuları, teslimatları ve hatırlatmaları düzenler; hiçbir iş yarım kalmaz.",
        tag: "Zamanında",
      },
    ],
  },
  why: {
    badge: "Neden UPU",
    title: "Neden UPU'dan bir AI eleman?",
    description: "Bir sistem daha kurmuyoruz. İşletmenizde çalışan bir eleman işe başlatıyoruz.",
    bullets: [
      "Kendimiz AI elemanlarla çalışıyoruz — her gün kullandığımızı alırsınız",
      "Mevcut sistemlerinize bağlanır, yeni program yok",
      "İşe biz başlatırız — siz bir şey kurmaz, öğrenmezsiniz",
      "Türkçe ve Felemenkçe, birebir iletişim",
      "Aylık iptal edilebilir",
    ],
    stats: [
      { value: "50+", label: "Tamamlanan proje" },
      { value: "15+", label: "Yıllık deneyim" },
      { value: "3", label: "Dil: TR · NL · EN" },
    ],
  },
  pricing: {
    eyebrow: "Fiyat",
    title: "Aylık €69'dan başlayan birlikte çalışma",
    text:
      "Aylık €69'dan başlayan birlikte çalışma paketleriyle çalışıyoruz. Size hangi paketin uyduğunu, devretmek istediğiniz işe göre tek bir kısa görüşmede birlikte belirleriz.",
    bullets: ["İlk ay ücretsiz", "Aylık iptal edilebilir", "Tek görüşmede size özel paket"],
    cta: "Paketinizi sorun",
  },
  start: {
    eyebrow: "Başlangıç",
    title: "Üç adımda işbaşı",
    steps: [
      { id: "01", title: "Kısa görüşme", text: "WhatsApp ya da telefonla 15 dakika: sizde hangi iş birikiyor?" },
      { id: "02", title: "Biz bağlarız", text: "AI elemanınızı zaten kullandığınız sistemlere bağlarız." },
      { id: "03", title: "İşbaşı", text: "Elemanınız işe başlar. İlk ay ücretsiz." },
    ],
  },
  tech: { badge: "Teknoloji", title: "Güvenilir teknoloji üzerine kurulu" },
  previous: { title: "Daha önce geliştirdiklerimiz", intro: "Son yıllarda işletmeler için geliştirdiğimiz yazılımlar." },
  cta: {
    title: "AI elemanınızı bir ay ücretsiz deneyin.",
    text: "Sizde hangi işin biriktiğini anlatın — AI elemanınızın onu nasıl devraldığını gösterelim.",
    button: "Görüşme planlayın",
  },
};

const en: HomeAiDictionary = {
  hero: {
    badge: "AI employees for businesses",
    title: "Hire an employee. But make it AI.",
    subtitle:
      "An AI employee takes over the recurring work in your business — from customer messages to admin — and works inside the systems you already use. No new software to learn. You stay in control.",
    pricing: "Partnership packages from €69 per month · first month free",
    whatsappCta: "Start on WhatsApp",
    howCta: "How does it work?",
    selfLine: "We run our own company on AI employees. We sell what we use every day.",
    imageAlt: "AI employee at work",
  },
  whatsappText: "Hi, I'd like to know more about an AI employee for my business.",
  concept: {
    eyebrow: "The idea",
    title: "Not more software. A new colleague.",
    intro:
      "Software needs you to operate it. An AI employee does the work itself: it picks up tasks that come back every day and finishes them — like someone you hire.",
    items: [
      { title: "Takes work off your plate", text: "Not a dashboard you have to keep up with. It does the task and tells you what it did." },
      { title: "Works in your systems", text: "It connects to what you already use — till, bookkeeping, email, WhatsApp. Nobody has to learn anything new." },
      { title: "You stay in control", text: "You always see what it does. Important decisions come to you." },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Sees. Thinks. Does.",
    intro: "Every AI employee works the same way — like a good colleague.",
    steps: [
      { id: "01", title: "Sees", text: "It notices what comes in: a message, an invoice, an order, a number that's off." },
      { id: "02", title: "Thinks", text: "It knows your business: your prices, your customers, your agreements. That tells it what needs to happen." },
      { id: "03", title: "Does", text: "It gets it done — processing, replying, reminding, planning — and keeps you posted." },
    ],
    footnote: "The screen you look at isn't extra work: it's where you see what your employee has done.",
  },
  areas: {
    eyebrow: "Where it helps",
    title: "The work that comes back every day",
    intro: "Every business is different. In a short call we look at which work piles up for you — and hand it to your AI employee.",
    items: [
      { title: "Customer contact", text: "Answering and following up on messages, questions and orders — evenings and weekends too, in several languages.", tag: "24/7" },
      { title: "Admin & money", text: "Keeping track of invoices, payments and numbers, so nothing slips and you know where you stand.", tag: "Clarity" },
      { title: "Planning & follow-up", text: "Handling appointments, deliveries and reminders, so nothing is left lying around.", tag: "On time" },
    ],
  },
  why: {
    badge: "Why UPU",
    title: "Why an AI employee from UPU?",
    description: "We don't build yet another system. We put an employee to work in your business.",
    bullets: [
      "We run on AI employees ourselves — you get what we use every day",
      "Connects to your existing systems, no new software",
      "We set it up — you don't install or learn anything",
      "Dutch, Turkish and English, personal contact",
      "Cancel monthly",
    ],
    stats: [
      { value: "50+", label: "Projects delivered" },
      { value: "15+", label: "Years of experience" },
      { value: "3", label: "Languages: NL · TR · EN" },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Work with us from €69 per month",
    text:
      "We work with partnership packages starting from €69 per month. Which package fits you, we decide together in one short call — based on the work you want to hand over.",
    bullets: ["First month free", "Cancel monthly", "Tailored package in one call"],
    cta: "Ask about your package",
  },
  start: {
    eyebrow: "Getting started",
    title: "At work in three steps",
    steps: [
      { id: "01", title: "Short call", text: "15 minutes on WhatsApp or by phone: what work piles up for you?" },
      { id: "02", title: "We connect", text: "We connect your AI employee to the systems you already use." },
      { id: "03", title: "At work", text: "Your employee starts. The first month is free." },
    ],
  },
  tech: { badge: "Technology", title: "Built on reliable technology" },
  previous: { title: "Previously built by us", intro: "Software we have developed for businesses in recent years." },
  cta: {
    title: "Try your AI employee free for a month.",
    text: "Tell us which work piles up for you — we'll show you how your AI employee takes it over.",
    button: "Plan a call",
  },
};

const dictionaries: Record<Locale, HomeAiDictionary> = { nl, tr, en };

export function getHomeAiDictionary(locale: Locale): HomeAiDictionary {
  return dictionaries[locale] ?? nl;
}

export function homeWhatsAppHref(text: string): string {
  return `https://wa.me/${HOME_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
