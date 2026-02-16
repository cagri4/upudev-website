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
        answer: "Yes, thanks to our REST API infrastructure, integration with common ERP systems such as SAP, Logo, and Netsis is possible. The integration process is typically completed within 2-4 weeks.",
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
        title: "Home Appliances Manufacturer",
        scenario: "National home appliances manufacturer with 200+ dealers",
        problem: "Order tracking is done in Excel, inventory information is outdated, dealer performance cannot be measured.",
        solution: "A centralized dealer portal was established, automatic inventory synchronization was enabled, and performance dashboards were created.",
        outcome: "Order errors decreased by 85%, inventory turnover rate increased by 30%.",
      },
      {
        title: "Food Distributor",
        scenario: "Regional food distributor with a 50-dealer network",
        problem: "Commission calculations are manual, errors are causing increased dealer complaints.",
        solution: "An automatic commission calculation system was deployed with transparent reporting.",
        outcome: "Commission disputes dropped to zero, dealer satisfaction increased by 45%.",
      },
      {
        title: "Automotive Spare Parts",
        scenario: "Automotive spare parts manufacturer with 300+ authorized retailers",
        problem: "Regional sales performance is not visible, growth opportunities are being missed.",
        solution: "Sales maps were created with a geographic analysis module, and potential regions were identified.",
        outcome: "Sales increased by 25% in new regions, market entry time was reduced by 40%.",
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
        highlights: ["98%+ accuracy rate", "Multiple format support (PDF, images, e-invoices)", "Automatic data extraction"],
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
        answer: "We support PDF, JPEG, PNG, TIFF image formats as well as e-Invoice (UBL), e-Archive, and Excel formats.",
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
        title: "Retail Chain",
        scenario: "Retail chain with 50 branches, 3,000+ monthly invoice transactions",
        problem: "Invoice entry is manual, error rate is high, data is delivered late to the accountant.",
        solution: "Automatic invoice recognition system was installed, categorization automation was deployed.",
        outcome: "Processing time decreased by 70%, error rate dropped from 5% to 0.5%.",
      },
      {
        title: "E-commerce Company",
        scenario: "Fast-growing e-commerce company with multiple payment channels",
        problem: "Reconciliation of payments from different sources is difficult, cash flow visibility is low.",
        solution: "Automatic reconciliation module was integrated, real-time cash flow dashboard was created.",
        outcome: "Reconciliation time dropped from 3 days to 2 hours, financial visibility increased by 100%.",
      },
      {
        title: "Manufacturing SME",
        scenario: "Medium-sized manufacturing company with a 2-person accounting team",
        problem: "Team capacity is insufficient, end-of-period reporting is delayed, no data for management decisions.",
        solution: "Routine tasks were automated with the AI assistant, instant reporting infrastructure was set up.",
        outcome: "Accounting team focused on strategic tasks, reporting time was reduced by 80%.",
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
        title: "Boutique Real Estate Office",
        scenario: "Boutique real estate office with 5 advisors, 150+ active listings",
        problem: "Listing updates take time, client follow-ups are forgotten, appointments get mixed up.",
        solution: "Centralized portfolio management and automatic reminder system was set up.",
        outcome: "Listing update time decreased by 60%, client response rate increased by 35%.",
      },
      {
        title: "Franchise Real Estate Network",
        scenario: "Real estate franchise with 10 branches, 40+ advisors",
        problem: "Coordination between branches is weak, performance comparison is not possible.",
        solution: "All branches were unified on a single platform with a centralized management panel.",
        outcome: "Portfolio sharing between branches started, total sales increased by 20%.",
      },
      {
        title: "Independent Real Estate Advisor",
        scenario: "Solo real estate advisor with 50+ client portfolio",
        problem: "Client tracking is in Excel, appointments are in phone calendar, document organization is complex.",
        solution: "All operations were unified in a single mobile application.",
        outcome: "Daily operations time reduced by 2 hours, closing rate increased by 25%.",
      },
    ],
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
    featuresDetailed: [
      {
        title: "Central Reservation Panel",
        description: "Manage reservations from all channels in a single screen and prevent conflicts.",
        highlights: ["Real-time availability", "Drag & drop reservations", "Multiple room type support"],
      },
      {
        title: "Channel Management",
        description: "Provide automatic synchronization with all OTAs like Booking, Expedia, and Airbnb.",
        highlights: ["Instant rate updates", "Availability synchronization", "Overbooking protection"],
      },
      {
        title: "Dynamic Pricing",
        description: "Maximize occupancy and revenue with AI-powered price optimization.",
        highlights: ["Market analysis", "Competitor price tracking", "Automatic price adjustment"],
      },
      {
        title: "Operations Dashboards",
        description: "Central control panel for daily check-in/out, housekeeping, and guest requests.",
        highlights: ["Daily task list", "Department coordination", "Guest request tracking"],
      },
    ],
    faq: [
      {
        question: "Which OTAs do you integrate with?",
        answer: "We provide integration with Booking.com, Expedia, Airbnb, Hotels.com, Agoda, and 50+ local and international OTAs.",
      },
      {
        question: "Is it suitable for small boutique hotels?",
        answer: "Yes, it can be used for everything from 5-room boutique hotels to 500+ room hotel chains. Flexible pricing model is available.",
      },
      {
        question: "Can it integrate with my existing PMS system?",
        answer: "Integration with common PMS systems like Opera, Protel, and Clock PMS is possible. Our API infrastructure also supports custom integrations.",
      },
      {
        question: "How does the pricing AI work?",
        answer: "The system analyzes factors such as historical data, market demand, competitor prices, and event calendars to provide optimal price recommendations.",
      },
      {
        question: "What reporting and analytics features are available?",
        answer: "Comprehensive KPI reports including RevPAR, ADR, occupancy rates, channel performance, and revenue forecasts are provided.",
      },
    ],
    useCases: [
      {
        title: "Boutique Hotel",
        scenario: "12-room boutique hotel in a tourist destination",
        problem: "Manual price updates are time-consuming, OTA commissions are high, direct bookings are low.",
        solution: "Dynamic pricing and direct booking engine were integrated.",
        outcome: "Direct bookings increased by 40%, average room revenue increased by 25%.",
      },
      {
        title: "Apart Hotel Chain",
        scenario: "Apart hotel chain with 5 locations, 200 units",
        problem: "Price inconsistency between locations, no central visibility, overbooking problems.",
        solution: "Centralized channel manager and price management system was set up.",
        outcome: "Overbooking dropped to zero, price consistency achieved, revenue increased by 30%.",
      },
      {
        title: "Resort",
        scenario: "100-room resort on the Mediterranean coast",
        problem: "Seasonal occupancy fluctuations, revenue loss during low season.",
        solution: "Seasonal strategy was optimized with AI-powered pricing.",
        outcome: "Low season occupancy increased by 35%, annual RevPAR improved by 20%.",
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
        title: "E-commerce Customer Service",
        scenario: "E-commerce company receiving 500+ daily customer requests",
        problem: "Customer service team is insufficient, response times are long, satisfaction is low.",
        solution: "A 24/7 customer service agent was deployed, complex requests were routed to human operators.",
        outcome: "Response time dropped from 4 hours to 30 seconds, customer satisfaction increased by 40%.",
      },
      {
        title: "HR Onboarding Automation",
        scenario: "Technology company with 200+ annual new hires",
        problem: "Onboarding process is manual and inconsistent, HR team is overwhelmed with routine questions.",
        solution: "Onboarding agent automated the orientation process, a self-service knowledge center was created.",
        outcome: "HR team's routine workload decreased by 60%, new employee adaptation time shortened by 30%.",
      },
      {
        title: "Finance Process Automation",
        scenario: "Medium-sized company processing 1,000+ invoices monthly",
        problem: "Invoice approval process is slow, tracking is difficult, delays are causing cost increases.",
        solution: "Invoice processing agent with automatic classification, approval workflow, and tracking system was set up.",
        outcome: "Invoice processing time decreased by 75%, early payment discounts started being utilized.",
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
        description: "Seamless integration with leading payment and shipping infrastructures.",
        highlights: ["All banks and virtual POS", "Shipping tracking integration", "Installment options"],
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
        answer: "Yes, we provide integration with common ERP systems like SAP, Oracle, QuickBooks and e-Invoice/e-Archive infrastructures.",
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
        title: "Fashion E-commerce",
        scenario: "Local fashion brand targeting 50K+ annual orders",
        problem: "Existing ready-made solution is slow, customization is limited, marketplace commissions are high.",
        solution: "Custom e-commerce platform was developed with all payment and shipping integrations.",
        outcome: "Page speed increased 3x, conversion rate increased by 45%, marketplace dependency decreased.",
      },
      {
        title: "B2B Industrial Products",
        scenario: "Industrial spare parts distributor with 500+ corporate customers",
        problem: "Phone ordering is inefficient, customer-based pricing is manually tracked.",
        solution: "B2B e-commerce portal was developed with ERP integration and automatic pricing system.",
        outcome: "Online order rate reached 70%, order processing time decreased by 60%.",
      },
      {
        title: "Food & Grocery",
        scenario: "Regional grocery chain wanting to start online ordering and delivery",
        problem: "Ready-made solutions are not suitable for food logistics, stock-order synchronization is difficult.",
        solution: "Slot-based delivery management, real-time inventory tracking, and mobile app were developed.",
        outcome: "Online sales reached 25% of total revenue, order value per customer increased by 30%.",
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
        answer: "Ja, dankzij onze REST API-infrastructuur is integratie met gangbare ERP-systemen zoals SAP, Exact en Unit4 mogelijk. Het integratieproces wordt doorgaans binnen 2-4 weken afgerond.",
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
        title: "Witgoedfabrikant",
        scenario: "Nationale witgoedfabrikant met 200+ dealers",
        problem: "Ordertracking gebeurt in Excel, voorraadinformatie is verouderd, dealerprestaties kunnen niet worden gemeten.",
        solution: "Een gecentraliseerd dealerportaal werd opgezet, automatische voorraadsynchronisatie werd ingeschakeld en prestatiedashboards werden gecreëerd.",
        outcome: "Orderfouten namen af met 85%, voorraadrotatie steeg met 30%.",
      },
      {
        title: "Voedingsdistributeur",
        scenario: "Regionale voedingsdistributeur met een netwerk van 50 dealers",
        problem: "Commissieberekeningen zijn handmatig, fouten leiden tot meer klachten van dealers.",
        solution: "Een automatisch commissieberekeningssysteem werd geïmplementeerd met transparante rapportage.",
        outcome: "Commissiegeschillen daalden naar nul, dealertevredenheid steeg met 45%.",
      },
      {
        title: "Auto-onderdelen",
        scenario: "Fabrikant van auto-onderdelen met 300+ geautoriseerde verkopers",
        problem: "Regionale verkoopprestaties zijn niet zichtbaar, groeikansen worden gemist.",
        solution: "Verkoopkaarten werden gemaakt met een geografische analysemodule en potentiële regio's werden geïdentificeerd.",
        outcome: "Verkoop steeg met 25% in nieuwe regio's, markttoetreding werd 40% sneller.",
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
        highlights: ["98%+ nauwkeurigheid", "Ondersteuning voor meerdere formaten (PDF, afbeeldingen, e-facturen)", "Automatische data-extractie"],
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
        answer: "We ondersteunen PDF, JPEG, PNG, TIFF afbeeldingsformaten evenals e-Factuur (UBL), e-Archief en Excel-formaten.",
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
        title: "Retailketen",
        scenario: "Retailketen met 50 filialen, 3.000+ maandelijkse factuurtransacties",
        problem: "Factuurinvoer is handmatig, foutenpercentage is hoog, gegevens worden te laat aan de accountant geleverd.",
        solution: "Automatisch factuurherkenningssysteem werd geïnstalleerd, categorisatie-automatisering werd ingezet.",
        outcome: "Verwerkingstijd daalde met 70%, foutenpercentage daalde van 5% naar 0,5%.",
      },
      {
        title: "E-commercebedrijf",
        scenario: "Snelgroeiend e-commercebedrijf met meerdere betaalkanalen",
        problem: "Afstemming van betalingen uit verschillende bronnen is moeilijk, cashflowzichtbaarheid is laag.",
        solution: "Automatische afstemmingsmodule werd geïntegreerd, realtime cashflow-dashboard werd gecreëerd.",
        outcome: "Afstemmingstijd daalde van 3 dagen naar 2 uur, financiële zichtbaarheid steeg met 100%.",
      },
      {
        title: "Productie-MKB",
        scenario: "Middelgroot productiebedrijf met een 2-persoons boekhoudteam",
        problem: "Teamcapaciteit is onvoldoende, einde-perioderepportage loopt vertraging op, geen data voor managementbeslissingen.",
        solution: "Routinetaken werden geautomatiseerd met de AI-assistent, directe rapportage-infrastructuur werd opgezet.",
        outcome: "Boekhoudteam richtte zich op strategische taken, rapportagetijd werd 80% verkort.",
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
        answer: "Ja, API-integratie met toonaangevende vastgoedportalen is beschikbaar. U kunt met één klik naar meerdere platforms publiceren.",
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
        title: "Boutique Vastgoedkantoor",
        scenario: "Boutique vastgoedkantoor met 5 adviseurs, 150+ actieve objecten",
        problem: "Objectupdates kosten tijd, klantopvolgingen worden vergeten, afspraken raken door elkaar.",
        solution: "Gecentraliseerd portfoliobeheer en automatisch herinneringssysteem werden opgezet.",
        outcome: "Objectupdatetijd daalde met 60%, klantresponsratio steeg met 35%.",
      },
      {
        title: "Franchise Vastgoednetwerk",
        scenario: "Vastgoedfranchise met 10 vestigingen, 40+ adviseurs",
        problem: "Coördinatie tussen vestigingen is zwak, prestatievergelijking is niet mogelijk.",
        solution: "Alle vestigingen werden verenigd op één platform met een gecentraliseerd beheerpaneel.",
        outcome: "Portfoliodeling tussen vestigingen startte, totale verkoop steeg met 20%.",
      },
      {
        title: "Zelfstandig Vastgoedadviseur",
        scenario: "Solo vastgoedadviseur met 50+ klantenportfolio",
        problem: "Klanttracking is in Excel, afspraken in telefoonagenda, documentorganisatie is complex.",
        solution: "Alle operaties werden verenigd in één mobiele applicatie.",
        outcome: "Dagelijkse operatietijd verminderd met 2 uur, sluitingsratio steeg met 25%.",
      },
    ],
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
    featuresDetailed: [
      {
        title: "Centraal Reserveringspaneel",
        description: "Beheer reserveringen van alle kanalen in één scherm en voorkom conflicten.",
        highlights: ["Realtime beschikbaarheid", "Drag & drop reserveringen", "Ondersteuning voor meerdere kamertypes"],
      },
      {
        title: "Kanaalbeheer",
        description: "Zorg voor automatische synchronisatie met alle OTA's zoals Booking, Expedia en Airbnb.",
        highlights: ["Directe tariefupdates", "Beschikbaarheidssynchronisatie", "Overbookingbescherming"],
      },
      {
        title: "Dynamische Prijsstelling",
        description: "Maximaliseer bezetting en omzet met AI-aangedreven prijsoptimalisatie.",
        highlights: ["Marktanalyse", "Concurrentprijsmonitoring", "Automatische prijsaanpassing"],
      },
      {
        title: "Operationele Dashboards",
        description: "Centraal controlepaneel voor dagelijkse check-in/out, housekeeping en gastverzoeken.",
        highlights: ["Dagelijkse takenlijst", "Afdelingscoördinatie", "Gastverzoektracking"],
      },
    ],
    faq: [
      {
        question: "Met welke OTA's integreert u?",
        answer: "We bieden integratie met Booking.com, Expedia, Airbnb, Hotels.com, Agoda en 50+ lokale en internationale OTA's.",
      },
      {
        question: "Is het geschikt voor kleine boetiekhotels?",
        answer: "Ja, het kan worden gebruikt voor alles van 5-kamer boetiekhotels tot 500+ kamer hotelketens. Flexibel prijsmodel is beschikbaar.",
      },
      {
        question: "Kan het integreren met mijn bestaande PMS-systeem?",
        answer: "Integratie met gangbare PMS-systemen zoals Opera, Protel en Clock PMS is mogelijk. Onze API-infrastructuur ondersteunt ook maatwerkintegraties.",
      },
      {
        question: "Hoe werkt de prijs-AI?",
        answer: "Het systeem analyseert factoren zoals historische gegevens, marktvraag, concurrentprijzen en evenementenkalenders om optimale prijsaanbevelingen te doen.",
      },
      {
        question: "Welke rapportage- en analysefuncties zijn beschikbaar?",
        answer: "Uitgebreide KPI-rapporten waaronder RevPAR, ADR, bezettingsgraden, kanaalprestaties en omzetprognoses worden aangeboden.",
      },
    ],
    useCases: [
      {
        title: "Boetiekhotel",
        scenario: "12-kamer boetiekhotel op een toeristische bestemming",
        problem: "Handmatige prijsupdates kosten tijd, OTA-commissies zijn hoog, directe boekingen zijn laag.",
        solution: "Dynamische prijsstelling en directe boekingsmotor werden geïntegreerd.",
        outcome: "Directe boekingen stegen met 40%, gemiddelde kameromzet steeg met 25%.",
      },
      {
        title: "Aparthotelketen",
        scenario: "Aparthotelketen met 5 locaties, 200 units",
        problem: "Prijsinconsistentie tussen locaties, geen centraal overzicht, overbookingproblemen.",
        solution: "Gecentraliseerde channel manager en prijsbeheersysteem werden opgezet.",
        outcome: "Overbooking daalde naar nul, prijsconsistentie bereikt, omzet steeg met 30%.",
      },
      {
        title: "Resort",
        scenario: "100-kamer resort aan de Middellandse Zee",
        problem: "Seizoensgebonden bezettingsschommelingen, omzetverlies tijdens laagseizoen.",
        solution: "Seizoensstrategie werd geoptimaliseerd met AI-aangedreven prijsstelling.",
        outcome: "Laagseizoen bezetting steeg met 35%, jaarlijkse RevPAR verbeterde met 20%.",
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
        title: "E-commerce Klantenservice",
        scenario: "E-commercebedrijf dat dagelijks 500+ klantverzoeken ontvangt",
        problem: "Klantenserviceteam is onvoldoende, reactietijden zijn lang, tevredenheid is laag.",
        solution: "Een 24/7 klantenserviceagent werd ingezet, complexe verzoeken werden doorgestuurd naar menselijke operators.",
        outcome: "Reactietijd daalde van 4 uur naar 30 seconden, klanttevredenheid steeg met 40%.",
      },
      {
        title: "HR Onboarding Automatisering",
        scenario: "Technologiebedrijf met 200+ nieuwe aanwervingen per jaar",
        problem: "Onboardingproces is handmatig en inconsistent, HR-team wordt overspoeld met routinevragen.",
        solution: "Onboarding-agent automatiseerde het oriëntatieproces, een self-service kenniscentrum werd gecreëerd.",
        outcome: "Routinebelasting van HR-team daalde met 60%, nieuwe werknemersadaptatietijd verkort met 30%.",
      },
      {
        title: "Financiële Procesautomatisering",
        scenario: "Middelgroot bedrijf dat maandelijks 1.000+ facturen verwerkt",
        problem: "Factuurgoedkeuringsproces is traag, tracking is moeilijk, vertragingen veroorzaken kostenstijgingen.",
        solution: "Factuurverwerkingsagent met automatische classificatie, goedkeuringsworkflow en volgsysteem werd opgezet.",
        outcome: "Factuurverwerkingstijd daalde met 75%, vroegbetalingskortingen werden benut.",
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
        description: "Naadloze integratie met toonaangevende betaal- en verzendinfrastructuren.",
        highlights: ["Alle banken en virtuele POS", "Verzendtracking integratie", "Termijnbetalingsopties"],
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
        answer: "Ja, we bieden integratie met gangbare ERP-systemen zoals SAP, Exact, Unit4 en e-Factuur/e-Archief infrastructuren.",
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
        title: "Mode E-commerce",
        scenario: "Lokaal modemerk met doel van 50K+ jaarlijkse orders",
        problem: "Bestaande kant-en-klare oplossing is traag, aanpassing is beperkt, marktplaatscommissies zijn hoog.",
        solution: "Custom e-commerce platform werd ontwikkeld met alle betaal- en verzendintegraties.",
        outcome: "Paginasnelheid steeg 3x, conversieratio steeg met 45%, marktplaatsafhankelijkheid daalde.",
      },
      {
        title: "B2B Industriële Producten",
        scenario: "Distributeur van industriële onderdelen met 500+ zakelijke klanten",
        problem: "Telefonische bestellingen zijn inefficiënt, klantgebaseerde prijzen worden handmatig bijgehouden.",
        solution: "B2B e-commerce portaal werd ontwikkeld met ERP-integratie en automatisch prijssysteem.",
        outcome: "Online bestelpercentage bereikte 70%, orderverwerkingstijd daalde met 60%.",
      },
      {
        title: "Food & Supermarkt",
        scenario: "Regionale supermarktketen die online bestellen en bezorgen wil starten",
        problem: "Kant-en-klare oplossingen zijn niet geschikt voor voedsellogistiek, voorraad-ordersynchronisatie is moeilijk.",
        solution: "Slotgebaseerd bezorgbeheer, realtime voorraadtracking en mobiele app werden ontwikkeld.",
        outcome: "Online verkoop bereikte 25% van totale omzet, orderwaarde per klant steeg met 30%.",
      },
    ],
  },
];

export const productDetails = productDetailsTr;

export function getProductBySlug(slug: string, locale: ProductLocale = "tr") {
  const source = locale === "en" ? productDetailsEn : locale === "nl" ? productDetailsNl : productDetailsTr;
  return source.find((product) => product.slug === slug);
}
