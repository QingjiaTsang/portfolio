"use client";

import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { TechBall } from "@/components/feature/tech/tech-ball";
import { technologies } from "@/constants";
import { cn } from "@/lib/utils";

export function TechComponent() {
  const t = useTranslations("tech");

  return (
    <>
      <h1
        className={cn(
          "flex items-center justify-center",
          "text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]",
        )}
      >
        {t("title")}
      </h1>

      <div className="mt-4 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechBall
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
            shadow={technology.shadow}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export const Tech = SectionWrapper(TechComponent, "tech");
