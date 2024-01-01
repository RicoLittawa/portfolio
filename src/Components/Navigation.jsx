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
  const navlist = (
    <ul className="my-3 block justify-center p-5 font-semibold text-white lg:flex">
      {pages.map((page, index) => (
        <li key={index} className="mx-8 hover:text-highlight">
          <Typography variant="h6" className="font-400 md:font-700">
            {page}
          </Typography>
        </li>
      ))}
    </ul>
  );
  return (
    <nav className="mx-auto">
      <div className="desktop-view hidden justify-evenly lg:flex">
        <img
          src={Logo}
          className="cursor-pointer border-red-900 w-20"
          alt="logo"
        />
        <div>{navlist}</div>
      </div>
      <Button
        variant="text"
        onClick={() => setOpenNav(!openNav)}
        className="lg:hidden p-5"
      >
        <svg
          class="h-6 w-6 text-gray-500"
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
