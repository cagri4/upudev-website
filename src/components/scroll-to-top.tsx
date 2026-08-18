"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Yukari cik"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-40 right-5 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-lg transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-xl"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="fill-none stroke-current stroke-2">
        <path d="M6 14l6-6 6 6" />
      </svg>
    </button>
  );
}

