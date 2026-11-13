import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-prose space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Cinémathèque</h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300">
        Douze films, une application qui grandit à chaque séance.
      </p>
      <p>
        <Link href="/films" className="underline underline-offset-4">
          Parcourir le catalogue
        </Link>
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Les consignes de la séance sont dans <code>README.md</code>.
      </p>
    </section>
  );
}
