import React from "react";
import MainStyleProvider from "./Provider/MainStyleProvider";
import HeroPage from "./HeroPage";
import AboutMe from "./AboutMe";
import SkillsPage from "./SkillsPage";
import ServicesPage from "./ServicesPage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <MainStyleProvider>
      <section id="/" className="py-44">
        <HeroPage />
      </section>
      <section id="about-me" className="bg-dark py-20">
        <AboutMe />
      </section>
      <section id="skills" className="py-20">
        <SkillsPage />
      </section>
      <section id="portfolio" className="bg-dark py-20">
        <PortfolioPage />
      </section>
      <section id="service" className="py-20">
        <ServicesPage />
      </section>
      <section id="contact" className="bg-highlight py-20">
        <ContactPage />
      </section>
    </MainStyleProvider>
  );
};

export default HomePage;
