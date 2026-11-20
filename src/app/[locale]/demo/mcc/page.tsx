import type { Metadata } from "next";
import { StaticImage } from "@/components/static-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VoicePlayer } from "@/components/demo/voice-player";
import { DemoViewEvent } from "@/components/demo/demo-view-event";
import { DemoTaskForm } from "@/components/demo/demo-task-form";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";
import { COPADAM } from "@/content/ai-team-landing";

/**
 * KİŞİYE ÖZEL DEMO — MCC Agency (NL sosyal medya ajansı), Çağrı 19 Kas 2026.
 * Instagram DM'de link olarak gider: upudev.nl/demo/mcc → /nl/demo/mcc (next.config redirect).
 * noindex/nofollow · sitemap'te ve nav'da YOK · açılış olayı demo_mcc_view (dataLayer; GTM consent mode).
 * Ses: Çağrı'nın klonlanmış sesi (NL, 45 sn) — dosya adı tahmin edilemez.
 * Uydurma rakam/logo/müşteri YOK. Transkript = ses kaydının birebir metni (DEĞİŞTİRME; ses ile aynı olmalı).
 */

const PAGE_PATH = "/nl/demo/mcc";
const AUDIO_SRC = "/media/demo/mcc-1a51a40cfd5575df.mp3";
const AUDIO_SECONDS = 45;
const WA_HREF = `https://wa.me/31611352773?text=${encodeURIComponent("Hoi Çağrı, ik heb je bericht beluisterd. Ik heb een taak in gedachten: ")}`;
const MAIL_HREF = `mailto:info@upudev.nl?subject=${encodeURIComponent("MCC — een taak voor een AI-medewerker")}`;
const CREAM = "bg-[#FBF7EF]";

const TRANSCRIPT = [
  "Hoi! Dank je voor je voicebericht. Eerlijk is eerlijk: mijn Nederlands is nog niet goed genoeg. Ik woon pas sinds december 2024 in Nederland. Daarom heeft mijn AI-assistent dit bericht voor mij in het Nederlands gemaakt, met mijn eigen stem.",
  "En dat is precies wat wij doen: we bouwen AI-medewerkers die terugkerend werk klaarzetten. Social media, content, klantenservice, bijna elk proces in elk bedrijf.",
  "Jullie beschrijven globaal de taak, ik bouw een voorbeeld, en jullie zetten hem in voor jezelf of voor je klanten. Ik factureer aan jullie, volledig op afstand.",
  "Heb je al een taak in gedachten? Stuur me een korte omschrijving, dan maak ik er een voorbeeld van.",
];

const MADE = [
  { title: "Kort stemfragment", text: "Ik heb ongeveer één minuut ingesproken, in mijn eigen stem." },
  { title: "Stem gekloond", text: "Van dat fragment is een digitale versie van mijn stem gemaakt." },
  { title: "AI schrijft en spreekt Nederlands", text: "Mijn AI-assistent schreef het bericht in het Nederlands en sprak het in met mijn stem." },
];

const AGENCY = [
  { title: "Content maken & plannen", text: "Postideeën, captions en een contentplanning per klant klaarzetten. Jullie keuren goed voordat er iets online gaat." },
  { title: "DM's en reacties", text: "Concept-antwoorden op berichten en reacties, in de toon van elk merk. Jullie lezen mee en versturen." },
  { title: "Rapportages", text: "De maandrapportage per klant klaarzetten, zodat jullie alleen nog hoeven na te lopen en te versturen." },
  { title: "Klant-onboarding", text: "Intakevragen, briefing en checklist voor een nieuwe klant klaarzetten, zodat jullie sneller kunnen starten." },
];

const FLOW = [
  { title: "Jullie beschrijven de taak", text: "Globaal is genoeg: wat komt elke week terug, voor welke klanten?" },
  { title: "Ik bouw een voorbeeld", text: "Op jullie eigen manier van werken. Jullie zien wat hij klaarzet voordat jullie iets beslissen." },
  { title: "Jullie zetten hem in", text: "Voor jullie eigen bureau, of onder jullie eigen naam voor je klanten (white-label)." },
  { title: "Ik factureer aan jullie", text: "Eén aanspreekpunt, één factuur. Alles volledig op afstand." },
];

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "nl" }];
}

