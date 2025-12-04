"use client";
import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Qualifications />
      <Projects />
    </>
  );
}
