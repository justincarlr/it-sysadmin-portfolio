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
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        borderRadius: 999,
        background: "var(--card)",
        border: "1px solid var(--border)",
        color: "var(--text)",
        cursor: "pointer",
      }}
      aria-label="Toggle theme"
      title="Toggle light/dark"
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "var(--accent)",
          display: "inline-block",
        }}
      />
      {theme === "dark" ? "dark ops" : "enterprise light"}
    </button>
  );
}
