import type { Genre } from "./types";

// Libellés affichés pour les identifiants de genre de data/films.json.
export const GENRE_LABELS: Record<Genre, string> = {
  comedie: "Comédie",
  drame: "Drame",
  romance: "Romance",
  animation: "Animation",
  fantastique: "Fantastique",
  thriller: "Thriller",
  "science-fiction": "Science-fiction",
};
