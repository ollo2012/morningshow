import Image from "next/image";
import { cn } from "@/lib/utils";

interface SlideProps {
  titel: string;
  untertitel?: string;
  firmenLogo: string;
  baeckereiLogo: string;
  baeckereiName: string;
  hintergrundFarbe?: string;
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
  hintergrundFarbe = "#e0f2fe",
  children,
  className,
  id,
}: SlideProps) {
  return (
    <section
      id={id}
      style={{ backgroundColor: hintergrundFarbe }}
      className={cn(
        "flex h-full w-full shrink-0 snap-center p-3 sm:p-5 md:p-8",
        className
      )}
    >
      {/* Rounded box wrapping the entire slide content */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-card p-4 ring-1 ring-border sm:rounded-3xl sm:p-6 md:p-8">
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
        <div className="mt-4 flex-1 overflow-y-auto px-1 pt-1 sm:mt-6 sm:px-2 sm:pt-2 md:mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
