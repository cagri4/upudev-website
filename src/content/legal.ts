import type { Locale } from "@/lib/i18n";

export interface LegalPage {
  lastUpdated: string;
}

/* ------------------------------------------------------------------ */
/*  PRIVACY POLICY                                                     */
/* ------------------------------------------------------------------ */

export interface PrivacyContent extends LegalPage {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

const privacyTr: PrivacyContent = {
  lastUpdated: "Son güncelleme: Mart 2026",
  title: "Gizlilik Politikası",
  intro:
    "Bu gizlilik politikası, UPU Dev B.V. tarafından geliştirilen ve işletilen SaaS platformları üzerinden toplanan, işlenen ve saklanan kişisel verilere ilişkin uygulamaları açıklar.",
  sections: [
    {
      heading: "Şirket Bilgileri",
      body: "UPU Dev — Web en Digitale Oplossingen\nAdres: Computerweg 22, 3542 DR Utrecht, Nederland\nE-posta: info@upudev.nl\nKVK: 98902148",
    },
    {
      heading: "Toplanan Veriler",
      body: "Platformlarımız aracılığıyla aşağıdaki veri kategorileri toplanabilir:\n\n• Kişisel bilgiler: isim, e-posta adresi, telefon numarası\n• WhatsApp mesaj içerikleri: bot etkileşimi kapsamında işlenen mesajlar\n• İş verileri: şirket bilgileri, sipariş detayları, stok ve finansal veriler\n• Kullanım verileri: komut logları, aktivite takibi ve oturum bilgileri",
    },
    {
      heading: "Verilerin Saklanması",
      body: "Veriler Supabase altyapısı üzerinde, AB bölgesinde (Londra) saklanmaktadır. Kişisel veriler, hesap aktif olduğu sürece ve hesap silme sonrası 30 gün boyunca muhafaza edilir.",
    },
    {
      heading: "Veri Paylaşımı",
      body: "Kişisel verileriniz üçüncü taraflarla paylaşılmaz. Veriler yalnızca AI işleme amacıyla Anthropic Claude API'ye gönderilir ve bu işlem AB veri koruma standartlarına uygun şekilde gerçekleştirilir.",
    },
    {
      heading: "GDPR Uyumluluğu",
      body: "UPU Dev, bir AB şirketi olarak GDPR (Genel Veri Koruma Yönetmeliği) kapsamındaki tüm yükümlülüklere uygundur. Kullanıcı hakları GDPR Madde 15–20 çerçevesinde korunmaktadır.",
    },
    {
      heading: "Kullanıcı Hakları",
      body: "Kişisel verileriniz üzerinde aşağıdaki haklara sahipsiniz:\n\n• Erişim hakkı: Hangi verilerinizin tutulduğunu öğrenme\n• Düzeltme hakkı: Yanlış veya eksik verilerin düzeltilmesini talep etme\n• Silme hakkı: Verilerinizin silinmesini talep etme\n• Taşınabilirlik hakkı: Verilerinizin aktarılmasını talep etme",
    },
    {
      heading: "Çerezler",
      body: "Platformlarımızda çerezler yalnızca oturum yönetimi amacıyla (Supabase auth) kullanılmaktadır. Pazarlama veya takip amaçlı çerez kullanılmaz.",
    },
    {
      heading: "İletişim",
      body: "Gizlilik politikası ile ilgili sorularınız için info@upudev.nl adresinden bize ulaşabilirsiniz.",
    },
  ],
};

const privacyEn: PrivacyContent = {
  lastUpdated: "Last updated: March 2026",
  title: "Privacy Policy",
  intro:
    "This privacy policy describes the practices regarding the collection, processing, and storage of personal data through SaaS platforms developed and operated by UPU Dev B.V.",
  sections: [
    {
      heading: "Company Information",
      body: "UPU Dev — Web en Digitale Oplossingen\nAddress: Computerweg 22, 3542 DR Utrecht, Netherlands\nEmail: info@upudev.nl\nKVK: 98902148",
    },
    {
      heading: "Data We Collect",
      body: "The following categories of data may be collected through our platforms:\n\n• Personal information: name, email address, phone number\n• WhatsApp message content: messages processed as part of bot interactions\n• Business data: company details, order information, inventory, and financial data\n• Usage data: command logs, activity tracking, and session information",
    },
    {
      heading: "Data Storage",
      body: "Data is stored on Supabase infrastructure in the EU region (London). Personal data is retained for as long as the account is active and for 30 days after account deletion.",
    },
    {
      heading: "Data Sharing",
      body: "Your personal data is not shared with third parties. Data is only sent to the Anthropic Claude API for AI processing, and this is done in compliance with EU data protection standards.",
    },
    {
      heading: "GDPR Compliance",
      body: "As an EU-based company, UPU Dev fully complies with all obligations under the GDPR (General Data Protection Regulation). User rights are protected under GDPR Articles 15–20.",
    },
    {
      heading: "User Rights",
      body: "You have the following rights regarding your personal data:\n\n• Right of access: Learn what data is held about you\n• Right to rectification: Request correction of inaccurate or incomplete data\n• Right to erasure: Request deletion of your data\n• Right to portability: Request transfer of your data",
    },
    {
      heading: "Cookies",
      body: "Our platforms use cookies solely for session management purposes (Supabase auth). No marketing or tracking cookies are used.",
    },
    {
      heading: "Contact",
      body: "For questions regarding this privacy policy, please contact us at info@upudev.nl.",
    },
  ],
};

const privacyNl: PrivacyContent = {
  lastUpdated: "Laatst bijgewerkt: Maart 2026",
  title: "Privacybeleid",
  intro:
    "Dit privacybeleid beschrijft de praktijken met betrekking tot het verzamelen, verwerken en opslaan van persoonsgegevens via SaaS-platforms die zijn ontwikkeld en beheerd door UPU Dev B.V.",
  sections: [
    {
      heading: "Bedrijfsgegevens",
      body: "UPU Dev — Web en Digitale Oplossingen\nAdres: Computerweg 22, 3542 DR Utrecht, Nederland\nE-mail: info@upudev.nl\nKVK: 98902148",
    },
    {
      heading: "Gegevens die wij verzamelen",
      body: "Via onze platforms kunnen de volgende categorieën gegevens worden verzameld:\n\n• Persoonlijke informatie: naam, e-mailadres, telefoonnummer\n• WhatsApp-berichtinhoud: berichten verwerkt in het kader van bot-interacties\n• Bedrijfsgegevens: bedrijfsinformatie, bestellingen, voorraad en financiële gegevens\n• Gebruiksgegevens: commandologs, activiteitenregistratie en sessie-informatie",
    },
    {
      heading: "Gegevensopslag",
      body: "Gegevens worden opgeslagen op Supabase-infrastructuur in de EU-regio (Londen). Persoonsgegevens worden bewaard zolang het account actief is en 30 dagen na het verwijderen van het account.",
    },
    {
      heading: "Gegevens delen",
      body: "Uw persoonsgegevens worden niet gedeeld met derden. Gegevens worden uitsluitend verzonden naar de Anthropic Claude API voor AI-verwerking, in overeenstemming met de EU-normen voor gegevensbescherming.",
    },
    {
      heading: "AVG-naleving",
      body: "Als EU-bedrijf voldoet UPU Dev volledig aan alle verplichtingen onder de AVG (Algemene Verordening Gegevensbescherming). Gebruikersrechten worden beschermd onder AVG-artikelen 15–20.",
    },
    {
      heading: "Gebruikersrechten",
      body: "U heeft de volgende rechten met betrekking tot uw persoonsgegevens:\n\n• Recht op inzage: Inzien welke gegevens over u worden bewaard\n• Recht op rectificatie: Verzoek tot correctie van onjuiste of onvolledige gegevens\n• Recht op verwijdering: Verzoek tot verwijdering van uw gegevens\n• Recht op overdraagbaarheid: Verzoek tot overdracht van uw gegevens",
    },
    {
      heading: "Cookies",
      body: "Onze platforms gebruiken cookies uitsluitend voor sessiebeheer (Supabase auth). Er worden geen marketing- of trackingcookies gebruikt.",
    },
    {
      heading: "Contact",
      body: "Voor vragen over dit privacybeleid kunt u contact met ons opnemen via info@upudev.nl.",
    },
  ],
};

export const privacyContent: Record<Locale, PrivacyContent> = {
  tr: privacyTr,
  en: privacyEn,
  nl: privacyNl,
};

/* ------------------------------------------------------------------ */
/*  TERMS OF SERVICE                                                   */
/* ------------------------------------------------------------------ */

export interface TermsContent extends LegalPage {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

const termsTr: TermsContent = {
  lastUpdated: "Son güncelleme: Mart 2026",
  title: "Kullanım Şartları",
  intro:
    "Bu kullanım şartları, UPU Dev B.V. tarafından sunulan AI destekli iş yönetimi SaaS platformlarının (WhatsApp bot ve web panel) kullanım koşullarını belirler.",
  sections: [
    {
      heading: "Hizmet Tanımı",
      body: "UPU Dev, AI destekli iş yönetimi SaaS platformları sunar. Bu platformlar WhatsApp bot entegrasyonu ve web tabanlı yönetim panellerini kapsar.",
    },
    {
      heading: "Kullanım Şartları",
      body: "Platformlarımızı kullanabilmek için:\n\n• 18 yaş veya üzeri olmanız gerekmektedir\n• Platformu yalnızca yasal iş faaliyetleri için kullanmalısınız\n• Spam, illegal içerik veya kötüye kullanım kesinlikle yasaktır",
    },
    {
      heading: "Hesap Sorumlulukları",
      body: "Kullanıcılar kendi hesaplarından sorumludur. Hesap bilgilerinizin güvenliğini sağlamak ve yetkisiz erişimi önlemek sizin sorumluluğunuzdadır.",
    },
    {
      heading: "Ödeme ve Abonelik",
      body: "• Deneme süresi: 14 gün ücretsiz deneme\n• Abonelik: Aylık abonelik modeli\n• İptal: Kullanıcılar aboneliklerini istedikleri zaman iptal edebilir",
    },
    {
      heading: "Hizmet Seviyesi",
      body: "Platformlarımız \"olduğu gibi\" (as is) sunulmaktadır. %99.9 uptime hedefimiz olmakla birlikte, garanti verilmez. Planlı bakım çalışmaları önceden bildirilir.",
    },
    {
      heading: "Fikri Mülkiyet",
      body: "Platform ve yazılım UPU Dev B.V.'ye aittir. Kullanıcı verileri kullanıcıya aittir ve kullanıcının mülkiyetinde kalır.",
    },
    {
      heading: "Sorumluluk Sınırı",
      body: "UPU Dev'in toplam sorumluluğu, aylık abonelik bedelini aşamaz.",
    },
    {
      heading: "Fesih",
      body: "Her iki taraf, 30 gün önceden yazılı bildirimle sözleşmeyi feshedebilir.",
    },
    {
      heading: "Uygulanacak Hukuk",
      body: "Bu şartlar Hollanda hukukuna tabidir. Uyuşmazlıklar Utrecht mahkemelerinde çözümlenir.",
    },
  ],
};

const termsEn: TermsContent = {
  lastUpdated: "Last updated: March 2026",
  title: "Terms of Service",
  intro:
    "These terms of service govern the use of AI-powered business management SaaS platforms (WhatsApp bot and web panel) provided by UPU Dev B.V.",
  sections: [
    {
      heading: "Service Description",
      body: "UPU Dev provides AI-powered business management SaaS platforms. These platforms include WhatsApp bot integration and web-based management panels.",
    },
    {
      heading: "Usage Requirements",
      body: "To use our platforms:\n\n• You must be 18 years of age or older\n• You must use the platform only for lawful business activities\n• Spam, illegal content, or any form of misuse is strictly prohibited",
    },
    {
      heading: "Account Responsibilities",
      body: "Users are responsible for their own accounts. It is your responsibility to ensure the security of your account information and prevent unauthorized access.",
    },
    {
      heading: "Payment and Subscription",
      body: "• Trial period: 14-day free trial\n• Subscription: Monthly subscription model\n• Cancellation: Users may cancel their subscription at any time",
    },
    {
      heading: "Service Level",
      body: "Our platforms are provided \"as is\". While we target 99.9% uptime, no guarantee is provided. Planned maintenance will be communicated in advance.",
    },
    {
      heading: "Intellectual Property",
      body: "The platform and software are owned by UPU Dev B.V. User data belongs to and remains the property of the user.",
    },
    {
      heading: "Limitation of Liability",
      body: "UPU Dev's total liability shall not exceed the monthly subscription fee.",
    },
    {
      heading: "Termination",
      body: "Either party may terminate the agreement with 30 days written notice.",
    },
    {
      heading: "Governing Law",
      body: "These terms are governed by Dutch law. Disputes shall be resolved in the courts of Utrecht.",
    },
  ],
};

const termsNl: TermsContent = {
  lastUpdated: "Laatst bijgewerkt: Maart 2026",
  title: "Gebruiksvoorwaarden",
  intro:
    "Deze gebruiksvoorwaarden regelen het gebruik van door AI aangedreven SaaS-platforms voor bedrijfsbeheer (WhatsApp-bot en webpaneel) aangeboden door UPU Dev B.V.",
  sections: [
    {
      heading: "Dienstbeschrijving",
      body: "UPU Dev biedt AI-aangedreven SaaS-platforms voor bedrijfsbeheer. Deze platforms omvatten WhatsApp-botintegratie en webgebaseerde beheerpanelen.",
    },
    {
      heading: "Gebruiksvereisten",
      body: "Om onze platforms te gebruiken:\n\n• U dient 18 jaar of ouder te zijn\n• U mag het platform alleen gebruiken voor legitieme zakelijke activiteiten\n• Spam, illegale inhoud of enige vorm van misbruik is strikt verboden",
    },
    {
      heading: "Accountverantwoordelijkheden",
      body: "Gebruikers zijn verantwoordelijk voor hun eigen account. Het is uw verantwoordelijkheid om de veiligheid van uw accountgegevens te waarborgen en ongeautoriseerde toegang te voorkomen.",
    },
    {
      heading: "Betaling en Abonnement",
      body: "• Proefperiode: 14 dagen gratis uitproberen\n• Abonnement: Maandelijks abonnementsmodel\n• Opzegging: Gebruikers kunnen hun abonnement op elk moment opzeggen",
    },
    {
      heading: "Serviceniveau",
      body: "Onze platforms worden aangeboden \"zoals ze zijn\" (as is). Hoewel we streven naar 99,9% uptime, wordt geen garantie geboden. Gepland onderhoud wordt vooraf gecommuniceerd.",
    },
    {
      heading: "Intellectueel Eigendom",
      body: "Het platform en de software zijn eigendom van UPU Dev B.V. Gebruikersgegevens behoren toe aan en blijven eigendom van de gebruiker.",
    },
    {
      heading: "Beperking van Aansprakelijkheid",
      body: "De totale aansprakelijkheid van UPU Dev kan het maandelijkse abonnementsbedrag niet overschrijden.",
    },
    {
      heading: "Beëindiging",
      body: "Beide partijen kunnen de overeenkomst beëindigen met een schriftelijke opzegtermijn van 30 dagen.",
    },
    {
      heading: "Toepasselijk Recht",
      body: "Deze voorwaarden vallen onder het Nederlands recht. Geschillen worden beslecht door de rechtbank in Utrecht.",
    },
  ],
};

export const termsContent: Record<Locale, TermsContent> = {
  tr: termsTr,
  en: termsEn,
  nl: termsNl,
};

/* ------------------------------------------------------------------ */
/*  DATA DELETION                                                      */
/* ------------------------------------------------------------------ */

export interface DataDeletionContent extends LegalPage {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

const dataDeletionTr: DataDeletionContent = {
  lastUpdated: "Son güncelleme: Mart 2026",
  title: "Veri Silme Talimatları",
  intro:
    "Kullanıcılar, platformlarımız üzerindeki kişisel verilerinin silinmesini talep edebilir. Aşağıda veri silme sürecine ilişkin detayları bulabilirsiniz.",
  sections: [
    {
      heading: "Veri Silme Yöntemleri",
      body: "Verilerinizin silinmesini 3 farklı yöntemle talep edebilirsiniz:\n\n1. E-posta: info@upudev.nl adresine \"Data Deletion Request\" konulu bir e-posta gönderin\n2. WhatsApp bot: /hesapsil komutunu kullanın (yakında)\n3. Web panel: Ayarlar → Hesabı Sil menüsünden işlemi başlatın",
    },
    {
      heading: "İşlem Süresi",
      body: "Silme talebiniz alındıktan sonra 30 gün içinde tüm kişisel verileriniz kalıcı olarak silinir.",
    },
    {
      heading: "Silinen Veriler",
      body: "Silme işlemi kapsamında aşağıdaki veriler kalıcı olarak kaldırılır:\n\n• Profil bilgileri\n• Mesaj geçmişi\n• İş verileri\n• Abonelik bilgileri",
    },
    {
      heading: "Silinmeyen Veriler",
      body: "Yasal zorunluluklar gereği aşağıdaki veriler saklanmaya devam eder:\n\n• Anonim kullanım istatistikleri\n• Yasal zorunluluk gereği tutulan fatura kayıtları",
    },
    {
      heading: "İletişim",
      body: "Veri silme ile ilgili sorularınız için info@upudev.nl adresinden bize ulaşabilirsiniz.",
    },
  ],
};

const dataDeletionEn: DataDeletionContent = {
  lastUpdated: "Last updated: March 2026",
  title: "Data Deletion Instructions",
  intro:
    "Users can request the deletion of their personal data from our platforms. Below you will find the details of the data deletion process.",
  sections: [
    {
      heading: "How to Request Data Deletion",
      body: "You can request the deletion of your data through 3 different methods:\n\n1. Email: Send an email to info@upudev.nl with the subject \"Data Deletion Request\"\n2. WhatsApp bot: Use the /deleteaccount command (coming soon)\n3. Web panel: Navigate to Settings → Delete Account",
    },
    {
      heading: "Processing Time",
      body: "All personal data will be permanently deleted within 30 days after receiving your deletion request.",
    },
    {
      heading: "Data That Will Be Deleted",
      body: "The following data will be permanently removed:\n\n• Profile information\n• Message history\n• Business data\n• Subscription information",
    },
    {
      heading: "Data That Will Be Retained",
      body: "The following data will continue to be stored due to legal obligations:\n\n• Anonymous usage statistics\n• Invoice records required by law",
    },
    {
      heading: "Contact",
      body: "For questions regarding data deletion, please contact us at info@upudev.nl.",
    },
  ],
};

const dataDeletionNl: DataDeletionContent = {
  lastUpdated: "Laatst bijgewerkt: Maart 2026",
  title: "Instructies voor Gegevensverwijdering",
  intro:
    "Gebruikers kunnen verzoeken om verwijdering van hun persoonsgegevens van onze platforms. Hieronder vindt u de details van het verwijderingsproces.",
  sections: [
    {
      heading: "Hoe gegevensverwijdering aanvragen",
      body: "U kunt de verwijdering van uw gegevens op 3 manieren aanvragen:\n\n1. E-mail: Stuur een e-mail naar info@upudev.nl met als onderwerp \"Data Deletion Request\"\n2. WhatsApp-bot: Gebruik het commando /accountverwijderen (binnenkort)\n3. Webpaneel: Ga naar Instellingen → Account Verwijderen",
    },
    {
      heading: "Verwerkingstijd",
      body: "Alle persoonsgegevens worden binnen 30 dagen na ontvangst van uw verwijderingsverzoek permanent verwijderd.",
    },
    {
      heading: "Gegevens die worden verwijderd",
      body: "De volgende gegevens worden permanent verwijderd:\n\n• Profielinformatie\n• Berichtengeschiedenis\n• Bedrijfsgegevens\n• Abonnementsgegevens",
    },
    {
      heading: "Gegevens die worden bewaard",
      body: "De volgende gegevens blijven bewaard vanwege wettelijke verplichtingen:\n\n• Anonieme gebruiksstatistieken\n• Wettelijk vereiste factuurgegevens",
    },
    {
      heading: "Contact",
      body: "Voor vragen over gegevensverwijdering kunt u contact met ons opnemen via info@upudev.nl.",
    },
  ],
};

export const dataDeletionContent: Record<Locale, DataDeletionContent> = {
  tr: dataDeletionTr,
  en: dataDeletionEn,
  nl: dataDeletionNl,
};
