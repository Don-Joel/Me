import { motion } from "framer-motion";
import PagesMetaHead from "../components/PagesMetaHead";
import ContactForm from "../components/contact/ContactForm";

const ContactHeroSvg = () => (
  <svg
    viewBox="0 0 280 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-[260px] h-auto mx-auto lg:mx-0"
    aria-hidden
  >
    <defs>
      <linearGradient
        id="contact-flap"
        x1="40"
        y1="60"
        x2="240"
        y2="130"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
        <stop offset="0.5" stopColor="rgb(148, 163, 184)" stopOpacity="0.1" />
        <stop offset="1" stopColor="rgb(59, 130, 246)" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    {/* Soft glow */}
    <ellipse
      cx="140"
      cy="115"
      rx="95"
      ry="55"
      className="fill-blue-500/10 dark:fill-blue-500/5"
    />
    {/* Envelope body */}
    <rect
      x="45"
      y="65"
      width="190"
      height="95"
      rx="8"
      className="fill-white dark:fill-slate-800/90 stroke-slate-200 dark:stroke-slate-600"
      strokeWidth="1.5"
    />
    {/* Flap (folded triangle) */}
    <path d="M45 65L140 125L235 65H45z" fill="url(#contact-flap)" />
    <path
      d="M45 65L140 125L235 65"
      fill="none"
      className="stroke-slate-300 dark:stroke-slate-600"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Paper inside */}
    <rect
      x="65"
      y="92"
      width="150"
      height="55"
      rx="4"
      className="fill-slate-50 dark:fill-slate-700/70 stroke-slate-200 dark:stroke-slate-600"
      strokeWidth="1"
    />
    <line
      x1="78"
      y1="105"
      x2="182"
      y2="105"
      className="stroke-slate-200 dark:stroke-slate-500"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <line
      x1="78"
      y1="115"
      x2="165"
      y2="115"
      className="stroke-slate-200 dark:stroke-slate-500"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <line
      x1="78"
      y1="125"
      x2="152"
      y2="125"
      className="stroke-slate-200 dark:stroke-slate-500"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Checkmark badge */}
    <circle
      cx="208"
      cy="122"
      r="24"
      className="fill-blue-500/25 dark:fill-blue-500/30 stroke-blue-500/60 dark:stroke-blue-400/60"
      strokeWidth="1.5"
    />
    <path
      d="M199 122l6 6 14-14"
      className="stroke-blue-600 dark:stroke-blue-400"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const Contact = () => (
  <>
    <PagesMetaHead
      title="Contact | Joel Tavarez"
      description="Get in touch with Joel Tavarez — product engineer. Send a message for opportunities or collaboration."
      keywords="contact Joel Tavarez, hire Joel Tavarez, product engineer contact"
    />
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row lg:items-center overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16">
      {/* Layered background for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100/80 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex-1">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 lg:gap-12 lg:items-stretch">
          {/* Left: headline at top, SVG vertically centered to align with form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 mb-8 lg:mb-0 flex flex-col lg:min-h-0"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-general-bold text-slate-900 dark:text-slate-100 mb-2">
              Get in{" "}
              <span className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 dark:from-slate-300 dark:via-blue-400 dark:to-slate-400 bg-clip-text text-transparent">
                touch
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-600 via-blue-700 to-slate-700 dark:from-slate-500 dark:via-blue-600 dark:to-slate-600 rounded-full mb-5" />
            <p className="text-slate-600 dark:text-slate-400 font-general-medium text-lg leading-relaxed mb-8 lg:mb-0">
              Have a project in mind or want to connect? Send a message below.
            </p>
            {/* Spacers so SVG sits at column center = form center (desktop only) */}
            <div
              className="hidden lg:block flex-1 min-h-[1.5rem]"
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex justify-center lg:justify-start flex-shrink-0 mt-0"
            >
              <ContactHeroSvg />
            </motion.div>
            <div
              className="hidden lg:block flex-1 min-h-[1.5rem]"
              aria-hidden
            />
          </motion.div>

          {/* Right: glass form card, centered in column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/90 dark:bg-slate-800/40 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 ring-1 ring-slate-200/50 dark:ring-slate-700/50 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-slate-600 dark:from-blue-400 dark:via-blue-500 dark:to-slate-500" />
              <div className="p-6 sm:p-8 pl-7 sm:pl-9">
                <ContactForm />
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500 font-general-medium">
              Securely delivered with captcha protection.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
