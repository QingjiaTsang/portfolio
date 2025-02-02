import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { styles } from "@/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative mx-auto h-dvh w-full">
      <div
        className={cn(
          `${styles.paddingX}`,
          "absolute inset-0 top-20 sm:top-[120px] mx-auto flex max-w-7xl gap-5",
        )}
      >
        <div className="flex flex-col items-center">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className="text-[26px] leading-normal text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <TextGenerateEffect
              segments={[
                { text: "Hi, I'm", className: "font-black" },
                { text: "Qingjia Tsang", className: "text-[#915eff] font-black" },
              ]}
              duration={0.6}
            />
          </h1>

          <h2 className="mt-4">
            <TypewriterEffectSmooth
              words={[
                {
                  text: "Frontend Developer",
                  className: cn("text-white"),
                },
              ]}
              cursorClassName="hidden"
            />
            <TypewriterEffectSmooth
              words={[
                {
                  text: "with passion to build web app",
                  className: cn("text-white"),
                },
              ]}
              cursorClassName="hidden"
              initialDelay={1.2}
            />
          </h2>
        </div>
      </div>
    </section>
  );
}
