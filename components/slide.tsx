import Image from "next/image";
import { cn } from "@/lib/utils";

interface SlideProps {
  titel: string;
  untertitel?: string;
  firmenLogo: string;
  baeckereiLogo: string;
  baeckereiName: string;
  children: React.ReactNode;
  className?: string;
}

export default function Slide({
  titel,
  untertitel,
  firmenLogo,
  baeckereiLogo,
  baeckereiName,
  children,
  className,
}: SlideProps) {
  return (
    <section
      className={cn(
        "relative flex h-full w-full shrink-0 snap-center flex-col bg-muted/30 p-4 sm:p-6 md:p-10",
        className
      )}
    >
      {/* Corner logos */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10">
        <Image
          src={firmenLogo}
          alt="Firmenlogo"
          width={64}
          height={64}
          className="h-10 w-auto sm:h-12 md:h-16 object-contain"
        />
      </div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10">
        <Image
          src={baeckereiLogo}
          alt={`${baeckereiName} Logo`}
          width={64}
          height={64}
          className="h-10 w-auto sm:h-12 md:h-16 object-contain"
        />
      </div>

      {/* Content area */}
      <div className="mt-20 flex flex-1 flex-col sm:mt-24 md:mt-28">
        {/* Left-aligned header */}
        <div className="mb-6 space-y-1 md:mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {titel}
          </h2>
          {untertitel && (
            <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
              {untertitel}
            </p>
          )}
        </div>

        {/* Rounded content box */}
        <div className="flex-1 overflow-y-auto rounded-2xl bg-card p-4 ring-1 ring-border sm:rounded-3xl sm:p-6 md:p-8">
          {children}
        </div>
      </div>
    </section>
  );
}
