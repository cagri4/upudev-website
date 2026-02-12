import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";

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
      <body className="antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
