import Nav from "@/components/nav";
import Hero from "@/components/hero";
import SelectedWork from "@/components/selected-work";
import CaseStudies from "@/components/case-studies";
import Experience from "@/components/experience";
import OpenSource from "@/components/open-source";
import Footer from "@/components/footer";
import AskAboutMe from "@/components/ask-about-me";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="portfolio-layout">
        <Hero />
        <div className="portfolio-content">
          <SelectedWork />
          <Experience />
          <CaseStudies />
          <OpenSource />
          <Footer />
        </div>
      </main>
      <AskAboutMe />
    </>
  );
}
