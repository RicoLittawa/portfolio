import React from "react";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const pages = [
    "HOME",
    "ABOUT ME",
    "SKILLS",
    "PORTFOLIO",
    "SERVICES",
    "CONTACT",
  ];
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const navlist = (
    <ul className="my-3 block justify-center p-5 font-semibold text-white lg:flex">
      {pages.map((page, index) => (
        <li
          key={index}
          className="mx-8 rounded-full hover:bg-white hover:text-highlight lg:hover:bg-[#232323]"
        >
          <Typography variant="h6" className="font-400 md:font-700">
            {page}
          </Typography>
        </li>
      ))}
    </ul>
  );
  return (
    <nav className="mx-auto">
      <div className="desktop-view justify-evenly lg:flex">
        <div className="flex justify-between">
          <img src={Logo} className="w-16 cursor-pointer lg:w-20" alt="logo" />
          <Button
            variant="text"
            onClick={() => setOpenNav(!openNav)}
            className=" lg:hidden"
          >
            <svg
              className="h-6 w-6 text-white"
              x-show="! showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 00 24 24"
              stroke="currentColor"
            >
              <path d="m4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>
        <div className="hidden lg:flex">{navlist}</div>
      </div>

      <div
        className={`mobile-view text-center lg:hidden ${
          !openNav ? "hidden h-10" : ""
        }`}
      >
        {navlist}
      </div>
    </nav>
  );
};

export default Navigation;
