import { homeTr, type HomeDictionary } from "@/content/locales/tr/home";

export const homeNl: HomeDictionary = {
  ...homeTr,
  topbar: {
    ...homeTr.topbar,
    phoneLabel: "Telefoon",
  },
  nav: [
    { href: "#ana-sayfa", label: "Home" },
    { href: "#projeler", label: "Projecten" },
    { href: "#hizmetler", label: "Diensten" },
    { href: "#hakkimizda", label: "Over ons" },
    { href: "#surec", label: "Proces" },
    { href: "/iletisim", label: "Contact" },
  ],
  hero: {
    ...homeTr.hero,
    title: "Van idee naar product, snel.",
    subtitle:
      "Wij versnellen uw groei met moderne webproducten, SaaS-infrastructuur en digitale automatiseringsoplossingen.",
    ctaPrimary: "Projecten Bekijken",
    ctaSecondary: "Offerte Aanvragen",
    stats: [
      { value: "638+", label: "Adviessessies", note: "Afgeronde sessies in de afgelopen 30 maanden" },
      { value: "%95", label: "Klanttevredenheid", note: "Gemiddelde feedbackscore na oplevering" },
      { value: "24/7", label: "Actieve Support", note: "Continue monitoring van live systemen" },
    ],
  },
  ongoing: {
    ...homeTr.ongoing,
    badge: "Portfolio",
    openLabel: "Detailpagina openen",
    soonLabel: "Detailpagina binnenkort beschikbaar",
    title: "SaaS-projecten en Lopende Werkzaamheden",
    subtitle: "Overzicht van producten en oplossingslijnen die momenteel actief in ontwikkeling zijn.",
    items: [
      {
        slug: "bayi-yonetimi",
        name: "Dealerbeheer",
        category: "Dealer / Distributor SaaS",
        summary:
          "Een uitgebreid platform dat onboarding, bestellingen, voorraad, commissies en prestatie-analyses van dealers in één beheerscherm centraliseert.",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "muhasebe-asistani",
        name: "Boekhoudassistent",
        category: "AI-ondersteunde Financiële Operaties",
        summary:
          "Automatiseert documentverwerking, kostenclassificatie en rapportages om repetitieve financiële taken voor MKB-teams te verminderen.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "emlak-danismani-yardimcisi",
        name: "Vastgoedadviseur Assistent",
        category: "Vastgoed Operations SaaS",
        summary:
          "Brengt objectbeheer, klantopvolging, afspraken, documenten en geautomatiseerde communicatie samen in één operationele workflow.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "otel-asistanlari",
        name: "Hotelassistenten",
        category: "Reservering & Operatie",
        summary:
          "AI-ondersteunde modules voor reserveringsstromen, kanaalbeheer en prijsoptimalisatie om bezetting en omzet beter te sturen.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "agent-ai-calismalari",
        name: "Agent AI-trajecten",
        category: "AI Agent Implementatie",
        summary:
          "Taakgerichte AI-agentarchitecturen voor HR, onboarding, klantenservice en procesautomatisering in operationeel intensieve teams.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "e-ticaret-web-uygulamalari",
        name: "E-commerce Webapplicaties",
        category: "E-commerce Platforms",
        summary:
          "Schaalbare e-commerce infrastructuur met integraties voor betalingen, voorraad, orders en klantaccounts voor groeigerichte merken.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  services: {
    ...homeTr.services,
    title: "Diensten",
    intro: "UPU Dev B.V. levert end-to-end software-, AI- en digitale transformatiediensten voor MKB-bedrijven in Nederland.",
    items: [
      {
        title: "Corporate Webontwikkeling",
        description: "Snelle, veilige en SEO-gerichte corporate webervaringen.",
        tag: "Next.js",
      },
      {
        title: "Maatwerk Softwareontwikkeling",
        description: "Zakelijke webapps, portals en dashboards gebouwd met React, Next.js en Laravel.",
        tag: "Custom Dev",
      },
      {
        title: "AI-integratie & Chatbots",
        description: "Integratie van AI in bedrijfsprocessen, inclusief chatbots en AI-ondersteunde analyse/contentstromen.",
        tag: "AI Solutions",
      },
      {
        title: "Documentverwerking & Slimme Analyse",
        description: "Geautomatiseerde documentpijplijnen, dataclassificatie en beslissingsondersteunende rapportage.",
        tag: "AI Ops",
      },
      {
        title: "Digitale Transformatie Advies",
        description: "Procesoptimalisatie, legacy-modernisering, cloudmigratie en technische architectuurbegeleiding.",
        tag: "Consulting",
      },
      {
        title: "Onderhoud, Support en Beveiliging",
        description: "Doorlopende support, updates, security patches en performance-optimalisatie.",
        tag: "Support",
      },
      {
        title: "Hosting en Serverbeheer",
        description: "Beschikbaarheid, monitoring, back-ups en operationeel onderhoud van productiesystemen.",
        tag: "Hosting",
      },
    ],
  },
  about: {
    ...homeTr.about,
    title: "Waarom UpuDev?",
    description: "We combineren technische precisie met businessfocus en leveren meetbare resultaten.",
    bullets: [
      "Full-stack expertise: end-to-end levering van database tot interface",
      "AI-integratie focus: praktische use-cases met aantoonbare impact",
      "Kostenbewust model: wendbare structuur t.o.v. grotere bureaus",
      "Directe communicatie: contact op ontwikkelaarsniveau zonder tussenlagen",
      "15+ jaar projectervaring met lokale aanwezigheid in Utrecht",
    ],
  },
  process: {
    ...homeTr.process,
    title: "Werkwijze",
    steps: [
      {
        id: "01",
        title: "Analyse en Strategie",
        text: "We maken doelen, gebruikersstromen en technische behoeften helder.",
      },
      {
        id: "02",
        title: "Design en Prototype",
        text: "We ontwerpen een conversiegerichte interface die past bij je merk.",
      },
      {
        id: "03",
        title: "Ontwikkeling en Test",
        text: "We bouwen en testen met focus op snelheid, veiligheid en kwaliteit.",
      },
      {
        id: "04",
        title: "Lancering en Optimalisatie",
        text: "Na livegang verbeteren we continu op basis van data en feedback.",
      },
    ],
  },
  testimonials: {
    ...homeTr.testimonials,
    title: "Klantreacties",
    items: [
      {
        quote:
          "Het UpuDev-team gaf ons tijdens het hele traject technisch vertrouwen. De performancewinst na livegang was duidelijk meetbaar.",
        name: "M. Korkmaz",
        role: "Operationeel Directeur",
      },
      {
        quote:
          "Ze vernieuwden niet alleen onze website, maar vereenvoudigden ook onze volledige digitale workflow. Ons team werkt aantoonbaar sneller.",
        name: "S. Demir",
        role: "Medeoprichter",
      },
      {
        quote:
          "Snelle oplevering, degelijke documentatie en heldere communicatie maakten echt het verschil voor ons project.",
        name: "A. Yildiz",
        role: "E-commerce Manager",
      },
    ],
  },
  cta: {
    ...homeTr.cta,
    title: "Laten we je project samen plannen.",
    text: "Deel je doelen en wij maken binnen 48 uur een passende roadmap.",
    button: "Afspraak Inplannen",
  },
  contact: {
    ...homeTr.contact,
    title: "Contact",
    intro: "Neem contact op voor nieuwe projecten, revisies of technische ondersteuning.",
  },
  footer: "© 2026 UpuDev. Alle rechten voorbehouden.",
};
