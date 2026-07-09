import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "light";

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const [ready, setReady] = useState(false);
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      setTheme(DEFAULT_THEME);
      localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, ready]);

  return [activeTheme, setTheme] as const;
};

export default useThemeSwitcher;
