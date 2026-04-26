import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LANGUAGES, TECH_STACK, ICON_BASE } from "../../consts/technologies";
import type { Technology } from "../../consts/types";

const TechCard = ({ name, slug, url }: Technology) => {
  const [imgError, setImgError] = React.useState(false);
  const useFallback = !slug || imgError;

  const cardClassName =
    "group flex flex-col items-center justify-center gap-3 p-5 w-[184px] flex-shrink-0 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-blue-500/70 dark:hover:border-blue-500/60 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-600/10 hover:-translate-y-1 transition-all duration-300";

  const inner = (
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
            className="object-contain"
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

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {inner}
      </a>
    );
  }

  return <div className={cardClassName}>{inner}</div>;
};

type CarouselProps = {
  items: Technology[];
  direction?: "left" | "right";
  speedSecondsPerItem?: number;
};

const Carousel = ({
  items,
  direction = "left",
  speedSecondsPerItem = 3.2,
}: CarouselProps) => {
  const duplicated = [...items, ...items];
  const animationName =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const totalDurationSec = Math.max(20, items.length * speedSecondsPerItem);

  return (
    <div className="marquee-fade marquee-pause overflow-hidden">
      <div
        data-marquee-track
        className={`flex gap-4 w-max ${animationName}`}
        style={
          {
            ["--marquee-duration" as string]: `${totalDurationSec}s`,
          } as React.CSSProperties
        }
      >
        {duplicated.map((tech, i) => (
          <TechCard
            key={`${tech.name}-${i}`}
            name={tech.name}
            slug={tech.slug}
            url={tech.url}
          />
        ))}
      </div>
    </div>
  );
};

const TechnologiesSection = () => (
  <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 overflow-hidden">
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
      </div>
    </div>

    {/* Languages */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 mb-6">
        <div className="max-w-7xl mx-auto flex items-baseline justify-between">
          <h3 className="text-xl font-general-semibold text-slate-700 dark:text-slate-300">
            Languages
          </h3>
          <span className="text-xs font-general-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Hover to pause
          </span>
        </div>
      </div>
      <Carousel items={LANGUAGES} direction="left" />
    </motion.div>

    {/* Frameworks & Tools */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 mb-6">
        <div className="max-w-7xl mx-auto flex items-baseline justify-between">
          <h3 className="text-xl font-general-semibold text-slate-700 dark:text-slate-300">
            Frameworks & Tools
          </h3>
          <span className="text-xs font-general-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Hover to pause
          </span>
        </div>
      </div>
      <Carousel items={TECH_STACK} direction="right" />
    </motion.div>
  </section>
);

export default TechnologiesSection;
