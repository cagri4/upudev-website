"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "upudev-cookie-consent";

const labels: Record<
  Locale,
  {
    title: string;
    description: string;
    privacyLabel: string;
    accept: string;
    reject: string;
  }
> = {
  tr: {
    title: "Çerezler",
    description:
      "Bu site, oturumunuzu yönetmek ve deneyiminizi iyileştirmek için çerezler kullanır. Pazarlama veya takip çerezleri kullanılmaz.",
    privacyLabel: "Gizlilik Politikası",
    accept: "Kabul Et",
    reject: "Reddet",
  },
  en: {
    title: "Cookies",
    description:
      "This site uses cookies to manage your session and improve your experience. No marketing or tracking cookies are used.",
    privacyLabel: "Privacy Policy",
    accept: "Accept",
    reject: "Reject",
  },
  nl: {
    title: "Cookies",
    description:
      "Deze site gebruikt cookies om uw sessie te beheren en uw ervaring te verbeteren. Er worden geen marketing- of trackingcookies gebruikt.",
    privacyLabel: "Privacybeleid",
    accept: "Accepteren",
    reject: "Weigeren",
  },
};

function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : "en";
}

export function CookieBanner() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = labels[locale];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (!stored) setVisible(true);
  }, []);

  const handleChoice = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl md:bottom-6 md:right-6"
    >
      <h2 className="text-base font-semibold text-neutral-900">{t.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {t.description}{" "}
        (
        <Link href={`/${locale}/privacy`} className="text-indigo-600 underline underline-offset-2 hover:text-indigo-700">
          {t.privacyLabel}
        </Link>
        )
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="flex-1 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
        >
          {t.reject}
        </button>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="flex-1 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
