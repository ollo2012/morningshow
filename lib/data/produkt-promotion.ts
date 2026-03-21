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

export type ProduktStatus = "neu" | "eingestellt" | "überarbeitet";

export interface Produkt {
  name: string;
  beschreibung: string;
  preis: string;
  status?: ProduktStatus;
  allergene?: Allergen[];
  naehrwerte?: Naehrwerte;
}

export interface ProduktPromotionData {
  titel: string;
  produkte: Produkt[];
}
