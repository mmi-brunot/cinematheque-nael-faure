# Cinémathèque — fil d'exercices Next.js (BUT MMI 3)

Mini-application de catalogue de films, enrichie à chaque séance. Chaque séance a sa branche : `s01`, `s02`, `s03`… La branche d'une séance contient la correction de la précédente, pour que personne ne reste bloqué.

- Next.js 16.4 (App Router), React 19, TypeScript, Tailwind CSS 4
- Node.js 20.9 ou plus récent

**Vous êtes sur la branche `s02`** : elle contient la correction de la séance 1. Les consignes détaillées de chaque séance sont sur le site du cours.

## Récupérer la branche de la séance

Si votre fork et le lien `upstream` sont déjà en place (séance 1) :

```bash
git status                 # doit être propre : committez avant de changer de branche
git fetch upstream
git switch s02             # crée la branche s02 à partir de upstream/s02
npm install
npm run dev
```

Si `git switch s02` répond que la branche est ambiguë, utilisez `git switch -c s02 upstream/s02`.

Première installation (fork, clone, `upstream`) : voir la page d'accueil du site du cours, rubrique « Mise en place ».

## Structure

```
app/
  layout.tsx          layout racine : <html>, <body>, contextes, header
  page.tsx            accueil
  films/page.tsx      catalogue (Server Component)
  a-propos/page.tsx
  mes-seances/page.tsx
  perf/page.tsx       expérience useMemo (H6), absente de la navigation
components/
  Header.tsx          navigation (serveur) avec NavLink, SeancesBadge, ThemeToggle (client)
  FilmCard.tsx        carte de film (serveur) avec trois boutons client
  FilmSearch.tsx      recherche par titre (client)
  providers/          ThemeProvider, FavoritesProvider, SeancesProvider (client)
lib/
  films.ts            getFilms()
  genres.ts           libellés des genres
  seances-reducer.ts  reducer de la liste de séances (H5)
  types.ts            type Film
  fake-films.ts       films factices (H6)
data/films.json       les 12 films
public/posters/       affiches fictives (600 × 900, WebP)
```

## Correction de la séance 1 : où regarder

| Exercice | Fichiers |
| --- | --- |
| Exo 1 · Navigation | `app/layout.tsx`, `components/Header.tsx`, `app/films/page.tsx`, `app/a-propos/page.tsx` |
| Exo 2 · Où s'exécute ce code ? | `console.log` dans `app/films/page.tsx` (terminal), compteur dans `components/LikeButton.tsx` |
| Exo 3 · Liste de films | `components/FilmCard.tsx`, `components/FavoriteButton.tsx` ; bonus : `components/FilmSearch.tsx` |
| Exo 4 · Relecture d'un code d'IA | `exercices/exo4-corrige.md` |
| H1 · `useState` | `components/SynopsisToggle.tsx` |
| H2 · `useEffect` | `components/providers/FavoritesProvider.tsx` (titre de l'onglet) |
| H3 · `useRef` | `components/FilmSearch.tsx` (touche `/`) |
| H4 · `useContext` | `components/providers/ThemeProvider.tsx`, `components/ThemeToggle.tsx`, `app/globals.css` |
| H5 · `useReducer` | `lib/seances-reducer.ts`, `components/providers/SeancesProvider.tsx`, `components/MesSeances.tsx` |
| H6 · `useMemo` | `components/BigList.tsx`, page `/perf` |
| H7 · `usePathname` | `components/NavLink.tsx` |

Lisez les commentaires dans ces fichiers : ils expliquent les choix, pas seulement le code.

---

## Séance 2 — Routing avancé

Exercices à faire sur cette branche. Les exercices marqués **sans IA** se font avec l'éditeur et la [documentation officielle](https://nextjs.org/docs) uniquement.

### Exo 1 — Fiche film (sans IA)

1. Déplacez les pages publiques dans `app/(site)/`, avec un `app/(site)/layout.tsx` qui contient le header. Le layout racine garde `<html>`, `<body>` et les contextes. Vérifiez que les URL n'ont pas changé.
2. Ajoutez `getFilm(slug)` dans `lib/films.ts`, puis créez `app/(site)/films/[slug]/page.tsx` : titre, année, réalisateur, synopsis.
3. Rendez chaque `FilmCard` cliquable vers sa fiche avec `<Link>`.
4. Un slug inconnu affiche un `not-found.tsx` personnalisé avec un lien vers le catalogue.

**Réussi si** `/films/n-existe-pas` affiche votre page et que l'onglet Réseau montre un statut 404 pour le document.

### Exo 2 — États de chargement

1. Dans la fiche, après `await params` et avant la recherche du film : `await new Promise((r) => setTimeout(r, 2000));`
2. Créez `loading.tsx` : un squelette qui a la forme de la fiche.
3. Levez une erreur volontaire pour un film précis et créez `error.tsx` avec un bouton « Réessayer » (prop `retry`).
4. Rouvrez `/films/n-existe-pas` : quel statut voyez-vous maintenant ? Pourquoi ?

### Exo 3 — SEO et build

1. Dans le layout racine : `metadata` avec un `title.template` et une `description`.
2. Dans la fiche : `generateMetadata` (titre = nom du film) et `generateStaticParams`.
3. Affiches avec `next/image` dans les cartes et la fiche, avec `sizes` ; seule l'affiche de la fiche est chargée en priorité (`preload`).
4. Retirez l'attente et l'erreur de l'exo 2, lancez `npm run build` et notez dans `BUILD.md` le symbole de chaque route.

### Exo 4 — Prédire avant d'exécuter (sans IA)

Écrivez votre prédiction (○, ● ou ƒ) sur papier, puis créez les routes et comparez au build :

- `/a-propos` : texte fixe, aucune donnée lue ;
- `/realisateurs/[nom]` : les films d'un réalisateur, sans `generateStaticParams` ;
- `/recherche` : lit `searchParams` (`/recherche?q=chihiro`) ;
- `/film-du-jour` : un film au hasard avec `Math.random()`.

### En fin de séance

```bash
git add .
git commit -m "S2 : exercices"
git push -u origin s02
```
