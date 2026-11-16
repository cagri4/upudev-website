import type { Locale } from "@/lib/i18n";

/**
 * Reklam landing'leri (15 Kas 2026, Çağrı onayı). Dil: "AI-implementatiepartner" — IND iş planı G.5
 * "geen uitzendconstructie, geen detachering": "uitzendbureau", "huren", "in dienst", "neemt werk over" KULLANMA.
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
  planner: { src: "/robots/copadam/robot-planner.png", w: 380, h: 573 },
  teller: { src: "/robots/copadam/robot-teller.png", w: 360, h: 573 },
  etiketbeheerder: { src: "/robots/copadam/robot-etiketbeheerder.png", w: 405, h: 573 },
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
    /** 16 Kas 2026 (Çağrı): yöntem ("neyi okur/karşılaştırır, ne zaman durur") YOK — yalnız SONUÇ. */
    members: { robot: RobotKey; name: string; context: string; outcome: string }[];
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
      /** Kaldırıldı (16 Kas): yöntem ele veriyordu. */
      upsell?: string;
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
    title: "Zo kan jouw team eruitzien",
    intro: "Geen kant-en-klare rollen uit een catalogus. Elke AI-medewerker richten we in op jouw proces. Twee voorbeelden uit de groothandel:",
    members: [
      {
        robot: "order",
        name: "Order-medewerker",
        context: "Voorbeeld · Verkoop",
        outcome: "Je begint de dag met de bestellingen klaar in je systeem, wachtend op jouw akkoord.",
      },
      {
        robot: "boekhoud",
        name: "Boekhoud-medewerker",
        context: "Voorbeeld · Administratie",
        outcome: "Facturen die niet kloppen met je afspraken liggen apart voor je klaar.",
      },
    ],
    more: {
      title: "…en elk ander terugkerend werk",
      text: "Jouw werk? Wij bouwen de collega. Vertel ons welk werk elke dag terugkomt, dan richten wij er een AI-medewerker voor in.",
      examples: ["Planning?", "Voorraad?", "Jouw werk?"],
    },
  },
  how: {
    eyebrow: "Zo werken we samen",
    title: "Eerst luisteren. Dan pas bouwen.",
    steps: [
      { title: "We luisteren", text: "Een kort gesprek: welk werk kost jou elke dag tijd, en hoe doe je het nu?" },
      { title: "Samen naar een werkdag kijken", text: "We lopen een gewone werkdag met je door en bepalen samen wat klaargezet moet worden." },
      { title: "Proefmaand €69", text: "Ingericht op jouw proces. Hij werkt een maand mee, jij keurt alles goed." },
      { title: "Abonnement", text: "Tevreden? Wij beheren hem verder en stemmen hem af als je werk verandert. Maandelijks opzegbaar." },
    ],
  },
  control: {
    eyebrow: "Jij houdt de controle",
    title: "Eerst keur jij alles goed",
    items: [
      "In het begin legt hij alles aan jou voor.",
      "Twijfelt hij? Dan stopt hij en vraagt het jou.",
      "Hij werkt alleen met de toegang die jij geeft.",
      "Je data blijft van jou en we volgen de AVG.",
    ],
  },
  pricing: {
    eyebrow: "Wat kost het?",
    headline: "Eerste maand €69 — daarna vanaf €249 p/m.",
    terms: "Op maat: afgestemd op jouw proces en werkvolume. Maandelijks opzegbaar. Excl. btw.",
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
    title: "Welk werk wil jij als eerste laten klaarzetten?",
    text: "In een kort gesprek kijken we samen welke AI-medewerker bij jou past.",
  },
  homeLabel: "Naar de homepage",
  copyright: "© 2026 UPU Dev. Alle rechten voorbehouden.",
};

