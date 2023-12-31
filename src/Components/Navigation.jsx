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

  const [offsetValue, setOffsetValue] = useState(0);
  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setOffsetValue(-70); // Change the offset value according to your needs
    } else if (window.innerWidth <= 680) {
      setOffsetValue(-100); // Adjust the offset value for smaller screens
    } else {
      setOffsetValue(50); // Default offset value for other screen sizes
    }
  };

  useEffect(() => {
    handleResize(); // Initial load

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(offsetValue);

  //Fix scrolling on different devices
  const navlist = (
    <ul className="flex flex-col gap-2 p-4 font-semibold text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      {pages.map((page, index) => {
        const [p, paths] = Object.entries(page)[0];
        return (
          <li
            key={index}
            className="rounded-full hover:bg-white hover:text-highlight lg:hover:bg-[#232323]"
          >
            <Link
              to={paths}
              spy={true}
              smooth={true}
              offset={offsetValue}
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
  const mobileNavList = (
    <ul className="flex flex-col gap-2 p-4 font-semibold text-white lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      {pages.map((page, index) => {
        const [p, paths] = Object.entries(page)[0];
        return (
          <li
            key={index}
            className="rounded-full hover:bg-white hover:text-highlight lg:hover:bg-[#232323]"
          >
            <Link
              to={paths}
              spy={true}
              smooth={true}
              offset={offsetValue}
              duration={500}
              onClick={() => setOpenNav(!openNav)}
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
    <Navbar className="fixed z-50 mx-auto h-max max-w-full rounded-none border-0 bg-dark lg:bg-[#232323]">
      <div className="justify-evenly lg:flex">
        <div className="flex justify-between">
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
        {mobileNavList}
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
