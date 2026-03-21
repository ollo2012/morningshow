import type { MotivationData } from "@/lib/data/motivation";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

export const motivation: MotivationData = {
  spruch: "Heute ist ein toller Tag",
  autor: "Der Chef",
  // Tonalität: Regionaler Dialekt für interne Nähe gemäß interner Strategie
  tagesTipp: "Dä Kaffee he is echt lecker – jönnt euch mal ne kurze Pause!",
};

export const produktPromotion: ProduktPromotionData = {
  titel: "Neue Produkte",
  produkte: [
    {
      name: "Rübli Kuchen",
      // Tonalität: Knappes und einladendes "Du" gemäß externer Strategie
      beschreibung: "Probier mal unseren leckeren Karottenkuchen mit feinem Frosting. Handwerk, das du schmeckst!",
      preis: "4,90 € / Stück",
      neu: true,
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
  ],
};

export const ankuendigungen: AnkuendigungenData = {
  ankuendigungen: [
    {
      titel: "Nächste Woche ist Ostern",
      inhalt: "Liebes Team, denkt bitte daran, unsere Kunden aktiv auf das bevorstehende Osterfest hinzuweisen.",
      datum: "2026-04-08",
      wichtig: true,
    },
    {
      titel: "Brezeln werden nicht geliefert!",
      inhalt: "Wichtige Info für den Verkauf: Die Brezeln sind leider verbrannt und stehen heute nicht zur Verfügung.",
      datum: "2026-03-21",
      wichtig: true,
    },
  ],
};