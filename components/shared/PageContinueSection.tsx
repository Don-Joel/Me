import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type PageKey = "home" | "projects" | "about" | "contact";

type Destination = {
  key: PageKey;
  href: string;
  label: string;
  description: string;
};

const destinations: Record<PageKey, Destination> = {
  home: {
    key: "home",
    href: "/",
    label: "Home",
    description: "How I approach building products.",
  },
  projects: {
    key: "projects",
    href: "/projects",
    label: "Projects",
    description: "Selected sites and what shipped.",
  },
  about: {
    key: "about",
    href: "/about",
    label: "About",
    description: "Experience and the stack I use.",
  },
  contact: {
    key: "contact",
    href: "/contact",
    label: "Contact",
    description: "Tell me what you're building.",
  },
};

/** Proof → trust → talk. No Home — keeps people moving forward. */
const nextByCurrent: Record<
  PageKey,
  { primary: PageKey; secondary: PageKey[] }
> = {
  home: { primary: "projects", secondary: ["about", "contact"] },
  projects: { primary: "contact", secondary: ["about"] },
  about: { primary: "contact", secondary: ["projects"] },
  contact: { primary: "projects", secondary: ["about"] },
};

const contextByCurrent: Record<PageKey, string> = {
  home: "See the work, or get in touch",
  projects: "Learn a bit more, or start a conversation",
  about: "See the work, or get in touch",
  contact: "See the work, or learn more about me",
};

type PageContinueSectionProps = {
  current: PageKey;
};

const PageContinueSection = ({ current }: PageContinueSectionProps) => {
  const { primary, secondary } = nextByCurrent[current];
  const primaryDest = destinations[primary];
  const secondaryDests = secondary.map((key) => destinations[key]);
  const context = contextByCurrent[current];

  return (
    <section className="bg-white py-24 dark:bg-slate-950 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 font-general-medium text-base text-slate-500 dark:text-slate-400 lg:mb-12"
          >
            {context}
          </motion.p>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-slate-200/80 dark:bg-slate-800 md:grid-cols-5">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-slate-50 dark:bg-slate-900 md:col-span-3"
            >
              <Link
                href={primaryDest.href}
                className="group flex h-full min-h-[12rem] flex-col justify-between p-8 transition-colors duration-300 hover:bg-slate-100/90 dark:hover:bg-slate-800/80 sm:p-10 lg:min-h-[14rem] lg:p-12"
              >
                <div>
                  <span className="inline-flex items-center gap-2.5 text-3xl font-general-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-100 dark:group-hover:text-white sm:text-4xl">
                    {primaryDest.label}
                    <FiArrowUpRight className="h-6 w-6 translate-y-0.5 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-slate-500 dark:text-slate-600 dark:group-hover:text-slate-400" />
                  </span>
                  <p className="mt-5 max-w-sm font-general-medium text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                    {primaryDest.description}
                  </p>
                </div>
              </Link>
            </motion.div>

            <div
              className={`grid gap-px bg-slate-200/80 dark:bg-slate-800 md:col-span-2 ${
                secondaryDests.length > 1 ? "md:grid-rows-2" : ""
              }`}
            >
              {secondaryDests.map((dest, index) => (
                <motion.div
                  key={dest.key}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 + index * 0.05 }}
                  className="bg-slate-50 dark:bg-slate-900"
                >
                  <Link
                    href={dest.href}
                    className={`group flex h-full flex-col justify-center p-7 transition-colors duration-300 hover:bg-slate-100/90 dark:hover:bg-slate-800/80 sm:p-8 ${
                      secondaryDests.length > 1
                        ? "min-h-[7rem] lg:min-h-0"
                        : "min-h-[12rem] lg:min-h-[14rem]"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-xl font-general-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700 dark:text-slate-100 dark:group-hover:text-white sm:text-2xl">
                      {dest.label}
                      <FiArrowUpRight className="h-4 w-4 translate-y-px text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-slate-500 dark:text-slate-600 dark:group-hover:text-slate-400" />
                    </span>
                    <p className="mt-2 font-general-medium text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
                      {dest.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContinueSection;
