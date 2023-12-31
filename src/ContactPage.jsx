import React from "react";
import { TitleHolder } from "./Components/ContentComp";
import { Typography } from "@material-tailwind/react";
import Contact from "./assets/contact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GitHub from "./assets/github.png";
import LinkedIn from "./assets/linkedin.svg";
import { Reveal } from "./animations/AnimationComponent";

const ContactPage = () => {
  let informations = [
    {
      "My Address": {
        icon: faLocation,
        description: "Barangay Balagtas Batangas City 4200",
      },
    },
    {
      "My Email": {
        icon: faEnvelope,
        description: "ricolittawa030620@gmail.com",
      },
    },
    {
      "My Contact": {
        icon: faPhone,
        description: "+639298289932",
      },
    },
  ];
  return (
    <div className="px-20">
      <TitleHolder isContactPage={true}>Contact Me</TitleHolder>
      <Reveal>
        <div className="flex justify-center py-16 xl:justify-evenly">
          <div className="grid grid-cols-1 gap-2">
            {informations.map((information, infoIndex) => {
              const [infoName, desc] = Object.entries(information)[0];
              const { icon, description } = desc || {};
              return (
                <span key={infoIndex}>
                  <Typography
                    variant="paragraph"
                    className="font-700 text-white"
                  >
                    <FontAwesomeIcon icon={icon} className="mr-3"/>
                    {infoName}
                  </Typography>
                  <Typography variant="small" className="font-400 text-white">
                    {description}
                  </Typography>
                </span>
              );
            })}
          </div>
          <div className="hidden lg:block">
            <img src={Contact} alt="" className="w-72" />
          </div>
        </div>
        <div className="flex justify-center pt-3">
          <div className="px-5">
            <Link to="https://github.com/RicoLittawa" target="_blank">
              <img src={GitHub} className="h-10" alt="" />
            </Link>
          </div>
          <div className="px-5">
            <Link
              to="https://www.linkedin.com/in/rico-littawa/"
              target="_blank"
            >
              <img src={LinkedIn} className="h-10" alt="" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ContactPage;
