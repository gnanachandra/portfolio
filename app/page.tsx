import React from "react";
import Header from "./Header";
import Projects from "./Projects";
const page = () => {
  return (
    <>
      <Header />
      <div className="py-2 px-4 lg:px-8 lg:py-4">
        <Projects />
      </div>
    </>
  );
};

export default page;
