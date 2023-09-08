/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
const colors: any = {
  "React.js": "#61dafb",
  "Node.js": "#215732",
  "Express.js": "",
  MongoDB: "",
  HTML: "",
  CSS: "",
  JavaScript: "",
  "Google Cloud": "",
  AWS: "",
  "Redux Toolkit": "#764abc",
  "Tailwind CSS": "",
  "Material Tailwind": "",
};
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkIcon } from "@heroicons/react/20/solid";
interface projectCardProps {
  name: string;
  description: string;
  image: string;
  deployedLink: string;
  githubURL?: string;
  techStack: string[];
}
const ProjectCard: React.FC<projectCardProps> = (props) => {
  const { name, description, image, deployedLink, githubURL, techStack } =
    props;
  return (
    <Card className=" mx-auto">
      <CardHeader>
        <img
          src={ image ||
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          }
          alt="projectImage"
          className="rounded-md"
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-between mt-2">
        <CardTitle className="flex justify-between items-center leading-6">
          {name}
          <div className="flex gap-4">
            <a href="">
              <LinkIcon className="h-6 w-6 cursor-pointer" />
            </a>
            <a href="">
              <FaGithub className="h-6 w-6 cursor-pointer" />
            </a>
          </div>
        </CardTitle>
        <CardDescription className="mt-3">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((item, index) => {
            return (
              <span key={index} className={`bg-[${colors[item]}]`}>
                <Badge
                  key={item}
                  variant={"outline"}
                  className={`cursor-pointer`}
                >
                  {item}
                </Badge>
              </span>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
