"use client";

import { BallCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { technologies } from "@/constants";
import { cn } from "@/lib/utils";

export function TechComponent() {
  return (
    <>
      <h1
        className={cn(
          "flex items-center justify-center",
          "text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]",
        )}
      >
        Tech Stacks
      </h1>

      <div className="mt-4 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="size-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export const Tech = SectionWrapper(TechComponent, "tech");
