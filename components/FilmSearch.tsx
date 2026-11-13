"use client";

import { useEffect, useRef, useState } from "react";

// Exo 3, bonus : recherche par titre, côté client.
//
// Les cartes sont rendues par le serveur (FilmCard reste un Server Component)
// et passées ici déjà prêtes, dans la prop `card`. Ce composant ne reçoit que
// ce qui lui sert à filtrer : l'id et le titre.
// Réponse à la question de réflexion : pour filtrer dans le navigateur, il faut
// envoyer TOUTE la liste au navigateur, même les films qui ne correspondent pas.
// En S3, on filtrera sur le serveur avec l'URL (?q=…).
type Entry = { id: number; title: string; card: React.ReactNode };

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, ""); // « Amélie » = « amelie »
}

export function FilmSearch({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // H3 : la touche « / » place le curseur dans le champ.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const typing =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      if (event.key === "/" && !typing) {
        event.preventDefault(); // sinon le « / » s'écrit dans le champ
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown); // nettoyage
  }, []);

  // Valeur dérivée : calculée pendant le rendu, pas stockée dans un état.
  const q = normalize(query.trim());
  const visible = q ? entries.filter((e) => normalize(e.title).includes(q)) : entries;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="film-search" className="text-sm font-medium">
          Rechercher un titre
        </label>
        <input
          id="film-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Appuyez sur / pour chercher"
          className="w-64 max-w-full rounded border border-neutral-300 bg-transparent px-3 py-1.5 dark:border-neutral-700"
        />
        <span className="text-sm text-neutral-600 dark:text-neutral-400" aria-live="polite">
          {visible.length} film{visible.length > 1 ? "s" : ""}
        </span>
      </div>
      {visible.length === 0 ? (
        <p>Aucun film ne correspond à « {query} ».</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((entry) => (
            <li key={entry.id}>{entry.card}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
