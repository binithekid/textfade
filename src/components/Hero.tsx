import React from "react";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Hero = () => {
  const lines = [
    "Imagine a place that enables you to focus & thrive.",
    "A professional, vibrant, and cozy space.",
    "A healthy and productive working environment.",
    "It’s the simple things.",
    "Pleasant. Useful. Distinctive.",
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // Delay between lines
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -10, y: 20, filter: "blur(20px)" }, // Start off-screen, blurry, and invisible
    visible: {
      opacity: 1,
      x: 0,
      y: 0, // Slide into position
      filter: "blur(0px)", // Remove blur
      transition: {
        duration: 0.8, // Smooth fade, blur removal, and slide
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className={` ${raleway.className} h-screen flex items-center justify-start bg-gradient-to-br from-gray-300 via-white to-white text-gray-800`}
    >
      <motion.div
        className="space-y-6 px-40 text-left" // Left-aligned with padding
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, index) => (
          <motion.p
            key={index}
            className="text-2xl md:text-4xl font-medium"
            variants={child}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
