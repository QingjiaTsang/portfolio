"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

// TODO: implement mobile response
export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const isScrollingDown = current! - scrollYProgress.getPrevious()! > 0;

    const isAtTop = scrollYProgress.get() < 0.05;
    if (isAtTop) {
      setVisible(true);
    }
    else {
      if (isScrollingDown) {
        setVisible(false);
      }
      else {
        setVisible(true);
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.div
        key="progress-bar"
        className={cn("fixed top-0 left-0 right-0 h-0.5 bg-slate-500 origin-left")}
        transition={{
          ease: "easeInOut",
        }}
        style={{
          scaleX: scrollYProgress,
        }}
      />
      <motion.div
        key="nav-container"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -100,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 80,
        }}
        className={cn(
          "fixed z-[999] top-5 inset-x-0 mx-auto",
          "flex items-center justify-center",
          "max-w-fit",
          "px-6 py-3",
          "rounded-xl",
          "border border-white/[0.04]",
          "shadow-2xl",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          background: "linear-gradient(90deg,#161a31,#06091f)",
        }}
      >
        {navItems.map(navItem => (
          <Link
            key={`nav-item-${navItem.name}`}
            href={navItem.link}
            className={cn(
              "relative px-3 py-1.5",
              "text-sm font-normal",
              "text-slate-300/80 hover:text-white/90",
              "transition-all duration-300",
              "rounded-lg",
              "hover:bg-white/[0.04]",
              "hover:shadow-[0_0_10px_rgba(168,85,247,0.08)]",
            )}
          >
            <span>{navItem.icon}</span>
            <span>{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
