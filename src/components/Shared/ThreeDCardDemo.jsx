"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import cardImage from "../../../public/graph.svg"
import profile_Image from "../../../public/SideImage.png"

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className=" relative items-center flex justify-center">
        <Image src={cardImage}  className="z-0 absolute rounded-xl lg:h-96 w-96 h-72 group-hover/card:shadow-xl text-center " alt="thumbnail"/>
        <Image src={profile_Image}  className=" absolute lg:h-96 h-72 w-64 rounded-xl group-hover/card:shadow-xl " alt="thumbnail"/>
      </CardItem>
    </CardContainer>
  );
}

