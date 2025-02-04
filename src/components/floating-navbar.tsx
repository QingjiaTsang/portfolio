"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { useState } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { cn } from "@/lib/utils";

export type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const { scrollYProgress } = useScroll();

  const lenis = useLenis();

  const handleNavigate = (href: string) => {
    lenis?.scrollTo(href);
  };

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
      <ScrollProgressBar />
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
          "fixed z-[999] top-5",
          "flex items-center justify-center",
          "max-w-fit",
          "sm:px-6 sm:py-3 ",
          "rounded-xl shadow-2xl",
          "border border-white/[0.04]",
          "right-5 sm:inset-x-0 sm:mx-auto",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          background: "linear-gradient(90deg,#161a31,#06091f)",
        }}
      >

        {/* Desktop */}
        <div className="hidden justify-center gap-2 sm:flex">
          {navItems.map(navItem => (
            <button
              type="button"
              key={`nav-item-${navItem.name}`}
              onClick={() => handleNavigate(navItem.link)}
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
            </button>
          ))}
        </div>

        {/* Mobile */}
        <div className="sm:hidden">
          <MobileNav navItems={navItems} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
