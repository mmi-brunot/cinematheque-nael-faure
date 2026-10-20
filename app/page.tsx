export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Cinémathèque</h1>
      <p className="text-lg opacity-80">
        Bienvenue dans le fil d&apos;exercices Next.js. Cette application
        s&apos;enrichira à chaque séance.
      </p>
      <p>
        Les consignes de la séance sont dans le fichier{" "}
        <code className="rounded bg-black/5 px-1.5 py-0.5 dark:bg-white/10">
          README.md
        </code>
        . Les données des films sont dans{" "}
        <code className="rounded bg-black/5 px-1.5 py-0.5 dark:bg-white/10">
          data/films.json
        </code>
        .
      </p>
    </section>
  );
}
