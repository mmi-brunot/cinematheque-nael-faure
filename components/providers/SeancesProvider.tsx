"use client";

// H5 : useReducer + contexte, pour que le header et les cartes partagent la liste.
import { createContext, useContext, useReducer } from "react";
import { seancesReducer, type SeancesAction } from "@/lib/seances-reducer";

type SeancesValue = {
  seances: string[]; // slugs des films choisis
  dispatch: (action: SeancesAction) => void;
};

const SeancesContext = createContext<SeancesValue | null>(null);

export function SeancesProvider({ children }: { children: React.ReactNode }) {
  const [seances, dispatch] = useReducer(seancesReducer, []);
  return (
    <SeancesContext.Provider value={{ seances, dispatch }}>
      {children}
    </SeancesContext.Provider>
  );
}

export function useSeances() {
  const value = useContext(SeancesContext);
  if (!value) throw new Error("useSeances doit être utilisé dans <SeancesProvider>");
  return value;
}
