/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const About = () => {
  return (
    <div className="h-[85vh] mt-16 grid grid-cols-1 lg:grid-cols-2" id="about">
      {/* Left div */}
      <div className="flex justify-center flex-col px-4 md:px-10 gap-4">
        <h2 className="text-2xl font-semibold">Hi, It&apos;s Me</h2>
        <h1 className="text-4xl font-bold">
          I&apos;m <span className="text-[#f4511e]">Gnana Chandra</span>
        </h1>
        <p className="text-lg font-medium">
          I am a passionate developer with expertise in front-end and back-end
          technologies. I love building engaging and user-friendly digital
          experiences.
        </p>
        <div className="flex gap-10">
          <a href="https://github.com/gnanachandra" target="_blank">
            <FaGithub
              size={25}
              className="cursor-pointer hover:scale-125 duration-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/gnana-chandra-vutukuri-800b01239/"
            target="_blank"
          >
            <FaLinkedinIn
              size={25}
              className="cursor-pointer hover:scale-125 duration-500"
            />
          </a>
          <a href="https://www.instagram.com/gnana_vutukuri/" target="_blank">
            <FaInstagram
              size={25}
              className="cursor-pointer hover:scale-125 duration-500"
            />
          </a>
          <a href="https://twitter.com/gnanachandra30/">
            <FaTwitter
              size={25}
              className="cursor-pointer hover:scale-125 duration-500"
            />
          </a>
          <a href="https://www.facebook.com/gnana.vutukuri/">
            <FaFacebook
              size={25}
              className="cursor-pointer hover:scale-125 duration-500"
            />
          </a>
        </div>
      </div>
      {/* Right div */}
      <div className="flex items-center justify-center">
        <img
          src="/programmerimage.jpg"
          alt="programmer"
          className="lg:h-[80%] lg:w-[80%]"
        />
      </div>
    </div>
  );
};

export default About;
