import React from "react";
import { Typography } from "@material-tailwind/react";

const ContentMargin = ({ children }) => {
  return <div className="mx-40">{children}</div>;
};

const TitleHolder = ({ children, isContactPage }) => {
  return (
    <>
      <Typography
        variant="h3"
        className={`text-center font-700  tracking-wide ${
          isContactPage ? "text-white" : "text-highlight"
        }`}
      >
        {children}
      </Typography>
    </>
  );
};
export { ContentMargin, TitleHolder };
