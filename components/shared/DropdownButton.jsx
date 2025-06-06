import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Contact Me
      </button>
      {isOpen && (
        <motion.div>
          <div
            className="absolute lg:right-0 mt-2 bg-white border rounded shadow-lg z-10 "
            onBlur={closeDropdown}
            focusOut={closeDropdown}
          >
            <motion.a
              href="mailto:joeldtavarez@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white flex "
            >
              <FiMail className="mr-1 w-6 h-6" /> joeldtavarez@gmail.com
            </motion.a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DropdownButton;
