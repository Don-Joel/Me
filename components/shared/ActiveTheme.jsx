import { FiSun, FiMoon } from "react-icons/fi";

function ActiveTheme (activeTheme, setTheme) {
    return  (
    <div
    id="theme-switcher-large-screen"
    onClick={() => setTheme(activeTheme)}
    aria-label="Theme Switcher"
    className=" bg-primary-light dark:bg-ternary-dark p-3 w-11 h-11 hidden sm:block rounded-xl cursor-pointer"
    >
    {activeTheme === "dark" ? (
      <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
    ) : (
      <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
    )}
    </div>
    );
}

