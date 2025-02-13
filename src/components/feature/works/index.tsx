"use client";

import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProjectCard } from "@/components/feature/works/pin";
import { projects } from "@/constants";
import { cn } from "@/lib/utils";

export function WorksComponent() {
  const t = useTranslations('works');

  return (
    <>
      <h1
        className={cn(
          "flex items-center justify-center",
          "text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]",
          "max-sm:-mb-8",
        )}
      >
        {t('title')}
      </h1>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
        {projects.map(item => (
          <ProjectCard
            {...item}
            key={item.id}
            title={t(`projects.${item.id}.title`)}
            des={t(`projects.${item.id}.des`)}
          />
        ))}
      </div>
    </>
  );
}

export const Works = SectionWrapper(WorksComponent, "works", "px-0");
