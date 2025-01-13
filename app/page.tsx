"use client";

import Navbar from "../components/navbar";
import introduction from "./introduction";
import Skills from "@/components/skills";
import Project from "@/components/projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Home = () => {
  const sectionTitles = ["Introduction", "Skills", "Projects", "Contact Me"];

  useEffect(() => {
    const key = process.env.KEY;
    console.log("Environment Key:", key);
  }, []);

  return (
    <div className="dark">
      <Navbar sectionTitles={sectionTitles} />

      <section id="section1" className="h-screen bg-gray-800 mt-8 flex items-center justify-center">
        <div className="container mx-auto text-center">
          <img
            src="/dp.jpg"
            alt="Profile Picture"
            className="rounded-full w-64 h-64 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-4">Hello, I&apos;m Affan Ahmed!</h1>
          <p className="text-lg text-gray-300">{introduction}</p>
        </div>
      </section>

      <section id="section2" className="min-h-screen bg-gray-700 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Skills</h1>
        <div className="w-full max-w-7xl overflow-hidden">
          <Skills />
        </div>
      </section>

      <section id="section3" className="min-h-screen bg-gray-600 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
        <Project />
      </section>

      <section id="section4" className="h-screen bg-gray-500 flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
