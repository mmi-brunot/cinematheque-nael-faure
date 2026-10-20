import filmsData from '@/data/films.json';
import FilmCard from '@/components/FilmCard';
import type { Film } from '@/lib/types';

const films = filmsData as Film[];

export default function FilmsPage() {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Page films</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film, index) => (
          <FilmCard key={film.id ?? index} film={film} />
        ))}
      </div>
    </main>
  );
}