import type { MotivationData } from "@/lib/data/motivation";
import type { ProduktPromotionData } from "@/lib/data/produkt-promotion";
import type { AnkuendigungenData } from "@/lib/data/ankuendigungen";

export const motivation: MotivationData = {
  spruch:
    "Backen ist Jazz – Improvisation mit den besten Zutaten ergibt die süßeste Melodie.",
  autor: "Gründerin Lisa Jazzback",
  tagesTipp:
    "Probiere heute eine neue Technik beim Formen aus. Kreativität hält uns lebendig – und unsere Kunden kommen genau deswegen zu uns!",
};

export const produktPromotion: ProduktPromotionData = {
  titel: "Jazzback Neuheiten & Specials",
  produkte: [
    {
      name: "Blueberry-Cheesecake Swirl",
      beschreibung:
        "Cremiger Cheesecake trifft auf saftigen Blaubeerstrudel – unser neues Signature-Stück.",
      preis: "3,80 €",
      neu: true,
      bild: "/images/produkte/blueberry-cheesecake.svg",
    },
    {
      name: "Sourdough Jazz Loaf",
      beschreibung:
        "48-Stunden Sauerteig mit geröstetem Sesam und Meersalzkruste.",
      preis: "5,50 €",
      neu: true,
      bild: "/images/produkte/sourdough-jazz.svg",
    },
    {
      name: "Espresso-Walnuss Brownie",
      beschreibung:
        "Intensiver Kakao mit echtem Espresso – der perfekte Nachmittagskick.",
      preis: "2,90 €",
      neu: false,
      bild: "/images/produkte/espresso-brownie.svg",
    },
    {
      name: "Zimt-Kardamom Schnecke",
      beschreibung:
        "Fluffiger Hefeteig mit orientalischer Gewürznote – warm am besten!",
      preis: "2,50 €",
      neu: false,
      bild: "/images/produkte/zimt-kardamom.svg",
    },
  ],
};

export const ankuendigungen: AnkuendigungenData = {
  ankuendigungen: [
    {
      titel: "Pop-Up Event am Samstag",
      inhalt:
        "Diesen Samstag, 22.03., veranstalten wir ein Pop-Up im Stadtpark. Wer beim Aufbau helfen kann, bitte bei Tom melden!",
      datum: "2026-03-22",
      wichtig: true,
    },
    {
      titel: "Neue Schichtpläne ab April",
      inhalt:
        "Die neuen Schichtpläne für April hängen ab Montag aus. Tauschwünsche bitte bis 28.03. einreichen.",
      datum: "2026-03-23",
      wichtig: false,
    },
    {
      titel: "Instagram-Schulung",
      inhalt:
        "Am 02.04. gibt es eine kurze Schulung zum Thema Food-Fotografie für unseren Instagram-Kanal. Alle sind willkommen!",
      datum: "2026-04-02",
      wichtig: false,
    },
  ],
};
