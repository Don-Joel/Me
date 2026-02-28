import { motion } from "framer-motion";
import { FiUsers, FiZap, FiCpu } from "react-icons/fi";

const pillars = [
  {
    icon: FiUsers,
    title: "Leadership",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    description:
      "From Eagle Scout and Junior Assistant Scoutmaster managing a troop of 53 to MLT Career Prep Fellow and project lead at Nourish'd,I've built habits of ownership and mentorship. At Newmark I lead stakeholder interviews to drive product adoption; at Target I led system design for the checkout pipeline and collaborated across platform, UX, and fulfillment teams under peak traffic.",
  },
  {
    icon: FiZap,
    title: "Optimizing systems",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    description:
      "I'm drawn to systems where small changes compound. At Target I owned the $2B+ same-day delivery flow—improving page speed, reliability, and cross-repo deployments across 6+ micro-frontends, refactoring the bottom-of-funnel experience, and shipping architectural upgrades to Add to Cart that cut errors under peak load. One feature I scoped and implemented is saving $100k/yr.",
  },
  {
    icon: FiCpu,
    title: "AI orchestration",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    description:
      "I work as a product engineer who uses AI to orchestrate code and ship the right product. With Codex and Opus, I design, architect, and implement features end-to-end—focusing on user value, scalability, and clarity rather than just writing code. AI augments how I think and build so I can move faster from idea to production without sacrificing quality or design.",
  },
];

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
}

export default HowIBuildSection;
