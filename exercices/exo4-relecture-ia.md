# Exo 4 — Relecture d'un code proposé par une IA

**Durée : 10 min, en binôme, sans IA.**

On a demandé à une IA : « Fais-moi une page Next.js qui affiche la liste des films de `data/films.json`, avec un header commun à tout le site. » Voici sa réponse.

Le code s'exécute, mais il contient **3 erreurs** de conception ou de React. Pour chacune, notez :

1. le fichier et la ligne concernés ;
2. ce qui ne va pas ;
3. la correction, justifiée en une phrase.

Ne copiez pas ce code dans `app/` : il sert uniquement à la lecture.

---

## `app/layout.tsx`

```tsx
'use client';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <h1>Cinémathèque</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
```

## `app/films/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import type { Film } from '@/lib/types';

export default function FilmsPage() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/films.json')
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement…</p>;

  return (
    <ul>
      {films.map((film) => (
        <li>
          {film.title} ({film.year})
        </li>
      ))}
    </ul>
  );
}
```

---

Indices si vous bloquez (à ne lire qu'après 5 minutes) :

- Que devient le `layout` racine quand il porte `'use client'` ? Et tous les composants qu'il contient ?
- Ces données sont-elles connues côté serveur au moment de construire la page ? Que voit un moteur de recherche dans le HTML ?
- Ouvrez la console du navigateur sur un `.map()` qui ressemble à celui-ci.
