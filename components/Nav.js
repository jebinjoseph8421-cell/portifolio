import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/content";

const links = [["Projects", "#projects"], ["About", "#about"], ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-water/10 bg-paper/85 backdrop-blur dark:border-white/10 dark:bg-deep/85">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-display text-lg font-bold">{profile.name}</a>
        <div className="flex items-center gap-5 text-sm">
          <ul className="hidden gap-5 sm:flex">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} className="transition hover:text-coir">{l}</a></li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
