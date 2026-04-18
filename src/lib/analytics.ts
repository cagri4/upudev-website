export type GtmEvent =
  | { event: "quote_form_submit"; form_location: string; form_subject?: string; locale?: string }
  | { event: "phone_click"; phone: string; location: string; locale?: string }
  | { event: "email_click"; email: string; location: string; locale?: string }
  | { event: "whatsapp_click"; location: string; locale?: string };

export function pushEvent(event: GtmEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event as unknown as Record<string, unknown>);
}
