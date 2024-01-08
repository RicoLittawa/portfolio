import React from "react";
import { Typography } from "@material-tailwind/react";
import { Reveal } from "../animations/AnimationComponent";


const TitleHolder = ({ children, isContactPage }) => {
  return (
    <Reveal>
      <Typography
        variant="h3"
        className={`text-center font-700  tracking-wide ${
          isContactPage ? "text-white" : "text-highlight"
        }`}
      >
        {children}
      </Typography>
    </Reveal>
  );
};
export { TitleHolder };
