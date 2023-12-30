import React from "react";
import {ContentMargin,TitleHolder} from "./Components/ContentComp";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Profile from "./assets/portfolio.jpg";
import GitHub from "./assets/github.png";
import LinkedIn from "./assets/linkedin.svg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="bg-dark py-20">
      <ContentMargin>
       <TitleHolder>About Me</TitleHolder>
        <div className="flex justify-evenly py-16">
          <div className="relative">
            <div className="square absolute inset-0 left-8 top-14"></div>
            <img
              src={Profile}
              alt="card-image"
              className="w-70 relative z-10 h-96 rounded-lg"
            />
          </div>
          <div>
            <Typography
              variant="paragraph"
              className="pb-3 font-400 text-white"
            >
              My name is{" "}
              <strong className="font-700 text-highlight">Rico Littawa</strong>
            </Typography>
            <div>
              <Typography variant="small" className="w-96 font-400 text-white">
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
              <div className="flex justify-between">
                <div>
                  <Typography
                    variant="small"
                    className="mx-7 font-700 text-highlight"
                  >
                    Contact
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-400 text-white"
                  >
                    +639298289932
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mx-20 font-700 text-highlight"
                  >
                    Email
                  </Typography>
                  <Typography variant="small" className="font-400 text-white">
                    ricolittawa030620@gmail.com
                  </Typography>
                </div>
              </div>
              <div className="py-3 text-center">
                <Typography
                  variant="small"
                  className="mx-20 font-700 text-highlight"
                >
                  Education
                </Typography>
                <Typography variant="small" className="font-400 text-white">
                  Bachelor Of Science in Information Technology
                </Typography>
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
            </div>
          </div>
        </div>
      </ContentMargin>
    </section>
  );
};

export default AboutMe;
