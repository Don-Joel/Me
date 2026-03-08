"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";

const MIN_DURATION = 0.25;

type Props = {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  cursor?: boolean;
  cursorChar?: string;
};

const TypewriterText = ({
  text,
  className = "",
  duration = 1.5,
  delay = 0,
  cursor = true,
  cursorChar = "|",
}: Props) => {
  const [visibleLength, setVisibleLength] = useState(0);
  const lastLengthRef = useRef(0);

  useEffect(() => {
    lastLengthRef.current = 0;
    const effectiveDuration = Math.max(
      duration * (text.length / 20),
      MIN_DURATION
    );
    const controls = animate(0, text.length, {
      duration: effectiveDuration,
      delay,
      ease: "linear",
      onUpdate: (v) => {
        const next = Math.round(v);
        if (next !== lastLengthRef.current) {
          lastLengthRef.current = next;
          setVisibleLength(next);
        }
      },
    });
    return () => controls.stop();
  }, [text, duration, delay]);

  return (
    <span className={className}>
      {text.slice(0, visibleLength)}
      {cursor && visibleLength < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          aria-hidden
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
};

export default TypewriterText;
