import Link from "next/link";
import { NavLink } from "./NavLink";
import { SeancesBadge } from "./SeancesBadge";
import { ThemeToggle } from "./ThemeToggle";

// Server Component : seuls NavLink, SeancesBadge et ThemeToggle sont client.
export function Header() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Cinémathèque
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li><NavLink href="/">Accueil</NavLink></li>
            <li><NavLink href="/films">Films</NavLink></li>
            <li><NavLink href="/mes-seances">Mes séances</NavLink></li>
            <li><NavLink href="/a-propos">À propos</NavLink></li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <SeancesBadge />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
