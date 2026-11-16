export type HomeDictionary = {
  meta: {
    title: string;
    description: string;
  };
  partners: {
    title: string;
    items: {
      name: string;
      logo: string;
    }[];
  };
  topbar: {
    address: string;
    phoneLabel: string;
    phone: string;
    phoneHref: string;
  };
  nav: { href: string; label: string }[];
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string; note: string }[];
  };
  services: {
    title: string;
    intro: string;
    items: { title: string; description: string; tag: string }[];
  };
  about: {
    title: string;
    description: string;
    bullets: string[];
  };
  process: {
    title: string;
    steps: { id: string; title: string; text: string }[];
  };
  testimonials: {
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
  contact: {
    title: string;
    intro: string;
    email: string;
    phone: string;
    phoneHref: string;
    location: string;
    kvk: string;
    iban: string;
    whatsapp: string;
  };
  footer: string;
};

export const homeTr: HomeDictionary = {
  meta: {
    title: "UPU Dev | AI uygulama ortağı — Biz hazırlarız, siz onaylarsınız",
    description:
      "AI elemanları mevcut sistemlerinizin içinde kurar ve abonelikle yönetiriz. Tekrar eden işler için kapasite: faturalar, siparişler, planlama. İlk ay €69, sonra aylık €249'dan başlayan fiyatlarla. Her ay iptal edilebilir.",
  },
  partners: {
    title: "Teknoloji Ekosistemimiz ve İş Ortaklarımız",
    items: [
      { name: "GitHub", logo: "/logos/partners/github.svg" },
      { name: "ING Bank", logo: "/logos/partners/ing-bank.svg" },
      { name: "Mollie", logo: "/logos/partners/mollie.png" },
      { name: "Anthropic", logo: "/logos/partners/anthropic.svg" },
      { name: "OpenAI", logo: "/logos/partners/openai.svg" },
      { name: "Next.js", logo: "/logos/partners/nextjs.svg" },
      { name: "Vercel", logo: "/logos/partners/vercel.svg" },
      { name: "Ubuntu", logo: "/logos/partners/ubuntu.svg" },
    ],
  },
  topbar: {
    address: "Computerweg 22, 3542 DR Utrecht, Nederland",
    phoneLabel: "Telefon",
    phone: "+31 30 369 1880",
    phoneHref: "tel:+31303691880",
  },
  nav: [
    { href: "#ana-sayfa", label: "Ana Sayfa" },
    { href: "#team", label: "Ekibimiz" },
    { href: "#nasil-calisir", label: "Nasıl Çalışır" },
    { href: "#fiyat", label: "Fiyatlar" },
    { href: "#referenties", label: "Referanslar" },
    { href: "/iletisim", label: "İletişim" },
  ],
  hero: {
    badge: "SaaS & Yazılım Partneri",
    title: "Fikirden ürüne, hızla.",
    subtitle:
      "Hollanda'daki KOBİ'ler ve girişimciler için özel dijital çözümler geliştiriyoruz — Türkçe, Hollandaca ve İngilizce destekle.",
    ctaPrimary: "Projeleri İncele",
    ctaSecondary: "Teklif Al",
    stats: [
      { value: "50+", label: "Tamamlanan Proje", note: "Farklı sektörlerde hayata geçirilen çözümler" },
      { value: "15+", label: "Yıllık Deneyim", note: "Yazılım ve dijital ürün geliştirme tecrübesi" },
      { value: "24/7", label: "Aktif Destek", note: "Canlı sistemler için kesintisiz takip" },
    ],
  },
  services: {
    title: "Hizmetler",
    intro: "UPU Dev B.V., Hollanda'daki KOBİ'ler için yazılım, AI ve dijital dönüşüm odaklı uçtan uca hizmet sunar.",
    items: [
      {
        title: "Kurumsal Web Geliştirme",
        description: "Performanslı, SEO odaklı ve güvenli kurumsal web deneyimleri.",
        tag: "Next.js",
      },
      {
        title: "Özel Yazılım Geliştirme",
        description: "React, Next.js ve Laravel ile web uygulamaları, portal ve dashboard geliştirme.",
        tag: "Custom Dev",
      },
      {
        title: "AI Entegrasyonu ve Chatbot",
        description: "Mevcut iş süreçlerine AI entegrasyonu, chatbot ve AI destekli içerik/analiz çözümleri.",
        tag: "AI Solutions",
      },
      {
        title: "Belge İşleme ve Akıllı Analiz",
        description: "Otomatik doküman işleme, veri sınıflandırma ve karar destek analitiği araçları.",
        tag: "AI Ops",
      },
      {
        title: "Dijital Dönüşüm Danışmanlığı",
        description: "İş süreç optimizasyonu, legacy modernizasyonu, cloud migration ve teknik mimari danışmanlığı.",
        tag: "Consulting",
      },
      {
        title: "Bakım, Destek ve Güvenlik",
        description: "Sürekli teknik destek, güncelleme, güvenlik yamaları ve performans optimizasyonu.",
        tag: "Support",
      },
      {
        title: "Hosting ve Sunucu Yönetimi",
        description: "Yüksek erişilebilirlik, izleme, yedekleme ve operasyonel bakım süreçlerinin yönetimi.",
        tag: "Hosting",
      },
    ],
  },
  about: {
    title: "Neden UPU Dev?",
    description:
      "Teknik doğrulukla iş odaklı bakışı birleştiriyoruz. Sadece görünüm değil, ölçülebilir sonuç üretiyoruz.",
    bullets: [
      "Full-stack uzmanlık: veri tabanından arayüze uçtan uca geliştirme",
      "AI entegrasyon odağı: iş verimliliği için gerçek kullanım senaryoları",
      "Maliyet etkin yaklaşım: büyük ajanslara göre daha çevik ve rekabetçi model",
      "Doğrudan iletişim: aracı olmadan geliştirici ile birebir çalışma",
      "15+ yıl proje deneyimi ve Utrecht merkezli yerel erişilebilirlik",
    ],
  },
  process: {
    title: "Çalışma Süreci",
    steps: [
      {
        id: "01",
        title: "Keşif ve Strateji",
        text: "Hedefleri, kullanıcı akışlarını ve teknik ihtiyaçları netleştiriyoruz.",
      },
      {
        id: "02",
        title: "Tasarım ve Prototip",
        text: "Marka diliyle uyumlu, dönüşüm odaklı arayüz prototipi çıkarıyoruz.",
      },
      {
        id: "03",
        title: "Geliştirme ve Test",
        text: "Hız, güvenlik ve kalite odaklı geliştirip test ederek canlıya hazırlıyoruz.",
      },
      {
        id: "04",
        title: "Yayın ve Optimizasyon",
        text: "Yayın sonrası veriye göre sürekli iyileştirme ve destek sunuyoruz.",
      },
    ],
  },
  testimonials: {
    title: "Müşteri Yorumları",
    items: [
      {
        quote:
          "UPU Dev ekibi proje boyunca teknik olarak güven verdi. Yayın sonrası performans artışı net şekilde ölçüldü.",
        name: "M. Korkmaz",
        role: "Operasyon Direktörü",
      },
      {
        quote:
          "Sadece site değil, tüm dijital sürecimizi sadeleştirdiler. İş akışlarımız daha hızlı ilerliyor.",
        name: "S. Demir",
        role: "Kurucu Ortak",
      },
      {
        quote:
          "Kısa sürede teslim, düzgün dokümantasyon ve net iletişim bizim için en büyük fark oldu.",
        name: "A. Yıldız",
        role: "E-Ticaret Yöneticisi",
      },
    ],
  },
  cta: {
    title: "Projeni birlikte planlayalım.",
    text: "Hedeflerini paylaş, sana uygun yol haritasını 48 saat içinde oluşturalım.",
    button: "Toplantı Planla",
  },
  contact: {
    title: "İletişim",
    intro: "Yeni proje, revizyon veya teknik destek taleplerin için bize ulaşabilirsin.",
    email: "info@upudev.nl",
    phone: "+31 30 369 1880",
    phoneHref: "tel:+31303691880",
    location: "Computerweg 22, 3542 DR Utrecht, Nederland",
    kvk: "98902148",
    iban: "NL59INGB0117119474",
    whatsapp: "https://wa.me/31611352773",
  },
  footer: "© 2026 UPU Dev. Tüm hakları saklıdır.",
};
