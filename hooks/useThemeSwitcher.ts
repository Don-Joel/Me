import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const useThemeSwitcher = () => {
  // Use a constant initial value so server and client first render match (avoids React hydration error #418).
  const [theme, setTheme] = useState<Theme>("dark");
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme] as const;
};

export default useThemeSwitcher;
