import type { IconType } from "react-icons";

export type Technology = {
  name: string;
  slug: string | null;
  url: string;
};

export type Pillar = {
  icon: IconType;
  title: string;
  iconBg: string;
  iconColor: string;
  description: string;
};

export type Experience = {
  icon: IconType;
  title: string;
  period: string;
  company: string;
  description: string;
  iconBg: string;
  iconColor: string;
};
