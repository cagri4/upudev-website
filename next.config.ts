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
    ];
  },
};

export default nextConfig;
