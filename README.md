# Cinémathèque — fil d'exercices Next.js (BUT MMI 3)

Mini-application de catalogue de films, enrichie à chaque séance. Chaque séance a sa branche : `s01`, `s02`, `s03`… La branche d'une séance contient la correction de la précédente, pour que personne ne reste bloqué.

- Next.js 16.4 (App Router), React 19, TypeScript, Tailwind CSS 4
- Node.js 20.9 ou plus récent

## Installation

### 1. Forker le dépôt

Sur GitHub, cliquez sur **Fork**. **Décochez « Copy the main branch only »**, sinon la branche `s01` ne sera pas copiée.

### 2. Cloner votre fork et lancer le projet

```bash
git clone https://github.com/<votre-compte>/cinematheque.git
cd cinematheque
git switch s01
npm install
npm run dev
```

Ouvrez http://localhost:3000.

### 3. Relier le dépôt de l'enseignant (une seule fois)

```bash
git remote add upstream https://github.com/mmi-brunot/cinematheque.git
```

### 4. Aux séances suivantes : récupérer la nouvelle branche

```bash
git fetch upstream
git switch -c s02 upstream/s02
npm install
```

Poussez votre travail sur votre fork à la fin de chaque séance : `git push -u origin s01`.

## Structure

```
app/
  layout.tsx        layout racine (la navigation de l'exo 1 va ici)
  page.tsx          page d'accueil
  globals.css
data/
  films.json        12 films (titre, année, réalisateur, genres, durée, synopsis, affiche)
lib/
  types.ts          type TypeScript `Film`
  fake-films.ts     générateur de films factices (exo H6)
public/posters/     affiches fictives au format WebP (utilisées en S2)
exercices/          énoncés hors application (exo 4)
```

Pour lire les films dans une page serveur :

```tsx
import films from "@/data/films.json";
import type { Film } from "@/lib/types";

const catalogue = films as Film[];
```

---

## Séance 1 — exercices

Les exercices marqués **sans IA** se font avec l'éditeur et la [documentation officielle](https://nextjs.org/docs) uniquement.

### Exo 1 — Navigation (sans IA)

Créez les pages `/films` et `/a-propos`, puis une barre de navigation dans `app/layout.tsx` avec le composant `<Link>`.

**Réussi si** l'onglet Réseau des DevTools ne montre aucun rechargement complet de page quand vous naviguez.

### Exo 2 — Où s'exécute ce code ? (sans IA)

1. Ajoutez `console.log("ici")` dans `app/films/page.tsx`. Où apparaît le message : dans le terminal ou dans la console du navigateur ?
2. Ajoutez dans la même page un bouton compteur avec `useState`. Lisez l'erreur.
3. Corrigez-la en créant un composant `components/LikeButton.tsx` qui commence par `'use client'`, et utilisez-le dans la page.

### Exo 3 — Liste de films

1. Dans `app/films/page.tsx` (Server Component), importez `data/films.json` et affichez une grille de composants `FilmCard` (titre, année, réalisateur, genres, durée).
2. Ajoutez dans chaque carte un bouton « Favori » qui est un Client Component.
3. *Bonus* : une barre de recherche qui filtre la liste par titre. Ensuite, réfléchissez : où se fait le filtrage, et quelle partie de la liste se retrouve alors côté client ?

### Exo 4 — Relecture d'un code d'IA (en binôme, sans IA)

Énoncé dans [`exercices/exo4-relecture-ia.md`](exercices/exo4-relecture-ia.md).

---

## Séance 1 — exercices sur les hooks

Rappel : un hook s'appelle toujours au premier niveau du composant (jamais dans une condition ou une boucle), et seulement dans un Client Component (`'use client'`).

| Exo | Hook | Consigne | Réussi si |
| --- | --- | --- | --- |
| H1 (sans IA) | `useState` | Sur chaque `FilmCard`, un bouton « Voir le synopsis » affiche ou masque le résumé. | Chaque carte s'ouvre indépendamment des autres. |
| H2 | `useEffect` | Le titre de l'onglet affiche le nombre de favoris : `(3) Cinémathèque`. | Le titre change à chaque clic sur un favori. Question : quelles sont les dépendances de l'effet ? |
| H3 (sans IA) | `useRef` | La touche `/` place le curseur dans le champ de recherche. | L'écouteur `keydown` est retiré dans la fonction de nettoyage de l'effet. |
| H4 | `useContext` | Un bouton clair / sombre dans le header change l'apparence de tout le site. | `app/layout.tsx` reste un Server Component (pas de `'use client'`). |
| H5 | `useReducer` | Une « liste de séances » : ajouter un film, le retirer, tout vider. Le nombre de séances s'affiche dans le header. | Les trois actions passent par `dispatch`. |
| H6 (bonus) | `useMemo` | Avec `generateFakeFilms(5000)`, filtrez et triez la liste à chaque frappe. Mesurez avec le profileur React, puis comparez avec `useMemo`. | Vous savez dire si `useMemo` change vraiment quelque chose ici, chiffres à l'appui. |
| H7 (bonus) | `usePathname` | Le lien de la page en cours est souligné dans la navigation. | Seul le composant `NavLink` est client ; la barre de navigation reste serveur. |

### En fin de séance

```bash
git add .
git commit -m "S1 : exercices"
git push -u origin s01
```
