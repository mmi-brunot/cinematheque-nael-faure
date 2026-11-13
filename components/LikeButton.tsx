"use client";

// Exo 2 : le compteur a été extrait de la page dans ce composant client.
// La page /films reste un Server Component.
import { useState } from "react";

export function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button
      type="button"
      onClick={() => setLikes(likes + 1)}
      className="rounded border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700"
    >
      ♥ J&apos;aime ce catalogue ({likes})
    </button>
  );
}
