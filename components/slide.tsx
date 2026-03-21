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
  id?: string;
}

export default function Slide({
  titel,
  untertitel,
  firmenLogo,
  baeckereiLogo,
  baeckereiName,
  children,
  className,
  id,
}: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex h-full w-full shrink-0 snap-center flex-col bg-muted/30 p-4 sm:p-6 md:p-10",
        className
      )}
    >
      {/* Header row: title left, logos right */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {titel}
          </h2>
          {untertitel && (
            <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
              {untertitel}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src={firmenLogo}
            alt="Firmenlogo"
            width={64}
            height={64}
            className="h-10 w-auto sm:h-12 md:h-16 object-contain"
          />
          <span className="text-sm font-medium text-muted-foreground sm:text-base md:text-lg">
            &times;
          </span>
          <Image
            src={baeckereiLogo}
            alt={`${baeckereiName} Logo`}
            width={64}
            height={64}
            className="h-10 w-auto sm:h-12 md:h-16 object-contain"
          />
        </div>
      </div>

      {/* Content area */}
      <div className="mt-4 flex flex-1 flex-col sm:mt-6 md:mt-8">

        {/* Rounded content box */}
        <div className="flex-1 overflow-y-auto rounded-2xl bg-card p-4 ring-1 ring-border sm:rounded-3xl sm:p-6 md:p-8">
          {children}
        </div>
      </div>
    </section>
  );
}
