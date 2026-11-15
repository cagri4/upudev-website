import type { Locale } from "@/lib/i18n";

/**
 * Reklam landing'leri — "het uitzendbureau voor AI-medewerkers" (15 Kas 2026, Çağrı onayı).
 *
 *  - /[locale]/ai-eleman              → genel AI-medewerker landing'i (eski reklam bu URL'ye gidiyor; URL aynı kaldı)
 *  - /[locale]/ai-medewerkers/groothandel → "Maandag 08:00" reklamının hedef sayfası (toptancı hikâyesi)
 *
 * Fiyat dili = model B: "Eerste maand €69 — daarna vanaf €249 p/m. Afgestemd op jouw werkvolume."
 * YASAK: "gratis", "vanaf €69", uydurma logo/rakam/ROI. Hikâyedeki tutarlar reklamdaki gibi "illustratie" etiketli.
 * Eleman adları reklamla birebir: Order-medewerker · Boekhoud-medewerker.
 * CTA: ana buton "Plan een gesprek" = sayfadaki form (quote_form_submit), yanında "of stuur ons een WhatsApp" (WhatsAppClick).
 */

export const AI_TEAM_WHATSAPP_NUMBER = "31611352773";

export type RobotKey = "order" | "boekhoud";

/**
 * Çöp adam (copadam) görselleri — reklamın A versiyonuyla aynı çizim (ajans upu-robots/out/web-copadam, 15 Kas 2026).
 * Şeffaf PNG @2x; w/h = gösterilecek 1x CSS boyutu. Robotları ~250 px yükseklikten küçük gösterme (çizgi incelir).
 * Koyu (navy) zeminde kullanma — çizgi rengi koyu.
 */
export const COPADAM = {
  order: { src: "/robots/copadam/robot-order.png", w: 339, h: 573 },
  boekhoud: { src: "/robots/copadam/robot-boekhoud.png", w: 356, h: 573 },
  vraag: { src: "/robots/copadam/robot-vraag-soluk.png", w: 216, h: 573 },
  team: { src: "/robots/copadam/team-hand-in-hand.png", w: 548, h: 477 },
  teamPlusVraag: { src: "/robots/copadam/team-plus-vraag.png", w: 647, h: 477 },
  orders: { src: "/robots/copadam/hero-s1-bestellingen-dikey-4x5.png", w: 514, h: 643 },
  prijsverschil: { src: "/robots/copadam/hero-s5-prijsverschil-band-yatay.png", w: 996, h: 561 },
} as const;

export const COPADAM_OG = { url: "/robots/copadam/og-team.jpg", width: 1200, height: 630 };

type FormLabels = {
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

type Common = {
  cta: { primary: string; whatsapp: string };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    asksLabel: string;
    members: { robot: RobotKey; name: string; role: string; text: string; asks: string }[];
    more: { title: string; text: string; examples: string[] };
  };
  how: { eyebrow: string; title: string; steps: { title: string; text: string }[] };
  control: { eyebrow: string; title: string; items: string[] };
  pricing: { eyebrow: string; headline: string; terms: string; note: string };
  form: FormLabels;
  closing: { title: string; text: string };
  homeLabel: string;
  copyright: string;
};

export type StoryStep = { channel: string; text: string };

export type AiTeamLandingDictionary = Common & {
  meta: { title: string; description: string };
  hero: { badge: string; title: string; subtitle: string; priceNote: string };
  whatsappText: string;
  /** Mail konusu (/api/contact → "[UpuDev] <subject>"). */
  subject: string;
  /** GTM quote_form_submit form_location. */
  formLocation: string;
  /** Reklam hikâyesi — yalnız groothandel sayfasında. */
  story?: {
    eyebrow: string;
    title: string;
    intro: string;
    order: {
      name: string;
      beforeLabel: string;
      before: StoryStep[];
      afterLabel: string;
      after: string[];
      upsell: string;
    };
    boekhoud: {
      name: string;
      beforeLabel: string;
      invoice: string;
      afterLabel: string;
      finding: string;
      question: string;
    };
    illustration: string;
  };
};

