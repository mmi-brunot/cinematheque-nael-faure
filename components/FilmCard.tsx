import type { Film } from "@/lib/types";
import { GENRE_LABELS } from "@/lib/genres";
import { AddSeanceButton } from "./AddSeanceButton";
import { FavoriteButton } from "./FavoriteButton";
import { SynopsisToggle } from "./SynopsisToggle";

// Exo 3 : Server Component (pas de directive). Les trois boutons sont des îlots client.
export function FilmCard({ film }: { film: Film }) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <header className="space-y-1">
        <h2 className="text-lg font-semibold leading-tight">{film.title}</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {film.year} · {film.director} · {film.duration} min
        </p>
      </header>
      <ul className="flex flex-wrap gap-1" aria-label="Genres">
        {film.genres.map((genre) => (
          <li
            key={genre}
            className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs dark:bg-neutral-800"
          >
            {GENRE_LABELS[genre]}
          </li>
        ))}
      </ul>
      <SynopsisToggle synopsis={film.synopsis} />
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        <FavoriteButton filmId={film.id} />
        <AddSeanceButton filmId={film.slug} />
      </div>
    </article>
  );
}
