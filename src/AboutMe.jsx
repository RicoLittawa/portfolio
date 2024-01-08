import React from "react";
import { TitleHolder } from "./Components/ContentComp";
import { Typography } from "@material-tailwind/react";
import Profile from "./assets/portfolio.jpg";
import { Reveal } from "./animations/AnimationComponent";

const AboutMe = () => {
  const contactDetails = [
    {
      Contact: "+639298289932",
    },
    {
      Email: "ricolittawa030620@gmail.com",
    },
    {
      Education: "Bachelor Of Science in Information Technology",
    },
  ];
  return (
    <div className="px-20">
      <TitleHolder>About Me</TitleHolder>
      <div className="flex justify-center py-16 lg:items-center lg:gap-20">
        <Reveal>
          <div className="hidden lg:relative xl:block">
            <div className="absolute inset-0 left-5 top-5 h-96 w-full rounded-lg border-4 border-highlight"></div>
            <div>
              <img
                src={Profile}
                alt="card-image"
                className="z-10 h-96 max-w-max rounded-lg	 object-cover object-center lg:relative"
              />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <Typography
              variant="paragraph"
              className="pb-3 font-400 text-white"
            >
              My name is{" "}
              <strong className="font-700 text-highlight">Rico Littawa</strong>
            </Typography>
            <div>
              <Typography
                variant="small"
                className="w-full font-400 text-white lg:w-96"
              >
                I am a passionate entry-level web developer skilled in both
                front-end and back-end development. My expertise includes
                working with React JS for building dynamic and interactive user
                interfaces, utilizing Tailwind CSS for efficient and responsive
                styling, and employing PHP and MySQL for robust back-end
                development. I am enthusiastic about crafting seamless web
                experiences and dedicated to continuously learning and mastering
                new technologies to create innovative and user-centric
                solutions.
              </Typography>
            </div>
            <div className="pt-3">
              <ul>
                {contactDetails.map((contacts, index) => {
                  const [contact, details] = Object.entries(contacts)[0];
                  return (
                    <li className="py-1" key={index}>
                      <Typography
                        variant="small"
                        className=" font-700 text-highlight"
                      >
                        {contact}
                      </Typography>
                      <Typography
                        variant="paragraph"
                        className="font-400 text-white"
                      >
                        {details}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutMe;
