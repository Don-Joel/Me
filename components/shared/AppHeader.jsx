import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import logo from "../../public/images/logo.svg";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import DropdownButton from "@/components/shared/DropdownButton";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      {/* Header */}
      <div
        id="header"
        className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:items-center py-1 flex"
      >
        {/* Small screen hamburger menu */}
        <div className="sm:hidden flex justify-center items-center">
          <button
            id="hamburger-menu"
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none ml-0"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
            >
              {showMenu ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden font-mono  text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light antialiased hover:subpixel-antialiased text-left text-lg text-primary-dar md:flex">
          <Link href="/" aria-label="Contact">
            Joel Dominic Tavarez
          </Link>
        </div>
        {/* Header menu links and small screen hamburger menu */}
        <div
          id="menu-links"
          className=" items-center px-4 sm:px-0 flex-grow-0 ml-auto flex"
        ></div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center sm:justify-end shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <DropdownButton />
            {/* Theme switcher small screen */}
            <div
              id="theme-switcher-small-screen"
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl w-11 cursor-pointer flex-grow-0 ml-auto"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 lg:ml-4 mt-5 lg:mt-3 lg:flex p-5 lg:p-0  shadow-lg lg:shadow-none">
          <DropdownButton />
          {/* Theme switcher large screen */}
          <div
            id="theme-switcher-large-screen"
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className=" bg-primary-light dark:bg-ternary-dark p-3 w-11 h-11 hidden sm:block rounded-xl cursor-pointer ml-5"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
