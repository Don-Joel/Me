import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowDownCircle,
  FiCode,
  FiDatabase,
  FiZap,
  FiLayers,
  FiCpu,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

const AppBanner = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100/80 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-general-bold mb-6 leading-tight"
              >
                <span className="text-slate-900 dark:text-slate-100">
                  Hi, I&apos;m{" "}
                </span>
                <span className="text-slate-900 dark:text-slate-100">Joel</span>
                <br />
                <span className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 dark:from-slate-300 dark:via-blue-400 dark:to-slate-400 bg-clip-text text-transparent">
                  Tavarez
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-general-semibold text-slate-700 dark:text-slate-300 mb-4"
              >
                Product Engineer
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                I use AI orchestration (Codex, Opus) to design and ship the
                ideal product—full-stack from idea to production, with a focus
                on user value and systems that scale.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-base sm:text-lg text-slate-500 dark:text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                React, JVM languages, and modern web—accelerated by AI.
              </motion.p>

              {/* Tech Stack Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
              >
                {[
                  {
                    icon: FiCode,
                    label: "Frontend",
                    iconColor: "text-slate-600 dark:text-slate-400",
                  },
                  {
                    icon: FiDatabase,
                    label: "Backend",
                    iconColor: "text-slate-600 dark:text-slate-400",
                  },
                  {
                    icon: FiZap,
                    label: "Performance",
                    iconColor: "text-slate-600 dark:text-slate-400",
                  },
                  {
                    icon: FiLayers,
                    label: "Architecture",
                    iconColor: "text-slate-600 dark:text-slate-400",
                  },
                  {
                    icon: FiCpu,
                    label: "AI/ML",
                    iconColor: "text-slate-600 dark:text-slate-400",
                  },
                  {
                    icon: FiSettings,
                    label: "DevOps",
                    iconColor: "text-slate-600 dark:text-slate-400",
                  },
                  {
                    icon: FiUsers,
                    label: "Leadership",
                    iconColor: "text-slate-600 dark:text-slate-400",
                  },
                ].map((tech, idx) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                  >
                    <tech.icon className={`w-4 h-4 ${tech.iconColor}`} />
                    <span className="text-sm font-general-medium text-slate-700 dark:text-slate-300">
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  download="Tavarez-Joel-Resume.pdf"
                  href="/files/Tavarez-Joel-Resume.pdf"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600 dark:from-slate-500 dark:to-blue-600 dark:hover:from-slate-400 dark:hover:to-blue-500 text-white font-general-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Download Resume"
                >
                  <FiArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/15 via-blue-500/20 to-slate-400/15 dark:from-slate-500/10 dark:via-blue-600/15 dark:to-slate-500/10 rounded-3xl blur-3xl transform rotate-6" />
                <div className="relative">
                  <Image
                    src="/images/udeveloper.svg"
                    width={600}
                    height={600}
                    alt="Developer illustration"
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
