"use client";

import { cn } from "@/lib/utils";

export function SectionWrapper(Component: React.ComponentType, idName: string, className?: string) {
  return function HOC() {
    return (
      <div className={cn("relative z-0 mx-auto max-w-7xl px-6 py-10", className)}>
        <div id={idName} className="py-2.5" />

        <Component />
      </div>
    );
  };
}
