import Link from "next/link";
import { defaultLocale } from "@/lib/i18n";

// Root-level not-found. The pass-through root layout renders no <html>/<body>,
// so top-level 404s must provide their own document shell.
export default function NotFound() {
  return (
    <html lang={defaultLocale}>
      <body className="antialiased">
        <main style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: "4rem 1.5rem", textAlign: "center" }}>
          <div>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>404</h1>
            <p style={{ marginBottom: "1.5rem", color: "#555" }}>Pagina niet gevonden / Sayfa bulunamadı / Page not found</p>
            <Link href={`/${defaultLocale}`} style={{ textDecoration: "underline" }}>
              UpuDev
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
