import { profile, layers } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-12 pt-16 sm:pt-24 md:grid-cols-5">
      <div className="hero-in md:col-span-3">
        <p className="text-sm text-slate-600 dark:text-slate-400">{profile.status}</p>
        <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {profile.name}
          <span className="block text-water dark:text-water-light">{profile.title}</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed">{profile.statement}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-water px-5 py-2.5 font-medium text-white transition hover:bg-water/85 dark:bg-water-light dark:text-deep">View projects</a>
          <a href={profile.resume} download className="rounded-md border border-water/40 px-5 py-2.5 font-medium transition hover:bg-water/10 dark:border-water-light/40">Download resume</a>
        </div>
      </div>
      <figure className="hero-in md:col-span-2" aria-label="Architecture of the Market project">
        <div className="space-y-2">
          {layers.map((l, i) => (
            <div key={l.label} className="rounded-lg border-l-4 border-coir bg-white p-4 shadow-sm dark:bg-white/5" style={{ marginLeft: `${i * 14}px` }}>
              <p className="font-display text-lg font-bold">{l.label}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{l.note}</p>
            </div>
          ))}
        </div>
        <figcaption className="mt-3 text-sm text-slate-600 dark:text-slate-400">How my Market project is built.</figcaption>
      </figure>
    </section>
  );
}
