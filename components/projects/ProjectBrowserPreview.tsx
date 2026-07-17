import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

type ProjectBrowserPreviewProps = {
  name: string;
  url: string;
  shortUrl: string;
  image: string;
  imageAlt: string;
  glow: string;
  priority?: boolean;
};

const ProjectBrowserPreview = ({
  name,
  url,
  shortUrl,
  image,
  imageAlt,
  glow,
  priority = false,
}: ProjectBrowserPreviewProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group/preview block bg-slate-200 p-2 dark:bg-slate-800 sm:p-3 lg:order-2 lg:flex lg:h-full lg:flex-col lg:border-l lg:border-slate-200 dark:lg:border-slate-700"
    aria-label={`Visit ${name}`}
  >
    <div className="mb-2 flex items-center gap-2 px-2 py-1 sm:mb-3">
      <div className="flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-md bg-white/80 px-4 py-1 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {shortUrl}
      </div>
      <FiExternalLink className="h-4 w-4 text-slate-500 transition-transform group-hover/preview:-translate-y-0.5 group-hover/preview:translate-x-0.5" />
    </div>
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-inner">
      <Image
        src={image}
        alt={imageAlt}
        width={1200}
        height={950}
        sizes="(max-width: 1280px) 100vw, 1200px"
        className="block h-auto w-full transition-transform duration-700 group-hover/preview:scale-[1.015]"
        priority={priority}
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${glow} opacity-0 transition-opacity duration-500 group-hover/preview:opacity-100`}
      />
    </div>
  </a>
);

export default ProjectBrowserPreview;
