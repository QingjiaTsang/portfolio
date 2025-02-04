"use client";

import { motion } from "framer-motion";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { ServiceCard } from "@/components/feature/about/service-card";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/lib/motion";

function AboutComponent() {
  return (
    <div className="min-h-[70dvh]">
      <motion.div variants={textVariant(0.5)}>
        <p className="text-[14px] uppercase tracking-wider text-custom-secondary sm:text-[18px]">Introduction</p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-custom-secondary"
      >
        我是一名资深的全栈开发工程师，拥有丰富的 Web 开发经验。
        专注于创建高性能、可扩展的应用程序，并且热衷于使用最新的技术栈。
        我擅长前端开发，在使用 Next.js, Hono.js 构建全栈应用以及云服务部署方面积累了丰富经验，
        始终保持对新技术的学习热情，致力于提供最佳的技术解决方案。
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export const About = SectionWrapper(AboutComponent, "about");
