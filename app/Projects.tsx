import Image from "next/image";
import React from "react";
import projectsData from "./data/projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-full pt-16">
      {projectsData.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            deployedLink={project.deployedLink}
            githubURL={project.githubURL}
          />
        );
      })}
      {/* <Image
        src={"./nodejs.svg"}
        alt="nodejs"
        width={"30"}
        height={"30"}
        className="cursor-pointer"
      /> */}
    </div>
  );
};

export default Projects;
