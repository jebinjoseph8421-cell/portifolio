import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((p) => (
          <article key={p.name}
            className={`rounded-xl border p-6 transition hover:border-coir sm:p-8 ${p.featured ? "border-water bg-white shadow-md dark:border-water-light dark:bg-white/5" : "border-slate-300 dark:border-white/15"}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{p.kind}</p>
            </div>
            <p className="mt-3 max-w-2xl">{p.summary}</p>
            <ul className="mt-4 max-w-2xl list-disc space-y-1.5 pl-5 text-slate-700 dark:text-slate-300">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full bg-water/10 px-3 py-1 text-sm text-water dark:bg-water-light/15 dark:text-water-light">{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
