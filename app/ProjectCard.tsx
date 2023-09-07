/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
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
    <Card>
      <CardHeader>
        <img
          src={
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          }
          alt="projectImage"
          className="rounded-md"
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-between">
        <CardTitle>{name}</CardTitle>
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
