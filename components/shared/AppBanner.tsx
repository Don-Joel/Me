import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import useIsMounted from "../../hooks/useIsMounted";
import { primaryCtaClasses } from "../ui/cta";
import SoftHoverLink from "../ui/SoftHoverLink";

const HeroBackground = () => (
  <>
    <div className="absolute inset-0 bg-white dark:bg-slate-950" />
    <div
      className="absolute inset-0 opacity-80 dark:opacity-40"
      style={{
        background:
          "radial-gradient(ellipse 70% 45% at 75% 35%, rgba(59, 130, 246, 0.07), transparent 55%)",
      }}
      aria-hidden
    />
  </>
);

const HeroImage = () => (
  <div className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
    <div
      className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 via-slate-300/20 to-transparent blur-2xl dark:from-blue-500/15 dark:via-slate-600/10"
      aria-hidden
    />
    <Image
      src="/images/udeveloper.svg"
      width={600}
      height={600}
      alt="Developer illustration"
      className="relative h-auto w-full"
      priority
    />
  </div>
);

type HeroContentProps = {
  animated?: boolean;
};

const HeroContent = ({ animated = false }: HeroContentProps) => {
  const reducedMotion = useReducedMotion();
  const enableMotion = animated && !reducedMotion;

  const fade = (delay = 0) =>
    enableMotion
      ? {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        }
      : {};

  const TitleTag = enableMotion ? motion.h1 : "h1";
  const SubTag = enableMotion ? motion.p : "p";
  const BodyTag = enableMotion ? motion.p : "p";
  const CtaTag = enableMotion ? motion.div : "div";
  const ImageWrap = enableMotion ? motion.div : "div";

  return (
    <section className="relative flex items-center overflow-hidden lg:min-h-[88vh]">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <TitleTag
              {...fade(0)}
              className="text-5xl font-general-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-[4.75rem] xl:leading-[1.05]"
            >
              Joel Tavarez
            </TitleTag>

            <SubTag
              {...fade(0.08)}
              className="mt-5 text-xl font-general-medium text-slate-500 dark:text-slate-400 sm:text-2xl"
            >
              Product Engineer
            </SubTag>

            <BodyTag
              {...fade(0.14)}
              className="mx-auto mt-6 max-w-xl text-lg font-general-medium leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl lg:mx-0"
            >
              I design and ship full-stack products—from idea to production—with
              a focus on user value and systems that scale.
            </BodyTag>

            <CtaTag
              {...fade(0.22)}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className={`${primaryCtaClasses} gap-2 px-7 py-3.5 text-sm`}
              >
                View projects
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <SoftHoverLink
                href="/contact"
                className="px-7 py-3.5 text-sm font-general-semibold text-slate-700 transition-colors duration-200 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Get in touch
              </SoftHoverLink>
              <SoftHoverLink
                href="/files/Tavarez-Joel-Resume.pdf"
                download="Tavarez-Joel-Resume.pdf"
                aria-label="Download Resume"
                className="px-3 py-3.5 text-sm font-general-medium text-slate-500 transition-colors duration-200 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300 sm:ml-1"
              >
                <FiDownload className="h-4 w-4" />
                Resume
              </SoftHoverLink>
            </CtaTag>
          </div>

          <ImageWrap
            {...(enableMotion
              ? {
                  initial: { opacity: 0, scale: 0.98 },
                  animate: { opacity: 1, scale: 1 },
                  transition: {
                    duration: 0.7,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {})}
            className="relative"
          >
            <HeroImage />
          </ImageWrap>
        </div>
      </div>
    </section>
  );
};

const AppBanner = () => {
  const mounted = useIsMounted();

  return <HeroContent animated={mounted} />;
};

export default AppBanner;
