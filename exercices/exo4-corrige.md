# Exo 4 (S1) — corrigé de la relecture

Le code proposé par l'IA s'exécute, mais il contient trois erreurs.

## 1. `'use client'` en tête du layout racine

**Fichier** : `app/layout.tsx`, ligne 1.

**Problème** : le layout racine enveloppe toutes les pages. Avec `'use client'`, il devient un Client Component, et tout ce qu'il importe passe dans le JavaScript du navigateur. Le header n'a pourtant besoin d'aucune interactivité.

**Correction** : retirer la directive. Si un élément du header doit être interactif (un bouton de thème, un lien actif), on l'extrait dans un petit composant client, comme `ThemeToggle` ou `NavLink` dans cette branche.

## 2. `useEffect` + `fetch` pour des données connues du serveur

**Fichier** : `app/films/page.tsx`.

**Problème** : les films sont dans `data/films.json`, donc disponibles sur le serveur au moment du rendu. Les charger dans le navigateur avec `useEffect` impose une page vide, un état de chargement, puis un second aller-retour réseau. Le HTML reçu ne contient aucun film : mauvais pour la vitesse comme pour le référencement. En plus, `/films.json` n'existe pas dans `public/` : la requête échoue et la liste reste vide sans message d'erreur.

**Correction** : supprimer `'use client'`, `useState` et `useEffect`, et importer le JSON directement dans la page serveur :

```tsx
import { getFilms } from "@/lib/films";

export default function FilmsPage() {
  const films = getFilms();
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>{film.title} ({film.year})</li>
      ))}
    </ul>
  );
}
```

## 3. `.map()` sans `key`

**Fichier** : `app/films/page.tsx`, dans le `return`.

**Problème** : chaque `<li>` d'une liste doit avoir une `key` unique et stable. Sans elle, React ne sait pas quel élément correspond à quel film quand la liste change (filtre, tri), et la console affiche un avertissement.

**Correction** : `<li key={film.id}>`. On évite l'index du tableau comme clé : il change quand la liste est filtrée ou triée.
