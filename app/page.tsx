import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Blogs from "./Blogs";
import About from "./About";
import Footer from "./Footer";
import Experience from "./Experience";
const page = () => {
  return (
    <>
      <Header />
      <div className="px-4 py-2 lg:px-8 lg:py-4 ">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Blogs />
        <Contact />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default page;
