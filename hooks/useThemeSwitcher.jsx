import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  // Use a constant initial value so server and client first render match (avoids React hydration error #418).
  const [theme, setTheme] = useState("dark");
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "dark";
    setTheme(stored);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
