import type { Film, Genre } from "./types";

const GENRES: Genre[] = [
  "comedie",
  "drame",
  "romance",
  "animation",
  "fantastique",
  "thriller",
  "science-fiction",
];

const WORDS = [
  "Nuit", "Soleil", "Ombre", "Rivière", "Écho", "Miroir", "Voyage", "Secret",
  "Lumière", "Tempête", "Jardin", "Silence", "Horizon", "Danse", "Ville", "Rêve",
];

/**
 * Génère `count` films factices, toujours identiques d'un appel à l'autre.
 * Sert uniquement à l'exercice H6 (useMemo) pour avoir une grande liste.
 */
export function generateFakeFilms(count: number): Film[] {
  return Array.from({ length: count }, (_, i) => {
    const w1 = WORDS[(i * 7) % WORDS.length];
    const w2 = WORDS[(i * 13 + 5) % WORDS.length];
    return {
      id: 1000 + i,
      slug: `film-factice-${i + 1}`,
      title: `${w1} et ${w2} n°${i + 1}`,
      year: 1950 + ((i * 37) % 75),
      director: `Réalisateur ${(i % 120) + 1}`,
      genres: [GENRES[i % GENRES.length]],
      duration: 75 + ((i * 11) % 90),
      synopsis: "Film généré automatiquement pour les tests de performance.",
      poster: "/posters/amelie.webp",
    };
  });
}