/* ------------------------------------------------------------------ NL */

const commonNl: Common = {
  cta: { primary: "Plan een gesprek", whatsapp: "of stuur ons een WhatsApp" },
  team: {
    eyebrow: "Ons AI-team",
    title: "Maak kennis met je nieuwe collega's",
    intro: "Elke AI-medewerker heeft één vak. Hij werkt in de systemen die je al hebt en vraagt het jou als iets niet klopt.",
    asksLabel: "Vraagt jou als",
    members: [
      {
        robot: "order",
        name: "Order-medewerker",
        role: "Verkoop",
        text: "Leest bestellingen uit WhatsApp, mail en voicemail. Hij maakt er nette orderregels van in je systeem. En hij stelt voor wat een klant meestal ook bestelt.",
        asks: "een product of klant niet duidelijk is.",
      },
      {
        robot: "boekhoud",
        name: "Boekhoud-medewerker",
        role: "Administratie",
        text: "Controleert elke inkoopfactuur tegen je afgesproken prijzen. Ziet hij een prijsverschil of een fout, dan meldt hij het meteen.",
        asks: "een prijs anders is dan afgesproken.",
      },
    ],
    more: {
      title: "…en elk ander terugkerend werk",
      text: "Wij bouwen je volgende AI-medewerker. Vertel ons welk werk elke dag terugkomt. Wij maken er een medewerker voor.",
      examples: ["Planning?", "Voorraad?", "Jouw werk?"],
    },
  },
  how: {
    eyebrow: "Zo werkt het",
    title: "In vier stappen een medewerker in dienst",
    steps: [
      { title: "Kennismaking", text: "Een kort gesprek: welk werk kost jou elke dag tijd?" },
      { title: "Demo met jouw data", text: "Je ziet de medewerker werken op jouw eigen orders of facturen." },
      { title: "Proefmaand €69", text: "Hij werkt een maand mee. Jij keurt goed en kijkt mee." },
      { title: "In dienst", text: "Tevreden? Dan blijft hij. Maandelijks opzegbaar." },
    ],
  },
  control: {
    eyebrow: "Jij houdt de controle",
    title: "Eerst keur jij alles goed",
    items: [
      "In het begin legt hij alles aan jou voor.",
      "Twijfelt hij? Dan stuurt hij jou een bericht.",
      "Hij werkt alleen met de toegang die jij geeft.",
      "Je data blijft van jou en we volgen de AVG.",
    ],
  },
  pricing: {
    eyebrow: "Wat kost het?",
    headline: "Eerste maand €69 — daarna vanaf €249 p/m.",
    terms: "Afgestemd op jouw werkvolume. Maandelijks opzegbaar. Excl. btw.",
    note: "De precieze prijs hoor je in het gesprek, op basis van jouw werk. Altijd vooraf.",
  },
  form: {
    sectionId: "gesprek",
    eyebrow: "Plan een gesprek",
    title: "Plan een gesprek",
    subtitle: "Laat je gegevens achter. We nemen binnen één werkdag contact op om een moment te kiezen.",
    name: "Naam",
    phone: "Telefoon",
    email: "E-mail",
    company: "Bedrijf",
    message: "Welk werk komt bij jou steeds terug?",
    namePlaceholder: "Je naam",
    phonePlaceholder: "06 12345678",
    emailPlaceholder: "naam@bedrijf.nl",
    companyPlaceholder: "Naam van je bedrijf",
    messagePlaceholder: "Bijvoorbeeld: orders uit WhatsApp overtypen, facturen nakijken…",
    optional: "(optioneel)",
    defaultMessage: "Ik wil graag een gesprek over een AI-medewerker.",
    submit: "Plan een gesprek",
    sending: "Bezig met verzenden…",
    requiredError: "Vul je naam, telefoon en e-mail in.",
    networkError: "Er ging iets mis met de verbinding. Probeer het opnieuw of stuur ons een WhatsApp.",
    successTitle: "Bedankt! We nemen binnen één werkdag contact op.",
    successText: "Liever meteen contact? Stuur ons een WhatsApp.",
    successWa: "Stuur ons een WhatsApp",
  },
  closing: {
    title: "Welk werk geef jij als eerste uit handen?",
    text: "In een kort gesprek kijken we samen welke AI-medewerker bij jou past.",
  },
  homeLabel: "Naar de homepage",
  copyright: "© 2026 UPU Dev. Alle rechten voorbehouden.",
};

