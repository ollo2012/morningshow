export type Allergen =
  | "gluten"
  | "milch"
  | "ei"
  | "nüsse"
  | "soja"
  | "sesam"
  | "erdnüsse"
  | "lupine";

export interface Produkt {
  name: string;
  beschreibung: string;
  preis: string;
  neu: boolean;
  bild?: string;
  allergene?: Allergen[];
}

export interface ProduktPromotionData {
  titel: string;
  produkte: Produkt[];
}
