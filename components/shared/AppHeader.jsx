import Link from "next/link";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import DropdownButton from "@/components/shared/DropdownButton";

const AppHeader = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm"
    >
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="font-general-bold text-xl lg:text-2xl bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 dark:from-slate-300 dark:via-blue-400 dark:to-slate-400 bg-clip-text text-transparent hover:from-slate-600 hover:via-blue-600 hover:to-slate-700 dark:hover:from-slate-200 dark:hover:to-blue-300 transition-all duration-200"
              aria-label="Home"
            >
              <span className="hidden lg:inline">Joel D. Tavarez</span>
              <span className="lg:hidden">JDT</span>
            </Link>
          </motion.div>

          {/* Mobile: Theme switcher on left, Contact on right */}
          <div className="flex lg:hidden items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-200 shadow-md hover:shadow-lg border border-slate-200/50 dark:border-slate-700/50"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="w-5 h-5" />
              ) : (
                <FiSun className="w-5 h-5" />
              )}
            </motion.button>
            <DropdownButton />
          </div>

          {/* Desktop: Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <DropdownButton />
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-200 shadow-md hover:shadow-lg border border-slate-200/50 dark:border-slate-700/50"
              suppressHydrationWarning={true}
            >
              {activeTheme === "dark" ? (
                <FiMoon className="w-5 h-5" />
              ) : (
                <FiSun className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default AppHeader;
