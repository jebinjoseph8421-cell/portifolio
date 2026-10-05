import Section from "./Section";
import { education, certificates } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education and certificates">
      <ol className="space-y-5 border-l-2 border-water/30 pl-6 dark:border-water-light/30">
        {education.map((e) => (
          <li key={e.title}>
            <p className="font-display text-lg font-bold">{e.title}</p>
            <p>{e.place}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{e.years}, {e.detail}</p>
          </li>
        ))}
      </ol>
      <h3 className="mt-10 font-display text-xl font-bold">Certificates</h3>
      <ul className="mt-3 list-disc space-y-1 pl-5">
        {certificates.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </Section>
  );
}
