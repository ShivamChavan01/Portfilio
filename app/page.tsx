import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import SelectedWork from "@/components/selected-work";
import CaseStudies from "@/components/case-studies";
import Experience from "@/components/experience";
import OpenSource from "@/components/open-source";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <SelectedWork />
        <CaseStudies />
        <Experience />
        <OpenSource />
      </main>
      <Footer />
    </>
  );
}
