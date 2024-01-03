import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SlideLeft = ({ children }) => {
  return (
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
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const SlideRight = ({ children }) => {
  return (
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
};

export { SlideRight, SlideLeft };