const aiElemanNl: AiTeamLandingDictionary = {
  ...commonNl,
  meta: {
    title: "Huur een AI-medewerker — het uitzendbureau voor AI | UPU Dev",
    description:
      "Het uitzendbureau voor AI-medewerkers. Huur een AI-medewerker die terugkerend werk overneemt: orders, facturen, planning. Eerste maand €69, daarna vanaf €249 p/m. Maandelijks opzegbaar.",
  },
  hero: {
    badge: "Het uitzendbureau voor AI-medewerkers",
    title: "Huur een medewerker. Maar dan AI.",
    subtitle:
      "Een AI-medewerker neemt het werk over dat elke dag terugkomt: orders, facturen, planning. Hij werkt in de systemen die je al hebt. Je huurt hem per maand, net als een uitzendkracht.",
    priceNote: "Eerste maand €69 — daarna vanaf €249 p/m. Afgestemd op jouw werkvolume.",
  },
  whatsappText: "Hoi, ik wil meer weten over een AI-medewerker.",
  subject: "AI-medewerker — gesprek (ai-eleman)",
  formLocation: "ai_eleman_form",
};

const groothandelNl: AiTeamLandingDictionary = {
  ...commonNl,
  meta: {
    title: "AI-medewerkers voor groothandels — orders en facturen | UPU Dev",
    description:
      "Maandag 08:00 en de orders staan al klaar. Een Order-medewerker zet losse bestellingen om in nette orderregels, een Boekhoud-medewerker controleert je facturen. Eerste maand €69, daarna vanaf €249 p/m.",
  },
  hero: {
    badge: "AI-medewerkers voor groothandels",
    title: "Maandag 08:00. De orders staan al klaar.",
    subtitle:
      "Je Order-medewerker zet losse bestellingen om in nette orderregels. Je Boekhoud-medewerker controleert de facturen. Jij begint de week met overzicht.",
    priceNote: "Eerste maand €69 — daarna vanaf €249 p/m. Afgestemd op jouw werkvolume.",
  },
  whatsappText: "Hoi, ik heb een groothandel en wil meer weten over de Order- en Boekhoud-medewerker.",
  subject: "AI-medewerker — gesprek (groothandel)",
  formLocation: "groothandel_form",
  story: {
    eyebrow: "Maandag 08:00",
    title: "Zo begint je week",
    intro: "Het weekend is voorbij. De bestellingen komen van alle kanten binnen. En er ligt een stapel facturen.",
    order: {
      name: "Order-medewerker",
      beforeLabel: "Binnengekomen",
      before: [
        { channel: "WhatsApp", text: "“Zelfde als vorige week, maar 2 dozen minder.”" },
        { channel: "Voicemail", text: "Een klant spreekt een bestelling in." },
        { channel: "Mail", text: "Een foto van een handgeschreven lijst." },
      ],
      afterLabel: "Klaar in je systeem",
      after: ["Klant herkend", "Artikelen gekoppeld", "Aantallen nagekeken", "Bevestiging verstuurd"],
      upsell: "Tip: deze klant bestelt meestal ook olijfolie. Zal ik het voorstellen?",
    },
    boekhoud: {
      name: "Boekhoud-medewerker",
      beforeLabel: "Inkoopfactuur binnen",
      invoice: "Kaas 5 kg — €12,40 per stuk",
      afterLabel: "Prijsverschil gevonden",
      finding: "Afgesproken prijs: €11,80. Op de factuur: €12,40.",
      question: "Zal ik de leverancier een bericht sturen?",
    },
    illustration: "Voorbeeld ter illustratie.",
  },
};

