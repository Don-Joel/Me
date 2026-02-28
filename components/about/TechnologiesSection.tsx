import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LANGUAGES, TECH_STACK, ICON_BASE } from "../../consts/technologies";
import type { Technology } from "../../consts/types";

type TechCardProps = Technology & {
  index: number;
};

const TechCard = ({ name, slug, url, index }: TechCardProps) => {
  const [imgError, setImgError] = React.useState(false);
  const useFallback = !slug || imgError;

  const cardContent = (
    <>
      <div className="relative flex items-center justify-center w-12 h-12 transition-transform duration-300 group-hover:scale-110">
        {useFallback ? (
          <div
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-600 dark:text-slate-400 font-general-semibold text-sm"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        ) : (
          <Image
            src={`${ICON_BASE}/${slug}`}
            alt={name}
            width={40}
            height={40}
            className="object-contain dark:brightness-0.95 dark:invert-[0.05]"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}
      </div>
      <span className="text-sm font-general-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 text-center transition-colors">
        {name}
      </span>
    </>
  );

  const cardClassName =
    "group flex flex-col items-center gap-3 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-blue-500/70 dark:hover:border-blue-600/70 hover:shadow-lg hover:shadow-blue-600/15 dark:hover:shadow-blue-600/15 transition-all duration-300";

  const motionProps = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.35, delay: index * 0.02 },
    whileHover: { y: -4, transition: { duration: 0.2 } },
  };

  if (url) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${cardClassName}`}
        {...motionProps}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div className={cardClassName} {...motionProps}>
      {cardContent}
    </motion.div>
  );
};

const TechnologiesSection = () => (
  <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
    <div className="container mx-auto px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-general-bold mb-4 text-slate-900 dark:text-slate-100">
            Technologies
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-slate-600 via-blue-700 to-slate-700 dark:from-slate-500 dark:via-blue-600 dark:to-slate-600 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 font-general-medium max-w-2xl mx-auto text-lg">
            Languages, frameworks, and tools I work with
          </p>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-general-semibold text-slate-700 dark:text-slate-300 mb-6">
            Languages
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
            {LANGUAGES.map((tech, idx) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                slug={tech.slug}
                url={tech.url}
                index={idx}
              />
            ))}
          </div>
        </motion.div>

        {/* Technologies & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-general-semibold text-slate-700 dark:text-slate-300 mb-6">
            Frameworks & Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech, idx) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                slug={tech.slug}
                url={tech.url}
                index={idx}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
