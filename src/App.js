import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Upcoming_Research from "./components/Upcoming_Research";
import Skills from "./components/Skills";
import SocialMediaLinks from "./components/Social_Media_Links";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Research />
      <Skills />
      <Upcoming_Research />
      <Projects />
      <SocialMediaLinks />
    </main>
  );
}
