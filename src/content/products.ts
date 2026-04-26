export type ProductLocale = "tr" | "en" | "nl";

export type FAQItem = {
  question: string;
  answer: string;
};

export type UseCase = {
  title: string;
  scenario: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type FeatureDetail = {
  title: string;
  description: string;
  highlights?: string[];
};

export type ProductDetail = {
  slug: string;
  title: string;
  category: string;
  heroSummary: string;
  image: string;
  goals: string[];
  whatItDoes: string[];
  benefits: string[];
  targetUsers: string[];
  featuresDetailed?: FeatureDetail[];
  faq?: FAQItem[];
  useCases?: UseCase[];
};

const productDetailsTr: ProductDetail[] = [
  {
    slug: "bayi-yonetimi",
    title: "Bayi Yönetimi",
    category: "Dealer / Distributor SaaS",
    heroSummary:
      "Bayi ağını tek merkezde yönetmek isteyen üretici ve toptancılar için geliştirilen ölçeklenebilir bir platformdur.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Bayi operasyonlarında dağınık süreçleri tek platformda toplamak",
      "Sipariş ve stok akışını daha görünür ve izlenebilir hale getirmek",
      "Manuel takip yükünü azaltarak ekip verimliliğini artırmak",
    ],
    whatItDoes: [
      "Bayi onboarding ve yetkilendirme akışlarını yönetir",
      "Sipariş oluşturma, onay ve durum takibini tek panelde sunar",
      "Stok, komisyon ve performans metriklerini canlı olarak raporlar",
      "Yönetici panelleri ile bölge, bayi ve ürün bazında analiz sağlar",
    ],
    benefits: [
      "Karar alma süresini kısaltır",
      "Hatalı sipariş ve iletişim kaynaklı operasyon kayıplarını azaltır",
      "Bayi performansını objektif metriklerle takip etmeyi kolaylaştırır",
      "Büyüyen bayi ağlarında standart süreç yönetimi sağlar",
    ],
    targetUsers: ["Üretici firmalar", "Distribütörler ve toptancılar", "Satış operasyon ekipleri", "Bölge ve kanal yöneticileri"],
    featuresDetailed: [
      {
        title: "Bayi Onboarding ve Yetkilendirme",
        description: "Yeni bayilerin sisteme dahil edilmesinden yetki tanımlamalarına kadar tüm süreçleri dijital ortamda yönetin.",
        highlights: ["Otomatik onay akışları", "Rol bazlı erişim kontrolü", "Dijital sözleşme imzalama"],
      },
      {
        title: "Sipariş ve Stok Yönetimi",
        description: "Bayilerden gelen siparişleri tek panelden takip edin, stok durumunu anlık görüntüleyin.",
        highlights: ["Gerçek zamanlı stok takibi", "Otomatik sipariş bildirimleri", "Toplu sipariş işleme"],
      },
      {
        title: "Performans ve Komisyon Raporlama",
        description: "Bayi performansını objektif metriklerle ölçün, komisyon hesaplamalarını otomatikleştirin.",
        highlights: ["Özelleştirilebilir KPI'lar", "Otomatik komisyon hesaplama", "Dönemsel karşılaştırma raporları"],
      },
      {
        title: "Bölge ve Kanal Analizi",
        description: "Satış verilerinizi bölge, kanal ve ürün bazında derinlemesine analiz edin.",
        highlights: ["Coğrafi performans haritaları", "Kanal bazlı satış analizi", "Trend tahminleme"],
      },
    ],
    faq: [
      {
        question: "Platform mevcut ERP sistemimizle entegre olabilir mi?",
        answer: "Evet, REST API altyapımız sayesinde Exact, AFAS, SnelStart, Twinfield gibi yaygın ERP/boekhouding sistemleriyle entegrasyon sağlanabilir. Entegrasyon süreci genellikle 2-4 hafta içinde tamamlanır.",
      },
      {
        question: "Kaç bayi yönetilebilir?",
        answer: "Platformumuz ölçeklenebilir bulut altyapısı üzerine kurulu olup, 10'dan 10.000'e kadar bayi ağlarını sorunsuz yönetebilir.",
      },
      {
        question: "Mobil erişim mümkün mü?",
        answer: "Evet, platform tamamen responsive tasarıma sahip olup, iOS ve Android için native mobil uygulamalar da mevcuttur.",
      },
      {
        question: "Veri güvenliği nasıl sağlanıyor?",
        answer: "Tüm veriler AES-256 şifreleme ile korunur. ISO 27001 sertifikalı veri merkezlerinde barındırılır ve düzenli güvenlik denetimleri yapılır.",
      },
      {
        question: "Eğitim ve destek hizmeti var mı?",
        answer: "Başlangıç eğitimi, video dokümantasyon ve 7/24 teknik destek hizmetimiz mevcuttur. Ayrıca her müşteriye özel bir başarı yöneticisi atanır.",
      },
    ],
    useCases: [
      {
        title: "Tekstil Toptancısı",
        scenario: "Amsterdam merkezli Türk tekstil toptancısı, 80+ butik bayi",
        problem: "Sezon koleksiyon takibi Excel'de, butiklere dağıtım manuel, stok bilgisi gerçek zamanlı değil.",
        solution: "Merkezi bayi portalı kuruldu, sezon bazlı sipariş ve otomatik stok senkronizasyonu sağlandı.",
        outcome: "Sipariş hataları %85 azaldı, stok devir hızı %30 arttı.",
      },
      {
        title: "Giyim Markası Distribütörü",
        scenario: "Rotterdam'da Türk giyim markasının NL distribütörü, 60 satış noktası",
        problem: "Bölgesel satış performansı görünür değil, komisyon hesaplamaları manuel ve hata yapıyor.",
        solution: "Bölgesel performans dashboard'u ve otomatik komisyon hesaplama sistemi devreye alındı.",
        outcome: "Komisyon anlaşmazlıkları sıfıra indi, bölgesel satışlar %25 arttı.",
      },
      {
        title: "Konfeksiyon İthalatçısı",
        scenario: "Den Haag'da Türkiye'den ithalat yapan konfeksiyon firması, 40+ butik bayi",
        problem: "Stok ile sipariş senkronizasyonu yok, çift kayıt ve teslimat gecikmeleri yaşanıyor.",
        solution: "Real-time stok ve sipariş senkronizasyonu, ERP entegrasyonu kuruldu.",
        outcome: "Stok hataları %90 azaldı, sipariş tamamlama süresi %50 kısaldı.",
      },
    ],
  },
  {
    slug: "muhasebe-asistani",
    title: "Muhasebe Asistanı",
    category: "AI Destekli Finans Operasyonları",
    heroSummary:
      "KOBİ ekiplerinin günlük finans operasyonlarını hızlandırmak için geliştirilen, belge ve veri odaklı akıllı bir yardımcı platformdur.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Tekrar eden muhasebe operasyonlarını otomasyonla sadeleştirmek",
      "Belge ve gider süreçlerinde doğruluk oranını artırmak",
      "Raporlamayı hızlandırarak yönetsel görünürlüğü güçlendirmek",
    ],
    whatItDoes: [
      "Fatura ve finans belgelerini sınıflandırıp akışa alır",
      "Gider kategorilendirme ve temel mutabakat kontrollerini destekler",
      "Özet finans raporları ve dönemsel görünüm ekranları üretir",
      "Mevcut muhasebe süreçlerine AI destekli öneri katmanı ekler",
    ],
    benefits: [
      "Operasyon süresini azaltır ve ekip verimliliğini artırır",
      "Manuel giriş kaynaklı hataları düşürmeye yardımcı olur",
      "Daha hızlı ve düzenli finans takibi sağlar",
      "Küçük ekiplerde ölçeklenebilir bir çalışma düzeni oluşturur",
    ],
    targetUsers: [
      "KOBİ finans ve muhasebe ekipleri",
      "Mali müşavirlerle çalışan işletmeler",
      "Operasyon ve yönetim ekipleri",
      "Belge yoğun süreç yürüten şirketler",
    ],
    featuresDetailed: [
      {
        title: "Akıllı Belge Tanıma (OCR+AI)",
        description: "Fatura, fiş ve finansal belgeleri otomatik olarak tarayın, sınıflandırın ve sisteme aktarın.",
        highlights: ["%98+ doğruluk oranı", "Çoklu format desteği (PDF, görsel, Peppol UBL)", "Otomatik veri çıkarma"],
      },
      {
        title: "Gider Kategorilendirme",
        description: "Harcamalarınızı AI destekli sistemle otomatik kategorilendirin, bütçe takibini kolaylaştırın.",
        highlights: ["Öğrenen algoritma", "Özelleştirilebilir kategoriler", "Anomali tespiti"],
      },
      {
        title: "Mutabakat Kontrolleri",
        description: "Banka ekstreleri ile muhasebe kayıtlarını otomatik eşleştirin, tutarsızlıkları anında tespit edin.",
        highlights: ["Otomatik eşleştirme", "Farklılık raporlama", "Toplu işlem desteği"],
      },
      {
        title: "Finans Raporlama",
        description: "Dönemsel finans raporlarını tek tıkla oluşturun, yönetim için özet görünümler hazırlayın.",
        highlights: ["Özelleştirilebilir şablonlar", "Grafik ve trend analizi", "Dışa aktarım seçenekleri"],
      },
    ],
    faq: [
      {
        question: "Mevcut muhasebe programımla birlikte kullanabilir miyim?",
        answer: "Evet, platform bağımsız bir asistan olarak çalışır ve mevcut muhasebe yazılımınızla paralel kullanılabilir. API entegrasyonu ile veri senkronizasyonu da mümkündür.",
      },
      {
        question: "AI önerileri ne kadar güvenilir?",
        answer: "Sistemimiz sürekli öğrenen bir yapıya sahip ve kullanıldıkça doğruluk oranı artar. Başlangıçta %90, 3 ay kullanım sonrası %98+ doğruluk oranına ulaşır.",
      },
      {
        question: "Hangi belge formatlarını destekliyor?",
        answer: "PDF, JPEG, PNG, TIFF görsel formatları ile Peppol UBL e-faturaları, dijital fatura PDF'leri ve Excel formatlarını destekliyoruz.",
      },
      {
        question: "Verilerim güvende mi?",
        answer: "Tüm finansal veriler şifreli olarak saklanır, KVKK uyumlu altyapı kullanılır ve verileriniz asla üçüncü taraflarla paylaşılmaz.",
      },
      {
        question: "Mali müşavirimle paylaşım yapabilir miyim?",
        answer: "Evet, mali müşavirinize özel erişim yetkisi tanımlayabilir, belge ve raporları güvenli şekilde paylaşabilirsiniz.",
      },
    ],
    useCases: [
      {
        title: "Türk Muhasebe Ofisi",
        scenario: "Den Haag merkezli muhasebe ofisi, 200+ Türk girişimci müşteri portföyü",
        problem: "Çoklu müşteri faturası manuel giriliyor, BTW dönemleri yığılıyor, hata oranı yüksek.",
        solution: "OCR ile otomatik fatura tanıma ve Peppol UBL entegrasyonu kuruldu, kategorilendirme otomatize edildi.",
        outcome: "İşlem süresi %70 azaldı, BTW dönem gecikmeleri sıfırlandı.",
      },
      {
        title: "Restoran Zinciri Muhasebesi",
        scenario: "Amsterdam'da 8 şubeli Türk restoran zinciri, çoklu ödeme kanalı",
        problem: "Günlük z-raporları, fiş ve fatura çoklu formatta geliyor, mutabakat manuel.",
        solution: "Otomatik fatura işleme, gider sınıflandırma ve şube bazlı dashboard kuruldu.",
        outcome: "Mutabakat süresi 3 günden 2 saate düştü, muhasebe iş yükü %60 azaldı.",
      },
      {
        title: "KOBİ Danışmanlık Ofisi",
        scenario: "Utrecht'te 50+ Türk KOBİ müşterisine hizmet veren danışmanlık ofisi",
        problem: "Dönem sonu raporlama yığılıyor, müşteri başına manuel iş yoğun, kapasite yetersiz.",
        solution: "AI asistan ile rutin işlemler otomatize edildi, standart raporlama formatı oluşturuldu.",
        outcome: "Dönem kapanış süresi 2 haftadan 3 güne düştü, müşteri kapasitesi 2 katına çıktı.",
      },
    ],
  },
  {
    slug: "emlak-danismani-yardimcisi",
    title: "Emlak Danışmanı Yardımcısı",
    category: "Emlak Operasyon SaaS",
    heroSummary:
      "Emlak ofislerinin ilan, müşteri ve randevu süreçlerini tek merkezden yönetmesini sağlayan operasyon odaklı bir yardımcı platformdur.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Emlak danışmanlarının günlük iş akışını sadeleştirmek",
      "İlan ve müşteri verilerini tek yerde toplayarak görünürlük sağlamak",
      "İletişim ve takip süreçlerinde standart bir operasyon modeli kurmak",
    ],
    whatItDoes: [
      "İlan ekleme, güncelleme ve portföy yönetimini merkezi hale getirir",
      "Müşteri talepleri, görüşme notları ve takip adımlarını kayıt altına alır",
      "Randevu planlama ve hatırlatma akışlarını otomatikleştirir",
      "Doküman paylaşımı ve işlem süreci takibini düzenli bir panelde sunar",
    ],
    benefits: [
      "Danışman başına daha fazla portföyü düzenli yönetmeyi kolaylaştırır",
      "Müşteri iletişiminde gecikmeleri ve unutulan takipleri azaltır",
      "Operasyonel şeffaflık sağlayarak ekip içi koordinasyonu güçlendirir",
      "Ofis ölçeği büyürken süreç kalitesini korumaya yardımcı olur",
    ],
    targetUsers: ["Emlak danışmanları", "Küçük ve orta ölçekli emlak ofisleri", "Portföy yöneticileri", "Müşteri ilişkileri ekipleri"],
    featuresDetailed: [
      {
        title: "Merkezi Portföy Yönetimi",
        description: "Tüm ilanlarınızı tek panelden yönetin, güncelleyin ve farklı platformlara dağıtın.",
        highlights: ["Çoklu platform entegrasyonu", "Toplu ilan güncelleme", "Fotoğraf ve video yönetimi"],
      },
      {
        title: "Müşteri Takip Sistemi (CRM)",
        description: "Müşteri taleplerini, görüşme notlarını ve iletişim geçmişini kayıt altına alın.",
        highlights: ["360° müşteri görünümü", "Otomatik hatırlatmalar", "Etkileşim geçmişi"],
      },
      {
        title: "Randevu ve Takvim Yönetimi",
        description: "Görüşme randevularını planlayın, müşterilere otomatik hatırlatmalar gönderin.",
        highlights: ["Takvim senkronizasyonu", "SMS/E-posta hatırlatma", "Çakışma kontrolü"],
      },
      {
        title: "Doküman ve İşlem Takibi",
        description: "Satış sürecindeki tüm belgeleri dijital ortamda yönetin, işlem durumunu takip edin.",
        highlights: ["Dijital belge arşivi", "İşlem aşama takibi", "E-imza entegrasyonu"],
      },
    ],
    faq: [
      {
        question: "Funda, Pararius gibi portallarla entegrasyon var mı?",
        answer: "Evet, Funda, Pararius, Jaap.nl ve diğer önde gelen Hollanda emlak portallarıyla API entegrasyonu mevcuttur. Tek tıkla çoklu platforma ilan yayınlayabilirsiniz.",
      },
      {
        question: "Ofisteki tüm danışmanlar aynı sistemi kullanabilir mi?",
        answer: "Evet, çoklu kullanıcı desteği mevcuttur. Her danışman kendi portföyünü yönetirken, ofis yöneticisi tüm aktiviteleri izleyebilir.",
      },
      {
        question: "Mobil uygulama var mı?",
        answer: "Evet, iOS ve Android için native mobil uygulamamız mevcuttur. Sahada bile tüm işlemlerinizi yapabilirsiniz.",
      },
      {
        question: "Müşteri verilerini içe aktarabilir miyim?",
        answer: "Excel, CSV ve vCard formatlarından toplu müşteri aktarımı yapabilirsiniz. Mevcut CRM sistemlerinden de veri transferi desteklenir.",
      },
      {
        question: "Raporlama özellikleri neler?",
        answer: "Danışman performansı, portföy analizi, satış dönüşüm oranları ve pazar trend raporları gibi detaylı raporlar sunulmaktadır.",
      },
    ],
    useCases: [
      {
        title: "Türk Emlak Ofisi",
        scenario: "Rotterdam'da Türk emlak ofisi, 120+ portföy, Funda ve Pararius çoklu portal yönetimi",
        problem: "Portallar arası ilan tutarsız, müşteri takibi Excel'de, randevular karışıyor.",
        solution: "Çoklu portal otomatik senkronizasyon, merkezi CRM ve otomatik hatırlatma sistemi kuruldu.",
        outcome: "İlan güncelleme süresi %70 azaldı, müşteri dönüş oranı %40 arttı.",
      },
      {
        title: "Utrecht Emlak Ağı",
        scenario: "Utrecht ve çevresinde 4 şubeli emlak danışmanlık ağı, 30+ danışman",
        problem: "Şubeler arası portföy paylaşımı yok, performans karşılaştırması yapılamıyor.",
        solution: "Merkezi yönetim paneli ile tüm şubeler tek platformda birleştirildi, paylaşımlı portföy aktif edildi.",
        outcome: "Şubeler arası satışlar %25 arttı, kapanış oranı %30 yükseldi.",
      },
      {
        title: "Bağımsız Türk Emlakçı",
        scenario: "Den Haag'da solo çalışan emlak danışmanı, ağırlıklı Türk müşteri portföyü",
        problem: "Müşteri+belge+randevu farklı sistemlerde, hızlı geri dönüş yapamıyor.",
        solution: "Tek mobil uygulamada CRM, doküman arşivi ve otomatik hatırlatma birleştirildi.",
        outcome: "Günlük operasyon süresi 2 saat azaldı, kapanış oranı %35 arttı.",
      },
    ],
  },
  {
    slug: "agent-ai-calismalari",
    title: "Agent AI Çalışmaları",
    category: "AI Agent Implementasyonu",
    heroSummary:
      "İş süreçlerine özel görev odaklı AI agent’lar geliştirerek operasyonel verimlilik, hız ve hizmet standardı artışı hedefleyen bir çalışma alanıdır.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Yüksek tekrar içeren süreçlerde insan yükünü azaltmak",
      "Süreç bazlı otomasyonla yanıt hızını ve doğruluğu artırmak",
      "Farklı iş birimlerine ölçeklenebilir AI iş akışları sunmak",
    ],
    whatItDoes: [
      "HR, onboarding ve müşteri hizmetleri için görev bazlı agent akışları kurgular",
      "Süreç adımlarını kurallı ve izlenebilir bir otomasyon yapısına dönüştürür",
      "AI agent davranışlarını iş hedeflerine göre özelleştirir",
      "İnsan + AI hibrit çalışma modeline uygun kontrol mekanizmaları sağlar",
    ],
    benefits: [
      "Operasyonel maliyetleri düşürmeye yardımcı olur",
      "Standart kaliteyle daha hızlı hizmet sunulmasını destekler",
      "Ekiplerin stratejik işlere daha fazla zaman ayırmasını sağlar",
      "Büyüyen iş yüklerinde ölçeklenebilir bir operasyon modeli sunar",
    ],
    targetUsers: [
      "HR ve insan kaynakları ekipleri",
      "Müşteri operasyon ekipleri",
      "Süreç otomasyonu hedefleyen KOBİ ve kurumsal firmalar",
      "AI dönüşümü planlayan ürün ekipleri",
    ],
    featuresDetailed: [
      {
        title: "Görev Bazlı Agent Tasarımı",
        description: "İş süreçlerinize özel, belirli görevleri otonom olarak yerine getiren AI agent'lar tasarlıyoruz.",
        highlights: ["Süreç analizi ve modelleme", "Kural tabanlı karar mekanizmaları", "İnsan-AI hibrit akışlar"],
      },
      {
        title: "HR ve Onboarding Agent'ları",
        description: "İşe alım, oryantasyon ve çalışan sorularını yanıtlayan özelleştirilmiş agent çözümleri.",
        highlights: ["Aday tarama otomasyonu", "Oryantasyon asistanı", "Politika ve prosedür bot'u"],
      },
      {
        title: "Müşteri Hizmetleri Agent'ları",
        description: "7/24 müşteri sorularını yanıtlayan, ticket oluşturan ve yönlendiren akıllı agent'lar.",
        highlights: ["Doğal dil anlama", "Çok kanallı destek", "Eskalasyon yönetimi"],
      },
      {
        title: "Süreç Otomasyon Agent'ları",
        description: "Tekrarlayan iş akışlarını otomatize eden, veri toplayan ve raporlayan agent çözümleri.",
        highlights: ["Veri girişi otomasyonu", "Rapor oluşturma", "Sistem entegrasyonları"],
      },
    ],
    faq: [
      {
        question: "AI agent tam olarak ne yapıyor?",
        answer: "AI agent, belirlenen görevleri otonom olarak yerine getiren yazılım programlarıdır. Örneğin müşteri sorularını yanıtlama, veri işleme veya süreç adımlarını takip etme gibi işleri insan müdahalesi olmadan gerçekleştirir.",
      },
      {
        question: "Mevcut sistemlerimizle entegre olabilir mi?",
        answer: "Evet, geliştirdiğimiz agent'lar API'ler aracılığıyla CRM, ERP, HRIS ve diğer kurumsal sistemlerle entegre edilebilir.",
      },
      {
        question: "Agent geliştirme süreci ne kadar sürer?",
        answer: "Basit görev agent'ları 2-4 hafta, karmaşık süreç agent'ları 6-12 hafta içinde geliştirilebilir. Süreç, ihtiyaç analizi ile başlar.",
      },
      {
        question: "Agent'lar öğrenebilir mi?",
        answer: "Evet, geliştirdiğimiz agent'lar geribildirimlerden öğrenen, zamanla performansını artıran yapay zeka modelleri kullanır.",
      },
      {
        question: "İnsan müdahalesi gerektiğinde ne olur?",
        answer: "Agent'lar, yetkisi dışındaki durumları tespit eder ve uygun insan operatörüne otomatik olarak yönlendirir. Tam izlenebilirlik sağlanır.",
      },
    ],
    useCases: [
      {
        title: "Restoran Rezervasyon Agent",
        scenario: "Amsterdam'da 3 şubeli Türk restoran zinciri, çoklu kanaldan rezervasyon",
        problem: "Telefon rezervasyonları yetiştirilemiyor, WhatsApp ve Instagram talepleri kaçıyor, çift rezervasyon yaşanıyor.",
        solution: "7/24 çalışan rezervasyon agent'ı + WhatsApp entegrasyonu kuruldu, masa müsaitliği gerçek zamanlı senkronize edildi.",
        outcome: "Rezervasyon kaçırma %85 azaldı, telefon yoğunluğu yarıya indi.",
      },
      {
        title: "Catering Operasyon Agent",
        scenario: "Rotterdam'da düğün/etkinlik catering işletmesi, aylık 50+ etkinlik",
        problem: "Teklif hazırlama saatler sürüyor, menü-kişi sayısı-lokasyon kombinasyonları manuel hesaplanıyor.",
        solution: "Teklif agent'ı ve menü modülü ile fiyatlandırma otomatize edildi, dinamik teklif şablonları oluşturuldu.",
        outcome: "Teklif hazırlama süresi 2 saatten 5 dakikaya düştü, dönüşüm oranı %35 arttı.",
      },
      {
        title: "Sipariş ve Müşteri Hizmetleri Agent",
        scenario: "Tilburg'da Türk lokantası, online sipariş ve müşteri sorularıyla boğuluyor",
        problem: "Yoğun saatlerde sipariş kaçıyor, menü ve içerik soruları tekrarlı, çoklu dil ihtiyacı var.",
        solution: "Türkçe ve Hollandaca konuşan sipariş + müşteri hizmetleri agent'ı devreye alındı.",
        outcome: "Sipariş kayıpları %60 azaldı, müşteri yanıt süresi 24 saatten 30 saniyeye düştü.",
      },
    ],
  },
  {
    slug: "e-ticaret-web-uygulamalari",
    title: "E-Ticaret Web Uygulamaları",
    category: "Commerce Platformları",
    heroSummary:
      "Siparişten ödemeye, stoktan müşteri paneline kadar uçtan uca e-ticaret süreçlerini destekleyen ölçeklenebilir web uygulamaları geliştiriyoruz.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "E-ticaret operasyonlarını tek bir güçlü altyapıda toplamak",
      "Satın alma akışını hızlandırarak dönüşüm oranını artırmak",
      "Stok, sipariş ve müşteri süreçlerini daha öngörülebilir hale getirmek",
    ],
    whatItDoes: [
      "Ödeme altyapıları, kargo ve stok sistemleri ile entegre çalışır",
      "Sipariş yönetimi ve müşteri paneli akışlarını tek platformda birleştirir",
      "Yüksek performanslı, mobil uyumlu alışveriş deneyimi sunar",
      "Kampanya, ürün ve operasyon yönetimi için yönetici panelleri sağlar",
    ],
    benefits: [
      "Satın alma sürecinde sürtünmeyi azaltır",
      "Operasyon ekipleri için daha kontrollü sipariş yönetimi sunar",
      "Teknik olarak ölçeklenebilir bir büyüme zemini oluşturur",
      "Marka deneyimini güçlendiren modern bir kullanıcı akışı sağlar",
    ],
    targetUsers: ["B2C ve B2B e-ticaret markaları", "Perakende şirketleri", "Online satış operasyon ekipleri", "Hızlı büyüme hedefleyen dijital markalar"],
    featuresDetailed: [
      {
        title: "Modern Alışveriş Deneyimi",
        description: "Hızlı, mobil uyumlu ve kullanıcı dostu e-ticaret arayüzleri geliştiriyoruz.",
        highlights: ["Mobil-first tasarım", "Hızlı sayfa yüklenme", "Kişiselleştirilmiş öneriler"],
      },
      {
        title: "Sipariş ve Stok Yönetimi",
        description: "Siparişten teslimata kadar tüm süreci tek panelden yönetin, stok seviyelerini gerçek zamanlı takip edin.",
        highlights: ["Çoklu depo desteği", "Otomatik stok uyarıları", "Toplu sipariş işleme"],
      },
      {
        title: "Ödeme ve Kargo Entegrasyonları",
        description: "iDEAL, Mollie, Stripe, PostNL ve DHL gibi Hollanda'nın önde gelen ödeme ve kargo altyapılarıyla sorunsuz entegrasyon.",
        highlights: ["iDEAL ve kart ödemeleri", "PostNL ve DHL kargo entegrasyonu", "Mollie/Stripe çoklu yöntem desteği"],
      },
      {
        title: "Yönetim ve Analitik Paneli",
        description: "Satış, müşteri ve ürün performansını detaylı raporlarla analiz edin.",
        highlights: ["Gerçek zamanlı satış dashboard'u", "Müşteri davranış analizi", "Kampanya performans takibi"],
      },
    ],
    faq: [
      {
        question: "Hazır e-ticaret çözümlerinden farkı ne?",
        answer: "Tamamen markanıza özel, ölçeklenebilir ve sahip olduğunuz bir altyapı sunuyoruz. Hazır çözümlerin kısıtlamaları ve aylık ücretleri yok.",
      },
      {
        question: "B2B e-ticaret için uygun mu?",
        answer: "Evet, müşteri bazlı fiyatlandırma, toplu sipariş, teklif yönetimi ve kurumsal onay akışları gibi B2B'ye özel özellikler geliştiriyoruz.",
      },
      {
        question: "Mevcut ERP/muhasebe sistemimle entegre olabilir mi?",
        answer: "Evet, Exact, AFAS, SnelStart, Twinfield gibi yaygın ERP/boekhouding sistemleri ve Peppol UBL e-faturalama altyapılarıyla entegrasyon sağlıyoruz.",
      },
      {
        question: "Site performansı nasıl?",
        answer: "Modern teknolojiler (Next.js, CDN, önbellekleme) kullanarak Google Core Web Vitals standartlarını karşılayan, hızlı yüklenen siteler geliştiriyoruz.",
      },
      {
        question: "Lansman sonrası destek var mı?",
        answer: "Evet, bakım, güncelleme ve teknik destek hizmetlerimiz mevcuttur. Ayrıca performans izleme ve optimizasyon desteği sunuyoruz.",
      },
    ],
    useCases: [
      {
        title: "Türk Marketi Online",
        scenario: "Amsterdam'da Türk marketi, online sipariş ve teslimat (boodschappen) başlatıyor",
        problem: "Hazır platformlar Türk ürün kategorilerine uygun değil, taze ürün lojistiği zor, ödeme seçenekleri yetersiz.",
        solution: "Özel e-ticaret platformu, slot bazlı teslimat, iDEAL ve Mollie ödeme + PostNL kargo entegrasyonu kuruldu.",
        outcome: "Online satışlar toplam cironun %25'ine ulaştı, sepet ortalaması %30 arttı.",
      },
      {
        title: "Tekstil ve Giyim E-Ticaret",
        scenario: "Den Haag'da Türk butik markası, NL pazarına online açılıyor",
        problem: "Yavaş hazır çözüm, dönüşüm düşük, ödeme seçenekleri sınırlı, çok dilli destek yok.",
        solution: "Özel platform geliştirildi, iDEAL/Mollie ödeme ve Türkçe/Hollandaca/İngilizce çoklu dil eklendi.",
        outcome: "Sayfa hızı 3 kat arttı, dönüşüm oranı %50 yükseldi, pazaryeri bağımlılığı azaldı.",
      },
      {
        title: "Yöresel Ürün B2C",
        scenario: "Rotterdam'da Türk yöresel ürün satıcısı (zeytin, baharat, kahve), pazaryeri bağımlı",
        problem: "Pazaryeri komisyonları yüksek, müşteri verisi alınamıyor, marka ilişkisi kurulamıyor.",
        solution: "Doğrudan B2C platform, abonelik modeli, DHL ve PostNL kargo entegrasyonu geliştirildi.",
        outcome: "Pazaryeri bağımlılığı %70 azaldı, tekrar müşteri oranı %45 yükseldi.",
      },
    ],
  },
];

