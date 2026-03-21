import type { MotivationData } from "@/lib/data/motivation";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

import * as knuelle from "./knuelle";
import * as jazzback from "./jazzback";

export interface BaeckereiDaten {
  name: string;
  motivation: MotivationData;
  produktPromotion: ProduktPromotionData;
  ankuendigungen: AnkuendigungenData;
}

export const baeckereien: Record<string, BaeckereiDaten> = {
  knülle: {
    name: "Bäckerei Knülle",
    ...knuelle,
  },
  jazzback: {
    name: "Jazzback",
    ...jazzback,
  },
};
