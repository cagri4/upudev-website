"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import type { HowItWorksStep } from "@/content/saas-landing/types";
import { Bubble, Section, Stagger, StaggerItem } from "./primitives";

/**
 * S4 — İmza bölüm: QR → WhatsApp → AI (sticky-scroll).
 *
 * Desktop: sol kolon sticky telefon, scroll ilerledikçe sohbet balonları
 * birikir; sağ kolon adım metinleri aktifleşir. Mobil: sticky yok, sade
 * 3-adım yığını (her adım kendi balonlarıyla). GPU-only; reduced-motion
 * kökteki MotionConfig ile karşılanır.
 */
export function HowItWorks({
  title,
  sub,
  steps,
}: {
  title: string;
  sub: string;
  steps: HowItWorksStep[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // p: 0→1 boyunca adımları eşit dilimlere böl.
    const idx = Math.min(steps.length - 1, Math.floor(p * steps.length + 0.001));
    setActive(idx);
  });

  // Aktif adıma kadar (dahil) tüm balonları biriktir.
  const shownBubbles = steps.slice(0, active + 1).flatMap((s) => s.bubbles);

  return (
    <Section id="nasil-calisir" className="border-y border-neutral-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">{sub}</p>
        </div>

        {/* ---- Desktop: sticky-scroll ---- */}
        <div ref={trackRef} className="relative mt-12 hidden md:block" style={{ height: `${steps.length * 90}vh` }}>
          <div className="sticky top-0 flex h-screen items-center">
            <div className="grid w-full grid-cols-2 gap-12">
              {/* Sol: sticky telefon, biriken sohbet */}
              <div className="flex justify-center">
                <div className="w-full max-w-[320px] overflow-hidden rounded-[2.4rem] border border-neutral-200 bg-neutral-50 shadow-[0_40px_80px_-30px_rgba(5,40,30,0.55)]">
                  <div className="flex items-center gap-2.5 bg-[var(--accent-strong)] px-4 py-3 text-white">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight">Anatolia Market</p>
                      <p className="text-[11px] leading-tight text-white/80">AI asistan • çevrimiçi</p>
                    </div>
                  </div>
                  <div
                    className="space-y-2 px-3 py-4"
                    style={{ background: "linear-gradient(180deg,#e9efe9,#e2eae2)", minHeight: "340px" }}
                  >
                    {shownBubbles.map((b, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <Bubble bubble={b} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sağ: adım metinleri */}
              <div className="flex flex-col justify-center gap-6">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.id}
                    animate={{ opacity: active === i ? 1 : 0.35 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-2xl border p-6 ${
                      active === i
                        ? "border-[var(--accent)] bg-[var(--accent-soft)] shadow-sm"
                        : "border-neutral-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
                        {s.id}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-strong)]">
                        {s.kicker}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-neutral-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---- Mobil: sade 3-adım ---- */}
        <Stagger className="mt-10 space-y-5 md:hidden">
          {steps.map((s) => (
            <StaggerItem
              key={s.id}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
                  {s.id}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-strong)]">
                  {s.kicker}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.text}</p>
              <div className="mt-4 space-y-2 rounded-xl bg-neutral-50 p-3">
                {s.bubbles.map((b, i) => (
                  <Bubble key={i} bubble={b} />
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
