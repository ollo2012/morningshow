import Link from "next/link";
import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SlideLogos } from "@/components/slides/types";
import type { MotivationData } from "@/lib/data/motivation";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

interface UebersichtSlideProps extends SlideLogos {
  baeckereiSlug: string;
  motivation: MotivationData;
  produktPromotion: ProduktPromotionData;
  ankuendigungen: AnkuendigungenData;
}

export default function UebersichtSlide({
  baeckereiSlug,
  motivation,
  produktPromotion,
  ankuendigungen,
  firmenLogo,
  baeckereiLogo,
  baeckereiName,
}: UebersichtSlideProps) {
  const wichtigeAnkuendigungen = ankuendigungen.ankuendigungen.filter(
    (a) => a.wichtig
  ).length;

  const slides = [
    {
      href: `/${baeckereiSlug}/motivation`,
      titel: "Motivation",
      untertitel: "Dein Tagesimpuls",
      preview: (
        <p className="line-clamp-2 text-sm italic text-muted-foreground">
          &ldquo;{motivation.spruch}&rdquo;
        </p>
      ),
    },
    {
      href: `/${baeckereiSlug}/produkt-promotion`,
      titel: "Produkt Promotion",
      untertitel: produktPromotion.titel,
      preview: (
        <div className="flex flex-wrap gap-1">
          {produktPromotion.produkte.slice(0, 3).map((p) => (
            <Badge key={p.name} variant={p.neu ? "default" : "secondary"}>
              {p.name}
            </Badge>
          ))}
          {produktPromotion.produkte.length > 3 && (
            <Badge variant="outline">
              +{produktPromotion.produkte.length - 3}
            </Badge>
          )}
        </div>
      ),
    },
    {
      href: `/${baeckereiSlug}/ankuendigungen`,
      titel: "Ankündigungen",
      untertitel: `${ankuendigungen.ankuendigungen.length} Einträge`,
      preview: (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {ankuendigungen.ankuendigungen[0]?.titel}
          </span>
          {wichtigeAnkuendigungen > 0 && (
            <Badge variant="destructive">{wichtigeAnkuendigungen} wichtig</Badge>
          )}
        </div>
      ),
    },
  ];

  return (
    <Slide
      id="uebersicht"
      titel="Übersicht"
      untertitel="Alle Themen auf einen Blick"
      firmenLogo={firmenLogo}
      baeckereiLogo={baeckereiLogo}
      baeckereiName={baeckereiName}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {slides.map((slide) => (
          <Link key={slide.href} href={slide.href}>
            <Card className="h-full cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-lg">{slide.titel}</CardTitle>
                <p className="text-xs text-muted-foreground">{slide.untertitel}</p>
              </CardHeader>
              <CardContent>{slide.preview}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Slide>
  );
}
