"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const aktuelleSlide = Math.min(
    Math.round((fortschritt / 100) * (slideCount - 1)),
    slideCount - 1
  );

  const scrollToSlide = useCallback(
    (index: number) => {
      const el = containerRef.current;
      if (!el) return;
      if (isHorizontal) {
        el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
      } else {
        el.scrollTo({ top: index * el.clientHeight, behavior: "smooth" });
      }
    },
    [isHorizontal]
  );

  return (
    <div className="relative flex h-screen flex-col">
      {/* Progress bar */}
      <div className="px-4 py-2 sm:px-6 md:px-10">
        <Progress value={fortschritt} className="h-2" />
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

      {/* Bottom nav */}
      <nav className="flex items-center justify-center gap-6 px-4 py-3">
        <button
          onClick={() => scrollToSlide(aktuelleSlide - 1)}
          disabled={aktuelleSlide === 0}
          className="rounded-full bg-foreground p-2 text-background transition-opacity hover:opacity-80 disabled:opacity-20"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollToSlide(aktuelleSlide + 1)}
          disabled={aktuelleSlide === slideCount - 1}
          className="rounded-full bg-foreground p-2 text-background transition-opacity hover:opacity-80 disabled:opacity-20"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </nav>
    </div>
  );
}
