import type { MotivationData } from "@/lib/data/motivation";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

export const motivation: MotivationData = {
  spruch: "Heute ist ein toller Tag",
  autor: "Der Chef",
  // Tonalität: Regionaler Dialekt für interne Nähe gemäß interner Strategie
  tagesTipp: "Dä Kaffee he is echt lecker – gönnt euch mal 'ne kurze Pause!",
};

export const produktPromotion: ProduktPromotionData = {
  titel: "Neue Produkte",
  produkte: [
    {
      name: "Rübli Kuchen",
      // Tonalität: Knapp und einladendes "Du" gemäß externer Strategie
      beschreibung: "Probier mal unseren leckeren Karottenkuchen mit feinem Frosting. Handwerk, das du schmeckst!",
      preis: "4,90€/Stück",
      neu: true,
      bild: "ai_content/Testshare1.jpeg",
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