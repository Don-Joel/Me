import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { primaryCtaClasses } from "../ui/cta";

const navLinkClasses = (isActive: boolean) =>
  `text-sm font-general-medium transition-colors ${
    isActive
      ? "text-slate-900 dark:text-white"
      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
  }`;

const mobileMenuLinkClasses = (isActive: boolean) =>
  `block rounded-2xl px-4 py-3 text-sm font-general-medium transition-colors ${
    isActive
      ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
  }`;

const contactButtonClasses = `${primaryCtaClasses} px-5 py-2.5 text-sm`;

const iconButtonClasses =
  "inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white";

const AppHeader = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="container relative mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link
            href="/"
            className="font-general-semibold text-[15px] tracking-tight text-slate-900 transition-colors hover:text-slate-700 dark:text-white dark:hover:text-slate-200 lg:text-base"
            aria-label="Home"
          >
            <span className="hidden sm:inline">Joel Tavarez</span>
            <span className="sm:hidden">JDT</span>
          </Link>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className={iconButtonClasses}
            >
              {activeTheme === "dark" ? (
                <FiMoon className="h-4 w-4" />
              ) : (
                <FiSun className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className={iconButtonClasses}
            >
              {mobileMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
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
            <Link
              href="/contact"
              className={contactButtonClasses}
              aria-current={router.pathname === "/contact" ? "page" : undefined}
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className={iconButtonClasses}
            >
              {activeTheme === "dark" ? (
                <FiMoon className="h-4 w-4" />
              ) : (
                <FiSun className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute left-6 right-6 top-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-950 sm:left-8 sm:right-8 lg:hidden"
          >
            <div className="space-y-1">
              <Link
                href="/projects"
                className={mobileMenuLinkClasses(
                  router.pathname === "/projects"
                )}
                aria-current={
                  router.pathname === "/projects" ? "page" : undefined
                }
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={mobileMenuLinkClasses(router.pathname === "/about")}
                aria-current={router.pathname === "/about" ? "page" : undefined}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${contactButtonClasses} mt-2 w-full`}
                aria-current={
                  router.pathname === "/contact" ? "page" : undefined
                }
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default AppHeader;
