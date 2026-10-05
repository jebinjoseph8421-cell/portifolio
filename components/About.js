import Section from "./Section";
import { about } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
        {about.map((t) => <p key={t}>{t}</p>)}
      </div>
    </Section>
  );
}
