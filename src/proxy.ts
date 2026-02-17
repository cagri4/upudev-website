import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

const FALLBACK_LOCALE = "en";

function getPreferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return FALLBACK_LOCALE;

  // Parse Accept-Language header (e.g., "nl-NL,nl;q=0.9,en;q=0.8,tr;q=0.7")
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";q=");
      return {
        code: code.split("-")[0].toLowerCase(), // "nl-NL" -> "nl"
        q: qValue ? parseFloat(qValue) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  // Find first matching supported locale
  for (const lang of languages) {
    if (isLocale(lang.code)) {
      return lang.code;
    }
  }

  return FALLBACK_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];
  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  // Get preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  const locale = getPreferredLocale(acceptLanguage);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
