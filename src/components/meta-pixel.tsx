import Script from "next/script";

/**
 * Meta Pixel base script — GDPR-aware consent default.
 *
 * Yükleme stratejisi (GTM ile aynı consent modeli):
 *   - Script `afterInteractive` ile yüklenir, base `fbq` hazırdır.
 *   - Cookie banner kullanıcı tercihini yansıtana kadar `consent` = `revoke`
 *     → PageView ve sonraki event'ler queue'da kalır, kişiselleştirme yok.
 *   - localStorage'da `upudev-cookie-consent.accepted === true` ise initial
 *     load'da `consent` = `grant` ile başlar (kabul eden kullanıcılarda
 *     PageView anında firing).
 *   - Banner'dan accept/reject akışı `cookie-banner.tsx` tarafından
 *     `fbq('consent','grant'|'revoke')` çağrısı ile yansıtılır.
 *
 * Pixel ID `NEXT_PUBLIC_META_PIXEL_ID` env var ile gelir; tanımsızsa script
 * mount edilmez (PR preview / lokal-dev güvenli).
 */
export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          var granted = false;
          try {
            var saved = JSON.parse(localStorage.getItem('upudev-cookie-consent'));
            granted = saved && saved.accepted === true;
          } catch (e) {}

          fbq('consent', granted ? 'grant' : 'revoke');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
