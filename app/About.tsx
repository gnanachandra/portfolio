/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

const About = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/gnanachandra",
      icon: Github,
      color: "hover:text-gray-900 hover:bg-gray-100",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gnana-chandra-vutukuri-800b01239/",
      icon: Linkedin,
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
  ];

  return (
    <div
      className="min-h-screen"
      id="about">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="order-2 space-y-8 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-3 py-1 text-sm font-medium text-orange-800 bg-orange-100 rounded-full">
                  👋 Hello there!
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
                I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Gnana Chandra
                </span>
              </h1>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-700 lg:text-2xl">
                  Full-Stack Developer & Cloud Enthusiast
                </h2>
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              I am a dedicated full-stack developer with a strong affinity for
              cloud technologies. Continuously driven to expand my skill set, I
              thrive on embracing new challenges and staying at the forefront of
              emerging technologies.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-gray-200 text-gray-600 transition-all duration-300 ${social.color} transform hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}>
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:shadow-xl"
                asChild>
                <a
                  href="mailto:gnanachandra2003@gmail.com"
                  className="flex items-center gap-2">
                  <Mail size={18} />
                  Get In Touch
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                asChild>
                <a
                  href="./Gnana_Chandra_Vutukuri_resume.pdf"
                  download="Gnana Chandra Resume.pdf"
                  className="flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-400 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative p-4 bg-white rounded-full shadow-2xl">
                <img
                  src="/programmerimage.jpg"
                  alt="Gnana Chandra - Full Stack Developer"
                  className="object-cover border-4 border-white rounded-full shadow-xl w-80 h-80 lg:w-96 lg:h-96"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute p-3 text-white bg-orange-500 rounded-full shadow-lg -top-4 -right-4 animate-bounce">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute p-3 text-white delay-1000 bg-blue-500 rounded-full shadow-lg -bottom-4 -left-4 animate-bounce">
                <span className="text-2xl">☁️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
