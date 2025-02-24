"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { SectionWrapper } from "@/components/common/section-wrapper";
import ProfileGrids from "@/components/feature/about/profile-grids";
import { TagCard } from "@/components/feature/about/tag-card";
import { tags } from "@/constants";
import { fadeIn, textVariant } from "@/lib/motion";

export function AboutComponent() {
  const t = useTranslations("about");

  return (
    <div>
      <motion.div variants={textVariant(0.5)}>
        <p className="text-[14px] uppercase tracking-wider text-custom-secondary sm:text-[18px]">
          {t("title")}
        </p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          {t("subtitle")}
        </h2>
      </motion.div>

      {/* Note: in fadeIn function, we set the "left" value, it means at the first place, this long text is on the right side of the screen, */}
      {/* which will make a horizontal scrollbar appear, so don't forget to wrap the text in a div with overflow-hidden */}
      <div className="overflow-hidden">
        <motion.p
          variants={fadeIn("left", "spring", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-4 max-w-3xl text-[17px] leading-[30px] text-custom-secondary"
        >
          {t("introduction")}
        </motion.p>
      </div>

      <div className="mt-20 grid transform-gpu grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tags.map((service, index) => (
          <TagCard
            {...service}
            key={service.id}
            index={index}
            title={t(`tags.${service.id}`)}
          />
        ))}
      </div>

      <ProfileGrids />
    </div>
  );
}

export const About = SectionWrapper(AboutComponent, "about");
