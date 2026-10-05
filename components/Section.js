export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight text-water dark:text-water-light sm:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
