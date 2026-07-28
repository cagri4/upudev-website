// Apex (/) redirects to the default locale (nl). Netherlands-first target.
import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
