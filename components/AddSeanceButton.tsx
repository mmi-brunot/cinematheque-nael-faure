"use client";

// H5 : ajoute le film à la liste de séances via dispatch.
import { useSeances } from "./providers/SeancesProvider";

export function AddSeanceButton({ filmId }: { filmId: string }) {
  const { seances, dispatch } = useSeances();
  const added = seances.includes(filmId);
  return (
    <button
      type="button"
      disabled={added}
      onClick={() => dispatch({ type: "add", filmId })}
      className="rounded border border-neutral-300 px-2 py-1 text-sm disabled:opacity-50 dark:border-neutral-700"
    >
      {added ? "Dans mes séances" : "+ Séance"}
    </button>
  );
}
