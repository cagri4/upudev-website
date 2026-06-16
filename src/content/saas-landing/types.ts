import type { Locale } from "@/lib/i18n";

/**
 * SaaS Landing şablonu — config sözleşmesi.
 *
 * Tüm bölümler bu config'ten beslenir. Yeni bir SaaS landing'i = yeni config.
 * İskelet (layout + motion + spacing + nav + footer + CTA bandı) sabit;
 * sadece bu slot'lar değişir. Market pilotu referans implementasyon.
 */

/** Tek bir WhatsApp sohbet balonu (gerçek ürün UI'sini taklit eder). */
export interface ChatBubble {
  /** "in" = müşteri/gelen, "out" = AI asistan/giden */
  side: "in" | "out";
  text: string;
  /** Opsiyonel küçük etiket (örn. dil rozeti "NL", "TR") */
  tag?: string;
  /** Opsiyonel saat damgası */
  time?: string;
}

export interface HeroVisual {
  /** Telefon ekranındaki WhatsApp sohbeti */
  chat: {
    contactName: string;
    contactStatus: string;
    bubbles: ChatBubble[];
    /** Balonların altında gösterilen TR ipucu (sahibe çeviri) */
    trHint?: string;
  };
  /** Cam QR kartı */
  qr: {
    title: string;
    sub: string;
    caption: string;
  };
}

export interface PainItem {
  icon: string;
  title: string;
  text: string;
}

export interface HowItWorksStep {
  id: string;
  kicker: string;
  title: string;
  text: string;
  /** Bu adımda telefonda görünen sohbet balonları (sticky-scroll için birikir) */
  bubbles: ChatBubble[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  text: string;
  /** Bento'da büyük hücre mi (2 sütun kaplar) */
  large?: boolean;
  /** Dürüstlük/sınır hücresi — farklı stil (güven sinyali) */
  honest?: boolean;
}

export interface StatItem {
  /** Sayaç hedef değeri (sayısal animasyon için) */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** "illüstratif" gibi küçük dipnot */
  note?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CtaConfig {
  label: string;
  /** `{locale}` yer tutucusu render anında çözülür. WA için tam URL. */
  href: string;
  /** Yeni sekmede mi açılsın (WA gibi) */
  external?: boolean;
}

export interface SaasLandingConfig {
  /** Sayfa <title>/description */
  meta: { title: string; description: string };
  /** Marka aksanı — CSS değişkeni olarak köke basılır, tüm SaaS swap edilir. */
  accent: {
    base: string;
    strong: string;
    soft: string;
    ring: string;
  };
  nav: {
    brandHref: string;
    links: { label: string; href: string }[];
  };
  hero: {
    badge: string;
    title: string;
    sub: string;
    trust: string;
    visual: HeroVisual;
  };
  socialProof: {
    title: string;
    /** Logo yoksa illüstratif tek satır istatistik */
    line: string;
    badges: string[];
  };
  pains: {
    title: string;
    sub: string;
    items: PainItem[];
  };
  howItWorks: {
    title: string;
    sub: string;
    steps: HowItWorksStep[];
  };
  features: {
    title: string;
    sub: string;
    items: FeatureItem[];
  };
  proof: {
    title: string;
    stats: StatItem[];
    testimonial: Testimonial;
  };
  audience: {
    kicker: string;
    title: string;
    body: string;
    points: string[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    sub: string;
  };
  ctaPrimary: CtaConfig;
  ctaSecondary: CtaConfig;
  footerNote: string;
}

export type SaasLandingDictionary = Partial<Record<Locale, SaasLandingConfig>>;
