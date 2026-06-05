export type CardItem = {
  icon: string;
  title: string;
  text: string;
};

export type DijitalEkibinizDictionary = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaQuote: string;
    ctaMeeting: string;
    ctaWhatsapp: string;
    ctaPrimary: string;
    trust: string;
  };
  capabilities: {
    title: string;
    subtitle: string;
    items: CardItem[];
  };
  process: {
    title: string;
    steps: { id: string; title: string; text: string }[];
  };
  formCommon: {
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
    requiredError: string;
    phoneError: string;
    error: string;
    sending: string;
  };
  teklifModal: {
    triggerHelp: string;
    title: string;
    subtitle: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    successTitle: string;
    successText: string;
    closeLabel: string;
  };
  toplantiModal: {
    triggerHelp: string;
    title: string;
    subtitle: string;
    dateLabel: string;
    dateHelp: string;
    timeLabel: string;
    timePlaceholder: string;
    contactPreferenceLabel: string;
    contactPreferenceOptions: { value: string; label: string }[];
    submit: string;
    successTitle: string;
    successText: string;
    closeLabel: string;
  };
  trust: {
    title: string;
    subtitle: string;
  };
  leadForm: {
    sectionId: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    sectorLabel: string;
    sectorPlaceholder: string;
    sectorOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    kvkkLabel: string;
    submit: string;
    submitHint: string;
    sending: string;
    requiredError: string;
    phoneError: string;
    kvkkError: string;
    successTitle: string;
    successText: string;
    successWaLabel: string;
    successWaPrefix: string;
    stickyCta: string;
  };
  ctaBand: {
    midTitle: string;
    midButton: string;
    endTitle: string;
    endSubtitle: string;
    endButton: string;
  };
  packages: {
    triggerLabel: string;
    triggerHint: string;
    title: string;
    subtitle: string;
    annualBadge: string;
    popularBadge: string;
    featureColLabel: string;
    packageNames: [string, string, string, string];
    features: string[];
    priceLabel: string;
    priceBasic: string;
    priceCustom: string;
    ctaLabel: string;
    waPrefill: string;
    closeLabel: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footerNote: string;
};

