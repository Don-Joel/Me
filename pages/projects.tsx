import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectBrowserPreview from "../components/projects/ProjectBrowserPreview";
import PageContinueSection from "../components/shared/PageContinueSection";
import {
  SITE_URL,
  breadcrumbStructuredData,
  personStructuredData,
} from "../lib/seo";

const projects = [
  {
    name: "Dallas Billboard Connection",
    shortUrl: "dallasbillboardconnection.com",
    url: "https://www.dallasbillboardconnection.com/",
    company: "Billboard Connection",
    type: "End-to-end product build",
    image: "/images/project-dallas.png?v=3",
    video: "/videos/dallas-demo.mp4?v=3",
    imageAlt:
      "Live walkthrough of Dallas Billboard Connection — scrolling the site, browsing billboards, and starting a campaign form",
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
    name: "percentiles.fyi",
    shortUrl: "percentiles.fyi",
    url: "https://percentiles.fyi/",
    company: "Independent project",
    type: "Interactive data product",
    image: "/images/project-percentiles.png?v=3",
    video: "/videos/percentiles-demo.mp4",
    imageAlt:
      "Interactive product demo of percentiles.fyi — searching tools and using the income calculator",
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
];

const Projects = () => (
  <>
    <PagesMetaHead
      title="Projects | Joel Tavarez"
      description="A closer look at websites and products Joel Tavarez has designed and built."
      canonicalPath="/projects"
      ogImage="/images/og-projects.png"
      ogImageAlt="Selected projects by Joel Tavarez"
      structuredData={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/projects#webpage`,
            name: "Projects | Joel Tavarez",
            description:
              "A closer look at websites and products Joel Tavarez has designed and built.",
            url: `${SITE_URL}/projects`,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            breadcrumb: breadcrumbStructuredData([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
            ]),
            mainEntity: {
              "@type": "ItemList",
              name: "Selected projects by Joel Tavarez",
              numberOfItems: projects.length,
              itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "SoftwareApplication",
                  name: project.name,
                  url: project.url,
                  description: project.summary,
                  applicationCategory: "WebApplication",
                  operatingSystem: "Web",
                  creator: { "@id": `${SITE_URL}/#person` },
                },
              })),
            },
          },
          personStructuredData(),
        ],
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
            Product demos of a few sites I&apos;ve built — what they are, how
            they look, and what shipped.
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
                video={"video" in project ? project.video : undefined}
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

    <PageContinueSection current="projects" />
  </>
);

export default Projects;
