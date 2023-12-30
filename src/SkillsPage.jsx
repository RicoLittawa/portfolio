import React from "react";
import { ContentMargin, TitleHolder } from "./Components/ContentComp";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SkillsPage = () => {
  let webdevSkills = {
    Languages: ["JavaScript", "PHP"],
    Libraries: ["React JS", "JQUERY"],
    Database: ["Mongo DB", "MYSQL"],
    Frameworks: [
      "VUE JS",
      "QUASAR Framework",
      "Tailwind Css",
      "Bootstrap",
      "CodeIgniter 4",
    ],
    "Editing & Design": ["Photoshop", "Adobe Premiere", "Figma"],
  };
  let topics = [
    "Languages",
    "Libraries",
    "Database",
    "Frameworks",
    "Editing & Design",
  ];
  return (
    <section className="py-20">
      <ContentMargin>
        <TitleHolder>Skills</TitleHolder>
        <div className="grid grid-cols-5 gap-3 py-16">
          {topics.map((topic, index) => (
            <div key={index}>
              <div className="w-full bg-[#232323]">
                <Typography variant="h5" className="mb-2 font-700 text-highlight">
                  {topic}
                </Typography>
                <ul className="list-disc text-highlight ml-6">
                  {(webdevSkills[topic] ?? []).map((skill, index) => (
                    <li key={index}>
                      <Typography className="text-white font-400">{skill}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ContentMargin>
    </section>
  );
};

export default SkillsPage;
