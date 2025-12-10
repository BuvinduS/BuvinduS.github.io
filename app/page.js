"use client";
import About from "./components/About";
import Header from "./components/Header";
import HeaderTextOnly from "./components/HeaderTextOnly";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactNoForm from "./components/ContactNoForm";
import ContactBars from "./components/ContactBars";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <HeaderTextOnly />
      <About />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
