import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";

function App() {
  return (
    <div className="font-display bg-background-dark text-gray-200">
      <section
        id="home"
        className="relative min-h-screen flex flex-col p-8 md:px-12 lg:px-16 pb-0 md:pb-0 lg:pb-0"
      >
        <Navbar />
        <Hero />
        <SocialSidebar />
        <EmailSidebar />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
