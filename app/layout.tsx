import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "Cinémathèque",
  description: "Catalogue de films — fil d'exercices Next.js, BUT MMI 3",
};

// Le layout reste un Server Component : pas de 'use client' ici (H4).
// Les Providers sont des Client Components qui reçoivent le reste en children.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">
        <Providers>
          {/* Exo 1 : la navigation est dans le layout, donc commune à toutes les pages */}
          <Header />
          <main className="mx-auto w-full max-w-5xl px-4 py-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
