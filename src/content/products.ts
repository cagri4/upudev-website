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
        answer: "Evet, REST API altyapımız sayesinde SAP, Logo, Netsis gibi yaygın ERP sistemleriyle entegrasyon sağlanabilir. Entegrasyon süreci genellikle 2-4 hafta içinde tamamlanır.",
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
        title: "Beyaz Eşya Üreticisi",
        scenario: "200+ bayisi olan ulusal beyaz eşya üreticisi",
        problem: "Sipariş takibi Excel'de yapılıyor, stok bilgisi güncel değil, bayi performansı ölçülemiyor.",
        solution: "Merkezi bayi portalı kuruldu, otomatik stok senkronizasyonu sağlandı, performans dashboard'ları oluşturuldu.",
        outcome: "Sipariş hataları %85 azaldı, stok devir hızı %30 arttı.",
      },
      {
        title: "Gıda Distribütörü",
        scenario: "Bölgesel gıda distribütörü, 50 bayi ağı",
        problem: "Komisyon hesaplamaları manuel, hatalar nedeniyle bayi şikayetleri artıyor.",
        solution: "Otomatik komisyon hesaplama sistemi devreye alındı, şeffaf raporlama sağlandı.",
        outcome: "Komisyon anlaşmazlıkları sıfıra indi, bayi memnuniyeti %45 arttı.",
      },
      {
        title: "Otomotiv Yedek Parça",
        scenario: "Otomotiv yedek parça üreticisi, 300+ yetkili satıcı",
        problem: "Bölgesel satış performansı görünür değil, büyüme fırsatları kaçırılıyor.",
        solution: "Coğrafi analiz modülü ile satış haritaları oluşturuldu, potansiyel bölgeler belirlendi.",
        outcome: "Yeni bölgelerde %25 satış artışı, pazara giriş süresi %40 kısaldı.",
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
        highlights: ["%98+ doğruluk oranı", "Çoklu format desteği (PDF, görsel, e-fatura)", "Otomatik veri çıkarma"],
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
        answer: "PDF, JPEG, PNG, TIFF görsel formatları ile e-Fatura (UBL), e-Arşiv ve Excel formatlarını destekliyoruz.",
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
        title: "Perakende Zinciri",
        scenario: "50 şubeli perakende zinciri, aylık 3000+ fatura işlemi",
        problem: "Fatura girişi manuel, hata oranı yüksek, mali müşavire geç veri iletimi.",
        solution: "Otomatik fatura tanıma sistemi kuruldu, kategorilendirme otomasyonu devreye alındı.",
        outcome: "İşlem süresi %70 azaldı, hata oranı %5'ten %0.5'e düştü.",
      },
      {
        title: "E-Ticaret Şirketi",
        scenario: "Hızlı büyüyen e-ticaret şirketi, çoklu ödeme kanalı",
        problem: "Farklı kaynaklardan gelen ödemelerin mutabakatı zor, nakit akışı görünürlüğü düşük.",
        solution: "Otomatik mutabakat modülü entegre edildi, gerçek zamanlı nakit akışı dashboard'u oluşturuldu.",
        outcome: "Mutabakat süresi 3 günden 2 saate düştü, finansal görünürlük %100 arttı.",
      },
      {
        title: "Üretim KOBİ'si",
        scenario: "Orta ölçekli üretim şirketi, 2 kişilik muhasebe ekibi",
        problem: "Ekip kapasitesi yetersiz, dönem sonu raporlama gecikmeli, yönetim kararları için veri yok.",
        solution: "AI asistan ile rutin işlemler otomatize edildi, anlık raporlama altyapısı kuruldu.",
        outcome: "Muhasebe ekibi stratejik işlere odaklandı, raporlama süresi %80 kısaldı.",
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
        question: "Sahibinden, Hepsiemlak gibi portallarla entegrasyon var mı?",
        answer: "Evet, Türkiye'nin önde gelen emlak portallarıyla API entegrasyonu mevcuttur. Tek tıkla çoklu platforma ilan yayınlayabilirsiniz.",
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
        title: "Butik Emlak Ofisi",
        scenario: "5 danışmanlı butik emlak ofisi, 150+ aktif portföy",
        problem: "İlan güncellemeleri zaman alıyor, müşteri takipleri unutuluyor, randevular karışıyor.",
        solution: "Merkezi portföy yönetimi ve otomatik hatırlatma sistemi kuruldu.",
        outcome: "İlan güncelleme süresi %60 azaldı, müşteri dönüş oranı %35 arttı.",
      },
      {
        title: "Franchise Emlak Ağı",
        scenario: "10 şubeli emlak franchise'ı, 40+ danışman",
        problem: "Şubeler arası koordinasyon zayıf, performans karşılaştırması yapılamıyor.",
        solution: "Merkezi yönetim paneli ile tüm şubeler tek platformda birleştirildi.",
        outcome: "Şubeler arası portföy paylaşımı başladı, toplam satışlar %20 arttı.",
      },
      {
        title: "Bağımsız Emlak Danışmanı",
        scenario: "Solo çalışan emlak danışmanı, 50+ müşteri portföyü",
        problem: "Müşteri takibi Excel'de, randevular telefon takviminde, belge organizasyonu karmaşık.",
        solution: "Tüm operasyonlar tek mobil uygulamada birleştirildi.",
        outcome: "Günlük operasyon süresi 2 saat azaldı, kapanış oranı %25 arttı.",
      },
    ],
  },
  {
    slug: "otel-asistanlari",
    title: "Otel Asistanları",
    category: "Rezervasyon ve Operasyon",
    heroSummary:
      "Konaklama işletmelerinin rezervasyon, kanal ve fiyat yönetimi operasyonlarını desteklemek için geliştirilen AI odaklı yardımcı modül setidir.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Rezervasyon süreçlerinde operasyonel dağınıklığı azaltmak",
      "Doluluk ve gelir yönetiminde daha tutarlı karar mekanizması kurmak",
      "Kanal yönetimi süreçlerini merkezi ve izlenebilir hale getirmek",
    ],
    whatItDoes: [
      "Rezervasyon akışını tek panelde yönetmeyi kolaylaştırır",
      "Kanal dağıtımı ve müsaitlik yönetimini daha kontrollü hale getirir",
      "Fiyat optimizasyonu için veri odaklı karar desteği sunar",
      "Operasyon ekipleri için günlük takip ekranları ve özetler sağlar",
    ],
    benefits: [
      "Manuel operasyon yükünü azaltır",
      "Gelir yönetiminde daha hızlı aksiyon alınmasına yardımcı olur",
      "Farklı satış kanallarında daha tutarlı süreç yönetimi sağlar",
      "Misafir deneyimini etkileyen operasyonel gecikmeleri azaltır",
    ],
    targetUsers: ["Butik oteller", "Otel zincirleri", "Rezervasyon ve gelir yönetimi ekipleri", "Konaklama operasyon yöneticileri"],
    featuresDetailed: [
      {
        title: "Merkezi Rezervasyon Paneli",
        description: "Tüm kanallardan gelen rezervasyonları tek ekranda yönetin, çakışmaları önleyin.",
        highlights: ["Gerçek zamanlı müsaitlik", "Drag & drop rezervasyon", "Çoklu oda tipi desteği"],
      },
      {
        title: "Kanal Yönetimi (Channel Manager)",
        description: "Booking, Expedia, Airbnb gibi tüm OTA'larla otomatik senkronizasyon sağlayın.",
        highlights: ["Anında oran güncelleme", "Müsaitlik senkronizasyonu", "Overbooking koruması"],
      },
      {
        title: "Dinamik Fiyatlandırma",
        description: "AI destekli fiyat optimizasyonu ile doluluk ve geliri maksimize edin.",
        highlights: ["Pazar analizi", "Rakip fiyat takibi", "Otomatik fiyat ayarlama"],
      },
      {
        title: "Operasyon Dashboard'ları",
        description: "Günlük check-in/out, housekeeping ve misafir talepleri için merkezi kontrol paneli.",
        highlights: ["Günlük görev listesi", "Departman koordinasyonu", "Misafir talep takibi"],
      },
    ],
    faq: [
      {
        question: "Hangi OTA'larla entegrasyon var?",
        answer: "Booking.com, Expedia, Airbnb, Hotels.com, Agoda ve 50+ yerel ve uluslararası OTA ile entegrasyon sağlıyoruz.",
      },
      {
        question: "Küçük butik oteller için uygun mu?",
        answer: "Evet, 5 odalı butik otellerden 500+ odalı zincir otellere kadar her ölçekte kullanılabilir. Esnek fiyatlandırma modeli mevcuttur.",
      },
      {
        question: "Mevcut PMS sistemimle entegre olabilir mi?",
        answer: "Opera, Protel, Clock PMS gibi yaygın PMS sistemleriyle entegrasyon sağlanabilir. API altyapımız özel entegrasyonları da destekler.",
      },
      {
        question: "Fiyatlandırma AI'ı nasıl çalışıyor?",
        answer: "Sistem; geçmiş veriler, pazar talebi, rakip fiyatları ve etkinlik takvimi gibi faktörleri analiz ederek optimal fiyat önerileri sunar.",
      },
      {
        question: "Raporlama ve analitik özellikleri neler?",
        answer: "RevPAR, ADR, doluluk oranları, kanal performansı ve gelir tahminleri gibi kapsamlı KPI raporları sunulmaktadır.",
      },
    ],
    useCases: [
      {
        title: "Butik Otel",
        scenario: "Kapadokya'da 12 odalı butik otel",
        problem: "Manuel fiyat güncellemesi zaman alıyor, OTA komisyonları yüksek, direkt rezervasyon az.",
        solution: "Dinamik fiyatlandırma ve direkt booking motoru entegre edildi.",
        outcome: "Direkt rezervasyonlar %40 arttı, ortalama oda geliri %25 yükseldi.",
      },
      {
        title: "Apart Otel Zinciri",
        scenario: "5 lokasyonlu apart otel zinciri, 200 ünite",
        problem: "Lokasyonlar arası fiyat tutarsızlığı, merkezi görünürlük yok, overbooking problemleri.",
        solution: "Merkezi channel manager ve fiyat yönetimi sistemi kuruldu.",
        outcome: "Overbooking sıfıra indi, fiyat tutarlılığı sağlandı, gelir %30 arttı.",
      },
      {
        title: "Tatil Köyü",
        scenario: "Akdeniz'de 100 odalı tatil köyü",
        problem: "Sezonsal doluluk dalgalanmaları, düşük sezonda gelir kaybı.",
        solution: "AI destekli fiyatlandırma ile sezonsal strateji optimize edildi.",
        outcome: "Düşük sezon doluluğu %35 arttı, yıllık RevPAR %20 iyileşti.",
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
        title: "E-Ticaret Müşteri Hizmetleri",
        scenario: "Günlük 500+ müşteri talebi alan e-ticaret şirketi",
        problem: "Müşteri hizmetleri ekibi yetersiz, yanıt süreleri uzun, memnuniyet düşük.",
        solution: "7/24 çalışan müşteri hizmetleri agent'ı devreye alındı, karmaşık talepler insan operatöre yönlendirildi.",
        outcome: "Yanıt süresi 4 saatten 30 saniyeye düştü, müşteri memnuniyeti %40 arttı.",
      },
      {
        title: "HR Onboarding Otomasyonu",
        scenario: "Yıllık 200+ yeni işe alım yapan teknoloji şirketi",
        problem: "Onboarding süreci manuel ve tutarsız, HR ekibi rutin sorularla boğuluyor.",
        solution: "Onboarding agent'ı ile oryantasyon süreci otomatize edildi, self-servis bilgi merkezi oluşturuldu.",
        outcome: "HR ekibinin rutin yükü %60 azaldı, yeni çalışan adaptasyon süresi %30 kısaldı.",
      },
      {
        title: "Finans Süreç Otomasyonu",
        scenario: "Aylık 1000+ fatura işleyen orta ölçekli şirket",
        problem: "Fatura onay süreci yavaş, takip zorluğu, gecikme kaynaklı maliyet artışı.",
        solution: "Fatura işleme agent'ı ile otomatik sınıflandırma, onay akışı ve takip sistemi kuruldu.",
        outcome: "Fatura işleme süresi %75 azaldı, erken ödeme indirimleri kullanılmaya başlandı.",
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
        description: "Türkiye'nin önde gelen ödeme ve kargo altyapılarıyla sorunsuz entegrasyon.",
        highlights: ["Tüm bankalar ve sanal POS", "Kargo takip entegrasyonu", "Taksit seçenekleri"],
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
        answer: "Evet, SAP, Logo, Netsis, Mikro gibi yaygın ERP sistemleri ve e-Fatura/e-Arşiv altyapılarıyla entegrasyon sağlıyoruz.",
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
        title: "Moda E-Ticaret",
        scenario: "Yerli moda markası, yıllık 50K+ sipariş hedefi",
        problem: "Mevcut hazır çözüm yavaş, özelleştirme kısıtlı, pazaryeri komisyonları yüksek.",
        solution: "Özel e-ticaret platformu geliştirildi, tüm ödeme ve kargo entegrasyonları yapıldı.",
        outcome: "Sayfa hızı 3 kat arttı, dönüşüm oranı %45 yükseldi, pazaryeri bağımlılığı azaldı.",
      },
      {
        title: "B2B Endüstriyel Ürünler",
        scenario: "Endüstriyel yedek parça distribütörü, 500+ kurumsal müşteri",
        problem: "Telefonla sipariş alma verimsiz, müşteri bazlı fiyatlandırma manuel takip ediliyor.",
        solution: "B2B e-ticaret portalı geliştirildi, ERP entegrasyonu ve otomatik fiyatlandırma sistemi kuruldu.",
        outcome: "Online sipariş oranı %70'e ulaştı, sipariş işleme süresi %60 azaldı.",
      },
      {
        title: "Gıda ve Market",
        scenario: "Bölgesel market zinciri, online sipariş ve teslimat başlatmak istiyor",
        problem: "Hazır çözümler gıda lojistiğine uygun değil, stok-sipariş senkronizasyonu zor.",
        solution: "Slot bazlı teslimat yönetimi, gerçek zamanlı stok takibi ve mobil uygulama geliştirildi.",
        outcome: "Online satışlar toplam cironun %25'ine ulaştı, müşteri başına sipariş değeri %30 arttı.",
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
  },
  {
    slug: "otel-asistanlari",
    title: "Hotel Assistants",
    category: "Reservation & Operations",
    heroSummary: "An AI-supported module set designed to strengthen reservation, channel, and pricing operations in hospitality businesses.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Reduce operational fragmentation in reservation workflows",
      "Create more consistent occupancy and revenue decisions",
      "Centralize channel management with clear process visibility",
    ],
    whatItDoes: [
      "Simplifies reservation operations through a unified panel",
      "Improves control over channel distribution and availability",
      "Provides data-backed decision support for pricing optimization",
      "Offers daily summary and tracking interfaces for hotel teams",
    ],
    benefits: [
      "Reduces manual operational workload",
      "Helps teams react faster in revenue management",
      "Enables more consistent execution across sales channels",
      "Decreases service-impacting delays in guest operations",
    ],
    targetUsers: ["Boutique hotels", "Hotel chains", "Reservation and revenue teams", "Hospitality operations managers"],
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
  },
  {
    slug: "otel-asistanlari",
    title: "Hotelassistenten",
    category: "Reservering & Operatie",
    heroSummary: "AI-ondersteunde modules die reservering, kanaalbeheer en prijsoperaties in hospitality versterken.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    goals: [
      "Operationele versnippering in reserveringsprocessen verminderen",
      "Consistentere beslissingen in bezetting en opbrengst creëren",
      "Kanaalbeheer centraal en inzichtelijk maken",
    ],
    whatItDoes: [
      "Vereenvoudigt reserveringsoperaties via één paneel",
      "Verbetert controle op kanaaldistributie en beschikbaarheid",
      "Biedt datagedreven ondersteuning voor prijsoptimalisatie",
      "Levert dagelijkse overzichten en monitoring voor hotelteams",
    ],
    benefits: [
      "Vermindert handmatige operationele belasting",
      "Helpt sneller schakelen in revenue management",
      "Zorgt voor consistentere uitvoering over verkoopkanalen",
      "Verlaagt operationele vertragingen die gastenervaring raken",
    ],
    targetUsers: ["Boetiekhotels", "Hotelketens", "Reserverings- en revenueteams", "Operationeel managers in hospitality"],
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
  },
];

export const productDetails = productDetailsTr;

export function getProductBySlug(slug: string, locale: ProductLocale = "tr") {
  const source = locale === "en" ? productDetailsEn : locale === "nl" ? productDetailsNl : productDetailsTr;
  return source.find((product) => product.slug === slug);
}
