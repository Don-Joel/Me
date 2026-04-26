import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
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
import TypewriterText, { TypewriterCursor } from "../ui/TypewriterText";

const INTRO_LENGTHS = [8, 4, 7]; // "Hi, I'm ", "Joel", "Tavarez"
const INTRO_TOTAL = INTRO_LENGTHS[0] + INTRO_LENGTHS[1] + INTRO_LENGTHS[2];

const AppBanner = () => {
  const reducedMotion = useReducedMotion();
  const [len1, setLen1] = useState(0);
  const [len2, setLen2] = useState(0);
  const [len3, setLen3] = useState(0);
  const totalVisible = len1 + len2 + len3;
  const isTyping = totalVisible < INTRO_TOTAL;
  const heroLightLoopWrapper =
    "inline-block p-[3px] rounded-xl animate-cta-light-loop";
  const heroLightLoopBg =
    "conic-gradient(from var(--cta-light-angle, 0deg), #3f4755 0deg, #3f4755 142deg, rgba(233,238,246,1) 160deg, rgba(248,251,255,1) 176deg, rgba(226,233,243,1) 206deg, rgba(210,220,234,1) 236deg, rgba(236,242,250,1) 264deg, rgba(250,252,255,1) 288deg, rgba(224,231,241,1) 322deg, rgba(206,217,231,1) 336deg, #3f4755 356deg, #3f4755 360deg)";
  const heroGlowShadow =
    "0 0 16px rgba(226,234,246,0.36), 0 0 30px rgba(236,243,252,0.26), 0 0 50px rgba(244,248,255,0.2)";

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
              {/* Name - typewriter with cursor that moves along with text */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-general-bold mb-6 leading-tight"
              >
                {totalVisible === 0 && <TypewriterCursor />}
                <TypewriterText
                  text="Hi, I'm "
                  duration={0.6}
                  delay={0.2}
                  cursor={false}
                  onVisibleLengthChange={setLen1}
                  className="text-slate-900 dark:text-slate-100"
                />
                {totalVisible >= 1 && totalVisible <= 8 && <TypewriterCursor />}
                <TypewriterText
                  text="Joel"
                  duration={0.6}
                  delay={0.5}
                  cursor={false}
                  onVisibleLengthChange={setLen2}
                  className="text-slate-900 dark:text-slate-100"
                />
                {totalVisible >= 9 && totalVisible <= 12 && (
                  <TypewriterCursor />
                )}
                <br />
                <TypewriterText
                  text="Tavarez"
                  duration={0.6}
                  delay={0.85}
                  cursor={false}
                  onVisibleLengthChange={setLen3}
                  className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 dark:from-slate-300 dark:via-blue-400 dark:to-slate-400 bg-clip-text text-transparent"
                />
                {totalVisible >= 13 && isTyping && <TypewriterCursor />}
              </motion.h1>

              {/* Title - pop in at 2s */}
              <motion.p
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
                className="text-2xl sm:text-3xl lg:text-4xl font-general-semibold text-slate-700 dark:text-slate-300 mb-4"
              >
                Product Engineer
              </motion.p>

              {/* Description - pop in at 2s */}
              <motion.p
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                I design and ship the ideal product—full-stack from idea to
                production, with a focus on user value and systems that scale.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-500 dark:text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                React, JVM languages, and modern web—accelerated by AI.
              </motion.p>

              {/* Tech Stack Pills - pop in at 2s */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
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
                    transition={{ delay: 2, duration: 0.35, ease: "easeOut" }}
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

              {/* CTA Button - pop in at 2s */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
                className="flex justify-center lg:justify-start"
              >
                <span
                  className={
                    reducedMotion
                      ? "inline-block p-[3px] rounded-xl"
                      : heroLightLoopWrapper
                  }
                  style={{
                    background: heroLightLoopBg,
                    boxShadow: heroGlowShadow,
                  }}
                >
                  <motion.a
                    whileHover={
                      reducedMotion ? undefined : { scale: 1.05, y: -2 }
                    }
                    whileTap={reducedMotion ? undefined : { scale: 0.95 }}
                    download="Tavarez-Joel-Resume.pdf"
                    href="/files/Tavarez-Joel-Resume.pdf"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600 dark:from-slate-500 dark:to-blue-600 dark:hover:from-slate-400 dark:hover:to-blue-500 text-white font-general-semibold rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label="Download Resume"
                  >
                    <FiArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </motion.a>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column - Image (pop in after typing done ~1.2s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
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
