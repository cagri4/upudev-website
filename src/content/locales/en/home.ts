import { homeTr, type HomeDictionary } from "@/content/locales/tr/home";

export const homeEn: HomeDictionary = {
  ...homeTr,
  meta: {
    title: "UPU Dev | AI implementation partner — We prepare, you approve",
    description:
      "We set up AI employees inside your existing systems and manage them on a subscription basis. Capacity for recurring work: invoices, orders, planning. First month €69, then from €249/mo. Cancel monthly.",
  },
  partners: {
    ...homeTr.partners,
    title: "Our Technology Ecosystem and Partners",
  },
  topbar: {
    ...homeTr.topbar,
    phoneLabel: "Phone",
  },
  nav: [
    { href: "#ana-sayfa", label: "Home" },
    { href: "#team", label: "Our team" },
    { href: "#nasil-calisir", label: "How it works" },
    { href: "#fiyat", label: "Pricing" },
    { href: "#referenties", label: "References" },
    { href: "/iletisim", label: "Contact" },
  ],
  hero: {
    ...homeTr.hero,
    badge: "SaaS & Software Partner",
    title: "From idea to product, fast.",
    subtitle:
      "We build custom digital products for SMEs and entrepreneurs in the Netherlands — with Turkish, Dutch and English support.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Get Quote",
    stats: [
      { value: "50+", label: "Completed Projects", note: "Solutions delivered across various industries" },
      { value: "15+", label: "Years of Experience", note: "Software and digital product development expertise" },
      { value: "24/7", label: "Active Support", note: "Continuous monitoring for live systems" },
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
    title: "Why UPU Dev?",
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
          "The UPU Dev team gave us strong technical confidence throughout the project. Post-launch performance gains were clearly measurable.",
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
  footer: "© 2026 UPU Dev. All rights reserved.",
};
