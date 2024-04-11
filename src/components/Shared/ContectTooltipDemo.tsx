"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaGithub } from "react-icons/fa";
import instagram from "../../../public/instagram_contect.png"
import github from "../../../public/github_contect.png"
import linkedin from "../../../public/linkedin_contect.png"
import location from "../../../public/home.png"
const people = [
  {
    id: 1,
    name: "Git Hub",
    designation: "mitenkumar",
    image: github,

    url: "https://github.com/mitenkumar"
  },
  {
    id: 2,
    name: "Instagram",
    designation: "miten_02",
    image: instagram,
    url: "https://www.instagram.com/miten_02/"

  },
  {
    id: 3,
    name: "Linked In",
    designation: "Miten Patel",
    image: linkedin,
    url: "https://www.linkedin.com/in/miten-patel-8939571b2/"

  },
  {
    id: 4,
    name: "Location",
    designation: "My Home",
    image: location,
    url: "https://maps.app.goo.gl/hxd1M2zPHjEN8g2p9"

  },
];

export function ContectTooltipDemo() {
  return (
    <div className="flex flex-row items-center justify-center w-full my-5">
      <AnimatedTooltip items={people} />
    </div>
  );
}
