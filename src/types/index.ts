// Tipi principali per Case, Persone, Letture, Bollette
export type Persona = {
  id: string;
  nome: string;
};

export type Lettura = {
  id: string;
  personaId: string;
  data: string; // ISO
  valore: number;
};

export type Bolletta = {
  id: string;
  periodoInizio: string; // id Lettura
  periodoFine: string; // id Lettura
  importo: number;
  costiFissi?: number;
};

export type Casa = {
  id: string;
  nome: string;
  persone: Persona[];
  letture: Lettura[];
  bollette: Bolletta[];
};
export interface House {
    id: string;
    name: string;
    address: string;
    bills: Bill[];
}

export interface Person {
    id: string;
    name: string;
    houseId: string;
}

export interface Bill {
    id: string;
    houseId: string;
    period: string;
    readings: Reading[];
    totalCost: number;
}

export interface Reading {
    id: string;
    billId: string;
    meterReading: number;
    date: string;
}