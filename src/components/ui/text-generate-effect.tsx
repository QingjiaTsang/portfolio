"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

type TextSegment = {
  text: string;
  className?: string;
};

type TextGenerateEffectProps = {
  segments: TextSegment[] | string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export function TextGenerateEffect({
  segments,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: [0, 1],
        filter: filter ? ["blur(10px)", "blur(0px)"] : ["none", "none"],
      },
      {
        duration,
        delay: stagger(0.2),
      },
    );
  }, [animate, duration, filter]);

  const renderContent = () => {
    if (typeof segments === "string") {
      return segments.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ));
    }

    return segments.flatMap(({ text, className: segmentClassName }, segmentIdx) =>
      text.split(" ").map((word, wordIdx) => (
        <motion.span
          key={`${segmentIdx}-${wordIdx}`}
          className={cn("opacity-0", segmentClassName)}
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      )),
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope} className="flex flex-wrap">
        {renderContent()}
      </motion.div>
    </div>
  );
}
