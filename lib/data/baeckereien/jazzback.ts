import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

// Cool jazz club vibes — deep indigo & slate
export const theme: Record<string, string> = {
  "--primary": "oklch(0.46 0.20 265)",
  "--primary-foreground": "oklch(1.0 0 0)",
  "--secondary": "oklch(0.89 0.07 265)",
  "--secondary-foreground": "oklch(0.28 0.14 265)",
  "--muted": "oklch(0.94 0.020 265)",
  "--muted-foreground": "oklch(0.48 0.040 265)",
  "--accent": "oklch(0.93 0.040 265)",
  "--border": "oklch(0.88 0.030 265)",
  "--ring": "oklch(0.46 0.20 265)",
  "--gradient-direction": "to right",
  "--gradient-from": "oklch(0.715 0.149 211)",
  "--gradient-mid": "oklch(0.670 0.182 235)",
  "--gradient-to": "oklch(0.623 0.214 259)",
  "--font-heading": "var(--font-jazz-heading)",
};

export const produktPromotion: ProduktPromotionData = {
  titel: "Fresh Vibes in der Theke – Unsere Highlights",
  produkte: [
    {
      name: "Rübli Kuchen",
      beschreibung:
        "Unser neuer Star am Backhimmel! Saftiger Karottenkuchen mit fluffigem Frosting – der perfekte Begleiter für den entspannten Sonntagskaffee oder das Picknick im Park.",
      preis: "4,90 € / Stück",
      status: "neu" as const,
      allergene: ["gluten", "ei", "milch", "nüsse"],
      naehrwerte: {
        portionsgroesse: "100 g",
        kalorien: "342 kcal",
        kohlenhydrate: "48 g",
        davonZucker: "28 g",
        fett: "14 g",
        davonGesaettigt: "5 g",
        eiweiss: "5 g",
        salz: "0,4 g",
      },
    },
    {
      name: "Lemon Tarte",
      beschreibung:
        "Kurze Pause für unsere Lemon Tarte. Sie verabschiedet sich in den Winterschlaf, ist aber pünktlich zum Sommer-Release wieder für euch am Start!",
      status: "eingestellt" as const,
    },
    {
      name: "Buttercroissant",
      beschreibung:
        "Kleines Upgrade in der Performance: Wir backen unsere Croissants jetzt bei 165°C für den extra knusprigen Gold-Vibe. Handwerk, das man schmeckt!",
      status: "überarbeitet" as const,
    },
  ],
};

export const ankuendigungen: AnkuendigungenData = {
  ankuendigungen: [
    {
      titel: "Oster-Countdown läuft! 🐰",
      inhalt:
        "Hey Team, nächste Woche ist schon Ostern! Schnappt euch eure gute Laune und weist unsere Kund:innen aktiv darauf hin, damit niemand ohne Feiertags-Leckereien dasteht.",
      datum: "2026-04-08",
      wichtig: false,
      icon: "CalendarDays",
    },
    {
      titel: "Brezel-Ausfall heute 🥨",
      inhalt:
        "Wichtige Info für die Backstage: Die Brezeln sind leider etwas zu heiß geworden (verbrannt) und heute nicht lieferbar. Bitte entschuldigt das charmant bei der Kundschaft!",
      datum: "2026-04-08",
      wichtig: true,
      icon: "TriangleAlert",
    },
    {
      titel: "Gute Besserung, Laura! 💐",
      inhalt:
        "Unsere Kollegin Laura Weber hat es leider erwischt. Sie fällt bis Ende der Woche aus. Lasst uns im Team zusammenrücken und ihr eine schnelle Genesung wünschen!",
      datum: "2026-04-08",
      wichtig: true,
      icon: "Heart",
    },
  ],
};