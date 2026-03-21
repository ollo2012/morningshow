"use client";

import { cn } from "@/lib/utils";

export type ScrollRichtung = "horizontal" | "vertikal";

interface SlideshowProps {
  children: React.ReactNode;
  richtung?: ScrollRichtung;
  className?: string;
}

export default function Slideshow({
  children,
  richtung = "horizontal",
  className,
}: SlideshowProps) {
  const isHorizontal = richtung === "horizontal";

  return (
    <div
      className={cn(
        "flex h-screen snap-mandatory overflow-hidden",
        isHorizontal
          ? "flex-row snap-x overflow-x-auto"
          : "flex-col snap-y overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
