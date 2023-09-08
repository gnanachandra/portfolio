import Image from "next/image";
import React from "react";
import projectsData from "./data/projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h3 className="text-black mx-auto w-fit text-3xl lg:text-4xl font-bold mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 h-full gap-10 mx-auto w-full">
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
      </div>
    </div>
  );
};

export default Projects;
