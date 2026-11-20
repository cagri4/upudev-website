"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

/** Sayfa açılışındaki utm_* / fbclid'i oturum boyunca saklar (bkz. src/lib/attribution.ts). */
export function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution(window.location.search);
  }, [pathname]);
  return null;
}
