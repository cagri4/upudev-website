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
  | { event: "whatsapp_click"; location: string; locale?: string }
  /** Kişiye özel demo sayfaları (/nl/demo/<ad>) — açılış + ses oynatma. dataLayer'a gider; tag'ler GTM consent mode'a uyar. */
  | { event: "demo_mcc_view" | "demo_mcc_audio_play" | "demo_mcc_audio_complete"; page_path: string };

export function pushEvent(event: GtmEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event as unknown as Record<string, unknown>);

  // NOT: Meta Pixel Lead/Contact event'leri tek kaynaktan fire edilir:
  //   - Lead + FormSubmit → dijital-ekibiniz-lead-form.tsx (form success)
  //   - Contact + WhatsAppClick → whatsapp-link.tsx (WA tıklamaları)
  // Burada fbq mirror'ı tutulmuyor ki çift-Lead olmasın.
}
