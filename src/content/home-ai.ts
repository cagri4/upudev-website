import type { Locale } from "@/lib/i18n";

/**
 * Ana sayfa v2 (13 Kas 2026) — 15 Kas 2026 dil düzeltmesi: "AI-implementatiepartner".
 * IND iş planı G.5 "geen uitzendconstructie, geen detachering": "uitzendbureau", "huren", "in dienst",
 * "neemt werk over / devralır / takes over" KULLANMA. AI hazırlar (zet klaar), insan onaylar (keurt goed).
 * Kaynak: ajans/musteriler/upu-dev/UPU-CATI-FRAMEWORK.md + SITE-REFERANS-ARTISAN.md
 *
 * Kurallar:
 * - Fiyat: "Eerste maand €69 — daarna vanaf €249 p/m". "vanaf €69 p/m" ve
 *   "eerste maand gratis" YASAK (yanıltıcı, ACM riski).
 * - Kadro: yalnız UNVAN, isim yok (isim kararı Çağrı'da).
 * - Kanıt: yalnız gerçek. Uydurma logo/ROI/puan yok. 50+ · 15+ · 3 talen gerçek → kalır.
 * - Dil: B1, jargon yok; "replace your team", kredi modeli, "2 dakikada kurulum" yok.
 */

export const HOME_WHATSAPP_NUMBER = "31611352773";

type Step = { id: string; title: string; text: string };

export type HomeAiDictionary = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    /** Ana CTA → "Plan een gesprek" modal formu (quote_form_submit). */
    primaryCta: string;
    /** İkincil link → WhatsApp (WhatsAppClick). */
    whatsappCta: string;
    priceNote: string;
    imageAlt: string;
  };
  whatsappText: string;
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
    outro: string;
  };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    /** 16 Kas 2026 (Çağrı): sabit rol kataloğu / "Wat hij doet · Vraagt jou als" YOK — yalnız SONUÇ düzeyinde örnek. */
    members: { context: string; outcome: string }[];
    /** Son kart: "Jouw werk? Wij bouwen de collega." */
    noteTitle: string;
    note: string;
  };
  /** "Seninle nasıl çalışırız" (16 Kas 2026, Çağrı): yöntem/mekanik YOK — dinleriz, işinin bir gününe bakarız, senin sürecine göre kurarız. */
  approach: { eyebrow: string; title: string; intro: string; steps: Step[]; footnote: string };
  how: { eyebrow: string; title: string; intro: string; steps: Step[] };
  control: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    headline: string;
    terms: string;
    trial: { label: string; price: string; points: string[] };
    /** Açılır, küçük: paketlerin içeriği (fiyatsız — vitrin tek 'vanaf'). */
    detailsToggle: string;
    tiers: { name: string; volume: string; points: string[] }[];
    footnote: string;
  };
  references: {
    eyebrow: string;
    title: string;
    text: string;
    stats: { value: string; label: string }[];
    previousTitle: string;
  };
  sectors: {
    eyebrow: string;
    title: string;
    intro: string;
    first: { name: string; text: string; cta: string; whatsappText: string };
    onRequest: string;
    others: { name: string; whatsappText: string }[];
    otherCta: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  closing: { title: string; text: string };
  cta: { title: string; text: string; button: string };
};

