"use client";

import type { ReactNode } from "react";
import { pushEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  location: string;
  locale?: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function TrackedLink({ href, location, locale, children, className, target, rel }: TrackedLinkProps) {
  function onClick() {
    if (href.startsWith("tel:")) {
      pushEvent({ event: "phone_click", phone: href.replace("tel:", ""), location, locale });
    } else if (href.startsWith("mailto:")) {
      pushEvent({ event: "email_click", email: href.replace("mailto:", ""), location, locale });
    } else if (href.includes("wa.me") || href.includes("whatsapp")) {
      pushEvent({ event: "whatsapp_click", location, locale });
    }
  }

  return (
    <a href={href} onClick={onClick} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}
