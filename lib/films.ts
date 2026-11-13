import films from "@/data/films.json";
import type { Film } from "./types";

const catalogue = films as Film[];

/** Tous les films du catalogue. */
export function getFilms(): Film[] {
  return catalogue;
}
