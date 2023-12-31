import React from "react";
import { TitleHolder } from "./Components/ContentComp";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import TaskTracker from "./assets/TaskTracker.png";
import MarkDown from "./assets/MarkDown.png";
import Drum from "./assets/DrumMachine.png";
import Quote from "./assets/Quote.png";
import Inventory from "./assets/Inventory.png";
import Movie from "./assets/Movie.png";
import { Reveal } from "./animations/AnimationComponent";
import { Link } from "react-router-dom";
const PortfolioPage = () => {
  let projects = [
    {
      "QA-Task-Tracker": {
        skills: ["Vue", "Quasar Framework", "Bootstrap"],
        description:
          "This application keeps track of other interns task progress. The tasks and data for the interns can be added, updated, and deleted.",
        link: "https://ricolittawa.github.io/QA-Task-Tracker/#/task",
      },
    },
    {
      "markdown-previewer": {
        skills: ["React", "JavaScript", "Tailwind Css"],
        description:
          "This application allows the user to generate and update mockup HTML, much like a code editor.",
        link: "https://ricolittawa.github.io/markdown-previewer/",
      },
    },
    {
      "drum-machine": {
        skills: ["React", "Javascript", "Tailwind Css"],
        description:
          "Drum machine is an application that lets users make sounds. Every pad contains a variety of sounds so that users can experiment and make their own beats.",
        link: "https://ricolittawa.github.io/drum-machine/",
      },
    },
    {
      "random-quote-machine": {
        skills: ["React", "Javascript", "Tailwind Css"],
        description: "This application generates random quote from an api.",
        link: "https://ricolittawa.github.io/random-quote-machine/",
      },
    },
    {
      "Idonate Management System": {
        skills: ["Jquery", "Bootstrap", "PHP", "MySQL"],
        description:
          "Idonate manages the donors and donations at CDRRMO Batangas City.",
        link: "#",
      },
    },
    {
      "Movie Reservation App": {
        skills: ["MySQL", "Bootstrap", "PHP", "Codeigniter"],
        description:
          "Users can book a seat using this movie reservation app. Users can also view the seats that are available.This app allows users to reserve a seat. Users may also view the available seats",
        link: "#",
      },
    },
  ];
  let picture = {
    "QA-Task-Tracker": TaskTracker,
    "markdown-previewer": MarkDown,
    "drum-machine": Drum,
    "random-quote-machine": Quote,
    "Idonate Management System": Inventory,
    "Movie Reservation App": Movie,
  };
  return (
    <div className="px-20">
      <TitleHolder>Portfolio</TitleHolder>
      <Reveal>
        <div className="grid grid-cols-1 gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const [projectName, details] = Object.entries(project)[0];
            const { skills, description, link } = details || {};
            return (
              <Card
                className="mt-6 h-full w-full bg-dark outline outline-highlight"
                key={index}
              >
                <CardBody>
                  <img
                    src={picture[projectName]}
                    alt=""
                    className="hidden h-60 w-full rounded-lg object-cover object-center shadow-md shadow-red-600 lg:block"
                  />
                  <Link to={link} target="_blank">
                    <Typography
                      variant="h5"
                      className="mt-5 font-700 text-white"
                    >
                      {projectName}
                    </Typography>
                  </Link>
                  <Typography variant="small" className="font-400">
                    {description}
                  </Typography>
                  <div>
                    <ul className="mt-3 ml-4 grid list-disc grid-cols-1 gap-1 lg:grid-cols-3">
                      {skills &&
                        skills.map((skill, index) => (
                          <li key={index}>
                            <Typography
                              variant="small"
                              className="font-400 text-highlight"
                            >
                              {skill}
                            </Typography>
                          </li>
                        ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};

export default PortfolioPage;
