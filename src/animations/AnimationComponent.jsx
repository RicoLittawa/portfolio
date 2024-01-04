import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls= useAnimation()

  useEffect(() => {
    if (isInView){
      mainControls.start("visible")
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const SlideLeft = ({ children }) => (
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: 75,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.25 }}
  >
    {children}
  </motion.div>
);

const SlideRight = ({ children }) => (
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -75,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    {children}
  </motion.div>
);

export { SlideRight, SlideLeft, Reveal };
