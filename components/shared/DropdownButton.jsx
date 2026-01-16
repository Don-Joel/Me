import React, { useEffect, useState, useRef } from "react";
import { FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const buttonClasses =
    "text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-general-semibold rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300";

  return (
    <div className="relative inline-block" ref={drawerRef}>
      {/* Direct link for small screens */}
      <a
        href="mailto:joeldtavarez@gmail.com"
        className={`lg:hidden ${buttonClasses}`}
      >
        Contact Me
      </a>

      {/* Dropdown button for large screens */}
      <button
        onClick={toggleDropdown}
        className={`hidden lg:inline-flex ${buttonClasses}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Contact Me
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute lg:right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden min-w-[280px]"
          >
            <motion.a
              href="mailto:joeldtavarez@gmail.com"
              whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              className="block px-6 py-4 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-3 transition-colors"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="font-general-semibold text-sm">Email</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  joeldtavarez@gmail.com
                </div>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownButton;
