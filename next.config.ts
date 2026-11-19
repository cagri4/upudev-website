import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 19 Kas 2026 (Çağrı onayı): Vercel Image Optimization KAPALI — Hobby kotası dolunca /_next/image 402 → kırık görsel.
    // Görseller scripts/gorsel-webp.py ile önceden WebP'ye boyutlandırılır, <StaticImage> ile srcSet verilir.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Eski "UPU Uw Digitale Team" landing'i → yeni AI Eleman ana sayfası (SEO koru, silme).
      {
        source: "/:locale(tr|en|nl)/dijital-ekibiniz",
        destination: "/:locale",
        statusCode: 301,
      },
      // Kişiye özel demo (MCC Agency, 19 Kas 2026): DM'de kısa link /demo/mcc → yalnız NL sayfası.
      {
        source: "/demo/mcc",
        destination: "/nl/demo/mcc",
        permanent: false,
      },
      {
        source: "/:locale(tr|en)/demo/mcc",
        destination: "/nl/demo/mcc",
        permanent: false,
      },
      // Eski ürün/portföy sayfaları kaldırıldı (Çağrı 16 Kas 2026): doğrulanmamış vaka/rakam + yöntem detayı → ilgili dilin ana sayfası.
      {
        source: "/:locale(tr|en|nl)/urunler/:path*",
        destination: "/:locale",
        statusCode: 301,
      },
      {
        source: "/urunler/:path*",
        destination: "/nl",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
