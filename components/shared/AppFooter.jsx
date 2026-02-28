import { motion } from "framer-motion";
import AppFooterCopyright from "./AppFooterCopyright";
import { FiHeart } from "react-icons/fi";

const AppFooter = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-slate-200/50 dark:border-slate-700/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-slate-600 via-blue-700 to-slate-700 dark:from-slate-500 dark:via-blue-600 dark:to-slate-600 rounded-full" />

            {/* Footer content */}
            <div className="text-center">
              <AppFooterCopyright />
            </div>

            {/* Tech stack badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <span className="text-sm text-slate-600 dark:text-slate-400 font-general-medium">
                Built with
              </span>
              <FiHeart className="w-4 h-4 text-red-500 mx-1" />
              <span className="text-sm text-slate-600 dark:text-slate-400 font-general-medium">
                Next.js, Tailwind CSS & Framer Motion
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AppFooter;
