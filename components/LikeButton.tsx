'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className={`mt-3 rounded px-3 py-1.5 text-xs font-medium transition ${
        isLiked
      }`}
    >
      {isLiked ? '❤️ Retirer des favoris' : '🤍 Ajouter aux favoris'}
    </button>
  );
}