import copy from "copy-to-clipboard";
import Image from "next/image";
import { useState } from "react";
import Globe from "react-globe.gl";

import { cn } from "@/lib/utils";

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
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    copy("adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="my-20">
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
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
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
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
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
          <div className="grid-container">
            <ProfileImage src="/assets/grid4.png" alt="grid-4" className="h-auto object-cover sm:h-[276px] sm:object-top md:h-[126px]" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <Image
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                  width={24}
                  height={24}
                  className="size-6"
                  loading="lazy"
                />
                <p className="text-gray_gradient font-medium text-white md:text-xl lg:text-2xl">
                  adrian@jsmastery.pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileGrids;
