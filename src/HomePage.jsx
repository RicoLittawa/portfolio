import React from "react";
import MainStyleProvider from "./Provider/MainStyleProvider";
import  HeroPage from "./HeroPage";
import AboutMe from "./AboutMe";
import SkillsPage from "./SkillsPage";
import ServicesPage from "./ServicesPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <MainStyleProvider>
      <HeroPage />
      <AboutMe />
      <SkillsPage/>
      <PortfolioPage/>
      <ServicesPage/>
      <ContactPage/>
    </MainStyleProvider>
  );
};

export default HomePage;
