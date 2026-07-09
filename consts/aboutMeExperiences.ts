import {
  FiBriefcase,
  FiLayers,
  FiMapPin,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    icon: FiBriefcase,
    title: "Current Role at Newmark",
    period: "Present",
    company: "Newmark",
    description:
      "I currently work at Newmark as a product engineer building a new in-house leasing and transaction platform for commercial real estate brokers. I use AI to orchestrate development end-to-end—architecting and shipping high-impact features across the front end and backend, with an emphasis on scalability, reliability, and clear user value.",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: FiMapPin,
    title: "dallasbillboardconnection.com",
    period: "Present",
    company: "Billboard Connection",
    description:
      "Built an end-to-end web application for a $4M annual revenue billboard advertising agency. Handled everything from initial stakeholder product discovery to full-stack implementation, utilizing Next.js, Node, and Vercel. Engineered a programmatic SEO strategy, authored targeted conversion copy, and integrated a custom Resend data pipeline for real-time, asynchronous CTA tracking. The platform achieves a perfect 100/100 performance score across all four Google Lighthouse metrics with zero-downtime CI/CD deployment.",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: FiTarget,
    title: "Early Career at Target",
    period: "2020 - 2025",
    company: "Target Corporation",
    description:
      "I graduated with a Computer Science degree from the University of Virginia and began my career at Target Corporation as a software engineer. During my time at Target, I delivered large-scale front-end features for Target.com, most recently engineering the Same Day Delivery (Shipt) experience. I previously worked on Target's digital payments platform, where I helped implement SNAP as a supported tender on Target.com.",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: FiTrendingUp,
    title: "Interests & Goals",
    period: "Always",
    company: "Personal Growth",
    description:
      "I have a strong interest in performance, systems thinking, and building technology that solves real business problems. Outside of engineering, I stay engaged with emerging technology and macroeconomics, and I maintain a long-standing commitment to fitness, nutrition, and continuous learning. My goal is to create software products that meaningfully improve the way people work and live.",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];
