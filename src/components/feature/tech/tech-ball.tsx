"use client";

import type { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import Image from "next/image";

import { BallCanvas } from "@/components/canvas";
import { useDeviceDetect } from "@/hooks/use-device-detect";
import { rotateIn } from "@/lib/motion";

type TechCardProps = {
  name: string;
  icon: StaticImageData;
  shadow: string;
  index: number;
};

export function TechBall({ name, icon, shadow, index }: TechCardProps) {
  const { isMobile, isIOS } = useDeviceDetect();
  const shouldRenderStaticBall = isMobile && !isIOS;

  return (
    <div className="size-28">
      {shouldRenderStaticBall
        ? (
            <div
              className="size-28"
              style={{
                perspective: "120px",
                WebkitPerspective: "120px",
                MozPerspective: "120px",
                perspectiveOrigin: "top",
                WebkitPerspectiveOrigin: "top",
                MozPerspectiveOrigin: "top",
              }}
            >
              <motion.div
                className="flex size-full items-center justify-center overflow-hidden rounded-full bg-white p-3"
                variants={rotateIn}
                initial="initial"
                whileInView="enter"
                exit="exit"
                custom={index}
                viewport={{ once: true }}
              >
                <Image
                  src={icon.src}
                  alt={name}
                  style={{
                    filter: `drop-shadow(0 15px 10px ${shadow})`,
                    msFilter: `drop-shadow(0 15px 10px ${shadow})`,
                    WebkitFilter: `drop-shadow(0 15px 10px ${shadow})`,
                  }}
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </motion.div>
            </div>
          )
        : (
            <BallCanvas icon={icon} />
          )}
    </div>
  );
}