const nl: HomeAiDictionary = {
  hero: {
    badge: "Je AI-implementatiepartner",
    title: "Wij zetten klaar. Jij keurt goed.",
    subtitle:
      "Wij richten AI-medewerkers in binnen je bestaande systemen en beheren ze op abonnementsbasis. Zo heb je capaciteit voor het werk dat elke dag terugkomt: facturen, orders, planning.",
    primaryCta: "Plan een gesprek",
    whatsappCta: "of stuur ons een WhatsApp",
    priceNote: "Eerste maand €69 — daarna vanaf €249 p/m. Maandelijks opzegbaar.",
    imageAlt: "AI-medewerker aan het werk",
  },
  whatsappText: "Hoi, ik wil een kennismaking plannen over een AI-medewerker voor mijn zaak.",
  work: {
    eyebrow: "Herken je dit?",
    title: "Welk werk doe je elke dag opnieuw?",
    intro: "In elke zaak komt hetzelfde werk steeds terug. Het kost tijd, maar het moet wel goed gebeuren.",
    items: [
      { title: "Facturen", text: "Elke factuur nakijken: klopt de prijs, klopt het aantal?" },
      { title: "Orders", text: "Bestellingen uit WhatsApp, mail en telefoon overtypen in je systeem." },
      { title: "Planning", text: "Elke dag de leveringen of ritten opnieuw puzzelen." },
      { title: "Tellen", text: "Voorraad tellen en daarna alles in de kassa bijwerken." },
      { title: "Afspraken", text: "Afspraken maken, verzetten en klanten eraan herinneren." },
    ],
    outro: "Voor dit soort werk richten wij een AI-medewerker in. Wij zetten het klaar, jij keurt goed — en jij houdt tijd over voor je klanten en je zaak.",
  },
  team: {
    eyebrow: "AI-medewerkers",
    title: "Zo kan jouw team eruitzien",
    intro: "Geen kant-en-klare rollen uit een catalogus. Elke AI-medewerker richten we in op jouw werk en jouw manier van werken. Wat dat kan opleveren, bijvoorbeeld:",
    members: [
      { context: "Groothandel", outcome: "Maandag 8 uur: de bestellingen staan klaar voor jouw akkoord." },
      { context: "Administratie", outcome: "Je facturen zijn nagekeken. Jij ziet alleen wat aandacht nodig heeft." },
      { context: "Bezorging", outcome: "De ritten voor morgen liggen klaar voordat je naar huis gaat." },
      { context: "Voorraad", outcome: "Na het tellen staan de aantallen al in je kassa." },
      { context: "Winkel", outcome: "Een nieuwe prijs staat meteen goed in het schap." },
    ],
    noteTitle: "Jouw werk? Wij bouwen de collega.",
    note: "Ander werk dat steeds terugkomt? Vertel het ons. We kijken hoe jij het nu doet en richten er een AI-medewerker voor in.",
  },
  approach: {
    eyebrow: "Zo werken we samen",
    title: "Eerst luisteren. Dan pas bouwen.",
    intro: "Elke zaak werkt anders. Daarom beginnen we niet met een pakket, maar met jouw werk.",
    steps: [
      { id: "01", title: "We luisteren", text: "Welk werk komt bij jou elke dag terug? En wat kost je de meeste tijd?" },
      { id: "02", title: "We kijken samen naar een werkdag", text: "We lopen een gewone dag met je door: hoe het werk binnenkomt en hoe jij het nu doet." },
      { id: "03", title: "We richten in op jouw proces", text: "De AI-medewerker volgt jouw manier van werken, in de systemen die je al hebt." },
      { id: "04", title: "Jij houdt de beslissing", text: "Zonder jouw akkoord gaat er niets de deur uit. Jij bepaalt wat hij zelf mag afronden." },
    ],
    footnote: "Wat we inrichten, hangt af van jouw proces. Daarom bespreken we het altijd eerst met jou.",
  },
  how: {
    eyebrow: "Van gesprek tot abonnement",
    title: "In vier stappen ingericht",
    intro: "Geen groot project. Je ziet eerst wat het oplevert, daarna beslis je.",
    steps: [
      { id: "01", title: "Kennismaking", text: "Je plant een gesprek of stuurt ons een WhatsApp. We vragen: welk werk kost jou elke dag tijd?" },
      { id: "02", title: "Voorstel op maat", text: "Op basis van jouw werkdag laten we zien wat een AI-medewerker voor jou klaar kan zetten." },
      { id: "03", title: "Proefmaand €69", text: "Hij werkt een maand mee in jouw proces. Jij keurt goed. Aan het eind krijg je een overzicht." },
      { id: "04", title: "Abonnement", text: "Tevreden? Wij beheren hem verder en stemmen hem af als jouw werk verandert. Vanaf €249 p/m, maandelijks opzegbaar." },
    ],
  },
  control: {
    eyebrow: "Jij houdt de controle",
    title: "Eerst keur jij alles goed",
    intro: "Een nieuwe medewerker moet eerst je vertrouwen verdienen. Een AI-medewerker ook.",
    items: [
      { title: "Eerst goedkeuren", text: "In het begin legt hij alles aan jou voor. Pas als jij het goed vindt, doet hij meer zelf." },
      { title: "Twijfelt hij? Dan stopt hij", text: "Klopt iets niet of weet hij het niet zeker? Dan stopt hij en vraagt het jou of je collega." },
      { title: "Jij bepaalt wat hij mag", text: "Hij werkt alleen met de toegang die jij hem geeft. Je kunt dat altijd aanpassen of stoppen." },
      { title: "Jouw data blijft van jou", text: "We gebruiken je gegevens alleen voor jouw werk en gaan ermee om volgens de AVG." },
    ],
  },
  pricing: {
    eyebrow: "Wat kost een AI-medewerker?",
    title: "Op maat, met een duidelijke maandprijs",
    headline: "Eerste maand €69 — daarna vanaf €249 p/m.",
    terms: "Afgestemd op jouw proces en werkvolume. Maandelijks opzegbaar. Excl. btw.",
    trial: {
      label: "Proefmaand",
      price: "€69",
      points: ["Ingericht op één taak uit jouw werk", "Werkt in jouw proces, met jouw echte data", "Geen opstartkosten", "Overzicht van wat hij deed"],
    },
    detailsToggle: "Hoe het kan groeien (indicatie)",
    tiers: [
      {
        name: "Eén taak",
        volume: "Eén terugkerende taak, ingericht op jouw proces",
        points: ["Elke dag gedaan", "Jij keurt goed waar je wilt"],
      },
      {
        name: "Meerdere taken",
        volume: "Een paar taken die in jouw zaak samenhangen",
        points: ["Voorrang bij support", "Elke maand samen verbeteren"],
      },
      {
        name: "Hele afdeling",
        volume: "Meerdere processen · samen uitgewerkt",
        points: ["Ingericht op jouw bedrijf", "Vaste contactpersoon"],
      },
    ],
    footnote:
      "Elke zaak is anders: een garage met 10 auto's heeft ander werk dan een met 30. Daarom bepalen we de prijs samen in het kennismakingsgesprek, op basis van jouw werk. Is een diepe koppeling met je systeem nodig, dan kan daar eenmalig een bedrag bij komen. Dat hoor je altijd vooraf.",
  },
  references: {
    eyebrow: "Referenties",
    title: "We werken zelf met AI-medewerkers",
    text: "Wij gebruiken AI-medewerkers in ons eigen bedrijf, elke dag. Daarvoor bouwden we software voor ondernemers in Nederland en Turkije.",
    stats: [
      { value: "50+", label: "Projecten opgeleverd" },
      { value: "15+", label: "Jaar ervaring" },
      { value: "3", label: "Talen: NL · TR · EN" },
    ],
    previousTitle: "Eerder door ons gebouwd",
  },
  sectors: {
    eyebrow: "Kies je sector",
    title: "Waar werk jij?",
    intro: "Terugkerend werk zit in elke sector. We beginnen met de sector die we het beste kennen.",
    first: {
      name: "Supermarkt, groothandel & food",
      text: "Het werk in food kennen we het beste: van bestellingen tot facturen en schaplabels.",
      cta: "Vraag naar food",
      whatsappText: "Hoi, ik heb een zaak in food (supermarkt/groothandel) en wil meer weten over een AI-medewerker.",
    },
    onRequest: "Op aanvraag",
    others: [
      { name: "Boekhouding & administratie", whatsappText: "Hoi, ik werk in boekhouding/administratie en wil meer weten over een AI-medewerker." },
      { name: "Makelaardij", whatsappText: "Hoi, ik werk in de makelaardij en wil meer weten over een AI-medewerker." },
      { name: "Horeca", whatsappText: "Hoi, ik heb een horecazaak en wil meer weten over een AI-medewerker." },
      { name: "Andere sector", whatsappText: "Hoi, ik wil meer weten over een AI-medewerker voor mijn zaak." },
    ],
    otherCta: "Vraag het ons",
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Goed om te weten",
    items: [
      {
        q: "Wat kost een AI-medewerker?",
        a: "De eerste maand kost €69. Daarna betaal je vanaf €249 per maand, afhankelijk van hoeveel werk er is. Je kunt elke maand opzeggen. Alle prijzen zijn excl. btw.",
      },
      {
        q: "Is dit een vervanging van personeel?",
        a: "Nee. Wij leveren geen personeel en detacheren niemand. Wij richten software in die terugkerend werk klaarzet in je bestaande systemen. Jij en je mensen keuren goed en beslissen.",
      },
      {
        q: "Moet ik nieuwe software leren?",
        a: "Nee. De medewerker werkt in de systemen die je al gebruikt, zoals je kassa, mail of WhatsApp.",
      },
      {
        q: "Wat als hij een fout maakt?",
        a: "In het begin keur jij alles goed. Twijfelt hij, dan vraagt hij het jou. Pas als je hem vertrouwt, doet hij meer zelf.",
      },
      {
        q: "Hoe snel kan hij beginnen?",
        a: "Dat hangt af van je systemen. In het kennismakingsgesprek kijken we wat nodig is en zeggen we eerlijk hoe lang het duurt.",
      },
      {
        q: "Wat gebeurt er met mijn gegevens?",
        a: "Jouw data blijft van jou. De medewerker ziet alleen wat jij hem geeft, en we gaan ermee om volgens de AVG.",
      },
      {
        q: "In welke taal kan ik met jullie praten?",
        a: "In het Nederlands, Turks of Engels.",
      },
    ],
  },
  closing: {
    title: "Welk werk komt bij jou elke dag terug?",
    text: "Plan een gesprek of stuur ons een WhatsApp. We denken mee en laten je zien wat een AI-medewerker voor jouw zaak kan doen.",
  },
  cta: {
    title: "Liever bellen of mailen?",
    text: "Dat kan ook. Je vindt hieronder al onze gegevens.",
    button: "Contact",
  },
};

