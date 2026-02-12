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

export const productDetails: ProductDetail[] = [
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
    targetUsers: [
      "Üretici firmalar",
      "Distribütörler ve toptancılar",
      "Satış operasyon ekipleri",
      "Bölge ve kanal yöneticileri",
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
    targetUsers: [
      "Emlak danışmanları",
      "Küçük ve orta ölçekli emlak ofisleri",
      "Portföy yöneticileri",
      "Müşteri ilişkileri ekipleri",
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
    targetUsers: [
      "Butik oteller",
      "Otel zincirleri",
      "Rezervasyon ve gelir yönetimi ekipleri",
      "Konaklama operasyon yöneticileri",
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
    targetUsers: [
      "B2C ve B2B e-ticaret markaları",
      "Perakende şirketleri",
      "Online satış operasyon ekipleri",
      "Hızlı büyüme hedefleyen dijital markalar",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return productDetails.find((product) => product.slug === slug);
}