const aiElemanNl: AiTeamLandingDictionary = {
  ...commonNl,
  meta: {
    title: "AI-medewerkers in je eigen systemen — je AI-implementatiepartner | UPU Dev",
    description:
      "Wij richten AI-medewerkers in binnen je bestaande systemen en beheren ze op abonnementsbasis. Wij zetten klaar, jij keurt goed: orders, facturen, planning. Eerste maand €69, daarna vanaf €249 p/m. Maandelijks opzegbaar.",
  },
  hero: {
    badge: "Je AI-implementatiepartner",
    title: "Wij zetten klaar. Jij keurt goed.",
    subtitle:
      "Wij richten AI-medewerkers in binnen je bestaande systemen en beheren ze op abonnementsbasis. Zo heb je capaciteit voor het werk dat elke dag terugkomt: orders, facturen, planning.",
    priceNote: "Eerste maand €69 — daarna vanaf €249 p/m. Op maat, afgestemd op jouw proces.",
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
      "Maandag 08:00 en de orders staan al klaar voor jouw akkoord. AI-medewerkers, ingericht op hoe jouw groothandel werkt. Eerste maand €69, daarna vanaf €249 p/m.",
  },
  hero: {
    badge: "AI-medewerkers voor groothandels",
    title: "Maandag 08:00. De orders staan al klaar.",
    subtitle:
      "De bestellingen van het weekend staan klaar voor jouw akkoord. Facturen die niet kloppen liggen apart. Ingericht op hoe jouw groothandel werkt — jij begint de week met overzicht.",
    priceNote: "Eerste maand €69 — daarna vanaf €249 p/m. Op maat, afgestemd op jouw proces.",
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
      afterLabel: "Klaargezet in je systeem",
      after: ["Order klaar in je systeem", "Bevestiging wacht op jouw akkoord"],
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
    title: "Ekibiniz böyle görünebilir",
    intro: "Katalogdan seçilen hazır roller yok. Her AI elemanı sizin sürecinize göre kurarız. Toptancılıktan iki örnek:",
    members: [
      {
        robot: "order",
        name: "Order-medewerker (Sipariş Elemanı)",
        context: "Örnek · Satış",
        outcome: "Güne, siparişler sisteminizde onayınızı bekler hâlde başlarsınız.",
      },
      {
        robot: "boekhoud",
        name: "Boekhoud-medewerker (Muhasebe Elemanı)",
        context: "Örnek · Muhasebe",
        outcome: "Anlaşmanıza uymayan faturalar ayrılmış, sizi bekliyor.",
      },
    ],
    more: {
      title: "…ve tekrar eden her iş için",
      text: "Sizin işiniz mi? Elemanını biz kurarız. Her gün tekrar eden işi bize anlatın, onun için bir AI eleman kuralım.",
      examples: ["Planlama?", "Stok?", "Sizin işiniz?"],
    },
  },
  how: {
    eyebrow: "Sizinle nasıl çalışırız",
    title: "Önce dinleriz. Sonra kurarız.",
    steps: [
      { title: "Dinleriz", text: "Kısa bir görüşme: her gün hangi iş zamanınızı alıyor, şu an nasıl yapıyorsunuz?" },
      { title: "Bir iş gününe birlikte bakarız", text: "Sıradan bir iş gününüzü birlikte geçer, neyin hazırlanacağına birlikte karar veririz." },
      { title: "Deneme ayı €69", text: "Sizin sürecinize göre kurulur. Bir ay sizinle çalışır, her şeyi siz onaylarsınız." },
      { title: "Abonelik", text: "Memnun musunuz? Yönetimini biz sürdürür, işiniz değiştikçe ayarlarız. Her ay iptal edilebilir." },
    ],
  },
  control: {
    eyebrow: "Kontrol sizde",
    title: "Önce her şeyi siz onaylarsınız",
    items: [
      "Başta her şeyi size sorar.",
      "Emin değilse durur ve size sorar.",
      "Yalnızca sizin verdiğiniz erişimle çalışır.",
      "Verileriniz sizindir; AVG (GDPR) kurallarına uyarız.",
    ],
  },
  pricing: {
    eyebrow: "Ne kadar?",
    headline: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla.",
    terms: "Size özel: sürecinize ve iş hacminize göre belirlenir. Her ay iptal edilebilir. Fiyatlara KDV (btw) dahil değildir.",
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
    title: "İlk hangi işin hazırlanmasını istersiniz?",
    text: "Kısa bir görüşmede size hangi AI elemanın uyduğuna birlikte bakalım.",
  },
  homeLabel: "Ana sayfaya git",
  copyright: "© 2026 UPU Dev. Tüm hakları saklıdır.",
};

