export type ProductLocale = "tr" | "en" | "nl";

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
