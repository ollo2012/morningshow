export interface Produkt {
  name: string;
  beschreibung: string;
  preis: string;
  neu: boolean;
  bild?: string;
}

export interface ProduktPromotionData {
  titel: string;
  produkte: Produkt[];
}
