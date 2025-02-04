"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

type ScrollIndicatorProps = {
  href: string;
};

export function ScrollIndicator({ href }: ScrollIndicatorProps) {
  const lenis = useLenis();

  const handleNavigate = () => {
    lenis?.scrollTo(href);
  };

  return (
    <div className="absolute bottom-0 z-10 flex w-full items-center justify-center">
      <button type="button" onClick={handleNavigate}>
        <div className="flex h-[64px] w-[35px] scale-[0.6] items-start justify-center rounded-3xl border-4 border-secondary p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="mb-1 size-3 rounded-full bg-secondary"
          />
        </div>
      </button>
    </div>
  );
}
