import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getHomeDictionary, isLocale, locales } from "@/lib/i18n";
import { canonicalUrl } from "@/lib/seo";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CookieBanner } from "@/components/cookie-banner";
import { MeetingModal } from "@/components/meeting-modal";
import { MetaPixel } from "@/components/meta-pixel";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getHomeDictionary(locale);
  return {
    title: {
      default: dict.meta.title,
      template: "%s",
    },
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonicalUrl(locale),
      siteName: "UpuDev",
      type: "website",
      locale,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
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
