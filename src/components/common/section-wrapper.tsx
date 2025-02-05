"use client";

import { motion } from "framer-motion";

import { staggerContainer } from "@/lib/motion";

export function SectionWrapper(Component: React.ComponentType, idName: string) {
  return function HOC() {
    return (
      <div className="relative z-0 mx-auto max-w-7xl px-6 py-10 sm:p-16">
        <motion.section
          variants={staggerContainer(0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div id={idName} className="py-2.5" />

          <Component />
        </motion.section>
      </div>
    );
  };
}
