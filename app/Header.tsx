"use client";
import React from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-scroll";
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
  return (
    <nav className="fixed z-50 mx-auto block w-full border border-white/80 bg-white py-3 px-4 text-white backdrop-blur-2xl backdrop-saturate-200 lg:px-4 lg:py-4">
      <div>
        <div className="px-4 mx-auto flex items-center justify-between text-gray-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-xl lg:text-xl font-bold leading-normal text-inherit antialiased"
          >
            <span>Gnana Chandra</span>
          </a>
          <ul className="hidden items-center gap-6 lg:flex">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  offset={item.offset}
                  to={item.to}
                  smooth={true}
                  duration={700}
                  className="text-sm font-semibold text-gray-700 hover:text-black cursor-pointer hover:underline  px-2 hover:rounded-full hover:py-[0.3rem]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button className="hidden lg:block w-fit">
            <a
              href="./Gnana_chandra_Vutukuri_Resume.pdf"
              download="Gnana Chandra Resume.pdf"
            >
              <p className="flex">
                Resume
                <ArrowDownIcon className="h-5 w-5 ml-2"></ArrowDownIcon>
              </p>
            </a>
          </Button>

          <button
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="navbar"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                color="red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div
          className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
          data-collapse="navbar"
        >
          <div className="pl-2 mx-auto pb-2">
            <ul className="mt-2 mb-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.name} data-collapse-target="navbar">
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    data-collapse="navbar"
                    className="text-sm font-semibold text-gray-700 hover:text-black cursor-pointer   px-2 hover:rounded-full hover:py-[0.3rem]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <a
                href="./Gnana_chandra_Vutukuri_Resume.pdf"
                download="Gnana Chandra Resume.pdf"
              >
                <Button className="block lg:hidden w-fit">
                  <p className="flex">
                    Resume
                    <ArrowDownIcon className="h-5 w-5 ml-2"></ArrowDownIcon>
                  </p>
                </Button>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></Script>
    </nav>
  );
};

export default Header;
