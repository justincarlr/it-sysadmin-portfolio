"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function getInitialTheme(): Theme {
  const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle light / dark"
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "var(--card)",
        border: "1px solid var(--border)",
        color: "var(--accent)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
