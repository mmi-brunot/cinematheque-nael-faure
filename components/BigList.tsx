"use client";

// H6 (bonus) : mesurer avant d'utiliser useMemo.
//
// Mode d'emploi : ouvrez la console du navigateur. Chaque calcul affiche sa durée.
// - Tapez dans le champ : le calcul est refait, avec ou sans useMemo (la recherche a changé).
// - Cliquez sur « Rendu sans rapport » : sans useMemo, le calcul est refait pour rien ;
//   avec useMemo, il ne l'est pas.
// Conclusion attendue : sur 5 000 films, le calcul prend quelques millisecondes.
// useMemo évite un travail inutile, mais il ne se justifie que si ce travail coûte
// vraiment quelque chose. Mesurez avec le profileur des React DevTools avant de décider.
import { useMemo, useState } from "react";
import { generateFakeFilms } from "@/lib/fake-films";
import type { Film } from "@/lib/types";

function filterAndSort(films: Film[], query: string): Film[] {
  const label = `filtre + tri de ${films.length} films`;
  console.time(label);
  const q = query.trim().toLowerCase();
  const result = films
    .filter((film) => film.title.toLowerCase().includes(q))
    .sort((a, b) => a.title.localeCompare(b.title, "fr"));
  console.timeEnd(label);
  return result;
}

export function BigList() {
  // Initialisation paresseuse : la liste n'est générée qu'une fois.
  const [films] = useState(() => generateFakeFilms(5000));
  const [query, setQuery] = useState("");
  const [memoOn, setMemoOn] = useState(true);
  const [renders, setRenders] = useState(0);

  const memoized = useMemo(() => filterAndSort(films, query), [films, query]);
  const result = memoOn ? memoized : filterAndSort(films, query);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="big-search" className="text-sm font-medium">
          Filtrer
        </label>
        <input
          id="big-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="rounded border border-neutral-300 bg-transparent px-3 py-1.5 dark:border-neutral-700"
        />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={memoOn} onChange={() => setMemoOn(!memoOn)} />
          useMemo activé
        </label>
        <button
          type="button"
          onClick={() => setRenders(renders + 1)}
          className="rounded border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700"
        >
          Rendu sans rapport ({renders})
        </button>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {result.length} résultats, 100 premiers affichés.
      </p>
      <ul className="columns-1 text-sm sm:columns-2 lg:columns-3">
        {result.slice(0, 100).map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}
