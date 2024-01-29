import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import DropdownButton from "@/components/shared/DropdownButton";

function AppHeader() {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto flex justify-between"
    >
      {/* Header */}

      <div id="header" className="z-10  flex  sm:items-center py-1 flex">
        <div className="hidden font-mono  text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light antialiased hover:subpixel-antialiased text-left text-lg text-primary-dar lg:flex">
          <Link href="/" aria-label="Contact">
            Joel Dominic Tavarez
          </Link>
        </div>
        {/* Header small screen*/}
        <div className="flex lg:hidden">
          <div className="flex sm:font-general-medium  sm:m-0 sm:ml-4 sm:mt-5 sm:mt-3 sm:flex p-5 sm:p-0  shadow-sm sm:shadow-none">
            <DropdownButton />
          </div>
        </div>
      </div>
      {/* Theme switcher small screen */}
      <div id="header" className="z-10  flex  sm:items-center py-1 flex">
        {/* Header small screen*/}
        <div className="flex lg:hidden">
          <div className="flex sm:font-general-medium  sm:m-0 sm:ml-4 sm:mt-5 sm:mt-3 sm:flex p-5 sm:p-0  shadow-sm sm:shadow-none">
            <div
              id="theme-switcher-small-screen"
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className=" sm:m-0 lg:hidden  bg-primary-light  dark:bg-ternary-dark p-3 w-11 h-11  rounded-xl cursor-pointer ml-5"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 hidden dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header large screen */}
      <div className=" lg:flex lg:justify-end hidden  lg:font-general-medium  lg:m-0 lg:ml-4 lg:mt-5 lg:mt-3 lg:flex p-5 lg:p-0  shadow-lg lg:shadow-none">
        <DropdownButton />
        <div
          id="theme-switcher-large-screen"
          onClick={() => setTheme(activeTheme)}
          aria-label="Theme Switcher"
          className=" bg-primary-light dark:bg-ternary-dark p-3 w-11 h-11  hidden sm:block rounded-xl cursor-pointer ml-5"
        >
          {activeTheme === "dark" ? (
            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
          ) : (
            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
