import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

// Root layout is a pass-through: the localized <html lang> / <head> / <body>
// shell lives in src/app/[locale]/layout.tsx so lang + metadata can derive from
// the active locale. Non-locale routes under app/ (page.tsx, iletisim, urunler)
// only issue redirects and never stream page HTML, so they need no <html> here.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "UpuDev",
  description:
    "UpuDev — Netherlands-based software firm: web, e-commerce, automation and AI-powered digital solutions.",
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
  return children;
}
