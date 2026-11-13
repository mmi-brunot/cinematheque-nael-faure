"use client";

// H1 : useState. Chaque carte a sa propre instance, donc son propre état.
import { useState } from "react";

export function SynopsisToggle({ synopsis }: { synopsis: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="text-sm underline underline-offset-2"
      >
        {open ? "Masquer le synopsis" : "Voir le synopsis"}
      </button>
      {open && <p className="text-sm text-neutral-700 dark:text-neutral-300">{synopsis}</p>}
    </div>
  );
}