const productDetailsEn: ProductDetail[] = [
  {
    slug: "bayi-yonetimi",
    title: "Dealer Management",
    category: "Dealer / Distributor SaaS",
    heroSummary: "A scalable platform designed for manufacturers and wholesalers who need centralized dealer operations.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Centralize fragmented dealer operations in one platform",
      "Increase visibility across order and inventory workflows",
      "Reduce manual tracking workload and improve team efficiency",
    ],
    whatItDoes: [
      "Manages dealer onboarding and role-based authorization flows",
      "Supports order creation, approval, and status tracking in one panel",
      "Reports stock, commission, and performance metrics in real time",
      "Provides manager dashboards by region, dealer, and product line",
    ],
    benefits: [
      "Shortens decision-making cycles",
      "Reduces operational losses caused by order and communication errors",
      "Makes dealer performance tracking objective and measurable",
      "Supports standardized operations while the dealer network grows",
    ],
    targetUsers: ["Manufacturers", "Distributors and wholesalers", "Sales operations teams", "Channel and regional managers"],
    featuresDetailed: [
      {
        title: "Dealer Onboarding & Authorization",
        description: "Manage the entire process from adding new dealers to the system to defining their permissions in a digital environment.",
        highlights: ["Automated approval workflows", "Role-based access control", "Digital contract signing"],
      },
      {
        title: "Order & Inventory Management",
        description: "Track orders from dealers in a single panel and view inventory status in real time.",
        highlights: ["Real-time inventory tracking", "Automatic order notifications", "Bulk order processing"],
      },
      {
        title: "Performance & Commission Reporting",
        description: "Measure dealer performance with objective metrics and automate commission calculations.",
        highlights: ["Customizable KPIs", "Automatic commission calculation", "Periodic comparison reports"],
      },
      {
        title: "Regional & Channel Analysis",
        description: "Analyze your sales data in depth by region, channel, and product.",
        highlights: ["Geographic performance maps", "Channel-based sales analysis", "Trend forecasting"],
      },
    ],
    faq: [
      {
        question: "Can the platform integrate with our existing ERP system?",
        answer: "Yes, thanks to our REST API infrastructure, integration with common ERP/accounting systems such as Exact, AFAS, SnelStart, and Twinfield is possible. The integration process is typically completed within 2-4 weeks.",
      },
      {
        question: "How many dealers can be managed?",
        answer: "Our platform is built on a scalable cloud infrastructure and can seamlessly manage dealer networks from 10 to 10,000.",
      },
      {
        question: "Is mobile access available?",
        answer: "Yes, the platform has a fully responsive design, and native mobile apps for iOS and Android are also available.",
      },
      {
        question: "How is data security ensured?",
        answer: "All data is protected with AES-256 encryption. It is hosted in ISO 27001 certified data centers with regular security audits.",
      },
      {
        question: "Is training and support available?",
        answer: "We provide onboarding training, video documentation, and 24/7 technical support. Additionally, a dedicated success manager is assigned to each customer.",
      },
    ],
    useCases: [
      {
        title: "Textile Wholesaler",
        scenario: "Amsterdam-based Turkish textile wholesaler with 80+ boutique dealers",
        problem: "Seasonal collection tracking is in Excel, dealer distribution is manual, inventory is not real-time.",
        solution: "Centralized dealer portal was deployed with season-based ordering and automatic inventory sync.",
        outcome: "Order errors decreased by 85%, inventory turnover rate increased by 30%.",
      },
      {
        title: "Apparel Brand Distributor",
        scenario: "Rotterdam-based NL distributor of a Turkish apparel brand, 60 retail points",
        problem: "Regional sales performance is not visible, commission calculations are manual and error-prone.",
        solution: "Regional performance dashboard and automatic commission calculation system were deployed.",
        outcome: "Commission disputes dropped to zero, regional sales increased by 25%.",
      },
      {
        title: "Garment Importer",
        scenario: "Den Haag-based garment importer from Turkey, 40+ boutique dealers",
        problem: "Stock and order synchronization is missing, double entries and delivery delays are common.",
        solution: "Real-time stock and order sync, plus ERP integration, were established.",
        outcome: "Stock errors decreased by 90%, order fulfillment time shortened by 50%.",
      },
    ],
  },
  {
    slug: "muhasebe-asistani",
    title: "Accounting Assistant",
    category: "AI-Powered Finance Operations",
    heroSummary: "An intelligent, document-focused assistant built to accelerate daily finance workflows for SME teams.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Simplify repetitive accounting operations through automation",
      "Improve accuracy in document and expense processes",
      "Strengthen management visibility with faster reporting",
    ],
    whatItDoes: [
      "Classifies invoices and finance documents into structured workflows",
      "Supports expense categorization and basic reconciliation checks",
      "Generates summary finance reports and period-based overviews",
      "Adds AI-assisted recommendation layers to existing workflows",
    ],
    benefits: [
      "Reduces operation time and increases team productivity",
      "Helps lower manual entry errors",
      "Enables faster and cleaner day-to-day financial tracking",
      "Provides a scalable operating model for small teams",
    ],
    targetUsers: ["SME finance teams", "Businesses working with accounting firms", "Operations and management teams", "Document-heavy organizations"],
    featuresDetailed: [
      {
        title: "Smart Document Recognition (OCR+AI)",
        description: "Automatically scan, classify, and import invoices, receipts, and financial documents into the system.",
        highlights: ["98%+ accuracy rate", "Multiple format support (PDF, images, Peppol UBL)", "Automatic data extraction"],
      },
      {
        title: "Expense Categorization",
        description: "Automatically categorize your expenses with an AI-powered system and simplify budget tracking.",
        highlights: ["Learning algorithm", "Customizable categories", "Anomaly detection"],
      },
      {
        title: "Reconciliation Controls",
        description: "Automatically match bank statements with accounting records and instantly detect discrepancies.",
        highlights: ["Automatic matching", "Discrepancy reporting", "Bulk processing support"],
      },
      {
        title: "Financial Reporting",
        description: "Generate periodic financial reports with one click and prepare summary views for management.",
        highlights: ["Customizable templates", "Charts and trend analysis", "Export options"],
      },
    ],
    faq: [
      {
        question: "Can I use it alongside my existing accounting software?",
        answer: "Yes, the platform works as an independent assistant and can be used in parallel with your existing accounting software. Data synchronization via API integration is also possible.",
      },
      {
        question: "How reliable are the AI recommendations?",
        answer: "Our system has a continuously learning structure and accuracy improves with use. Starting at 90%, it reaches 98%+ accuracy after 3 months of usage.",
      },
      {
        question: "Which document formats are supported?",
        answer: "We support PDF, JPEG, PNG, TIFF image formats as well as Peppol UBL e-invoices, digital invoice PDFs, and Excel formats.",
      },
      {
        question: "Is my data secure?",
        answer: "All financial data is stored encrypted, GDPR-compliant infrastructure is used, and your data is never shared with third parties.",
      },
      {
        question: "Can I share with my accountant?",
        answer: "Yes, you can define special access permissions for your accountant and securely share documents and reports.",
      },
    ],
    useCases: [
      {
        title: "Turkish Accounting Office",
        scenario: "Den Haag-based accounting office with a portfolio of 200+ Turkish entrepreneur clients",
        problem: "Invoices are entered manually for many clients, BTW filing periods pile up, error rate is high.",
        solution: "OCR-based automatic invoice recognition with Peppol UBL integration and automated categorization.",
        outcome: "Processing time decreased by 70%, BTW filing delays dropped to zero.",
      },
      {
        title: "Restaurant Chain Bookkeeping",
        scenario: "Amsterdam-based Turkish restaurant chain with 8 branches and multiple payment channels",
        problem: "Daily Z-reports, receipts, and invoices arrive in mixed formats; reconciliation is fully manual.",
        solution: "Automatic invoice processing, expense classification, and per-branch dashboards were deployed.",
        outcome: "Reconciliation time dropped from 3 days to 2 hours, accounting workload decreased by 60%.",
      },
      {
        title: "SME Advisory Office",
        scenario: "Utrecht-based advisory office serving 50+ Turkish SME clients",
        problem: "End-of-period reporting piles up, per-client manual work is heavy, capacity is constrained.",
        solution: "AI assistant automated routine tasks and a standardized reporting format was rolled out.",
        outcome: "Period close time dropped from 2 weeks to 3 days, client capacity doubled.",
      },
    ],
  },
  {
    slug: "emlak-danismani-yardimcisi",
    title: "Real Estate Advisor Assistant",
    category: "Real Estate Operations SaaS",
    heroSummary: "An operations assistant platform that centralizes listing, client, and appointment workflows for real estate offices.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Simplify the daily workflow of real estate advisors",
      "Increase visibility by centralizing listing and client data",
      "Establish standardized communication and follow-up processes",
    ],
    whatItDoes: [
      "Centralizes listing creation, updates, and portfolio management",
      "Captures client requests, meeting notes, and follow-up actions",
      "Automates appointment planning and reminder flows",
      "Provides a structured panel for document and transaction tracking",
    ],
    benefits: [
      "Helps advisors manage larger portfolios in an organized way",
      "Reduces delayed communication and missed follow-ups",
      "Improves team coordination through operational transparency",
      "Protects process quality while office scale increases",
    ],
    targetUsers: ["Real estate advisors", "Small and mid-sized real estate offices", "Portfolio managers", "Client relations teams"],
    featuresDetailed: [
      {
        title: "Centralized Portfolio Management",
        description: "Manage, update, and distribute all your listings from a single panel to different platforms.",
        highlights: ["Multi-platform integration", "Bulk listing updates", "Photo and video management"],
      },
      {
        title: "Client Tracking System (CRM)",
        description: "Record client requests, meeting notes, and communication history.",
        highlights: ["360° client view", "Automatic reminders", "Interaction history"],
      },
      {
        title: "Appointment & Calendar Management",
        description: "Schedule viewing appointments and send automatic reminders to clients.",
        highlights: ["Calendar synchronization", "SMS/Email reminders", "Conflict detection"],
      },
      {
        title: "Document & Transaction Tracking",
        description: "Manage all documents during the sales process digitally and track transaction status.",
        highlights: ["Digital document archive", "Transaction stage tracking", "E-signature integration"],
      },
    ],
    faq: [
      {
        question: "Is there integration with portals like Zillow, Realtor.com?",
        answer: "Yes, API integration with leading real estate portals is available. You can publish listings to multiple platforms with a single click.",
      },
      {
        question: "Can all advisors in the office use the same system?",
        answer: "Yes, multi-user support is available. Each advisor manages their own portfolio while the office manager can monitor all activities.",
      },
      {
        question: "Is there a mobile app?",
        answer: "Yes, native mobile apps for iOS and Android are available. You can perform all operations even in the field.",
      },
      {
        question: "Can I import client data?",
        answer: "You can perform bulk client imports from Excel, CSV, and vCard formats. Data transfer from existing CRM systems is also supported.",
      },
      {
        question: "What reporting features are available?",
        answer: "Detailed reports including advisor performance, portfolio analysis, sales conversion rates, and market trend reports are provided.",
      },
    ],
    useCases: [
      {
        title: "Turkish Real Estate Office",
        scenario: "Rotterdam-based Turkish real estate office, 120+ listings, multi-portal across Funda and Pararius",
        problem: "Listings drift between portals, client tracking is in Excel, appointments get mixed up.",
        solution: "Multi-portal automatic sync, centralized CRM, and automated reminders were set up.",
        outcome: "Listing update time decreased by 70%, client response rate increased by 40%.",
      },
      {
        title: "Utrecht Real Estate Network",
        scenario: "Real estate network with 4 branches around Utrecht and 30+ advisors",
        problem: "Listings are not shared between branches, performance comparison is not possible.",
        solution: "All branches unified on a single platform with shared portfolio access enabled.",
        outcome: "Cross-branch sales increased by 25%, closing rate improved by 30%.",
      },
      {
        title: "Independent Turkish Agent",
        scenario: "Den Haag-based solo real estate advisor with a primarily Turkish client base",
        problem: "Clients, documents, and appointments live in separate tools, hard to respond quickly.",
        solution: "CRM, document archive, and automated reminders unified in a single mobile app.",
        outcome: "Daily operations time reduced by 2 hours, closing rate increased by 35%.",
      },
    ],
  },
  {
    slug: "agent-ai-calismalari",
    title: "Agent AI Initiatives",
    category: "AI Agent Implementation",
    heroSummary:
      "A focused initiative to build task-driven AI agents that improve operational efficiency, speed, and service consistency across business workflows.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Lower human workload in high-repetition processes",
      "Increase response speed and consistency through automation",
      "Deliver scalable AI workflow patterns across departments",
    ],
    whatItDoes: [
      "Designs task-specific agent flows for HR, onboarding, and customer operations",
      "Converts process steps into traceable, rule-based automation structures",
      "Customizes AI agent behaviors according to business targets",
      "Supports controlled human-plus-AI operating models",
    ],
    benefits: [
      "Helps reduce operational costs",
      "Supports faster service with consistent quality levels",
      "Allows teams to focus more on strategic work",
      "Provides scalable operations for growing workloads",
    ],
    targetUsers: ["HR teams", "Customer operations teams", "SMEs and enterprises targeting workflow automation", "Product teams planning AI transformation"],
    featuresDetailed: [
      {
        title: "Task-Based Agent Design",
        description: "We design AI agents that autonomously perform specific tasks customized to your business processes.",
        highlights: ["Process analysis and modeling", "Rule-based decision mechanisms", "Human-AI hybrid workflows"],
      },
      {
        title: "HR & Onboarding Agents",
        description: "Customized agent solutions that handle recruitment, orientation, and employee questions.",
        highlights: ["Candidate screening automation", "Orientation assistant", "Policy and procedure bot"],
      },
      {
        title: "Customer Service Agents",
        description: "Smart agents that answer customer questions 24/7, create tickets, and route inquiries.",
        highlights: ["Natural language understanding", "Multi-channel support", "Escalation management"],
      },
      {
        title: "Process Automation Agents",
        description: "Agent solutions that automate repetitive workflows, collect data, and generate reports.",
        highlights: ["Data entry automation", "Report generation", "System integrations"],
      },
    ],
    faq: [
      {
        question: "What exactly does an AI agent do?",
        answer: "AI agents are software programs that autonomously perform designated tasks. For example, they handle customer queries, process data, or follow process steps without human intervention.",
      },
      {
        question: "Can it integrate with our existing systems?",
        answer: "Yes, the agents we develop can be integrated with CRM, ERP, HRIS, and other enterprise systems via APIs.",
      },
      {
        question: "How long does agent development take?",
        answer: "Simple task agents can be developed in 2-4 weeks, complex process agents in 6-12 weeks. The process starts with a needs analysis.",
      },
      {
        question: "Can agents learn?",
        answer: "Yes, the agents we develop use AI models that learn from feedback and improve their performance over time.",
      },
      {
        question: "What happens when human intervention is needed?",
        answer: "Agents detect situations outside their authority and automatically route to the appropriate human operator. Full traceability is ensured.",
      },
    ],
    useCases: [
      {
        title: "Restaurant Reservation Agent",
        scenario: "Amsterdam-based Turkish restaurant chain with 3 branches and multi-channel inbound reservations",
        problem: "Phone reservations cannot keep up, WhatsApp and Instagram requests slip, double-booking happens.",
        solution: "24/7 reservation agent with WhatsApp integration; table availability is synced in real time.",
        outcome: "Missed reservations decreased by 85%, phone load was cut in half.",
      },
      {
        title: "Catering Operations Agent",
        scenario: "Rotterdam-based wedding/event catering with 50+ events per month",
        problem: "Quotation takes hours; menu, headcount, and venue combinations are calculated manually.",
        solution: "Quotation agent and menu module automated pricing with dynamic templates.",
        outcome: "Quote turnaround dropped from 2 hours to 5 minutes, conversion rate increased by 35%.",
      },
      {
        title: "Order & Customer Service Agent",
        scenario: "Tilburg-based Turkish restaurant overwhelmed by online orders and customer questions",
        problem: "Orders are missed during peak hours, repetitive menu questions, multilingual support needed.",
        solution: "A Turkish- and Dutch-speaking order and customer service agent was deployed.",
        outcome: "Order losses decreased by 60%, response time dropped from 24 hours to 30 seconds.",
      },
    ],
  },
  {
    slug: "e-ticaret-web-uygulamalari",
    title: "E-commerce Web Applications",
    category: "Commerce Platforms",
    heroSummary: "We build scalable commerce applications that support end-to-end operations from checkout and payments to inventory and customer accounts.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Consolidate e-commerce operations on a reliable architecture",
      "Improve conversion by streamlining the purchase flow",
      "Increase predictability across stock, order, and customer workflows",
    ],
    whatItDoes: [
      "Integrates payment gateways, shipping workflows, and inventory systems",
      "Unifies order management and customer account experiences",
      "Delivers a high-performance, mobile-first shopping interface",
      "Provides management panels for campaign, product, and operations teams",
    ],
    benefits: [
      "Reduces friction in the checkout journey",
      "Improves control for order and fulfillment operations",
      "Creates a technically scalable base for growth",
      "Strengthens brand experience with modern UX patterns",
    ],
    targetUsers: ["B2C and B2B commerce brands", "Retail companies", "Online sales operations teams", "Digital brands targeting fast growth"],
    featuresDetailed: [
      {
        title: "Modern Shopping Experience",
        description: "We develop fast, mobile-friendly, and user-centric e-commerce interfaces.",
        highlights: ["Mobile-first design", "Fast page loading", "Personalized recommendations"],
      },
      {
        title: "Order & Inventory Management",
        description: "Manage the entire process from order to delivery in a single panel and track inventory levels in real time.",
        highlights: ["Multi-warehouse support", "Automatic inventory alerts", "Bulk order processing"],
      },
      {
        title: "Payment & Shipping Integrations",
        description: "Seamless integration with iDEAL, Mollie, Stripe, PostNL, and DHL — the leading Dutch payment and shipping infrastructures.",
        highlights: ["iDEAL and card payments", "PostNL and DHL shipping", "Mollie/Stripe multi-method support"],
      },
      {
        title: "Admin & Analytics Panel",
        description: "Analyze sales, customer, and product performance with detailed reports.",
        highlights: ["Real-time sales dashboard", "Customer behavior analysis", "Campaign performance tracking"],
      },
    ],
    faq: [
      {
        question: "What's the difference from ready-made e-commerce solutions?",
        answer: "We provide a fully custom, scalable infrastructure that you own. No limitations or monthly fees of ready-made solutions.",
      },
      {
        question: "Is it suitable for B2B e-commerce?",
        answer: "Yes, we develop B2B-specific features such as customer-based pricing, bulk ordering, quote management, and corporate approval workflows.",
      },
      {
        question: "Can it integrate with my existing ERP/accounting system?",
        answer: "Yes, we provide integration with common ERP/accounting systems like Exact, AFAS, SnelStart, and Twinfield as well as Peppol UBL e-invoicing infrastructures.",
      },
      {
        question: "How is site performance?",
        answer: "Using modern technologies (Next.js, CDN, caching), we develop fast-loading sites that meet Google Core Web Vitals standards.",
      },
      {
        question: "Is there post-launch support?",
        answer: "Yes, maintenance, updates, and technical support services are available. We also provide performance monitoring and optimization support.",
      },
    ],
    useCases: [
      {
        title: "Turkish Grocery Online",
        scenario: "Amsterdam-based Turkish grocery launching online orders and home delivery (boodschappen)",
        problem: "Off-the-shelf platforms don't fit Turkish product categories, fresh-product logistics is hard, payment options are limited.",
        solution: "Custom e-commerce with slot-based delivery, iDEAL and Mollie payments, and PostNL shipping integration.",
        outcome: "Online sales reached 25% of total revenue, average basket size increased by 30%.",
      },
      {
        title: "Apparel & Fashion E-commerce",
        scenario: "Den Haag-based Turkish boutique brand launching online for the NL market",
        problem: "Slow off-the-shelf solution, low conversion, limited payment options, no multilingual support.",
        solution: "Custom platform with iDEAL/Mollie payments and Turkish/Dutch/English multilingual UI.",
        outcome: "Page speed increased 3x, conversion rate rose by 50%, marketplace dependency dropped.",
      },
      {
        title: "Specialty Goods B2C",
        scenario: "Rotterdam-based Turkish specialty goods seller (olives, spices, coffee) reliant on marketplaces",
        problem: "Marketplace commissions are high, customer data is inaccessible, brand relationship cannot be built.",
        solution: "Direct B2C platform with subscription model, plus DHL and PostNL shipping integration.",
        outcome: "Marketplace dependency decreased by 70%, repeat customer rate increased by 45%.",
      },
    ],
  },
];

