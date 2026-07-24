import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { FiExternalLink } from "react-icons/fi";
import { experiences } from "../../consts/aboutMeExperiences";

const AboutMeBio = () => {
  return (
    <>
      <section className="bg-white pt-16 dark:bg-slate-950 lg:pt-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-6xl"
          >
            <h1 className="text-4xl font-general-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              About
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-general-medium leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xl">
              Experience, work, and the technologies I use.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="overflow-x-hidden bg-white pb-20 pt-14 dark:bg-slate-950 lg:pb-28 lg:pt-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <motion.aside
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="min-w-0 lg:col-span-4"
              >
                <div className="lg:sticky lg:top-28">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src="/images/profile.jpg"
                      height={280}
                      width={280}
                      className="h-auto w-full"
                      alt="Joel Tavarez"
                      priority
                    />
                  </div>

                  <div className="mt-6 space-y-1.5">
                    <p className="font-general-semibold text-slate-900 dark:text-white">
                      Product Engineer at Newmark
                    </p>
                    <p className="text-sm font-general-medium text-slate-500 dark:text-slate-400">
                      University of Virginia · B.A. Computer Science
                    </p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <SocialIcon
                      url="https://github.com/Don-Joel"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ height: 36, width: 36 }}
                    />
                    <SocialIcon
                      url="https://www.linkedin.com/in/joel-d-tavarez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ height: 36, width: 36 }}
                    />
                    <SocialIcon
                      url="mailto:joeldtavarez@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ height: 36, width: 36 }}
                    />
                  </div>
                </div>
              </motion.aside>

              <div className="min-w-0 space-y-2 lg:col-span-8">
                <h2 className="mb-8 text-sm font-general-medium text-slate-600 dark:text-slate-400">
                  Experience
                </h2>
                <div className="divide-y divide-slate-200 dark:divide-slate-800">
                  {experiences.map((exp, idx) => (
                    <motion.article
                      key={exp.title}
                      initial={false}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.05 }}
                      className="py-8 first:pt-0 last:pb-0"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <h3 className="text-xl font-general-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                          {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-600 dark:hover:text-slate-300"
                            >
                              {exp.title}
                              <FiExternalLink
                                className="h-4 w-4 shrink-0 text-slate-400"
                                aria-hidden
                              />
                            </a>
                          ) : (
                            exp.title
                          )}
                        </h3>
                        <span className="shrink-0 text-sm font-general-medium text-slate-600 dark:text-slate-400">
                          {exp.period}
                        </span>
                      </div>
                      {exp.company !== exp.title && (
                        <p className="mt-1 text-sm font-general-medium text-slate-500 dark:text-slate-400">
                          {exp.company}
                        </p>
                      )}
                      <p className="mt-4 font-general-medium leading-relaxed text-slate-600 dark:text-slate-400">
                        {exp.description}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeBio;
