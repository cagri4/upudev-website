"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/analytics";

/** Açılış olayı — yalnız dataLayer'a push; çerez yazmaz. GTM tag'leri consent mode'a (cookie banner) uyar. */
export function DemoViewEvent({ pagePath }: { pagePath: string }) {
  useEffect(() => {
    pushEvent({ event: "demo_mcc_view", page_path: pagePath });
  }, [pagePath]);
  return null;
}