export const metadata: Metadata = {
  title: "Een bericht voor MCC | UPU Dev",
  description: "Een persoonlijk bericht voor MCC Agency.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: { title: "Een bericht voor MCC", description: "Een persoonlijk bericht, in mijn eigen stem.", url: PAGE_PATH, type: "website" },
};

export default async function DemoMccPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "nl") notFound();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <DemoViewEvent pagePath={PAGE_PATH} />

      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/nl" className="text-xl font-bold tracking-tight text-neutral-900">
            upu<span className="text-[#122d54]">dev</span>
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Voor MCC Agency</span>
        </div>
      </header>

      <main>
        {/* 1. Bericht + speler */}
        <section className={`${CREAM} px-4 pb-10 pt-10 md:px-6 md:pb-14 md:pt-16`}>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-[#122d54] md:text-5xl">
              Hoi MCC <span aria-hidden>👋</span>
            </h1>
            <p className="mt-3 text-lg text-neutral-700 md:text-xl">Een bericht in mijn eigen stem.</p>
            <div className="mt-7">
              <VoicePlayer src={AUDIO_SRC} durationHint={AUDIO_SECONDS} label="Luister naar mijn bericht" pagePath={PAGE_PATH} />
            </div>
            <p className="mt-3 text-sm text-neutral-500">Çağrı · UPU Dev · 45 seconden</p>
          </div>
        </section>

        {/* 2. Transkript */}
        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1D7F75]">Wat ik zeg</p>
            <div className="mt-4 space-y-4 border-l-4 border-[#2AA79A] pl-5 text-lg leading-relaxed text-neutral-800">
              {TRANSCRIPT.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Hoe is dit gemaakt? */}
        <section className={`${CREAM} px-4 py-10 md:px-6 md:py-14`}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#122d54] md:text-3xl">Hoe is dit gemaakt?</h2>
            <ol className="mt-6 grid gap-3 md:grid-cols-3">
              {MADE.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <span className="font-mono text-sm font-bold text-[#1D7F75]">0{i + 1}</span>
                  <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-neutral-600">
              Eerlijk: de Nederlandse tekst en de stem zijn met AI gemaakt. Het aanbod en de inhoud zijn van mij.
            </p>
          </div>
        </section>

        {/* 4. Wat een AI-medewerker voor een bureau kan doen */}
        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#122d54] md:text-3xl">Wat een AI-medewerker voor een bureau kan doen</h2>
            <p className="mt-2 text-neutral-600">Een paar voorbeelden. Wat we bouwen, hangt af van jullie werk.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {AGENCY.map((c) => (
                <li key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-neutral-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Samenwerking */}
        <section className={`${CREAM} px-4 py-10 md:px-6 md:py-14`}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#122d54] md:text-3xl">Zo werken we samen</h2>
            <ol className="mt-6 space-y-3">
              {FLOW.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#122d54] font-mono text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mx-auto mt-8 w-full max-w-[420px]">
              <StaticImage img={COPADAM.team} alt="" sizes="(min-width: 768px) 420px, 80vw" className="h-auto w-full" />
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="px-4 py-10 md:px-6 md:py-14" id="taak">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#122d54] md:text-3xl">Beschrijf je taak</h2>
            <p className="mt-2 text-neutral-600">Een paar zinnen is genoeg. Ik maak er een voorbeeld van.</p>
            <div className="mt-6">
              <DemoTaskForm subject="Demo MCC — taakomschrijving" formLocation="demo_mcc_form" pagePath={PAGE_PATH} />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                href={WA_HREF}
                source="demo-mcc"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold !text-white transition hover:bg-[#20bd5a]"
              >
                Liever via WhatsApp
              </WhatsAppLink>
              <a
                href={MAIL_HREF}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3.5 text-base font-semibold !text-neutral-800 transition hover:border-neutral-500"
              >
                Of mail: info@upudev.nl
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="io-fab-space border-t border-neutral-200 px-4 pb-6 pt-6 text-center text-xs text-neutral-500">
        © 2026 UPU Dev · Utrecht
      </footer>
    </div>
  );
}
