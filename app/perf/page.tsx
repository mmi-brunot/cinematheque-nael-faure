import { BigList } from "@/components/BigList";

// H6 (bonus) : page d'expérimentation, absente de la navigation.
export default function PerfPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Mesurer useMemo</h1>
      <p className="max-w-prose text-neutral-600 dark:text-neutral-400">
        5 000 films factices. Ouvrez la console du navigateur et le profileur des React
        DevTools, puis comparez les deux modes.
      </p>
      <BigList />
    </section>
  );
}
