import Image from "next/image";
import React from "react";
import projectsData from "./data/projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center md:mb-7">
        <h1 className="text-3xl lg:text-4xl font-medium mb-2 text-gray-900">
          Projects
        </h1>
        <p className="text-lg font-medium leading-relaxed text-gray-500 ">
          Browse through my featured projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-10 mx-auto h-full">
        {projectsData.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
              techStack={project.techStack}
              deployedLink={project.deployedLink || ""}
              githubURL={project.githubURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
