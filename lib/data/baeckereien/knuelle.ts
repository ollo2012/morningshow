import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

export const produktPromotion: ProduktPromotionData = {
  titel: "Neue Produkte",
  produkte: [
    {
      name: "Rübli Kuchen",
      // Tonalität: Knapp und einladendes "Du" gemäß externer Strategie
      beschreibung: "Probier mal unseren leckeren Karottenkuchen mit feinem Frosting. Handwerk, das du schmeckst!",
      preis: "4,90€/Stück",
      neu: true,
      bild: "/images/produkte/buttercroissant.svg",
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
  ],
};