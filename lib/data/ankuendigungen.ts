export interface Ankuendigung {
  titel: string;
  inhalt: string;
  datum: string;
  wichtig: boolean;
}

export interface AnkuendigungenData {
  ankuendigungen: Ankuendigung[];
}
