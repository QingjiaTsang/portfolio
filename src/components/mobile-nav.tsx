"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "size-10 p-0 flex items-center justify-center",
          "rounded-lg bg-transparent",
          "focus:outline-none",
          "transition-colors duration-300",
        )}
      >
        <Menu className="size-5 text-slate-300" />
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
