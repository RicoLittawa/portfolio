import React from "react";
import { ContentMargin, TitleHolder } from "./Components/ContentComp";

const ContactPage = () => {
  return (
    <section className="bg-highlight py-20">
      <ContentMargin>
        <TitleHolder isContactPage={true}>Contact Me</TitleHolder>
      </ContentMargin>
    </section>
  );
};

export default ContactPage;
