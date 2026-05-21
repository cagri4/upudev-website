export type DijitalEkibinizDictionary = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  benefits: {
    title: string;
    items: { icon: string; title: string; text: string }[];
  };
  process: {
    title: string;
    steps: { id: string; title: string; text: string }[];
  };
  trustClients: {
    title: string;
    items: string[];
  };
  form: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    sectorLabel: string;
    sectorOptions: string[];
    priorityLabel: string;
    priorityOptions: string[];
    submit: string;
    sending: string;
    success: string;
    error: string;
    requiredError: string;
    phoneError: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footerNote: string;
};

export const dijitalEkibinizTr: DijitalEkibinizDictionary = {
  meta: {
    title: "UPU Dijital Ekibiniz — AI Destekli Satış, AI Eleman, SaaS, Sosyal Medya",
    description:
      "Hollanda'daki Türk işletmeniz için tek pakette dijital ekip: yapay zeka destekli satış kampanyaları, AI Eleman, sektöre özel SaaS'lar, sosyal medya ve web sitesi.",
  },
  hero: {
    badge: "Tek pakette dijital ekip",
    title: "UPU Dijital Ekibiniz",
    subtitle:
      "Yapay zeka destekli satış kampanyaları, AI Eleman, sektöre özel SaaS'lar, sosyal medya yönetimi, web sitesi ve içerik üretim — Hollanda'daki Türk işletmeniz için tek pakette ekip.",
    ctaPrimary: "Ücretsiz Tanışma",
    ctaSecondary: "WhatsApp",
    trust: "Hollanda'da, KVK 98902148, Türkçe destek",
  },
  benefits: {
    title: "Tek bir partner, dört uzmanlık",
    items: [
      {
        icon: "🎯",
        title: "Satış Kampanyaları",
        text: "AI destekli Google Ads + sosyal medya reklamlarıyla satışlarınızı ölçülebilir şekilde artırın.",
      },
      {
        icon: "🤖",
        title: "UPU AI Eleman",
        text: "7/24 çalışan AI asistan: WhatsApp'tan operasyon, rapor, müşteri takip.",
      },
      {
        icon: "📱",
        title: "Sosyal Medya + Web + İçerik",
        text: "Instagram + Facebook + web sitesi + blog içeriği — uzman ekibimizden.",
      },
      {
        icon: "📊",
        title: "Sektöre Özel SaaS",
        text: "Emlak, bayi, restoran, otel, market — sektörünüze özel hazır yazılım.",
      },
    ],
  },
  process: {
    title: "Nasıl Çalışıyoruz",
    steps: [
      { id: "01", title: "Tanışma görüşmesi", text: "15 dk WhatsApp veya online — ihtiyacınızı dinliyoruz." },
      { id: "02", title: "Size özel paket teklifi", text: "24 saat içinde size uygun çözüm paketini iletiyoruz." },
      { id: "03", title: "Ekibimiz devreye giriyor", text: "Uygulamayı biz yapıyoruz, sonuçları siz izliyorsunuz." },
    ],
  },
  trustClients: {
    title: "Birlikte çalıştığımız işletmeler",
    items: ["Doga Turizm Kaş", "—", "—", "—", "—", "—"],
  },
  form: {
    title: "Tanışalım — 24 saat içinde dönüş",
    subtitle: "Hiçbir taahhüt yok, ücretsiz tanışma görüşmesi.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız Soyadınız",
    phoneLabel: "Telefon",
    phonePlaceholder: "+31 ...",
    companyLabel: "Şirket Adı (opsiyonel)",
    companyPlaceholder: "Şirketinizin adı",
    sectorLabel: "Sektörünüz",
    sectorOptions: ["Seçiniz", "Emlak", "Bayi / Distribütör", "Restoran / Catering", "Otel", "Market / Perakende", "Muhasebe", "Diğer"],
    priorityLabel: "Sizin için ne öncelikli?",
    priorityOptions: [
      "Seçiniz",
      "AI Eleman / SaaS yazılımı",
      "Satış kampanyaları (Google + sosyal)",
      "Sosyal medya yönetimi",
      "Web sitesi / içerik",
      "Hepsi",
    ],
    submit: "Ücretsiz Tanışma Talep Et",
    sending: "Gönderiliyor...",
    success: "Talebiniz alındı, 24 saat içinde döneceğiz!",
    error: "Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp'tan ulaşın.",
    requiredError: "Lütfen zorunlu alanları doldurun.",
    phoneError: "Lütfen geçerli bir telefon numarası girin.",
  },
  faq: {
    title: "Sık Sorulanlar",
    items: [
      {
        q: "Ne kadar sürede başlayabiliriz?",
        a: "Tanışma görüşmesinden sonra 3-5 iş günü içinde başlayabiliyoruz. Acil ihtiyaç varsa 24 saat içinde de devreye girebiliriz.",
      },
      {
        q: "Aylık ücret ne kadar?",
        a: "Hizmetinize göre €99-€399 arası değişiyor. Net rakam ücretsiz tanışmada ihtiyaçlarınız netleştikten sonra belirleniyor.",
      },
      {
        q: "Türkçe destek alabilir miyim?",
        a: "Evet. Tüm iletişim, raporlama ve destek Türkçedir. Gerektiğinde Hollandaca ve İngilizce de hizmet veriyoruz.",
      },
      {
        q: "Hollanda dışında çalışıyor musunuz?",
        a: "Önceliğimiz Hollanda'daki Türk işletmeleri. Belçika ve Almanya'daki Türk girişimcilerle de proje yapıyoruz.",
      },
      {
        q: "Sözleşme süresi var mı?",
        a: "Aylık abonelik şeklinde çalışıyoruz, uzun süreli taahhüt zorunlu değil. İlk ay deneyip karar verebilirsiniz.",
      },
    ],
  },
  footerNote: "UPU Dev B.V. — KVK 98902148 — Computerweg 22, 3542 DR Utrecht",
};
