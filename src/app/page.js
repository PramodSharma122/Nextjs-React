
import { AppFooter, AppHeader } from "@cct/components";
import About from "@cct/components/About";
import Contact from "@cct/components/Contact";
import Experiences from "@cct/components/Experiences";
import HeroSection from "@cct/components/HeroSection";
import Projects from "@cct/components/Projects";
import Skills from "@cct/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <AppHeader/>
    <HeroSection/>
    <About/>
    <Skills/>
    <Projects/>
    <Experiences/>
    <Contact/>
    <AppFooter/>
    </>
  );
}