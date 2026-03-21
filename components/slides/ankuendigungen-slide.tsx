import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";
import type { SlideLogos } from "@/components/slides/types";

interface AnkuendigungenSlideProps extends SlideLogos {
  data: AnkuendigungenData;
}

export default function AnkuendigungenSlide({
  data,
  firmenLogo,
  baeckereiLogo,
  baeckereiName,
}: AnkuendigungenSlideProps) {
  return (
    <Slide
      titel="Ankündigungen"
      untertitel="Wichtige Infos für das Team"
      firmenLogo={firmenLogo}
      baeckereiLogo={baeckereiLogo}
      baeckereiName={baeckereiName}
    >
      <div className="space-y-4">
        {data.ankuendigungen.map((item) => (
          <Card
            key={item.titel}
            className={
              item.wichtig ? "border-destructive/50 bg-destructive/5" : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {item.titel}
                {item.wichtig && <Badge variant="destructive">WICHTIG</Badge>}
              </CardTitle>
              <span className="text-xs text-muted-foreground">
                {new Date(item.datum).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.inhalt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
