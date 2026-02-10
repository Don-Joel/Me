import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Simple Icons CDN: https://cdn.simpleicons.org/<slug>
// Slugs from https://simpleicons.org
const LANGUAGES = [
  { name: "Kotlin", slug: "kotlin" },
  { name: "Java", slug: "openjdk" },
  { name: "Groovy", slug: "groovy" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "C++", slug: "cplusplus" },
  { name: "C#", slug: "csharp" },
];

const TECH_STACK = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Vite", slug: "vite" },
  { name: "Elasticsearch", slug: "elasticsearch" },
  { name: "Kibana", slug: "kibana" },
  { name: "Logstash", slug: "logstash" },
  { name: "Grafana", slug: "grafana" },
  { name: "Chef", slug: "chef" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: ".NET", slug: "dotnet" },
  { name: "Angular", slug: "angular" },
  { name: "Django", slug: "django" },
  { name: "Jest", slug: "jest" },
  { name: "Jira", slug: "jira" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "Ratpack", slug: null },
  { name: "Spring Boot", slug: "spring" },
  { name: "Kafka", slug: "apachekafka" },
  { name: "Micronaut", slug: null },
  { name: "Git", slug: "git" },
  { name: "Docker", slug: "docker" },
  { name: "Codemods", slug: null },
  { name: "Storybook", slug: "storybook" },
  { name: "Linux", slug: "linux" },
];

const ICON_BASE = "https://cdn.simpleicons.org";

function TechCard({ name, slug, index }) {
  const [imgError, setImgError] = React.useState(false);
  const useFallback = !slug || imgError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.02 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div className="relative flex items-center justify-center w-12 h-12 transition-transform duration-300 group-hover:scale-110">
        {useFallback ? (
          <div
            className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-general-semibold text-sm"
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
    </motion.div>
  );
}

function TechnologiesSection() {
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
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-general-bold mb-4 text-slate-900 dark:text-slate-100">
              Technologies
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full" />
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
                  key={tech.slug}
                  name={tech.name}
                  slug={tech.slug}
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
                  key={tech.slug}
                  name={tech.name}
                  slug={tech.slug}
                  index={idx}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
