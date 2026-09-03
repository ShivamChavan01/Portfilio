import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "@/components/ui/icons";
import { site } from "@/lib/data";

/**
 * Fixed side rails (Brittany Chiang's signature pattern): social icon rail
 * on the left, vertical email rail on the right. Visible only on xl+ where
 * the page column leaves room; hidden on smaller screens.
 */

const SOCIALS = [
  { label: "GitHub", href: site.links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedInIcon },
  { label: "X", href: site.links.x, Icon: XIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
];

export function SideRails() {
  return (
    <>
      <nav
        aria-label="Social links"
        className="fixed bottom-0 left-7 z-40 hidden flex-col items-center gap-5 xl:flex"
      >
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            title={label}
            className="text-ink-muted transition-colors duration-150 hover:text-accent"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div aria-hidden="true" className="h-24 w-px bg-line" />
      </nav>

      <div className="fixed bottom-0 right-7 z-40 hidden flex-col items-center gap-6 xl:flex">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-small text-ink-muted transition-colors duration-150 hover:text-accent [writing-mode:vertical-rl]"
        >
          {site.email}
        </a>
        <div aria-hidden="true" className="h-24 w-px bg-line" />
      </div>
    </>
  );
}
