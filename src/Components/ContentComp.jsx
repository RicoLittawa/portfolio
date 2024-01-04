import React from "react";
import { Typography } from "@material-tailwind/react";
import { Reveal } from "../animations/AnimationComponent";

const ContentMargin = ({ children }) => {
  return <div className="mx-40">{children}</div>;
};

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
export { ContentMargin, TitleHolder };
