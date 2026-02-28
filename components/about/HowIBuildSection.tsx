import { motion } from "framer-motion";
import { pillars } from "../../consts/howIBuildPillars";

const HowIBuildSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
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
              How I Build
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-slate-600 via-blue-700 to-slate-700 dark:from-slate-500 dark:via-blue-600 dark:to-slate-600 mx-auto rounded-full" />
            <p className="mt-6 text-slate-600 dark:text-slate-400 font-general-medium max-w-2xl mx-auto text-lg">
              Product-minded engineering: leadership, systems, and AI
              orchestration
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`flex-shrink-0 inline-flex p-4 rounded-xl mb-6 ${pillar.iconBg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-general-semibold text-slate-900 dark:text-slate-100 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-general-medium">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuildSection;
