"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { ResumeButton } from "./About";

const menuItems = [
  {
    name: "About",
    to: "about",
    offset: -20,
  },
  {
    name: "Projects",
    to: "projects",
    offset: -20,
  },
  {
    name: "Skills",
    to: "skills",
    offset: -70,
  },
  {
    name: "Experience",
    to: "experience",
    offset: -70,
  },
  {
    name: "Blogs",
    to: "blogs",
    offset: -30,
  },
  {
    name: "Contact",
    to: "contact",
    offset: -40,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-transparent transition-all duration-300 lg:text-3xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text hover:from-orange-600 hover:to-red-600"
            >
              Gnana Chandra
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-baseline ml-10 space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={700}
                  offset={item.offset}
                  className="relative px-3 py-2 text-sm font-semibold text-gray-700 transition-colors duration-300 cursor-pointer hover:text-orange-500 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden lg:block w-fit">
            <ResumeButton className="text-orange-500 transition-all duration-300 border-2 border-orange-500 hover:bg-orange-500 hover:text-white" />
           </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 hover:bg-orange-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 rounded-b-lg shadow-lg bg-white/95 backdrop-blur-md">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={item.offset}
                onClick={closeMenu}
                className="block px-3 py-3 text-base font-semibold text-gray-700 transition-colors duration-300 rounded-md cursor-pointer hover:text-orange-500 hover:bg-orange-50"
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-4 w-fit">
              <ResumeButton className="w-full text-orange-500 transition-all duration-300 border-2 border-orange-500 hover:bg-orange-500 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
