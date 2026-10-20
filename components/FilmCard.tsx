import LikeButton from './LikeButton';
import type { Film } from '@/lib/types';

export default function FilmCard({ film }: { film: Film }) {
  const genresAffiches = Array.isArray(film.genres)
    ? film.genres.join(', ')
    : film.genres;

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
        {film.title}
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold text-gray-800 dark:text-gray-200">Année :</span> {film.year}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold text-gray-800 dark:text-gray-200">Réalisateur :</span> {film.director}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold text-gray-800 dark:text-gray-200">Durée :</span> {film.duration} min
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <span className="font-semibold text-gray-800 dark:text-gray-200">Genres :</span> {genresAffiches}
      </p>
      <LikeButton />
    </article>
  );
}