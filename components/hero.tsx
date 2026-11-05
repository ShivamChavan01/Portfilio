import Image from "next/image";
import { site } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, XIcon, FileIcon } from "./ui/icons";

export default function Hero() {
  return (
    <section className="profile-page profile-hero" aria-labelledby="hero-heading">
      <p className="profile-eyebrow">Independent projects & everyday engineering</p>
      <div className="profile-identity">
        <Image
          src="/avatar.png"
          width={64}
          height={64}
          className="profile-avatar"
          priority
          alt="Shivam Chavan"
        />
        <div>
          <h1 id="hero-heading" className="profile-name font-geist">{site.name}</h1>
          <p className="profile-role">{site.title}</p>
        </div>
      </div>
      <p className="profile-location"><span aria-hidden="true">↗</span> {site.location}</p>
      <div className="profile-bio">
        <p>
          I’m a full stack developer at <a href="#experience">Eazytag</a>,
          working on Strivo: class bookings, memberships, payments, and the
          backend systems that keep them in sync.
        </p>
        <p>
          Outside work, I build <a href="#case-study-voicescope">VoiceScope</a>{" "}
          for voice AI call analysis, <a href="#case-study-cutroom">Cutroom</a>{" "}
          for versioned video editing, and <a href="#work">tools for coding agents</a>.
        </p>
      </div>
      <div className="profile-actions">
        <a className="profile-button primary" href={site.resume} target="_blank" rel="noopener noreferrer">
          <FileIcon className="h-3.5 w-3.5" /> Résumé ↗
        </a>
        <a className="profile-button" href={`mailto:${site.email}`}>Say hi ↗</a>
        <a className="profile-button" href="https://cal.com/shivamchavan" target="_blank" rel="noopener noreferrer">Book a call ↗</a>
      </div>
      <div className="profile-socials">
        <a href={site.links.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
        <a href={site.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
        <a href={site.links.x} aria-label="X" target="_blank" rel="noopener noreferrer"><XIcon /></a>
      </div>
    </section>
  );
}
