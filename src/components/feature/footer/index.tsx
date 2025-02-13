"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";

import { SocialLinks } from "./social-links";

export function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-between gap-8 px-5 md:flex-row">
      <Copyright year={currentYear} owner="Qingjia Tsang" />
      <SocialLinks />
    </footer>
  );
}

type CopyrightProps = {
  year: number
  owner: string
}

function Copyright({ year, owner }: CopyrightProps) {
  return (
    <p className="text-sm text-slate-300/80 transition-colors hover:text-white/90 md:text-base">
      Copyright © {year} {owner}
    </p>
  )
}

export const Footer = SectionWrapper(FooterComponent, "socials");