const tr: HomeAiDictionary = {
  hero: {
    badge: "AI uygulama ortağınız",
    title: "Biz hazırlarız. Siz onaylarsınız.",
    subtitle:
      "AI elemanları mevcut sistemlerinizin içinde kurar ve abonelikle yönetiriz. Böylece her gün tekrar eden işler için kapasiteniz olur: faturalar, siparişler, planlama.",
    primaryCta: "Görüşme planlayın",
    whatsappCta: "ya da bize WhatsApp'tan yazın",
    priceNote: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla. Her ay iptal edilebilir.",
    imageAlt: "Çalışan bir AI eleman",
  },
  whatsappText: "Merhaba, işletmem için bir AI eleman hakkında tanışma görüşmesi planlamak istiyorum.",
  work: {
    eyebrow: "Tanıdık geldi mi?",
    title: "Her gün hangi işi yeniden yapıyorsunuz?",
    intro: "Her işletmede aynı işler tekrar tekrar gelir. Zaman alır ama doğru yapılması gerekir.",
    items: [
      { title: "Faturalar", text: "Her faturayı kontrol etmek: fiyat doğru mu, adet doğru mu?" },
      { title: "Siparişler", text: "WhatsApp, e-posta ve telefondan gelen siparişleri sisteme girmek." },
      { title: "Planlama", text: "Her gün teslimatları ya da rotaları yeniden ayarlamak." },
      { title: "Sayım", text: "Stok saymak, sonra her şeyi kasaya işlemek." },
      { title: "Randevular", text: "Randevu almak, ertelemek ve müşterilere hatırlatmak." },
    ],
    outro: "Bu tür işler için bir AI eleman kurarız. Biz hazırlarız, siz onaylarsınız — size müşterileriniz ve işiniz için zaman kalır.",
  },
  team: {
    eyebrow: "AI elemanlar",
    title: "Ekibiniz böyle görünebilir",
    intro: "Katalogdan seçilen hazır roller yok. Her AI elemanı sizin işinize ve çalışma şeklinize göre kurarız. Ortaya çıkabilecek sonuçlardan örnekler:",
    members: [
      { context: "Toptancı", outcome: "Pazartesi 08:00: siparişler onayınız için hazır." },
      { context: "İdari işler", outcome: "Faturalarınız kontrol edilmiş. Siz yalnız dikkat isteyenleri görürsünüz." },
      { context: "Teslimat", outcome: "Yarının rotaları siz eve gitmeden hazır." },
      { context: "Stok", outcome: "Sayım biter bitmez rakamlar kasanızda." },
      { context: "Mağaza", outcome: "Yeni fiyat rafta da hemen doğru." },
    ],
    noteTitle: "Sizin işiniz mi? Elemanını biz kurarız.",
    note: "Sürekli tekrar eden başka bir iş mi var? Bize anlatın. Şu an nasıl yaptığınıza bakar, onun için bir AI eleman kurarız.",
  },
  approach: {
    eyebrow: "Sizinle nasıl çalışırız",
    title: "Önce dinleriz. Sonra kurarız.",
    intro: "Her işletme farklı çalışır. Bu yüzden bir paketle değil, sizin işinizle başlarız.",
    steps: [
      { id: "01", title: "Dinleriz", text: "Her gün hangi iş tekrar ediyor? En çok zamanınızı ne alıyor?" },
      { id: "02", title: "Bir iş gününe birlikte bakarız", text: "Sıradan bir gününüzü birlikte geçeriz: iş nasıl geliyor, siz şu an nasıl yapıyorsunuz." },
      { id: "03", title: "Sizin sürecinize göre kurarız", text: "AI eleman sizin çalışma şeklinizi izler, zaten kullandığınız sistemlerde." },
      { id: "04", title: "Karar sizde kalır", text: "Onayınız olmadan hiçbir şey dışarı çıkmaz. Neyi kendisinin tamamlayacağına siz karar verirsiniz." },
    ],
    footnote: "Neyi kuracağımız sizin sürecinize bağlıdır. Bu yüzden her zaman önce sizinle konuşuruz.",
  },
  how: {
    eyebrow: "Görüşmeden aboneliğe",
    title: "Dört adımda kurulum",
    intro: "Büyük bir proje yok. Önce ne kazandırdığını görürsünüz, sonra karar verirsiniz.",
    steps: [
      { id: "01", title: "Tanışma", text: "Görüşme planlarsınız ya da WhatsApp'tan yazarsınız. Soruyoruz: her gün en çok hangi iş zamanınızı alıyor?" },
      { id: "02", title: "Size özel öneri", text: "İş gününüze bakarak bir AI elemanın sizin için neyi hazırlayabileceğini gösteririz." },
      { id: "03", title: "Deneme ayı €69", text: "Bir ay sizin sürecinizde çalışır. Siz onaylarsınız. Ay sonunda bir özet alırsınız." },
      { id: "04", title: "Abonelik", text: "Memnun musunuz? Yönetimini biz sürdürür, işiniz değiştikçe ayarlarız. Aylık €249'dan başlayan fiyatlarla, her ay iptal edilebilir." },
    ],
  },
  control: {
    eyebrow: "Kontrol sizde",
    title: "Önce her şeyi siz onaylarsınız",
    intro: "Yeni bir eleman önce güveninizi kazanmalı. AI eleman da öyle.",
    items: [
      { title: "Önce onay", text: "Başta her şeyi size sorar. Siz uygun gördükçe daha fazlasını kendisi yapar." },
      { title: "Emin değilse durur", text: "Bir şey tutmuyorsa ya da emin değilse durur ve size veya çalışanınıza sorar." },
      { title: "Neye erişeceğine siz karar verirsiniz", text: "Yalnızca sizin verdiğiniz erişimle çalışır. Bunu her zaman değiştirebilir ya da durdurabilirsiniz." },
      { title: "Veriniz sizindir", text: "Verilerinizi yalnızca sizin işiniz için kullanırız ve AVG'ye (GDPR) uygun davranırız." },
    ],
  },
  pricing: {
    eyebrow: "Bir AI eleman ne kadar?",
    title: "Size özel, net bir aylık fiyatla",
    headline: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla.",
    terms: "Sürecinize ve iş hacminize göre belirlenir. Her ay iptal edilebilir. Fiyatlar KDV (btw) hariçtir.",
    trial: {
      label: "Deneme ayı",
      price: "€69",
      points: ["İşinizden tek bir göreve göre kurulur", "Sizin sürecinizde, gerçek verinizle çalışır", "Kurulum ücreti yok", "Ne yaptığının özeti"],
    },
    detailsToggle: "Nasıl büyüyebilir (fikir vermesi için)",
    tiers: [
      {
        name: "Tek görev",
        volume: "Tekrar eden tek bir iş, sizin sürecinize göre kurulur",
        points: ["Her gün yapılır", "İstediğiniz yerde onay sizde"],
      },
      {
        name: "Birkaç görev",
        volume: "İşletmenizde birbirine bağlı birkaç iş",
        points: ["Öncelikli destek", "Her ay birlikte iyileştirme"],
      },
      {
        name: "Tüm departman",
        volume: "Birden çok süreç · birlikte çalışılır",
        points: ["İşletmenize göre kurulur", "Sabit irtibat kişisi"],
      },
    ],
    footnote:
      "Her işletme farklı: 10 arabalı bir galerinin işi 30 arabalı olanınkiyle aynı değil. Bu yüzden fiyatı tanışma görüşmesinde, sizin işinize göre birlikte belirleriz. Sisteminize derin bir bağlantı gerekirse bir kerelik ek ücret olabilir. Bunu her zaman önceden öğrenirsiniz.",
  },
  references: {
    eyebrow: "Referanslar",
    title: "Biz de AI elemanlarla çalışıyoruz",
    text: "Kendi şirketimizde her gün AI elemanlar kullanıyoruz. Öncesinde Hollanda ve Türkiye'deki işletmeler için yazılım geliştirdik.",
    stats: [
      { value: "50+", label: "Tamamlanan proje" },
      { value: "15+", label: "Yıllık deneyim" },
      { value: "3", label: "Dil: TR · NL · EN" },
    ],
    previousTitle: "Daha önce geliştirdiklerimiz",
  },
  sectors: {
    eyebrow: "Sektörünüzü seçin",
    title: "Hangi sektördesiniz?",
    intro: "Tekrar eden işler her sektörde var. En iyi bildiğimiz sektörle başlıyoruz.",
    first: {
      name: "Market, toptancı ve gıda",
      text: "En iyi tanıdığımız iş gıda: siparişten faturaya, raf etiketine kadar.",
      cta: "Gıda için sorun",
      whatsappText: "Merhaba, gıda sektöründe (market/toptancı) işletmem var, AI eleman hakkında bilgi almak istiyorum.",
    },
    onRequest: "Talep üzerine",
    others: [
      { name: "Muhasebe ve idari işler", whatsappText: "Merhaba, muhasebe/idari işler alanında çalışıyorum, AI eleman hakkında bilgi almak istiyorum." },
      { name: "Emlak", whatsappText: "Merhaba, emlak sektöründe çalışıyorum, AI eleman hakkında bilgi almak istiyorum." },
      { name: "Restoran ve kafe", whatsappText: "Merhaba, restoran/kafe işletiyorum, AI eleman hakkında bilgi almak istiyorum." },
      { name: "Diğer sektör", whatsappText: "Merhaba, işletmem için AI eleman hakkında bilgi almak istiyorum." },
    ],
    otherCta: "Bize sorun",
  },
  faq: {
    eyebrow: "Sık sorulan sorular",
    title: "Bilmeniz gerekenler",
    items: [
      {
        q: "Bir AI eleman ne kadar?",
        a: "İlk ay €69. Sonrası iş miktarına göre aylık €249'dan başlar. Her ay iptal edebilirsiniz. Tüm fiyatlar KDV (btw) hariçtir.",
      },
      {
        q: "Bu, personelin yerine mi geçiyor?",
        a: "Hayır. Personel sağlamıyor, kimseyi geçici olarak çalıştırmıyoruz. Tekrar eden işi mevcut sistemlerinizde hazırlayan bir yazılım kuruyoruz. Onayı ve kararı siz ve çalışanlarınız verirsiniz.",
      },
      {
        q: "Yeni bir program öğrenmem gerekiyor mu?",
        a: "Hayır. Eleman zaten kullandığınız sistemlerde çalışır: kasanız, e-postanız ya da WhatsApp.",
      },
      {
        q: "Ya hata yaparsa?",
        a: "Başta her şeyi siz onaylarsınız. Emin değilse size sorar. Ona güvendikçe daha fazlasını kendisi yapar.",
      },
      {
        q: "Ne kadar sürede başlar?",
        a: "Sistemlerinize bağlı. Tanışma görüşmesinde neyin gerektiğine bakar, ne kadar süreceğini dürüstçe söyleriz.",
      },
      {
        q: "Verilerime ne olur?",
        a: "Veriniz sizindir. Eleman yalnızca sizin verdiğiniz bilgiyi görür ve AVG'ye (GDPR) uygun davranırız.",
      },
      {
        q: "Sizinle hangi dilde konuşabilirim?",
        a: "Türkçe, Felemenkçe ya da İngilizce.",
      },
    ],
  },
  closing: {
    title: "Sizde her gün hangi iş tekrar ediyor?",
    text: "Bir görüşme planlayın ya da bize WhatsApp'tan yazın. Birlikte düşünelim ve bir AI elemanın işletmeniz için neler yapabileceğini gösterelim.",
  },
  cta: {
    title: "Aramayı ya da e-postayı mı tercih edersiniz?",
    text: "O da olur. Tüm bilgilerimiz aşağıda.",
    button: "İletişim",
  },
};

