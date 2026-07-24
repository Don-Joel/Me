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

    <section className="bg-white pt-16 dark:bg-slate-950 lg:pt-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-6xl"
        >
          <h1 className="text-4xl font-general-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Projects
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-general-medium leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xl">
            Product demos of a few sites I&apos;ve built — what they are, how
            they look, and what shipped.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-white pb-16 pt-14 dark:bg-slate-950 lg:pb-24 lg:pt-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
            >
              <ProjectBrowserPreview
                name={project.name}
                url={project.url}
                shortUrl={project.shortUrl}
                image={project.image}
                imageAlt={project.imageAlt}
                video={"video" in project ? project.video : undefined}
                priority={index === 0}
              />

              <div className="flex flex-col justify-center p-8 font-general-medium sm:p-10 lg:order-1 lg:p-12">
                <p className="mb-3 text-sm font-general-medium text-slate-400 dark:text-slate-500">
                  {project.type}
                </p>
                <h2 className="text-3xl font-general-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm font-general-medium text-slate-500 dark:text-slate-400">
                  {project.company}
                </p>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="font-general-medium text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <p className="mb-4 text-xs font-general-medium tracking-wide text-slate-400 dark:text-slate-500">
                    {project.tags.join("  ·  ")}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-general-semibold text-slate-900 transition-colors hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
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
