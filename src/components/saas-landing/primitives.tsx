"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import type { ReactNode } from "react";
import type { ChatBubble } from "@/content/saas-landing/types";

/**
 * Paylaşılan motion primitive'leri — TÜM SaaS landing'leri aynı animasyonu
 * kullanır. GPU-only (opacity/transform). prefers-reduced-motion, kökteki
 * <MotionConfig reducedMotion="user"> tarafından otomatik karşılanır.
 */

const EASE = [0.22, 0.61, 0.36, 1] as const;

/** Bir bölümü sarar: viewport'a girince fade-up (bir kez). */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {children}
    </motion.section>
  );
}

/** Stagger konteyneri — çocukları sırayla fade-up eder. */
export function Stagger({
  children,
  className,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger içindeki tekil eleman. */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Sayaç — viewport'a girince 0'dan hedefe (bir kez). */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Reduced-motion ya da 0 hedefi: animasyonsuz, tek karede yerleştir.
    if (reduce || value === 0) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }
    const duration = 1100;
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** Tek WhatsApp balonu (gerçek ürün UI taklidi). */
export function Bubble({ bubble }: { bubble: ChatBubble }) {
  const out = bubble.side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
          out
            ? "rounded-br-md bg-[var(--accent-soft)] text-neutral-800"
            : "rounded-bl-md bg-white text-neutral-800"
        }`}
      >
        {bubble.tag && (
          <span
            className={`mb-0.5 mr-1 inline-block rounded px-1 text-[9px] font-bold uppercase tracking-wide ${
              out ? "bg-[var(--accent)] text-white" : "bg-neutral-200 text-neutral-600"
            }`}
          >
            {bubble.tag}
          </span>
        )}
        <span>{bubble.text}</span>
        {bubble.time && (
          <span className="ml-1.5 align-bottom text-[9px] text-neutral-400">{bubble.time}</span>
        )}
      </div>
    </div>
  );
}

/** WhatsApp tarzı telefon çerçevesi + sohbet. */
export function PhoneChat({
  contactName,
  contactStatus,
  bubbles,
  trHint,
  className,
}: {
  contactName: string;
  contactStatus: string;
  bubbles: ChatBubble[];
  trHint?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full max-w-[300px] overflow-hidden rounded-[2.2rem] border border-neutral-200 bg-neutral-50 shadow-[0_30px_60px_-25px_rgba(5,40,30,0.5)] ${className ?? ""}`}
    >
      {/* WA header */}
      <div className="flex items-center gap-2.5 bg-[var(--accent-strong)] px-4 py-3 text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
          {contactName.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight">{contactName}</p>
          <p className="truncate text-[11px] leading-tight text-white/80">{contactStatus}</p>
        </div>
      </div>
      {/* Chat zemin */}
      <div
        className="space-y-2 px-3 py-4"
        style={{
          background:
            "linear-gradient(180deg,#e9efe9 0%,#e2eae2 100%)",
          minHeight: "260px",
        }}
      >
        {bubbles.map((b, i) => (
          <Bubble key={i} bubble={b} />
        ))}
      </div>
      {/* TR ipucu */}
      {trHint && (
        <div className="border-t border-neutral-200 bg-white px-3 py-2.5 text-[11px] leading-snug text-neutral-500">
          {trHint}
        </div>
      )}
    </div>
  );
}

/** Cam QR kartı — gerçek görünümlü, sahte blob yok. */
export function QrCard({
  title,
  sub,
  caption,
}: {
  title: string;
  sub: string;
  caption: string;
}) {
  return (
    <div className="w-[180px] rounded-2xl border border-white/40 bg-white/80 p-4 text-center shadow-[0_20px_45px_-20px_rgba(5,40,30,0.45)] backdrop-blur">
      <QrGlyph />
      <p className="mt-3 text-sm font-bold text-neutral-900">{title}</p>
      <p className="text-xs font-semibold text-[var(--accent-strong)]">{sub}</p>
      <p className="mt-1.5 text-[10px] leading-snug text-neutral-500">{caption}</p>
    </div>
  );
}

/** Dekoratif ama gerçekçi QR glifi (CSS grid — görsel asset gerektirmez). */
function QrGlyph() {
  // 11x11 sabit desen — köşe konumlandırıcılar + rastgele görünümlü gövde.
  const pattern = [
    "11111011111",
    "10001010001",
    "10111010111",
    "10111000101",
    "10001011001",
    "11111010101",
    "00000011000",
    "11101101011",
    "01011000110",
    "10010111010",
    "11101011111",
  ];
  return (
    <div className="mx-auto grid w-[120px] grid-cols-11 gap-px rounded-lg bg-white p-2">
      {pattern.flatMap((row, r) =>
        row.split("").map((c, col) => (
          <span
            key={`${r}-${col}`}
            className={`aspect-square rounded-[1px] ${c === "1" ? "bg-neutral-900" : "bg-transparent"}`}
          />
        )),
      )}
    </div>
  );
}
