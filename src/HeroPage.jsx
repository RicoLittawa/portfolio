import React from "react";
import { Typography } from "@material-tailwind/react";
import Lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import AnimatedData from "./assets/Animation - 1703836142406.json";
import { ContentMargin } from "./Components/ContentComp";
import Developer from "./assets/developer.svg";

const HeroPage = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg", // Change renderer type if needed (svg, canvas, html)
      loop: true,
      autoplay: true,
      animationData: AnimatedData, // Pass the imported animation JSON
    });
    return () => {
      anim.destroy(); // Clean up animation when the component unmounts
    };
  }, []);

  const texts = ["Hello I'm", "I'm a"];
  const texts2 = ["Rico Littawa", "WEB DEVELOPER"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="py-20">
        <ContentMargin>
          <div className="hidden justify-evenly lg:flex">
            <div className="py-20 lg:py-40">
              <Typography
                variant="h1"
                className="first-title text-start font-700 text-lightgray"
              >
                {texts[index]}
              </Typography>
              <Typography
                variant="h1"
                className="second-title text-start font-900 tracking-wide text-white"
              >
                {texts2[index] === "WEB DEVELOPER" ? (
                  <>
                    {texts2[index]}
                    <span className="font-900 text-highlight">.</span>
                  </>
                ) : (
                  texts2[index]
                )}
              </Typography>
            </div>
            <div ref={containerRef} className="hidden w-80 xl:w-96 lg:flex ml-10"></div>
          </div>
          <div className="flex justify-center lg:justify-evenly py-24 md:py-32 lg:hidden">
            <div className="animate-pulse">
              <Typography
                variant="h3"
                className="font-700 tracking-wide text-lightgray"
              >
                Hello!
              </Typography>
              <Typography
                variant="h3"
                className="font-900 tracking-wide text-white indent-1"
              >
                I'm a WEB DEVELOPER<span className="text-highlight">.</span>
              </Typography>
            </div>
            <div>
              <img
                src={Developer}
                alt=""
                className="hidden h-36 w-96 md:flex"
              />
            </div>
          </div>
        </ContentMargin>
      </section>
    </>
  );
};

export default HeroPage;
