"use client";

import { motion, useScroll } from "framer-motion";

import { cn } from "@/lib/utils";

type ProgressBarProps = {
  className?: string;
};

export function ProgressBar({ className }: ProgressBarProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      key="progress-bar"
      className={cn(
        "fixed top-0 left-0 right-0 h-[3px]",
        "origin-left",
        className,
      )}
      transition={{
        ease: "easeInOut",
      }}
      style={{
        scaleX: scrollYProgress,
      }}
    >
      <svg
        className="size-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 2"
      >
        <motion.path
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="url(#gradient)"
          d="M0 1 L100 1"
        />
        <defs>
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="100"
            y2="0"
          >
            <stop offset="0%" stopColor="#18CCFC" />
            <stop offset="32.5%" stopColor="#6344F5" />
            <stop offset="100%" stopColor="#AE48FF" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
