"use client";

import { useEffect, useState } from "react";

/**
 * Mobil sticky alt bar — "Hemen Mesaj Gönder".
 *
 * Sadece mobilde (md:hidden) görünür. Form (#targetId) ekrandayken gizlenir,
 * ekrandan çıkınca görünür (IntersectionObserver). Tıklayınca forma kaydırır.
 * Desktop'ta hiç render olmaz (kaydırma zaten kısa).
 */
export function MobileStickyCta({
  label,
  targetId,
}: {
  label: string;
  targetId: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Form ekrandaysa barı gizle; değilse göster.
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  function scrollToForm() {
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-emerald-700/20 bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <button
        type="button"
        onClick={scrollToForm}
        tabIndex={show ? 0 : -1}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
      >
        {label}
      </button>
    </div>
  );
}
