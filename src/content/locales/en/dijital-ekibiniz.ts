import { dijitalEkibinizTr, type DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

export const dijitalEkibinizEn: DijitalEkibinizDictionary = {
  ...dijitalEkibinizTr,
  meta: {
    title: "UPU Your Digital Team — AI Sales, B2B Dealer Portal, E-commerce",
    description:
      "An all-in-one digital team for Turkish-owned businesses in the Netherlands: AI-driven sales campaigns, AI Employee, B2B dealer portal, e-commerce site, industry SaaS, social media and content.",
  },
  hero: {
    badge: "All-in-one digital team — Turkish & English support in the Netherlands",
    title: "UPU Your Digital Team",
    subtitle:
      "AI-driven sales campaigns, AI Employee, industry-specific SaaS, B2B dealer portal, e-commerce site, social media management and content production — one team in one package for your Turkish business in the Netherlands.",
    ctaQuote: "Request a Quote",
    ctaMeeting: "Book a Meeting",
    ctaWhatsapp: "WhatsApp",
    trust: "Based in the Netherlands, KVK 98902148, Turkish & English support",
  },
  capabilities: {
    title: "One team, many specialties",
    subtitle: "An expert team for every digital need of your business — in one package.",
    items: [
      {
        icon: "🎯",
        title: "Google Ads & Social Media Ads",
        text: "Grow sales measurably with AI-driven campaigns. We manage your Google, Meta and Instagram ads with a specialist team.",
      },
      {
        icon: "🤖",
        title: "AI Assistant & Automation",
        text: "An AI employee that runs operations, reports and customer follow-up over WhatsApp — works 24/7, never gets tired.",
      },
      {
        icon: "🏪",
        title: "B2B Dealer & Wholesale System",
        text: "A private B2B portal where your dealers order. Current account, stock, WhatsApp ordering, collections and due dates — all in one panel.",
      },
      {
        icon: "🛒",
        title: "E-commerce Site & Online Sales Platform",
        text: "An affordable, professional e-commerce site delivered turnkey. Payment integration, product management, mobile-friendly out of the box.",
      },
      {
        icon: "💻",
        title: "Turkish Software Firm in the Netherlands",
        text: "Custom website, mobile app and enterprise software for your business — the only developer team in the Netherlands offering Turkish support.",
      },
      {
        icon: "📱",
        title: "Social Media Management & Content",
        text: "Instagram, Facebook and blog content — a professional social media agency service. Your brand looks great on every channel.",
      },
      {
        icon: "🏬",
        title: "Industry SaaS Solutions",
        text: "Real estate CRM, restaurant management, hotel reservations, retail POS, building management — ready-to-use SaaS for your sector.",
      },
      {
        icon: "🍽",
        title: "QR Menu & Online Ordering",
        text: "A QR-code digital menu, online ordering, table reservations and customer loyalty for your restaurant — one package.",
      },
    ],
  },
  process: {
    title: "How We Work",
    steps: [
      { id: "01", title: "Intro call", text: "15 min on WhatsApp or online — we listen to your needs." },
      { id: "02", title: "Custom package proposal", text: "Within 24 hours we send a package proposal that fits you." },
      { id: "03", title: "Our team takes over", text: "We execute, you watch the results." },
    ],
  },
  formCommon: {
    nameLabel: "Full Name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    phonePlaceholder: "+31 ...",
    companyLabel: "Company Name (optional)",
    companyPlaceholder: "Your company name",
    sectorLabel: "Your Sector",
    sectorOptions: ["Select", "Real Estate", "Dealer / Wholesale", "Restaurant / Catering", "Hotel", "Retail / Grocery", "Accounting", "Other"],
    priorityLabel: "What's your priority?",
    priorityOptions: [
      "Select",
      "B2B Dealer Portal",
      "E-commerce Site",
      "AI Employee / Automation",
      "Website / Mobile App",
      "Social Media Management",
      "Industry SaaS (real estate/restaurant/hotel/retail)",
      "Other",
    ],
    requiredError: "Please fill in the required fields.",
    phoneError: "Please enter a valid phone number.",
    error: "Something went wrong. Please try again or reach us on WhatsApp.",
    sending: "Sending...",
  },
  teklifModal: {
    triggerHelp: "We'll need a few details for a tailored quote.",
    title: "Request a Quote",
    subtitle: "We get back to you within 24 hours with a tailored quote.",
    messageLabel: "Briefly describe your needs (optional)",
    messagePlaceholder: "Your current situation, goals or specific requests...",
    submit: "Request Quote",
    successTitle: "Request received",
    successText: "We'll get back within 24 hours with a tailored quote.",
    closeLabel: "Close",
  },
  toplantiModal: {
    triggerHelp: "Pick a convenient time, we'll call you.",
    title: "Book a Meeting",
    subtitle: "Pick a date, time and your preferred contact channel — we confirm availability within 1-2 hours.",
    dateLabel: "Pick a date",
    dateHelp: "Select a day within the next 14 days starting tomorrow (weekends included).",
    timeLabel: "Pick a time (09:00–17:30, 30 min slots)",
    timePlaceholder: "Select a time",
    contactPreferenceLabel: "Preferred contact channel",
    contactPreferenceOptions: [
      { value: "WhatsApp Görüntülü", label: "WhatsApp Video" },
      { value: "Online Görüntülü (Zoom/Meet)", label: "Online Video (Zoom/Meet)" },
      { value: "Telefon Aramasız (sesli)", label: "Phone (audio only)" },
    ],
    submit: "Request Meeting",
    successTitle: "Request received",
    successText: "We'll confirm your selected date and time within 1-2 hours.",
    closeLabel: "Close",
  },
  faq: {
    title: "Frequently Asked",
    items: [
      { q: "How fast can we start?", a: "Within 3-5 working days after the intro call. For urgent needs we can start in 24 hours." },
      { q: "What does it cost monthly?", a: "Between €99-€399 depending on the service. The exact figure is set after the free intro call." },
      { q: "Can I get Turkish support?", a: "Yes. All communication and reporting is available in Turkish, Dutch and English." },
      { q: "Do you work outside the Netherlands?", a: "Our focus is Turkish businesses in the Netherlands. We also work with Turkish entrepreneurs in Belgium and Germany." },
      { q: "Is there a contract lock-in?", a: "We work on monthly subscriptions, no long-term commitment required." },
      {
        q: "Is the B2B dealer portal / e-commerce site delivered turnkey?",
        a: "Yes. Domain, hosting, design, payment integration, product/dealer setup and user training are all included. Once live, you only work from the admin panel.",
      },
      {
        q: "Can I get a demo for the industry SaaS modules?",
        a: "Of course. We can schedule a 15 min live demo for real estate CRM, restaurant management, hotel reservations, retail POS and building management. Pick a slot from the Book a Meeting button.",
      },
    ],
  },
  footerNote: "UPU Dev B.V. — KVK 98902148 — Computerweg 22, 3542 DR Utrecht",
};
