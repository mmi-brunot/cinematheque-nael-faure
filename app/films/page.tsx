import { FilmCard } from "@/components/FilmCard";
import { FilmSearch } from "@/components/FilmSearch";
import { LikeButton } from "@/components/LikeButton";
import { getFilms } from "@/lib/films";

// Server Component : pas de 'use client' dans ce fichier.
export default function FilmsPage() {
  const catalogue = getFilms();

  // Exo 2 : ce message s'affiche dans le terminal de `npm run dev`, jamais dans le navigateur.
  console.log(`Rendu de /films (${catalogue.length} films)`);

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Films</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            {catalogue.length} films au programme.
          </p>
        </div>
        <LikeButton />
      </div>

      {/* Exo 3 : chaque FilmCard est rendue sur le serveur, puis confiée à la recherche client. */}
      <FilmSearch
        entries={catalogue.map((film) => ({
          id: film.id,
          title: film.title,
          card: <FilmCard film={film} />,
        }))}
      />
    </section>
  );
}
