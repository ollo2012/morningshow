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
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

interface UebersichtSlideProps extends SlideLogos {
  baeckereiSlug: string;
  produktPromotion: ProduktPromotionData;
  ankuendigungen: AnkuendigungenData;
}

export default function UebersichtSlide({
  baeckereiSlug,
  produktPromotion,
  ankuendigungen,
  firmenLogo,
  baeckereiLogo,
  baeckereiName,
}: UebersichtSlideProps) {
  return (
    <Slide
      id="uebersicht"
      titel="Übersicht"
      untertitel="Produkte & Ankündigungen"
      firmenLogo={firmenLogo}
      baeckereiLogo={baeckereiLogo}
      baeckereiName={baeckereiName}
    >
      <div className="flex flex-col gap-6">
        {/* Produkte */}
        <section className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Produkte
          </h3>
          <div className="space-y-2">
            {produktPromotion.produkte.map((produkt, i) => (
              <Link key={i} href={`/${baeckereiSlug}/produkt/${i}`}>
                <Card className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground mb-4">
                  <CardHeader className="py-3">
                    <CardTitle className="flex items-center justify-between gap-2 text-base">
                      <span>{produkt.name}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        {produkt.neu && <Badge>NEU</Badge>}
                        <span className="font-semibold">{produkt.preis}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3 pt-0">
                    <p className="line-clamp-1 text-sm text-muted-foreground">
                      {produkt.beschreibung}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Ankündigungen */}
        <section className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Ankündigungen
          </h3>
          <div className="space-y-2">
            {ankuendigungen.ankuendigungen.map((item, i) => (
              <Link key={i} href={`/${baeckereiSlug}/ankuendigung/${i}`}>
                <Card
                  className={`cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground ${
                    item.wichtig ? "border-destructive/40 bg-destructive/5" : ""
                  }`}
                >
                  <CardHeader className="py-3">
                    <CardTitle className="flex items-center justify-between gap-2 text-base">
                      <span>{item.titel}</span>
                      {item.wichtig && (
                        <Badge variant="destructive" className="shrink-0">
                          WICHTIG
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3 pt-0">
                    <p className="line-clamp-1 text-sm text-muted-foreground">
                      {item.inhalt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Slide>
  );
}
