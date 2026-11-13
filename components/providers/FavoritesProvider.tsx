"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type FavoritesValue = {
  favorites: number[];
  isFavorite: (filmId: number) => boolean;
  toggleFavorite: (filmId: number) => void;
};

const FavoritesContext = createContext<FavoritesValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  // L'état est remonté ici pour que toutes les cartes et le titre de l'onglet
  // connaissent la même liste de favoris.
  const [favorites, setFavorites] = useState<number[]>([]);
  const pathname = usePathname();

  // H2 : useEffect synchronise React avec quelque chose d'extérieur, le titre de l'onglet.
  // Dépendances : le nombre de favoris, et la page (Next.js remet le titre à chaque navigation).
  useEffect(() => {
    const base = document.title.replace(/^\(\d+\) /, "");
    document.title = favorites.length > 0 ? `(${favorites.length}) ${base}` : base;
  }, [favorites.length, pathname]);

  function toggleFavorite(filmId: number) {
    setFavorites((current) =>
      current.includes(filmId)
        ? current.filter((id) => id !== filmId)
        : [...current, filmId],
    );
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite: (id) => favorites.includes(id), toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const value = useContext(FavoritesContext);
  if (!value) throw new Error("useFavorites doit être utilisé dans <FavoritesProvider>");
  return value;
}
