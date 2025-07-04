import { db } from "../firebase";
import { ref, set, get, onValue, push, remove, update, DataSnapshot } from "firebase/database";
import { Casa } from "../types";

// Crea una nuova casa e restituisce l'id
export async function creaCasa(nome: string, persone: string[]): Promise<string> {
  const nuovaCasaRef = push(ref(db, "case"));
  const id = nuovaCasaRef.key!;
  const casa: Casa = {
    id,
    nome,
    persone: persone.map((nome, i) => ({ id: i + "_" + Date.now(), nome })),
    letture: [],
    bollette: []
  };
  await set(nuovaCasaRef, casa);
  return id;
}

// Ottieni una casa in tempo reale
export function ascoltaCasa(id: string, callback: (casa: Casa | null) => void) {
  const casaRef = ref(db, "case/" + id);
  return onValue(casaRef, (snap: DataSnapshot) => {
    callback(snap.exists() ? (snap.val() as Casa) : null);
  });
}

// Aggiorna una casa
export async function aggiornaCasa(id: string, dati: Partial<Casa>) {
  const casaRef = ref(db, "case/" + id);
  await update(casaRef, dati);
}

// Elimina una casa
export async function eliminaCasa(id: string) {
  const casaRef = ref(db, "case/" + id);
  await remove(casaRef);
}
