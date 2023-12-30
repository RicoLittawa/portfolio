import React from "react";
import { Typography } from '@material-tailwind/react'

const ContentMargin = ({ children }) => {
  return <div className="mx-40 border border-red-900">{children}</div>;
};

const TitleHolder = ({ children }) => {
  return (
    <>
      <Typography
        variant="h3"
        className=" text-center font-700  tracking-wide text-highlight"
      >
        {children}
      </Typography>
    </>
  );
};
export { ContentMargin, TitleHolder };
