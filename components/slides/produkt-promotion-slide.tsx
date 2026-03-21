import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";

interface ProduktPromotionSlideProps {
  data: ProduktPromotionData;
}

export default function ProduktPromotionSlide({
  data,
}: ProduktPromotionSlideProps) {
  return (
    <Slide titel="Produkt Promotion" untertitel={data.titel}>
      <div className="space-y-4">
        {data.produkte.map((produkt) => (
          <Card key={produkt.name}>
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
          </Card>
        ))}
      </div>
    </Slide>
  );
}
