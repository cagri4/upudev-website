/**
 * Reklam/kampanya kaynağı (20 Kas 2026 — Çağrı onayı, Meta A/B testi).
 * Sayfa açılışındaki utm_* parametreleri (+ fbclid varsa yalnız "var" bilgisi) oturum boyunca
 * sessionStorage'da tutulur; tüm formlar gönderimde API'ye iletir, API lead mailine
 * "Campagne: … · Variant: …" satırını ekler. Parametre yoksa mailde "direct" yazar.
 * Çerez değildir, üçüncü tarafa gitmez (yalnız kendi lead mailimiz).
 */

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  fbclid?: boolean;
};

const KEY = "upudev-attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

/** URL'de kampanya parametresi varsa sakla (yeni reklam tıklaması eskisinin üzerine yazar). */
export function captureAttribution(search: string) {
  try {
    const params = new URLSearchParams(search);
    const found: Attribution = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k)?.trim();
      if (v) found[k] = v.slice(0, 100);
    }
    if (params.get("fbclid")) found.fbclid = true;
    if (Object.keys(found).length > 0) window.sessionStorage.setItem(KEY, JSON.stringify(found));
  } catch {
    /* sessionStorage kapalı olabilir — sessizce geç */
  }
}

/** Formlar gönderimde çağırır; yoksa null (API "direct" yazar). */
export function getAttribution(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/** API tarafı: gelen değeri temizle ve mail satırına çevir. */
export function formatAttributionLine(input: unknown): string {
  const a = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const clean = (v: unknown) =>
    typeof v === "string" ? v.replace(/[^\p{L}\p{N} ._\-+/:]/gu, "").trim().slice(0, 100) : "";
  const source = clean(a.utm_source);
  const medium = clean(a.utm_medium);
  const campaign = clean(a.utm_campaign);
  const content = clean(a.utm_content);
  const fbclid = a.fbclid === true;
  if (!source && !medium && !campaign && !content && !fbclid) return "Campagne: direct";
  const parts = [`Campagne: ${campaign || "-"}`, `Variant: ${content || "-"}`, `Bron: ${source || "-"}/${medium || "-"}`];
  if (fbclid) parts.push("fbclid: var");
  return parts.join(" · ");
}
