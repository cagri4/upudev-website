"use client";

import type { ReactNode } from "react";
import { OPEN_MEETING_MODAL_EVENT } from "@/components/meeting-modal";

type Props = {
  children: ReactNode;
  className?: string;
};

export function MeetingTrigger({ children, className }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_MEETING_MODAL_EVENT))}
    >
      {children}
    </button>
  );
}
