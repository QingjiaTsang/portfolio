"use client";

import copy from "copy-to-clipboard";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import { DownloadCvButton } from "@/components/feature/about/download-cv-button";
import { cn } from "@/lib/utils";

const Globe = dynamic(() => import("react-globe.gl").then(mod => mod.default), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

// Note: to optimize performance in mobile devices, we use a low quality, lazy image
function ProfileImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100dvw, 50dvw"
        className={cn(
          "w-full sm:h-[276px] h-auto object-contain transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        quality={75}
      />
    </div>
  );
}

function ProfileGrids() {
  const t = useTranslations("about");

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    copy("johnlocke12321@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="mt-20">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <ProfileImage src="/assets/grid1.png" alt="grid-1" />
            <div>
              <p className="grid-headtext">{t("professional.title")}</p>
              <p className="grid-subtext">{t("professional.description")}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <ProfileImage src="/assets/grid2.png" alt="grid-2" />
            <div>
              <p className="grid-headtext">{t("learning.title")}</p>
              <p className="grid-subtext">{t("learning.description")}</p>
            </div>
          </div>
        </div>

        {/* Location grid */}
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
                labelsData={[{ lat: 40, lng: -100, text: "Guangzhou, China", color: "white", size: 15 }]}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div>
                <p className="grid-headtext">{t("location.title")}</p>
                <div className="grid-subtext">
                  {t("location.description")}
                  <ul className="list-disc pl-5">
                    <li>{t("location.languages.english")}</li>
                    <li>{t("location.languages.mandarin")}</li>
                    <li>{t("location.languages.cantonese")}</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-1 items-center max-md:pt-6 md:pt-6">
                <DownloadCvButton />
              </div>
            </div>
          </div>
        </div>

        {/* Passion grid */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <ProfileImage src="/assets/grid3.png" alt="grid-3" className="sm:h-[266px]" />
            <div>
              <p className="grid-headtext">{t("passion.title")}</p>
              <p className="grid-subtext">{t("passion.description")}</p>
            </div>
          </div>
        </div>

        {/* Contact grid */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container relative">
            <ProfileImage src="/assets/grid4.png" alt="grid-4" />
            <div className="absolute inset-x-0 bottom-16 flex w-full justify-center">
              <div>
                <p className="grid-subtext mb-4 text-center">{t("contact.title")}</p>
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
                    johnlocke12321@gmail.com
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