const aiElemanTr: AiTeamLandingDictionary = {
  ...commonTr,
  meta: {
    title: "Mevcut sistemlerinizde AI elemanlar — AI uygulama ortağınız | UPU Dev",
    description:
      "AI elemanları mevcut sistemlerinizin içinde kurar ve abonelikle yönetiriz. Biz hazırlarız, siz onaylarsınız: sipariş, fatura, planlama. İlk ay €69, sonra aylık €249'dan başlayan fiyatlarla. Her ay iptal edilebilir.",
  },
  hero: {
    badge: "AI uygulama ortağınız",
    title: "Biz hazırlarız. Siz onaylarsınız.",
    subtitle:
      "AI elemanları mevcut sistemlerinizin içinde kurar ve abonelikle yönetiriz. Böylece her gün tekrar eden işler için kapasiteniz olur: siparişler, faturalar, planlama.",
    priceNote: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla. Sürecinize göre, size özel.",
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
      "Pazartesi 08:00, siparişler onayınız için hazır. Toptancılığınızın çalışma şekline göre kurulan AI elemanlar. İlk ay €69, sonra aylık €249'dan başlayan fiyatlarla.",
  },
  hero: {
    badge: "Toptancılar için AI elemanlar",
    title: "Pazartesi 08:00. Siparişler hazır.",
    subtitle:
      "Hafta sonu gelen siparişler onayınız için hazır. Tutmayan faturalar ayrılmış. Toptancılığınızın çalışma şekline göre kurulur — siz haftaya düzenli başlarsınız.",
    priceNote: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla. Sürecinize göre, size özel.",
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
      afterLabel: "Sisteminizde hazırlandı",
      after: ["Sipariş sisteminizde hazır", "Onay mesajı onayınızı bekliyor"],
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
    title: "This is what your team could look like",
    intro: "No ready-made roles from a catalogue. We set up every AI employee around your process. Two examples from wholesale:",
    members: [
      {
        robot: "order",
        name: "Order-medewerker (Order employee)",
        context: "Example · Sales",
        outcome: "You start the day with the orders ready in your system, waiting for your approval.",
      },
      {
        robot: "boekhoud",
        name: "Boekhoud-medewerker (Bookkeeping employee)",
        context: "Example · Administration",
        outcome: "Invoices that don't match your agreements are set aside for you.",
      },
    ],
    more: {
      title: "…and any other recurring work",
      text: "Your work? We build the colleague. Tell us which work comes back every day and we set up an AI employee for it.",
      examples: ["Planning?", "Stock?", "Your work?"],
    },
  },
  how: {
    eyebrow: "How we work with you",
    title: "First we listen. Then we build.",
    steps: [
      { title: "We listen", text: "A short call: which work takes up your time every day, and how do you do it now?" },
      { title: "A working day together", text: "We walk through a normal working day with you and decide together what should be prepared." },
      { title: "Trial month €69", text: "Set up around your process. It works with you for a month, you approve everything." },
      { title: "Subscription", text: "Happy? We keep managing it and adjust it as your work changes. Cancel monthly." },
    ],
  },
  control: {
    eyebrow: "You stay in control",
    title: "You approve everything first",
    items: [
      "At the start it checks everything with you.",
      "In doubt? It stops and asks you.",
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
    title: "Which work should be prepared for you first?",
    text: "In a short call we look together at which AI employee fits you.",
  },
  homeLabel: "Go to the homepage",
  copyright: "© 2026 UPU Dev. All rights reserved.",
};

const aiElemanEn: AiTeamLandingDictionary = {
  ...commonEn,
  meta: {
    title: "AI employees in your own systems — your AI implementation partner | UPU Dev",
    description:
      "We set up AI employees inside your existing systems and manage them on a subscription basis. We prepare, you approve: orders, invoices, planning. First month €69, then from €249 per month. Cancel monthly.",
  },
  hero: {
    badge: "Your AI implementation partner",
    title: "We prepare. You approve.",
    subtitle:
      "We set up AI employees inside your existing systems and manage them on a subscription basis. That gives you capacity for the work that comes back every day: orders, invoices, planning.",
    priceNote: "First month €69 — then from €249 per month. Tailored to your process.",
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
      "Monday 08:00 and the orders are ready for your approval. AI employees set up around how your wholesale business works. First month €69, then from €249 per month.",
  },
  hero: {
    badge: "AI employees for wholesalers",
    title: "Monday 08:00. The orders are ready.",
    subtitle:
      "The weekend's orders are ready for your approval. Invoices that don't add up are set aside. Set up around how your wholesale business works — you start the week with a clear view.",
    priceNote: "First month €69 — then from €249 per month. Tailored to your process.",
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
      afterLabel: "Prepared in your system",
      after: ["Order ready in your system", "Confirmation waiting for your OK"],
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