export const dijitalEkibinizTr: DijitalEkibinizDictionary = {
  meta: {
    title: "UPU Dijital Ekibiniz — AI Destekli Satış, B2B Bayi Portalı, E-ticaret",
    description:
      "Hollanda'daki Türk işletmeniz için tek pakette dijital ekip: yapay zeka destekli satış kampanyaları, AI Eleman, B2B bayi portalı, e-ticaret sitesi, sektörel SaaS, sosyal medya ve içerik.",
  },
  hero: {
    badge: "Tek pakette dijital ekip — Hollanda'da Türkçe destek",
    title: "UPU Dijital Ekibiniz",
    subtitle:
      "Yapay zeka destekli satış kampanyaları, AI Eleman, sektöre özel SaaS, B2B bayi portalı, e-ticaret sitesi, sosyal medya yönetimi ve içerik üretim — Hollanda'daki Türk işletmeniz için tek pakette ekip.",
    ctaQuote: "Teklif Al",
    ctaMeeting: "Toplantı Planla",
    ctaWhatsapp: "WhatsApp",
    ctaPrimary: "Mesajınızı Gönderin",
    trust: "Hollanda'da, KVK 98902148, Türkçe destek",
  },
  capabilities: {
    title: "Bir ekip, çok uzmanlık alanı",
    subtitle: "İşletmenizin her dijital ihtiyacı için uzman ekip, tek pakette.",
    items: [
      {
        icon: "🎯",
        title: "Google Ads & Meta Reklam Yönetimi",
        text:
          "Google Ads ve Meta (Facebook/Instagram) reklamlarınızı uzman ekiple kuruyoruz, aylık optimize ediyoruz. Conversion tracking, hedefleme, raporlama dahil.",
      },
      {
        icon: "🤖",
        title: "Yapay Zeka Asistan & Otomasyon",
        text:
          "WhatsApp'tan operasyon yöneten, raporlama yapan, müşteri takibini otomatik yürüten AI eleman. 7/24 çalışır, asla yorulmaz.",
      },
      {
        icon: "🏪",
        title: "Bayi & Toptan Satış Yönetim Sistemi",
        text:
          "Bayilerinizin sipariş verebileceği özel B2B portal. Cari hesap, stok yönetimi, WhatsApp sipariş, tahsilat ve vade takibi tek panelde.",
      },
      {
        icon: "🛒",
        title: "E-ticaret Sitesi & Online Satış Platformu",
        text:
          "Uygun fiyatlı, profesyonel e-ticaret sitenizi anahtar teslim teslim ediyoruz. Ödeme entegrasyonu, ürün yönetimi, mobil uyumlu.",
      },
      {
        icon: "💻",
        title: "Hollanda'da Türk Yazılım Firması",
        text:
          "İşletmenize özel web sitesi, mobil uygulama, kurumsal yazılım. Hollanda'da Türkçe destek veren tek geliştirici ekip.",
      },
      {
        icon: "📱",
        title: "Sosyal Medya Yönetimi ve İçerik Üretimi",
        text:
          "Instagram, Facebook, blog içeriği — profesyonel sosyal medya ajansı hizmeti. Markanız her kanalda parlak görünür.",
      },
      {
        icon: "🏬",
        title: "Sektöre Özel Hazır Yazılımlar",
        text:
          "Emlakçı CRM, restoran yönetim, otel rezervasyon, market POS, site yönetimi — sektörünüze özel hazır SaaS.",
      },
      {
        icon: "🍽",
        title: "QR Menü & Online Sipariş Sistemi",
        text:
          "Restoranınız için QR kodlu dijital menü, online sipariş, masa rezerve, müşteri sadakat yönetimi tek pakette.",
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
  formCommon: {
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız Soyadınız",
    phoneLabel: "Telefon",
    phonePlaceholder: "+31 ...",
    companyLabel: "Şirket Adı (opsiyonel)",
    companyPlaceholder: "Şirketinizin adı",
    sectorLabel: "Sektörünüz",
    sectorOptions: ["Seçiniz", "Emlak", "Bayi / Toptan", "Restoran / Catering", "Otel", "Market / Perakende", "Muhasebe", "Diğer"],
    priorityLabel: "Sizin için ne öncelikli?",
    priorityOptions: [
      "Seçiniz",
      "B2B Bayi Portalı",
      "E-ticaret Sitesi",
      "AI Eleman / Otomasyon",
      "Web Sitesi / Mobil Uygulama",
      "Sosyal Medya Yönetimi",
      "Sektörel SaaS (emlak/restoran/otel/market)",
      "Diğer",
    ],
    requiredError: "Lütfen zorunlu alanları doldurun.",
    phoneError: "Lütfen geçerli bir telefon numarası girin.",
    error: "Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp'tan ulaşın.",
    sending: "Gönderiliyor...",
  },
  teklifModal: {
    triggerHelp: "Size özel teklif için kısa bilgilerinizi alalım.",
    title: "Teklif Al",
    subtitle: "24 saat içinde size özel teklif ile dönüş yapıyoruz.",
    messageLabel: "İhtiyacınızı kısaca yazın (opsiyonel)",
    messagePlaceholder: "Mevcut durumunuz, hedefiniz veya özel istekleriniz...",
    submit: "Teklif Talep Et",
    successTitle: "Talebiniz alındı",
    successText: "24 saat içinde size özel teklif ile dönüş yapacağız.",
    closeLabel: "Kapat",
  },
  toplantiModal: {
    triggerHelp: "Uygun zamanınızı seçin, biz arayalım.",
    title: "Toplantı Planla",
    subtitle: "Tarih ve saat seçin, iletişim tercihinizi belirtin — uygunluğu 1-2 saat içinde teyit ediyoruz.",
    dateLabel: "Tarih seçin",
    dateHelp: "Yarından itibaren 14 gün içinde uygun bir gün seçebilirsiniz (hafta sonu dahil).",
    timeLabel: "Saat seçin (09:00–17:30, 30 dk dilimler)",
    timePlaceholder: "Saat seçiniz",
    contactPreferenceLabel: "İletişim tercihiniz",
    contactPreferenceOptions: [
      { value: "WhatsApp Görüntülü", label: "WhatsApp Görüntülü" },
      { value: "Online Görüntülü (Zoom/Meet)", label: "Online Görüntülü (Zoom/Meet)" },
      { value: "Telefon Aramasız (sesli)", label: "Telefon (sadece sesli)" },
    ],
    submit: "Toplantı Talep Et",
    successTitle: "Talebiniz alındı",
    successText: "Seçtiğiniz tarih ve saat uygunluğu için 1-2 saat içinde dönüş yapacağız.",
    closeLabel: "Kapat",
  },
  trust: {
    title: "Hollanda'nın en güncel altyapısıyla",
    subtitle: "Sektör lideri teknolojilerle güvenli ve hızlı çözümler.",
  },
  leadForm: {
    sectionId: "lead-form",
    eyebrow: "Sorunuzu yazın",
    title: "Sorunuzu yazın, gerisini biz halledelim",
    subtitle:
      "Kısa bir mesaj bırakın — 24 saat içinde WhatsApp'tan size dönelim. Taahhüt yok, ücretsiz.",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Adınız Soyadınız",
    whatsappLabel: "WhatsApp Numaranız",
    whatsappPlaceholder: "+31 ...",
    sectorLabel: "Sektörünüz",
    sectorPlaceholder: "Sektörünüzü seçin",
    sectorOptions: [
      "Restoran / Horeca",
      "Market / Perakende",
      "Bayi / Distribütör / Toptan",
      "Muhasebe / Mali Müşavirlik",
      "E-ticaret",
      "Üretim / İmalat",
      "Hizmet sektörü",
      "Diğer",
    ],
    messageLabel: "Mesajınız",
    messagePlaceholder:
      "Örn: E-ticaret siteme AI sohbet botu istiyorum, bütçem sınırlı. Ne yapabiliriz?",
    kvkkLabel:
      "Aydınlatma metnini okudum, kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.",
    submit: "Mesajınızı Gönderin",
    submitHint: "Ortalama dönüş süresi: 24 saat içinde, WhatsApp'tan.",
    sending: "Gönderiliyor...",
    requiredError: "Lütfen zorunlu alanları doldurun.",
    phoneError: "Lütfen geçerli bir WhatsApp numarası girin.",
    kvkkError: "Devam etmek için aydınlatma onayını işaretleyin.",
    successTitle: "Teşekkürler! Sorunuzu aldık.",
    successText: "24 saat içinde WhatsApp'tan size döneceğiz.",
    successWaLabel: "WhatsApp'ta Hemen Başla",
    successWaPrefix:
      "Merhaba, /tr/dijital-ekibiniz sayfasından yazıyorum. Sorum:",
    stickyCta: "💬 Hemen Mesaj Gönder",
  },
  ctaBand: {
    midTitle: "Sektörünüze özel paketi konuşalım",
    midButton: "Bana Özel Paket Hazırlayın",
    endTitle: "Hadi Başlayalım",
    endSubtitle: "Kısa bir mesaj bırakın, 24 saat içinde WhatsApp'tan dönelim.",
    endButton: "Mesajınızı Gönderin",
  },
  packages: {
    triggerLabel: "Paketleri Gör",
    triggerHint: "Hangi paket size uygun? Özellikleri karşılaştırın.",
    title: "Paketler",
    subtitle: "İhtiyacınıza göre 4 paket. Basic dışındakiler görüşmede size özel fiyatlanır.",
    annualBadge: "Yıllık öde, 2 ay bedava",
    popularBadge: "EN POPÜLER",
    featureColLabel: "Özellik",
    packageNames: ["Basic", "Starter", "Pro", "Ultra"],
    features: [
      "Kurumsal web sitesi",
      "AI asistan (web chatbot)",
      "Admin panelli sayfa",
      "WhatsApp bildirim",
      "E-ticaret modülü",
      "Reklam yönetimi (Meta + Google)",
      "SaaS modülü (emlak/bayi/otel/...)",
      "Özel entegrasyon (API/ERP)",
    ],
    priceLabel: "Fiyat",
    priceBasic: "29€/ay",
    priceCustom: "Görüşmede özelleştirilir",
    ctaLabel: "WhatsApp ile görüşelim",
    waPrefill: "Paketler hakkında bilgi almak istiyorum",
    closeLabel: "Kapat",
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
      {
        q: "B2B bayi portalı / e-ticaret sitesi anahtar teslim mi?",
        a: "Evet. Domain, hosting, tasarım, ödeme entegrasyonu, ürün/bayi tanımı, kullanıcı eğitimi dahil anahtar teslim çalışıyoruz. Yayına alındığında siz sadece yönetim panelinden çalışırsınız.",
      },
      {
        q: "Sektörel SaaS'lar için demo alabilir miyim?",
        a: "Tabii. Emlak CRM, restoran yönetim, otel rezervasyon, market POS ve site yönetimi modüllerimiz için 15 dk'lık canlı demo ayarlayabiliriz. Aşağıdaki formdan mesaj bırakın, WhatsApp'tan demo için iletişime geçelim.",
      },
    ],
  },
  footerNote: "UPU Dev B.V. — KVK 98902148 — Computerweg 22, 3542 DR Utrecht",
};
