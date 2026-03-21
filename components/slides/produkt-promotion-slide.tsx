import Image from "next/image";
import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { SlideLogos } from "@/components/slides/types";

interface ProduktPromotionSlideProps extends SlideLogos {
  data: ProduktPromotionData;
}

export default function ProduktPromotionSlide({
  data,
  firmenLogo,
  baeckereiLogo,
  baeckereiName,
  hintergrundFarbe,
}: ProduktPromotionSlideProps) {
  return (
    <Slide
      titel="Produkt Promotion"
      untertitel={data.titel}
      firmenLogo={firmenLogo}
      baeckereiLogo={baeckereiLogo}
      baeckereiName={baeckereiName}
      hintergrundFarbe={hintergrundFarbe}
    >
      <div className="space-y-4">
        {data.produkte.map((produkt) => (
          <Card key={produkt.name} className="overflow-hidden">
            <div className="flex">
              {produkt.bild && (
                <div className="relative h-auto w-24 shrink-0">
                  <Image
                    src={produkt.bild}
                    alt={produkt.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {produkt.name}
                    {produkt.neu && <Badge>NEU</Badge>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-start justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    {produkt.beschreibung}
                  </p>
                  <span className="shrink-0 font-semibold">{produkt.preis}</span>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
