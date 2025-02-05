"use client";

import { motion } from "framer-motion";

import { SectionWrapper } from "@/components/common/section-wrapper";
import ProfileGrids from "@/components/feature/about/profile-grids";
import { TagCard } from "@/components/feature/about/tag-card";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/lib/motion";

function AboutComponent() {
  return (
    <div>
      <motion.div variants={textVariant(0.5)}>
        <p className="text-[14px] uppercase tracking-wider text-custom-secondary sm:text-[18px]">Introduction</p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-custom-secondary"
      >
        I'm a Full Stack Developer with extensive experience in web development.
        I specialize in building high-performance, scalable applications and stay passionate about emerging technologies.
        With expertise in frontend development and a strong background in building full-stack applications using Next.js and Hono.js,
        I also have solid experience in cloud deployment. I maintain a constant drive for learning new technologies
        and am dedicated to delivering optimal technical solutions.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <TagCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <ProfileGrids />
    </div>
  );
}

export const About = SectionWrapper(AboutComponent, "about");