const productDetailsNl: ProductDetail[] = [
  {
    slug: "bayi-yonetimi",
    title: "Dealerbeheer",
    category: "Dealer / Distributor SaaS",
    heroSummary: "Een schaalbaar platform voor fabrikanten en groothandels die dealeroperaties centraal willen aansturen.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Versnipperde dealerprocessen centraliseren in één platform",
      "Meer zichtbaarheid creëren in order- en voorraadstromen",
      "Handmatige opvolging verminderen en teamproductiviteit verhogen",
    ],
    whatItDoes: [
      "Beheert dealer onboarding en rolgebaseerde autorisaties",
      "Ondersteunt orderaanmaak, goedkeuring en statusopvolging",
      "Rapporteert voorraad-, commissie- en prestatiecijfers in realtime",
      "Biedt managementdashboards per regio, dealer en productgroep",
    ],
    benefits: [
      "Verkort besluitvorming",
      "Beperkt operationele verliezen door order- en communicatie fouten",
      "Maakt dealerprestaties objectief en meetbaar",
      "Ondersteunt gestandaardiseerde operatie bij schaalvergroting",
    ],
    targetUsers: ["Fabrikanten", "Distributeurs en groothandels", "Verkoopoperatieteams", "Kanaal- en regiomanagers"],
    featuresDetailed: [
      {
        title: "Dealer Onboarding & Autorisatie",
        description: "Beheer het volledige proces van het toevoegen van nieuwe dealers tot het definiëren van hun rechten in een digitale omgeving.",
        highlights: ["Geautomatiseerde goedkeuringsworkflows", "Rolgebaseerde toegangscontrole", "Digitale contractondertekening"],
      },
      {
        title: "Order- & Voorraadbeheer",
        description: "Volg orders van dealers in één paneel en bekijk de voorraadstatus in realtime.",
        highlights: ["Realtime voorraadtracking", "Automatische ordermeldingen", "Bulkorderverwerking"],
      },
      {
        title: "Prestatie- & Commissierapportage",
        description: "Meet dealerprestaties met objectieve metrics en automatiseer commissieberekeningen.",
        highlights: ["Aanpasbare KPI's", "Automatische commissieberekening", "Periodieke vergelijkingsrapporten"],
      },
      {
        title: "Regionale & Kanaalanalyse",
        description: "Analyseer uw verkoopdata diepgaand per regio, kanaal en product.",
        highlights: ["Geografische prestatiekaarten", "Kanaalgebaseerde verkoopanalyse", "Trendvoorspelling"],
      },
    ],
    faq: [
      {
        question: "Kan het platform integreren met ons bestaande ERP-systeem?",
        answer: "Ja, dankzij onze REST API-infrastructuur is integratie met gangbare ERP/boekhoudsystemen zoals Exact, AFAS, SnelStart en Twinfield mogelijk. Het integratieproces wordt doorgaans binnen 2-4 weken afgerond.",
      },
      {
        question: "Hoeveel dealers kunnen worden beheerd?",
        answer: "Ons platform is gebouwd op een schaalbare cloudinfrastructuur en kan naadloos dealernetwerken van 10 tot 10.000 beheren.",
      },
      {
        question: "Is mobiele toegang beschikbaar?",
        answer: "Ja, het platform heeft een volledig responsive ontwerp en native mobiele apps voor iOS en Android zijn ook beschikbaar.",
      },
      {
        question: "Hoe wordt dataveiligheid gewaarborgd?",
        answer: "Alle gegevens worden beschermd met AES-256-encryptie. Het wordt gehost in ISO 27001-gecertificeerde datacenters met regelmatige beveiligingsaudits.",
      },
      {
        question: "Is er training en ondersteuning beschikbaar?",
        answer: "We bieden onboarding-training, videodocumentatie en 24/7 technische ondersteuning. Daarnaast wordt aan elke klant een toegewijde succesbegeleider toegewezen.",
      },
    ],
    useCases: [
      {
        title: "Textielgroothandel",
        scenario: "Turkse textielgroothandel in Amsterdam met 80+ boutique-dealers",
        problem: "Seizoenscollectie wordt in Excel bijgehouden, distributie naar boutiques is handmatig, voorraad is niet realtime.",
        solution: "Centraal dealerportaal opgezet met seizoensgebonden bestellingen en automatische voorraadsynchronisatie.",
        outcome: "Orderfouten namen af met 85%, voorraadrotatie steeg met 30%.",
      },
      {
        title: "Kledingmerk Distributeur",
        scenario: "Rotterdamse NL-distributeur van een Turks kledingmerk met 60 verkooppunten",
        problem: "Regionale verkoopprestaties zijn niet zichtbaar, commissieberekeningen zijn handmatig en foutgevoelig.",
        solution: "Regionaal prestatiedashboard en automatisch commissieberekeningssysteem geïmplementeerd.",
        outcome: "Commissiegeschillen daalden naar nul, regionale verkoop steeg met 25%.",
      },
      {
        title: "Confectie-Importeur",
        scenario: "Confectie-importeur uit Turkije in Den Haag met 40+ boutique-dealers",
        problem: "Voorraad en orders zijn niet gesynchroniseerd, dubbele invoer en leveringsvertragingen komen voor.",
        solution: "Realtime voorraad- en ordersynchronisatie en ERP-integratie geïmplementeerd.",
        outcome: "Voorraadfouten daalden met 90%, doorlooptijd van orders verkort met 50%.",
      },
    ],
  },
  {
    slug: "muhasebe-asistani",
    title: "Boekhoudassistent",
    category: "AI-ondersteunde Financiële Operaties",
    heroSummary: "Een slimme, documentgerichte assistent om dagelijkse financiële workflows van MKB-teams te versnellen.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Repetitieve boekhoudtaken automatiseren",
      "Nauwkeurigheid verhogen in document- en kostenprocessen",
      "Managementzichtbaarheid verbeteren met snellere rapportage",
    ],
    whatItDoes: [
      "Classificeert facturen en financiële documenten in gestructureerde workflows",
      "Ondersteunt kostencategorisatie en basiscontroles voor afstemming",
      "Genereert financiële samenvattingen en periode-overzichten",
      "Voegt AI-ondersteunde aanbevelingen toe aan bestaande processen",
    ],
    benefits: [
      "Verlaagt operationele tijd en verhoogt teamoutput",
      "Helpt handmatige invoerfouten te verminderen",
      "Maakt dagelijkse financiële opvolging sneller en consistenter",
      "Biedt een schaalbaar werkmodel voor kleinere teams",
    ],
    targetUsers: ["MKB-financeteams", "Bedrijven met accountantskantoor", "Operationele en managementteams", "Document-intensieve organisaties"],
    featuresDetailed: [
      {
        title: "Slimme Documentherkenning (OCR+AI)",
        description: "Scan, classificeer en importeer facturen, bonnen en financiële documenten automatisch in het systeem.",
        highlights: ["98%+ nauwkeurigheid", "Ondersteuning voor meerdere formaten (PDF, afbeeldingen, Peppol UBL)", "Automatische data-extractie"],
      },
      {
        title: "Kostencategorisatie",
        description: "Categoriseer uw uitgaven automatisch met een AI-aangedreven systeem en vereenvoudig budgettracking.",
        highlights: ["Lerend algoritme", "Aanpasbare categorieën", "Anomaliedetectie"],
      },
      {
        title: "Afstemmingscontroles",
        description: "Koppel bankafschriften automatisch aan boekhoudkundige records en detecteer onmiddellijk afwijkingen.",
        highlights: ["Automatische matching", "Afwijkingsrapportage", "Ondersteuning voor bulkverwerking"],
      },
      {
        title: "Financiële Rapportage",
        description: "Genereer periodieke financiële rapporten met één klik en bereid samenvattende overzichten voor het management voor.",
        highlights: ["Aanpasbare sjablonen", "Grafieken en trendanalyse", "Exportopties"],
      },
    ],
    faq: [
      {
        question: "Kan ik het naast mijn bestaande boekhoudsoftware gebruiken?",
        answer: "Ja, het platform werkt als een onafhankelijke assistent en kan parallel met uw bestaande boekhoudsoftware worden gebruikt. Datasynchronisatie via API-integratie is ook mogelijk.",
      },
      {
        question: "Hoe betrouwbaar zijn de AI-aanbevelingen?",
        answer: "Ons systeem heeft een continu lerende structuur en de nauwkeurigheid verbetert met gebruik. Beginnend op 90%, bereikt het 98%+ nauwkeurigheid na 3 maanden gebruik.",
      },
      {
        question: "Welke documentformaten worden ondersteund?",
        answer: "We ondersteunen PDF, JPEG, PNG, TIFF-afbeeldingsformaten evenals Peppol UBL e-facturen, digitale factuur-PDF's en Excel-formaten.",
      },
      {
        question: "Zijn mijn gegevens veilig?",
        answer: "Alle financiële gegevens worden versleuteld opgeslagen, AVG-conforme infrastructuur wordt gebruikt en uw gegevens worden nooit gedeeld met derden.",
      },
      {
        question: "Kan ik delen met mijn accountant?",
        answer: "Ja, u kunt speciale toegangsrechten voor uw accountant definiëren en veilig documenten en rapporten delen.",
      },
    ],
    useCases: [
      {
        title: "Turks Boekhoudkantoor",
        scenario: "Boekhoudkantoor in Den Haag met portefeuille van 200+ Turkse ondernemerklanten",
        problem: "Facturen worden handmatig per klant ingevoerd, BTW-aangiftes stapelen zich op, foutpercentage is hoog.",
        solution: "OCR-gebaseerde factuurherkenning met Peppol UBL-integratie en automatische categorisatie.",
        outcome: "Verwerkingstijd daalde met 70%, vertragingen bij BTW-aangiftes werden tot nul teruggebracht.",
      },
      {
        title: "Boekhouding Restaurantketen",
        scenario: "Turkse restaurantketen in Amsterdam met 8 vestigingen en meerdere betaalkanalen",
        problem: "Dagelijkse Z-rapporten, bonnen en facturen komen in verschillende formaten; afstemming is volledig handmatig.",
        solution: "Automatische factuurverwerking, kostenclassificatie en dashboards per vestiging geïmplementeerd.",
        outcome: "Afstemmingstijd daalde van 3 dagen naar 2 uur, boekhoudbelasting verlaagd met 60%.",
      },
      {
        title: "MKB Adviespraktijk",
        scenario: "Adviespraktijk in Utrecht die 50+ Turkse MKB-ondernemers bedient",
        problem: "Periode-afsluiting stapelt zich op, handmatig werk per klant is intensief, capaciteit is beperkt.",
        solution: "AI-assistent automatiseerde routinetaken en een gestandaardiseerd rapportageformaat werd ingevoerd.",
        outcome: "Periode-afsluiting verkort van 2 weken naar 3 dagen, klantcapaciteit verdubbeld.",
      },
    ],
  },
  {
    slug: "emlak-danismani-yardimcisi",
    title: "Vastgoedadviseur Assistent",
    category: "Vastgoed Operations SaaS",
    heroSummary: "Een operationeel assistentplatform dat objecten, klanten en afspraken centraal beheert voor vastgoedkantoren.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Dagelijkse workflow van vastgoedadviseurs vereenvoudigen",
      "Zichtbaarheid vergroten door object- en klantdata te centraliseren",
      "Standaard opvolging en communicatieprocessen opzetten",
    ],
    whatItDoes: [
      "Centraliseert objectbeheer, updates en portfolio-overzichten",
      "Legt klantaanvragen, notities en opvolgacties vast",
      "Automatiseert afspraakplanning en herinneringen",
      "Biedt een gestructureerd paneel voor document- en transactiestromen",
    ],
    benefits: [
      "Helpt adviseurs grotere portefeuilles gestructureerd beheren",
      "Vermindert vertraagde communicatie en gemiste opvolging",
      "Versterkt samenwerking door operationele transparantie",
      "Behoudt proceskwaliteit bij groei van het kantoor",
    ],
    targetUsers: ["Vastgoedadviseurs", "Kleine en middelgrote vastgoedkantoren", "Portfoliomanagers", "Klantrelatieteams"],
    featuresDetailed: [
      {
        title: "Gecentraliseerd Portfoliobeheer",
        description: "Beheer, update en distribueer al uw objecten vanuit één paneel naar verschillende platforms.",
        highlights: ["Multi-platform integratie", "Bulk objectupdates", "Foto- en videobeheer"],
      },
      {
        title: "Klantvolgsysteem (CRM)",
        description: "Leg klantverzoeken, gespreksnotities en communicatiegeschiedenis vast.",
        highlights: ["360° klantoverzicht", "Automatische herinneringen", "Interactiegeschiedenis"],
      },
      {
        title: "Afspraak- & Agendabeheer",
        description: "Plan bezichtigingsafspraken en stuur automatische herinneringen naar klanten.",
        highlights: ["Agendasynchronisatie", "SMS/E-mail herinneringen", "Conflictdetectie"],
      },
      {
        title: "Document- & Transactievolging",
        description: "Beheer alle documenten tijdens het verkoopproces digitaal en volg de transactiestatus.",
        highlights: ["Digitaal documentarchief", "Transactiefasetracking", "E-handtekening integratie"],
      },
    ],
    faq: [
      {
        question: "Is er integratie met portals zoals Funda, Pararius?",
        answer: "Ja, API-integratie met Funda, Pararius, Jaap.nl en andere toonaangevende Nederlandse vastgoedportalen is beschikbaar. U kunt met één klik naar meerdere platforms publiceren.",
      },
      {
        question: "Kunnen alle adviseurs op kantoor hetzelfde systeem gebruiken?",
        answer: "Ja, ondersteuning voor meerdere gebruikers is beschikbaar. Elke adviseur beheert zijn eigen portfolio terwijl de kantoormanager alle activiteiten kan monitoren.",
      },
      {
        question: "Is er een mobiele app?",
        answer: "Ja, native mobiele apps voor iOS en Android zijn beschikbaar. U kunt alle handelingen zelfs in het veld uitvoeren.",
      },
      {
        question: "Kan ik klantgegevens importeren?",
        answer: "U kunt bulk klantimports uitvoeren vanuit Excel, CSV en vCard-formaten. Datatransfer vanuit bestaande CRM-systemen wordt ook ondersteund.",
      },
      {
        question: "Welke rapportagefuncties zijn beschikbaar?",
        answer: "Gedetailleerde rapporten waaronder adviseursprestaties, portfolioanalyse, verkoopconversieratio's en markttrendrapporten worden aangeboden.",
      },
    ],
    useCases: [
      {
        title: "Turks Vastgoedkantoor",
        scenario: "Turks vastgoedkantoor in Rotterdam, 120+ objecten, multi-portal beheer via Funda en Pararius",
        problem: "Advertenties tussen portalen lopen uit elkaar, klantopvolging zit in Excel, afspraken raken door elkaar.",
        solution: "Multi-portal automatische sync, centrale CRM en automatische herinneringen werden opgezet.",
        outcome: "Objectupdatetijd daalde met 70%, klantresponsratio steeg met 40%.",
      },
      {
        title: "Vastgoednetwerk Utrecht",
        scenario: "Vastgoednetwerk met 4 vestigingen rond Utrecht en 30+ adviseurs",
        problem: "Objecten worden niet gedeeld tussen vestigingen, prestatievergelijking is niet mogelijk.",
        solution: "Alle vestigingen verenigd op één platform met gedeelde portefeuille-toegang.",
        outcome: "Verkoop tussen vestigingen steeg met 25%, sluitingsratio verbeterde met 30%.",
      },
      {
        title: "Zelfstandige Turkse Makelaar",
        scenario: "Zelfstandige vastgoedadviseur in Den Haag met overwegend Turkse klantportefeuille",
        problem: "Klanten, documenten en afspraken zitten in verschillende tools, snel reageren is lastig.",
        solution: "CRM, documentarchief en automatische herinneringen verenigd in één mobiele app.",
        outcome: "Dagelijkse operatietijd verminderd met 2 uur, sluitingsratio steeg met 35%.",
      },
    ],
  },
  {
    slug: "agent-ai-calismalari",
    title: "Agent AI-trajecten",
    category: "AI Agent Implementatie",
    heroSummary:
      "Een gericht traject om taakgestuurde AI-agenten te bouwen die efficiëntie, snelheid en serviceconsistentie in bedrijfsprocessen verhogen.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Menselijke workload verlagen in repetitieve processen",
      "Reactiesnelheid en consistentie verbeteren via automatisering",
      "Schaalbare AI-workflowpatronen leveren voor meerdere teams",
    ],
    whatItDoes: [
      "Ontwerpt taakgerichte agentflows voor HR, onboarding en klantoperaties",
      "Zet processtappen om naar traceerbare, regelgebaseerde automatisering",
      "Past AI-agentgedrag aan op bedrijfsdoelen",
      "Ondersteunt gecontroleerde mens-plus-AI werkwijzen",
    ],
    benefits: [
      "Helpt operationele kosten te verlagen",
      "Ondersteunt snellere service met constante kwaliteit",
      "Geeft teams meer ruimte voor strategisch werk",
      "Biedt schaalbare operatie bij groeiende workloads",
    ],
    targetUsers: ["HR-teams", "Klantoperatieteams", "MKB en grotere bedrijven met automatiseringsdoelen", "Productteams met AI-transformatieplannen"],
    featuresDetailed: [
      {
        title: "Taakgebaseerd Agent Design",
        description: "We ontwerpen AI-agenten die autonoom specifieke taken uitvoeren, aangepast aan uw bedrijfsprocessen.",
        highlights: ["Procesanalyse en modellering", "Regelgebaseerde beslissingsmechanismen", "Mens-AI hybride workflows"],
      },
      {
        title: "HR & Onboarding Agents",
        description: "Maatwerkagentoplossingen voor werving, oriëntatie en werknemersvragen.",
        highlights: ["Automatische kandidaatscreening", "Oriëntatieassistent", "Beleid- en procedurebot"],
      },
      {
        title: "Klantenservice Agents",
        description: "Slimme agenten die 24/7 klantvragen beantwoorden, tickets aanmaken en doorverwijzen.",
        highlights: ["Natuurlijke taalverwerking", "Multi-channel ondersteuning", "Escalatiebeheer"],
      },
      {
        title: "Procesautomatisering Agents",
        description: "Agentoplossingen die repetitieve workflows automatiseren, data verzamelen en rapporten genereren.",
        highlights: ["Data-invoerautomatisering", "Rapportgeneratie", "Systeemintegraties"],
      },
    ],
    faq: [
      {
        question: "Wat doet een AI-agent precies?",
        answer: "AI-agenten zijn softwareprogramma's die aangewezen taken autonoom uitvoeren. Bijvoorbeeld klantvragen beantwoorden, data verwerken of processtappen volgen zonder menselijke tussenkomst.",
      },
      {
        question: "Kan het integreren met onze bestaande systemen?",
        answer: "Ja, de agenten die we ontwikkelen kunnen via API's worden geïntegreerd met CRM, ERP, HRIS en andere bedrijfssystemen.",
      },
      {
        question: "Hoe lang duurt agentontwikkeling?",
        answer: "Eenvoudige taakagenten kunnen in 2-4 weken worden ontwikkeld, complexe procesagenten in 6-12 weken. Het proces begint met een behoefteanalyse.",
      },
      {
        question: "Kunnen agenten leren?",
        answer: "Ja, de agenten die we ontwikkelen gebruiken AI-modellen die leren van feedback en hun prestaties in de loop van de tijd verbeteren.",
      },
      {
        question: "Wat gebeurt er als menselijke tussenkomst nodig is?",
        answer: "Agenten detecteren situaties buiten hun bevoegdheid en routeren automatisch naar de juiste menselijke operator. Volledige traceerbaarheid is gewaarborgd.",
      },
    ],
    useCases: [
      {
        title: "Restaurant Reserveringsagent",
        scenario: "Turkse restaurantketen in Amsterdam met 3 vestigingen en multi-kanaal reserveringen",
        problem: "Telefonische reserveringen zijn niet bij te benen, WhatsApp- en Instagram-verzoeken vallen tussen wal en schip, dubbele boekingen komen voor.",
        solution: "24/7 reserveringsagent met WhatsApp-integratie; tafelbeschikbaarheid wordt realtime gesynchroniseerd.",
        outcome: "Gemiste reserveringen daalden met 85%, telefoondrukte gehalveerd.",
      },
      {
        title: "Catering Operationele Agent",
        scenario: "Bruiloft/event-cateraar in Rotterdam met 50+ events per maand",
        problem: "Offerte-opmaak duurt uren; menu-, gasten- en locatiecombinaties worden handmatig berekend.",
        solution: "Offerte-agent en menu-module automatiseerden de prijsstelling met dynamische sjablonen.",
        outcome: "Offertedoorlooptijd daalde van 2 uur naar 5 minuten, conversieratio steeg met 35%.",
      },
      {
        title: "Order- & Klantenservice-agent",
        scenario: "Turks restaurant in Tilburg overspoeld met online bestellingen en klantvragen",
        problem: "Bestellingen worden gemist tijdens piekuren, repetitieve menuvragen, meertalige ondersteuning vereist.",
        solution: "Een Turks- en Nederlandstalige order- en klantenservice-agent werd ingezet.",
        outcome: "Verloren orders daalden met 60%, reactietijd daalde van 24 uur naar 30 seconden.",
      },
    ],
  },
  {
    slug: "e-ticaret-web-uygulamalari",
    title: "E-commerce Webapplicaties",
    category: "Commerce Platforms",
    heroSummary: "Schaalbare commerce-applicaties voor end-to-end operaties van checkout en betalingen tot voorraad en klantaccounts.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "E-commerce operaties consolideren op een robuuste architectuur",
      "Conversie verhogen door frictie in aankoopflow te verlagen",
      "Voorspelbaarheid vergroten in voorraad-, order- en klantstromen",
    ],
    whatItDoes: [
      "Integreert betaalproviders, verzending en voorraadsystemen",
      "Verenigt orderbeheer en klantaccountervaring in één platform",
      "Levert een snelle, mobielgerichte winkelervaring",
      "Biedt beheerpanelen voor campagnes, producten en operatie",
    ],
    benefits: [
      "Vermindert frictie in checkout en aankoopmoment",
      "Verbetert controle op order- en fulfilmentprocessen",
      "Bouwt een technisch schaalbare basis voor groei",
      "Versterkt merkbeleving met moderne UX-patronen",
    ],
    targetUsers: ["B2C- en B2B-commerce merken", "Retailbedrijven", "Online sales operations teams", "Digitale merken met groeidoelen"],
    featuresDetailed: [
      {
        title: "Moderne Winkelervaring",
        description: "We ontwikkelen snelle, mobiel-vriendelijke en gebruikersgerichte e-commerce interfaces.",
        highlights: ["Mobile-first design", "Snelle paginalading", "Gepersonaliseerde aanbevelingen"],
      },
      {
        title: "Order- & Voorraadbeheer",
        description: "Beheer het volledige proces van order tot levering in één paneel en volg voorraadniveaus in realtime.",
        highlights: ["Multi-warehouse ondersteuning", "Automatische voorraadwaarschuwingen", "Bulkorderverwerking"],
      },
      {
        title: "Betaling & Verzendintegraties",
        description: "Naadloze integratie met iDEAL, Mollie, Stripe, PostNL en DHL — toonaangevende Nederlandse betaal- en verzendinfrastructuren.",
        highlights: ["iDEAL en kaartbetalingen", "PostNL en DHL verzending", "Mollie/Stripe multi-methode ondersteuning"],
      },
      {
        title: "Beheer & Analysepaneel",
        description: "Analyseer verkoop-, klant- en productprestaties met gedetailleerde rapporten.",
        highlights: ["Realtime verkoopdashboard", "Klantgedragsanalyse", "Campagneprestatiemonitoring"],
      },
    ],
    faq: [
      {
        question: "Wat is het verschil met kant-en-klare e-commerce oplossingen?",
        answer: "We bieden een volledig op maat gemaakte, schaalbare infrastructuur die u bezit. Geen beperkingen of maandelijkse kosten van kant-en-klare oplossingen.",
      },
      {
        question: "Is het geschikt voor B2B e-commerce?",
        answer: "Ja, we ontwikkelen B2B-specifieke functies zoals klantgebaseerde prijzen, bulkorders, offertemanagement en zakelijke goedkeuringsworkflows.",
      },
      {
        question: "Kan het integreren met mijn bestaande ERP/boekhoudsysteem?",
        answer: "Ja, we bieden integratie met gangbare ERP/boekhoudsystemen zoals Exact, AFAS, SnelStart en Twinfield, evenals Peppol UBL e-facturatie-infrastructuren.",
      },
      {
        question: "Hoe is de siteprestatie?",
        answer: "Met moderne technologieën (Next.js, CDN, caching) ontwikkelen we snel ladende sites die voldoen aan Google Core Web Vitals standaarden.",
      },
      {
        question: "Is er ondersteuning na lancering?",
        answer: "Ja, onderhoud, updates en technische ondersteuning zijn beschikbaar. We bieden ook prestatiemonitoring en optimalisatieondersteuning.",
      },
    ],
    useCases: [
      {
        title: "Turkse Supermarkt Online",
        scenario: "Turkse supermarkt in Amsterdam start met online bestellen en bezorging (boodschappen)",
        problem: "Standaardplatformen passen niet bij Turkse productcategorieën, verslogistiek is lastig, betaalopties zijn beperkt.",
        solution: "Custom e-commerce met slotgebaseerde bezorging, iDEAL- en Mollie-betalingen en PostNL-verzendingen.",
        outcome: "Online verkoop bereikte 25% van totale omzet, gemiddelde orderwaarde steeg met 30%.",
      },
      {
        title: "Mode & Kleding E-commerce",
        scenario: "Turks boutique-merk in Den Haag lanceert online voor de NL-markt",
        problem: "Trage kant-en-klare oplossing, lage conversie, beperkte betaalopties, geen meertalige ondersteuning.",
        solution: "Custom platform met iDEAL/Mollie-betalingen en Turks/Nederlands/Engels meertalige UI.",
        outcome: "Paginasnelheid 3x sneller, conversieratio steeg met 50%, marktplaatsafhankelijkheid afgenomen.",
      },
      {
        title: "Specialiteiten B2C",
        scenario: "Turkse specialiteitenverkoper in Rotterdam (olijven, kruiden, koffie), afhankelijk van marktplaatsen",
        problem: "Marktplaatscommissies zijn hoog, klantdata is onbereikbaar, merkrelatie kan niet worden opgebouwd.",
        solution: "Direct B2C-platform met abonnementsmodel en DHL- en PostNL-verzending.",
        outcome: "Marktplaatsafhankelijkheid daalde met 70%, herhaalkoperratio steeg met 45%.",
      },
    ],
  },
];

export const productDetails = productDetailsTr;

export function getProductBySlug(slug: string, locale: ProductLocale = "tr") {
  const source = locale === "en" ? productDetailsEn : locale === "nl" ? productDetailsNl : productDetailsTr;
  return source.find((product) => product.slug === slug);
}
