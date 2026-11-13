import { MesSeances } from "@/components/MesSeances";
import { getFilms } from "@/lib/films";

export default function MesSeancesPage() {
  // On n'envoie au composant client que les champs dont il a besoin.
  const films = getFilms().map(({ slug, title, year }) => ({ slug, title, year }));

  return (
    <section className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Mes séances</h1>
      <MesSeances films={films} />
    </section>
  );
}
