"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ContectTooltipDemo } from "./ContectTooltipDemo";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import { motion } from "framer-motion";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hey",
    },
    {
      text: "There,",
    },
    {
      text: "I'm",
    },
    {
      text: "Patel",
    },
    {
      text: "Miten",
      className: "dark:text-portfolio-cyan",
    },
  ];
  return (

      <div className="flex flex-col items-center justify-end h-min mt-5">

        <TypewriterEffectSmooth words={words} />
        <HeroHighlightDemo />
        <p className="text-neutral-600 dark:text-neutral-200 text-base mb-5 text-center">
          Hands on In to<span className="text-portfolio-cyan">  MERN Stack </span>
        </p>
        <ContectTooltipDemo />
      </div>
  );
}
