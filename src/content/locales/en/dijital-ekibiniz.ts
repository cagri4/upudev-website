import { dijitalEkibinizTr, type DijitalEkibinizDictionary } from "@/content/locales/tr/dijital-ekibiniz";

export const dijitalEkibinizEn: DijitalEkibinizDictionary = {
  ...dijitalEkibinizTr,
  meta: {
    title: "UPU Your Digital Team — AI-Driven Sales, AI Employee, SaaS, Social",
    description:
      "An all-in-one digital team for Turkish-owned businesses in the Netherlands: AI-driven sales campaigns, AI Employee, industry SaaS, social media and website.",
  },
  hero: {
    badge: "One package, full digital team",
    title: "UPU Your Digital Team",
    subtitle:
      "AI-driven sales campaigns, AI Employee, industry-specific SaaS, social media management, website and content production — one team in one package for your Turkish business in the Netherlands.",
    ctaPrimary: "Free Intro Call",
    ctaSecondary: "WhatsApp",
    trust: "Based in the Netherlands, KVK 98902148, Turkish & English support",
  },
  benefits: {
    title: "One partner, four specialties",
    items: [
      { icon: "🎯", title: "Sales Campaigns", text: "Grow sales measurably with AI-driven Google Ads and social media campaigns." },
      { icon: "🤖", title: "UPU AI Employee", text: "24/7 AI assistant: operations, reports and customer follow-up via WhatsApp." },
      { icon: "📱", title: "Social + Web + Content", text: "Instagram + Facebook + website + blog content from our specialist team." },
      { icon: "📊", title: "Industry SaaS", text: "Real estate, dealer, restaurant, hotel, retail — ready software tailored to your sector." },
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
  trustClients: {
    title: "Businesses we work with",
    items: ["Doga Turizm Kaş", "—", "—", "—", "—", "—"],
  },
  form: {
    ...dijitalEkibinizTr.form,
    title: "Let's talk — reply within 24 hours",
    subtitle: "No commitment, free intro call.",
    nameLabel: "Full Name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    phonePlaceholder: "+31 ...",
    companyLabel: "Company Name (optional)",
    companyPlaceholder: "Your company name",
    sectorLabel: "Your Sector",
    sectorOptions: ["Select", "Real Estate", "Dealer / Distributor", "Restaurant / Catering", "Hotel", "Retail / Grocery", "Accounting", "Other"],
    priorityLabel: "What's your priority?",
    priorityOptions: [
      "Select",
      "AI Employee / SaaS",
      "Sales campaigns (Google + social)",
      "Social media management",
      "Website / content",
      "All of the above",
    ],
    submit: "Request Free Intro Call",
    sending: "Sending...",
    success: "Your request was received. We will get back within 24 hours!",
    error: "Something went wrong. Please try again or reach us on WhatsApp.",
    requiredError: "Please fill in the required fields.",
    phoneError: "Please enter a valid phone number.",
  },
  faq: {
    title: "Frequently Asked",
    items: [
      { q: "How fast can we start?", a: "Within 3-5 working days after the intro call. For urgent needs we can start in 24 hours." },
      { q: "What does it cost monthly?", a: "Between €99-€399 depending on the service. The exact figure is set after the free intro call." },
      { q: "Can I get Turkish support?", a: "Yes. All communication and reporting is available in Turkish, Dutch and English." },
      { q: "Do you work outside the Netherlands?", a: "Our focus is Turkish businesses in the Netherlands. We also work with Turkish entrepreneurs in Belgium and Germany." },
      { q: "Is there a contract lock-in?", a: "We work on monthly subscriptions, no long-term commitment required." },
    ],
  },
  footerNote: "UPU Dev B.V. — KVK 98902148 — Computerweg 22, 3542 DR Utrecht",
};
