import React from "react";
import { ContentMargin, TitleHolder } from "./Components/ContentComp";
import { Typography } from "@material-tailwind/react";
import Code from "./assets/code.svg";
import Edit from "./assets/edit.svg";
import Design from "./assets/design.svg";
const ServicesPage = () => {
  let services = [
    {
      "FullStack Web Development": {
        picture: Code,
        description:
          "I specialize in crafting user-friendly and responsive applications, ensuring an enhanced user experience using latest technologies.",
      },
    },
    {
      "Web Design": {
        picture: Design,
        description:
          "My capabilities extend to designing comprehensive prototypes and mockups with proficiency and expertise.",
      },
    },
    {
      "Video and Photo Editing": {
        picture: Edit,
        description:
          "Cultivating my skills, I excel in crafting innovative designs while also possessing proficiency in photo and video editing.",
      },
    },
  ];
  return (
    <section className="py-20">
      <ContentMargin>
        <TitleHolder>Services</TitleHolder>
        <div className="py-16">
          <Typography variant="h3" className="font-700 text-white">
            What I can offer?
          </Typography>
          <ul className="grid grid-cols-3 place-items-center pt-5 text-center">
            {services.map((service, index) => {
              const [serviceName, content] = Object.entries(service)[0];
              const { picture, description } = content || {};
              return (
                <li key={index}>
                  <figure>
                    <img
                      className="h-40 w-96 rounded-lg "
                      src={picture}
                      alt={serviceName}
                    />
                    <Typography
                      as="caption"
                      variant="small"
                      className="mt-2 text-center font-normal"
                    >
                      <Typography
                        variant="paragraph"
                        className="mt-2 font-700 text-highlight"
                      >
                        {serviceName}
                      </Typography>
                    </Typography>
                  </figure>
                  <div className="mt-5">
                    <Typography variant="small" className="font-400 text-white">{description}</Typography>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </ContentMargin>
    </section>
  );
};

export default ServicesPage;
