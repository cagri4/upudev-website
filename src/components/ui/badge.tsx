import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };

