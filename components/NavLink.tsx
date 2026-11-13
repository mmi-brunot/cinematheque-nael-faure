"use client";

// H7 : seul ce petit composant lit l'URL ; la barre de navigation reste serveur.
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { href: string; children: React.ReactNode };

export function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  // "/" ne doit être actif que sur l'accueil ; "/films" reste actif sur "/films/amelie".
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={
        active
          ? "font-semibold underline decoration-2 underline-offset-4"
          : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      }
    >
      {children}
    </Link>
  );
}
