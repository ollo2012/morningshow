export type Allergen =
  | "gluten"
  | "milch"
  | "ei"
  | "nüsse"
  | "soja"
  | "sesam"
  | "erdnüsse"
  | "lupine";

export interface Naehrwerte {
  kalorien: string;
  kohlenhydrate: string;
  davonZucker: string;
  fett: string;
  davonGesaettigt: string;
  eiweiss: string;
  salz: string;
  portionsgroesse: string;
}

export interface Produkt {
  name: string;
  beschreibung: string;
  preis: string;
  neu: boolean;
  bild?: string;
  allergene?: Allergen[];
  naehrwerte?: Naehrwerte;
}

export interface ProduktPromotionData {
  titel: string;
  produkte: Produkt[];
}
