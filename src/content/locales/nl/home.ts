import { homeTr, type HomeDictionary } from "@/content/locales/tr/home";

export const homeNl: HomeDictionary = {
  ...homeTr,
  meta: {
    title: "UPU Dev | AI-implementatiepartner — Wij zetten klaar, jij keurt goed",
    description:
      "Wij richten AI-medewerkers in binnen je bestaande systemen en beheren ze op abonnementsbasis. Capaciteit voor terugkerend werk: facturen, orders, planning. Eerste maand €69, daarna vanaf €249 p/m. Maandelijks opzegbaar.",
  },
  partners: {
    ...homeTr.partners,
    title: "Ons Technologie-ecosysteem en Partners",
  },
  topbar: {
    ...homeTr.topbar,
    phoneLabel: "Telefoon",
  },
  nav: [
    { href: "#ana-sayfa", label: "Home" },
    { href: "#team", label: "Ons team" },
    { href: "#nasil-calisir", label: "Zo werkt het" },
    { href: "#fiyat", label: "Prijzen" },
    { href: "#referenties", label: "Referenties" },
    { href: "/iletisim", label: "Contact" },
  ],
  hero: {
    ...homeTr.hero,
    badge: "SaaS & Software Partner",
    title: "Van idee naar product, snel.",
    subtitle:
      "Wij bouwen digitale oplossingen speciaal voor Turkse ondernemers en MKB-bedrijven in Nederland.",
    ctaPrimary: "Projecten Bekijken",
    ctaSecondary: "Offerte Aanvragen",
    stats: [
      { value: "50+", label: "Afgeronde Projecten", note: "Oplossingen geleverd in diverse sectoren" },
      { value: "15+", label: "Jaar Ervaring", note: "Expertise in software- en digitale productontwikkeling" },
      { value: "24/7", label: "Actieve Support", note: "Continue monitoring van live systemen" },
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
    title: "Waarom UPU Dev?",
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
          "Het UPU Dev-team gaf ons tijdens het hele traject technisch vertrouwen. De performancewinst na livegang was duidelijk meetbaar.",
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
  footer: "© 2026 UPU Dev. Alle rechten voorbehouden.",
};
