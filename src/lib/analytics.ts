export type GtmEvent =
  | {
      event: "quote_form_submit";
      form_location: string;
      form_subject?: string;
      locale?: string;
      sektor?: string;
      ihtiyac?: string[];
    }
  | { event: "phone_click"; phone: string; location: string; locale?: string }
  | { event: "email_click"; email: string; location: string; locale?: string }
  | { event: "whatsapp_click"; location: string; locale?: string };

export function pushEvent(event: GtmEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event as unknown as Record<string, unknown>);

  // Meta Pixel mirror — quote_form_submit her zaman Lead'dir (OUTCOME_LEADS
  // kampanyası optimization sinyali). Value/currency Google Ads ile paralel,
  // content_category sektör adı (varsa) — Meta'da sektör-bazlı CTR analizine
  // izin verir.
  if (event.event === "quote_form_submit") {
    const params: Record<string, unknown> = { value: 50, currency: "EUR" };
    if (event.sektor) params.content_category = event.sektor;
    window.fbq?.("track", "Lead", params);
  }
}