/* ------------------------------------------------------------------ TR */

const commonTr: Common = {
  cta: { primary: "Görüşme planlayın", whatsapp: "ya da bize WhatsApp'tan yazın" },
  team: {
    eyebrow: "AI ekibimiz",
    title: "Yeni çalışma arkadaşlarınızla tanışın",
    intro: "Her AI elemanın tek bir işi vardır. Zaten kullandığınız sistemlerde çalışır ve bir şey tutmazsa size sorar.",
    asksLabel: "Size sorar, eğer",
    members: [
      {
        robot: "order",
        name: "Order-medewerker (Sipariş Elemanı)",
        role: "Satış",
        text: "WhatsApp, e-posta ve sesli mesajdan gelen siparişleri okur. Sisteminizde düzgün sipariş satırlarına çevirir. Müşterinin genelde birlikte aldığı ürünü de önerir.",
        asks: "bir ürün ya da müşteri net değilse.",
      },
      {
        robot: "boekhoud",
        name: "Boekhoud-medewerker (Muhasebe Elemanı)",
        role: "Muhasebe",
        text: "Her alış faturasını anlaştığınız fiyatlarla karşılaştırır. Fiyat farkı ya da hata görürse hemen haber verir.",
        asks: "bir fiyat anlaşılandan farklıysa.",
      },
    ],
    more: {
      title: "…ve tekrar eden her iş için",
      text: "Sıradaki AI elemanınızı biz geliştiririz. Her gün tekrar eden işi bize anlatın, onun için bir eleman yapalım.",
      examples: ["Planlama?", "Stok?", "Sizin işiniz?"],
    },
  },
  how: {
    eyebrow: "Nasıl çalışır",
    title: "Dört adımda işe başlayan bir eleman",
    steps: [
      { title: "Tanışma", text: "Kısa bir görüşme: her gün hangi iş zamanınızı alıyor?" },
      { title: "Kendi verinizle demo", text: "Elemanın kendi siparişleriniz ya da faturalarınız üzerinde çalıştığını görürsünüz." },
      { title: "Deneme ayı €69", text: "Bir ay sizinle çalışır. Siz onaylar, takip edersiniz." },
      { title: "İşe alım", text: "Memnun musunuz? O zaman kalır. Her ay iptal edilebilir." },
    ],
  },
  control: {
    eyebrow: "Kontrol sizde",
    title: "Önce her şeyi siz onaylarsınız",
    items: [
      "Başta her şeyi size sorar.",
      "Emin değilse size mesaj atar.",
      "Yalnızca sizin verdiğiniz erişimle çalışır.",
      "Verileriniz sizindir; AVG (GDPR) kurallarına uyarız.",
    ],
  },
  pricing: {
    eyebrow: "Ne kadar?",
    headline: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla.",
    terms: "İş hacminize göre belirlenir. Her ay iptal edilebilir. Fiyatlara KDV (btw) dahil değildir.",
    note: "Kesin fiyatı görüşmede, işinize göre öğrenirsiniz. Her zaman önceden.",
  },
  form: {
    sectionId: "gesprek",
    eyebrow: "Görüşme planlayın",
    title: "Görüşme planlayın",
    subtitle: "Bilgilerinizi bırakın. Bir iş günü içinde size dönüp bir zaman belirleyelim.",
    name: "Ad soyad",
    phone: "Telefon",
    email: "E-posta",
    company: "Firma",
    message: "Sizde hangi iş sürekli tekrar ediyor?",
    namePlaceholder: "Adınız",
    phonePlaceholder: "06 12345678",
    emailPlaceholder: "ad@firma.nl",
    companyPlaceholder: "Firmanızın adı",
    messagePlaceholder: "Örneğin: WhatsApp siparişlerini sisteme girmek, faturaları kontrol etmek…",
    optional: "(isteğe bağlı)",
    defaultMessage: "AI eleman hakkında görüşmek istiyorum.",
    submit: "Görüşme planlayın",
    sending: "Gönderiliyor…",
    requiredError: "Lütfen adınızı, telefonunuzu ve e-postanızı yazın.",
    networkError: "Bağlantıda bir sorun oldu. Tekrar deneyin ya da bize WhatsApp'tan yazın.",
    successTitle: "Teşekkürler! Bir iş günü içinde size dönüyoruz.",
    successText: "Hemen konuşmak mı istiyorsunuz? Bize WhatsApp'tan yazın.",
    successWa: "WhatsApp'tan yazın",
  },
  closing: {
    title: "İlk hangi işi devretmek istersiniz?",
    text: "Kısa bir görüşmede size hangi AI elemanın uyduğuna birlikte bakalım.",
  },
  homeLabel: "Ana sayfaya git",
  copyright: "© 2026 UPU Dev. Tüm hakları saklıdır.",
};

