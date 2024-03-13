"use client";
import { CardHoverEffectDemo } from "@/components/Shared/CardHoverEffectDemo";
import { InfiniteMovingCardsDemo } from "@/components/Shared/InfiniteMovingCardsDemo";
import { LampDemo } from "@/components/Shared/LampDemo";
import { StickyScrollRevealDemo } from "@/components/Shared/StickyScrollRevealDemo";
import { TextRevealCardPreview } from "@/components/Shared/TextRevealCardPreview";
import React from "react";
{/* <LampDemo /> */ }

export function SkillSection() {
  return (
    <div>
      <div className="md:max-w-[1460px]  w-full mx-auto -translate-y-20">

        {/* <div className=" h-20 w-5/12 rounded-3xl backdrop-blur-sm bg-white/30 border-red-700  mx-auto flex justify-center items-center">
          <InfiniteMovingCardsDemo />
        </div>
         */}
        {/* <div className="bg-orange-600 w-full h-4 rounded-xl"></div>
        <div className=" bg-cyan-600  w-full h-4 "></div> */}
      </div>
      <StickyScrollRevealDemo/>

      {/* <TextRevealCardPreview /> */}
    </div>
  );
}
