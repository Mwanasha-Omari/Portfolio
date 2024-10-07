import Image from "next/image";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import CardSection from "./CardView";
import Skills from "./Skills";
import FooterContent from "./Footer";

export default function Home() {
  return (
      <main >
       <Navbar/>
       <LandingPage/>
       <AboutMe/>
       <CardSection/>
       <Skills/>
       <FooterContent/>
      </main>

  );
}

