import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinémathèque",
  description: "Catalogue de films — fil d'exercices Next.js, BUT MMI 3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {<nav>
          <Link rel="stylesheet" href="/">Accueil</Link>
          <Link rel="stylesheet" href="/films">Films</Link>
          <Link rel="stylesheet" href="/a-propos">À propos</Link>
          </nav>}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
