"use client";

import copy from "copy-to-clipboard";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import { ContactButton } from "@/components/feature/about/contact-button";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

const Globe = dynamic(() => import("react-globe.gl").then(mod => mod.default), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

// Note: to avoid GPU overload in mobile devices, we use a low quality, lazy image
function ProfileImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={cn("w-full sm:h-[276px] h-auto object-contain", className)}
      loading="lazy"
      quality={75}
    />
  );
}

// Progressive image
// function ProgressiveImage({ src, alt }: { src: string; alt: string }) {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <div className="relative">
//       {isLoading && (
//         <div className="absolute inset-0 animate-pulse bg-gray-200" />
//       )}
//       <Image
//         src={src}
//         alt={alt}
//         width={0}
//         height={0}
//         sizes="100vw"
//         className={cn(
//           "h-auto w-full transition-opacity duration-300",
//           isLoading ? "opacity-0" : "opacity-100",
//         )}
//         onLoad={() => setIsLoading(false)}
//         loading="lazy"
//         quality={75}
//       />
//     </div>
//   );
// }

function ProfileGrids() {
  const lenis = useLenis();

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    copy("johnlocke123@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleContactClick = () => {
    lenis?.scrollTo("#contact");
  };

  return (
    <section className="mt-20">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <ProfileImage src="/assets/grid1.png" alt="grid-1" />

            <div>
              <p className="grid-headtext">Professional Experience</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <ProfileImage src="/assets/grid2.png" alt="grid-2" />
            <div>
              <p className="grid-headtext">Continuous Learning</p>
              <p className="grid-subtext">
                I'm passionate about staying up-to-date with emerging technologies and best practices, constantly expanding my
                knowledge through hands-on projects and research.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container flex">
            <div className="flex h-fit w-full cursor-pointer items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="/assets/globe/earth-night.jpg"
                bumpImageUrl="/assets/globe/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: "Rjieka, Croatia", color: "white", size: 15 }]}
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div>
                <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
                <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
              </div>
              <div className="md:pt-6 max-md:pt-6 flex-1 flex items-center">
                <ContactButton onClick={handleContactClick} />
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <ProfileImage src="/assets/grid3.png" alt="grid-3" className="sm:h-[266px]" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession — it&apos;s my passion.  I'm passionate about writing clean, maintainable code that follows best practices and design principles. Code quality and readability are always my top priorities.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container relative">
            <ProfileImage
              src="/assets/grid4.png"
              alt="grid-4"
            />
            <div className="absolute inset-x-0 flex justify-center bottom-16 w-full">
              <div>
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <Image
                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                    alt="copy"
                    width={24}
                    height={24}
                    loading="lazy"
                    className="size-6 shrink-0"
                  />
                  <p className="text-gray_gradient truncate font-medium text-white md:text-lg lg:text-xl">
                    johnlocke123@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileGrids;
