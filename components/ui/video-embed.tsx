"use client";

import { useState } from "react";

/**
 * Click-to-load YouTube facade: renders the thumbnail locally; the YouTube
 * iframe (and its cookies/JS) only loads after an explicit click. Keeps the
 * page's no-tracking claim honest and costs zero third-party bytes on load.
 */
export function VideoEmbed({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="overflow-hidden rounded-card border border-line bg-recessed">
      {active ? (
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group relative block aspect-video w-full"
          aria-label={`Play demo video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt=""
            loading="lazy"
            width={480}
            height={360}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/40 transition-colors duration-150 group-hover:bg-ink/30">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 translate-x-px">
                <path d="M8 5.14v13.72L19 12 8 5.14Z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 font-mono text-meta text-white">
            Watch demo
          </span>
        </button>
      )}
    </div>
  );
}
