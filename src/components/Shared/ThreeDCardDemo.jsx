"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import cardImage from "../../../public/graph.svg"
import cardImageTwo from "../../../public/IMG_20240303_112040-removebg-preview.png"

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className="overflow-hidden h-96 grayscale hover:grayscale-0 w-96 relative border-2 rounded-full flex justify-center">
        <Image src={cardImage} width={500} className="z-0 absolute rounded-xl group-hover/card:shadow-xl bottom" alt="thumbnail"/>
        <Image src={cardImageTwo} width={250} className=" z-10 absolute rounded-xl group-hover/card:shadow-xl  " alt="thumbnail"/>
      </CardItem>
    </CardContainer>
  );
}