const aiElemanTr: AiTeamLandingDictionary = {
  ...commonTr,
  meta: {
    title: "Bir AI eleman tutun — AI elemanlar için iş ajansı | UPU Dev",
    description:
      "AI elemanlar için iş ajansı. Sipariş, fatura, planlama gibi tekrar eden işleri devralan bir AI eleman tutun. İlk ay €69, sonra aylık €249'dan başlayan fiyatlarla. Her ay iptal edilebilir.",
  },
  hero: {
    badge: "AI elemanlar için iş ajansı",
    title: "Bir eleman tutun. Ama AI olsun.",
    subtitle:
      "AI eleman her gün tekrar eden işi devralır: siparişler, faturalar, planlama. Zaten kullandığınız sistemlerde çalışır. Onu aylık tutarsınız, tıpkı geçici bir eleman gibi.",
    priceNote: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla. İş hacminize göre.",
  },
  whatsappText: "Merhaba, AI eleman hakkında bilgi almak istiyorum.",
  subject: "AI eleman — görüşme (ai-eleman)",
  formLocation: "ai_eleman_form",
};

const groothandelTr: AiTeamLandingDictionary = {
  ...commonTr,
  meta: {
    title: "Toptancılar için AI elemanlar — sipariş ve fatura | UPU Dev",
    description:
      "Pazartesi 08:00, siparişler hazır. Order-medewerker dağınık siparişleri düzgün sipariş satırlarına çevirir, Boekhoud-medewerker faturalarınızı kontrol eder. İlk ay €69, sonra aylık €249'dan başlayan fiyatlarla.",
  },
  hero: {
    badge: "Toptancılar için AI elemanlar",
    title: "Pazartesi 08:00. Siparişler hazır.",
    subtitle:
      "Sipariş elemanınız dağınık siparişleri düzgün sipariş satırlarına çevirir. Muhasebe elemanınız faturaları kontrol eder. Siz haftaya düzenli başlarsınız.",
    priceNote: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla. İş hacminize göre.",
  },
  whatsappText: "Merhaba, toptancıyım. Sipariş ve muhasebe elemanı hakkında bilgi almak istiyorum.",
  subject: "AI eleman — görüşme (groothandel)",
  formLocation: "groothandel_form",
  story: {
    eyebrow: "Pazartesi 08:00",
    title: "Haftanız böyle başlar",
    intro: "Hafta sonu bitti. Siparişler her yerden geliyor. Masada da bir yığın fatura var.",
    order: {
      name: "Order-medewerker",
      beforeLabel: "Gelenler",
      before: [
        { channel: "WhatsApp", text: "“Geçen haftanın aynısı, ama 2 koli eksik.”" },
        { channel: "Sesli mesaj", text: "Bir müşteri siparişini sesli bırakıyor." },
        { channel: "E-posta", text: "Elle yazılmış bir listenin fotoğrafı." },
      ],
      afterLabel: "Sisteminizde hazır",
      after: ["Müşteri tanındı", "Ürünler eşleşti", "Adetler kontrol edildi", "Onay gönderildi"],
      upsell: "İpucu: bu müşteri genelde zeytinyağı da alıyor. Önereyim mi?",
    },
    boekhoud: {
      name: "Boekhoud-medewerker",
      beforeLabel: "Alış faturası geldi",
      invoice: "Peynir 5 kg — adet €12,40",
      afterLabel: "Fiyat farkı bulundu",
      finding: "Anlaşılan fiyat: €11,80. Faturada: €12,40.",
      question: "Tedarikçiye mesaj atayım mı?",
    },
    illustration: "Örnek, temsilîdir.",
  },
};

