import React from "react";
import { TitleHolder } from "./Components/ContentComp";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { Reveal } from "./animations/AnimationComponent";
const WorkExp = () => {
  return (
    <>
      <TitleHolder>Experience</TitleHolder>
      <Reveal>
        <div className="mt-10 w-full py-10">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon className="bg-highlight" />
                <Typography
                  variant="h6"
                  className="font-600 leading-none text-white track-wide lg:text-lg xl:text-xl"
                >
                  Front-end Developer Intern at Pixel8 Web Solutions &
                  Consultancy Inc
                </Typography>
              </TimelineHeader>
              <TimelineBody className="py-5">
                <Typography variant="small" className="font-400 text-white">
                  I possess proficiency in JavaScript, HTML, and CSS. During my
                  previous internship, I served as a frontend developer, where I
                  gained hands-on experience with technologies such as Node.js,
                  Vue.js, and the Quasar framework at Pixel8. My professional journey
                  has equipped me with a comprehensive skill set, including
                  using Axios to fetch data from APIs. Additionally, I have
                  ventured into quality assurance, taking on the role of a
                  Quality Assurance Officer during the final weeks of my
                  internship. In this role, my responsibilities included
                  evaluating the success of tasks assigned to fellow interns and
                  providing constructive feedback on their code using GitLab.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </Reveal>
    </>
  );
};

export default WorkExp;
