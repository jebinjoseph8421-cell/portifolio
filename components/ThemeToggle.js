"use client";
export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  };
  return (
    <button onClick={toggle} aria-label="Switch light or dark theme"
      className="rounded-md border border-water/30 px-3 py-1.5 text-sm transition hover:bg-water/10 dark:border-water-light/30">
      Theme
    </button>
  );
}
