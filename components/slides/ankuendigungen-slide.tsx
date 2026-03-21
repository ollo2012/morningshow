import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnkuendigungIcon, AnkuendigungImage } from "@/components/ankuendigung-visual";
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
      titel="Wichtige Hinweise"
      untertitel="Wichtige Infos für das Team"
      firmenLogo={firmenLogo}
      baeckereiLogo={baeckereiLogo}
      baeckereiName={baeckereiName}
    >
      <div className="space-y-4">
        {data.ankuendigungen.map((item) => (
          <Card
            key={item.titel}
            className={`overflow-hidden ${
              item.wichtig ? "border-destructive/50 bg-destructive/5" : ""
            }`}
          >
            <div className="flex">
              {item.bild && (
                <AnkuendigungImage
                  bild={item.bild}
                  alt={item.titel}
                  className="h-auto w-20 sm:w-24"
                />
              )}
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {item.icon && <AnkuendigungIcon icon={item.icon} className="h-5 w-5" />}
                    {item.titel}
                    {item.wichtig && <Badge variant="destructive">WICHTIG</Badge>}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground sm:text-base">
                    {new Date(item.datum).toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground sm:text-lg">{item.inhalt}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
