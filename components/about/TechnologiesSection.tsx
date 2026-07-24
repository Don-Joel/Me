import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LANGUAGES, TECH_STACK, ICON_BASE } from "../../consts/technologies";
import type { Technology } from "../../consts/types";

const TechCard = ({ name, slug, url }: Technology) => {
  const [imgError, setImgError] = React.useState(false);
  const useFallback = !slug || imgError;

  const cardClassName =
    "group flex w-[168px] flex-shrink-0 flex-col items-center justify-center gap-3 rounded-2xl bg-white px-4 py-5 dark:bg-slate-900";

  const inner = (
    <>
      <div className="relative flex h-10 w-10 items-center justify-center">
        {useFallback ? (
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-sm font-general-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        ) : (
          <Image
            src={`${ICON_BASE}/${slug}`}
            alt={name}
            width={36}
            height={36}
            className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}
      </div>
      <span className="text-center text-sm font-general-medium text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-100">
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
    <div className="marquee-fade marquee-pause overflow-hidden py-2">
      <div
        data-marquee-track
        className={`flex w-max gap-3 ${animationName}`}
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
  <section className="overflow-hidden bg-slate-50 py-24 dark:bg-slate-900 lg:py-32">
    <div className="container mx-auto px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl lg:mb-16"
        >
          <h2 className="text-4xl font-general-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Technologies
          </h2>
          <p className="mt-5 text-lg font-general-medium leading-relaxed text-slate-500 dark:text-slate-400">
            Languages, frameworks, and tools I work with.
          </p>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mb-12"
    >
      <div className="container mx-auto mb-5 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-sm font-general-medium text-slate-400 dark:text-slate-500">
            Languages
          </h3>
        </div>
      </div>
      <Carousel items={LANGUAGES} direction="left" />
    </motion.div>

    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="container mx-auto mb-5 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-sm font-general-medium text-slate-400 dark:text-slate-500">
            Frameworks & tools
          </h3>
        </div>
      </div>
      <Carousel items={TECH_STACK} direction="right" />
    </motion.div>
  </section>
);

export default TechnologiesSection;
