"use client";

// Exo 3 : bouton favori client. L'état vit dans FavoritesProvider (pour H2).
import { useFavorites } from "./providers/FavoritesProvider";

export function FavoriteButton({ filmId }: { filmId: number }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(filmId);
  return (
    <button
      type="button"
      onClick={() => toggleFavorite(filmId)}
      aria-pressed={fav}
      className="rounded border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700"
    >
      {fav ? "★ Favori" : "☆ Ajouter aux favoris"}
    </button>
  );
}
