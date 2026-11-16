import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
