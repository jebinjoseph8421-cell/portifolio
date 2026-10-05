import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-slate-300 dark:divide-white/15">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-1 py-4 sm:grid-cols-4">
            <dt className="font-display text-lg font-bold">{s.group}</dt>
            <dd className="sm:col-span-3">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
