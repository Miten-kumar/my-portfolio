"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import cardImage from "../../../public/graph.svg"
import profile_Image from "../../../public/profilepic_1 (1).png"

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className=" relative border rounded-3xl h-96 w-96  items-center flex justify-center">
        <Image src={cardImage}  className="z-0 absolute rounded-xl h-96 w-96 group-hover/card:shadow-xl text-center " alt="thumbnail"/>
        <Image src={profile_Image}  className=" absolute h-96 w-64 rounded-xl group-hover/card:shadow-xl opacity-55 " alt="thumbnail"/>
      </CardItem>
    </CardContainer>
  );
}

