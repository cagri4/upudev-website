// Root page - middleware handles locale redirect based on browser language
// This is a fallback in case middleware doesn't run
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/tr");
}

