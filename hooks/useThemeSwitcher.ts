import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "light";

const useThemeSwitcher = () => {
  // Use a constant initial value so server and client first render match (avoids React hydration error #418).
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      setTheme(DEFAULT_THEME);
      localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme] as const;
};

export default useThemeSwitcher;
