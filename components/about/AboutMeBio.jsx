import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { experiences } from "../../consts/aboutMeExperiences";

const AboutMeBio = () => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-general-bold mb-4 text-slate-900 dark:text-slate-100">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-slate-600 via-blue-700 to-slate-700 dark:from-slate-500 dark:via-blue-600 dark:to-slate-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Profile Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mb-6 flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-blue-500/80 to-slate-500 dark:from-slate-500 dark:via-blue-600/50 dark:to-slate-600 rounded-2xl blur-2xl opacity-25 dark:opacity-20" />
                      <Image
                        src="/images/profile.jpg"
                        height={280}
                        width={280}
                        className="relative rounded-2xl shadow-2xl"
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
                        B.A. Computer Science, 2021
                      </span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-evenly gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <motion.a
                      href="https://github.com/Don-Joel"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="transition-transform"
                    >
                      <SocialIcon url="https://github.com/Don-Joel" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/joel-d-tavarez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="transition-transform"
                    >
                      <SocialIcon url="https://www.linkedin.com/in/joel-d-tavarez/" />
                    </motion.a>
                    <motion.a
                      href="mailto:joeldtavarez@gmail.com"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="transition-transform"
                    >
                      <SocialIcon url="mailto:joeldtavarez@gmail.com" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <div className="lg:col-span-8 space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 p-4 rounded-xl ${exp.iconBg} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <exp.icon className={`w-6 h-6 ${exp.iconColor}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-2xl font-general-semibold text-slate-900 dark:text-slate-100">
                            {exp.title}
                          </h3>
                          <span className="text-sm font-general-medium text-slate-500 dark:text-slate-400">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-2 font-general-medium">
                          {exp.company}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
  );
};

export default AboutMeBio;