/* ------------------------------------------------------------------ EN */

const commonEn: Common = {
  cta: { primary: "Plan a call", whatsapp: "or send us a WhatsApp" },
  team: {
    eyebrow: "Our AI team",
    title: "Meet your new colleagues",
    intro: "Every AI employee has one job. It works in the systems you already use and asks you when something is off.",
    asksLabel: "Asks you when",
    members: [
      {
        robot: "order",
        name: "Order-medewerker (Order employee)",
        role: "Sales",
        text: "Reads orders from WhatsApp, email and voicemail and turns them into clean order lines in your system. It also suggests what a customer usually orders too.",
        asks: "a product or customer is unclear.",
      },
      {
        robot: "boekhoud",
        name: "Boekhoud-medewerker (Bookkeeping employee)",
        role: "Administration",
        text: "Checks every purchase invoice against your agreed prices. If it sees a price difference or a mistake, it tells you right away.",
        asks: "a price differs from what was agreed.",
      },
    ],
    more: {
      title: "…and any other recurring work",
      text: "We build your next AI employee. Tell us which work comes back every day and we make an employee for it.",
      examples: ["Planning?", "Stock?", "Your work?"],
    },
  },
  how: {
    eyebrow: "How it works",
    title: "An employee at work in four steps",
    steps: [
      { title: "Intro call", text: "A short call: which work takes up your time every day?" },
      { title: "Demo with your data", text: "You see the employee work on your own orders or invoices." },
      { title: "Trial month €69", text: "It works with you for a month. You approve and follow along." },
      { title: "Hired", text: "Happy? Then it stays. Cancel monthly." },
    ],
  },
  control: {
    eyebrow: "You stay in control",
    title: "You approve everything first",
    items: [
      "At the start it checks everything with you.",
      "In doubt? It sends you a message.",
      "It only works with the access you give it.",
      "Your data stays yours and we follow the GDPR.",
    ],
  },
  pricing: {
    eyebrow: "What does it cost?",
    headline: "First month €69 — then from €249 per month.",
    terms: "Based on your workload. Cancel monthly. Excl. VAT.",
    note: "You hear the exact price in the call, based on your work. Always up front.",
  },
  form: {
    sectionId: "gesprek",
    eyebrow: "Plan a call",
    title: "Plan a call",
    subtitle: "Leave your details. We get back to you within one business day to pick a moment.",
    name: "Name",
    phone: "Phone",
    email: "Email",
    company: "Company",
    message: "Which work keeps coming back?",
    namePlaceholder: "Your name",
    phonePlaceholder: "06 12345678",
    emailPlaceholder: "name@company.com",
    companyPlaceholder: "Your company name",
    messagePlaceholder: "For example: typing over WhatsApp orders, checking invoices…",
    optional: "(optional)",
    defaultMessage: "I would like to talk about an AI employee.",
    submit: "Plan a call",
    sending: "Sending…",
    requiredError: "Please fill in your name, phone and email.",
    networkError: "Something went wrong with the connection. Try again or send us a WhatsApp.",
    successTitle: "Thank you! We get back to you within one business day.",
    successText: "Rather talk right away? Send us a WhatsApp.",
    successWa: "Send us a WhatsApp",
  },
  closing: {
    title: "Which work do you hand over first?",
    text: "In a short call we look together at which AI employee fits you.",
  },
  homeLabel: "Go to the homepage",
  copyright: "© 2026 UPU Dev. All rights reserved.",
};

