import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Blogs from "./Blogs";
import About from "./About";
import Footer from "./Footer";
const page = () => {
  return (
    <>
      <Header />
      <div className="py-2 px-4 lg:px-8 lg:py-4 ">
        <About />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default page;
