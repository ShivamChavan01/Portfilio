/** Section 05 · Contact — serif close, email first, plain text links. */
import { contact, site } from "@/lib/data";
import { CalEmbed } from "@/components/ui/cal-embed";

const RESUME_URL = "https://drive.google.com/file/d/1iL4V8Xgu5MAHFp6fuh-EW8Q6fxM3L4Yo/view";
const CAL_LINK = "shivamchavan";

const LINKS = [
  { label: "GitHub", href: site.links.github, external: true },
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "X", href: site.links.x, external: true },
  ...(site.links.spotify
    ? [{ label: "Spotify", href: site.links.spotify, external: true }]
    : []),
  { label: "Resume", href: RESUME_URL, external: true },
  { label: `Phone · ${site.phone}`, href: `tel:${site.phone.replace(/\s/g, "")}`, external: false },
  { label: "Book a call ↗", href: `https://cal.com/${CAL_LINK}`, external: true },
];

/** Derives an open.spotify.com/embed path from any public Spotify URL. */
function spotifyEmbedPath(url: string): string | null {
  const match = url.match(/open\.spotify\.com\/(playlist|album|artist|track|show|episode)\/([A-Za-z0-9]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?theme=0` : null;
}

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
        <div className="flex items-center gap-4">
          <h2
            id="contact-heading"
            className="shrink-0 font-mono text-label font-medium uppercase text-ink-muted"
          >
            <span aria-hidden="true" className="text-ink-faint">
              05 ·{" "}
            </span>
            CONTACT
          </h2>
          <div aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>

        <p className="mt-8 max-w-2xl text-display font-display text-ink">
          Got something <span className="text-accent">worth building</span>?
        </p>
        <p className="mt-4 max-w-[52ch] text-lead text-ink-2">{contact.closing}</p>

        <p className="mt-8">
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-lg text-ink underline decoration-line-strong underline-offset-8 transition-colors duration-150 hover:text-accent hover:decoration-accent"
          >
            {site.email}
          </a>
        </p>

        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-small">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-ink-2 transition-colors duration-150 hover:text-accent"
            >
              {link.label}
              {link.external ? <span aria-hidden="true" className="ml-0.5">↗</span> : null}
            </a>
          ))}
        </p>

        {site.links.spotify && spotifyEmbedPath(site.links.spotify) ? (
          <div className="mt-10 max-w-xl">
            <p className="font-mono text-label font-medium uppercase text-ink-muted">Listening</p>
            <iframe
              src={spotifyEmbedPath(site.links.spotify)!}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify embed"
              className="mt-3 rounded-xl border border-line"
            />
          </div>
        ) : null}

        <div className="mt-12">
          <div className="flex items-center gap-4">
            <p className="shrink-0 font-mono text-label font-medium uppercase text-ink-muted">
              Book a call
            </p>
            <div aria-hidden="true" className="h-px flex-1 bg-line" />
          </div>
          <p className="mt-4 max-w-[52ch] text-small text-ink-2">
            Pick a slot on my calendar, no back-and-forth emails.
          </p>
          <div className="mt-4">
            <CalEmbed calLink={CAL_LINK} label="Open my calendar" />
          </div>
        </div>

        <p className="mt-12 font-mono text-caption text-ink-faint">
          {contact.colophon} · {contact.buildNote}
        </p>
      </div>
    </footer>
  );
}
