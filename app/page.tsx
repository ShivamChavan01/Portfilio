import Nav from "@/components/nav";
import Hero from "@/components/hero";
import SelectedWork from "@/components/selected-work";
import CaseStudies from "@/components/case-studies";
import Experience from "@/components/experience";
import OpenSource from "@/components/open-source";
import Footer from "@/components/footer";
import { SideRails } from "@/components/side-rails";

export default function Home() {
  return (
    <>
      <Nav />
      <SideRails />
      <main id="main">
        <Hero />
        <SelectedWork />
        <CaseStudies />
        <Experience />
        <OpenSource />
      </main>
      <Footer />
    </>
  );
}
