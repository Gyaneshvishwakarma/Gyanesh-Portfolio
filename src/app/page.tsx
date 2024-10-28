import Image from "next/image";
import Navbar from "../../pages/Navbar";
import HeroSection from "../../pages/HeroSection";
import AboutSection from "../../pages/AboutSection";
import ProjectSection from "../../pages/ProjectSection";
import Footer from "../../pages/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <Footer/>
    </main>
  );
}
