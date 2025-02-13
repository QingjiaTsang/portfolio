"use client";

import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";

type DownloadCvButtonProps = {
  className?: string;
};

export function DownloadCvButton({ className }: DownloadCvButtonProps) {
  const t = useTranslations("about.resume");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async (language: "en" | "cn") => {
    try {
      setIsLoading(true);

      const resumeKey = language === "en"
        ? env.NEXT_PUBLIC_RESUME_EN_KEY
        : env.NEXT_PUBLIC_RESUME_CN_KEY;

      const response = await fetch("/api/get-resume-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: resumeKey }),
      });

      if (!response.ok) {
        throw new Error("download failed");
      }

      const blob = await response.blob();

      const filename = language === "en"
        ? "QingjiaTsang_resume.pdf"
        : "曾庆嘉_18011819216.pdf";

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success(t("downloadSuccess"));
    }
    catch (error) {
      console.error("Download error:", error);
      toast.error(t("downloadError"));
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isLoading} asChild>
        <button
          type="button"
          disabled={isLoading}
          className={cn(
            "group relative w-full h-12 px-6",
            "bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]",
            "rounded-xl overflow-hidden",
            "transition-all duration-300",
            "hover:shadow-[0_0_20px_rgba(99,68,245,0.4)]",
            "active:scale-[0.98]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className,
          )}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
            <div className="absolute inset-0 animate-shine bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)]" />
          </div>

          <div className="relative flex items-center justify-center gap-3 font-medium text-white">
            {isLoading
              ? (
                  <div className="flex items-center gap-2">
                    <div className="size-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    {t("downloading")}
                  </div>
                )
              : (
                  <div className="flex items-center gap-2">
                    <Download className="size-4" />
                    <span className="relative">
                      {t("downloadCv")}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </div>
                )}
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-fit bg-[linear-gradient(90deg,#161a31,#06091f)] backdrop-blur-xl"
      >
        <DropdownMenuItem
          onClick={() => handleDownload("en")}
          className="cursor-pointer text-slate-300/80 focus:bg-white/[0.04] focus:text-white/90"
        >
          {t("downloadEnglish")}
        </DropdownMenuItem>
        <DropdownMenuSeparator className="h-px bg-slate-400/40" />
        <DropdownMenuItem
          onClick={() => handleDownload("cn")}
          className="cursor-pointer text-slate-300/80 focus:bg-white/[0.04] focus:text-white/90"
        >
          {t("downloadChinese")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
