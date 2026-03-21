import type { MotivationData } from "@/lib/data/motivation";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

import * as knuelle from "./knuelle";
import * as jazzback from "./jazzback";

export interface BaeckereiDaten {
  name: string;
  logo: string;
  hintergrundFarbe: string;
  motivation: MotivationData;
  produktPromotion: ProduktPromotionData;
  ankuendigungen: AnkuendigungenData;
}

// Company logo shared across all bakeries
// Replace .svg with .png when adding real logos
export const firmenLogo = "/logos/BAEKO-Logo.png";

export const baeckereien: Record<string, BaeckereiDaten> = {
  knülle: {
    name: "Bäckerei Knülle",
    logo: "/logos/bakery_knuelle.jpg",
    hintergrundFarbe: "#e0f2fe",
    ...knuelle,
  },
  jazzback: {
    name: "Jazzback",
    logo: "/logos/jazzback.svg",
    hintergrundFarbe: "#e0f2fe",
    ...jazzback,
  },
};