const en: HomeAiDictionary = {
  hero: {
    badge: "Your AI implementation partner",
    title: "We prepare. You approve.",
    subtitle:
      "We set up AI employees inside your existing systems and manage them on a subscription basis. That gives you capacity for the work that comes back every day: invoices, orders, planning.",
    primaryCta: "Plan a call",
    whatsappCta: "or send us a WhatsApp",
    priceNote: "First month €69 — then from €249/mo. Cancel monthly.",
    imageAlt: "AI employee at work",
  },
  whatsappText: "Hi, I'd like to plan an intro call about an AI employee for my business.",
  work: {
    eyebrow: "Sound familiar?",
    title: "What work do you do again every day?",
    intro: "Every business has work that keeps coming back. It takes time, but it has to be done right.",
    items: [
      { title: "Invoices", text: "Checking every invoice: is the price right, is the quantity right?" },
      { title: "Orders", text: "Typing orders from WhatsApp, email and phone into your system." },
      { title: "Planning", text: "Working out deliveries or routes again every day." },
      { title: "Counting", text: "Counting stock and then updating everything in the till." },
      { title: "Appointments", text: "Booking, moving and reminding customers of appointments." },
    ],
    outro: "For this kind of work we set up an AI employee. We prepare, you approve — and you get time back for your customers and your business.",
  },
  team: {
    eyebrow: "AI employees",
    title: "This is what your team could look like",
    intro: "No ready-made roles from a catalogue. We set up every AI employee around your work and the way you work. What that can bring, for example:",
    members: [
      { context: "Wholesale", outcome: "Monday 8 am: the orders are ready for your approval." },
      { context: "Admin", outcome: "Your invoices are checked. You only see what needs attention." },
      { context: "Delivery", outcome: "Tomorrow's routes are ready before you go home." },
      { context: "Stock", outcome: "Once the count is done, the numbers are already in your till." },
      { context: "Store", outcome: "A new price is right on the shelf straight away." },
    ],
    noteTitle: "Your work? We build the colleague.",
    note: "Other work that keeps coming back? Tell us. We look at how you do it now and set up an AI employee for it.",
  },
  approach: {
    eyebrow: "How we work with you",
    title: "First we listen. Then we build.",
    intro: "Every business works differently. That's why we don't start with a package, but with your work.",
    steps: [
      { id: "01", title: "We listen", text: "What work comes back every day? And what takes up most of your time?" },
      { id: "02", title: "We look at a working day together", text: "We walk through a normal day with you: how work comes in and how you handle it now." },
      { id: "03", title: "We set it up around your process", text: "The AI employee follows the way you work, in the systems you already have." },
      { id: "04", title: "You keep the decision", text: "Nothing goes out without your approval. You decide what it may finish on its own." },
    ],
    footnote: "What we set up depends on your process. That's why we always discuss it with you first.",
  },
  how: {
    eyebrow: "From call to subscription",
    title: "Set up in four steps",
    intro: "No big project. You see what it brings first, then you decide.",
    steps: [
      { id: "01", title: "Intro", text: "You plan a call or send us a WhatsApp. We ask: what work takes up your time every day?" },
      { id: "02", title: "Tailored proposal", text: "Based on your working day, we show what an AI employee could prepare for you." },
      { id: "03", title: "Trial month €69", text: "It works with you for a month, in your process. You approve. At the end you get an overview." },
      { id: "04", title: "Subscription", text: "Happy? We keep managing it and adjust it as your work changes. From €249/mo, cancel monthly." },
    ],
  },
  control: {
    eyebrow: "You stay in control",
    title: "First, you approve everything",
    intro: "A new employee has to earn your trust first. An AI employee too.",
    items: [
      { title: "Approve first", text: "At the start they check everything with you. Only when you're happy do they do more on their own." },
      { title: "In doubt? It stops", text: "Something doesn't add up or it's not sure? It stops and asks you or your colleague." },
      { title: "You decide what they can do", text: "They only work with the access you give them. You can change or stop that any time." },
      { title: "Your data stays yours", text: "We only use your data for your work and handle it in line with the GDPR." },
    ],
  },
  pricing: {
    eyebrow: "What does an AI employee cost?",
    title: "Tailored, with a clear monthly price",
    headline: "First month €69 — then from €249/mo.",
    terms: "Matched to your process and workload. Cancel monthly. Excl. VAT.",
    trial: {
      label: "Trial month",
      price: "€69",
      points: ["Set up for one task from your work", "Works in your process, with your real data", "No setup fee", "Overview of what it did"],
    },
    detailsToggle: "How it can grow (indication)",
    tiers: [
      {
        name: "One task",
        volume: "One recurring task, set up around your process",
        points: ["Done every day", "You approve where you want"],
      },
      {
        name: "Several tasks",
        volume: "A few tasks that belong together in your business",
        points: ["Priority support", "Monthly improvements together"],
      },
      {
        name: "Whole department",
        volume: "Several processes · worked out together",
        points: ["Set up around your business", "Fixed contact person"],
      },
    ],
    footnote:
      "Every business is different: a dealer with 10 cars has different work than one with 30. That's why we set the price together in the intro call, based on your work. If a deep connection to your system is needed, a one-off fee may apply. You always hear this in advance.",
  },
  references: {
    eyebrow: "References",
    title: "We work with AI employees ourselves",
    text: "We use AI employees in our own company every day. Before that, we built software for businesses in the Netherlands and Turkey.",
    stats: [
      { value: "50+", label: "Projects delivered" },
      { value: "15+", label: "Years of experience" },
      { value: "3", label: "Languages: NL · TR · EN" },
    ],
    previousTitle: "Previously built by us",
  },
  sectors: {
    eyebrow: "Choose your sector",
    title: "Where do you work?",
    intro: "Repetitive work exists in every sector. We start with the sector we know best.",
    first: {
      name: "Supermarket, wholesale & food",
      text: "Food is the work we know best: from orders to invoices and shelf labels.",
      cta: "Ask about food",
      whatsappText: "Hi, I run a food business (supermarket/wholesale) and would like to know more about an AI employee.",
    },
    onRequest: "On request",
    others: [
      { name: "Accounting & admin", whatsappText: "Hi, I work in accounting/admin and would like to know more about an AI employee." },
      { name: "Real estate", whatsappText: "Hi, I work in real estate and would like to know more about an AI employee." },
      { name: "Hospitality", whatsappText: "Hi, I run a restaurant/café and would like to know more about an AI employee." },
      { name: "Other sector", whatsappText: "Hi, I'd like to know more about an AI employee for my business." },
    ],
    otherCta: "Ask us",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Good to know",
    items: [
      {
        q: "What does an AI employee cost?",
        a: "The first month costs €69. After that it's from €249 per month, depending on how much work there is. You can cancel every month. All prices are excl. VAT.",
      },
      {
        q: "Is this a replacement for staff?",
        a: "No. We don't supply staff or second anyone. We set up software that prepares recurring work in your existing systems. You and your people approve and decide.",
      },
      {
        q: "Do I need to learn new software?",
        a: "No. The employee works in the systems you already use, like your till, email or WhatsApp.",
      },
      {
        q: "What if it makes a mistake?",
        a: "At the start you approve everything. If in doubt, it asks you. Only once you trust it does it do more on its own.",
      },
      {
        q: "How fast can it start?",
        a: "That depends on your systems. In the intro call we look at what's needed and tell you honestly how long it takes.",
      },
      {
        q: "What happens to my data?",
        a: "Your data stays yours. The employee only sees what you give it, and we handle it in line with the GDPR.",
      },
      {
        q: "Which languages do you speak?",
        a: "Dutch, Turkish and English.",
      },
    ],
  },
  closing: {
    title: "What work comes back every day for you?",
    text: "Plan a call or send us a WhatsApp. We'll think along and show you what an AI employee can do for your business.",
  },
  cta: {
    title: "Rather call or email?",
    text: "That works too. You'll find all our details below.",
    button: "Contact",
  },
};

const dictionaries: Record<Locale, HomeAiDictionary> = { nl, tr, en };

export function getHomeAiDictionary(locale: Locale): HomeAiDictionary {
  return dictionaries[locale] ?? nl;
}

export function homeWhatsAppHref(text: string): string {
  return `https://wa.me/${HOME_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
