import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

import produktPromotionKnulle from "@/data/baeckereien/knuelle/produktPromotion.json";
import ankuendigungenKnulle from "@/data/baeckereien/knuelle/ankuendigungen.json";
import produktPromotionJazzback from "@/data/baeckereien/jazzback/produktPromotion.json";
import ankuendigungenJazzback from "@/data/baeckereien/jazzback/ankuendigungen.json";

export interface BaeckereiDaten {
  name: string;
  logo: string;
  theme?: Record<string, string>;
  produktPromotion: ProduktPromotionData;
  ankuendigungen: AnkuendigungenData;
}

// Company logo shared across all bakeries
// Replace .svg with .png when adding real logos
export const firmenLogo = "/logos/BAEKO-Logo.png";

export const baeckereien: Record<string, BaeckereiDaten> = {
  knülle: {
    name: "Bäckerei Knülle",
    logo: "/logos/knuelle.png",
    produktPromotion: produktPromotionKnulle as ProduktPromotionData,
    ankuendigungen: { ankuendigungen: ankuendigungenKnulle } as AnkuendigungenData,
  },
  jazzback: {
    name: "Jazzback",
    logo: "/logos/jazzback.png",
    produktPromotion: produktPromotionJazzback as ProduktPromotionData,
    ankuendigungen: { ankuendigungen: ankuendigungenJazzback } as AnkuendigungenData,
  },
};
