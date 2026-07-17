import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PagesMetaHead, { SITE_URL } from "../components/PagesMetaHead";
import ProjectBrowserPreview from "../components/projects/ProjectBrowserPreview";

const projects = [
  {
    name: "Dallas Billboard Connection",
    shortUrl: "dallasbillboardconnection.com",
    url: "https://www.dallasbillboardconnection.com/",
    company: "Billboard Connection",
    type: "End-to-end product build",
    image: "/images/project-dallas.png?v=2",
    imageAlt:
      "Dallas Billboard Connection homepage with DFW billboard campaign messaging",
    accent: "text-blue-700 dark:text-blue-400",
    glow: "from-indigo-500/20 via-blue-500/10 to-transparent",
    summary:
      "Built from the ground up for a Dallas billboard agency, from early product discovery through launch.",
    outcomes: [
      "Product discovery, design, and full-stack development",
      "Local landing pages and conversion-focused copy",
      "Resend lead tracking and 100/100 Lighthouse scores",
    ],
    tags: ["Next.js", "Node.js", "Vercel", "Resend", "Programmatic SEO"],
  },
  {
    name: "Atlanta Billboard Connection",
    shortUrl: "atlantabillboardcompany.com",
    url: "https://www.atlantabillboardcompany.com/",
    company: "Billboard Connection",
    type: "Legacy migration & redesign",
    image: "/images/project-atlanta.png?v=2",
    imageAlt:
      "Redesigned Atlanta Billboard Connection homepage with Atlanta campaign messaging",
    accent: "text-blue-600 dark:text-blue-400",
    glow: "from-blue-500/20 via-cyan-500/10 to-transparent",
    summary:
      "Rebuilt a dated Atlanta website while preserving the search value it had earned over time.",
    outcomes: [
      "Complete legacy content and route migration",
      "Responsive redesign for products and Atlanta locations",
      "Technical SEO and internal-link preservation",
    ],
    tags: ["Site Migration", "Technical SEO", "Responsive Design", "Routing"],
  },
  {
    name: "percentiles.fyi",
    shortUrl: "percentiles.fyi",
    url: "https://percentiles.fyi/",
    company: "Independent project",
    type: "Interactive data product",
    image: "/images/project-percentiles.png?v=3",
    imageAlt:
      "percentiles.fyi homepage showing searchable percentile tools and an income calculator",
    accent: "text-cyan-600 dark:text-cyan-400",
    glow: "from-cyan-500/20 via-sky-500/10 to-transparent",
    summary:
      "A personal project that makes everyday statistics easier to understand and compare.",
    outcomes: [
      "More than 10 interactive percentile calculators",
      "Census, IPUMS, and published research data",
      "Plain-language explanations of rank, median, and z-scores",
    ],
    tags: ["Data Visualization", "Statistics", "Research", "UX", "SEO"],
  },
];

const Projects = () => (
  <>
    <PagesMetaHead
      title="Projects | Joel Tavarez"
      description="A closer look at websites and products Joel Tavarez has designed and built."
      keywords="Joel Tavarez projects, product engineering portfolio, Next.js projects, technical SEO, website migration, data visualization"
      canonicalPath="/projects"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Selected projects by Joel Tavarez",
        url: `${SITE_URL}/projects`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebSite",
            name: project.name,
            url: project.url,
            description: project.summary,
            creator: {
              "@type": "Person",
              name: "Joel Tavarez",
              url: SITE_URL,
            },
          },
        })),
      }}
    />

    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-100 py-12 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 lg:py-16">
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-6xl text-center"
        >
          <h1 className="mb-6 text-4xl font-general-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:whitespace-nowrap lg:text-6xl">
            Products built for{" "}
            <span className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 bg-clip-text text-transparent dark:from-slate-300 dark:via-blue-400 dark:to-slate-400">
              real outcomes
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
            A closer look at a few sites I&apos;ve built.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-slate-100 pb-16 pt-8 dark:bg-slate-950 lg:pb-24 lg:pt-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-300/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch"
            >
              <ProjectBrowserPreview
                name={project.name}
                url={project.url}
                shortUrl={project.shortUrl}
                image={project.image}
                imageAlt={project.imageAlt}
                glow={project.glow}
                priority={index === 0}
              />

              <div className="p-6 font-general-medium sm:p-10 lg:order-1 lg:p-7">
                <div className="mb-5 border-b border-slate-200 pb-5 dark:border-slate-700">
                  <div>
                    <p className="mb-3 text-xs font-general-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      0{index + 1} / {project.type}
                    </p>
                    <h2 className="text-3xl font-general-bold text-slate-900 dark:text-white sm:text-4xl">
                      {project.name}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {project.company}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div>
                    <p className="text-lg font-general-semibold leading-relaxed text-slate-800 dark:text-slate-100">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-general-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      What I worked on
                    </p>
                    <div>
                      {project.outcomes.map((outcome) => (
                        <p
                          key={outcome}
                          className="border-b border-slate-200 py-2.5 font-general-medium text-sm leading-relaxed text-slate-600 last:border-b-0 dark:border-slate-700 dark:text-slate-300"
                        >
                          {outcome}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-700">
                  <p className="mb-4 font-general-medium text-xs leading-relaxed tracking-wide text-slate-500 dark:text-slate-400">
                    {project.tags.join("  ·  ")}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-general-semibold ${project.accent}`}
                  >
                    View live site
                    <FiArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 py-20 text-center dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <p className="mb-3 text-sm font-general-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
          Get in touch
        </p>
        <h2 className="mb-5 text-3xl font-general-bold text-slate-900 dark:text-white sm:text-4xl">
          Have something you want to build?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-slate-600 dark:text-slate-300">
          I&apos;m always happy to talk through an idea, whether it&apos;s a new
          product or an existing site that needs another look.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-700 to-blue-700 px-6 py-3 font-general-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Start a conversation
          <FiArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </>
);

export default Projects;
