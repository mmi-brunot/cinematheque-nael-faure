/** Genres utilisés dans data/films.json (identifiants en minuscules, sans accents). */
export type Genre =
  | "comedie"
  | "drame"
  | "romance"
  | "animation"
  | "fantastique"
  | "thriller"
  | "science-fiction";

/** Un film du catalogue. */
export type Film = {
  id: number;
  slug: string;
  title: string;
  year: number;
  director: string;
  genres: Genre[];
  /** Durée en minutes. */
  duration: number;
  synopsis: string;
  /** Chemin de l'affiche dans /public (utilisée en S2 avec next/image). */
  poster: string;
};
