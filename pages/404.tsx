import Link from "next/link";
import { motion } from "framer-motion";
import PagesMetaHead from "../components/PagesMetaHead";
import { primaryCtaClasses } from "../components/ui/cta";

const Custom404 = () => (
  <>
    <PagesMetaHead
      title="Page not found | Joel Tavarez"
      description="This page does not exist. Return to Joel Tavarez's portfolio homepage."
      canonicalPath={null}
      robots="noindex, follow"
      ogImage="/images/og-card.png"
      ogImageAlt="Joel Tavarez portfolio"
    />
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center bg-white px-6 py-20 dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-lg text-center"
      >
        <p className="mb-4 text-sm font-general-medium text-slate-600 dark:text-slate-400">
          404
        </p>
        <h1 className="mb-4 text-4xl font-general-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mb-10 text-lg font-general-medium text-slate-500 dark:text-slate-400">
          That URL isn&apos;t on this site. Try one of these instead.
        </p>
        <nav
          aria-label="Helpful links"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/" className={`${primaryCtaClasses} px-5 py-2.5 text-sm`}>
            Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-general-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-general-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-general-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </section>
  </>
);

export default Custom404;
