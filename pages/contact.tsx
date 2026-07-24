import { motion } from "framer-motion";
import PagesMetaHead from "../components/PagesMetaHead";
import ContactForm from "../components/contact/ContactForm";
import {
  SITE_URL,
  breadcrumbStructuredData,
  personStructuredData,
} from "../lib/seo";

const Contact = () => (
  <>
    <PagesMetaHead
      title="Contact | Joel Tavarez"
      description="Get in touch with Joel Tavarez — product engineer. Send a message for opportunities or collaboration."
      canonicalPath="/contact"
      ogImage="/images/og-contact.png"
      ogImageAlt="Contact Joel Tavarez — Product Engineer"
      structuredData={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ContactPage",
            "@id": `${SITE_URL}/contact#webpage`,
            name: "Contact Joel Tavarez",
            description:
              "Contact Joel Tavarez about product engineering opportunities and collaboration.",
            url: `${SITE_URL}/contact`,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            mainEntity: { "@id": `${SITE_URL}/#person` },
            breadcrumb: breadcrumbStructuredData([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          },
          personStructuredData(),
        ],
      }}
    />

    <section className="bg-white pt-16 dark:bg-slate-950 lg:min-h-[calc(100vh-5rem)] lg:pt-24">
      <div className="container mx-auto px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <h1 className="text-4xl font-general-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Contact
            </h1>
            <p className="mt-5 max-w-md text-lg font-general-medium leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xl">
              Have a project in mind or want to connect? Send a message and
              I&apos;ll get back to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-900 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
