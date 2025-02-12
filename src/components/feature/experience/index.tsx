"use client";

import Image from "next/image";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { FancyCard } from "@/components/feature/experience/moving-borders";
import { workExperience } from "@/constants";
import { cn } from "@/lib/utils";

export function ExperienceComponent() {
  return (
    <>
      <h1
        className={cn(
          "flex items-center justify-center",
          "text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]",
        )}
      >
        Experience
      </h1>

      <div className="mt-4 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map(card => (
          <FancyCard
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 border-neutral-200 text-white"
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={128}
                height={128}
                className="w-16 md:w-20 lg:w-32"
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 128px"
              />
              <div className="lg:ms-5">
                <h1 className="text-start font-generalsans text-xl font-bold md:text-2xl">
                  {card.title}
                </h1>
                <p className="mt-3 text-start font-generalsans text-custom-white-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </FancyCard>
        ))}
      </div>
    </>
  );
}

export const Experience = SectionWrapper(ExperienceComponent, "experience");
