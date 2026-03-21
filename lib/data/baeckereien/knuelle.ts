import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

// Warm, rustic bakery — amber & wheat tones
export const theme: Record<string, string> = {
  "--primary": "oklch(0.48 0.12 45)",
  "--primary-foreground": "oklch(1.0 0 0)",
  "--secondary": "oklch(0.91 0.07 72)",
  "--secondary-foreground": "oklch(0.33 0.08 44)",
  "--muted": "oklch(0.95 0.020 78)",
  "--muted-foreground": "oklch(0.47 0.030 60)",
  "--accent": "oklch(0.93 0.035 78)",
  "--border": "oklch(0.87 0.028 72)",
  "--ring": "oklch(0.48 0.12 45)",
  "--gradient-direction": "to right",
  "--gradient-from": "oklch(0.924 0.120 85)",
  "--gradient-mid": "oklch(0.957 0.073 90)",
  "--gradient-to": "oklch(0.990 0.025 95)",
};

export const produktPromotion: ProduktPromotionData = {
  titel: "Unsere Highlights diese Woche",
  produkte: [
    {
      name: "Rübli Kuchen",
      // Tonalität: Einladend und handwerklich fokussiert
      beschreibung: "Probier mal unseren leckeren Karottenkuchen mit feinem Frosting. Handwerk, das du schmeckst! Passt perfekt zum Sonntagskaffee oder Picknick.",
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
      // Status 'eingestellt' wird über die Beschreibung kommuniziert
      beschreibung: "Kurze Info für euch: Die Lemon Tarte macht Pause und kommt im Sommer wieder in die Theke.",
      status: "eingestellt" as const,
    },
    {
      name: "Croissant",
      beschreibung: "Unsere Croissants backen wir jetzt bei 165°C – für die perfekte Goldkruste, die unsere Kunden so lieben.",
      status: "überarbeitet" as const,
    },
  ],
};

export const ankuendigungen: AnkuendigungenData = {
  ankuendigungen: [
    {
      titel: "Nächste Woche ist Ostern",
      // Fokus auf Mitarbeitende: Motivation zur aktiven Kundenansprache
      inhalt: "Liebes Team, denkt bitte daran, unsere Kunden aktiv auf das Osterfest hinzuweisen. Lasst uns gemeinsam für volle Körbchen sorgen!",
      datum: "2026-04-08",
      wichtig: false,
      bild: "/images/ankuendigungen/easter.jpg",
    },
    {
      titel: "Brezeln nicht lieferbar",
      inhalt: "Wichtige Info für den Verkauf: Die Brezeln sind heute leider verbrannt. Bitte entschuldigt das charmant bei der Kundschaft!",
      datum: "2026-03-21",
      wichtig: true,
      icon: "TriangleAlert",
    },
    {
      titel: "Gute Besserung, Laura!",
      inhalt: "Unsere Kollegin Laura Weber ist leider bis Ende der Woche krank. Wir wünschen gute Besserung und rücken im Team zusammen!",
      datum: "2026-04-08",
      wichtig: true,
    },
  ],
};