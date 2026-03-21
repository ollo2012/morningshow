import { cn } from "@/lib/utils";

interface SlideProps {
  titel: string;
  untertitel?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Slide({
  titel,
  untertitel,
  children,
  className,
}: SlideProps) {
  return (
    <section
      className={cn(
        "flex h-full w-full shrink-0 snap-center flex-col items-center justify-center gap-6 px-8 py-12",
        className
      )}
    >
      <div className="w-full max-w-2xl space-y-2 text-center">
        <h2 className="text-4xl font-bold tracking-tight">{titel}</h2>
        {untertitel && (
          <p className="text-lg text-muted-foreground">{untertitel}</p>
        )}
      </div>
      <div className="w-full max-w-2xl">{children}</div>
    </section>
  );
}
