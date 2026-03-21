import Link from "next/link";
import Image from "next/image";
import Slide from "@/components/slide";
import { Badge } from "@/components/ui/badge";
import { AnkuendigungIcon } from "@/components/ankuendigung-visual";
import { ProduktStatusBadge } from "@/components/produkt-status-badge";
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Produkte
          </h3>
          <div className="flex flex-wrap gap-3">
            {produktPromotion.produkte.map((produkt, i) => (
              <Link key={i} href={`/${baeckereiSlug}/produkt/${i}`}>
                <div className="group flex h-44 w-28 cursor-pointer flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:bg-accent sm:h-48 sm:w-32">
                  <div className="relative h-24 w-full sm:h-28">
                    <Image
                      src={PRODUKT_BILDER[i % PRODUKT_BILDER.length]}
                      alt={produkt.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-2">
                    <span className="line-clamp-2 text-xs font-semibold leading-tight">
                      {produkt.name}
                    </span>
                    {produkt.status && (
                      <ProduktStatusBadge status={produkt.status} />
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Ankündigungen */}
        <section className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Ankündigungen
          </h3>
          <div className="flex flex-wrap gap-3">
            {ankuendigungen.ankuendigungen.map((item, i) => (
              <Link key={i} href={`/${baeckereiSlug}/ankuendigung/${i}`}>
                <div
                  className={`group flex h-44 w-28 cursor-pointer flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:bg-accent sm:h-48 sm:w-32 ${
                    item.wichtig ? "border-destructive/40 bg-destructive/5" : ""
                  }`}
                >
                  <div className="flex h-24 w-full items-center justify-center bg-muted sm:h-28">
                    {item.icon ? (
                      <AnkuendigungIcon icon={item.icon} className="h-10 w-10 text-muted-foreground" />
                    ) : (
                      <span className="text-3xl">📢</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 p-2">
                    <span className="line-clamp-2 text-xs font-semibold leading-tight">
                      {item.titel}
                    </span>
                    {item.wichtig && (
                      <Badge variant="destructive" className="w-fit text-[10px]">
                        WICHTIG
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Slide>
  );
}
