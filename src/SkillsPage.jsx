import React from "react";
import { TitleHolder } from "./Components/ContentComp";
import { Typography } from "@material-tailwind/react";
import { Reveal } from "./animations/AnimationComponent";
import WorkExp from "./WorkExp";

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
    <div className="px-20">
      <TitleHolder>Skills</TitleHolder>
      <Reveal>
        <div className="grid grid-cols-1 place-items-center gap-3 py-16 md:grid-cols-3 lg:place-items-baseline xl:grid-cols-5">
          {topics.map((topic, index) => (
            <div key={index}>
              <div className="w-full bg-[#232323]">
                <Typography
                  variant="h5"
                  className="mb-2 font-700 text-highlight"
                >
                  {topic}
                </Typography>
                <ul className="ml-6 list-disc text-highlight">
                  {(webdevSkills[topic] ?? []).map((skill, index) => (
                    <li key={index}>
                      <Typography className="font-400 text-white">
                        {skill}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <WorkExp />
    </div>
  );
};

export default SkillsPage;
