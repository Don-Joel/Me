import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiExternalLink,
} from "react-icons/fi";
import { experiences } from "../../consts/aboutMeExperiences";

const AboutMeBio = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-100 py-12 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 lg:py-16">
        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-6xl text-center"
          >
            <h1 className="mb-6 text-4xl font-general-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 bg-clip-text text-transparent dark:from-slate-300 dark:via-blue-400 dark:to-slate-400">
                Me
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
              A closer look at my experience, work, and the technologies I use.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="overflow-x-hidden bg-gradient-to-b from-slate-100 via-slate-100 to-slate-50 pb-16 pt-8 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:pb-24 lg:pt-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl min-w-0">
            <div className="grid min-w-0 items-start gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Profile Sidebar */}
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="min-w-0 self-start lg:col-span-4"
              >
                <div className="lg:sticky lg:top-24">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                    {/* Profile Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="mb-6 flex justify-center"
                    >
                      <div className="relative w-full max-w-[280px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-blue-500/80 to-slate-500 dark:from-slate-500 dark:via-blue-600/50 dark:to-slate-600 rounded-2xl blur-2xl opacity-25 dark:opacity-20" />
                        <Image
                          src="/images/profile.jpg"
                          height={280}
                          width={280}
                          className="relative w-full h-auto rounded-2xl shadow-2xl"
                          alt="Joel Tavarez"
                          priority
                        />
                      </div>
                    </motion.div>

                    {/* Location & Info */}
                    <div className="space-y-3 mb-6 text-center">
                      <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                        <FiBriefcase className="w-4 h-4" />
                        <span className="text-sm font-general-medium">
                          Product Engineer at Newmark
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                        <FiMapPin className="w-4 h-4" />
                        <span className="text-sm font-general-medium">
                          University of Virginia
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                        <FiCalendar className="w-4 h-4" />
                        <span className="text-sm font-general-medium">
                          B.A. Computer Science
                        </span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-evenly gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                      <motion.div
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="transition-transform"
                      >
                        <SocialIcon
                          url="https://github.com/Don-Joel"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="transition-transform"
                      >
                        <SocialIcon
                          url="https://www.linkedin.com/in/joel-d-tavarez/"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="transition-transform"
                      >
                        <SocialIcon
                          url="mailto:joeldtavarez@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience Timeline */}
              <div className="lg:col-span-8 min-w-0 space-y-8">
                <h2 className="text-2xl font-general-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
                  Experience
                </h2>
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.title}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 min-w-0">
                      <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 p-4 rounded-xl ${exp.iconBg} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <exp.icon className={`w-6 h-6 ${exp.iconColor}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <h3 className="min-w-0 text-2xl font-general-semibold break-words">
                              {exp.url ? (
                                <a
                                  href={exp.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline text-blue-700 dark:text-blue-400 underline underline-offset-4 decoration-blue-700/40 dark:decoration-blue-400/40 hover:decoration-blue-700 dark:hover:decoration-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors break-all"
                                >
                                  {exp.title}
                                  <FiExternalLink
                                    className="inline-block w-4 h-4 ml-1.5 align-[-0.1em] shrink-0"
                                    aria-hidden
                                  />
                                </a>
                              ) : (
                                <span className="text-slate-900 dark:text-slate-100">
                                  {exp.title}
                                </span>
                              )}
                            </h3>
                            <span className="text-sm font-general-medium text-slate-500 dark:text-slate-400 shrink-0">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 mb-2 font-general-medium break-words">
                            {exp.company}
                          </p>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeBio;
