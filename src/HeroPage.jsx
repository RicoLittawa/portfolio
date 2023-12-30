import React from "react";
import { Typography } from "@material-tailwind/react";
import Lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import AnimatedData from "./assets/Animation - 1703836142406.json";
import { ContentMargin } from "./Components/ContentComp";

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
      <section className="pb-20 pt-10">
        <ContentMargin>
          <div className="flex justify-between">
            <div className="py-40">
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
            <div ref={containerRef} className="w-96"></div>
          </div>
        </ContentMargin>
      </section>
    </>
  );
};

export default HeroPage;
