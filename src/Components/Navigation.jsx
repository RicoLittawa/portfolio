import React from "react";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Button, Typography, Navbar, Collapse } from "@material-tailwind/react";
import { Link } from "react-scroll";
const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const pages = [
    {
      HOME: "/",
    },
    {
      "ABOUT ME": "about-me",
    },
    {
      SKILLS: "skills",
    },
    {
      PORTFOLIO: "portfolio",
    },
    {
      SERVICES: "service",
    },
    {
      CONTACT: "contact",
    },
  ];
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const navlist = (
    <ul className="block items-center justify-center p-4 font-semibold text-white lg:flex">
      {pages.map((page, index) => {
        const [p,paths] = Object.entries(page)[0];
        return (
          <li
            key={index}
            className="mx-8 rounded-full hover:bg-white hover:text-highlight lg:hover:bg-[#232323]"
          >
            <Link
              to={paths}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" className="font-400 md:font-700">
                {p}
              </Typography>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <Navbar className="mx-auto max-w-full rounded-none border-0 bg-dark lg:bg-[#232323]">
      <div className="justify-evenly lg:flex">
        <div className="flex justify-between lg:justify-between">
          <img src={Logo} className="w-16 cursor-pointer lg:w-20" alt="logo" />
          <Button
            variant="text"
            onClick={() => setOpenNav(!openNav)}
            className=" lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>
        <div className="hidden lg:flex">{navlist}</div>
      </div>
      <Collapse open={openNav} className="text-center">
        {navlist}
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
