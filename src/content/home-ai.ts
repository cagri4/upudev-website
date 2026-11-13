import type { Locale } from "@/lib/i18n";

/**
 * Ana sayfa v2 — "het uitzendbureau voor AI-medewerkers" (13 Kas 2026).
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
    whatsappCta: string;
    teamCta: string;
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
    labels: { does: string; connects: string; asks: string };
    members: { title: string; role: string; does: string; connects: string; asks: string }[];
    note: string;
  };
  /** 'Ziet. Denkt. Doet.' — AI'ın iç çalışması (12 Kas içeriği). 'how' = müşteri süreci, ayrı. */
  think: { eyebrow: string; title: string; intro: string; steps: Step[]; footnote: string };
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
    cta: string;
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
  tech: { badge: string; title: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  closing: { title: string; text: string; cta: string };
  cta: { title: string; text: string; button: string };
};

const nl: HomeAiDictionary = {
  hero: {
    badge: "Het uitzendbureau voor AI-medewerkers",
    title: "Huur een medewerker. Maar dan AI.",
    subtitle:
      "Wij leveren AI-medewerkers die het werk overnemen dat elke dag terugkomt: facturen, orders, planning. Ze werken naast jouw team, in de systemen die je al hebt. Jij huurt ze per maand, net als een uitzendkracht.",
    whatsappCta: "Plan een kennismaking",
    teamCta: "Bekijk het team",
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
    outro: "Dit soort werk neemt een AI-medewerker van je over. Jij houdt tijd over voor je klanten en je zaak.",
  },
  team: {
    eyebrow: "Ons team",
    title: "Kies je medewerker",
    intro: "Elke AI-medewerker heeft één vak. Hij doet dat werk elke dag, ook als het druk is.",
    labels: { does: "Wat hij doet", connects: "Werkt met", asks: "Vraagt jou als" },
    members: [
      {
        title: "Factuurcontroleur",
        role: "Administratie",
        does: "Leest elke inkoopfactuur en vergelijkt die met je vorige prijzen. Hij ziet prijsstijgingen en fouten.",
        connects: "Je mail, pdf-facturen, WhatsApp en je kassa- of boekhoudsysteem.",
        asks: "Een prijs ineens hoger is of een factuur niet klopt.",
      },
      {
        title: "Orderverwerker",
        role: "Verkoop",
        does: "Leest bestellingen uit WhatsApp, mail en telefoon. Hij zet ze in je systeem en stuurt een bevestiging.",
        connects: "WhatsApp, mail en je order- of ERP-systeem.",
        asks: "Een product of klant niet duidelijk is.",
      },
      {
        title: "Planner",
        role: "Levering",
        does: "Maakt elke dag de ritten voor je leveringen. Zo min mogelijk kilometers, koelwaren eerst.",
        connects: "Je orders, je adressen en je wagens.",
        asks: "Een rit niet past of een levering haast heeft.",
      },
      {
        title: "Teller",
        role: "Voorraad",
        does: "Helpt bij het tellen van je voorraad en zet de aantallen direct in je kassasysteem.",
        connects: "Je kassasysteem (POS).",
        asks: "Een telling veel afwijkt van wat er zou moeten zijn.",
      },
      {
        title: "Etiketbeheerder",
        role: "Winkel",
        does: "Houdt je elektronische schaplabels gelijk met je kassaprijzen. Een nieuwe prijs staat meteen goed in het schap.",
        connects: "Je kassasysteem en je elektronische labels (ESL).",
        asks: "Een prijswijziging groot is of een label niet reageert.",
      },
    ],
    note: "Ander werk dat steeds terugkomt? Vertel het ons. We kijken samen welke medewerker past.",
  },
  think: {
    eyebrow: "Hoe een AI-medewerker werkt",
    title: "Ziet. Denkt. Doet.",
    intro: "Elke AI-medewerker werkt op dezelfde manier — net als een goede collega.",
    steps: [
      {
        id: "01",
        title: "Ziet",
        text: "Hij merkt op wat er binnenkomt: een bericht, een factuur, een bestelling, een cijfer dat afwijkt.",
      },
      {
        id: "02",
        title: "Denkt",
        text: "Hij kent jouw zaak: je prijzen, je klanten, je afspraken. Daarmee weet hij wat er moet gebeuren.",
      },
      {
        id: "03",
        title: "Doet",
        text: "Hij voert het uit — verwerken, beantwoorden, herinneren, plannen — en houdt jou op de hoogte.",
      },
    ],
    footnote: "Het scherm waar je meekijkt is geen extra werk: het is de plek waar je ziet wat je medewerker gedaan heeft.",
  },
  how: {
    eyebrow: "Zo werkt het",
    title: "In vier stappen een medewerker in dienst",
    intro: "Geen groot project. Je ziet eerst wat hij doet, daarna beslis je.",
    steps: [
      { id: "01", title: "Kennismaking", text: "Je stuurt ons een WhatsApp. We vragen: welk werk kost jou elke dag tijd?" },
      { id: "02", title: "Demo met jouw data", text: "Je ziet de medewerker werken op jouw eigen facturen of orders." },
      { id: "03", title: "Proefmaand €69", text: "Hij werkt een maand mee. Jij keurt goed. Aan het eind krijg je een overzicht van wat hij deed." },
      { id: "04", title: "In dienst", text: "Tevreden? Dan blijft hij. Vanaf €249 p/m, maandelijks opzegbaar." },
    ],
  },
  control: {
    eyebrow: "Jij houdt de controle",
    title: "Eerst keur jij alles goed",
    intro: "Een nieuwe medewerker moet eerst je vertrouwen verdienen. Een AI-medewerker ook.",
    items: [
      { title: "Eerst goedkeuren", text: "In het begin legt hij alles aan jou voor. Pas als jij het goed vindt, doet hij meer zelf." },
      { title: "Twijfel? Hij vraagt het", text: "Klopt iets niet of weet hij het niet zeker? Dan stuurt hij jou of je collega een bericht." },
      { title: "Jij bepaalt wat hij mag", text: "Hij werkt alleen met de toegang die jij hem geeft. Je kunt dat altijd aanpassen of stoppen." },
      { title: "Jouw data blijft van jou", text: "We gebruiken je gegevens alleen voor jouw werk en gaan ermee om volgens de AVG." },
    ],
  },
  pricing: {
    eyebrow: "Wat kost een AI-medewerker?",
    title: "Duidelijke prijzen, per maand",
    headline: "Eerste maand €69 — daarna vanaf €249 p/m.",
    terms: "Afgestemd op jouw werkvolume. Maandelijks opzegbaar. Excl. btw.",
    trial: {
      label: "Proefmaand",
      price: "€69",
      points: ["1 medewerker, 1 taak", "Werkt met jouw echte data", "Geen opstartkosten", "Overzicht van wat hij deed"],
    },
    detailsToggle: "Welke pakketten zijn er? (indicatie)",
    tiers: [
      {
        name: "1 Medewerker",
        volume: "1 medewerker · 1 koppeling · ca. 300 taken per maand",
        points: ["Eén vak, elke dag gedaan", "Jij keurt goed waar je wilt"],
      },
      {
        name: "Team",
        volume: "3 medewerkers · bijvoorbeeld facturen, orders en planning",
        points: ["Voorrang bij support", "Elke maand samen verbeteren"],
      },
      {
        name: "Afdeling",
        volume: "5 of meer medewerkers · op maat",
        points: ["Ingericht op jouw bedrijf", "Vaste contactpersoon"],
      },
    ],
    footnote:
      "Elke zaak is anders: een garage met 10 auto's heeft ander werk dan een met 30. Daarom bepalen we de prijs samen in het kennismakingsgesprek, op basis van jouw werk. Is een diepe koppeling met je systeem nodig, dan kan daar eenmalig een bedrag bij komen. Dat hoor je altijd vooraf.",
    cta: "Plan een gesprek",
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
      text: "Facturen, orders, ritten, tellen en schaplabels. Hier werken onze eerste medewerkers.",
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
  tech: { badge: "Technologie", title: "Gebouwd op betrouwbare technologie" },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Goed om te weten",
    items: [
      {
        q: "Wat kost een AI-medewerker?",
        a: "De eerste maand kost €69. Daarna betaal je vanaf €249 per maand, afhankelijk van hoeveel werk er is. Je kunt elke maand opzeggen. Alle prijzen zijn excl. btw.",
      },
      {
        q: "Neemt hij de baan van mijn personeel over?",
        a: "Nee. Hij werkt naast je team en neemt het saaie, herhalende werk over. Zo houden jij en je mensen tijd over voor klanten.",
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
    title: "Welk werk mag hij van je overnemen?",
    text: "Stuur ons een WhatsApp. We denken mee en laten je zien wat een AI-medewerker voor jouw zaak kan doen.",
    cta: "Plan een kennismaking",
  },
  cta: {
    title: "Liever bellen of mailen?",
    text: "Dat kan ook. Je vindt hieronder al onze gegevens.",
    button: "Contact",
  },
};

const tr: HomeAiDictionary = {
  hero: {
    badge: "AI elemanlar için iş ajansı",
    title: "Bir eleman tutun. Ama AI olsun.",
    subtitle:
      "Her gün tekrar eden işleri devralan AI elemanlar sağlıyoruz: faturalar, siparişler, planlama. Ekibinizin yanında, zaten kullandığınız sistemlerde çalışırlar. Onları aylık tutarsınız, tıpkı geçici bir eleman gibi.",
    whatsappCta: "Tanışma görüşmesi planlayın",
    teamCta: "Ekibi görün",
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
    outro: "Bu tür işleri bir AI eleman sizden devralır. Size müşterileriniz ve işiniz için zaman kalır.",
  },
  team: {
    eyebrow: "Ekibimiz",
    title: "Elemanınızı seçin",
    intro: "Her AI elemanın tek bir uzmanlığı var. O işi her gün yapar, yoğun günlerde de.",
    labels: { does: "Ne yapar", connects: "Neyle çalışır", asks: "Size ne zaman sorar" },
    members: [
      {
        title: "Fatura Kontrolcüsü",
        role: "İdari işler",
        does: "Gelen her alış faturasını okur ve önceki fiyatlarla karşılaştırır. Zamları ve hataları yakalar.",
        connects: "E-postanız, PDF faturalar, WhatsApp ve kasa ya da muhasebe sisteminiz.",
        asks: "Bir fiyat birden yükseldiğinde ya da fatura tutmadığında.",
      },
      {
        title: "Sipariş Elemanı",
        role: "Satış",
        does: "WhatsApp, e-posta ve telefondan gelen siparişleri okur, sisteme girer ve onay gönderir.",
        connects: "WhatsApp, e-posta ve sipariş ya da ERP sisteminiz.",
        asks: "Bir ürün ya da müşteri net olmadığında.",
      },
      {
        title: "Planlamacı",
        role: "Teslimat",
        does: "Her gün teslimat rotalarını kurar. En az kilometre, soğuk ürünler önce.",
        connects: "Siparişleriniz, adresleriniz ve araçlarınız.",
        asks: "Bir rota sığmadığında ya da teslimat acil olduğunda.",
      },
      {
        title: "Sayım Elemanı",
        role: "Stok",
        does: "Stok sayımına yardım eder ve sayıları hemen kasa sisteminize işler.",
        connects: "Kasa sisteminiz (POS).",
        asks: "Sayım olması gerekenden çok farklı çıktığında.",
      },
      {
        title: "Etiket Sorumlusu",
        role: "Mağaza",
        does: "Elektronik raf etiketlerinizi kasa fiyatlarıyla eşit tutar. Yeni fiyat rafta hemen doğru görünür.",
        connects: "Kasa sisteminiz ve elektronik etiketleriniz (ESL).",
        asks: "Fiyat değişikliği büyük olduğunda ya da bir etiket yanıt vermediğinde.",
      },
    ],
    note: "Sürekli tekrar eden başka bir iş mi var? Bize anlatın, hangi elemanın uyduğuna birlikte bakalım.",
  },
  think: {
    eyebrow: "Bir AI eleman nasıl çalışır",
    title: "Görür. Düşünür. Yapar.",
    intro: "Her AI eleman aynı şekilde çalışır — iyi bir çalışma arkadaşı gibi.",
    steps: [
      {
        id: "01",
        title: "Görür",
        text: "Gelen şeyi fark eder: bir mesaj, bir fatura, bir sipariş, beklenmedik bir rakam.",
      },
      {
        id: "02",
        title: "Düşünür",
        text: "İşinizi bilir: fiyatlarınızı, müşterilerinizi, anlaşmalarınızı. Ne yapılması gerektiğini buradan çıkarır.",
      },
      {
        id: "03",
        title: "Yapar",
        text: "Uygular — işler, yanıtlar, hatırlatır, planlar — ve sizi bilgilendirir.",
      },
    ],
    footnote: "Takip ettiğiniz ekran ek bir yük değil: elemanınızın ne yaptığını gördüğünüz yer.",
  },
  how: {
    eyebrow: "Nasıl çalışır",
    title: "Dört adımda işe başlayan bir eleman",
    intro: "Büyük bir proje yok. Önce ne yaptığını görürsünüz, sonra karar verirsiniz.",
    steps: [
      { id: "01", title: "Tanışma", text: "Bize WhatsApp'tan yazarsınız. Soruyoruz: her gün en çok hangi iş zamanınızı alıyor?" },
      { id: "02", title: "Kendi verinizle demo", text: "Elemanın kendi faturalarınız ya da siparişleriniz üzerinde çalıştığını görürsünüz." },
      { id: "03", title: "Deneme ayı €69", text: "Bir ay sizinle çalışır. Siz onaylarsınız. Ay sonunda ne yaptığının özetini alırsınız." },
      { id: "04", title: "İşe alım", text: "Memnun musunuz? O zaman kalır. Aylık €249'dan başlayan fiyatlarla, her ay iptal edilebilir." },
    ],
  },
  control: {
    eyebrow: "Kontrol sizde",
    title: "Önce her şeyi siz onaylarsınız",
    intro: "Yeni bir eleman önce güveninizi kazanmalı. AI eleman da öyle.",
    items: [
      { title: "Önce onay", text: "Başta her şeyi size sorar. Siz uygun gördükçe daha fazlasını kendisi yapar." },
      { title: "Emin değilse sorar", text: "Bir şey tutmuyorsa ya da emin değilse size veya çalışanınıza mesaj atar." },
      { title: "Neye erişeceğine siz karar verirsiniz", text: "Yalnızca sizin verdiğiniz erişimle çalışır. Bunu her zaman değiştirebilir ya da durdurabilirsiniz." },
      { title: "Veriniz sizindir", text: "Verilerinizi yalnızca sizin işiniz için kullanırız ve AVG'ye (GDPR) uygun davranırız." },
    ],
  },
  pricing: {
    eyebrow: "Bir AI eleman ne kadar?",
    title: "Net fiyatlar, aylık",
    headline: "İlk ay €69 — sonra aylık €249'dan başlayan fiyatlarla.",
    terms: "İş hacminize göre belirlenir. Her ay iptal edilebilir. Fiyatlar KDV (btw) hariçtir.",
    trial: {
      label: "Deneme ayı",
      price: "€69",
      points: ["1 eleman, 1 iş", "Gerçek verinizle çalışır", "Kurulum ücreti yok", "Ne yaptığının özeti"],
    },
    detailsToggle: "Hangi paketler var? (fikir vermesi için)",
    tiers: [
      {
        name: "1 Eleman",
        volume: "1 eleman · 1 bağlantı · ayda yaklaşık 300 iş",
        points: ["Tek uzmanlık, her gün", "İstediğiniz yerde onay sizde"],
      },
      {
        name: "Ekip",
        volume: "3 eleman · örneğin fatura, sipariş ve planlama",
        points: ["Öncelikli destek", "Her ay birlikte iyileştirme"],
      },
      {
        name: "Departman",
        volume: "5 ve üzeri eleman · size özel",
        points: ["İşletmenize göre kurulur", "Sabit irtibat kişisi"],
      },
    ],
    footnote:
      "Her işletme farklı: 10 arabalı bir galerinin işi 30 arabalı olanınkiyle aynı değil. Bu yüzden fiyatı tanışma görüşmesinde, sizin işinize göre birlikte belirleriz. Sisteminize derin bir bağlantı gerekirse bir kerelik ek ücret olabilir. Bunu her zaman önceden öğrenirsiniz.",
    cta: "Görüşme planlayın",
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
      text: "Faturalar, siparişler, rotalar, sayım ve raf etiketleri. İlk elemanlarımız burada çalışıyor.",
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
  tech: { badge: "Teknoloji", title: "Güvenilir teknoloji üzerine kurulu" },
  faq: {
    eyebrow: "Sık sorulan sorular",
    title: "Bilmeniz gerekenler",
    items: [
      {
        q: "Bir AI eleman ne kadar?",
        a: "İlk ay €69. Sonrası iş miktarına göre aylık €249'dan başlar. Her ay iptal edebilirsiniz. Tüm fiyatlar KDV (btw) hariçtir.",
      },
      {
        q: "Çalışanlarımın işini mi alacak?",
        a: "Hayır. Ekibinizin yanında çalışır ve sıkıcı, tekrar eden işleri devralır. Size ve çalışanlarınıza müşteriler için zaman kalır.",
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
    title: "Hangi işi sizden devralsın?",
    text: "Bize WhatsApp'tan yazın. Birlikte düşünelim ve bir AI elemanın işletmeniz için neler yapabileceğini gösterelim.",
    cta: "Tanışma görüşmesi planlayın",
  },
  cta: {
    title: "Aramayı ya da e-postayı mı tercih edersiniz?",
    text: "O da olur. Tüm bilgilerimiz aşağıda.",
    button: "İletişim",
  },
};

const en: HomeAiDictionary = {
  hero: {
    badge: "The staffing agency for AI employees",
    title: "Hire an employee. But make it AI.",
    subtitle:
      "We supply AI employees that take over the work that comes back every day: invoices, orders, planning. They work alongside your team, in the systems you already use. You hire them per month, like a temp.",
    whatsappCta: "Plan an intro call",
    teamCta: "Meet the team",
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
    outro: "An AI employee takes this kind of work off your hands. You get time back for your customers and your business.",
  },
  team: {
    eyebrow: "Our team",
    title: "Choose your employee",
    intro: "Each AI employee has one job. They do it every day, also when it's busy.",
    labels: { does: "What they do", connects: "Works with", asks: "Asks you when" },
    members: [
      {
        title: "Invoice checker",
        role: "Admin",
        does: "Reads every purchase invoice and compares it with your previous prices. Spots price rises and mistakes.",
        connects: "Your email, PDF invoices, WhatsApp and your till or accounting system.",
        asks: "A price suddenly goes up or an invoice doesn't add up.",
      },
      {
        title: "Order processor",
        role: "Sales",
        does: "Reads orders from WhatsApp, email and phone, enters them in your system and sends a confirmation.",
        connects: "WhatsApp, email and your order or ERP system.",
        asks: "A product or customer isn't clear.",
      },
      {
        title: "Planner",
        role: "Delivery",
        does: "Plans your delivery routes every day. As few kilometres as possible, chilled goods first.",
        connects: "Your orders, addresses and vehicles.",
        asks: "A route doesn't fit or a delivery is urgent.",
      },
      {
        title: "Counter",
        role: "Stock",
        does: "Helps count your stock and puts the numbers straight into your till system.",
        connects: "Your till system (POS).",
        asks: "A count is far off from what it should be.",
      },
      {
        title: "Label manager",
        role: "Store",
        does: "Keeps your electronic shelf labels in line with your till prices. A new price is right on the shelf at once.",
        connects: "Your till system and electronic labels (ESL).",
        asks: "A price change is large or a label doesn't respond.",
      },
    ],
    note: "Other work that keeps coming back? Tell us. We'll look together at which employee fits.",
  },
  think: {
    eyebrow: "How an AI employee works",
    title: "Sees. Thinks. Does.",
    intro: "Every AI employee works the same way — like a good colleague.",
    steps: [
      { id: "01", title: "Sees", text: "It notices what comes in: a message, an invoice, an order, a number that's off." },
      { id: "02", title: "Thinks", text: "It knows your business: your prices, your customers, your agreements. That tells it what needs to happen." },
      { id: "03", title: "Does", text: "It gets it done — processing, replying, reminding, planning — and keeps you posted." },
    ],
    footnote: "The screen you look at isn't extra work: it's where you see what your employee has done.",
  },
  how: {
    eyebrow: "How it works",
    title: "An employee on board in four steps",
    intro: "No big project. You see what they do first, then you decide.",
    steps: [
      { id: "01", title: "Intro", text: "You send us a WhatsApp. We ask: what work takes up your time every day?" },
      { id: "02", title: "Demo with your data", text: "You see the employee work on your own invoices or orders." },
      { id: "03", title: "Trial month €69", text: "They work with you for a month. You approve. At the end you get an overview of what they did." },
      { id: "04", title: "Hired", text: "Happy? Then they stay. From €249/mo, cancel monthly." },
    ],
  },
  control: {
    eyebrow: "You stay in control",
    title: "First, you approve everything",
    intro: "A new employee has to earn your trust first. An AI employee too.",
    items: [
      { title: "Approve first", text: "At the start they check everything with you. Only when you're happy do they do more on their own." },
      { title: "In doubt? They ask", text: "Something doesn't add up or they're not sure? They send you or your colleague a message." },
      { title: "You decide what they can do", text: "They only work with the access you give them. You can change or stop that any time." },
      { title: "Your data stays yours", text: "We only use your data for your work and handle it in line with the GDPR." },
    ],
  },
  pricing: {
    eyebrow: "What does an AI employee cost?",
    title: "Clear prices, per month",
    headline: "First month €69 — then from €249/mo.",
    terms: "Matched to your workload. Cancel monthly. Excl. VAT.",
    trial: {
      label: "Trial month",
      price: "€69",
      points: ["1 employee, 1 task", "Works with your real data", "No setup fee", "Overview of what they did"],
    },
    detailsToggle: "Which packages are there? (indication)",
    tiers: [
      {
        name: "1 Employee",
        volume: "1 employee · 1 connection · about 300 tasks per month",
        points: ["One job, done every day", "You approve where you want"],
      },
      {
        name: "Team",
        volume: "3 employees · for example invoices, orders and planning",
        points: ["Priority support", "Monthly improvements together"],
      },
      {
        name: "Department",
        volume: "5 or more employees · tailored",
        points: ["Set up around your business", "Fixed contact person"],
      },
    ],
    footnote:
      "Every business is different: a dealer with 10 cars has different work than one with 30. That's why we set the price together in the intro call, based on your work. If a deep connection to your system is needed, a one-off fee may apply. You always hear this in advance.",
    cta: "Plan a call",
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
      text: "Invoices, orders, routes, counting and shelf labels. This is where our first employees work.",
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
  tech: { badge: "Technology", title: "Built on reliable technology" },
  faq: {
    eyebrow: "FAQ",
    title: "Good to know",
    items: [
      {
        q: "What does an AI employee cost?",
        a: "The first month costs €69. After that it's from €249 per month, depending on how much work there is. You can cancel every month. All prices are excl. VAT.",
      },
      {
        q: "Will it take my staff's jobs?",
        a: "No. It works alongside your team and takes over the dull, repetitive work. You and your people get time back for customers.",
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
    title: "What work can they take off your hands?",
    text: "Send us a WhatsApp. We'll think along and show you what an AI employee can do for your business.",
    cta: "Plan an intro call",
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
