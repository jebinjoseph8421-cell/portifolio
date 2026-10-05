import Section from "./Section";
import { profile } from "../data/content";

export default function Contact() {
  const links = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["LinkedIn", "Jebin Joseph", profile.linkedin],
    ["GitHub", "View repositories", profile.github],
  ].filter((l) => l[2]);
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg">I am looking for a first role as a full-stack or backend developer. Email is the quickest way to reach me.</p>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {links.map(([k, v, h]) => (
          <a key={k} href={h} className="rounded-lg border border-slate-300 p-4 transition hover:border-coir dark:border-white/15">
            <dt className="text-sm text-slate-600 dark:text-slate-400">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </a>
        ))}
      </dl>
      <p className="mt-12 text-sm text-slate-600 dark:text-slate-400">{profile.location}</p>
    </Section>
  );
}
