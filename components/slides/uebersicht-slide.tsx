import Link from "next/link";
import Image from "next/image";
import Slide from "@/components/slide";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnkuendigungIcon, AnkuendigungImage } from "@/components/ankuendigung-visual";
import type { SlideLogos } from "@/components/slides/types";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

const PRODUKT_BILDER = [
  "/images/produkte/landbrot.svg",
  "/images/produkte/buttercroissant.svg",
  "/images/produkte/dinkel-vollkorn.svg",
  "/images/produkte/blueberry-cheesecake.svg",
  "/images/produkte/espresso-brownie.svg",
  "/images/produkte/sourdough-jazz.svg",
  "/images/produkte/zimt-kardamom.svg",
];

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
          <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground sm:text-lg">
            Produkte
          </h3>
          <div className="space-y-2">
            {produktPromotion.produkte.map((produkt, i) => {
              const bildSrc = produkt.bild ?? PRODUKT_BILDER[i % PRODUKT_BILDER.length];
              return (
                <Link key={i} href={`/${baeckereiSlug}/produkt/${i}`}>
                  <Card className="mb-4 cursor-pointer overflow-hidden transition-colors hover:bg-accent hover:text-accent-foreground">
                    <div className="flex">
                      <div className="relative h-auto w-20 shrink-0 sm:w-24">
                        <Image
                          src={bildSrc}
                          alt={produkt.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardHeader className="py-3">
                          <CardTitle className="flex items-center justify-between gap-2 text-lg sm:text-xl">
                            <span>{produkt.name}</span>
                            <div className="flex items-center gap-2 shrink-0">
                              {produkt.neu && <Badge>NEU</Badge>}
                              <span className="font-semibold">{produkt.preis}</span>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-3 pt-0">
                          <p className="line-clamp-1 text-base text-muted-foreground sm:text-lg">
                            {produkt.beschreibung}
                          </p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Ankündigungen */}
        <section className="flex flex-col gap-3">
          <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-4 sm:text-lg">
            Ankündigungen
          </h3>
          <div className="space-y-2">
            {ankuendigungen.ankuendigungen.map((item, i) => (
              <Link key={i} href={`/${baeckereiSlug}/ankuendigung/${i}`}>
                <Card
                  className={`mb-4 cursor-pointer overflow-hidden transition-colors hover:bg-accent hover:text-accent-foreground ${
                    item.wichtig ? "border-destructive/40 bg-destructive/5" : ""
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
                      <CardHeader className="py-3">
                        <CardTitle className="flex items-center justify-between gap-2 text-lg sm:text-xl">
                          <span className="flex items-center gap-2">
                            {item.icon && <AnkuendigungIcon icon={item.icon} className="h-5 w-5" />}
                            {item.titel}
                          </span>
                          {item.wichtig && (
                            <Badge variant="destructive" className="shrink-0">
                              WICHTIG
                            </Badge>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-3 pt-0">
                        <p className="line-clamp-1 text-base text-muted-foreground sm:text-lg">
                          {item.inhalt}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Slide>
  );
}
