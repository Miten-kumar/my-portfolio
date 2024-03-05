"use client";
import { InfiniteMovingCardsDemo } from "@/components/Shared/InfiniteMovingCardsDemo";
import { LampDemo } from "@/components/Shared/LampDemo";
import React from "react";
{/* <LampDemo /> */ }

export function SkillSection() {
  return (
    <div className="md:w-11/12 mx-auto flex flex-row justify-between h-10 ">
      <div className="bg-orange-600 rounded-r-lg h-full w-10 "></div>
      <InfiniteMovingCardsDemo />
      <div className=" h-full bg-cyan-600 rounded-l-lg w-10"></div>
    </div>
  );
}
