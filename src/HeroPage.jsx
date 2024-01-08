import React from "react";
import { Typography } from "@material-tailwind/react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import AnimatedData from "./assets/Animation - 1703836142406.json";
import { SlideLeft, SlideRight } from "./animations/AnimationComponent";
import Lines from "./assets/circle2.png";

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

  return (
        <div className="flex items-center justify-center xl:justify-evenly px-20">
          <SlideRight>
            <div className="relative">
              <img
                src={Lines}
                alt=""
                className="absolute inset-0 h-72 w-full animate-pulse object-scale-down object-center lg:h-96"
              />
              <div className="relative z-10 py-20 lg:py-40">
                <Typography className="text-center lg:text-start font-900 text-3xl text-white lg:text-4xl">
                  Hey, I'm Rico
                </Typography>
                <Typography className="lg:inline text-center lg:text-start font-900 text-3xl tracking-wide text-white lg:text-4xl">
                  I'm a <span className=" text-red-700">WEB DEVELOPER</span>
                </Typography>
              </div>
            </div>
          </SlideRight>
          <SlideLeft>
            <div
              ref={containerRef}
              className="hidden w-80 lg:flex xl:w-96"
            ></div>
          </SlideLeft>
        </div>
  );
};

export default HeroPage;
