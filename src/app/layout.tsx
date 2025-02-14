import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300",
        )}
      >
        <ReactLenis root>
          {children}
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
