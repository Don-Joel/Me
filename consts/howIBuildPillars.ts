import { FiUsers, FiZap, FiCpu } from "react-icons/fi";
import type { Pillar } from "./types";

export const pillars: Pillar[] = [
  {
    icon: FiUsers,
    title: "Leadership",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    description:
      "From Eagle Scout and Junior Assistant Scoutmaster managing a troop of 53 to MLT Career Prep Fellow and project lead at Nourish'd, I've built habits of ownership and mentorship. At Newmark, I lead stakeholder interviews to drive product adoption; at Target I led system design for the checkout pipeline and collaborated across platform, UX, and fulfillment teams under peak traffic.",
  },
  {
    icon: FiZap,
    title: "Optimizing systems",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    description:
      "I'm drawn to systems where small changes compound. At Target I owned the $2B+ same-day delivery flow—improving page speed, reliability, and cross-repo deployments across 6+ micro-frontends, refactoring the bottom-of-funnel experience, and shipping architectural upgrades to Add to Cart that cut errors under peak load. One feature I scoped and implemented is saving $100k/yr.",
  },
  {
    icon: FiCpu,
    title: "AI orchestration",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    description:
      "I work as a product engineer who uses AI to orchestrate code and ship the right product. With Codex and Opus, I design, architect, and implement features end-to-end—focusing on user value, scalability, and clarity rather than just writing code. AI augments how I think and build so I can move faster from idea to production without sacrificing quality or design.",
  },
];
