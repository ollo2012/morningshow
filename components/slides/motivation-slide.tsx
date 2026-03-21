import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MotivationData } from "@/lib/data/motivation";

interface MotivationSlideProps {
  data: MotivationData;
}

export default function MotivationSlide({ data }: MotivationSlideProps) {
  return (
    <Slide titel="Motivation" untertitel="Dein Tagesimpuls">
      <Card>
        <CardContent>
          <blockquote className="border-l-4 border-primary pl-4 text-xl italic leading-relaxed">
            &ldquo;{data.spruch}&rdquo;
          </blockquote>
        </CardContent>
        <CardFooter>
          <span className="text-sm text-muted-foreground">
            — {data.autor}
          </span>
        </CardFooter>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Tages-Tipp</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{data.tagesTipp}</p>
        </CardContent>
      </Card>
    </Slide>
  );
}
