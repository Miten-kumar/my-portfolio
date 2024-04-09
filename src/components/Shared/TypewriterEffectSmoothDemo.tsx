"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
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
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-end h-min mt-5">

      <TypewriterEffectSmooth words={words} />
      <HeroHighlightDemo/>
      <p className="text-neutral-600 dark:text-neutral-200 text-base mb-5">
      Hands on In to<span className="text-orange-600">  MERN Stack </span>
      </p>
      <AnimatedTooltipPreview />
    </div>
  );
}
