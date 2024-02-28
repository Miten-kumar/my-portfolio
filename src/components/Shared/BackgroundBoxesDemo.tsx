"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import ProfilebackgroundImage from "../../../public/profile_picture.png"
// import ProfilebackgroundImage from "../../../public/blob.svg"
import Image from "next/image";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg ">
      <div className="absolute inset-0 w-full h-full bg-slate-900  [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="grid grid-cols-2  w-9/12  height-full justify-center items-center">
        <div className="">
          <TypewriterEffectSmoothDemo />
        </div>
        <div className="grayscale hover:grayscale-0 flex justify-end items-start">
          <ThreeDCardDemo/>
        </div>
      </div>

      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}
