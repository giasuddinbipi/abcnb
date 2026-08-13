"use client";

import { Moon, Sun } from "./Icons";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("abcnb-theme");
    const shouldUseDark = saved === "dark";
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDark(shouldUseDark);
    setReady(true);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("abcnb-theme", next ? "dark" : "light");
  }

  return (
    <button
      className="icon-button"
      type="button"
      onClick={toggleTheme}
      aria-label={ready && dark ? "Switch to light theme" : "Switch to dark theme"}
      title={ready && dark ? "Light theme" : "Dark theme"}
    >
      {ready && dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
