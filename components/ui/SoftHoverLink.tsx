import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const springConfig = { stiffness: 260, damping: 28, mass: 0.35 };

type SoftHoverLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  download?: string;
  "aria-label"?: string;
};

/**
 * Quiet micro-hover: soft spring lift + cursor-tracking radial highlight.
 * No aggressive scale.
 */
const SoftHoverLink = ({
  href,
  children,
  className = "",
  download,
  "aria-label": ariaLabel,
}: SoftHoverLinkProps) => {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const highlight = useMotionTemplate`
    radial-gradient(
      140px circle at ${springX}px ${springY}px,
      rgba(29, 78, 216, 0.12),
      transparent 65%
    )
  `;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    const { width, height } = event.currentTarget.getBoundingClientRect();
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  };

  const sharedClassName = `group relative isolate inline-flex overflow-hidden rounded-full ${className}`;
  const motionProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: reducedMotion ? undefined : { y: -2 },
    whileTap: reducedMotion ? undefined : { y: 0 },
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 32,
      mass: 0.4,
    },
  };

  const inner = (
    <>
      {!reducedMotion && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: highlight }}
        />
      )}
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (download) {
    return (
      <motion.a
        href={href}
        download={download}
        aria-label={ariaLabel}
        className={sharedClassName}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <Link href={href} legacyBehavior passHref>
      <motion.a
        aria-label={ariaLabel}
        className={sharedClassName}
        {...motionProps}
      >
        {inner}
      </motion.a>
    </Link>
  );
};

export default SoftHoverLink;
