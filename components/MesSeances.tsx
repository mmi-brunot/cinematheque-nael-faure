"use client";

import Link from "next/link";
import { useSeances } from "./providers/SeancesProvider";

// Props sérialisables : de simples objets envoyés par la page serveur.
type FilmSummary = { slug: string; title: string; year: number };

// H5 : retirer un film, tout vider. Les trois actions passent par dispatch.
export function MesSeances({ films }: { films: FilmSummary[] }) {
  const { seances, dispatch } = useSeances();
  const selected = seances.flatMap((slug) => {
    const film = films.find((f) => f.slug === slug);
    return film ? [film] : [];
  });

  if (selected.length === 0) {
    return (
      <p>
        Aucune séance pour l&apos;instant. Ajoutez des films depuis le{" "}
        <Link href="/films" className="underline">
          catalogue
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <ol className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {selected.map((film) => (
          <li key={film.slug} className="flex items-center justify-between gap-4 px-4 py-3">
            <span>
              {film.title} <span className="text-neutral-500">({film.year})</span>
            </span>
            <button
              type="button"
              onClick={() => dispatch({ type: "remove", filmId: film.slug })}
              className="text-sm underline"
            >
              Retirer
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={() => dispatch({ type: "clear" })}
        className="rounded border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700"
      >
        Tout vider
      </button>
    </div>
  );
}
