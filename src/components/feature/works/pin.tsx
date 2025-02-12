"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export function PinContainer({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)",
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform,
          }}
          className="absolute left-1/2 top-1/2 flex  items-start justify-start overflow-hidden  rounded-2xl  border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2]"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
}

export function PinPerspective({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) {
  return (
    <motion.div className="pointer-events-none z-[60] flex h-80 w-full items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
      <div className=" inset-0 -mt-7 size-full flex-none">
        <div className="absolute inset-x-0 top-0  flex justify-center">
          <a
            href={href}
            target="_blank"
            className="relative z-10 flex items-center space-x-2 whitespace-nowrap rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10"
          >
            <span className="relative z-20 inline-block py-0.5 text-xs font-bold text-white">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  size-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            >
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  size-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            >
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  size-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            >
            </motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40" />
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40  " />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 size-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]" />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 size-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300 " />
        </>
      </div>
    </motion.div>
  );
}

type ProjectCardProps = {
  title: string;
  link: string;
  img: string;
  hoverImg?: string; // Make hoverImg optional
  des: string;
  iconLists: string[];
};

export function ProjectCard({ title, link, img, hoverImg, des, iconLists }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <PinContainer title={link} href={link}>
        <CardImage img={img} hoverImg={hoverImg || img} isHovering={isHovering} />
        <CardContent title={title} des={des} />
        <CardFooter iconLists={iconLists} link={link} />
      </PinContainer>
    </div>
  );
}

function CardImage({ img, hoverImg, isHovering }: { img: string; hoverImg: string; isHovering: boolean }) {
  return (
    <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
      <div className="relative size-full overflow-hidden bg-[#13162D] lg:rounded-3xl">
        <Image src="/assets/projects/bg.png" alt="bg_img" fill />
      </div>
      <Image
        src={`/assets/projects${isHovering ? hoverImg : img}`}
        alt="cover"
        fill
        className="absolute bottom-0 z-10"
      />
    </div>
  );
}

function CardContent({ title, des }: { title: string; des: string }) {
  return (
    <>
      <h1 className="line-clamp-1 text-base font-bold text-white md:text-xl lg:text-2xl">
        {title}
      </h1>
      <p className="my-1 line-clamp-3 text-sm font-light text-[#BEC1DD] lg:text-xl lg:font-normal">
        {des}
      </p>
    </>
  );
}

function CardFooter({ iconLists, link }: { iconLists: string[]; link: string }) {
  return (
    <div className="mb-3 mt-7 flex items-center justify-between">
      <div className="flex items-center">
        {iconLists.map((icon, index) => (
          <div
            key={index}
            className="relative flex size-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:size-10"
            style={{
              transform: `translateX(-${5 * index + 2}px)`,
            }}
          >
            <Image src={`/assets/projects${icon}`} alt="icon5" fill className="p-2" />
          </div>
        ))}
      </div>

      <Link href={link} target="_blank" className="flex items-center justify-center">
        <p className="flex text-sm text-[#CBACF9] md:text-xs lg:text-xl">
          Check Live Site
        </p>
        <ArrowUpRight className="ml-3 text-[#CBACF9]" />
      </Link>
    </div>
  );
}
