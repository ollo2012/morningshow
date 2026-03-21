"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const slideCount = Children.count(children);
  const [fortschritt, setFortschritt] = useState(0);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const scrollPos = isHorizontal ? el.scrollLeft : el.scrollTop;
    const scrollMax = isHorizontal
      ? el.scrollWidth - el.clientWidth
      : el.scrollHeight - el.clientHeight;

    if (scrollMax <= 0) {
      setFortschritt(100);
      return;
    }

    setFortschritt((scrollPos / scrollMax) * 100);
  }, [isHorizontal]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Derive current slide index from progress
  const aktuelleSlide = Math.min(
    Math.round((fortschritt / 100) * (slideCount - 1)),
    slideCount - 1
  );

  return (
    <div className="relative flex h-screen flex-col">
      {/* Progress bar */}
      <div className="flex items-center gap-3 px-4 py-2 sm:px-6 md:px-10">
        <Progress value={fortschritt} className="h-2" />
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {aktuelleSlide + 1}/{slideCount}
        </span>
      </div>

      {/* Slides */}
      <div
        ref={containerRef}
        className={cn(
          "flex flex-1 snap-mandatory overflow-hidden",
          isHorizontal
            ? "flex-row snap-x overflow-x-auto"
            : "flex-col snap-y overflow-y-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