const aiElemanEn: AiTeamLandingDictionary = {
  ...commonEn,
  meta: {
    title: "Hire an AI employee — the staffing agency for AI | UPU Dev",
    description:
      "The staffing agency for AI employees. Hire an AI employee that takes over recurring work: orders, invoices, planning. First month €69, then from €249 per month. Cancel monthly.",
  },
  hero: {
    badge: "The staffing agency for AI employees",
    title: "Hire an employee. But make it AI.",
    subtitle:
      "An AI employee takes over the work that comes back every day: orders, invoices, planning. It works in the systems you already use. You hire it per month, just like a temp.",
    priceNote: "First month €69 — then from €249 per month. Based on your workload.",
  },
  whatsappText: "Hi, I would like to know more about an AI employee.",
  subject: "AI employee — call (ai-eleman)",
  formLocation: "ai_eleman_form",
};

const groothandelEn: AiTeamLandingDictionary = {
  ...commonEn,
  meta: {
    title: "AI employees for wholesalers — orders and invoices | UPU Dev",
    description:
      "Monday 08:00 and the orders are ready. An Order-medewerker turns scattered orders into clean order lines, a Boekhoud-medewerker checks your invoices. First month €69, then from €249 per month.",
  },
  hero: {
    badge: "AI employees for wholesalers",
    title: "Monday 08:00. The orders are ready.",
    subtitle:
      "Your Order employee turns scattered orders into clean order lines. Your Bookkeeping employee checks the invoices. You start the week with a clear view.",
    priceNote: "First month €69 — then from €249 per month. Based on your workload.",
  },
  whatsappText: "Hi, I run a wholesale business and want to know more about the Order and Bookkeeping employee.",
  subject: "AI employee — call (groothandel)",
  formLocation: "groothandel_form",
  story: {
    eyebrow: "Monday 08:00",
    title: "This is how your week starts",
    intro: "The weekend is over. Orders come in from everywhere. And there is a pile of invoices.",
    order: {
      name: "Order-medewerker",
      beforeLabel: "Received",
      before: [
        { channel: "WhatsApp", text: "“Same as last week, but 2 boxes fewer.”" },
        { channel: "Voicemail", text: "A customer leaves an order by voice." },
        { channel: "Email", text: "A photo of a handwritten list." },
      ],
      afterLabel: "Ready in your system",
      after: ["Customer recognised", "Products matched", "Quantities checked", "Confirmation sent"],
      upsell: "Tip: this customer usually orders olive oil too. Shall I suggest it?",
    },
    boekhoud: {
      name: "Boekhoud-medewerker",
      beforeLabel: "Purchase invoice received",
      invoice: "Cheese 5 kg — €12.40 each",
      afterLabel: "Price difference found",
      finding: "Agreed price: €11.80. On the invoice: €12.40.",
      question: "Shall I message the supplier?",
    },
    illustration: "Example for illustration.",
  },
};

const aiEleman: Record<Locale, AiTeamLandingDictionary> = { nl: aiElemanNl, tr: aiElemanTr, en: aiElemanEn };
const groothandel: Record<Locale, AiTeamLandingDictionary> = { nl: groothandelNl, tr: groothandelTr, en: groothandelEn };

export function getAiElemanLanding(locale: Locale): AiTeamLandingDictionary {
  return aiEleman[locale] ?? aiElemanNl;
}

export function getGroothandelLanding(locale: Locale): AiTeamLandingDictionary {
  return groothandel[locale] ?? groothandelNl;
}

export function aiTeamWhatsAppHref(text: string): string {
  return `https://wa.me/${AI_TEAM_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
