import React from "react";
import { ContentMargin, TitleHolder } from "./Components/ContentComp";
import { Typography } from "@material-tailwind/react";
import Profile from "./assets/portfolio.jpg";
import { Reveal } from "./animations/AnimationComponent";

const AboutMe = () => {
  return (
      <ContentMargin>
        <TitleHolder>About Me</TitleHolder>
        <div className="flex items-center justify-center py-16">
          <Reveal>
            <div className="relative mx-16 hidden xl:block">
              <div className="absolute inset-0 left-5 top-5 h-96 w-full rounded-lg border-4 border-highlight"></div>
              <div>
                <img
                  src={Profile}
                  alt="card-image"
                  className="relative z-10 h-96 max-w-max	 rounded-lg object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-16">
              <Typography
                variant="paragraph"
                className="pb-3 font-400 text-white"
              >
                My name is{" "}
                <strong className="font-700 text-highlight">
                  Rico Littawa
                </strong>
              </Typography>
              <div>
                <Typography
                  variant="small"
                  className="w-96 font-400 text-white"
                >
                  I am a passionate entry-level web developer skilled in both
                  front-end and back-end development. My expertise includes
                  working with React JS for building dynamic and interactive
                  user interfaces, utilizing Tailwind CSS for efficient and
                  responsive styling, and employing PHP and MySQL for robust
                  back-end development. I am enthusiastic about crafting
                  seamless web experiences and dedicated to continuously
                  learning and mastering new technologies to create innovative
                  and user-centric solutions.
                </Typography>
              </div>
              <div className="pt-3">
                <ul className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                  <li>
                    <Typography
                      variant="small"
                      className=" font-700 text-highlight"
                    >
                      Contact
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="font-400 text-white"
                    >
                      +639298289932
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="small"
                      className="font-700 text-highlight"
                    >
                      Email
                    </Typography>
                    <Typography variant="small" className="font-400 text-white">
                      ricolittawa030620@gmail.com
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="small"
                      className="font-700 text-highlight"
                    >
                      Education
                    </Typography>
                    <Typography variant="small" className="font-400 text-white">
                      Bachelor Of Science in Information Technology
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </ContentMargin>
  );
};

export default AboutMe;
