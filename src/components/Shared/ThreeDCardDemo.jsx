"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import cardImage from "../../../public/blob.svg"
import profile_Image from "../../../public/SideImage.png"

export function ThreeDCardDemo() {
  return (
      <CardContainer className="inter-var">
        <CardItem translateZ="100" className=" relative items-center flex justify-center ">
          <Image src={cardImage} className="-z-10 absolute rounded-xl w-96 mt-10 group-hover/card:shadow-xl right-0 left-4 text-center " alt="thumbnail" />

          <Image src={profile_Image} className=" absolute lg:h-96 h-72 width-card rounded-xl group-hover/card:shadow-xl " alt="thumbnail" />
        </CardItem>
      </CardContainer>
  );
}

