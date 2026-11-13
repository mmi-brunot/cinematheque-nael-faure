"use client";

import Link from "next/link";
import { useSeances } from "./providers/SeancesProvider";

// H5 : le nombre de séances, affiché dans le header.
export function SeancesBadge() {
  const { seances } = useSeances();
  return (
    <Link
      href="/mes-seances"
      className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700"
    >
      Séances : <span className="font-semibold tabular-nums">{seances.length}</span>
    </Link>
  );
}
