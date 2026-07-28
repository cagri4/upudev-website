import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

const FALLBACK_LOCALE = "nl";
const COOKIE_NAME = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function getPreferredLocale(request: NextRequest): string {
  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return FALLBACK_LOCALE;

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";q=");
      return {
        code: code.split("-")[0].toLowerCase(),
        q: qValue ? parseFloat(qValue) : 1,
      };
    })
    .filter((entry) => entry.code.length > 0)
    .sort((a, b) => b.q - a.q);

  for (const lang of languages) {
    if (isLocale(lang.code)) return lang.code;
  }
  return FALLBACK_LOCALE;
}

export function proxy(request: NextRequest) {
  // Canonical host: redirect www.upudev.nl -> upudev.nl (301, single host).
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

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
    const current = request.cookies.get(COOKIE_NAME)?.value;
    if (current !== firstSegment) {
      const res = NextResponse.next();
      res.cookies.set(COOKIE_NAME, firstSegment, {
        maxAge: COOKIE_MAX_AGE,
        path: "/",
        sameSite: "lax",
      });
      return res;
    }
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE_NAME, locale, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
