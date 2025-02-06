"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import type { NavItem } from "./floating-navbar";

type MobileNavProps = {
  navItems: NavItem[];
};

export function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={cn(
          "size-10 p-0 flex items-center justify-center",
          "rounded-lg bg-transparent",
          "focus:outline-none",
          "transition-colors duration-300",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {isOpen
              ? (
                  <X className="size-5 text-slate-300" />
                )
              : (
                  <Menu className="size-5 text-slate-300" />
                )}
          </motion.div>
        </AnimatePresence>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn(
          "w-32 overflow-hidden",
          "rounded-xl p-2",
          "border border-white/[0.04]",
          "bg-[linear-gradient(90deg,#161a31,#06091f)]",
          "backdrop-blur-xl",
          "animate-in fade-in-0 zoom-in-95",
          "shadow-lg",
        )}
      >
        {navItems.map(item => (
          <DropdownMenuItem
            key={`mobile-nav-${item.name}`}
            className={cn(
              "flex items-center gap-2",
              "rounded-lg px-3 py-2",
              "text-sm font-normal",
              "text-slate-300/80",
              "focus:bg-white/[0.04] focus:text-white/90",
              "transition-colors duration-300",
            )}
            asChild
          >
            <Link href={item.link}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
