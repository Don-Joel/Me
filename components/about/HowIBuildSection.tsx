import { motion } from "framer-motion";
import { pillars } from "../../consts/howIBuildPillars";

const HowIBuildSection = () => {
  return (
    <section className="bg-white py-24 dark:bg-slate-900 lg:py-32">
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
              How I build
            </h2>
            <p className="mt-5 text-lg font-general-medium leading-relaxed text-slate-500 dark:text-slate-400">
              Product-minded engineering across leadership, systems, and AI
              orchestration.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-slate-200/80 dark:bg-slate-800 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-slate-50 p-8 dark:bg-slate-950 sm:p-10"
              >
                <pillar.icon
                  className="mb-6 h-6 w-6 text-slate-400 dark:text-slate-500"
                  aria-hidden
                />
                <h3 className="text-xl font-general-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  {pillar.title}
                </h3>
                <p className="mt-4 font-general-medium leading-relaxed text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuildSection;
