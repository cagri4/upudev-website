import * as React from "react";
import { cn } from "@/lib/utils";

function Separator({ className, orientation = "horizontal", ...props }: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      data-slot="separator"
      className={cn(orientation === "vertical" ? "h-full w-px" : "h-px w-full", "bg-neutral-200", className)}
      {...props}
    />
  );
}

export { Separator };

