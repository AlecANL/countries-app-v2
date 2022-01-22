export interface ICountry {
  flags: Flags;
  name: Name;
  tld: string[];
  cca2: string;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  borders: string[];
  population: number;
}

export interface Currencies {
  [key: string]: number | string | {};
}

export interface Gtq {
  name: string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Languages {
  [key: string]: {} | string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: string | {};
}

export interface SPA {
  official: string;
  common: string;
}
