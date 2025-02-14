"use client";

import { useVisitorTracking } from "@/hooks/use-visitor-tracking";

export function VisitorTrackProvider({ children }: { children: React.ReactNode }) {
  useVisitorTracking();

  return (
    <>
      {children}
    </>
  );
}
