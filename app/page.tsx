import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
const page = () => {
  return (
    <>
      <Header />
      <div className="py-2 px-4 lg:px-8 lg:py-4">
        <Projects />
        <Skills/>
        <Contact/>
      </div>
    </>
  );
};

export default page;
