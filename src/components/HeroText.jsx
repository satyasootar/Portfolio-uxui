"use client";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./TextGenerateEffect";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function HeroText() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {/* Text generation effect for headline */}
      <TextGenerateEffect
        words="Hi there,👋 I craft clean, clever user journeys — code included."
        className="text-title font-figtree font-bold leading-8 laptop:leading-15"
        delayPerWord={0.08}
        duration={0.4}
      />

      {/* Staggered reveal for paragraph */}
      <motion.div
        variants={item}
        className="text-paragraph text-secondary-text font-archivo leading-[1.02288rem] py-6 tablet:w-[41.57263rem] tablet:leading-[1.52288rem] laptop:text-[1.1rem]"
      >
        Caffeine-fueled product designer. Designing seamless AI, SaaS & E-commerce
        experiences. Fluent in Figma, wired for wireframes, and always tweaking.
      </motion.div>
    </motion.div>
  );
}
