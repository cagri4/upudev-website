import type { Locale } from "@/lib/i18n";
import type { SaasLandingConfig, SaasLandingDictionary } from "./types";

const WHATSAPP_HREF = "https://wa.me/31611352773";

/**
 * UPU Market — landing config (PILOT / şablon referansı).
 *
 * TR dolu; NL/EN slot'ları açık (default TR'ye düşer). İstatistikler pilot
 * verisi gelene kadar "illüstratif" işaretli. Fiyat/signup YOK.
 */
const marketTr: SaasLandingConfig = {
  meta: {
    title: "UPU Market — Müşteriniz geri gelsin | Dijital sadakat + çok dilli AI",
    description:
      "Hollanda'daki Türk marketleri için: QR → WhatsApp → AI asistan. Dijital sadakat, çok dilli AI ve dijital vitrin tek sistemde. Uygulama yok. Demo için konuşalım.",
  },
  accent: {
    base: "#059669",
    strong: "#047857",
    soft: "#ecfdf5",
    ring: "rgba(5, 150, 105, 0.35)",
  },
  nav: {
    brandHref: "/{locale}",
    links: [
      { label: "Özellikler", href: "#ozellikler" },
      { label: "Nasıl Çalışır", href: "#nasil-calisir" },
      { label: "SSS", href: "#sss" },
    ],
  },
  hero: {
    badge: "Hollanda'daki Türk marketleri için",
    title: "Müşteriniz bir kere gelmesin, geri gelsin.",
    sub: "QR'ı okutur, WhatsApp'a düşer, AI devralır. Dijital sadakat, çok dilli müşteri iletişimi ve dijital vitrin — hepsi tek sistemde. Müşteri uygulama indirmez.",
    trust: "Telefonda çalışır. Uygulama yok, plastik kart yok, kurulum derdi yok.",
    visual: {
      chat: {
        contactName: "Anatolia Market",
        contactStatus: "AI asistan • çevrimiçi",
        bubbles: [
          { side: "in", text: "Hoi, hebben jullie vers Turks brood vandaag?", tag: "NL", time: "14:02" },
          {
            side: "out",
            text: "Ja zeker! Vers gebakken om 13:00. Ook simit en açma. Wil je 5 sparpunten erbij? 😊",
            tag: "AI",
            time: "14:02",
          },
          { side: "in", text: "Top, ik kom langs!", tag: "NL", time: "14:03" },
        ],
        trHint: "↳ Panelde Türkçe görürsünüz: “Bugün taze ekmek var mı?” → AI Felemenkçe yanıtladı + 5 puan teklif etti.",
      },
      qr: {
        title: "Tara, üye ol",
        sub: "5 saniye",
        caption: "Kasada tek QR. Uygulama indirmek yok.",
      },
    },
  },
  socialProof: {
    title: "Türk marketlerinin diline ve müşterisine göre tasarlandı",
    line: "Sadakat + çok dilli iletişim + vitrin — bugüne kadar 3 ayrı araç, şimdi tek sistem.",
    badges: ["Pilot programı açık", "NL · TR · AR", "WhatsApp yerel", "Türkçe panel"],
  },
  pains: {
    title: "Markette her gün olan, kimsenin çözmediği şeyler",
    sub: "Tanıdık geliyorsa, zaten para kaybediyorsunuz demektir.",
    items: [
      {
        icon: "🚪",
        title: "Müşteri bir kez gelip kayboluyor",
        text: "Kim sadık, kim bir daha gelmedi — hiçbir fikriniz yok. Geri getirecek bir kanalınız da yok.",
      },
      {
        icon: "💬",
        title: "Çok dilli müşteriyle konuşamıyorsunuz",
        text: "Felemenkçe ya da Arapça soru gelince iletişim kopuyor. Her müşteriye yetişmek imkânsız.",
      },
      {
        icon: "🔎",
        title: "Google'da neredeyse yoksunuz",
        text: "Kampanyanız, yeni ürününüz, taze fırınınız var — ama vitrininiz dijitalde görünmüyor.",
      },
      {
        icon: "💳",
        title: "Plastik damga kartı taşınmıyor",
        text: "Cüzdanda unutuluyor, yırtılıyor, kayboluyor. Sadakat programınız çekmecede kalıyor.",
      },
    ],
  },
  howItWorks: {
    title: "3 adımda, telefonda. Uygulama yok.",
    sub: "Müşteri QR'ı okutur, gerisi kendiliğinden akar. Siz panelden Türkçe izlersiniz.",
    steps: [
      {
        id: "01",
        kicker: "Tara",
        title: "Kasadaki QR'ı okutur",
        text: "Müşteri telefon kamerasını QR'a tutar. Uygulama indirme, hesap açma, şifre — hiçbiri yok.",
        bubbles: [{ side: "out", text: "Anatolia Market'e hoş geldiniz 👋 5 saniyede üye olun, ilk puanınız bizden.", tag: "AI", time: "14:02" }],
      },
      {
        id: "02",
        kicker: "WhatsApp'a düşer",
        title: "Zaten kullandığı uygulamaya gelir",
        text: "Sohbet doğrudan WhatsApp'ta açılır. Yeni bir şey öğrenmesi gerekmez — herkesin telefonunda zaten var.",
        bubbles: [{ side: "in", text: "Merhaba, üye olmak istiyorum", tag: "TR", time: "14:02" }],
      },
      {
        id: "03",
        kicker: "AI devralır",
        title: "Müşterinin dilinde cevaplar + puan verir",
        text: "AI asistan soruları müşterinin dilinde yanıtlar, sadakat puanını işler, kampanyayı hatırlatır. Siz uyurken bile.",
        bubbles: [
          { side: "in", text: "Bedankt! En hoeveel punten heb ik nu?", tag: "NL", time: "14:03" },
          { side: "out", text: "Je hebt nu 25 punten ⭐ Bij 100 punten een gratis tas vol verrassingen!", tag: "AI", time: "14:03" },
        ],
      },
    ],
  },
  features: {
    title: "Tek sistem, dört iş bir arada",
    sub: "Ayrı ayrı araçlara para vermeyi bırakın. Hepsi tek panelde, Türkçe.",
    items: [
      {
        icon: "⭐",
        title: "Dijital sadakat programı",
        text: "Plastik kart yok. Müşteri WhatsApp üzerinden puan toplar, ödül kazanır, geri gelir. Kim sadık, kim kaçtı — panelde net görürsünüz.",
        large: true,
      },
      {
        icon: "🌍",
        title: "Çok dilli AI asistan",
        text: "NL · TR · AR. Müşterinin dilinde otomatik cevap, 7/24.",
      },
      {
        icon: "🛍️",
        title: "Dijital vitrin",
        text: "Taze ürünler, kampanyalar, yeni gelenler — paylaşılabilir bir bağlantıda.",
      },
      {
        icon: "🇹🇷",
        title: "Türkçe panel",
        text: "Her şeyi kendi dilinizde yönetin. Yabancı arayüzle boğuşmak yok.",
      },
      {
        icon: "🚫",
        title: "Teslimat yok — ve olmamalı",
        text: "Sizi kargo şirketine çevirmiyoruz. UPU Market, mağazanıza gelen müşteriyi sadık müşteriye dönüştürür. İşinize odaklı kalır.",
        honest: true,
      },
    ],
  },
  proof: {
    title: "Kuruluştan ilk müşteriye, dakikalar içinde",
    stats: [
      { value: 5, suffix: " sn", label: "Üyelik süresi", note: "telefonda, uygulama yok" },
      { value: 0, label: "İndirilecek uygulama", note: "WhatsApp zaten var" },
      { value: 3, label: "Desteklenen dil", note: "NL · TR · AR" },
    ],
    testimonial: {
      quote:
        "Müşterilerim WhatsApp'ı zaten kullanıyordu. Şimdi puanlarını oradan görüyorlar, ben de Türkçe panelden takip ediyorum. Plastik kart derdi bitti.",
      author: "Pilot işletme",
      role: "temsili senaryo",
    },
  },
  audience: {
    kicker: "Sizin için yapıldı",
    title: "Hollanda'daki Türk marketini tanıyan bir sistem",
    body: "Genel bir sadakat uygulaması değil. Çok dilli müşteri, WhatsApp alışkanlığı, Türkçe yönetim ihtiyacı — bunları bilen ve bu hendeği sizin için tutan bir sistem.",
    points: [
      "Müşterileriniz NL, TR ve AR konuşuyor — sistem de öyle",
      "Herkes WhatsApp kullanıyor — yeni uygulama öğretmek yok",
      "Siz Türkçe yönetiyorsunuz — yabancı panel yok",
    ],
  },
  faq: {
    title: "Sık sorulan sorular",
    items: [
      { q: "Müşterilerimin uygulama indirmesi gerekir mi?", a: "Hayır. Her şey WhatsApp üzerinden çalışır. Müşteri sadece QR'ı okutur; indirme, hesap, şifre yok." },
      { q: "Panel Türkçe mi?", a: "Evet. Tüm yönetim ekranı Türkçedir. İsterseniz ekip için başka dile de geçebilirsiniz." },
      { q: "Teslimat / kurye hizmeti veriyor mu?", a: "Hayır, bilinçli olarak vermiyoruz. UPU Market mağaza içi sadakat ve iletişim sistemidir; sizi lojistik şirketine çevirmez." },
      { q: "Hangi dilleri destekliyor?", a: "Başlangıçta Felemenkçe (NL), Türkçe (TR) ve Arapça (AR). AI müşterinin diline göre otomatik yanıt verir." },
      { q: "Kurulumu ne kadar sürer?", a: "Kısa bir demo görüşmesinin ardından kasanıza tek bir QR koyup başlarsınız. Donanım değişikliği gerekmez." },
      { q: "Mevcut kasa sistemimle çalışır mı?", a: "Evet. UPU Market kasanızın yanında, ondan bağımsız çalışır. Mevcut düzeninizi değiştirmenize gerek yok." },
    ],
  },
  finalCta: {
    title: "Marketinizi 10 dakikalık bir demoda görün.",
    sub: "Önce konuşalım — sistemin sizin marketinizde nasıl çalışacağını birlikte bakalım. Taahhüt yok.",
  },
  ctaPrimary: { label: "Demo Al", href: "/{locale}/iletisim" },
  ctaSecondary: { label: "WhatsApp'tan Yaz", href: WHATSAPP_HREF, external: true },
  footerNote: "UPU Market — Hollanda'daki Türk marketleri için dijital sadakat, çok dilli AI ve dijital vitrin. UpuDev güvencesiyle.",
};

/** NL / EN slot'ları açık — şimdilik TR'ye düşer (locale-ready iskelet). */
export const marketLanding: SaasLandingDictionary = {
  tr: marketTr,
  // nl: marketNl,  ← çeviri geldiğinde doldurulacak
  // en: marketEn,
};

export function getMarketLanding(locale: Locale): SaasLandingConfig {
  return marketLanding[locale] ?? marketLanding.tr!;
}
