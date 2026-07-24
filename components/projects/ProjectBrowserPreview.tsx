import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

type ProjectBrowserPreviewProps = {
  name: string;
  url: string;
  shortUrl: string;
  image: string;
  imageAlt: string;
  video?: string;
  priority?: boolean;
};

const ProjectBrowserPreview = ({
  name,
  url,
  shortUrl,
  image,
  imageAlt,
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
      className="group/preview block p-3 sm:p-4 lg:order-2"
      aria-label={`Visit ${name}`}
    >
      <div className="mb-3 flex items-center gap-2 px-1">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-full bg-white px-4 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {shortUrl}
        </div>
        <FiExternalLink className="h-4 w-4 text-slate-400 transition-transform group-hover/preview:-translate-y-0.5 group-hover/preview:translate-x-0.5" />
      </div>
      <div className="relative aspect-[1200/950] overflow-hidden rounded-2xl bg-white dark:bg-slate-950">
        {showVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.01]"
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
            className="object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.01]"
            priority={priority}
          />
        )}
      </div>
    </a>
  );
};

export default ProjectBrowserPreview;
