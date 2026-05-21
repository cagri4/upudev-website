import { dijitalEkibinizTr, type DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

export const dijitalEkibinizNl: DijitalEkibinizDictionary = {
  ...dijitalEkibinizTr,
  meta: {
    title: "UPU Uw Digitale Team — AI-gedreven Sales, AI Medewerker, SaaS, Social",
    description:
      "Een compleet digitaal team voor Turkse ondernemers in Nederland: AI-gedreven salescampagnes, AI Medewerker, sector-SaaS, social media en website in één pakket.",
  },
  hero: {
    badge: "Eén pakket, volledig digitaal team",
    title: "UPU Uw Digitale Team",
    subtitle:
      "AI-gedreven salescampagnes, AI Medewerker, sector-specifieke SaaS, social media beheer, website en contentproductie — één team in één pakket voor uw Turkse onderneming in Nederland.",
    ctaPrimary: "Gratis Kennismaking",
    ctaSecondary: "WhatsApp",
    trust: "Gevestigd in Nederland, KVK 98902148, Nederlandstalige & Turkse support",
  },
  benefits: {
    title: "Eén partner, vier specialismen",
    items: [
      { icon: "🎯", title: "Salescampagnes", text: "Verhoog meetbaar uw omzet met AI-gedreven Google Ads en social media campagnes." },
      { icon: "🤖", title: "UPU AI Medewerker", text: "24/7 AI-assistent: operaties, rapportages en klantopvolging via WhatsApp." },
      { icon: "📱", title: "Social + Web + Content", text: "Instagram + Facebook + website + blogcontent van ons specialistenteam." },
      { icon: "📊", title: "Sector SaaS", text: "Vastgoed, dealer, restaurant, hotel, retail — kant-en-klare software voor uw sector." },
    ],
  },
  process: {
    title: "Hoe Werken Wij",
    steps: [
      { id: "01", title: "Kennismakingsgesprek", text: "15 min via WhatsApp of online — wij luisteren naar uw behoefte." },
      { id: "02", title: "Pakketvoorstel op maat", text: "Binnen 24 uur ontvangt u een passend pakketvoorstel." },
      { id: "03", title: "Ons team neemt het over", text: "Wij voeren uit, u ziet de resultaten." },
    ],
  },
  trustClients: {
    title: "Bedrijven waar we mee werken",
    items: ["Doga Turizm Kaş", "—", "—", "—", "—", "—"],
  },
  form: {
    ...dijitalEkibinizTr.form,
    title: "Laten we kennismaken — reactie binnen 24 uur",
    subtitle: "Geen verplichting, gratis kennismakingsgesprek.",
    nameLabel: "Naam",
    namePlaceholder: "Uw volledige naam",
    phoneLabel: "Telefoon",
    phonePlaceholder: "+31 ...",
    companyLabel: "Bedrijfsnaam (optioneel)",
    companyPlaceholder: "Uw bedrijfsnaam",
    sectorLabel: "Uw Sector",
    sectorOptions: ["Selecteer", "Vastgoed", "Dealer / Distributeur", "Restaurant / Catering", "Hotel", "Retail / Supermarkt", "Boekhouding", "Anders"],
    priorityLabel: "Wat is voor u prioriteit?",
    priorityOptions: [
      "Selecteer",
      "AI Medewerker / SaaS",
      "Salescampagnes (Google + social)",
      "Social media beheer",
      "Website / content",
      "Alles",
    ],
    submit: "Vraag Gratis Kennismaking Aan",
    sending: "Verzenden...",
    success: "Uw aanvraag is ontvangen. We nemen binnen 24 uur contact op!",
    error: "Er ging iets mis. Probeer opnieuw of neem contact op via WhatsApp.",
    requiredError: "Vul de verplichte velden in.",
    phoneError: "Voer een geldig telefoonnummer in.",
  },
  faq: {
    title: "Veelgestelde Vragen",
    items: [
      { q: "Hoe snel kunnen we starten?", a: "Binnen 3-5 werkdagen na het kennismakingsgesprek. Bij urgentie binnen 24 uur." },
      { q: "Wat zijn de maandkosten?", a: "Tussen €99-€399 afhankelijk van de dienst. Het exacte bedrag bepalen we tijdens het gratis kennismakingsgesprek." },
      { q: "Kan ik Turkse support krijgen?", a: "Ja. Communicatie en rapportage in Turks, Nederlands en Engels." },
      { q: "Werken jullie buiten Nederland?", a: "Onze focus zijn Turkse ondernemingen in Nederland. We werken ook met Turkse ondernemers in België en Duitsland." },
      { q: "Is er een contractduur?", a: "We werken op maandbasis, geen langetermijnverplichting nodig." },
    ],
  },
  footerNote: "UPU Dev B.V. — KVK 98902148 — Computerweg 22, 3542 DR Utrecht",
};
