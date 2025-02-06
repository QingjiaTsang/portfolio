"use client";

import type { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { fadeIn } from "@/lib/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: StaticImageData;
};

export function TagCard({ index, title, icon }: ServiceCardProps) {
  return (
    <Tilt
      perspective={500}
      glareEnable
      glareMaxOpacity={0.45}
      glarePosition="all"
      glareBorderRadius="20px"
      scale={1.02}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="green-pink-gradient w-full rounded-[20px] p-px shadow-card"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-custom-tertiary px-12 py-5">
          <Image
            src={icon}
            alt={`${title}-icon`}
            className="size-16 object-contain"
          />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
