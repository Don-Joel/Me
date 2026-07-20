import Link from "next/link";
import { motion } from "framer-motion";
import PagesMetaHead from "../components/PagesMetaHead";

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
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100/80 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.12),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 mx-auto max-w-xl text-center"
      >
        <p className="mb-3 text-sm font-general-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">
          404
        </p>
        <h1 className="mb-4 text-4xl font-general-bold text-slate-900 dark:text-slate-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mb-8 text-lg text-slate-600 dark:text-slate-400 font-general-medium">
          That URL isn&apos;t on this site. Try one of these instead.
        </p>
        <nav
          aria-label="Helpful links"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-general-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-general-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:border-slate-500"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-general-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:border-slate-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-general-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:border-slate-500"
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </section>
  </>
);

export default Custom404;
