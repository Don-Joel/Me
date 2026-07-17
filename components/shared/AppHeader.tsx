import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiSun, FiMoon } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const contactButtonClasses =
  "text-white bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600 dark:from-slate-500 dark:to-blue-600 dark:hover:from-slate-400 dark:hover:to-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400/40 active:scale-95 font-general-semibold rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300";
const navLinkClasses = (isActive: boolean, mobile = false) =>
  `relative py-2 font-general-semibold transition-colors ${
    mobile ? "text-xs" : "text-sm"
  } ${
    isActive
      ? "text-blue-700 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-blue-600 dark:text-blue-400 dark:after:bg-blue-400"
      : "text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
  }`;

const AppHeader = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const router = useRouter();

  return (
    <motion.header
      initial={false}
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
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/projects"
              className={navLinkClasses(router.pathname === "/projects", true)}
              aria-current={
                router.pathname === "/projects" ? "page" : undefined
              }
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={navLinkClasses(router.pathname === "/about", true)}
              aria-current={router.pathname === "/about" ? "page" : undefined}
            >
              About
            </Link>
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className="rounded-xl border border-slate-200/50 bg-gradient-to-br from-slate-100 to-slate-200 p-2.5 text-slate-700 shadow-md transition-all duration-200 hover:from-slate-200 hover:to-slate-300 hover:shadow-lg dark:border-slate-700/50 dark:from-slate-800 dark:to-slate-700 dark:text-slate-300 dark:hover:from-slate-700 dark:hover:to-slate-600"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="h-4 w-4" />
              ) : (
                <FiSun className="h-4 w-4" />
              )}
            </motion.button>
            <Link
              href="/contact"
              className={`${contactButtonClasses} !px-3 !py-2.5 !text-xs`}
              aria-current={router.pathname === "/contact" ? "page" : undefined}
            >
              Contact
            </Link>
          </div>

          {/* Desktop: Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-7">
              <Link
                href="/projects"
                className={navLinkClasses(router.pathname === "/projects")}
                aria-current={
                  router.pathname === "/projects" ? "page" : undefined
                }
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={navLinkClasses(router.pathname === "/about")}
                aria-current={router.pathname === "/about" ? "page" : undefined}
              >
                About
              </Link>
            </div>
            <Link
              href="/contact"
              className={`${contactButtonClasses} ${
                router.pathname === "/contact"
                  ? "ring-2 ring-blue-400/70 ring-offset-2 dark:ring-blue-300/60 dark:ring-offset-slate-900"
                  : ""
              }`}
              aria-current={router.pathname === "/contact" ? "page" : undefined}
            >
              Contact Me
            </Link>
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
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default AppHeader;
