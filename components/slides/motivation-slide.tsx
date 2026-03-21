import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MotivationData } from "@/lib/data/motivation";
import type { SlideLogos } from "@/components/slides/types";

interface MotivationSlideProps extends SlideLogos {
  data: MotivationData;
}

export default function MotivationSlide({
  data,
  firmenLogo,
  baeckereiLogo,
  baeckereiName,
}: MotivationSlideProps) {
  return (
    <Slide
      titel="Motivation"
      untertitel="Dein Tagesimpuls"
      firmenLogo={firmenLogo}
      baeckereiLogo={baeckereiLogo}
      baeckereiName={baeckereiName}
    >
      <div className="space-y-4">
        <Card>
          <CardContent>
            <blockquote className="border-l-4 border-primary pl-4 text-lg italic leading-relaxed sm:text-xl md:text-2xl">
              &ldquo;{data.spruch}&rdquo;
            </blockquote>
          </CardContent>
          <CardFooter>
            <span className="text-sm text-muted-foreground">
              — {data.autor}
            </span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tages-Tipp</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{data.tagesTipp}</p>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
