function DarkOrLight({ activeTheme }) {
  return {
    activeTheme:
      string === "dark" ? (
        <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
      ) : (
        <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
      )
  };
}

export default DefaultOrLight;
