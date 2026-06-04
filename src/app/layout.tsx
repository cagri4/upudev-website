import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CookieBanner } from "@/components/cookie-banner";
import { MeetingModal } from "@/components/meeting-modal";
import { MetaPixel } from "@/components/meta-pixel";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();

export const metadata: Metadata = {
  title: "UpuDev | Dijital Urun ve Yazilim Cozumleri",
  description:
    "UpuDev ana sayfasi: web, e-ticaret, otomasyon ve dijital donusum odakli yazilim cozumleri.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="facebook-domain-verification" content="igwywyo7m787er5o2jz0zrmhk0p1pk" />
        <Script id="gtm-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            var granted = false;
            try {
              var saved = JSON.parse(localStorage.getItem('upudev-cookie-consent'));
              granted = saved && saved.accepted === true;
            } catch (e) {}

            gtag('consent', 'default', {
              'ad_storage': granted ? 'granted' : 'denied',
              'ad_user_data': granted ? 'granted' : 'denied',
              'ad_personalization': granted ? 'granted' : 'denied',
              'analytics_storage': granted ? 'granted' : 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
          `}
        </Script>

        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}

        <MetaPixel />
      </head>
      <body className="antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <ScrollToTop />
        <CookieBanner />
        <MeetingModal />
      </body>
    </html>
  );
}
