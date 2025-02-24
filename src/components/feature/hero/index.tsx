"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ComputersCanvas } from "@/components/canvas/computers";
import { ScrollIndicator } from "@/components/feature/hero/scroll-indicator";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { styles } from "@/constants";
import { increaseHeight, zoomIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative mx-auto h-dvh w-full transform-gpu">
      <div
        className={cn(
          `${styles.paddingX}`,
          "absolute inset-0 top-[120px] mx-auto flex max-w-7xl gap-5",
        )}
      >
        <div className="flex flex-col items-center">
          <motion.div className="size-5 rounded-full bg-[#915eff]" variants={zoomIn} initial="initial" animate="start" />
          <motion.div variants={increaseHeight} custom={1} initial="initial" animate="start" className="violet-gradient h-40 w-1 origin-top sm:h-80" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-[26px] leading-normal text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <TextGenerateEffect
              segments={[
                { text: t("greeting"), className: "font-black" },
                { text: t("name"), className: "text-[#915eff] font-black" },
              ]}
              duration={0.6}
            />
          </h1>

          <h2 className="mt-4">
            <TypewriterEffectSmooth
              words={[
                {
                  text: t("role"),
                  className: "text-white",
                },
              ]}
              hideCursorAfterComplete
            />
            <TypewriterEffectSmooth
              words={[
                {
                  text: t("description"),
                  className: "text-white",
                },
              ]}
              initialDelay={1.2}
              showCursorAfterDelay
            />
          </h2>
        </div>
      </div>

      <div className="absolute inset-0 -mt-3">
        <ComputersCanvas />
      </div>

      <ScrollIndicator href="#about" />
    </section>
  );
}
