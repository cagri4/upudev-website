export type HomeDictionary = {
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
  ongoing: {
    badge: string;
    openLabel: string;
    soonLabel: string;
    title: string;
    subtitle: string;
    items: {
      slug?: string;
      name: string;
      category: string;
      summary: string;
      image: string;
    }[];
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
    phone: "+31 6 11352773",
    phoneHref: "tel:+31611352773",
  },
  nav: [
    { href: "#ana-sayfa", label: "Ana Sayfa" },
    { href: "#projeler", label: "Projeler" },
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#hakkimizda", label: "Hakkımızda" },
    { href: "#surec", label: "Süreç" },
    { href: "/iletisim", label: "İletişim" },
  ],
  hero: {
    badge: "SaaS & Yazılım Partneri",
    title: "Fikirden ürüne, hızla.",
    subtitle:
      "Modern web ürünleri, SaaS altyapıları ve dijital otomasyon çözümleri ile büyümenizi hızlandırıyoruz.",
    ctaPrimary: "Projeleri İncele",
    ctaSecondary: "Teklif Al",
    stats: [
      { value: "50+", label: "Tamamlanan Proje", note: "Farklı sektörlerde hayata geçirilen çözümler" },
      { value: "15+", label: "Yıllık Deneyim", note: "Yazılım ve dijital ürün geliştirme tecrübesi" },
      { value: "24/7", label: "Aktif Destek", note: "Canlı sistemler için kesintisiz takip" },
    ],
  },
  ongoing: {
    badge: "Portföy",
    openLabel: "Detay sayfasını aç",
    soonLabel: "Detay sayfası yakında",
    title: "SaaS Projeleri ve Çalışmalar",
    subtitle: "Şu an aktif geliştirmede olan ürün ve çözüm hatlarımızı paylaşıyoruz.",
    items: [
      {
        slug: "bayi-yonetimi",
        name: "Bayi Yönetimi",
        category: "Dealer / Distributor SaaS",
        summary:
          "Bayi onboarding, sipariş, stok, komisyon ve performans analitiğini tek panelde toplayan kapsamlı bir yönetim altyapısıdır. Üretici ve toptancı ekiplerinin operasyon takibini sadeleştirir, manuel süreçleri azaltır ve karar alma hızını artırır.",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "muhasebe-asistani",
        name: "Muhasebe Asistanı",
        category: "AI Destekli Finans Operasyonları",
        summary:
          "Belge işleme, gider sınıflandırma, özet raporlama ve temel muhasebe operasyonlarını AI desteğiyle hızlandırır. Özellikle KOBİ ekiplerinde tekrar eden finans işlerini azaltmayı, veri doğruluğunu artırmayı ve günlük takibi kolaylaştırmayı hedefler.",
        image:
          "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "emlak-danismani-yardimcisi",
        name: "Emlak Danışmanı Yardımcısı",
        category: "Emlak Operasyon SaaS",
        summary:
          "İlan yönetimi, müşteri takibi, randevu planlama, doküman kontrolü ve otomatik iletişim akışlarını tek bir sistemde birleştirir. Danışmanların saha ve ofis tarafındaki süreçlerini görünür hale getirerek daha düzenli ve izlenebilir bir çalışma modeli sunar.",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "otel-asistanlari",
        name: "Otel Asistanları",
        category: "Rezervasyon ve Operasyon",
        summary:
          "Rezervasyon akışı, kanal dağıtımı ve fiyat optimizasyonu için tasarlanan AI destekli yardımcı modüllerden oluşur. Operasyon ekiplerinin doluluk, gelir ve misafir deneyimi metriklerini daha etkin yönetebilmesi için pratik araçlar sağlar.",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "agent-ai-calismalari",
        name: "Agent AI Çalışmaları",
        category: "AI Agent Implementasyonu",
        summary:
          "HR, onboarding, müşteri hizmetleri ve süreç otomasyonu için görev odaklı agent mimarileri geliştiriyoruz. Amaç, işletmelerin yüksek hacimli operasyonlarında insan ekibin yükünü düşürmek, yanıt hızını artırmak ve standart bir hizmet kalitesi sağlamaktır.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "e-ticaret-web-uygulamalari",
        name: "E-Ticaret Web Uygulamaları",
        category: "Commerce Platformları",
        summary:
          "Ödeme, stok, sipariş ve müşteri paneli entegrasyonlarıyla ölçeklenebilir e-ticaret altyapıları geliştiriyoruz. Hızlı satın alma akışı, operasyonel verimlilik ve sürdürülebilir büyüme hedefiyle modern web uygulamaları olarak kurgulanır.",
        image:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
      },
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
    title: "Neden UpuDev?",
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
          "UpuDev ekibi proje boyunca teknik olarak güven verdi. Yayın sonrası performans artışı net şekilde ölçüldü.",
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
    phone: "+31 6 11352773",
    phoneHref: "tel:+31611352773",
    location: "Computerweg 22, 3542 DR Utrecht, Nederland",
    kvk: "98902148",
    iban: "NL59INGB0117119474",
    whatsapp: "https://wa.me/31611352773",
  },
  footer: "© 2026 UpuDev. Tüm hakları saklıdır.",
};
