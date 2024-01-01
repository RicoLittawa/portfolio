import React from "react";
import { ContentMargin, TitleHolder } from "./Components/ContentComp";
import { Typography, Button } from "@material-tailwind/react";
import Contact from "./assets/contact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

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
    <section className="bg-highlight py-20">
      <ContentMargin>
        <TitleHolder isContactPage={true}>Contact Me</TitleHolder>
        <div className="flex justify-center py-16">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {informations.map((information, infoIndex) => {
              const [infoName, desc] = Object.entries(information)[0];
              const { icon, description } = desc || {};
              return (
                <span key={infoIndex}>
                  <Typography
                    variant="paragraph"
                    className="font-700 text-white"
                  >
                    {" "}
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {infoName}
                  </Typography>
                  <Typography variant="small" className="font-400 text-white">
                    {description}
                  </Typography>
                </span>
              );
            })}
            <div>
              <Button variant="filled" className="bg-dark">
                <Typography variant="small" className="font-400 normal-case">
                  Message me
                </Typography>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={Contact} alt="" className="w-72" />
          </div>
        </div>
      </ContentMargin>
    </section>
  );
};

export default ContactPage;
