import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

type ProjectBrowserPreviewProps = {
  name: string;
  url: string;
  shortUrl: string;
  image: string;
  imageAlt: string;
  glow: string;
  video?: string;
  priority?: boolean;
};

const ProjectBrowserPreview = ({
  name,
  url,
  shortUrl,
  image,
  imageAlt,
  glow,
  video,
  priority = false,
}: ProjectBrowserPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [preferStatic, setPreferStatic] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPreferStatic(media.matches);
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    if (preferStatic) {
      node.pause();
      return;
    }
    void node.play().catch(() => undefined);
  }, [preferStatic, video]);

  const showVideo = Boolean(video) && !preferStatic;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/preview block bg-slate-200 p-2 dark:bg-slate-800 sm:p-3 lg:order-2 lg:border-l lg:border-slate-200 dark:lg:border-slate-700"
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
      <div className="relative aspect-[1200/950] overflow-hidden rounded-2xl bg-white shadow-inner">
        {showVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.015]"
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            aria-label={imageAlt}
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.015]"
            priority={priority}
          />
        )}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${glow} opacity-0 transition-opacity duration-500 group-hover/preview:opacity-100`}
        />
      </div>
    </a>
  );
};

export default ProjectBrowserPreview;
