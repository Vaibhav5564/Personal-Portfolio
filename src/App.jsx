import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Certificates from "./components/Certificates/Certificates";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Certificates />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  );
}

export default App;