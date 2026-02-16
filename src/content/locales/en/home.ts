import { homeTr, type HomeDictionary } from "@/content/locales/tr/home";

export const homeEn: HomeDictionary = {
  ...homeTr,
  topbar: {
    ...homeTr.topbar,
    phoneLabel: "Phone",
  },
  nav: [
    { href: "#ana-sayfa", label: "Home" },
    { href: "#projeler", label: "Projects" },
    { href: "#hizmetler", label: "Services" },
    { href: "#hakkimizda", label: "About" },
    { href: "#surec", label: "Process" },
    { href: "/iletisim", label: "Contact" },
  ],
  hero: {
    ...homeTr.hero,
    title: "From idea to product, fast.",
    subtitle:
      "We accelerate your growth with modern web products, SaaS infrastructure, and digital automation solutions.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Get Quote",
    stats: [
      { value: "638+", label: "Consulting Sessions", note: "Completed sessions in the last 30 months" },
      { value: "%95", label: "Client Satisfaction", note: "Average post-delivery feedback score" },
      { value: "24/7", label: "Active Support", note: "Continuous monitoring for live systems" },
    ],
  },
  ongoing: {
    ...homeTr.ongoing,
    badge: "Portfolio",
    openLabel: "Open detail page",
    soonLabel: "Detail page coming soon",
    title: "SaaS Products and Ongoing Work",
    subtitle: "A snapshot of the products and solution tracks currently in active development.",
    items: [
      {
        slug: "bayi-yonetimi",
        name: "Dealer Management",
        category: "Dealer / Distributor SaaS",
        summary:
          "A comprehensive management platform that centralizes dealer onboarding, orders, stock, commissions, and performance analytics in one control panel.",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "muhasebe-asistani",
        name: "Accounting Assistant",
        category: "AI-Powered Finance Operations",
        summary:
          "Automates document processing, expense classification, and summary reporting to reduce repetitive finance tasks for SME teams.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "emlak-danismani-yardimcisi",
        name: "Real Estate Advisor Assistant",
        category: "Real Estate Operations SaaS",
        summary:
          "Unifies listing, client, appointment, document, and automated communication workflows for real estate agencies in a single operational flow.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "otel-asistanlari",
        name: "Hotel Assistants",
        category: "Reservation & Operations",
        summary:
          "AI-assisted modules for reservation workflows, channel management, and pricing support to improve occupancy and revenue operations.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "agent-ai-calismalari",
        name: "Agent AI Initiatives",
        category: "AI Agent Implementation",
        summary:
          "Task-oriented AI agent architectures for HR, onboarding, customer service, and workflow automation in high-volume operations.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "e-ticaret-web-uygulamalari",
        name: "E-commerce Web Applications",
        category: "Commerce Platforms",
        summary:
          "Scalable commerce infrastructure with payment, inventory, order, and customer account integrations for growth-focused digital brands.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  services: {
    ...homeTr.services,
    title: "Services",
    intro: "UPU Dev B.V. delivers end-to-end software, AI, and digital transformation services for SMEs in the Netherlands.",
    items: [
      {
        title: "Corporate Web Development",
        description: "High-performance, secure, and SEO-focused corporate web experiences.",
        tag: "Next.js",
      },
      {
        title: "Custom Software Development",
        description: "Business web apps, portals, and dashboards built with React, Next.js, and Laravel.",
        tag: "Custom Dev",
      },
      {
        title: "AI Integration & Chatbots",
        description: "Embedding AI into business workflows including chatbots and AI-assisted analysis/content systems.",
        tag: "AI Solutions",
      },
      {
        title: "Document Processing & Smart Analytics",
        description: "Automated document pipelines, data classification, and decision-support reporting tools.",
        tag: "AI Ops",
      },
      {
        title: "Digital Transformation Consulting",
        description: "Process optimization, legacy modernization, cloud migration support, and technical architecture guidance.",
        tag: "Consulting",
      },
      {
        title: "Maintenance, Support, and Security",
        description: "Ongoing technical support, updates, security patches, and performance optimization.",
        tag: "Support",
      },
      {
        title: "Hosting and Server Management",
        description: "Availability, monitoring, backups, and operational maintenance for production systems.",
        tag: "Hosting",
      },
    ],
  },
  about: {
    ...homeTr.about,
    title: "Why UpuDev?",
    description: "We combine technical rigor with business focus and build measurable results, not only visual outcomes.",
    bullets: [
      "Full-stack expertise: end-to-end delivery from database to interface",
      "AI integration focus: practical, high-impact business use cases",
      "Cost-effective model: agile structure compared to larger agencies",
      "Direct communication: developer-level contact without middle layers",
      "15+ years of project experience with local presence in Utrecht",
    ],
  },
  process: {
    ...homeTr.process,
    title: "Working Process",
    steps: [
      {
        id: "01",
        title: "Discovery and Strategy",
        text: "We clarify business goals, user flows, and technical requirements.",
      },
      {
        id: "02",
        title: "Design and Prototype",
        text: "We create a conversion-focused interface prototype aligned with your brand language.",
      },
      {
        id: "03",
        title: "Development and Testing",
        text: "We build and test with strong focus on speed, security, and quality.",
      },
      {
        id: "04",
        title: "Launch and Optimization",
        text: "After launch, we continuously improve using data and feedback.",
      },
    ],
  },
  testimonials: {
    ...homeTr.testimonials,
    title: "Client Testimonials",
    items: [
      {
        quote:
          "The UpuDev team gave us strong technical confidence throughout the project. Post-launch performance gains were clearly measurable.",
        name: "M. Korkmaz",
        role: "Operations Director",
      },
      {
        quote:
          "They did not just redesign a website, they simplified our entire digital workflow. Our operations run faster now.",
        name: "S. Demir",
        role: "Co-Founder",
      },
      {
        quote:
          "Fast delivery, proper documentation, and clear communication made a real difference for our team.",
        name: "A. Yildiz",
        role: "E-commerce Manager",
      },
    ],
  },
  cta: {
    ...homeTr.cta,
    title: "Let's plan your project together.",
    text: "Share your goals and we will prepare a tailored roadmap within 48 hours.",
    button: "Book Meeting",
  },
  contact: {
    ...homeTr.contact,
    title: "Contact",
    intro: "You can reach us for new projects, revisions, or technical support requests.",
  },
  footer: "© 2026 UpuDev. All rights reserved.",
};
